/* Uzbek (Latin) course content for the remaining SAT Math lessons. */
(function () {
  var c = COURSES.find(function (x) { return x.id === "math-sat"; });
  if (!c) return;
  var tx = {
    m15: {
      title:"15-modul: Chiziqli bog‘lanishlar, koordinatalar, grafiklar va qiyalik",skill:"Chiziqli grafiklar va qiyalik",objectives:["Ikki nuqta orqali chiziq qiyaligini hisoblash","y = mx + b shaklidan boshlang‘ich qiymat va o‘zgarish tezligini talqin qilish","Parallel chiziqlar va chiziqli modellarni aniqlash"],
      summary:"Chiziqning qiyaligi x bir birlikka o‘zgarganda y qancha o‘zgarishini bildiradi. Ikki nuqta uchun qiyalik (y₂ − y₁)/(x₂ − x₁) ga teng. y = mx + b tenglamasida m — qiyalik, b — y o‘qini kesib o‘tish qiymati. Bir xil qiyalikdagi vertikal bo‘lmagan parallel chiziqlar kesishmaydi.",
      rules:["Qiyalikni topishda y o‘zgarishini x o‘zgarishiga bo‘ling; nuqtalar tartibini ikkala ayirmada ham bir xil saqlang.","y = mx + b shaklida m — har birlikdagi o‘zgarish, b — x nol bo‘lgandagi boshlang‘ich qiymat.","Parallel vertikal bo‘lmagan chiziqlarning qiyaliklari teng; turli kesishish qiymatlari ularning alohida chiziqlar ekanini bildiradi."],
      examples:[["(2, 5) va (6, 13) nuqtalardan o‘tuvchi chiziq qiyaligini toping.","(13 − 5)/(6 − 2) = 8/4 = 2."],["y = −3x + 8 da y o‘qini kesish qiymati nima?","Tenglamani y = mx + b bilan solishtiring. b = 8, demak kesishish qiymati 8."],["Qiyaligi 3 bo‘lgan va (1, 2) dan o‘tuvchi chiziq tenglamasini toping.","y − 2 = 3(x − 1). Qavslarni ochib, y = 3x − 1 ni olamiz."]],
      mistakes:["Qiyalikda y va x ayirmalarining tartibini bir xil saqlamaslik.","y-kesishish qiymatini qiyalik deb adashtirish.","Grafikdagi bitta nuqtadan qiyalikni aniqlashga urinish; qiyalik uchun ikki nuqta kerak."],recap:"Ikki nuqta orqali qiyalikni toping, m va b ni y = mx + b dan o‘qing, chiziqli modelda boshlang‘ich qiymat bilan o‘zgarish tezligini ajrating."
    },
    m16: {
      title:"16-modul: Asosiy statistika, jadvallar va ma’lumotlarni talqin qilish",skill:"Statistika va ma’lumotlarni talqin qilish",objectives:["O‘rtacha qiymat, mediana va oraliqni hisoblash","Taqsimotdagi chet qiymatlarning ta’sirini tushuntirish","Jadvaldagi sonlar va foizlarni taqqoslash"],
      summary:"O‘rtacha qiymat barcha kuzatuvlar yig‘indisini ularning soniga bo‘lish orqali topiladi. Medianani topish uchun qiymatlarni tartiblab, o‘rtadagini tanlang. Oraliq eng katta va eng kichik qiymatlar ayirmasidir. Chet qiymatlar o‘rtachani kuchli o‘zgartirishi, lekin medianaga kamroq ta’sir qilishi mumkin.",
      rules:["O‘rtacha = qiymatlar yig‘indisi ÷ kuzatuvlar soni.","Medianadan oldin qiymatlarni kichikdan kattaga tartiblang; juft sonli to‘plamda o‘rtadagi ikki qiymatning o‘rtachasini oling.","Oraliq = eng katta qiymat − eng kichik qiymat. Chet qiymatlarning markaziy o‘lchovlarga ta’sirini solishtiring.","Xulosa ma’lumot va tanlama hajmi qo‘llab-quvvatlaydigan darajada bo‘lsin; kichik tanlamadan ortiqcha umumlashtirmang."],
      examples:[["6, 8, 10, 16 qiymatlarining o‘rtachasini toping.","Yig‘indi 40. To‘rtta qiymat bor, shuning uchun o‘rtacha 40 ÷ 4 = 10."],["2, 4, 7, 9, 13 to‘plamining medianasi nima?","Qiymatlar tartiblangan, o‘rtadagi uchinchi qiymat 7. Mediana 7."],["Birinchi kvartil 12, uchinchi kvartil 27. Kvartillar oralig‘i qancha?","Kvartillar oralig‘i Q3 − Q1 = 27 − 12 = 15." ]],
      mistakes:["Medianani topishdan avval qiymatlarni tartiblamaslik.","O‘rtacha uchun yig‘indini qiymatlar soniga bo‘lishni unutish.","Ulushni butunga bo‘lmasdan jadvaldagi sonlarni foiz sifatida talqin qilish."],recap:"Ma’lumotlarni tartiblang, kerakli markaziy o‘lchovni tanlang va jadvaldagi ulushni foizga aylantirishda qismni butunga bo‘ling."
    },
    m29: {
      title:"29-modul: Tenglamalar va tengsizliklar sistemasi",skill:"Chiziqli tenglamalar sistemasi",objectives:["Sistemani o‘rniga qo‘yish va qo‘shish usuli bilan yechish","Kesishish nuqtasining ikkala tenglamani qanoatlantirishini tekshirish","Yagona yechim, yechim yo‘qligi va cheksiz yechimlarni farqlash"],
      summary:"Tenglamalar sistemasining yechimi har bir tenglamani bir vaqtda qanoatlantiradi. O‘rniga qo‘yishda bir ifodani ikkinchisiga almashtiring. Qo‘shish usulida tenglamalarni qo‘shib yoki ayirib, bir o‘zgaruvchini yo‘qoting. Chiziqlarning kesishish nuqtasi yagona yechimdir.",
      rules:["O‘rniga qo‘yishda bir tenglamadan o‘zgaruvchini ajratib, ikkinchi tenglamaga qo‘ying.","Qo‘shish usulida qarama-qarshi koeffitsiyentlarni hosil qilib, tenglamalarni qo‘shing.","Bir xil chiziq cheksiz yechim beradi; parallel va turli chiziqlarda yechim bo‘lmaydi; turli qiyaliklar bitta kesishishni beradi."],
      examples:[["y = 2x + 1 va y = x + 4 sistemani yeching.","Ikkala y ifodasini tenglashtiramiz: 2x + 1 = x + 4, demak x = 3. O‘rniga qo‘ysak y = 7."],["3x + y = 11 va x − y = 1 sistemani yeching.","Tenglamalarni qo‘shamiz: 4x = 12, demak x = 3. Ikkinchisiga qo‘yib y = 2 ni topamiz."],["y = −2x + 5 va 2y = −4x + 10 nechta yechimga ega?","Ikkinchi tenglamani 2 ga bo‘lsak y = −2x + 5 chiqadi. Tenglamalar bir xil chiziq, demak yechimlar cheksiz ko‘p." ]],
      mistakes:["Juftlikni faqat bitta tenglamada tekshirish.","Tenglamalarni qo‘shishda belgi xatolariga yo‘l qo‘yish.","Yechim yo‘q holatini cheksiz yechim bilan adashtirish."],recap:"Sistemani o‘rniga qo‘yish yoki qo‘shish bilan yeching, so‘ng topilgan juftlikni ikkala tenglamada tekshiring."
    },
    m31: {
      title:"31-modul: Ko‘rsatkichli funksiyalar va chiziqli bo‘lmagan bog‘lanishlar",skill:"Ko‘rsatkichli funksiyalar",objectives:["Ko‘rsatkichli o‘sish va kamayishni model qilish","Foiz sur’atini davriy ko‘paytirgichga aylantirish","Chiziqli va ko‘rsatkichli o‘zgarishni farqlash"],
      summary:"Ko‘rsatkichli modelda bir xil qo‘shiluvchi emas, har davrda bir xil ko‘paytirgich qo‘llanadi. Boshlang‘ich qiymat A₀, davriy foiz sur’ati r va t davr uchun A = A₀(1+r)^t. Kamayish p foiz bo‘lsa, ko‘paytirgich 1−p bo‘ladi.",
      rules:["Foizni o‘nli kasrga aylantiring: masalan, 6% = 0,06; o‘sish ko‘paytirgichi 1,06.","Davrlar soni t bo‘lsa, ko‘paytirgichni t darajaga ko‘taring.","Chiziqli modelda har qadamda bir xil miqdor qo‘shiladi; ko‘rsatkichli modelda bir xil ko‘paytirgich ishlatiladi."],
      examples:[["7 boshlang‘ich qiymat 6% dan o‘sadi. Modelni yozing.","A₀ = 7 va ko‘paytirgich 1 + 0,06 = 1,06. Model 7(1,06)^t."],["500 dollar qiymat yiliga 20% kamayadi. Ikki yildan keyingi qiymatni toping.","Har yilgi ko‘paytirgich 0,80. 500(0,80)² = 320 dollar."],["f(x)=3·2ˣ bo‘lsa, f(4) ni toping.","x o‘rniga 4 qo‘yamiz: 3·2⁴ = 3·16 = 48." ]],
      mistakes:["20% kamayishda 0,20 ga ko‘paytirish; aslida qoladigan ulush 0,80.","Foizni o‘nli kasrga aylantirmasdan formulaga qo‘yish.","Takroriy ko‘paytirishni qo‘shish deb hisoblash."],recap:"Boshlang‘ich qiymatni va davriy ko‘paytirgichni aniqlang, davrlar sonicha darajaga ko‘taring; kamayishda qoladigan foizdan foydalaning."
    },
    m45: {
      title:"45-modul: Murakkab algebra, sistemalar va tengsizliklar",skill:"Murakkab algebra va tengsizliklar",objectives:["Murakkab tengsizliklarni yechish va yechimni oraliq bilan ko‘rsatish","Sistemalarda o‘zgaruvchilarni yo‘qotish","Teng kuchli ifodalarni soddalashtirish"],
      summary:"Murakkab tengsizlikda amalni zanjirning har bir qismiga bir xil qo‘llang. Manfiy songa bo‘lganda ikkala tengsizlik belgisi ham teskari bo‘ladi. Algebraik ifodalarni o‘zgartirishda taqsimot qonuni va o‘xshash hadlarni birlashtirishdan foydalaning.",
      rules:["a < b ≤ c bo‘lsa, bir xil sonni uchala qismga qo‘shish yoki ayirish mumkin.","Uchala qismni musbat songa bo‘lish belgilarni o‘zgartirmaydi; manfiy songa bo‘lish ikkala belgini almashtiradi.","Qavslarni ochib, faqat bir xil turdagi hadlarni birlashtiring."],
      examples:[["−2 < 3x + 1 ≤ 10 ni yeching.","Har qismdan 1 ayiramiz: −3 < 3x ≤ 9. 3 ga bo‘lamiz: −1 < x ≤ 3."],["4(2x − 3) + x ni soddalashtiring.","4 ni qavsga taqsimlaymiz: 8x − 12 + x. O‘xshash hadlar 9x − 12 bo‘ladi."],["|x − 5| = 3 tenglamani yeching.","Masofa 3: x − 5 = 3 yoki x − 5 = −3. Shuning uchun x = 8 yoki x = 2." ]],
      mistakes:["Murakkab tengsizlik amalini faqat bir qismga qo‘llash.","Manfiy songa bo‘lganda belgini almashtirmaslik.","O‘xshamaydigan hadlarni birlashtirish."],recap:"Tengsizlikning har bir qismida bir xil amalni bajaring, manfiy songa bo‘lganda belgini almashtiring va ifodalarni taqsimot qonuni bilan soddalashtiring."
    },
    m46: {
      title:"46-modul: Chiziqli bo‘lmagan tenglamalar, kvadratlar, teng kuchli ifodalar va darajalar",skill:"Chiziqli bo‘lmagan tenglamalar",objectives:["Kvadrat tenglamalarni ko‘paytuvchilarga ajratib yechish","Darajalar va ekvivalent ifodalar qoidalarini qo‘llash","Ildizli yoki kasrli tenglamada yechimni tekshirish"],
      summary:"Kvadrat tenglamani ko‘paytuvchilarga ajratib, har bir ko‘paytuvchini nolga tenglashtiring. Bir xil asosli darajalarni ko‘paytirganda darajalar qo‘shiladi. Ildizli tenglamaning ikki tomonini kvadratga ko‘targandan so‘ng nomuvofiq ildizlar chiqishi mumkin, shuning uchun javobni dastlabki tenglamada tekshiring.",
      rules:["x²−a² = (x−a)(x+a) — kvadratlar ayirmasi.","Bir xil asosli xᵐ·xⁿ = xᵐ⁺ⁿ; bo‘lishda xᵐ/xⁿ = xᵐ⁻ⁿ, x≠0.","Ildizli tenglamani kvadratga ko‘targach, barcha topilgan qiymatlarni asl tenglamaga qayta qo‘ying."],
      examples:[["x²−9=0 ni yeching.","Kvadratlar ayirmasi: (x−3)(x+3)=0. Demak, x=3 yoki x=−3."],["x⁵/x² ni soddalashtiring, x≠0.","Bir xil asosli darajalarni bo‘lishda darajalar ayiriladi: x⁵/x² = x³."],["√(2x+1)=5 ni yeching.","Kvadratga ko‘taramiz: 2x+1=25, demak x=12. Tekshiruv: √25=5." ]],
      mistakes:["Kvadratlar ayirmasini ikki kvadrat yig‘indisi deb ko‘rish.","Darajalarni ko‘paytirishda qo‘shish o‘rniga ko‘paytirish.","Ildizli tenglamada topilgan qiymatlarni asl shartda tekshirmaslik."],recap:"Kvadratlarni ko‘paytuvchilarga ajrating, daraja qoidalarida asoslarni tekshiring va ildizli tenglamalarning javoblarini asl ifodada sinang."
    },
    m47: {
      title:"47-modul: Nisbatlar, foizlar, statistika, ehtimollik va ma’lumotlarni tahlil qilish",skill:"Ma’lumotlar tahlili va ehtimollik",objectives:["Qism va butun orqali foizlarni topish","Mustaqil hodisalar va sanash qoidalaridan ehtimollik hisoblash","Tarqalish o‘lchovlarini talqin qilish"],
      summary:"Foiz — qismning butunga nisbati. Mustaqil tanlovlarning umumiy sonini topishda variantlar sonini ko‘paytiring. Mustaqil A va B hodisalari uchun P(A va B)=P(A)·P(B). Standart og‘ish qiymatlarning o‘rtacha atrofida qanchalik tarqalganini o‘lchaydi.",
      rules:["Foiz = qism ÷ butun × 100%.","Bir-biriga bog‘liq bo‘lmagan tanlovlar ketma-ket bajarilsa, variantlar sonini ko‘paytiring.","Mustaqil hodisalarning birgalikdagi ehtimolligi ehtimolliklar ko‘paytmasiga teng."],
      examples:[["80 saylovchidan 52 nafari taklifni qo‘lladi. Foizini toping.","52 ÷ 80 = 0,65, demak 65%."],["5 ta ko‘ylak va 3 ta shimdan bittadan tanlab nechta kiyim to‘plami tuzish mumkin?","Har bir ko‘ylak uchun 3 ta shim bor: 5 × 3 = 15 to‘plam."],["Mustaqil A va B hodisalari ehtimolligi 0,4 va 0,5. Ikkalasi birga sodir bo‘lish ehtimoli nima?","Mustaqil hodisalar uchun ko‘paytiramiz: 0,4 × 0,5 = 0,2." ]],
      mistakes:["Foiz hisobida butun qiymat o‘rniga qismga bo‘lish.","Birgalikdagi mustaqil hodisalarda qo‘shish; bu holatda ko‘paytirish kerak.","Standart og‘ishni markaz emas, tarqalish o‘lchovi ekanini unutish."],recap:"Qismni butunga bo‘lib foizni toping, mustaqil tanlovlarda ko‘paytirish qoidasidan foydalaning va statistik ko‘rsatkich nimani o‘lchashini aniqlang."
    },
    m48: {
      title:"48-modul: Geometriya, aylanalar, to‘g‘ri burchakli uchburchaklar, trigonometriya va aralash masalalar",skill:"Aralash geometriya va trigonometriya",objectives:["Aylana yuzi va silindr hajmini hisoblash","Yoy va markaziy burchak nisbatini topish","Pifagor teoremasi va trigonometrik nisbatlarni qo‘llash"],
      summary:"Aylana yuzi πr², uzunligi esa 2πr. Silindr hajmi asos yuzi bilan balandlik ko‘paytmasi: πr²h. Markaziy burchagi θ bo‘lgan yoy aylananing θ/360 qismini egallaydi. To‘g‘ri burchakli uchburchakda Pifagor teoremasi va sinus, kosinus, tangens nisbatlaridan foydalaniladi.",
      rules:["Aylana yuzi A=πr², uzunligi C=2πr.","Silindr hajmi V=πr²h; kub birliklarini ko‘rsating.","Yoy ulushi = markaziy burchak ÷ 360°. Sinus = qarshi katet/gipotenuza."],
      examples:[["Radiusi 3 bo‘lgan aylananing yuzini toping.","A=π·3²=9π kvadrat birlik."],["Radiusi 2 va balandligi 5 bo‘lgan silindr hajmini toping.","V=π·2²·5=20π kub birlik."],["Aylananing 90° li yoyi aylana uzunligining qanday qismini tashkil qiladi?","90/360 = 1/4." ]],
      mistakes:["Aylana yuzida radiusni kvadratga ko‘tarmaslik.","Silindr hajmida asos yuzini balandlikka ko‘paytirmaslik.","Sinus, kosinus va tangensda tomonlarni noto‘g‘ri tanlash."],recap:"Masala so‘rayotgan o‘lchovni aniqlang, mos aylana yoki hajm formulasini tanlang, to‘g‘ri burchakli uchburchakda tomonlarga nisbatan trigonometrik nisbatni belgilang."
    },
    m49: {
      title:"49-modul: Son xossalari, kasrlar va darajalar",skill:"Sonlar, kasrlar va darajalar",objectives:["Ishorali sonlarda amallarni bajarish","Kasrlarni qo‘shish, ayirish, ko‘paytirish va bo‘lish","Darajalar va amallar tartibini qo‘llash"],
      summary:"Ishorali sonlarda amal yo‘nalishini kuzating. Kasrlarni qo‘shish yoki ayirish uchun umumiy maxraj kerak; ko‘paytirishda surat va maxrajlarni alohida ko‘paytiring. Bo‘lishda ikkinchi kasrning teskari qiymatiga ko‘paytiring. Amallar tartibida avval qavs, so‘ng daraja bajariladi.",
      rules:["Musbat sonni qo‘shish sonlar o‘qida o‘ngga, manfiyni qo‘shish chapga siljitadi.","Kasrlarni qo‘shishdan oldin maxrajlarini tenglashtiring; bo‘lishda bo‘luvchining teskari kasriga ko‘paytiring.","Nolga teng bo‘lmagan sonning nol darajasi 1. Bir xil asosli ko‘paytishda darajalar qo‘shiladi."],
      examples:[["3/4 + 1/6 ni hisoblang.","Umumiy maxraj 12: 3/4=9/12, 1/6=2/12. Yig‘indi 11/12."],["−2² va (−2)² ni hisoblang.","Birinchisida daraja avval bajariladi: −(2²)=−4. Ikkinchisida manfiy sonning o‘zi kvadratga ko‘tariladi: 4."],["(3/5) ÷ (9/10) ni soddalashtiring.","Teskari kasrga ko‘paytiramiz: (3/5)(10/9)=30/45=2/3." ]],
      mistakes:["Kasrlarni qo‘shishda surat va maxrajlarni bevosita qo‘shish.","Manfiy asosni qavsga olmaslik va daraja qaysi qiymatga tegishli ekanini tekshirmaslik.","Aniq kasr o‘rniga erta yaxlitlash."],recap:"Ishoralarni tekshiring, kasrlarni qo‘shishda umumiy maxrajdan foydalaning, bo‘lishda teskari kasrga ko‘paytiring va amallar tartibini saqlang."
    },
    m50: {
      title:"50-modul: Funksiya yozuvi, kompozitsiya va o‘zgartirishlar",skill:"Funksiyalar va grafik o‘zgarishlari",objectives:["Funksiya qiymatini kiritilgan qiymatni qo‘yib hisoblash","Kompozitsiyada ichki funksiyani birinchi hisoblash","Grafikning siljishi va akslanishini aniqlash"],
      summary:"Funksiya har bir ruxsat etilgan kirish qiymatiga bitta chiqish qiymatini mos qo‘yadi. f(g(x)) kompozitsiyasida avval g(x) hisoblanib, natija f ga kiritiladi. f(x)+k grafikni vertikal siljitadi; f(x−h) grafikni o‘ngga h birlik siljitadi. Qavslarni diqqat bilan ishlating.",
      rules:["f(a) ni topish uchun x ning har bir o‘rniga a ni qo‘yib, ifodani soddalashtiring.","f(g(x)) da avval ichki g(x) funksiyasini hisoblang, keyin chiqqan qiymatni f ga kiriting.","Tashqaridagi +k vertikal yuqoriga siljitadi; ichkaridagi x−h gorizontal ravishda o‘ngga h siljitadi."],
      examples:[["f(x)=2x+1 bo‘lsa, f(4) ni toping.","x o‘rniga 4 ni qo‘yamiz: 2·4+1=9."],["f(x)=x², g(x)=x+3 bo‘lsa, f(g(2)) ni toping.","Avval g(2)=5. So‘ng f(5)=5²=25."],["y=f(x)+4 grafikni qanday o‘zgartiradi?","Har bir chiqish qiymati 4 ga oshadi, demak grafik 4 birlik yuqoriga siljiydi." ]],
      mistakes:["f(4) ni f·4 deb talqin qilish; bu funksiya qiymatini bildiradi.","Kompozitsiyada tashqi funksiyani avval hisoblash.","x−h ning ishorasidan chapga siljish xulosasini chiqarish; ichki ishora teskari ishlaydi."],recap:"Kirish qiymatini qavs ichiga to‘liq qo‘ying, kompozitsiyada ichkaridan boshlang va grafik siljishida o‘zgarish f ichidami yoki tashqarisidami aniqlang."
    },
    m51: {
      title:"51-modul: Ratsional va irratsional tenglamalar",skill:"Kasrli va ildizli tenglamalar",objectives:["Kasrli ifodalarda taqiqlangan qiymatlarni aniqlash","Ildizli tenglamalarni yechib, javoblarni tekshirish","Nomuvofiq yechimlarni rad etish"],
      summary:"Ratsional ifoda maxraji nol bo‘la olmaydi, shuning uchun avval taqiqlangan qiymatlarni yozib oling. Ildizli tenglamada ildizni ajratib, keyin kvadratga ko‘tarish mumkin. Kvadratga ko‘tarish qo‘shimcha, asl tenglamani qanoatlantirmaydigan yechim berishi mumkin; yakuniy tekshiruv majburiy.",
      rules:["Ratsional tenglamani yechishdan oldin maxrajni nol qiladigan qiymatlarni chiqarib tashlang.","√A=B bo‘lsa, tenglikning o‘ng tomoni manfiy bo‘la olmaydi; kvadratga ko‘targach asl tenglamada tekshiring.","Kasr nol bo‘lishi uchun surat nol, maxraj esa nolga teng bo‘lmasligi kerak."],
      examples:[["1/(x−4) qaysi qiymatda aniqlanmagan?","Maxrajni nolga tenglaymiz: x−4=0, demak x=4 taqiqlanadi."],["√(x−1)=3 ni yeching.","Kvadratga ko‘taramiz: x−1=9, shuning uchun x=10. Tekshiruv: √9=3."],["(x−2)/(x+1)=0 ni yeching.","Kasr nol bo‘lishi uchun x−2=0, demak x=2. Maxraj 2+1=3 nol emas, yechim ruxsat etiladi." ]],
      mistakes:["Maxraj nol bo‘ladigan qiymatlarni javob sifatida qoldirish.","Kvadratga ko‘tarilgandan keyin asl tenglamada tekshirmaslik.","Kasr nol bo‘lishida surat bilan birga maxrajni ham nol qilish."],recap:"Dastlab taqiqlangan qiymatlarni aniqlang, tenglamani yeching va barcha nomzodlarni asl shartda tekshirib chiqing."
    }
  };
  var labels = {
    m15:["Ikki nuqtaning qiyaligi","Qiyalik va kesishish qiymati","Jadval va vaziyat"],
    m16:["O‘rtacha va mediana","Moda va oraliq","Jadvalni o‘qish","Dalilga mos xulosa"],
    m29:["O‘rniga qo‘yish yoki qo‘shish","Sistemani tasniflash","Modelni tuzish va tekshirish"],
    m31:["Ko‘paytirgichni topish","Foiz o‘zgarishini ifodalash","Modelni talqin qilish"],
    m45:["Mos bog‘lanishni tanlash","Birlik va cheklovlarni kuzatish","Natijaning mantiqiyligini tekshirish"],
    m46:["Mos bog‘lanishni tanlash","Birlik va cheklovlarni kuzatish","Natijaning mantiqiyligini tekshirish"],
    m47:["Mos bog‘lanishni tanlash","Birlik va cheklovlarni kuzatish","Natijaning mantiqiyligini tekshirish"],
    m48:["Mos bog‘lanishni tanlash","Birlik va cheklovlarni kuzatish","Natijaning mantiqiyligini tekshirish"],
    m49:["Ishorali sonlar","Kasrlar ustida amallar","Darajalar va amallar tartibi"],
    m50:["Kirish qiymatini hisoblash","Funksiyalar kompozitsiyasi","Grafik o‘zgarishlarini aniqlash"],
    m51:["Aniqlanish sohasini saqlash","Maxrajlardan qutulish","Ildizli yechimlarni tekshirish"]
  };
  Object.keys(tx).forEach(function (id) {
    var u = c.units.find(function (x) { return x.id === id; });
    if (!u) return;
    var d = tx[id];
    u.title.uz = d.title;
    u.skill = { en: u.skill, ru: u.skill, uz: d.skill };
    u.objectives.uz = d.objectives;
    u.lesson.summary.uz = d.summary;
    u.lesson.recap.uz = d.recap;
    u.lesson.rules.forEach(function (r, i) { r.t.uz = labels[id][i]; r.d.uz = d.rules[i]; });
    u.lesson.examples.forEach(function (e, i) { e.p_uz = d.examples[i][0]; e.s.uz = d.examples[i][1]; });
    u.lesson.mistakes.forEach(function (m, i) { m.uz = d.mistakes[i]; });
  });
})();
