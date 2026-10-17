/* Supabase adapter: exposes window.CS, the only interface app.js uses for accounts and cloud progress. */
(function () {
  var cfg = window.CS_CONFIG || {};
  var ok = !!(cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY && window.supabase && window.supabase.createClient);
  var CS = window.CS = { configured: ok, user: null, recovery: false };
  if (!ok) return;
  var sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });
  var redirect = function () { return location.origin + location.pathname; };
  var must = function (r) { if (r.error) throw r.error; return r.data; };
  var map = function (u) {
    if (!u) return null;
    var md = u.user_metadata || {};
    return { uid: u.id, email: u.email || "", displayName: md.full_name || md.name || "", provider: (u.app_metadata && u.app_metadata.provider) || "email" };
  };
  Object.assign(CS, {
    signInGoogle: function () { return sb.auth.signInWithOAuth({ provider: "google", options: { redirectTo: redirect() } }).then(must); },
    signUp: async function (email, password) {
      var d = must(await sb.auth.signUp({ email: email, password: password, options: { emailRedirectTo: redirect() } }));
      var exists = !!(d.user && Array.isArray(d.user.identities) && d.user.identities.length === 0);
      return { exists: exists, needsConfirm: !d.session };
    },
    signIn: async function (email, password) { return must(await sb.auth.signInWithPassword({ email: email, password: password })); },
    magicLink: async function (email) { return must(await sb.auth.signInWithOtp({ email: email, options: { emailRedirectTo: redirect(), shouldCreateUser: true } })); },
    resetPassword: async function (email) { return must(await sb.auth.resetPasswordForEmail(email, { redirectTo: redirect() })); },
    updatePassword: async function (password) { return must(await sb.auth.updateUser({ password: password })); },
    signOut: async function () { await sb.auth.signOut({ scope: "local" }); },
    deleteAccount: async function () {
      must(await sb.rpc("delete_my_account"));
      try { await sb.auth.signOut({ scope: "local" }); } catch (e) {}
    },
    load: async function (u) {
      var d = must(await sb.from("user_progress").select("data").eq("user_id", u.uid).maybeSingle());
      return d ? JSON.stringify(d.data) : null;
    },
    save: async function (u, json, upd) {
      must(await sb.from("user_progress").upsert({ user_id: u.uid, data: JSON.parse(json), upd: upd || 0, updated_at: new Date().toISOString() }));
    }
  });
  var last;
  sb.auth.onAuthStateChange(function (ev, session) {
    var u = map(session && session.user);
    if (ev === "PASSWORD_RECOVERY") { CS.recovery = true; window.dispatchEvent(new Event("cs-recovery")); }
    CS.user = u;
    var id = u ? u.uid : null;
    if (id !== last) { last = id; window.dispatchEvent(new Event("cs-auth")); }
  });
})();
