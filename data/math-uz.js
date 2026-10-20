/* Uzbek (Latin) lesson text for the four foundational SAT Math units. */
(function () {
  var c = COURSES.find(function (x) { return x.id === "math-sat"; });
  if (!c) return;
  var data = {
    "u-alg": {
      title: "13-modul: Chiziqli tenglamalar va bir o‘zgaruvchili tengsizliklar",
      skill: "Chiziqli tenglamalar va sistemalar",
      objectives: ["Tenglamalarda noma’lumni ajratish uchun teskari amallardan foydalanish", "Manfiy songa ko‘paytirish yoki bo‘lishda tengsizlik belgisini almashtirish", "Ikki chiziq kesishishi, parallel bo‘lishi yoki ustma-ust tushishini aniqlash"],
      summary: "Chiziqli model y = mx + b da m qiyalikni, ya’ni x bir birlikka oshganda y qancha o‘zgarishini; b esa x = 0 dagi boshlang‘ich qiymatni ko‘rsatadi. Ikki chiziqli tenglama bitta nuqtada kesishsa, sistema bitta yechimga ega. Qiyaliklari teng, kesishish nuqtalari har xil bo‘lsa, yechim yo‘q. Tenglamalar aynan bir chiziqni ifodalasa, yechimlar cheksiz ko‘p bo‘ladi.",
      worked: { prompt: "3x + 6y = 18 va kx + 2y = 10 sistemasi yechimga ega bo‘lmasligi uchun k nechaga teng?", analysis: "Birinchi tenglamani 3 ga bo‘lamiz: x + 2y = 6. Yechim bo‘lmasligi uchun chiziqlar parallel bo‘lishi kerak: x koeffitsiyenti ham 1 bo‘ladi. Demak, k = 1. Erkin hadlar esa turlicha, shuning uchun chiziqlar ustma-ust tushmaydi." },
      rules: [
        ["Noma’lumni ajratish", "Tenglikni saqlash uchun har bir amalni tenglamaning ikki tomonida bajaring. Avval qo‘shish yoki ayirishni, keyin ko‘paytirish yoki bo‘lishni bekor qiling."],
        ["Tengsizlik va manfiy son", "Tengsizlikni tenglama kabi yeching. Ammo manfiy songa ko‘paytirsangiz yoki bo‘lsangiz, <, >, ≤ yoki ≥ belgisi qarama-qarshi tomonga o‘zgaradi."],
        ["Ikki chiziq sistemasi", "Yechim — ikkala tenglamani ham qanoatlantiradigan tartibli juftlik. Qiyaliklar teng, kesishish nuqtalari turlicha bo‘lsa yechim yo‘q; aynan bir chiziq bo‘lsa, yechimlar cheksiz ko‘p."]
      ],
      examples: [
        ["4(2x − 3) = 20 ni yeching.", "Ikkala tomonni 4 ga bo‘ling: 2x − 3 = 5. 3 ni qo‘shing: 2x = 8. 2 ga bo‘ling: x = 4. Tekshiruv: 4(8 − 3) = 20."],
        ["−3x + 5 ≥ 17 ni yeching.", "5 ni ayiring: −3x ≥ 12. −3 ga bo‘lib, belgini almashtiring: x ≤ −4."],
        ["y = 2x + 1 va 4x − 2y = −2 sistemasi nechta yechimga ega?", "Ikkinchi tenglamani 2 ga bo‘lamiz: 2x − y = −1, ya’ni y = 2x + 1. Ikkalasi bir chiziqni ifodalaydi, demak yechimlar cheksiz ko‘p."]
      ],
      mistakes: ["Tenglamaning faqat bir tomonini o‘zgartirish; tenglikni saqlash uchun amalni ikki tomonda ham bajaring.", "Manfiy songa bo‘lganda tengsizlik belgisini almashtirmaslik.", "Parallel chiziqlarni bitta chiziq deb hisoblash; qiyalik bilan birga kesishish nuqtalarini ham solishtiring."],
      recap: "Noma’lumni teskari amallar bilan ajrating, manfiy songa ko‘paytirish yoki bo‘lishda tengsizlik belgisini almashtiring, sistemadagi chiziqlar kesishishi, ustma-ust tushishi yoki parallel bo‘lishini tekshiring."
    },
    "u-data": {
      title: "14-modul: Nisbatlar, tezliklar, foizlar va birliklarni o‘zgartirish",
      skill: "Nisbatlar, foizlar va statistika",
      objectives: ["Nisbat va birlik stavkalarini masala birliklari bilan hisoblash", "Ketma-ket foiz o‘zgarishlarini ko‘paytirgichlar bilan topish", "O‘rtacha qiymat va medianani hisoblash hamda solishtirish", "Oddiy ehtimollikni mumkin bo‘lgan natijalar orqali aniqlash"],
      summary: "20% ga oshirib, so‘ng 20% ga kamaytirish dastlabki qiymatga qaytarmaydi: 1,20 × 0,80 = 0,96, ya’ni yakuniy natija 4% kam. Statistikada mediana — tartiblangan to‘plamning o‘rtasidagi qiymat — keskin chet qiymatlarga chidamliroq; o‘rtacha esa barcha qiymatlar yig‘indisini soniga bo‘lish orqali topiladi va chet qiymatlardan ta’sirlanadi.",
      rules: [
        ["Nisbat va birlik stavkasi", "Miqdorlarning o‘lchov birliklarini yozib boring. Birlik stavkasi bir miqdorni ikkinchi miqdorning bir birligiga taqqoslaydi; teng nisbatning ikkala qismini ham bir xil songa ko‘paytiring."],
        ["Foiz o‘zgarishi", "p% ni p/100 ga aylantiring. p% ga oshirish uchun 1 + p/100 ga, kamaytirish uchun 1 − p/100 ga ko‘paytiring. Ketma-ket o‘zgarishda keyingi foiz yangi qiymatga qo‘llanadi."],
        ["O‘rtacha va mediana", "O‘rtacha = qiymatlar yig‘indisi ÷ ularning soni. Medianani topishdan avval qiymatlarni tartiblang. Juda katta yoki kichik qiymat o‘rtachani o‘zgartirishi mumkin, ammo medianaga ko‘pincha kam ta’sir qiladi."],
        ["Ehtimollik", "Teng imkoniyatli natijalarda ehtimollik = mos natijalar ÷ jami natijalar. Ehtimollik 0 bilan 1 oralig‘ida; hodisa va unga qarama-qarshi hodisa ehtimolliklari yig‘indisi 1 ga teng."]
      ],
      examples: [
        ["Avtomobil 6 gallon yonilg‘i bilan 156 mil yuradi. Bir gallonga necha mil to‘g‘ri keladi?", "Masofani yonilg‘i miqdoriga bo‘ling: 156 ÷ 6 = 26. Birlik stavkasi — har gallonga 26 mil."],
        ["80 dollarlik buyumga avval 25% chegirma, so‘ng 10% soliq qo‘llanadi. Yakuniy narxni toping.", "Chegirmadan so‘ng: 80 × 0,75 = 60 dollar. Soliqni yangi narxga qo‘llang: 60 × 1,10 = 66 dollar. O‘zgarishlar ketma-ket bo‘lgani uchun soliq chegirmadan keyingi narxdan hisoblanadi."],
        ["3, 5, 8, 12, 22 sonlarining medianasini toping.", "Sonlar tartiblangan. O‘rtadagi, ya’ni uchinchi qiymat 8; mediana 8 ga teng."],
        ["Xaltada 4 ta qizil va 6 ta ko‘k jeton bor. Qizil jeton chiqmaslik ehtimoli qanday?", "Qizil bo‘lmagan 6 ta jeton jami 10 tadan. Ehtimollik 6/10 = 3/5." ]
      ],
      mistakes: ["Ketma-ket foizlarni qo‘shish o‘rniga har bir ko‘paytirgichni joriy qiymatga qo‘llang.", "Stavka masalasida o‘lchov birliklarini tushirib qoldirmang.", "Medianani topishdan oldin ma’lumotlarni tartiblang."],
      recap: "O‘lchov birliklarini saqlang, foiz o‘zgarishlarida ko‘paytirgichlardan foydalaning, medianadan oldin qiymatlarni tartiblang va ehtimollik uchun barcha mumkin bo‘lgan natijalarni aniqlang."
    },
    "u-adv": {
      title: "30-modul: Kvadrat tenglamalar va ko‘phadlar",
      skill: "Kvadrat tenglamalar va ko‘rsatkichli funksiyalar",
      objectives: ["Ko‘phadlarni ko‘paytuvchilarga ajratib, ildizlarni topish", "Diskriminant yordamida haqiqiy ildizlar sonini aniqlash", "Kvadrat funksiyaning uchini topish", "Ko‘rsatkichli o‘sish va kamayishni modellashtirish"],
      summary: "f(x) = ax² + bx + c kvadrat funksiya uchun uchning x koordinatasi −b/(2a), ildizlar yig‘indisi −b/a va ko‘paytmasi c/a ga teng. D = b² − 4ac diskriminanti haqiqiy yechimlar sonini ko‘rsatadi: D > 0 bo‘lsa ikkita, D = 0 bo‘lsa bitta, D < 0 bo‘lsa haqiqiy yechim yo‘q. f(t) = a(1 + r)^t ko‘rsatkichli modelida a — boshlang‘ich miqdor, r — o‘sish yoki kamayish sur’ati.",
      worked: ["Bakteriya koloniyasi 500 hujayradan boshlanib, har 3 soatda ikki baravar ko‘payadi. 9 soatdan keyin nechta hujayra bo‘ladi?", "9 soatda 9 ÷ 3 = 3 ta ikki baravar ko‘payish davri o‘tadi. N = 500 × 2³ = 500 × 8 = 4000 hujayra."],
      rules: [
        ["Ko‘paytuvchilarga ajratish va ildizlar", "Agar kvadrat tenglama a(x − r₁)(x − r₂) ko‘rinishida bo‘lsa, ildizlari r₁ va r₂ bo‘ladi. Har bir ko‘paytuvchini nolga tenglashtiring; natijani yoyish yoki o‘rniga qo‘yish orqali tekshiring."],
        ["Uch va diskriminant", "ax² + bx + c uchun uchning x koordinatasi −b/(2a). Diskriminant b² − 4ac: musbat bo‘lsa ikkita, nol bo‘lsa bitta, manfiy bo‘lsa haqiqiy ildiz yo‘q."],
        ["Ko‘rsatkichli o‘sish", "A = A₀(1 + r)^t modelida har davrda bir xil ko‘paytirgich ishlatiladi. Hisoblashdan oldin foiz stavkasini o‘nli kasrga aylantiring."]
      ],
      examples: [
        ["x² − 7x + 12 = 0 tenglamani ko‘paytuvchilarga ajratib yeching.", "Ko‘paytmasi 12, yig‘indisi 7 bo‘lgan sonlar 3 va 4. Demak, (x − 3)(x − 4) = 0, shuning uchun x = 3 yoki x = 4."],
        ["2x² + 4x + 5 = 0 nechta haqiqiy yechimga ega?", "D = 4² − 4·2·5 = 16 − 40 = −24. D < 0 bo‘lgani uchun haqiqiy ildiz yo‘q."],
        ["200 dollarlik miqdor yiliga 5% o‘sadi. 2 yildan keyingi miqdorni toping.", "Har yilgi ko‘paytirgich 1,05: 200(1,05)² = 200·1,1025 = 220,50 dollar." ]
      ],
      mistakes: ["Har bir ko‘paytuvchidan bittadan ildiz chiqishini unutish.", "Uchning x koordinatasi formulasida −b/(2a) o‘rniga b/(2a) dan foydalanish.", "5% stavkani 0,05 o‘rniga 5 deb qo‘yish."],
      recap: "Ildizlarni ko‘rish uchun ko‘phadni ko‘paytuvchilarga ajrating, diskriminant bilan haqiqiy yechimlar sonini toping va takroriy foiz o‘zgarishini ko‘rsatkichli ko‘paytirgich bilan ifodalang."
    },
    "u-geom": {
      title: "32-modul: Geometriya, to‘g‘ri burchakli uchburchaklar va aylanalar",
      skill: "Uchburchaklar, aylanalar, yuza va hajm",
      objectives: ["Pifagor teoremasi bilan to‘g‘ri burchakli uchburchak tomonlarini topish", "O‘xshash shakllarda masshtab koeffitsiyentini qo‘llash", "Aylana tenglamasidan markaz va radiusni aniqlash", "Sinus, kosinus va tangens nisbatlarini to‘g‘ri tanlash"],
      summary: "To‘g‘ri burchakli uchburchakda o‘tkir A va B burchaklari yig‘indisi 90° bo‘lsa, sin(A) = cos(B). Koordinata tekisligidagi aylananing standart tenglamasi (x − h)² + (y − k)² = r²; markazi (h, k), radiusi r bo‘ladi.",
      worked: ["Koordinata tekisligidagi aylana (x + 3)² + (y − 5)² = 49 tenglama bilan berilgan. Radiusini toping.", "r² = 49, demak radius r = 7; markaz esa (−3, 5). Radius musbat olinadi."],
      rules: [
        ["To‘g‘ri burchakli uchburchaklar", "Katetlari a va b, gipotenuzasi c bo‘lsa, a² + b² = c². Gipotenuza to‘g‘ri burchak qarshisida joylashadi va eng uzun tomondir."],
        ["O‘xshashlik va masshtab", "O‘xshash shakllarning mos burchaklari teng, mos tomonlari proporsional. Bitta masshtab koeffitsiyentini topib, mos uzunliklarni shu koeffitsiyentga ko‘paytiring yoki bo‘ling."],
        ["Aylana tenglamasi", "(x − h)² + (y − k)² = r² tenglamasida markaz (h, k), radius r. Qavs ichidagi ishoralarga e’tibor bering: (x + 2)² ifodasida h = −2."],
        ["Trigonometrik nisbatlar", "θ burchagiga nisbatan sin θ = qarshi katet/gipotenuza, cos θ = yondosh katet/gipotenuza, tan θ = qarshi katet/yondosh katet." ]
      ],
      examples: [
        ["To‘g‘ri burchakli uchburchak katetlari 9 va 12. Gipotenuzasini toping.", "Pifagor teoremasiga ko‘ra c² = 9² + 12² = 81 + 144 = 225, demak c = 15. Uzunlik musbat bo‘ladi."],
        ["Bo‘yi 6 fut bo‘lgan odamning soyasi 4 fut. Daraxt soyasi 10 fut. Quyosh burchagi bir xil bo‘lsa, daraxt bo‘yi qancha?", "Uchburchaklar o‘xshash, shuning uchun bo‘y/soya nisbati bir xil: 6/4 = h/10. Demak, h = 10·6/4 = 15 fut."],
        ["(x − 4)² + (y + 1)² = 25 aylananing markazi va radiusini toping.", "Standart tenglama bilan solishtirsak h = 4, k = −1, r = √25 = 5. Markaz (4, −1), radius 5."],
        ["To‘g‘ri burchakli uchburchakda θ burchagining qarshi tomoni 5, gipotenuzasi 13. sin θ ni toping.", "Sinus qarshi katetning gipotenuzaga nisbatidir: sin θ = 5/13." ]
      ],
      mistakes: ["Pifagor teoremasida gipotenuzani katet bilan adashtirish; avval to‘g‘ri burchakni toping.", "O‘xshash shakllarda bir xil sonni qo‘shish; tomonlarni masshtab koeffitsiyenti bilan ko‘paytiring.", "Aylana markazi koordinatalari qavs ichidagi ishoralarga teskari ekanini unutish."],
      recap: "Gipotenuzani to‘g‘ri aniqlang, o‘xshash shakllarni ko‘paytirish orqali masshtablang, aylana standart ko‘rinishidan markaz va radiusni o‘qing hamda trigonometrik nisbatni kerakli tomonlarga qarab tanlang."
    }
  };
  Object.keys(data).forEach(function (id) {
    var u = c.units.find(function (x) { return x.id === id; });
    if (!u) return;
    var d = data[id];
    u.title.uz = d.title;
    u.skill = { en: u.skill, ru: u.skill, uz: d.skill };
    u.objectives.uz = d.objectives;
    u.lesson.summary.uz = d.summary;
    u.lesson.recap.uz = d.recap;
    u.lesson.rules.forEach(function (r, i) { r.t.uz = d.rules[i][0]; r.d.uz = d.rules[i][1]; });
    u.lesson.examples.forEach(function (e, i) { e.p_uz = d.examples[i][0]; e.s.uz = d.examples[i][1]; });
    u.lesson.mistakes.forEach(function (m, i) { m.uz = d.mistakes[i]; });
    if (d.worked) {
      u.lesson.workedExample.prompt_uz = d.worked.prompt;
      u.lesson.workedExample.analysis.uz = d.worked.analysis;
    }
  });
})();
