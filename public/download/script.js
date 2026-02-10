// ===== Lessons Data =====
const lessons = [
    { id: 1, title: "HTML nima va u qanday ishlaydi?", description: "Web sahifalarning asosi - HTML tili bilan tanishish",
      content: `## HTML nima?

HTML (HyperText Markup Language) - bu veb-sahifalar yaratish uchun ishlatiladigan til. U dasturlash tili EMAS, balki belgilash (markup) tilidir. Ya'ni, HTML brauzerga "bu sarlavha", "bu paragraf", "bu rasm" deb ko'rsatma beradi.

## Oddiy tilda tushuntirish

Tasavvur qiling: siz uy quryapsiz.
- HTML - bu uyning g'ishtlari va devor-konstruksiyasi (struktura)
- CSS - bu uyning bo'yoqlari, dekorlari (dizayn)
- JavaScript - bu uyning elektr tizimi, lifti (interaktivlik)

Har bir veb-sahifa HTML dan boshlanadi!

## Brauzer qanday ishlaydi?

1. Siz brauzerni ochasiz (Chrome, Firefox, Edge)
2. URL manzilni yozasiz
3. Brauzer serverdan HTML faylni oladi
4. HTML ni o'qiydi va sahifani chizadi

## HTML hujjat strukturasi

Har bir HTML sahifa 4 ta asosiy qismdan iborat:

1. <!DOCTYPE html> - "Bu HTML5 hujjati" degan bildirish. Har doim birinchi qatorda yoziladi
2. <html> - butun sahifa shu teg ichida bo'ladi
3. <head> - sahifa haqida ma'lumotlar (brauzer tabida ko'rinadigan nom, stillar). Foydalanuvchi ko'RMAYDI
4. <body> - foydalanuvchi ko'radigan HAMMA narsa shu ichida

## Teglar nima?

Teg - bu < va > belgilari ichidagi maxsus so'z. Ko'pchilik teglar JUFT bo'ladi:
- Ochiluvchi teg: <p>
- Yopiluvchi teg: </p> (oldida / belgisi bor)

Ba'zi teglar YOLG'IZ (o'zi yopiladi):
- <br> - yangi qatorga o'tish
- <hr> - gorizontal chiziq
- <img> - rasm

## Eng muhim teglar

### Sarlavhalar
- <h1> - eng katta sarlavha (sahifada BITTA bo'lishi kerak)
- <h2> - bo'lim sarlavhasi
- <h3> - kichik bo'lim
- <h4>, <h5>, <h6> - yanada kichikroq

### Matn teglari
- <p> - paragraf (oddiy matn uchun)
- <strong> - qalin matn (muhim ma'lumot)
- <em> - kursiv matn (ta'kidlash)
- <br> - yangi qatorga o'tish

## VS Code da qanday boshlash?

1. VS Code dasturini oching
2. File → New File → fayl nomini index.html qiling
3. ! yozib Tab yoki Enter bosing - tayyor shablon chiqadi!
4. <body> ichiga kod yozing
5. Faylni saqlang (Ctrl+S)
6. Brauzda oching (faylni ikki marta bosing)

## Xatolardan qochish

- Har bir ochilgan tegni yopishni unutmang
- Teglar ichma-ich to'g'ri joylashsin: <p><strong>To'g'ri</strong></p>
- HTML katta-kichik harfga ahamiyat bermaydi, lekin kichik harf bilan yozing`,
      codeExample: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mening birinchi sahifam</title>
</head>
<body>
    <!-- Bu izoh - brauzer ko'rsatmaydi -->
    
    <h1>Salom Dunyo!</h1>
    <p>Bu mening birinchi veb-sahifam.</p>
    
    <h2>Men haqimda</h2>
    <p>Men bugun <strong>HTML</strong> o'rganishni boshladim!</p>
    <p>Bu juda <em>qiziqarli</em> tajriba.</p>
    
    <h2>Maqsadlarim</h2>
    <p>Men front-end dasturchi bo'lmoqchiman.</p>
    
    <hr>
    <p>Rahmat! <br> front-end.uz kursi</p>
</body>
</html>`,
      assignment: { title: "1-topshiriq: Birinchi HTML sahifangizni yarating", description: "VS Code da index.html fayl yarating. Ichiga: h1 da ismingiz, p da o'zingiz haqida 2-3 gap, h2 da 'Mening maqsadlarim' sarlavhasi, p da maqsadlaringiz, hr va em bilan ta'kidlangan matn qo'shing. Faylni brauzerda oching.", hint: "VS Code da '!' yozib Enter bosing - tayyor shablon chiqadi. Keyin <body> ichiga yozing." }
    },
    { id: 2, title: "HTML teglar va atributlar", description: "Asosiy HTML teglari va ularning atributlari bilan ishlash",
      content: `## Atribut nima?

Atribut - tegga QOÂ'SHIMCHA MA'LUMOT beradi. U ochiluvchi teg ichida yoziladi.

Formatâ€‹: <teg atribut="qiymat">

Masalan: <a href="https://google.com">Google</a>
Bu yerda href - atribut, "https://google.com" - qiymat.

## Eng muhim atributlar

### 1. href - havolalar uchun
<a> tegi bilan ishlatiladi. Boshqa sahifaga havola yaratadi:
- <a href="https://google.com">Google ga o'tish</a>
- <a href="about.html">Biz haqimizda</a> (ichki sahifa)
- <a href="#contact">Kontakt bo'limiga</a> (sahifa ichida)

target="_blank" - yangi tabda ochadi:
<a href="https://google.com" target="_blank">Yangi tabda</a>

### 2. src - rasmlar uchun
<img> tegi bilan ishlatiladi:
- <img src="rasm.jpg"> - joylashgan papkadan
- <img src="images/foto.png"> - images papkasidan
- <img src="https://example.com/photo.jpg"> - internetdan

### 3. alt - rasm tavsifi (MAJBURIY!)
Rasm yuklanmasa yoki ko'zi ojiz foydalanuvchilar uchun:
<img src="rasm.jpg" alt="Chiroyli tog' manzarasi">

### 4. width va height - o'lchamlar
<img src="rasm.jpg" alt="Rasm" width="300" height="200">

### 5. id va class
- id - sahifada YAGONA bo'lishi kerak (bitta element uchun)
- class - bir nechta elementda ishlatilishi mumkin

Masalan:
<h1 id="main-title">Asosiy sarlavha</h1>
<p class="info-text">Birinchi paragraf</p>
<p class="info-text">Ikkinchi paragraf</p>

### 6. style - ichki stil
<p style="color: red; font-size: 20px;">Qizil matn</p>
(Lekin bu usul tavsiya etilMAYDI - CSS ishlatgan yaxshi)

## Havola turlari

### Tashqi havola
<a href="https://google.com" target="_blank">Google</a>

### Ichki havola
<a href="contact.html">Kontakt sahifasi</a>

### Email havola
<a href="mailto:email@example.com">Email yuborish</a>

### Telefon havola
<a href="tel:+998901234567">Qo'ng'iroq qilish</a>

## Muhim: Bo'sh teglar

Ba'zi teglar yopilmaydi:
- <img src="..." alt="..."> - rasm
- <br> - yangi qator
- <hr> - gorizontal chiziq
- <input type="text"> - kiritish maydoni
- <meta charset="UTF-8"> - meta ma'lumot`,
      codeExample: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Teglar va atributlar</title>
</head>
<body>
    <h1 id="main-title">Mening portfoliom</h1>
    
    <h2>Men haqimda</h2>
    <p class="info">Salom! Men front-end dasturchiman.</p>
    
    <!-- Rasm qo'shish -->
    <img src="https://picsum.photos/400/250" 
         alt="Portfolio rasmi" 
         width="400">
    
    <h2>Kontaktlarim</h2>
    <p>
        <a href="mailto:test@gmail.com">📧 Email yuborish</a>
    </p>
    <p>
        <a href="tel:+998901234567">📞 Qo'ng'iroq qilish</a>
    </p>
    <p>
        <a href="https://github.com" target="_blank">
            🔗 GitHub profilim (yangi tabda ochiladi)
        </a>
    </p>
    
    <hr>
    <p><em>Sahifa yaratildi: 2026-yil</em></p>
</body>
</html>`,
      assignment: { title: "2-topshiriq: Shaxsiy portfolio sahifa", description: "Portfolio sahifa yarating: h1 da ismingiz, img bilan rasm (internetdan URL bilan), 3 ta havola (email, telefon, GitHub), har bir havolaga mos atributlar (href, target) qo'shing. id va class atributlarini ishlating.", hint: "Rasmni internetdan olish uchun: <img src='https://picsum.photos/300/200' alt='Rasm'>. target='_blank' yangi tabda ochadi." }
    },
    { id: 3, title: "HTML ro'yxatlar va jadvallar", description: "Tartibli va tartibsiz ro'yxatlar, jadval yaratish",
      content: `## Ro'yxatlar nima uchun kerak?

Ko'p hollarda ma'lumotlarni ro'yxat ko'rinishida berish qulay:
- Menyu elementlari
- Qadamlar ketma-ketligi
- Ko'nikmalar ro'yxati

## 1. Tartibsiz ro'yxat (Unordered List)

<ul> tegi bilan yaratiladi. Har bir element <li> (list item) ichida:

<ul>
    <li>Olma</li>
    <li>Banan</li>
    <li>Uzum</li>
</ul>

Natija: nuqtalar bilan ko'rsatiladi (• Olma, • Banan, • Uzum)

## 2. Tartibli ro'yxat (Ordered List)

<ol> tegi bilan yaratiladi. Raqamlar bilan chiqadi:

<ol>
    <li>HTML o'rganing</li>
    <li>CSS o'rganing</li>
    <li>JavaScript o'rganing</li>
</ol>

Natija: raqamlar bilan (1. HTML, 2. CSS, 3. JavaScript)

## 3. Ichma-ich ro'yxat

Ro'yxat ichida ro'yxat bo'lishi mumkin:

<ul>
    <li>Front-end
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
    <li>Back-end
        <ul>
            <li>Node.js</li>
            <li>Python</li>
        </ul>
    </li>
</ul>

## 4. Jadvallar (Tables)

Jadval yaratish uchun quyidagi teglar kerak:

- <table> - jadval boshi
- <thead> - sarlavha qismi
- <tbody> - asosiy qism
- <tr> - qator (table row)
- <th> - sarlavha katak (qalin, markazda)
- <td> - oddiy katak (table data)

## Jadval tuzilishi

<table>
    <thead>
        <tr>
            <th>Sarlavha 1</th>
            <th>Sarlavha 2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ma'lumot 1</td>
            <td>Ma'lumot 2</td>
        </tr>
    </tbody>
</table>

## Jadval atributlari

- border="1" - chegaralar ko'rsatish (eski usul, CSS yaxshiroq)
- cellpadding="10" - katak ichidagi bo'shliq
- colspan="2" - 2 ta ustunni birlashtirish
- rowspan="2" - 2 ta qatorni birlashtirish`,
      codeExample: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Ro'yxat va jadvallar</title>
</head>
<body>
    <h1>Mening CV sahifam</h1>
    
    <!-- Tartibsiz ro'yxat -->
    <h2>Ko'nikmalarim:</h2>
    <ul>
        <li>HTML va CSS</li>
        <li>JavaScript asoslari</li>
        <li>Git versiya nazorati</li>
        <li>Responsive dizayn</li>
    </ul>
    
    <!-- Tartibli ro'yxat -->
    <h2>Ta'lim bosqichlarim:</h2>
    <ol>
        <li>Maktab (2015-2026)</li>
        <li>Online kurslar (2026)</li>
        <li>Amaliyot (2026)</li>
    </ol>
    
    <!-- Jadval -->
    <h2>Ish tajribam:</h2>
    <table border="1" cellpadding="10">
        <thead>
            <tr>
                <th>Kompaniya</th>
                <th>Lavozim</th>
                <th>Yil</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tech Startup</td>
                <td>Junior Developer</td>
                <td>2026</td>
            </tr>
            <tr>
                <td>Freelance</td>
                <td>Web Developer</td>
                <td>2026</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`,
      assignment: { title: "3-topshiriq: CV sahifasi yarating", description: "To'liq CV sahifa: ko'nikmalar (tartibsiz ro'yxat), ta'lim bosqichlari (tartibli ro'yxat), ish tajribasi jadvali (kamida 3 qator, thead va tbody bilan). Jadvalda kompaniya nomi, lavozim va yil bo'lsin.", hint: "<thead> - jadval sarlavhasi, <tbody> - asosiy qism. <th> sarlavha katak, <td> oddiy katak." }
    },
    { id: 4, title: "CSS bilan tanishuv", description: "CSS nima, qanday ishlaydi va HTMLga ulash usullari",
      content: `## CSS nima?

CSS (Cascading Style Sheets) - HTML elementlarini BEZASH uchun til. HTML sahifa strukturasini bersa, CSS uning rangini, shriftini, joylashuvini va boshqa ko'rinishini belgilaydi.

CSSsiz sahifa juda oddiy va ko'rimsiz bo'ladi. CSS qo'shsangiz - professional va chiroyli bo'ladi!

## CSS ni HTML ga ulashning 3 ta usuli

### 1-usul: Inline CSS (teg ichida)
<p style="color: red; font-size: 20px;">Qizil matn</p>

❌ Tavsiya etilMAYDI - kodni tartibsiz qiladi

### 2-usul: Internal CSS (head ichida)
<head>
    <style>
        p { color: blue; }
    </style>
</head>

⚠️ Kichik loyihalar uchun yaxshi, lekin katta loyihalarda noqulay

### 3-usul: External CSS (alohida fayl) ✅ ENG YAXSHI!
<head>
    <link rel="stylesheet" href="styles.css">
</head>

✅ Alohida faylda - tartibli, qayta ishlatiladigan

## CSS sintaksisi (yozish qoidasi)

selektor {
    xususiyat: qiymat;
    xususiyat2: qiymat2;
}

Masalan:
h1 {
    color: blue;
    font-size: 32px;
    text-align: center;
}

Bu degani: "Barcha h1 sarlavhalarni ko'k rangda, 32px kattalikda, markazda ko'rsat"

## Eng ko'p ishlatiladigan CSS xususiyatlari

### Rang va matn
- color: red; - matn rangi
- background-color: #f5f5f5; - fon rangi
- font-size: 16px; - shrift kattaligi
- font-family: Arial, sans-serif; - shrift turi
- font-weight: bold; - qalinlik
- text-align: center; - matn joylashuvi (left, center, right)
- text-decoration: none; - chiziq (underline, none)
- line-height: 1.6; - qatorlar orasidagi masofa

### O'lcham
- width: 300px; - kenglik
- height: 200px; - balandlik
- max-width: 100%; - maksimal kenglik

### Chegara va bo'shliq
- border: 1px solid #ddd; - chegara
- border-radius: 8px; - burchak yumalatish
- padding: 20px; - ICHKI bo'shliq
- margin: 20px; - TASHQI bo'shliq

### Fon
- background-color: white;
- background-image: url('rasm.jpg');

## Ranglar qanday yoziladi?

1. Nom bilan: color: red; blue; green; orange;
2. HEX bilan: color: #ff0000; (#RRGGBB)
3. RGB bilan: color: rgb(255, 0, 0);
4. RGBA bilan: color: rgba(255, 0, 0, 0.5); (0.5 = yarim shaffof)

## Universal reset

Har bir loyiha boshida yozing:
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

Bu barcha teglarning standart bo'shliqlarini olib tashlaydi va hisoblashni osonlashtiradi.`,
      codeExample: `/* styles.css - alohida CSS fayl */

/* 1. Universal reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 2. Asosiy stillar */
body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
}

/* 3. Sarlavhalar */
h1 {
    color: #2c3e50;
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
}

h2 {
    color: #34495e;
    font-size: 24px;
    margin-top: 30px;
    margin-bottom: 15px;
}

/* 4. Paragraflar */
p {
    font-size: 16px;
    margin-bottom: 10px;
}

/* 5. Kartochka dizayni */
.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

/* 6. Havolalar */
a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    color: #2980b9;
    text-decoration: underline;
}

/* 7. Rasm */
img {
    max-width: 100%;
    border-radius: 8px;
}`,
      assignment: { title: "4-topshiriq: CSS bilan sahifani bezang", description: "Oldingi darsda yaratgan CV sahifangizga styles.css fayl yarating va ulang. Body ga fon rangi, h1 ga rang va markazlash, jadvalga chegara va padding, havolalarga rang va hover effekti bering. Har bir elementga kamida 2-3 ta xususiyat qo'shing.", hint: "HTML da: <link rel='stylesheet' href='styles.css'>. CSS da: body { background-color: #f0f0f0; }" }
    },
    { id: 5, title: "CSS selektorlar", description: "Element, class, ID va murakkab selektorlar",
      content: `## Selektor nima?

CSS da selektor - bu "QAYSI elementga stil berish kerak" degan savol javobidir.

## 3 ta asosiy selektor

### 1. Element selektori
To'g'ridan-to'g'ri teg nomini yozasiz:
p { color: blue; }
h1 { font-size: 32px; }

Bu BARCHA p va h1 elementlarga ta'sir qiladi.

### 2. Class selektori (.)
Nuqta (.) bilan boshlanadi. HTML da class atributi bilan bog'lanadi:

CSS:
.card { padding: 20px; background: white; }
.highlight { color: orange; }

HTML:
<div class="card">Kartochka</div>
<p class="highlight">Ajratilgan matn</p>

Bir elementga BIR NECHTA class berish mumkin:
<div class="card highlight">Ko'p classli</div>

### 3. ID selektori (#)
Grid (#) belgisi bilan boshlanadi. Sahifada BITTA bo'lishi kerak:

CSS:
#header { background: #333; color: white; }

HTML:
<div id="header">Sarlavha</div>

## Qo'shimcha selektorlar

### Universal selektor (*)
Barcha elementlarga:
* { margin: 0; padding: 0; }

### Guruhlash
Bir nechta selektorga bir xil stil:
h1, h2, h3 { color: #333; }

### Bola selektor (bo'shliq)
Ichidagi barcha elementlar:
.card p { color: gray; }

### To'g'ridan-to'g'ri bola (>)
Faqat birinchi darajali bolalar:
.card > p { font-weight: bold; }

## Pseudo-classlar

Maxsus holatlar uchun:
- :hover - sichqoncha ustida
- :focus - fokusda (input bosilganda)
- :first-child - birinchi bola element
- :last-child - oxirgi bola element
- :nth-child(2) - ikkinchi bola
- :nth-child(even) - juft elementlar
- :nth-child(odd) - toq elementlar

Masalan:
button:hover { background: darkblue; }
li:first-child { font-weight: bold; }
tr:nth-child(even) { background: #f5f5f5; }

## Selektor ustuvorligi (Specificity)

Qaysi stil "g'olib" chiqadi?
1. !important - eng kuchli (ISHLATMANG!)
2. Inline style (style="...") - 1000 ball
3. ID (#) - 100 ball
4. Class (.) - 10 ball
5. Element (p, h1) - 1 ball

Masalan: #header (100) > .card (10) > p (1)`,
      codeExample: `/* Element selektori */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
}

/* Class selektorlar */
.btn {
    display: inline-block;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
}

.btn-primary {
    background-color: #3498db;
    color: white;
}

.btn-danger {
    background-color: #e74c3c;
    color: white;
}

/* Pseudo-classlar */
.btn-primary:hover {
    background-color: #2980b9;
}

.btn-danger:hover {
    background-color: #c0392b;
}

/* ID selektori */
#navigation {
    background-color: #2c3e50;
    padding: 15px;
}

/* Kombinatsiyalar */
#navigation a {
    color: white;
    margin-right: 15px;
}

/* nth-child */
li:first-child {
    font-weight: bold;
    color: #e74c3c;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}`,
      assignment: { title: "5-topshiriq: Selektorlar amaliyoti", description: "Sahifa yarating: 3 xil class (.card, .btn, .highlight), 1 ta ID (#header), pseudo-classlar (:hover tugmalar uchun, :nth-child jadval uchun). Jadvalda juft qatorlarga boshqa fon rang bering.", hint: "Bir elementga bir nechta class: class='btn btn-primary'. :hover bilan sichqoncha ustida rang o'zgarsin." }
    },
    { id: 6, title: "CSS Box Model", description: "Content, padding, border, margin - elementlarning 'quticha' modeli",
      content: `## Box Model nima?

CSS da HAMMA element "quti" (box) hisoblanadi. Har bir quti 4 ta qismdan iborat - ichidan tashqariga qarab:

1. Content - ichki mazmun (matn, rasm)
2. Padding - content atrofidagi ICHKI bo'shliq
3. Border - chegara (ko'rinadigan chiziq)
4. Margin - TASHQI bo'shliq (boshqa elementlardan masofa)

## Tasavvur qiling

Siz sovg'a paketlamoqchisiz:
- Sovg'a = Content (ichidagi narsa)
- Qog'oz va mato = Padding (ichki o'rash)
- Quti = Border (tashqi chegara)
- Qutilar orasidagi masofa = Margin

## Padding (ichki bo'shliq)

padding: 20px; - har tomondan 20px
padding: 10px 20px; - yuqori/pastdan 10px, chapdan/o'ngdan 20px
padding: 10px 20px 15px 25px; - yuqori, o'ng, past, chap (soat yo'nalishida)

Alohida:
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;

## Margin (tashqi bo'shliq)

margin: 20px; - har tomondan
margin: 0 auto; - gorizontal markazlash! (muhim trick)
margin-bottom: 30px; - pastdan masofa

## Border (chegara)

border: 1px solid #ddd; - 1px, tekis chiziq, kulrang
border: 2px dashed red; - 2px, uzuq chiziq, qizil
border: 3px dotted blue; - 3px, nuqtali, ko'k

border-radius: 8px; - BURCHAK YUMALOQLASH
border-radius: 50%; - to'liq dumaloq (aylana)

## box-sizing: border-box (JUDA MUHIM!)

Standart holat (content-box):
width: 300px + padding: 20px + border: 1px = Haqiqiy kenglik: 342px 😕

box-sizing: border-box bilan:
width: 300px = HAMMA NARSA 300px ichida! ✅

Shuning uchun DOIM yozing:
* { box-sizing: border-box; }

## Box Shadow

Soya qo'shish:
box-shadow: 0 2px 5px rgba(0,0,0,0.1);

Formatâ€‹: x-offset y-offset blur-radius color
- 0 - gorizontal siljish
- 2px - vertikal siljish (pastga)
- 5px - xiralash miqdori
- rgba(0,0,0,0.1) - 10% shaffof qora

## Amaliy maslahatlar

1. margin: 0 auto; - elementni gorizontal markazlash (width bo'lishi kerak)
2. padding qo'shsangiz, element kattalashadi (agar border-box bo'lmasa)
3. Margin collapse - ikkita vertikal margin birlashadi, kattasi qoladi`,
      codeExample: `/* Universal reset - har doim yozing! */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
}

/* Kartochka dizayni */
.card {
    width: 300px;
    padding: 25px;
    margin: 20px auto;  /* Markazda */
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* Hover effekti */
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    transition: all 0.3s ease;
}

/* Profil rasmi - aylana */
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;    /* To'liq dumaloq */
    border: 3px solid #3498db;
    margin: 0 auto 15px;   /* Markazda, pastdan 15px */
}

/* Tugma */
.btn {
    display: block;
    width: 100%;
    padding: 12px;
    margin-top: 15px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
}`,
      assignment: { title: "6-topshiriq: Mahsulot kartochkalari", description: "3 ta mahsulot kartochkasi yarating. Har biriga: width, padding, border, border-radius, box-shadow qo'shing. Hover da kartochka biroz yuqoriga ko'tarilsin (transform: translateY(-5px)) va soyasi kuchaysin.", hint: "Har bir kartochkaga: .card { margin: 20px auto; } bilan markazlang. * { box-sizing: border-box; } yozishni unutmang!" }
    },
    { id: 7, title: "CSS Flexbox asoslari", description: "Elementlarni oson joylashtirish uchun Flexbox",
      content: `## Flexbox nima?

Flexbox - elementlarni qator yoki ustun bo'ylab OSON joylashtiradigan CSS xususiyati. Markazlash, teng taqsimlash va responsive dizayn uchun juda qulay!

## Qanday ishlatiladi?

OTA elementga (container) display: flex; yozing:

.container {
    display: flex;
}

Shundan keyin ichidagi BOLA elementlar (items) avtomatik qator bo'ylab joylashadi.

## Asosiy o'q va kesishma o'q

- Asosiy o'q (main axis) = default holatda GORIZONTAL (chapdan o'ngga)
- Kesishma o'q (cross axis) = VERTIKAL (yuqoridan pastga)

flex-direction bilan o'zgartirish mumkin:
- row (default) - gorizontal
- column - vertikal
- row-reverse - teskari gorizontal
- column-reverse - teskari vertikal

## justify-content (asosiy o'q bo'ylab)

Elementlarni GORIZONTAL joylashtirish:
- flex-start - chapda (default)
- flex-end - o'ngda
- center - markazda
- space-between - orasida teng masofa (birinchi chap, oxirgi o'ng)
- space-around - atrofida teng masofa
- space-evenly - hamma joyda teng masofa

## align-items (kesishma o'q bo'ylab)

Elementlarni VERTIKAL joylashtirish:
- stretch - cho'ziladi (default)
- flex-start - yuqorida
- flex-end - pastda
- center - vertikal markazda

## Markazda joylashtirish (eng ko'p ishlatiladigan)

.container {
    display: flex;
    justify-content: center;   /* gorizontal markaz */
    align-items: center;       /* vertikal markaz */
}

## flex-wrap

Elementlar sig'masa nima bo'ladi?
- nowrap (default) - siqiladi
- wrap - keyingi qatorga o'tadi

## gap

Elementlar orasidagi bo'shliq:
gap: 20px; - har tomonga 20px
row-gap: 10px; - qatorlar orasida
column-gap: 20px; - ustunlar orasida

## Bola elementlar xususiyatlari

- flex: 1; - barcha bo'sh joyni oladi
- flex: 0 1 300px; - boshlang'ich 300px, siqilishi mumkin
- order: -1; - birinchi bo'ladi (default: 0)
- align-self: center; - faqat o'zi markazda`,
      codeExample: `/* Navbar - eng klassik Flexbox misoli */
.navbar {
    display: flex;
    justify-content: space-between;  /* Logo chapda, menyu o'ngda */
    align-items: center;             /* Vertikal markaz */
    padding: 15px 30px;
    background: #2c3e50;
    color: white;
}

.nav-links {
    display: flex;
    gap: 20px;           /* Havolalar orasida 20px */
    list-style: none;
}

/* Kartochkalar - flex-wrap bilan */
.cards-container {
    display: flex;
    flex-wrap: wrap;     /* Sig'masa keyingi qatorga */
    gap: 20px;
    justify-content: center;
    padding: 20px;
}

.card {
    flex: 0 1 300px;     /* Minimum 300px kenglik */
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* To'liq markazlashtirish */
.hero {
    display: flex;
    flex-direction: column;    /* Vertikal joylash */
    justify-content: center;
    align-items: center;
    min-height: 80vh;         /* Ekran 80% balandligi */
    text-align: center;
    gap: 15px;
}

/* Footer - 3 ustunli */
.footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    padding: 40px 30px;
}

.footer-column {
    flex: 1;
    min-width: 200px;
}`,
      assignment: { title: "7-topshiriq: Flexbox bilan sahifa layout", description: "Sahifa yarating: Navbar (logo chapda, menyu o'ngda - space-between), Hero bo'lim (hamma narsa markazda, flex-direction: column), 4 ta kartochka (flex-wrap, gap bilan), Footer (3 ustun, space-between).", hint: "Navbar: display: flex; justify-content: space-between; align-items: center; Hero: min-height: 80vh bilan ekranning ko'p qismini egallaydi." }
    },
    { id: 8, title: "CSS Grid asoslari", description: "Ikki o'lchovli layout tizimi - qator VA ustunlar bilan ishlash",
      content: `## Grid nima?

CSS Grid - ikki o'lchovli layout tizimi. Flexbox faqat BITTA yo'nalishda (qator YOKI ustun) ishlasa, Grid bir vaqtda IKKALA yo'nalishda ishlaydi.

## Flexbox vs Grid

- Flexbox - bir o'lchovli (menyu, kartochkalar qatori)
- Grid - ikki o'lchovli (to'liq sahifa layouti, dashboard)

## Qanday boshlash?

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  /* 3 teng ustun */
    gap: 20px;
}

## Ustun o'lchamlari

- 1fr - bo'sh joydan teng ulush (fraction)
- 200px - aniq o'lcham
- auto - ichidagi content ga qarab
- minmax(200px, 1fr) - minimum 200px, maksimum 1fr

## repeat() funksiyasi

Takrorlash uchun:
grid-template-columns: repeat(3, 1fr); - 3 teng ustun
grid-template-columns: repeat(4, 250px); - 4 ta 250px ustun

## Responsive Grid (eng foydali!)

grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

Bu SEHRLI qator! Nima qiladi:
- Har bir ustun kamida 250px
- Ekran kengligiga qarab ustunlar soni AVTOMATIK o'zgaradi
- Katta ekranda 4 ustun, kichikda 1 ustun

## grid-template-areas (oson layout)

Sahifa qismlarini NOM bilan joylashtirish:

.container {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 70px 1fr 60px;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

## gap

Elementlar orasidagi masofa:
gap: 20px; - hamma tomonga
row-gap: 10px;
column-gap: 20px;

## Bola elementlar

- grid-column: 1 / 3; - 1-ustundan 3-gacha cho'ziladi
- grid-row: 1 / 3; - 1-qatordan 3-gacha
- grid-column: span 2; - 2 ta ustunni egallaydi`,
      codeExample: `/* Oddiy 3 ustunli grid */
.simple-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

/* Responsive grid - ENG FOYDALI! */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    padding: 20px;
}

/* Sahifa layouti - grid-template-areas bilan */
.page-layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 70px 1fr 60px;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
    gap: 0;
}

.header { 
    grid-area: header; 
    background: #2c3e50; 
    color: white;
    padding: 0 20px;
    display: flex;
    align-items: center;
}

.sidebar { 
    grid-area: sidebar; 
    background: #34495e;
    color: white;
    padding: 20px;
}

.main { 
    grid-area: main; 
    padding: 20px;
    background: #ecf0f1;
}

.footer { 
    grid-area: footer; 
    background: #2c3e50;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}`,
      assignment: { title: "8-topshiriq: Grid bilan Dashboard", description: "Admin dashboard yarating: header (yuqorida, to'liq kenglik), sidebar (chapda, 250px), main content (o'ngda), footer (pastda) - grid-template-areas bilan. Main content ichida responsive grid (auto-fit, minmax) bilan kartochkalar joylashtiring.", hint: "@media (max-width: 768px) da grid-template-columns: 1fr; va areas ni o'zgartiring." }
    },
    { id: 9, title: "Responsive dizayn", description: "Sahifani har qanday ekranda chiroyli ko'rsatish",
      content: `## Responsive dizayn nima?

Responsive dizayn - veb-sahifaning TELEFON, PLANSHET va KOMPYUTER da bir xil yaxshi ko'rinishi.

2026-yilda odamlarning 70%+ telefonda internet ishlatadi. Shuning uchun responsive dizayn MAJBURIY!

## 1-qadam: Viewport meta tegi (JUDA MUHIM!)

HTML head ichiga qo'shing:
<meta name="viewport" content="width=device-width, initial-scale=1.0">

Bu tegSIZ mobilda sahifa juda kichik ko'rinadi!

## 2-qadam: Media Queries

Turli ekran o'lchamlari uchun turli stillar yozish:

@media (max-width: 768px) {
    /* Bu stil 768px dan KICHIK ekranlarda ishlaydi */
    .sidebar { display: none; }
}

@media (min-width: 768px) {
    /* Bu stil 768px dan KATTA ekranlarda ishlaydi */
    .grid { grid-template-columns: repeat(2, 1fr); }
}

## Standart breakpointlar

- 480px - telefon (kichik)
- 640px - telefon (katta)
- 768px - planshet
- 1024px - laptop
- 1280px - desktop
- 1536px - katta ekran

## Mobile-First yondashuv (TAVSIYA!)

Birinchi MOBIL uchun yozing, keyin katta ekranlar uchun @media (min-width) ishlating:

/* Mobil uchun (default) */
.container { padding: 0 15px; }
.grid { grid-template-columns: 1fr; }

/* Planshet uchun */
@media (min-width: 768px) {
    .container { max-width: 720px; margin: 0 auto; }
    .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop uchun */
@media (min-width: 1024px) {
    .container { max-width: 1000px; }
    .grid { grid-template-columns: repeat(3, 1fr); }
}

## Responsive qilish texnikalari

### 1. Foiz (%) va max-width
img { max-width: 100%; height: auto; }
.container { width: 100%; max-width: 1200px; }

### 2. clamp() - avtomatik o'lcham
font-size: clamp(16px, 4vw, 24px);
- Minimum 16px, maksimum 24px, orasida ekranga qarab

### 3. vw/vh - ekran o'lchamiga nisbatan
- 100vw = ekran to'liq kengligi
- 100vh = ekran to'liq balandligi
- 50vh = ekranning yarmi

### 4. auto-fit Grid
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

## Rasmlar

Responsive rasm:
img {
    max-width: 100%;
    height: auto;
    display: block;
}

## Navbar mobilda

Desktop: gorizontal menyu
Mobil: hamburger menyu (☰) yoki yashirish`,
      codeExample: `/* Mobile-First Responsive Design */

/* === Mobil uchun (default) === */
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

.container {
    width: 100%;
    padding: 0 15px;
}

/* Sarlavha */
h1 {
    font-size: clamp(24px, 6vw, 48px);  /* Avtomatik o'lcham */
}

/* Rasmlar responsive */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Grid - mobilda 1 ustun */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px 0;
}

/* Navbar mobilda */
.navbar {
    display: flex;
    flex-direction: column;
    padding: 15px;
}

/* === Planshet (768px+) === */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .navbar {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}

/* === Desktop (1024px+) === */
@media (min-width: 1024px) {
    .container {
        max-width: 1000px;
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}`,
      assignment: { title: "9-topshiriq: To'liq responsive sahifa", description: "Mobile-first yondashuv bilan sahifa yarating: mobilda 1 ustun, planshetda 2 ustun, desktopda 3 ustun. Navbar mobilda vertikal, desktopda gorizontal. Rasmlarni responsive qiling. viewport meta tegini unutmang!", hint: "Birinchi mobil stillarni yozing, keyin @media (min-width: 768px) va @media (min-width: 1024px) qo'shing." }
    },
    { id: 10, title: "JavaScript asoslari", description: "O'zgaruvchilar, ma'lumot turlari va operatorlar",
      content: `## JavaScript nima?

JavaScript (qisqacha JS) - veb-sahifalarni JONLI qiladigan dasturlash tili. HTML struktura, CSS dizayn bersa, JavaScript INTERAKTIVLIK beradi:
- Tugma bosilganda biror narsa bo'lishi
- Ma'lumotlarni tekshirish
- Animatsiyalar
- Serverdan ma'lumot olish

## JavaScript qayerda yoziladi?

### 1. HTML ichida (script tegi)
<script>
    console.log("Salom!");
</script>

### 2. Alohida fayl (TAVSIYA!)
<script src="script.js"></script>

### 3. Brauzer konsolida
Chrome da F12 → Console tabiga yozing

## console.log() - eng birinchi do'stingiz!

Bu sizning "printer" - nima bo'layotganini ko'rish uchun:
console.log("Salom dunyo!");
console.log(5 + 3);
console.log("Mening ismim", "Ali");

Chrome da F12 → Console tabida ko'rinadi.

## O'zgaruvchilar

O'zgaruvchi - ma'lumot saqlaydigan "quti".

### const - O'ZGARMAS (eng ko'p ishlating!)
const ism = "Ali";
const yosh = 25;
// ism = "Vali"; ← XATOLIK! O'zgartirib bo'lmaydi

### let - O'ZGARUVCHAN
let ball = 0;
ball = 10; // ✅ O'zgartirish mumkin
ball = 20; // ✅ Yana o'zgartirish mumkin

### var - ESKIâ€‹, ISHLATMANG!
var nomi = "eski usul"; // ❌ let yoki const ishlating

## Qoida: const ishlating. Faqat o'zgarishi kerak bo'lsa let ishlating.

## Ma'lumot turlari

### 1. String (matn)
const ism = "Ali";
const gap = 'Salom dunyo!';

### 2. Number (son)
const yosh = 25;
const narx = 99.99;

### 3. Boolean (ha/yo'q)
const active = true;
const deleted = false;

### 4. Undefined (belgilanmagan)
let nomi;
console.log(nomi); // undefined

### 5. Null (bo'sh/yo'q)
const javob = null; // ataylab bo'sh

### 6. Array (massiv - ro'yxat)
const ranglar = ["qizil", "yashil", "ko'k"];

### 7. Object (obyekt)
const talaba = { ism: "Ali", yosh: 20 };

## Template Literals (juda qulay!)

Eski usul:
"Mening ismim " + ism + " va yoshim " + yosh

Yangi usul (backtick \` ishlating):
\`Mening ismim \${ism} va yoshim \${yosh}\`

## Operatorlar

### Matematik
+ (qo'shish), - (ayirish), * (ko'paytirish), / (bo'lish), % (qoldiq)

### Taqqoslash
=== (teng - BUNI ISHLATING!)
!== (teng emas)
>, <, >=, <=

### MUHIM: === va == farqi
5 === "5"  // false (tur ham tekshiradi) ✅
5 == "5"   // true (faqat qiymat) ❌ Xavfli!

Doim === ishlating!

### Mantiqiy
&& (VA), || (YOKI), ! (INKOR)`,
      codeExample: `// ===== O'zgaruvchilar =====

// const - o'zgarmas
const SITE_NAME = "front-end.uz";
const MAX_USERS = 100;

// let - o'zgaruvchan
let userCount = 0;
userCount = 5;

// ===== Ma'lumot turlari =====

// String
const firstName = "Xudarganov";
const lastName = "Farrux";

// Number
const age = 25;
const price = 99.99;

// Boolean
const isActive = true;
const isDeleted = false;

// ===== Template Literal =====
const fullName = \`\${firstName} \${lastName}\`;
console.log(\`Salom, \${fullName}!\`);
console.log(\`Yoshingiz: \${age}\`);

// ===== Matematik operatsiyalar =====
const discount = 0.15;  // 15% chegirma
const finalPrice = price * (1 - discount);
console.log(\`Asl narx: \${price} so'm\`);
console.log(\`Chegirma: \${discount * 100}%\`);
console.log(\`Yakuniy narx: \${finalPrice} so'm\`);

// ===== Taqqoslash =====
console.log(5 === 5);     // true
console.log(5 === "5");   // false (tur boshqa)
console.log(age >= 18);   // true

// ===== typeof - turni tekshirish =====
console.log(typeof firstName);  // "string"
console.log(typeof age);        // "number"
console.log(typeof isActive);   // "boolean"`,
      assignment: { title: "10-topshiriq: JavaScript asoslari", description: "script.js faylida: 5 ta const yarating (ism, familiya, yosh, kasb, shahar). Template literal bilan o'zingiz haqida taqdimot yozing. Narx va chegirma hisoblang. typeof bilan turlarini tekshiring. Hammasini console.log() bilan chiqaring.", hint: "Template literal: `Mening ismim ${ism}, yoshim ${yosh}`. console.log() bilan natijani ko'ring (F12 → Console)." }
    },
    { id: 11, title: "JavaScript funksiyalar va massivlar", description: "Qayta ishlatiladigan kod va ma'lumotlar ro'yxati",
      content: `## Funksiya nima?

Funksiya - bir necha marta ishlatiladigan KOD BLOKI. Bir xil ishni qayta-qayta yozmaslik uchun funksiya yaratamiz.

## Funksiya yaratish

### 1-usul: Oddiy funksiya
function spiqdash(ism) {
    return \`Salom, \${ism}!\`;
}

### 2-usul: Arrow funksiya (zamonaviy) ✅
const spiqdash = (ism) => \`Salom, \${ism}!\`;

### Parametr va Return
- Parametr = funksiyaga beriladigan MA'LUMOT
- Return = funksiya QAYTARADIGAN natija

function yigindi(a, b) {
    return a + b;  // Natijani qaytaradi
}
const natija = yigindi(5, 3);  // natija = 8

### Default parametr
function spiqdash(ism = "Mehmon") {
    return \`Salom, \${ism}!\`;
}
spiqdash();       // "Salom, Mehmon!"
spiqdash("Ali");  // "Salom, Ali!"

## Massiv (Array) nima?

Massiv - bir nechta ma'lumotni TARTIB bilan saqlaydigan ro'yxat.

const mevalar = ["olma", "banan", "uzum"];

### Indeks (0 dan boshlanadi!)
mevalar[0]  // "olma" (birinchi)
mevalar[1]  // "banan" (ikkinchi)
mevalar[2]  // "uzum" (uchinchi)

### Massiv uzunligi
mevalar.length  // 3

## Muhim massiv metodlari

### push() - oxirga qo'shish
mevalar.push("anor");  // ["olma", "banan", "uzum", "anor"]

### pop() - oxirgisini olish
mevalar.pop();  // "anor" ni olib tashlaydi

### unshift() - boshiga qo'shish
mevalar.unshift("gilos");  // boshiga qo'shadi

### shift() - birinchisini olish
mevalar.shift();  // birinchisini olib tashlaydi

### includes() - bormi?
mevalar.includes("olma");  // true

## Yuqori darajali metodlar (JUDA MUHIM!)

### forEach() - har biri uchun
mevalar.forEach((meva) => {
    console.log(meva);
});

### map() - yangi massiv yaratish
const kattaHarf = mevalar.map(meva => meva.toUpperCase());
// ["OLMA", "BANAN", "UZUM"]

### filter() - filtrlash
const uzunMevalar = mevalar.filter(meva => meva.length > 4);
// faqat 4 harfdan uzun mevalar

### find() - birinchi mosini topish
const topildi = mevalar.find(m => m === "banan");

### reduce() - yig'indi/jamlab hisoblash
const sonlar = [10, 20, 30];
const jami = sonlar.reduce((yigindi, son) => yigindi + son, 0);
// jami = 60`,
      codeExample: `// ===== Funksiyalar =====

// Oddiy funksiya
function spiqdash(ism) {
    return \`Salom, \${ism}!\`;
}
console.log(spiqdash("Farrux"));

// Arrow funksiya
const kopaytirish = (a, b) => a * b;
console.log(kopaytirish(5, 4));  // 20

// Default parametr
const chegirma = (narx, foiz = 10) => {
    return narx - (narx * foiz / 100);
};
console.log(chegirma(100));      // 90 (10% chegirma)
console.log(chegirma(100, 20));  // 80 (20% chegirma)

// ===== Massivlar =====

const mevalar = ["olma", "banan", "uzum", "anor", "gilos"];

// forEach - har birini chiqarish
console.log("--- Mevalar ---");
mevalar.forEach((meva, index) => {
    console.log(\`\${index + 1}. \${meva}\`);
});

// map - yangi massiv
const kattaHarf = mevalar.map(m => m.toUpperCase());
console.log(kattaHarf);

// filter - filtrlash
const qisqaMevalar = mevalar.filter(m => m.length <= 4);
console.log("Qisqa nomli:", qisqaMevalar);

// reduce - yig'indi
const sonlar = [10, 20, 30, 40, 50];
const jami = sonlar.reduce((sum, son) => sum + son, 0);
console.log(\`Jami: \${jami}\`);

// O'rtacha hisoblash
const ortacha = jami / sonlar.length;
console.log(\`O'rtacha: \${ortacha}\`);

// ===== Amaliy misol =====
const talabalar = [
    { ism: "Ali", ball: 85 },
    { ism: "Vali", ball: 72 },
    { ism: "Guli", ball: 91 },
    { ism: "Hasan", ball: 68 }
];

// A'lochi talabalar (80+)
const alochilar = talabalar.filter(t => t.ball >= 80);
console.log("A'lochilar:", alochilar);`,
      assignment: { title: "11-topshiriq: Funksiyalar va massivlar", description: "1. ortacha() funksiya yarating (sonlar massivi oladi, o'rtacha qaytaradi). 2. Talabalar massivi yarating (ism va ball). 3. filter bilan 80+ ball olganlarni toping. 4. map bilan faqat ismlarini ajrating. 5. reduce bilan umumiy ballni hisoblang.", hint: "O'rtacha = reduce bilan yig'indi / length. filter(t => t.ball >= 80) bilan a'lochilarni ajrating." }
    },
    { id: 12, title: "DOM bilan ishlash", description: "HTML elementlarini JavaScript bilan boshqarish",
      content: `## DOM nima?

DOM (Document Object Model) - brauzer HTML ni JavaScript uchun DARAXT ko'rinishida taqdim etishi. Bu orqali siz JS dan HTML elementlarini topishingiz, o'zgartirishingiz, qo'shishingiz va o'chirishingiz mumkin!

## Elementlarni topish

### getElementById() - ID bo'yicha
const sarlavha = document.getElementById("title");

### querySelector() - CSS selektor bilan (BITTA)
const btn = document.querySelector(".btn");
const firstCard = document.querySelector(".card");

### querySelectorAll() - CSS selektor bilan (HAMMASI)
const allCards = document.querySelectorAll(".card");

## Element o'zgartirish

### Matn o'zgartirish
element.textContent = "Yangi matn";
element.innerHTML = "<strong>Qalin</strong> matn";

### Stil o'zgartirish
element.style.color = "red";
element.style.fontSize = "20px";
element.style.display = "none";  // Yashirish

### Class qo'shish/olish
element.classList.add("active");     // Qo'shish
element.classList.remove("active");  // Olish
element.classList.toggle("active");  // Almashish
element.classList.contains("active"); // Bormi?

### Atribut o'zgartirish
element.setAttribute("href", "https://google.com");
element.getAttribute("href");

## Element yaratish va qo'shish

### 1. Yangi element yaratish
const yangiDiv = document.createElement("div");
yangiDiv.textContent = "Yangi element";
yangiDiv.className = "card";

### 2. Sahifaga qo'shish
parentElement.appendChild(yangiDiv);        // Oxiriga
parentElement.prepend(yangiDiv);            // Boshiga
parentElement.insertBefore(yangiDiv, ref);  // Oldiga

### 3. O'chirish
element.remove();

## innerHTML vs textContent

- textContent = faqat MATN (xavfsiz ✅)
- innerHTML = HTML TEGLAR bilan (ehtiyot bo'ling ⚠️)

element.textContent = "Oddiy matn";
element.innerHTML = "<h2>HTML bilan</h2>";`,
      codeExample: `// ===== Elementlarni topish =====
const title = document.getElementById("title");
const btn = document.querySelector(".btn");
const cards = document.querySelectorAll(".card");

// ===== Matn o'zgartirish =====
title.textContent = "Yangi sarlavha!";

// ===== Stil o'zgartirish =====
title.style.color = "#3498db";
title.style.textAlign = "center";

// ===== Class bilan ishlash =====
btn.classList.add("active");
btn.classList.toggle("loading");

// ===== Click hodisasi =====
btn.addEventListener("click", () => {
    btn.textContent = "Bosildi!";
    btn.classList.toggle("clicked");
});

// ===== Yangi element yaratish =====
function addCard(title, text) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = \`
        <h3>\${title}</h3>
        <p>\${text}</p>
        <button class="delete-btn" onclick="this.parentElement.remove()">
            O'chirish
        </button>
    \`;
    document.querySelector(".cards-container").appendChild(card);
}

// Yangi kartochka qo'shish
addCard("Yangi kartochka", "Bu dinamik qo'shildi!");

// ===== Ro'yxat bilan ishlash =====
const input = document.querySelector("#taskInput");
const list = document.querySelector("#taskList");

function addTask() {
    const text = input.value.trim();
    if (!text) return;
    
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", () => li.remove());
    list.appendChild(li);
    input.value = "";
}`,
      assignment: { title: "12-topshiriq: DOM bilan todo ro'yxati", description: "Oddiy todo ilova yarating: input maydoni, 'Qo'shish' tugmasi, ro'yxat (ul). Tugma bosilganda inputdagi matn li sifatida ro'yxatga qo'shilsin. Har bir li bosilganda o'chirilsin. Input bo'sh bo'lsa qo'shmasin.", hint: "document.createElement('li') bilan yangi element yarating. input.value bilan matni oling. list.appendChild(li) bilan qo'shing." }
    },
    { id: 13, title: "JavaScript hodisalar (Events)", description: "Click, input, submit va boshqa hodisalarni boshqarish",
      content: `## Hodisa (Event) nima?

Hodisa - foydalanuvchi sahifada BIROR NARSA qilganda sodir bo'ladigan voqea:
- Tugma bosish (click)
- Matn yozish (input)
- Forma yuborish (submit)
- Sichqoncha ustida (mouseover)

## addEventListener() - hodisani ushlash

element.addEventListener("hodisa_turi", funksiya);

Masalan:
const btn = document.querySelector("#myBtn");
btn.addEventListener("click", () => {
    console.log("Tugma bosildi!");
});

## Hodisa turlari

### Sichqoncha
- click - bosish
- dblclick - ikki marta bosish
- mouseenter - ustiga kirish
- mouseleave - ustidan chiqish

### Klaviatura
- keydown - tugma bosilganda
- keyup - tugma qo'yib yuborilganda

### Forma
- submit - forma yuborilganda
- input - har bir harf yozilganda
- change - qiymat o'zgarganda (select, checkbox)
- focus - fokusga tushganda
- blur - fokusdan chiqganda

## Event obyekti

Hodisa haqida ma'lumot olish:

btn.addEventListener("click", (event) => {
    console.log(event.target);      // Bosilgan element
    console.log(event.type);        // "click"
});

input.addEventListener("input", (e) => {
    console.log(e.target.value);    // Yozilgan matn
});

## e.preventDefault() - standart harakatni to'xtatish

Forma yuborilganda sahifa qayta yuklanishini TO'XTATISH:

form.addEventListener("submit", (e) => {
    e.preventDefault();  // Sahifa qayta yuklanMAYDI!
    // O'z kodingizni yozing
});

## Event Delegation (delegatsiya)

Ko'p elementga alohida listener qo'yish o'rniga, OTA elementga BITTA listener:

// YOMON - har bir li ga alohida
document.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", ...);
});

// YAXSHI - ul ga bitta
document.querySelector("ul").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});

## Amaliy namuna: Enter bilan qo'shish

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});`,
      codeExample: `// ===== Tugma hodisasi =====
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
    button.textContent = "Bosildi! ✅";
    button.style.background = "#27ae60";
});

// ===== Input hodisasi (real-time qidiruv) =====
const searchInput = document.querySelector("#search");
const resultDiv = document.querySelector("#results");

searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    resultDiv.textContent = query 
        ? \`Qidirilmoqda: "\${query}"\` 
        : "Qidiruv natijasi yo'q";
});

// ===== Forma hodisasi =====
const form = document.querySelector("#loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();  // Sahifa qayta yuklanMAYDI
    
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    if (!email || !password) {
        alert("Barcha maydonlarni to'ldiring!");
        return;
    }
    
    console.log("Login:", { email, password });
    alert(\`Xush kelibsiz, \${email}!\`);
});

// ===== Enter bilan qo'shish =====
const taskInput = document.querySelector("#taskInput");

taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const text = taskInput.value.trim();
        if (text) {
            addTask(text);
            taskInput.value = "";
        }
    }
});

// ===== Event Delegation =====
const taskList = document.querySelector("#taskList");

taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest("li").remove();
    }
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
});`,
      assignment: { title: "13-topshiriq: Interaktiv Todo ilova", description: "To'liq Todo ilova yarating: 1) Forma submit bilan yangi task qo'shish, 2) Enter tugmasi bilan ham qo'shish, 3) Task bosilganda 'bajarildi' holati (classList.toggle), 4) O'chirish tugmasi, 5) Bo'sh input qabul qilinmasin.", hint: "form.addEventListener('submit', (e) => { e.preventDefault(); }) bilan sahifa qayta yuklanishini to'xtating." }
    },
    { id: 14, title: "CSS animatsiyalar", description: "Transition, transform va @keyframes bilan jonli effektlar",
      content: `## Animatsiya nima uchun kerak?

Animatsiyalar sahifani JONLI va PROFESSIONAL ko'rsatadi:
- Tugmalar hover da o'zgaradi
- Elementlar paydo bo'ladi (fade in)
- Yuklanish indikatori aylanadi

## 1. Transition - silliq o'tish

Bir holatdan boshqasiga SILLIQ o'tish:

.btn {
    background: #3498db;
    color: white;
    transition: all 0.3s ease;
}

.btn:hover {
    background: #2980b9;
    transform: scale(1.05);
}

### transition sintaksisi
transition: xususiyat davomiylik tur;
- xususiyat: all, background, color, transform
- davomiylik: 0.3s, 0.5s, 1s
- tur: ease, ease-in, ease-out, ease-in-out, linear

## 2. Transform - shakl o'zgartirish

Element shaklini o'zgartirish (lekin joyini SAQLAydi):

### translateY() - vertikal siljish
transform: translateY(-5px);  // 5px yuqoriga

### translateX() - gorizontal siljish
transform: translateX(10px);  // 10px o'ngga

### scale() - kattalashtirish
transform: scale(1.1);  // 10% katta

### rotate() - aylantirish
transform: rotate(45deg);  // 45 gradus

### Bir nechta transformatsiya
transform: translateY(-5px) scale(1.05);

## 3. @keyframes - murakkab animatsiya

Ko'p bosqichli animatsiya yaratish:

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.element {
    animation: fadeIn 0.6s ease forwards;
}

### animation sintaksisi
animation: nom davomiylik tur kechikish takror;
- nom: @keyframes nomi
- davomiylik: 0.5s
- tur: ease, linear
- kechikish: 0.2s (boshlanishdan oldin kutish)
- takror: infinite (cheksiz), 1 (bir marta)

### forwards - oxirgi holatda qoladi

## Ko'p bosqichli animatsiya

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.card:hover {
    animation: pulse 0.5s ease;
}

## Amaliy misollar

### Spinner (yuklanish)
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
.spinner { animation: spin 1s linear infinite; }

### Staggered animation (ketma-ket paydo bo'lish)
.card:nth-child(1) { animation-delay: 0s; }
.card:nth-child(2) { animation-delay: 0.1s; }
.card:nth-child(3) { animation-delay: 0.2s; }`,
      codeExample: `/* ===== Transition ===== */
.btn {
    padding: 12px 24px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover {
    background: #2980b9;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

/* Kartochka hover */
.card {
    padding: 20px;
    background: white;
    border-radius: 12px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

/* ===== @keyframes ===== */

/* Fade In */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    animation: fadeIn 0.6s ease forwards;
}

/* Staggered - ketma-ket paydo bo'lish */
.card:nth-child(1) { animation: fadeIn 0.5s ease 0s forwards; }
.card:nth-child(2) { animation: fadeIn 0.5s ease 0.1s forwards; }
.card:nth-child(3) { animation: fadeIn 0.5s ease 0.2s forwards; }
.card:nth-child(4) { animation: fadeIn 0.5s ease 0.3s forwards; }

/* Spinner */
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #e0e0e0;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}`,
      assignment: { title: "14-topshiriq: Animatsiyali sahifa", description: "Sahifa yarating: 1) Hero bo'lim fadeIn animatsiya bilan paydo bo'lsin, 2) Tugmalar hover da yuqoriga ko'tarilsin va soya kuchaysin (transition + transform), 3) 4 ta kartochka ketma-ket paydo bo'lsin (animation-delay), 4) Spinner (yuklanish) animatsiyasi.", hint: "transition: all 0.3s ease; va transform: translateY(-5px); birgalikda ishlating. @keyframes bilan fadeIn yarating." }
    },
    { id: 15, title: "React asoslari", description: "Komponentlar, JSX va state bilan tanishish",
      content: `## React nima?

React - Facebook (Meta) tomonidan yaratilgan JavaScript kutubxonasi. U sahifani KOMPONENTLAR dan quradi - har bir komponent mustaqil, qayta ishlatiladigan UI qismi.

## Nega React?

1. Komponentlar - kodni qayta ishlating
2. Virtual DOM - tezkor yangilanish
3. Ish bozorida eng ko'p talab qilinadigan texnologiya

## Komponent nima?

Komponent - bu FUNKSIYA bo'lib, HTML qaytaradi:

function Welcome() {
    return <h1>Salom!</h1>;
}

Bu JSX deyiladi - JavaScript ichida HTML yozish.

## JSX qoidalari

1. className (class emas!)
   <div className="card">...</div>

2. camelCase
   onClick, onChange, onSubmit, backgroundColor

3. Bitta ildiz element
   // XATO:
   return <h1>Salom</h1><p>Matn</p>
   
   // TO'G'RI:
   return (
       <div>
           <h1>Salom</h1>
           <p>Matn</p>
       </div>
   );

4. {} ichida JavaScript
   <h1>{2 + 2}</h1>
   <p>{ism.toUpperCase()}</p>

## Props (xususiyatlar)

Props - ota komponentdan bola komponentga uzatiladigan ma'lumotlar:

function Card({ title, description }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

// Ishlatish:
<Card title="HTML" description="Sahifa strukturasi" />
<Card title="CSS" description="Dizayn" />

## useState - komponent holati

useState - komponent ichidagi O'ZGARUVCHAN ma'lumotni boshqarish:

import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h2>Son: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

### useState tushuntirish:
const [count, setCount] = useState(0);
- count - hozirgi qiymat
- setCount - qiymatni O'ZGARTIRISH funksiyasi
- 0 - boshlang'ich qiymat

## Massiv bilan ishlash

const [todos, setTodos] = useState([]);

// Qo'shish
setTodos([...todos, yangiItem]);

// O'chirish
setTodos(todos.filter(t => t.id !== id));

// Yangilash
setTodos(todos.map(t => t.id === id ? {...t, done: true} : t));`,
      codeExample: `import { useState } from 'react';

// ===== Oddiy komponent =====
function Card({ title, description }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

// ===== Counter (hisoblagich) =====
function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div className="counter">
            <h2>Son: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

// ===== Todo ilova =====
function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    
    const addTodo = () => {
        if (!input.trim()) return;
        setTodos([...todos, { 
            id: Date.now(), 
            text: input, 
            done: false 
        }]);
        setInput("");
    };
    
    const toggleTodo = (id) => {
        setTodos(todos.map(t => 
            t.id === id ? {...t, done: !t.done} : t
        ));
    };
    
    const deleteTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    };
    
    return (
        <div>
            <h1>Todo App</h1>
            <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="Yangi vazifa..."
            />
            <button onClick={addTodo}>Qo'shish</button>
            
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span 
                            onClick={() => toggleTodo(todo.id)}
                            style={{ textDecoration: todo.done ? "line-through" : "none" }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}`,
      assignment: { title: "15-topshiriq: React bilan Todo ilova", description: "React da Todo ilova yarating: useState bilan todos massiv, input bilan yangi task qo'shish, map() bilan ro'yxat, click bilan 'bajarildi' toggle, va o'chirish tugmasi. Har bir task uchun key={id} bering.", hint: "useState([]) bilan bo'sh massiv boshlang. setTodos([...todos, yangiItem]) bilan qo'shing. todos.filter(t => t.id !== id) bilan o'chiring." }
    },
    { id: 16, title: "React useEffect va Hooks", description: "useEffect hook va hayot sikli",
      content: `## useEffect nima?

useEffect - komponent yuklanganda, yangilanganda yoki o'chirilganda KOD ISHLATISH uchun hook.

## 3 xil ishlatish

### 1. Har render da
useEffect(() => {
    console.log("Har safar ishlaydi");
});

### 2. Faqat BIR MARTA (komponent yuklanganda)
useEffect(() => {
    console.log("Faqat bir marta");
}, []);  // Bo'sh massiv = bir marta

### 3. Dependency o'zgarganda
useEffect(() => {
    console.log(\`Count o'zgardi: \${count}\`);
}, [count]);  // count o'zgarganda ishlaydi

## Amaliy misollar

### Sahifa sarlavhasini yangilash
useEffect(() => {
    document.title = \`Son: \${count}\`;
}, [count]);

### localStorage bilan ishlash
// Saqlash
useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

// O'qish (bir marta)
const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
});

### Timer yaratish
useEffect(() => {
    const interval = setInterval(() => {
        setSeconds(s => s + 1);
    }, 1000);
    
    // Cleanup - komponent o'chirilganda timerni to'xtatish
    return () => clearInterval(interval);
}, []);

## Cleanup funksiya

return () => { ... } - komponent sahifadan KETGANDA ishlaydi.

Nima uchun kerak?
- Timer/intervallarni to'xtatish
- Event listenerlarni olish
- Subscribtionlarni bekor qilish

## useEffect qoidalari

1. Komponent ichida yozing (tepada)
2. If/for ICHIDA yozmang
3. Dependency massivini TO'G'RI yozing
4. Kerak bo'lsa cleanup qaytaring`,
      codeExample: `import { useState, useEffect } from 'react';

// ===== Sahifa sarlavhasi =====
function Counter() {
    const [count, setCount] = useState(0);
    
    // count o'zgarganda sarlavha yangilanadi
    useEffect(() => {
        document.title = \`Soni: \${count}\`;
    }, [count]);
    
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

// ===== localStorage bilan Todo =====
function TodoApp() {
    // Boshlang'ich qiymatni localStorage dan olish
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });
    
    // todos o'zgarganda localStorage ga saqlash
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    return <div>Todo App...</div>;
}

// ===== Timer (sekundomer) =====
function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    useEffect(() => {
        if (!isRunning) return;
        
        const interval = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
        
        // Cleanup - to'xtatish
        return () => clearInterval(interval);
    }, [isRunning]);
    
    return (
        <div>
            <h2>{seconds} soniya</h2>
            <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "To'xtatish" : "Boshlash"}
            </button>
            <button onClick={() => { setSeconds(0); setIsRunning(false); }}>
                Reset
            </button>
        </div>
    );
}`,
      assignment: { title: "16-topshiriq: useEffect bilan Todo", description: "Todo ilovangizni yangilang: 1) localStorage ga saqlash (useEffect), 2) Sahifa yuklanganda localStorage dan o'qish (useState initializer), 3) Sekundomer komponenti yarating (useEffect + setInterval + cleanup).", hint: "localStorage.setItem('key', JSON.stringify(data)) bilan saqlang. JSON.parse(localStorage.getItem('key')) bilan o'qing." }
    },
    { id: 17, title: "React Router", description: "Ko'p sahifali React ilovalar",
      content: `## React Router nima?

React Router - React ilovada turli sahifalar yaratish va ular orasida navigatsiya qilish kutubxonasi.

Masalan: /home, /about, /products/1

## O'rnatish
npm install react-router-dom

## Asosiy komponentlar

### BrowserRouter
Ilovani o'raydi:
<BrowserRouter>
    <App />
</BrowserRouter>

### Routes va Route
Sahifalarni belgilash:
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
</Routes>

### Link (a tegi o'rniga!)
<Link to="/">Bosh sahifa</Link>
<Link to="/about">Biz haqimizda</Link>

❌ <a href="/about"> - sahifani qayta yuklaydi
✅ <Link to="/about"> - faqat komponentni almashtiradi

## Dinamik parametrlar

Route da :
<Route path="/products/:id" element={<ProductDetail />} />

Komponent da useParams():
function ProductDetail() {
    const { id } = useParams();
    return <h1>Mahsulot #{id}</h1>;
}

## useNavigate - kod orqali navigatsiya

const navigate = useNavigate();

// Boshqa sahifaga o'tish
navigate('/about');

// Orqaga qaytish
navigate(-1);

## NavLink - aktiv sahifani belgilash

<NavLink to="/" className={({ isActive }) => 
    isActive ? "active" : ""
}>
    Bosh sahifa
</NavLink>

## 404 sahifa

<Route path="*" element={<NotFound />} />`,
      codeExample: `import { 
    BrowserRouter, Routes, Route, 
    Link, useParams, useNavigate 
} from 'react-router-dom';

// ===== Navbar =====
function Navbar() {
    return (
        <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#2c3e50' }}>
            <Link to="/" style={{ color: 'white' }}>🏠 Bosh sahifa</Link>
            <Link to="/about" style={{ color: 'white' }}>ℹ️ Biz haqimizda</Link>
            <Link to="/products" style={{ color: 'white' }}>🛒 Mahsulotlar</Link>
        </nav>
    );
}

// ===== Sahifalar =====
function Home() {
    return <h1>Bosh sahifa</h1>;
}

function About() {
    return <h1>Biz haqimizda</h1>;
}

function Products() {
    const products = [
        { id: 1, name: "Laptop" },
        { id: 2, name: "Telefon" },
        { id: 3, name: "Planshet" }
    ];
    
    return (
        <div>
            <h1>Mahsulotlar</h1>
            {products.map(p => (
                <Link key={p.id} to={\`/products/\${p.id}\`}>
                    <div className="card">{p.name}</div>
                </Link>
            ))}
        </div>
    );
}

// Dinamik sahifa
function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>Mahsulot #{id}</h1>
            <button onClick={() => navigate(-1)}>← Orqaga</button>
        </div>
    );
}

// ===== App =====
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="*" element={<h1>404 - Sahifa topilmadi</h1>} />
            </Routes>
        </BrowserRouter>
    );
}`,
      assignment: { title: "17-topshiriq: React Router bilan blog", description: "Blog ilova yarating: Bosh sahifa (postlar ro'yxati), /posts/:id (post tafsiloti), /about sahifasi, Navbar bilan navigatsiya, 404 sahifa. useParams bilan dinamik post ko'rsating.", hint: "useParams() bilan URL dan id ni oling: const { id } = useParams();" }
    },
    { id: 18, title: "Git asoslari", description: "Kodingiz tarixini saqlash va boshqarish",
      content: `## Git nima?

Git - versiya nazorati tizimi. U sizning KODINGIZ TARIXINI saqlaydi:
- Har bir o'zgarishni yozib boradi
- Xato qilsangiz oldingi holatga qaytishingiz mumkin
- Boshqalar bilan hamkorlik qilish imkonini beradi

## Git vs GitHub

- Git - DASTUR (kompyuterda o'rnatiladi)
- GitHub - SAYT (kodingizni internetda saqlash uchun)

## Git o'rnatish

1. git-scm.com dan yuklab o'rnating
2. Terminalni oching
3. git --version bilan tekshiring

## Asosiy buyruqlar

### Boshlash
git init - yangi Git repository yaratish

### Holat ko'rish
git status - nima o'zgardi?

### O'zgarishlarni qo'shish
git add . - BARCHA o'zgarishlarni tayyorlash
git add index.html - faqat bitta faylni

### Saqlash (commit)
git commit -m "Navbar yaratildi" - xabar bilan saqlash

### Tarix ko'rish
git log - barcha commitlar ro'yxati
git log --oneline - qisqa ko'rinishda

## Kundalik ish tartibi

1. Kod yozasiz
2. git add . (o'zgarishlarni tayyorlash)
3. git commit -m "Nima qildim" (saqlash)
4. Yana kod yozasiz...

## Branch (tarmoq)

Branch - asosiy kodga ZARAR BERMASDAN yangi xususiyat ustida ishlash.

git branch feature-login     - yangi branch yaratish
git checkout feature-login   - branchga o'tish
git checkout -b feature-cart - yaratish + o'tish (tezkor)

## Merge (birlashtirish)

git checkout main           - asosiy branchga qaytish
git merge feature-login     - feature-login ni main ga birlashtirish

## GitHub bilan ishlash

### Yangi loyihani yuklash
git remote add origin https://github.com/user/repo.git
git push -u origin main

### Mavjud loyihani klonlash
git clone https://github.com/user/repo.git

### O'zgarishlarni yuklash
git push

### O'zgarishlarni olish
git pull

## .gitignore fayli

Git ga e'tibor BERMASLIK kerak bo'lgan fayllar:
node_modules/
.env
.DS_Store`,
      codeExample: `# ===== 1. Yangi loyiha boshlash =====
git init
git add .
git commit -m "Dastlabki commit - loyiha yaratildi"

# ===== 2. Kundalik ish =====
# Kod yozganingizdan keyin:
git status                    # Nima o'zgardi?
git add .                     # Barchasini tayyorlash
git commit -m "Navbar yaratildi"

# Yana kod yozib:
git add .
git commit -m "Hero bo'lim qo'shildi"

# ===== 3. Branch bilan ishlash =====
git checkout -b feature-login    # Yangi branch

# Login sahifasini yozasiz...
git add .
git commit -m "Login sahifasi yaratildi"

# Asosiy branchga qaytish va birlashtirish
git checkout main
git merge feature-login

# ===== 4. GitHub ga yuklash =====
# GitHub da yangi repository yarating
git remote add origin https://github.com/username/my-project.git
git push -u origin main

# Keyingi o'zgarishlar:
git add .
git commit -m "Footer qo'shildi"
git push

# ===== 5. Loyihani klonlash =====
git clone https://github.com/username/project.git
cd project

# ===== 6. Foydali buyruqlar =====
git log --oneline    # Qisqa tarix
git diff             # O'zgarishlarni ko'rish
git stash            # Vaqtincha saqlash`,
      assignment: { title: "18-topshiriq: Git bilan loyiha boshqarish", description: "1) git init bilan loyiha boshlang, 2) Kamida 3 ta commit qiling, 3) feature-style branch yaratib, o'zgarish qiling, 4) main ga merge qiling, 5) GitHub da repository yaratib push qiling.", hint: "git checkout -b feature-style bilan yangi branch. O'zgarish qilib commit qilib, git checkout main va git merge feature-style." }
    },
    { id: 19, title: "API bilan ishlash", description: "Serverdan ma'lumot olish va yuborish",
      content: `## API nima?

API (Application Programming Interface) - ikki dastur o'rtasidagi ALOQA YO'LI.

Oddiy tilda: Siz restoranga borsangiz, ofitsiant sizning buyurtmangizni oshpazga yetkazadi va taomni sizga olib keladi. Ofitsiant = API.

Veb dasturlashda: Sizning saytingiz SERVERDAN ma'lumot so'raydi va javob oladi.

## fetch() - HTTP so'rov yuborish

JavaScript da serverga so'rov yuborish uchun fetch() ishlatiladi:

fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));

## async/await - osonroq yozish

const getData = async () => {
    const response = await fetch('URL');
    const data = await response.json();
    console.log(data);
};

await = "javob kelguncha KUT" degani. Kod sinxron ko'rinadi, lekin asinxron ishlaydi.

## HTTP metodlar

### GET - ma'lumot OLISH
await fetch('/api/users');

### POST - yangi ma'lumot YARATISH
await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Ali', age: 25 })
});

### PUT - mavjud ma'lumotni YANGILASH
await fetch('/api/users/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Ali yangilangan' })
});

### DELETE - ma'lumotni O'CHIRISH
await fetch('/api/users/1', { method: 'DELETE' });

## Error handling - xatolarni ushlash

try {
    const response = await fetch('URL');
    if (!response.ok) {
        throw new Error('Server xatosi!');
    }
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error('Xatolik:', error.message);
}

## React da API ishlatish

useEffect bilan sahifa yuklanganda ma'lumot olish:

const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    fetchUsers();
}, []);

## Bepul API lar mashq uchun

- https://jsonplaceholder.typicode.com - foydalanuvchilar, postlar
- https://pokeapi.co/api/v2/pokemon - Pokemon ma'lumotlari
- https://api.github.com/users/username - GitHub profili`,
      codeExample: `// ===== GET - ma'lumot olish =====
async function getUsers() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const users = await response.json();
        
        users.forEach(user => {
            console.log(\`\${user.name} - \${user.email}\`);
        });
    } catch (error) {
        console.error('Xatolik:', error.message);
    }
}

// ===== POST - yangi ma'lumot yaratish =====
async function createPost(title, body) {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: 1
                })
            }
        );
        const newPost = await response.json();
        console.log('Yaratildi:', newPost);
    } catch (error) {
        console.error('Xatolik:', error);
    }
}

// ===== React da ishlatish =====
// import { useState, useEffect } from 'react';

function UsersList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }, []);
    
    if (loading) return <div className="spinner"></div>;
    if (error) return <p>Xatolik: {error}</p>;
    
    return (
        <div>
            <h1>Foydalanuvchilar</h1>
            {users.map(user => (
                <div key={user.id} className="card">
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}`,
      assignment: { title: "19-topshiriq: API bilan React ilova", description: "React ilova yarating: 1) useEffect bilan API dan postlarni oling (jsonplaceholder), 2) Loading holati (spinner), 3) Xatolik holati, 4) Postlarni kartochkalarda ko'rsating, 5) Qidiruv funksiyasi (filter).", hint: "https://jsonplaceholder.typicode.com/posts - 100 ta post qaytaradi. useState bilan loading va error holatlarini boshqaring." }
    },
    { id: 20, title: "Loyiha yaratish - Kurs yakuni", description: "O'rganganlaringizni bitta loyihada birlashtiring",
      content: `## Tabriklaymiz! 🎉 Kurs yakunlandi!

Siz 20 ta darsda front-end dasturlashning ASOSLARINI o'rgandingiz:

### HTML (1-3 darslar)
✅ Sahifa strukturasi yaratish
✅ Teglar va atributlar
✅ Ro'yxatlar va jadvallar

### CSS (4-9 darslar)
✅ Stillar va selektorlar
✅ Box Model
✅ Flexbox va Grid
✅ Responsive dizayn
✅ Animatsiyalar

### JavaScript (10-14 darslar)
✅ O'zgaruvchilar va ma'lumot turlari
✅ Funksiyalar va massivlar
✅ DOM bilan ishlash
✅ Hodisalar (Events)

### React (15-17 darslar)
✅ Komponentlar va JSX
✅ Props va useState
✅ useEffect
✅ React Router

### Amaliy ko'nikmalar (18-19 darslar)
✅ Git versiya nazorati
✅ API bilan ishlash

## Keyingi qadamlar

### 1. Portfolio sayt yarating
Shaxsiy portfolio saytingizni yarating va GitHub Pages da joylashtiring. Bu sizning "vizit kartangiz" bo'ladi.

### 2. Loyihalar yarating
- Todo ilova (React + localStorage)
- Weather ilova (API bilan)
- E-commerce do'kon
- Blog platformasi

### 3. Yangi texnologiyalar o'rganing
- TypeScript - JavaScript ga turlar qo'shadi
- Next.js - React frameworki
- Tailwind CSS - tezkor stillar
- Node.js - backend

### 4. GitHub profilingizni boyiting
Har bir loyihangizni GitHub ga yuklang. Ish beruvchilar GitHub ni ko'radi!

## Yakuniy maslahatlar

1. Har kuni kamida 1 soat kod yozing
2. Boshqalarning kodini o'qing (GitHub)
3. Xato qilishdan qo'rqmang - xato orqali o'rganasiz
4. Community ga qo'shiling (Discord, Telegram)
5. Portfolio yarating va ish qidiring!

## Sertifikat

Testdan muvaffaqiyatli o'tsangiz, front-end.uz sertifikatini olasiz! 🏅`,
      codeExample: `// ===== Portfolio loyiha namunasi =====

// Navbar komponenti
function Navbar() {
    return (
        <nav className="navbar">
            <a href="#home" className="logo">Portfolio</a>
            <div className="nav-links">
                <a href="#about">Men haqimda</a>
                <a href="#skills">Ko'nikmalar</a>
                <a href="#projects">Loyihalar</a>
                <a href="#contact">Kontakt</a>
            </div>
        </nav>
    );
}

// Hero bo'limi
function Hero() {
    return (
        <section id="home" className="hero">
            <h1>Salom! Men <span className="highlight">Front-End</span> dasturchiman</h1>
            <p>React, JavaScript, HTML va CSS bilan zamonaviy veb-saytlar yarataman</p>
            <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">Loyihalarim</a>
                <a href="#contact" className="btn btn-outline">Bog'lanish</a>
            </div>
        </section>
    );
}

// Ko'nikmalar
function Skills() {
    const skills = [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Git", level: 70 }
    ];
    
    return (
        <section id="skills">
            <h2>Ko'nikmalarim</h2>
            <div className="skills-grid">
                {skills.map(skill => (
                    <div key={skill.name} className="skill-card">
                        <h3>{skill.name}</h3>
                        <div className="skill-bar">
                            <div 
                                className="skill-fill" 
                                style={{ width: skill.level + '%' }}
                            ></div>
                        </div>
                        <span>{skill.level}%</span>
                    </div>
                ))}
            </div>
        </section>
    );
}`,
      assignment: { title: "20-topshiriq: Portfolio sayt yarating", description: "To'liq portfolio sayt yarating: 1) Navbar (havolalar bilan), 2) Hero bo'lim (ism, kasb, CTA tugmalar), 3) Ko'nikmalar (HTML, CSS, JS, React, Git), 4) Loyihalar bo'limi (3+ loyiha kartochkasi), 5) Kontakt bo'limi, 6) Responsive dizayn (mobil, planshet, desktop). CSS Grid, Flexbox va animatsiyalar ishlating!", hint: "CSS Grid bilan responsive grid: repeat(auto-fit, minmax(300px, 1fr)). Flexbox bilan navbar. @keyframes bilan fadeIn animatsiya." }
    }
];

// ===== Quiz Questions (OSONLASHTIRILGAN) =====
const quizQuestions = [
    { id: 1, question: "HTML qanday til hisoblanadi?", options: ["Dasturlash tili", "Belgilash tili", "Stil tili", "Ma'lumotlar bazasi tili"], correctAnswer: 1, explanation: "HTML (HyperText Markup Language) - bu belgilash tili bo'lib, veb-sahifalar strukturasini yaratish uchun ishlatiladi." },
    { id: 2, question: "Veb-sahifada foydalanuvchi ko'radigan kontent qaysi teg ichida yoziladi?", options: ["<head>", "<title>", "<body>", "<meta>"], correctAnswer: 2, explanation: "<body> tegi ichidagi barcha kontent foydalanuvchiga ko'rinadi. <head> esa brauzer uchun ma'lumot saqlaydi." },
    { id: 3, question: "Rasm qo'shish uchun qaysi teg ishlatiladi?", options: ["<picture>", "<photo>", "<img>", "<image>"], correctAnswer: 2, explanation: "<img> tegi rasm qo'shish uchun ishlatiladi. src atributi bilan rasm manzili beriladi." },
    { id: 4, question: "HTML da eng katta sarlavha tegi qaysi?", options: ["<h6>", "<h1>", "<header>", "<title>"], correctAnswer: 1, explanation: "<h1> eng katta sarlavha tegi. h1 dan h6 gacha kichiklashib boradi." },
    { id: 5, question: "CSS ni alohida fayldan ulash uchun qaysi teg ishlatiladi?", options: ["<style>", "<css>", "<link>", "<script>"], correctAnswer: 2, explanation: "<link rel='stylesheet' href='styles.css'> - CSS faylini ulash uchun link tegi ishlatiladi." },
    { id: 6, question: "CSS da class selektori qaysi belgi bilan boshlanadi?", options: ["# (grid)", ". (nuqta)", "* (yulduzcha)", "@ (at)"], correctAnswer: 1, explanation: "Class selektori nuqta (.) bilan boshlanadi. Masalan: .card { padding: 20px; }" },
    { id: 7, question: "CSS da element ichidagi bo'shliq qanday nomlanadi?", options: ["margin", "padding", "border", "gap"], correctAnswer: 1, explanation: "Padding - element ichidagi bo'shliq. Margin esa tashqi bo'shliq." },
    { id: 8, question: "Flexbox da display: flex; qo'yilganda elementlar qanday joylashadi?", options: ["Ustma-ust", "Qator bo'ylab (gorizontal)", "Yashirinadi", "Aylanada"], correctAnswer: 1, explanation: "display: flex; bilan ichidagi elementlar avtomatik gorizontal qator bo'ylab joylashadi." },
    { id: 9, question: "CSS Grid nima uchun ishlatiladi?", options: ["Matn rangini o'zgartirish", "Animatsiya yaratish", "Sahifa layoutini tuzish", "Shrift o'zgartirish"], correctAnswer: 2, explanation: "CSS Grid - sahifa layoutini qator va ustunlar bo'ylab tuzish uchun ikki o'lchovli tizim." },
    { id: 10, question: "Mobil qurilmalar uchun sahifani moslashtirish nima deyiladi?", options: ["Animation", "Responsive dizayn", "Flexbox", "Git"], correctAnswer: 1, explanation: "Responsive dizayn - sahifani telefon, planshet va kompyuterda to'g'ri ko'rsatish usuli." },
    { id: 11, question: "JavaScript da o'zgarmas (o'zgartirib bo'lmaydigan) o'zgaruvchi qanday yaratiladi?", options: ["var", "let", "const", "static"], correctAnswer: 2, explanation: "const kalit so'zi bilan yaratilgan o'zgaruvchining qiymatini keyinchalik o'zgartirib bo'lmaydi." },
    { id: 12, question: "console.log() nima qiladi?", options: ["Sahifaga matn chiqaradi", "Brauzer konsoliga ma'lumot chiqaradi", "Faylga yozadi", "Xatolik chiqaradi"], correctAnswer: 1, explanation: "console.log() brauzer konsolida (F12 → Console) ma'lumot chiqaradi. Debugging uchun ishlatiladi." },
    { id: 13, question: "JavaScript da massivga oxiridan element qo'shish uchun qaysi metod ishlatiladi?", options: ["add()", "push()", "append()", "insert()"], correctAnswer: 1, explanation: "push() metodi massivning OXIRIGA yangi element qo'shadi." },
    { id: 14, question: "HTML sahifada elementni JavaScript bilan topish uchun qaysi metod ishlatiladi?", options: ["findElement()", "getElement()", "document.querySelector()", "search()"], correctAnswer: 2, explanation: "document.querySelector('.class') yoki document.getElementById('id') bilan elementni topish mumkin." },
    { id: 15, question: "Tugma bosilganda biror narsa qilish uchun qaysi metod ishlatiladi?", options: ["onClick()", "addEventListener()", "onPress()", "clickHandler()"], correctAnswer: 1, explanation: "element.addEventListener('click', function) bilan tugma bosilganda funksiya ishga tushadi." },
    { id: 16, question: "CSS transition nima qiladi?", options: ["Element yaratadi", "O'zgarishlarni silliq (animatsiyali) qiladi", "Elementni o'chiradi", "Rang qo'shadi"], correctAnswer: 1, explanation: "transition - CSS xususiyat o'zgarganda silliq o'tish effekti yaratadi. Masalan hover da." },
    { id: 17, question: "CSS @keyframes nima yaratish uchun ishlatiladi?", options: ["O'zgaruvchi", "Animatsiya", "Funksiya", "Selektor"], correctAnswer: 1, explanation: "@keyframes bilan ko'p bosqichli CSS animatsiyalar yaratiladi." },
    { id: 18, question: "React da UI ning qayta ishlatiladigan qismiga nima deyiladi?", options: ["Modul", "Komponent", "Plugin", "Widget"], correctAnswer: 1, explanation: "React komponent - mustaqil, qayta ishlatiladigan UI qismi. Masalan: Button, Card, Navbar." },
    { id: 19, question: "React da komponent ichidagi o'zgaruvchan ma'lumotni boshqarish uchun nima ishlatiladi?", options: ["useEffect", "useState", "useRef", "props"], correctAnswer: 1, explanation: "useState hook - komponent ichidagi holatni (state) boshqarish uchun ishlatiladi." },
    { id: 20, question: "React da ota komponentdan bola komponentga ma'lumot uzatish qanday nomlanadi?", options: ["State", "Props", "Hooks", "Context"], correctAnswer: 1, explanation: "Props (properties) - ota komponentdan bola komponentga uzatiladigan ma'lumotlar." },
    { id: 21, question: "Git da o'zgarishlarni saqlash (commit) uchun qaysi buyruq ishlatiladi?", options: ["git save", "git commit", "git push", "git store"], correctAnswer: 1, explanation: "git commit -m 'xabar' buyrug'i o'zgarishlarni local repository ga saqlaydi." },
    { id: 22, question: "Git branch (tarmoq) nima uchun kerak?", options: ["Fayllarni o'chirish", "Asosiy kodga zarar bermasdan yangi xususiyat yaratish", "Serverga yuklash", "Loyihani o'chirish"], correctAnswer: 1, explanation: "Branch orqali asosiy (main) kodga tegmasdan yangi xususiyatlar ustida ishlash mumkin." },
    { id: 23, question: "API dan ma'lumot olish uchun JavaScript da qaysi funksiya ishlatiladi?", options: ["getData()", "fetch()", "request()", "download()"], correctAnswer: 1, explanation: "fetch('URL') funksiyasi serverga HTTP so'rov yuborib, javob qaytaradi." },
    { id: 24, question: "async/await nima uchun ishlatiladi?", options: ["CSS yozish uchun", "Asinxron kodni oson yozish uchun", "HTML yaratish uchun", "Rasm qo'shish uchun"], correctAnswer: 1, explanation: "async/await - Promise bilan ishlashni osonlashtiradi. Kod o'qish va yozish qulay bo'ladi." },
    { id: 25, question: "HTTP POST so'rovi nima uchun ishlatiladi?", options: ["Ma'lumot olish", "Yangi ma'lumot yaratish/yuborish", "Ma'lumot o'chirish", "Sahifani yangilash"], correctAnswer: 1, explanation: "POST metodi serverga YANGI ma'lumot yuborish va yaratish uchun ishlatiladi. GET esa olish uchun." },
    { id: 26, question: "Responsive dizayn uchun CSS da qanday qoida ishlatiladi?", options: ["@font-face", "@media", "@import", "@charset"], correctAnswer: 1, explanation: "@media (max-width: 768px) { } - turli ekran o'lchamlari uchun turli stillar yozish imkonini beradi." },
    { id: 27, question: "JSX da HTML class atributi o'rniga nima yoziladi?", options: ["class", "className", "cssClass", "htmlClass"], correctAnswer: 1, explanation: "JSX da class - JavaScript ning maxsus so'zi, shuning uchun className ishlatiladi." },
    { id: 28, question: "CSS da :hover qachon ishlaydi?", options: ["Element bosilganda", "Sichqoncha element ustida bo'lganda", "Sahifa yuklanganda", "Element yashirilganda"], correctAnswer: 1, explanation: ":hover pseudo-class - sichqoncha kursori element ustiga kelganda stillarni qo'llaydi." },
    { id: 29, question: "Veb-sahifani mobil qurilmada to'g'ri ko'rsatish uchun qaysi meta teg kerak?", options: ["<meta charset>", "<meta viewport>", "<meta description>", "<meta author>"], correctAnswer: 1, explanation: "<meta name='viewport' content='width=device-width, initial-scale=1.0'> - mobilda to'g'ri ko'rsatish uchun majburiy." },
    { id: 30, question: "JavaScript da massivning uzunligini qanday bilish mumkin?", options: ["array.count", "array.size", "array.length", "array.total"], correctAnswer: 2, explanation: "array.length xususiyati massivdagi elementlar sonini qaytaradi." }
];

// ===== Initialize Lessons Grid (Landing Page) =====
function initLessons() {
    const lessonsGrid = document.getElementById('lessonsGrid');
    if (!lessonsGrid) return;

    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');

    lessonsGrid.innerHTML = lessons.map(lesson => {
        const isDone = completed.includes(lesson.id);
        return `
        <a href="lesson.html?id=${lesson.id}" class="lesson-card ${isDone ? 'completed' : ''}">
            <div class="lesson-content">
                <div class="lesson-number ${isDone ? 'done' : ''}">${isDone ? '✓' : lesson.id}</div>
                <div class="lesson-info">
                    <h3 class="lesson-title">${lesson.title}</h3>
                    <div class="lesson-meta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                        </svg>
                        <span>Dars ${lesson.id}</span>
                        ${isDone ? '<span class="lesson-done-badge">✅ Tugatilgan</span>' : ''}
                    </div>
                </div>
            </div>
            <svg class="lesson-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
            </svg>
        </a>
    `}).join('');
}

// ===== Lesson Page =====
function initLessonPage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const lesson = lessons.find(l => l.id === id);
    if (!lesson) { window.location.href = 'index.html'; return; }

    // Header
    document.getElementById('lessonNum').textContent = lesson.id;
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonMeta').textContent = `Dars ${lesson.id} / ${lessons.length}`;
    document.title = `${lesson.title} - front-end.uz`;

    // Check completion
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    updateCompleteBtn(completed.includes(id));

    // Sidebar
    const sidebarNav = document.getElementById('sidebarNav');
    sidebarNav.innerHTML = lessons.map(l => `
        <a href="lesson.html?id=${l.id}" class="sidebar-link ${l.id === id ? 'active' : ''} ${completed.includes(l.id) ? 'completed' : ''}">
            <span class="sidebar-num">${l.id}</span>
            <span class="sidebar-text">${l.title}</span>
            ${completed.includes(l.id) ? '<span class="sidebar-check">✓</span>' : ''}
        </a>
    `).join('');

    // Sidebar toggle
    const sidebar = document.getElementById('sidebar');
    document.getElementById('sidebarToggle').addEventListener('click', () => sidebar.classList.toggle('open'));
    document.getElementById('sidebarClose').addEventListener('click', () => sidebar.classList.remove('open'));

    // Content
    const contentArea = document.getElementById('lessonContent');
    let html = '';

    // Description
    html += `<div class="lesson-desc-box"><p>${lesson.description}</p></div>`;

    // Main content - improved markdown parsing
    html += '<div class="lesson-text">';
    const lines = lesson.content.split('\n');
    let inList = false;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (!line) {
            if (inList) { html += '</ul>'; inList = false; }
            continue;
        }
        
        if (line.startsWith('## ')) {
            if (inList) { html += '</ul>'; inList = false; }
            html += `<h2>${line.replace('## ', '')}</h2>`;
        } else if (line.startsWith('### ')) {
            if (inList) { html += '</ul>'; inList = false; }
            html += `<h3>${line.replace('### ', '')}</h3>`;
        } else if (line.startsWith('- ') || line.startsWith('✅ ') || line.startsWith('❌ ') || line.startsWith('⚠️ ')) {
            if (!inList) { html += '<ul>'; inList = true; }
            html += `<li>${line.replace(/^- /, '')}</li>`;
        } else if (/^\d+\.\s/.test(line)) {
            if (inList) { html += '</ul>'; inList = false; }
            html += `<p><strong>${line}</strong></p>`;
        } else {
            if (inList) { html += '</ul>'; inList = false; }
            html += `<p>${line}</p>`;
        }
    }
    if (inList) html += '</ul>';
    html += '</div>';

    // Code example
    if (lesson.codeExample) {
        html += `
            <div class="lesson-code-section">
                <div class="lesson-code-header">
                    <h3>💻 Kod namunasi</h3>
                    <button class="btn btn-ghost btn-sm" onclick="copyCode(this)">📋 Nusxalash</button>
                </div>
                <div class="code-block"><pre><code>${escapeHtml(lesson.codeExample)}</code></pre></div>
            </div>`;
    }

    // Assignment
    if (lesson.assignment) {
        html += `
            <div class="lesson-assignment">
                <div class="lesson-assignment-inner">
                    <div class="lesson-assignment-icon">📝</div>
                    <div>
                        <h3>${lesson.assignment.title}</h3>
                        <p>${lesson.assignment.description}</p>
                        ${lesson.assignment.hint ? `<div class="lesson-hint">💡 <strong>Maslahat:</strong> ${lesson.assignment.hint}</div>` : ''}
                    </div>
                </div>
            </div>`;
    }

    // Navigation
    const prev = id > 1 ? id - 1 : null;
    const next = id < lessons.length ? id + 1 : null;
    html += '<div class="lesson-nav">';
    if (prev) html += `<a href="lesson.html?id=${prev}" class="btn btn-outline">← Oldingi dars</a>`;
    else html += '<div></div>';
    if (next) html += `<a href="lesson.html?id=${next}" class="btn btn-hero">Keyingi dars →</a>`;
    else html += `<a href="quiz.html" class="btn btn-hero" style="background:var(--success);color:white;">🏆 Yakuniy testga o'tish →</a>`;
    html += '</div>';

    contentArea.innerHTML = html;
}

function markComplete() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes(id)) {
        completed.push(id);
        localStorage.setItem('completedLessons', JSON.stringify(completed));
    }
    updateCompleteBtn(true);
    const link = document.querySelector(`.sidebar-link.active`);
    if (link && !link.classList.contains('completed')) {
        link.classList.add('completed');
        link.innerHTML += '<span class="sidebar-check">✓</span>';
    }
}

function updateCompleteBtn(done) {
    const btn = document.getElementById('completeBtn');
    if (done) {
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span class="btn-complete-text">Tugatilgan ✅</span>';
        btn.classList.add('done');
        btn.disabled = true;
    }
}

function copyCode(btn) {
    const code = btn.closest('.lesson-code-section').querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(() => {
        btn.textContent = '✅ Nusxalandi!';
        setTimeout(() => btn.textContent = '📋 Nusxalash', 2000);
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Quiz Page =====
let quizState = { current: 0, selected: null, showResult: false, answers: [] };
let quizTimer = null;
let quizTimeLeft = 50 * 60; // 50 minutes in seconds

function initQuizPage() {
    quizState = { current: 0, selected: null, showResult: false, answers: [] };
    quizTimeLeft = 50 * 60;
    startQuizTimer();
    renderQuestion();
}

function startQuizTimer() {
    if (quizTimer) clearInterval(quizTimer);
    updateTimerDisplay();
    quizTimer = setInterval(() => {
        quizTimeLeft--;
        updateTimerDisplay();
        if (quizTimeLeft <= 0) {
            clearInterval(quizTimer);
            showQuizResult();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('quizTimer');
    if (!timerEl) return;
    const minutes = Math.floor(quizTimeLeft / 60);
    const seconds = quizTimeLeft % 60;
    timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Warning colors
    if (quizTimeLeft <= 300) { // 5 min
        timerEl.classList.add('warning');
    }
    if (quizTimeLeft <= 60) { // 1 min
        timerEl.classList.remove('warning');
        timerEl.classList.add('danger');
    }
}

function renderQuestion() {
    const q = quizQuestions[quizState.current];
    document.getElementById('quizCounter').textContent = `${quizState.current + 1} / ${quizQuestions.length}`;
    document.getElementById('progressFill').style.width = `${((quizState.current + 1) / quizQuestions.length) * 100}%`;
    document.getElementById('quizBadge').textContent = `Savol ${quizState.current + 1}`;
    document.getElementById('quizQuestion').textContent = q.question;
    document.getElementById('quizExplanation').style.display = 'none';
    document.getElementById('quizSubmit').style.display = 'inline-flex';
    document.getElementById('quizSubmit').disabled = true;
    document.getElementById('quizNext').style.display = 'none';
    quizState.selected = null;
    quizState.showResult = false;

    const optionsEl = document.getElementById('quizOptions');
    optionsEl.innerHTML = q.options.map((opt, i) => `
        <button class="quiz-option" onclick="selectOption(${i})" data-index="${i}">
            <span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>
            <span class="quiz-option-text">${opt}</span>
        </button>
    `).join('');
}

function selectOption(index) {
    if (quizState.showResult) return;
    quizState.selected = index;
    document.getElementById('quizSubmit').disabled = false;
    document.querySelectorAll('.quiz-option').forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });
}

function submitAnswer() {
    if (quizState.selected === null) return;
    quizState.showResult = true;
    quizState.answers.push(quizState.selected);
    const q = quizQuestions[quizState.current];
    const correct = q.correctAnswer;

    document.querySelectorAll('.quiz-option').forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.remove('selected');
        if (i === correct) btn.classList.add('correct');
        if (i === quizState.selected && i !== correct) btn.classList.add('wrong');
    });

    const expEl = document.getElementById('quizExplanation');
    expEl.style.display = 'block';
    expEl.className = 'quiz-explanation ' + (quizState.selected === correct ? 'correct' : 'wrong');
    expEl.innerHTML = `<strong>${quizState.selected === correct ? '✅ To\'g\'ri!' : '❌ Noto\'g\'ri.'}</strong> ${q.explanation}`;

    document.getElementById('quizSubmit').style.display = 'none';
    const nextBtn = document.getElementById('quizNext');
    nextBtn.style.display = 'inline-flex';
    nextBtn.textContent = quizState.current < quizQuestions.length - 1 ? 'Keyingi savol →' : 'Natijani ko\'rish 🏆';
}

function nextQuestion() {
    if (quizState.current < quizQuestions.length - 1) {
        quizState.current++;
        renderQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    if (quizTimer) clearInterval(quizTimer);
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('quizResult').style.display = 'flex';

    const score = quizState.answers.reduce((s, a, i) => s + (a === quizQuestions[i].correctAnswer ? 1 : 0), 0);
    const passed = score >= 25;
    const pct = Math.round((score / quizQuestions.length) * 100);
    const timeUsed = (50 * 60) - quizTimeLeft;
    const minsUsed = Math.floor(timeUsed / 60);
    const secsUsed = timeUsed % 60;

    document.getElementById('resultIcon').innerHTML = passed ? '🏆' : '📚';
    document.getElementById('resultIcon').className = 'quiz-result-icon ' + (passed ? 'pass' : 'fail');
    document.getElementById('resultTitle').textContent = passed ? 'Tabriklaymiz! 🎉' : "Yana biroz tayyorlaning!";
    document.getElementById('resultScore').innerHTML = `Sizning natijangiz: <strong>${score}</strong> / ${quizQuestions.length} (${pct}%)`;
    document.getElementById('resultProgress').style.width = `${pct}%`;
    document.getElementById('resultProgress').className = 'quiz-result-progress ' + (passed ? 'pass' : 'fail');
    document.getElementById('resultMessage').textContent = passed
        ? `Siz kursni muvaffaqiyatli yakunladingiz! Vaqt: ${minsUsed} daqiqa ${secsUsed} soniya. Endi sertifikat olishingiz mumkin.`
        : `O'tish uchun kamida 25 ta to'g'ri javob kerak. Siz ${score} ta to'g'ri javob berdingiz. Darslarni qayta ko'rib chiqing va yana urinib ko'ring!`;
    
    const actionBtn = document.getElementById('resultAction');
    if (passed) {
        actionBtn.textContent = '🏅 Sertifikat olish';
        actionBtn.onclick = () => window.location.href = 'certificate.html';
    } else {
        actionBtn.textContent = '🔄 Qayta urinish';
        actionBtn.onclick = () => {
            document.getElementById('quizResult').style.display = 'none';
            document.getElementById('quizPage').style.display = 'block';
            initQuizPage();
        };
    }
}

function handleResultAction() {}

// ===== Certificate Page =====
function initCertificatePage() {
    const input = document.getElementById('certName');
    const btn = document.getElementById('certGenBtn');
    if (!input || !btn) return;
    input.addEventListener('input', () => {
        btn.disabled = !input.value.trim();
    });
}

function generateCertificate() {
    const name = document.getElementById('certName').value.trim();
    if (!name) return;
    document.getElementById('certInput').style.display = 'none';
    document.getElementById('certView').style.display = 'block';
    document.getElementById('certNameDisplay').textContent = name;
    document.getElementById('certDate').textContent = new Date().toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('certId').textContent = `Sertifikat ID: FE-${Date.now().toString(36).toUpperCase()}`;
}

// ===== Smooth Scroll =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

// ===== Animations =====
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.stat-card, .feature-card, .lesson-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(el);
    });
}

// ===== Header Scroll =====
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.style.boxShadow = window.pageYOffset > 100 ? 'var(--shadow-md)' : 'none';
    });
}

// ===== Init Landing Page =====
document.addEventListener('DOMContentLoaded', () => {
    initLessons();
    initSmoothScroll();
    initAnimations();
    initHeaderScroll();
});

// ===== Console =====
console.log('%c🚀 front-end.uz', 'font-size: 24px; font-weight: bold; color: #0ea5e9;');
console.log('%cO\'zbek tilida bepul front-end kursi!', 'font-size: 14px; color: #64748b;');
console.log('%c© 2026 Xudarganov Farrux', 'font-size: 12px; color: #94a3b8;');
