export interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  content: string;
  codeExample?: string;
  assignment: {
    title: string;
    description: string;
    hint?: string;
    solution?: string;
  };
  vsCodeSteps?: string[];
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "HTML nima va u qanday ishlaydi?",
    description: "Web sahifalarning asosi - HTML tili bilan tanishish",
    duration: "25 daqiqa",
    content: `HTML (HyperText Markup Language) - bu veb-sahifalar yaratish uchun ishlatiladigan standart til. Qisqacha aytganda, HTML brauzerlarga "bu sarlavha", "bu rasm", "bu havola" deb aytuvchi til.

## Oddiy tilda tushuntirish

Tasavvur qiling: siz uy quryapsiz. HTML - bu uyning g'ishtlari va skelet-konstruksiyasi. U uyga shakl beradi, lekin hali bezak yo'q (CSS) va elektr yo'q (JavaScript).

Brauzer (Chrome, Firefox) HTML faylni o'qiydi va uni chiroyli sahifaga aylantiradi.

## HTML hujjat strukturasi

Har bir HTML sahifa quyidagi qismlardan iborat:

- <!DOCTYPE html> - "Bu HTML5 hujjati" degan bildirish
- <html> - hamma narsa shu ichida
- <head> - sahifa haqida ma'lumot (brauzer ko'rsatmaydi)
- <body> - foydalanuvchi ko'radigan hamma narsa

## Teglar qanday ishlaydi?

Teg - bu < va > ichidagi maxsus so'z. Masalan:
- <p> - paragraf boshlaydi
- </p> - paragraf tugaydi

Misol: <p>Salom dunyo!</p>

Natija: brauzer "Salom dunyo!" degan matnni ko'rsatadi.

## Eng ko'p ishlatiladigan teglar

Sarlavhalar:
- <h1> - eng katta sarlavha (sahifada 1 ta)
- <h2> - bo'lim sarlavhasi
- <h3> - kichik bo'lim

Matn:
- <p> - paragraf (oddiy matn)
- <br> - yangi qatorga o'tish
- <strong> - qalin matn
- <em> - kursiv matn

## Brauzer HTML ni qanday o'qiydi?

1. Faylni yuklab oladi
2. Yuqoridan pastga o'qiydi
3. Har bir tegni tushunib, chizadi

Xuddi kitob o'qigandek - birinchi sahifadan oxirigacha.`,
    codeExample: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mening birinchi sahifam</title>
</head>
<body>
    <!-- Bu izoh - brauzer buni ko'rsatmaydi -->
    
    <h1>Salom Dunyo!</h1>
    <p>Bu mening birinchi veb-sahifam.</p>
    <p>Men bugun <strong>HTML</strong> o'rganishni boshladim!</p>
    
    <h2>Nega HTML o'rganish kerak?</h2>
    <p>HTML barcha veb-sahifalarning <em>asosi</em> hisoblanadi.</p>
    
    <h2>Keyingi qadamlar</h2>
    <p>HTML dan keyin CSS va JavaScript o'rganaman.</p>
</body>
</html>`,
    vsCodeSteps: [
      "VS Code ni oching",
      "File → New File bosing",
      "Faylni 'index.html' deb saqlang (Ctrl+S)",
      "Fayl ichida '!' yozing va Enter bosing - tayyor shablon chiqadi",
      "<body> ichiga o'z kodingizni yozing",
      "Faylni saqlang (Ctrl+S)",
      "Faylni brauzerda oching (fayl ustiga 2 marta bosing)"
    ],
    assignment: {
      title: "Birinchi HTML sahifangizni yarating",
      description: "To'liq HTML sahifa yarating. Unda: 1) h1 tegi ichida o'z ismingizni yozing, 2) p tegi ichida o'zingiz haqida 2-3 gap yozing, 3) h2 tegi ichida 'Mening maqsadlarim' deb yozing, 4) Yana bir p tegi ichida dasturlash bo'yicha maqsadlaringizni yozing, 5) strong va em teglarini ham ishlating.",
      hint: "<!DOCTYPE html> bilan boshlang. VS Code da '!' yozib Enter bosing - tayyor shablon chiqadi.",
      solution: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mening sahifam</title>
</head>
<body>
    <h1>Jasur Karimov</h1>
    <p>Men <strong>Toshkent</strong>da yashayman. Yoshim 22 da. <em>Dasturlashni</em> juda yaxshi ko'raman!</p>
    
    <h2>Mening maqsadlarim</h2>
    <p>Men professional <strong>frontend dasturchi</strong> bo'lmoqchiman. 
    2024 yil oxirigacha <em>React</em> va <em>TypeScript</em> ni mukammal o'rganmoqchiman.</p>
</body>
</html>`
    }
  },
  {
    id: 2,
    title: "HTML teglar va atributlar",
    description: "Asosiy HTML teglari va ularning atributlari bilan ishlash",
    duration: "30 daqiqa",
    content: `## Atribut nima?

Atribut - tegga qo'shimcha ma'lumot beradi. Masalan:
- <a href="..."> - href atributi havolaning manzilini ko'rsatadi
- <img src="..."> - src atributi rasm joylashgan joyni ko'rsatadi

Sintaksis: <teg atribut="qiymat">

## Eng muhim atributlar

### href - havolalar uchun
<a href="https://google.com">Google</a>
Bu "Google" so'zini bosganda google.com ga olib boradi.

### src - rasmlar uchun
<img src="rasm.jpg">
Bu rasmni ko'rsatadi.

### alt - rasm tavsifi
<img src="rasm.jpg" alt="Chiroyli tog'">
Rasm yuklanmasa, "Chiroyli tog'" matni ko'rinadi. SEO uchun ham muhim!

### id va class
- id - sahifada yagona (bitta element uchun)
- class - bir nechta elementda ishlatilishi mumkin

<div id="header">Bu yagona</div>
<p class="text">Bu takrorlanishi mumkin</p>
<p class="text">Yana shu class</p>

## Havola turlari

### Tashqi havola (boshqa saytga)
<a href="https://google.com" target="_blank">Google</a>
target="_blank" - yangi tabda ochadi

### Ichki havola (shu saytda)
<a href="about.html">Biz haqimizda</a>

### Telefon va email
<a href="tel:+998901234567">Qo'ng'iroq qilish</a>
<a href="mailto:email@example.com">Email yuborish</a>

## Rasm tegi

<img src="rasm.jpg" alt="Tavsif" width="300" height="200">

- src - rasm manzili (majburiy!)
- alt - tavsif (majburiy!)
- width/height - o'lcham (ixtiyoriy)

## Blok va inline elementlar

Blok elementlar - yangi qatordan boshlanadi:
- <div>, <p>, <h1>, <ul>

Inline elementlar - qator ichida:
- <span>, <a>, <strong>, <em>, <img>`,
    codeExample: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Teglar va atributlar</title>
</head>
<body>
    <!-- Sarlavhalar -->
    <h1 id="main-title">Asosiy sarlavha</h1>
    <h2>Ikkinchi darajali</h2>
    
    <!-- Matn formatlash -->
    <p>Bu oddiy paragraf. <strong>Bu muhim matn</strong> va <em>bu ta'kidlangan</em>.</p>
    
    <!-- Havolalar -->
    <h3>Foydali havolalar:</h3>
    <p>
        <a href="https://google.com" target="_blank">Google (yangi tabda)</a><br>
        <a href="https://youtube.com" target="_blank">YouTube</a><br>
        <a href="tel:+998901234567">📞 Qo'ng'iroq qilish</a><br>
        <a href="mailto:info@example.com">📧 Email yuborish</a>
    </p>
    
    <!-- Rasmlar -->
    <h3>Rasmlar:</h3>
    <img 
        src="https://picsum.photos/300/200" 
        alt="Tasodifiy rasm"
        width="300"
        height="200"
    >
    
    <!-- ID va Class -->
    <div id="contact" class="section">
        <h3>Bog'lanish</h3>
        <p class="text">Telefon: +998 90 123 45 67</p>
        <p class="text">Email: info@example.com</p>
    </div>
</body>
</html>`,
    vsCodeSteps: [
      "Yangi fayl yarating: portfolio.html",
      "'!' yozib Enter bosing - shablon chiqadi",
      "<body> ichiga sarlavha qo'shing: <h1>Ismingiz</h1>",
      "Rasm qo'shing: <img src=\"URL\" alt=\"tavsif\">",
      "Havolalar qo'shing: <a href=\"URL\">Matn</a>",
      "target=\"_blank\" qo'shib, yangi tabda ochilishini sinang",
      "Saqlang va brauzerda oching"
    ],
    assignment: {
      title: "Shaxsiy portfolio sahifa",
      description: "Portfolio sahifa yarating: 1) h1 da ismingiz (id='name'), 2) Rasmingiz yoki placeholder rasm (https://picsum.photos/200), 3) O'zingiz haqida 2 ta paragraf (class='about'), 4) 3 ta ijtimoiy tarmoq havolasi (target='_blank'), 5) Telefon va email havolasi, 6) hr bilan ajratilgan footer.",
      hint: "Rasm uchun: <img src='https://picsum.photos/200' alt='Mening rasmim'>. Havolalar uchun target='_blank' qo'shing.",
      solution: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Jasur - Portfolio</title>
</head>
<body>
    <h1 id="name">Jasur Karimov</h1>
    
    <img src="https://picsum.photos/200" alt="Jasur Karimov rasmi">
    
    <h2>Men haqimda</h2>
    <p class="about">Men frontend dasturchiman. 3 yillik tajribam bor. HTML, CSS, JavaScript va React texnologiyalarini bilaman.</p>
    <p class="about">Hozirda startup loyihasida ishlayman. Bo'sh vaqtimda yangi texnologiyalar o'rganaman va blog yozaman.</p>
    
    <h2>Ijtimoiy tarmoqlar</h2>
    <p>
        <a href="https://github.com/jasur" target="_blank">GitHub</a> | 
        <a href="https://linkedin.com/in/jasur" target="_blank">LinkedIn</a> | 
        <a href="https://t.me/jasur" target="_blank">Telegram</a>
    </p>
    
    <h2>Bog'lanish</h2>
    <p>
        <a href="tel:+998901234567">📞 +998 90 123 45 67</a><br>
        <a href="mailto:jasur@example.com">📧 jasur@example.com</a>
    </p>
    
    <hr>
    
    <footer>
        <p>&copy; 2024 Jasur Karimov. Barcha huquqlar himoyalangan.</p>
    </footer>
</body>
</html>`
    }
  },
  {
    id: 3,
    title: "HTML ro'yxatlar va jadvallar",
    description: "Tartibli va tartibsiz ro'yxatlar, jadval yaratish",
    duration: "35 daqiqa",
    content: `## Ro'yxatlar nima uchun kerak?

Ma'lumotlarni tartibli ko'rsatish uchun. Masalan:
- Menyu bandlari
- Qadamlar ro'yxati
- Xarid savati

## Tartibsiz ro'yxat (ul)

Nuqtalar bilan. Tartib muhim emas:

<ul>
    <li>Olma</li>
    <li>Banan</li>
    <li>Uzum</li>
</ul>

Natija:
• Olma
• Banan
• Uzum

## Tartibli ro'yxat (ol)

Raqamlar bilan. Tartib muhim:

<ol>
    <li>HTML o'rganing</li>
    <li>CSS o'rganing</li>
    <li>JavaScript o'rganing</li>
</ol>

Natija:
1. HTML o'rganing
2. CSS o'rganing
3. JavaScript o'rganing

## Ichma-ich ro'yxat

Ro'yxat ichida ro'yxat:

<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
    <li>Backend</li>
</ul>

## Jadvallar

Jadval = qatorlar + ustunlar. Excel jadvaliga o'xshaydi.

Asosiy teglar:
- <table> - jadval
- <tr> - qator (table row)
- <th> - sarlavha katak (table header)
- <td> - oddiy katak (table data)

Struktura:
- <thead> - sarlavha qismi
- <tbody> - asosiy qism
- <tfoot> - pastki qism (ixtiyoriy)

## Jadval atributlari

- colspan="2" - 2 ta ustunni birlashtirish
- rowspan="2" - 2 ta qatorni birlashtirish`,
    codeExample: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Ro'yxatlar va Jadvallar</title>
</head>
<body>
    <h1>Ro'yxatlar</h1>
    
    <!-- Tartibsiz ro'yxat -->
    <h2>Mening sevimli taomlarim:</h2>
    <ul>
        <li>Osh</li>
        <li>Lag'mon</li>
        <li>Somsa</li>
        <li>Manti</li>
    </ul>
    
    <!-- Tartibli ro'yxat -->
    <h2>Dasturlashni o'rganish bosqichlari:</h2>
    <ol>
        <li>HTML asoslarini o'rganing</li>
        <li>CSS bilan tanishing</li>
        <li>JavaScript o'rganing</li>
        <li>Framework tanlang (React)</li>
    </ol>
    
    <!-- Ichma-ich ro'yxat -->
    <h2>Web texnologiyalar:</h2>
    <ul>
        <li>Frontend
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </li>
        <li>Backend
            <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>PHP</li>
            </ul>
        </li>
    </ul>
    
    <hr>
    
    <h1>Jadval</h1>
    
    <!-- To'liq jadval -->
    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr>
                <th>Ism</th>
                <th>Yosh</th>
                <th>Kasb</th>
                <th>Shahar</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ali</td>
                <td>25</td>
                <td>Dasturchi</td>
                <td>Toshkent</td>
            </tr>
            <tr>
                <td>Malika</td>
                <td>23</td>
                <td>Dizayner</td>
                <td>Samarqand</td>
            </tr>
            <tr>
                <td>Jasur</td>
                <td>28</td>
                <td>Menejer</td>
                <td>Buxoro</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4"><strong>Jami: 3 kishi</strong></td>
            </tr>
        </tfoot>
    </table>
</body>
</html>`,
    vsCodeSteps: [
      "Yangi fayl: cv.html",
      "<ul> bilan ko'nikmalar ro'yxatini yozing",
      "<ol> bilan ta'lim bosqichlarini yozing",
      "<table> bilan ish tajribasi jadvalini yarating",
      "<thead> va <tbody> ishlating",
      "border='1' qo'shib chegarani ko'ring",
      "Brauzerda oching va tekshiring"
    ],
    assignment: {
      title: "Shaxsiy CV sahifasi",
      description: "CV sahifa yarating: 1) Tartibsiz ro'yxatda 5 ta texnik ko'nikmangiz, 2) Tartibli ro'yxatda ta'lim bosqichlaringiz (maktab, kollej, universitet - yillar bilan), 3) Ish tajribasi jadvali (kompaniya, lavozim, yillar, qisqa tavsif) - kamida 3 qator, 4) Ichma-ich ro'yxatda tillar (Frontend: HTML, CSS, JS; Backend: Node.js, Python).",
      hint: "Jadvalda <thead> va <tbody> ishlating. colspan bilan footer yarating.",
      solution: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Jasur Karimov - CV</title>
</head>
<body>
    <h1>Jasur Karimov</h1>
    <p>Frontend Developer | Toshkent, O'zbekiston</p>
    
    <hr>
    
    <h2>Texnik ko'nikmalar</h2>
    <ul>
        <li>HTML5 va CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
        <li>TypeScript</li>
        <li>Git va GitHub</li>
    </ul>
    
    <h2>Ta'lim</h2>
    <ol>
        <li>2010-2019: 45-maktab, Toshkent</li>
        <li>2019-2021: IT Park Academy, Frontend kursi</li>
        <li>2021-2025: TATU, Dasturiy injiniring</li>
    </ol>
    
    <h2>Ish tajribasi</h2>
    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr>
                <th>Kompaniya</th>
                <th>Lavozim</th>
                <th>Yillar</th>
                <th>Tavsif</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>IT Solutions</td>
                <td>Junior Developer</td>
                <td>2021-2022</td>
                <td>Landing sahifalar yaratish</td>
            </tr>
            <tr>
                <td>WebStudio</td>
                <td>Frontend Developer</td>
                <td>2022-2023</td>
                <td>E-commerce loyihalar</td>
            </tr>
            <tr>
                <td>TechCorp</td>
                <td>Senior Developer</td>
                <td>2023-hozir</td>
                <td>React ilovalar, jamoa boshqaruvi</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="4"><strong>Umumiy tajriba: 3+ yil</strong></td>
            </tr>
        </tfoot>
    </table>
    
    <h2>Texnologiyalar</h2>
    <ul>
        <li>Frontend
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React, Vue</li>
                <li>Tailwind CSS</li>
            </ul>
        </li>
        <li>Backend
            <ul>
                <li>Node.js, Express</li>
                <li>Python, Django</li>
            </ul>
        </li>
        <li>Tools
            <ul>
                <li>Git, GitHub</li>
                <li>VS Code, Figma</li>
            </ul>
        </li>
    </ul>
</body>
</html>`
    }
  },
  {
    id: 4,
    title: "CSS bilan tanishuv",
    description: "CSS nima, uning vazifasi va HTMLga ulash usullari",
    duration: "30 daqiqa",
    content: `## CSS nima?

CSS (Cascading Style Sheets) - HTML elementlarini bezash uchun til. 

Oddiy tilda: HTML - uyning skelet-konstruksiyasi, CSS - uning bo'yoqlari, mebellari, dekori.

CSS qila oladi:
- Ranglar berish
- Shriftlar o'zgartirish
- Joylashuvni boshqarish
- Animatsiyalar qilish

## CSS qanday ulanadi?

### 1. Inline CSS (yomon usul)
To'g'ridan-to'g'ri elementga yoziladi:
<p style="color: red;">Qizil matn</p>

Kamchilik: har bir elementga alohida yozish kerak.

### 2. Internal CSS (o'rtacha)
<head> ichida <style> tegida:
<style>
    p { color: red; }
</style>

Kamchilik: faqat shu sahifada ishlaydi.

### 3. External CSS (eng yaxshi!)
Alohida .css faylda:
<link rel="stylesheet" href="styles.css">

Afzallik: bir marta yozasiz, hamma sahifada ishlaydi.

## CSS sintaksisi

selector {
    property: value;
}

Misol:
p {
    color: blue;
    font-size: 18px;
}

Bu "barcha p teglarga ko'k rang va 18px shrift" degani.

## Asosiy selektorlar

Element: p { }  - barcha paragraflar
Class: .card { }  - class="card" elementlar
ID: #header { }  - id="header" element

## Ranglar

Bir necha usulda yoziladi:
- Nomi: red, blue, green
- HEX: #ff0000 (qizil)
- RGB: rgb(255, 0, 0)
- RGBA: rgba(255, 0, 0, 0.5) - yarim shaffof`,
    codeExample: `/* ===== styles.css fayli ===== */

/* Barcha elementlar uchun */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f5f5f5;
    color: #333;
}

/* Sarlavhalar */
h1 {
    color: #2c3e50;
    font-size: 32px;
    margin-bottom: 20px;
}

h2 {
    color: #34495e;
    font-size: 24px;
    margin-bottom: 15px;
}

/* Paragraflar */
p {
    font-size: 16px;
    margin-bottom: 10px;
}

/* Class selektori */
.card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

.highlight {
    background-color: yellow;
    padding: 2px 5px;
}

/* ID selektori */
#header {
    background-color: #3498db;
    color: white;
    padding: 20px;
    text-align: center;
}

/* Havolalar */
a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    color: #2980b9;
    text-decoration: underline;
}

/* ===== HTML fayl ===== */
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
    <title>CSS bilan sahifa</title>
</head>
<body>
    <div id="header">
        <h1>Mening saytim</h1>
    </div>
    
    <div class="card">
        <h2>Xush kelibsiz!</h2>
        <p>Bu <span class="highlight">CSS</span> bilan bezatilgan sahifa.</p>
        <a href="#">Ko'proq o'qish</a>
    </div>
</body>
</html>`,
    vsCodeSteps: [
      "Yangi papka yarating: my-project",
      "Ichida 2 ta fayl: index.html va styles.css",
      "index.html da <head> ichiga: <link rel='stylesheet' href='styles.css'>",
      "styles.css da stillar yozing",
      "Saqlang va brauzerda oching",
      "CSS ni o'zgartirib, natijani ko'ring (F5 bosib yangilang)"
    ],
    assignment: {
      title: "CSS bilan sahifani bezang",
      description: "Oldingi CV sahifangizga external CSS qo'shing: 1) body - oq fon, qora matn, 2) h1 - ko'k rang (#3498db), markazda, 3) h2 - kulrang, pastda chiziq, 4) Jadvalga border va padding, 5) Havolalarga hover effekti (rang o'zgarsin), 6) .card classi - oq fon, soya, border-radius.",
      hint: "External CSS uchun <link rel='stylesheet' href='styles.css'>. Hover: a:hover { color: red; }",
      solution: `/* styles.css */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Arial, sans-serif;
    line-height: 1.6;
    background-color: #f0f0f0;
    color: #333;
    padding: 20px;
}

h1 {
    color: #3498db;
    text-align: center;
    font-size: 36px;
    margin-bottom: 10px;
}

h2 {
    color: #555;
    font-size: 22px;
    margin-top: 25px;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid #3498db;
}

p {
    margin-bottom: 10px;
}

ul, ol {
    margin-left: 25px;
    margin-bottom: 15px;
}

li {
    margin-bottom: 5px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}

th {
    background-color: #3498db;
    color: white;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f1f1f1;
}

a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    color: #e74c3c;
    text-decoration: underline;
}

.card {
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 20px 0;
}`
    }
  },
  {
    id: 5,
    title: "CSS selektorlar",
    description: "Element, class, ID va murakkab selektorlar",
    duration: "35 daqiqa",
    content: `## Selektor nima?

Selektor - qaysi elementga stil berish kerakligini ko'rsatadi.

## Asosiy selektorlar

### 1. Element selektori
Teg nomidan foydalanadi:
p { color: blue; }  - barcha p lar ko'k

### 2. Class selektori (.)
Nuqta bilan boshlanadi:
.card { padding: 20px; }

HTML: <div class="card">...</div>

Bir elementda bir nechta class:
<div class="card featured">...</div>

### 3. ID selektori (#)
# belgisi bilan:
#header { background: blue; }

HTML: <div id="header">...</div>

⚠️ ID sahifada takrorlanmasligi kerak!

## Kombinatsiya selektorlar

### Avlod (space)
div p { }  - div ICHIDAGI barcha p lar

### Bevosita bola (>)
div > p { }  - faqat TO'G'RI bola p lar

### Qo'shni (+)
h2 + p { }  - h2 dan KEYIN kelgan birinchi p

## Pseudo-class selektorlar

Elementning maxsus holatini tanlaydi:

:hover - sichqoncha ustida
:active - bosilgan payt
:focus - fokusda (input)
:first-child - birinchi bola
:last-child - oxirgi bola
:nth-child(2) - 2-chi bola
:nth-child(odd) - toq bolalar
:nth-child(even) - juft bolalar

## Selektor prioriteti

Qaysi biri kuchli?
1. !important (eng kuchli, ishlatmang!)
2. Inline style: style="..."
3. ID: #header
4. Class: .card
5. Element: p

Maslahat: Asosan class ishlating!`,
    codeExample: `/* ===== Selektorlar misollar ===== */

/* Element selektori */
body {
    font-family: Arial, sans-serif;
}

h1 {
    font-size: 2.5rem;
}

/* Class selektori */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
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

/* ID selektori */
#navigation {
    background-color: #333;
    padding: 15px;
}

/* Kombinatsiya */
.card .title {
    font-size: 20px;
    font-weight: bold;
}

.nav > li {
    display: inline-block;
    margin-right: 20px;
}

h2 + p {
    font-size: 18px;
    color: #666;
}

/* Pseudo-class */
a:hover {
    color: #e74c3c;
}

.btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
}

.btn:active {
    transform: translateY(0);
}

input:focus {
    outline: 2px solid #3498db;
    border-color: #3498db;
}

/* nth-child */
li:first-child {
    font-weight: bold;
}

li:last-child {
    border-bottom: none;
}

tr:nth-child(even) {
    background-color: #f5f5f5;
}

tr:nth-child(odd) {
    background-color: white;
}

/* Atribut selektori */
input[type="text"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
}

input[type="submit"] {
    background-color: #3498db;
    color: white;
    border: none;
}

a[href^="https"] {
    color: green; /* Xavfsiz havolalar */
}

a[href$=".pdf"] {
    color: red; /* PDF havolalar */
}`,
    vsCodeSteps: [
      "styles.css faylingizni oching",
      "Turli selektorlar qo'shing",
      ".card ichidagi .title uchun stil: .card .title { }",
      ":hover effekti qo'shing",
      ":nth-child(even) bilan juft qatorlarni ranglang",
      "DevTools (F12) da selektorlarni tekshiring"
    ],
    assignment: {
      title: "Selektorlar bilan amaliyot",
      description: "Sahifa yarating va quyidagilarni ishlating: 1) 3 xil class (.container, .card, .btn) - har biriga stil, 2) 1 ta ID (#main-header), 3) Kombinatsiya: .nav > li va .card .title, 4) Pseudo-classlar: :hover (3 joyda), :first-child, :nth-child(even), 5) Atribut selektori: input[type='text'] va input[type='submit'].",
      hint: "Bir elementga bir nechta class: class='btn btn-primary'. :nth-child(even) juft qatorlar uchun.",
      solution: `/* Selektorlar amaliyot */

/* Element selektorlar */
body {
    font-family: 'Segoe UI', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

/* Class selektorlar */
.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card .title {
    font-size: 22px;
    color: #333;
    margin-bottom: 10px;
}

.card .description {
    color: #666;
    line-height: 1.6;
}

.btn {
    display: inline-block;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
}

.btn-primary {
    background: #3498db;
    color: white;
}

.btn-primary:hover {
    background: #2980b9;
    transform: translateY(-2px);
}

.btn-secondary {
    background: #95a5a6;
    color: white;
}

.btn-secondary:hover {
    background: #7f8c8d;
}

/* ID selektor */
#main-header {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 40px 20px;
    text-align: center;
}

/* Kombinatsiya selektorlar */
.nav {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;
    justify-content: center;
}

.nav > li {
    display: inline-block;
}

.nav > li > a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background 0.3s;
}

.nav > li > a:hover {
    background: rgba(255,255,255,0.2);
}

/* Pseudo-classlar */
.list li:first-child {
    font-weight: bold;
    color: #3498db;
}

.list li:last-child {
    font-style: italic;
}

.table tr:nth-child(even) {
    background: #f9f9f9;
}

.table tr:nth-child(odd) {
    background: white;
}

.table tr:hover {
    background: #e8f4fc;
}

/* Atribut selektorlar */
input[type="text"],
input[type="email"] {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 15px;
}

input[type="text"]:focus,
input[type="email"]:focus {
    border-color: #3498db;
    outline: none;
}

input[type="submit"] {
    background: #27ae60;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

input[type="submit"]:hover {
    background: #219a52;
}`
    }
  },
  {
    id: 6,
    title: "CSS Box Model",
    description: "Margin, padding, border va content tushunchasi",
    duration: "40 daqiqa",
    content: `## Box Model nima?

Har bir HTML element to'rtburchak "quti" hisoblanadi. Bu quti 4 qatlamdan iborat:

1. **Content** - ichki matn/rasm (kontent)
2. **Padding** - kontent atrofidagi ichki bo'shliq
3. **Border** - chegara (ramka)
4. **Margin** - tashqi bo'shliq (boshqa elementlardan masofa)

Tasavvur qiling: content - surat, padding - ramka ichi, border - ramkaning o'zi, margin - devordan masofa.

## Content (Kontent)

width va height bilan o'lcham beramiz:
.box {
    width: 200px;
    height: 100px;
}

## Padding (Ichki bo'shliq)

Kontent atrofidagi masofa. Fon rangi QOPLIYDI.

padding: 20px;  - barcha tomondan 20px
padding: 10px 20px;  - tepa/past 10, chap/o'ng 20
padding: 10px 20px 15px 25px;  - tepa, o'ng, past, chap

Yoki alohida:
padding-top, padding-right, padding-bottom, padding-left

## Border (Chegara)

.box {
    border: 2px solid #333;
}

Stillar: solid, dashed, dotted, double, none

border-radius: 10px;  - burchaklarni yumaloqlash
border-radius: 50%;  - doira

## Margin (Tashqi bo'shliq)

Boshqa elementlardan masofa. Shaffof!

margin: 20px;
margin: 0 auto;  - gorizontal markazlash

## Box-sizing (Muhim!)

Standartda width faqat content o'lchami. Padding/border QO'SHILADI.

Yaxshiroq usul:
* {
    box-sizing: border-box;
}

Endi width = content + padding + border. Ancha qulay!

## Box-shadow (Soya)

box-shadow: x y blur color;
box-shadow: 0 4px 10px rgba(0,0,0,0.2);`,
    codeExample: `/* Box Model CSS */

/* Har doim box-sizing: border-box */
*, *::before, *::after {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background: #f0f0f0;
}

/* Oddiy kartochka */
.card {
    /* Content o'lchami */
    width: 300px;
    
    /* Ichki bo'shliq */
    padding: 20px;
    padding-bottom: 25px;
    
    /* Chegara */
    border: 1px solid #ddd;
    border-radius: 12px;
    border-top: 4px solid #3498db;
    
    /* Tashqi bo'shliq */
    margin: 20px;
    
    /* Fon va soya */
    background: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.card h3 {
    margin: 0 0 10px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.card p {
    margin: 0;
    color: #666;
}

/* Markazlash */
.centered-box {
    width: 400px;
    margin: 0 auto; /* Gorizontal markaz */
    padding: 30px;
    background: white;
    border-radius: 10px;
}

/* Turli border */
.border-solid { border: 3px solid #333; }
.border-dashed { border: 3px dashed #333; }
.border-dotted { border: 3px dotted #333; }

/* Border-radius */
.rounded-sm { border-radius: 5px; }
.rounded-md { border-radius: 10px; }
.rounded-lg { border-radius: 20px; }
.circle { border-radius: 50%; }

/* Hover effekt bilan soya */
.card-hover {
    transition: all 0.3s ease;
}

.card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Button misol */
.button {
    display: inline-block;
    padding: 12px 24px;
    margin: 5px;
    border: none;
    border-radius: 8px;
    background: #3498db;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button:hover {
    background: #2980b9;
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);
}`,
    vsCodeSteps: [
      "Yangi HTML va CSS fayl yarating",
      "* { box-sizing: border-box; } qo'shing",
      ".card classi yarating - padding, border, margin",
      "DevTools (F12) oching, element ustida Box Model ko'ring",
      "Padding/margin qiymatlarini o'zgartirib ko'ring",
      "box-shadow qo'shib soya yarating",
      ":hover da soyani kuchaytiring"
    ],
    assignment: {
      title: "Box Model bilan mahsulot kartochkalari",
      description: "3 ta mahsulot kartochkasi yarating: 1) width: 280px, padding: 20px, border: 1px solid, margin: 15px, 2) Har birida rasm, sarlavha, tavsif, narx va tugma, 3) border-radius: 12px, 4) box-shadow va hover effekti, 5) Tugmaga padding va border-radius. Hammasini box-sizing: border-box bilan.",
      hint: "* { box-sizing: border-box; } - bu hamma elementlarga qo'llanadi. Hover uchun transition: all 0.3s ease; qo'shing.",
      solution: `/* Mahsulot kartochalari CSS */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', sans-serif;
    background: #f5f5f5;
    padding: 40px;
}

.products {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.product-card {
    width: 280px;
    padding: 20px;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    margin: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.product-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
}

.product-card h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
}

.product-card p {
    color: #666;
    font-size: 14px;
    margin-bottom: 15px;
    line-height: 1.5;
}

.product-card .price {
    font-size: 24px;
    font-weight: bold;
    color: #27ae60;
    margin-bottom: 15px;
}

.product-card .btn {
    display: block;
    width: 100%;
    padding: 12px 20px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.product-card .btn:hover {
    background: #2980b9;
}`
    }
  },
  {
    id: 7,
    title: "CSS Flexbox asoslari",
    description: "Moslashuvchan bir o'lchovli layout yaratish",
    duration: "45 daqiqa",
    content: `## Flexbox nima?

Flexbox - elementlarni QATORDA yoki USTUNDA tartibga solish usuli. Navbarlar, kartochkalar, formalar uchun ideal.

## Qanday yoqiladi?

Ota elementga:
.container {
    display: flex;
}

Shunda ichidagi bolalar "flex items" bo'ladi.

## Asosiy yo'nalish (flex-direction)

flex-direction: row;  - chapdan o'ngga (default)
flex-direction: column;  - tepadan pastga

## justify-content (gorizontal joylashuv)

flex-start - boshida (default)
flex-end - oxirida
center - markazda
space-between - orasida teng bo'shliq
space-around - atrofida bo'shliq
space-evenly - butunlay teng

## align-items (vertikal joylashuv)

stretch - cho'ziladi (default)
flex-start - tepada
flex-end - pastda
center - markazda

## flex-wrap

Sig'masa nima bo'ladi?
nowrap - bir qatorda qoladi (default)
wrap - keyingi qatorga o'tadi

## gap

Elementlar orasidagi bo'shliq:
gap: 20px;

## Flex items xususiyatlari

flex-grow: 1;  - bo'sh joyni egallaydi
flex-shrink: 0;  - kichraymaydi
flex-basis: 200px;  - boshlang'ich o'lcham

Qisqa: flex: 1;  = flex: 1 1 0;

## Amaliy misol: Navbar

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

Chapda logo, o'ngda menu - tayyor!`,
    codeExample: `/* Flexbox CSS */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* ===== Navbar ===== */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background: #2c3e50;
}

.navbar .logo {
    font-size: 24px;
    font-weight: bold;
    color: white;
}

.navbar .nav-links {
    display: flex;
    gap: 25px;
    list-style: none;
}

.navbar .nav-links a {
    color: white;
    text-decoration: none;
}

/* ===== Hero markazlash ===== */
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-align: center;
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

/* ===== Kartochkalar ===== */
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 40px;
}

.card {
    flex: 0 1 300px; /* o'smaydi, kichrayadi, 300px dan boshlaydi */
    padding: 25px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(0,0,0,0.1);
}

/* ===== Teng ustunlar ===== */
.equal-columns {
    display: flex;
    gap: 20px;
    padding: 20px;
}

.equal-columns .column {
    flex: 1; /* Hammasi teng */
    padding: 20px;
    background: #ecf0f1;
    border-radius: 8px;
}

/* ===== Sidebar layout ===== */
.page-layout {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    flex: 0 0 250px; /* O'zgarmas 250px */
    background: #34495e;
    color: white;
    padding: 20px;
}

.main-content {
    flex: 1; /* Qolgan joyni egallaydi */
    padding: 30px;
    background: #fff;
}

/* ===== Footer ===== */
.footer {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    background: #2c3e50;
    color: white;
}

.footer-section {
    flex: 1;
    padding: 0 20px;
}

/* ===== Card ichida tugmani pastga surish ===== */
.card-with-footer {
    display: flex;
    flex-direction: column;
    min-height: 300px;
}

.card-body {
    flex: 1; /* O'sadi */
}

.card-footer {
    margin-top: auto; /* Pastga suriladi */
}`,
    vsCodeSteps: [
      "Yangi fayl: flexbox.html va flexbox.css",
      "Container yarating: <div class='container'>",
      "CSS da display: flex; qo'shing",
      "justify-content qiymatlarini sinab ko'ring",
      "DevTools → Elements → Flexbox badge bosing",
      "flex-wrap: wrap; bilan responsive qiling",
      "gap: 20px; bilan bo'shliq qo'shing"
    ],
    assignment: {
      title: "Flexbox bilan to'liq sahifa layout",
      description: "Flexbox yordamida sahifa yarating: 1) Navbar: chapda logo, o'rtada 4 ta link, o'ngda Kirish tugmasi (space-between), 2) Hero: markazda h1 va tugma (column, center), 3) 4 ta xususiyat kartochkasi (flex-wrap, gap), 4) 3 ustunli footer. Hamma joyda gap ishlating.",
      hint: "Navbar: justify-content: space-between. Hero: flex-direction: column; align-items: center. Kartochkalar: flex-wrap: wrap.",
      solution: `/* Flexbox sahifa layout */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', sans-serif;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background: #2c3e50;
}

.logo {
    font-size: 26px;
    font-weight: bold;
    color: #3498db;
}

.nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #3498db;
}

.btn-login {
    padding: 10px 25px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-login:hover {
    background: #2980b9;
}

/* Hero */
.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 40px;
}

.hero h1 {
    font-size: 52px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 20px;
    margin-bottom: 30px;
    max-width: 600px;
}

.hero .btn-cta {
    padding: 15px 40px;
    font-size: 18px;
    background: white;
    color: #667eea;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.3s;
}

.hero .btn-cta:hover {
    transform: scale(1.05);
}

/* Xususiyatlar */
.features {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    padding: 60px 40px;
    background: #f5f5f5;
}

.feature-card {
    flex: 0 1 280px;
    padding: 30px;
    background: white;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-10px);
}

.feature-card .icon {
    font-size: 48px;
    margin-bottom: 20px;
}

.feature-card h3 {
    margin-bottom: 15px;
    color: #333;
}

.feature-card p {
    color: #666;
    line-height: 1.6;
}

/* Footer */
.footer {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding: 50px 40px;
    background: #2c3e50;
    color: white;
}

.footer-section {
    flex: 1;
}

.footer-section h4 {
    margin-bottom: 20px;
    color: #3498db;
}

.footer-section ul {
    list-style: none;
}

.footer-section li {
    margin-bottom: 10px;
}

.footer-section a {
    color: #bdc3c7;
    text-decoration: none;
}

.footer-section a:hover {
    color: white;
}`
    }
  },
  {
    id: 8,
    title: "CSS Grid asoslari",
    description: "Ikki o'lchovli murakkab layoutlar uchun Grid",
    duration: "45 daqiqa",
    content: `## Grid nima?

Grid - ikki o'lchamli layout tizimi. Flexbox QATOR yoki USTUN bilan ishlasa, Grid IKKALASI bilan bir vaqtda.

Qachon Grid?
- Sahifa layouti (header, sidebar, content, footer)
- Galereya
- Dashboard

Qachon Flexbox?
- Navbar elementlari
- Tugmalar qatori
- Card ichidagi elementlar

## Qanday yoqiladi?

.container {
    display: grid;
}

## Ustun va qatorlar

grid-template-columns: 200px 200px 200px; - 3 ta 200px ustun
grid-template-columns: 1fr 1fr 1fr; - 3 ta teng ustun
grid-template-columns: repeat(3, 1fr); - yuqoridagi bilan bir xil

fr = fraction (bo'lak). 1fr 2fr = 1/3 va 2/3

## Responsive Grid

grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

Bu sehrli kod! Minimal 250px, maksimal teng bo'linadi. Sahifa kichraysa avtomatik kamayadi.

## gap

gap: 20px; - qator va ustunlar orasida bo'shliq

## grid-template-areas (Nomlash usuli)

Eng qulay usul:

.container {
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }

## Element joylashuvi

grid-column: 1 / 3; - 1-chi ustundan 3-chigacha
grid-column: span 2; - 2 ta ustun egallaydi
grid-row: 1 / 4; - 1-3 qatorlar`,
    codeExample: `/* CSS Grid */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* ===== Oddiy Grid ===== */
.simple-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
}

.simple-grid .item {
    padding: 40px;
    background: #3498db;
    color: white;
    text-align: center;
    border-radius: 8px;
}

/* ===== Responsive Grid ===== */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    padding: 30px;
}

.responsive-grid .card {
    padding: 25px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

/* ===== Sahifa Layout (areas) ===== */
.page-layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 70px 1fr 60px;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
}

.header {
    grid-area: header;
    background: #2c3e50;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 30px;
}

.sidebar {
    grid-area: sidebar;
    background: #34495e;
    color: white;
    padding: 20px;
}

.main {
    grid-area: main;
    padding: 30px;
    background: #ecf0f1;
}

.footer {
    grid-area: footer;
    background: #2c3e50;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* ===== Dashboard Grid ===== */
.dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(150px, auto);
    gap: 20px;
    padding: 20px;
}

.widget {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}

.widget-large {
    grid-column: span 2;
    grid-row: span 2;
}

.widget-wide {
    grid-column: span 2;
}

.widget-tall {
    grid-row: span 2;
}

/* ===== Galereya ===== */
.gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
}

.gallery img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}

.gallery .featured {
    grid-column: span 2;
    grid-row: span 2;
}

.gallery .featured img {
    height: 100%;
}`,
    vsCodeSteps: [
      "Yangi fayl: grid.html va grid.css",
      "Container yarating, display: grid; qo'shing",
      "grid-template-columns: repeat(3, 1fr); sinang",
      "DevTools → Grid badge bosing - chiziqlar ko'rinadi",
      "auto-fit, minmax() bilan responsive qiling",
      "grid-template-areas bilan sahifa layout yarating"
    ],
    assignment: {
      title: "Grid bilan Dashboard",
      description: "Admin dashboard yarating: 1) grid-template-areas bilan: header (to'liq), sidebar (chap), main (o'ng), footer (to'liq), 2) Main ichida 4 ta statistika kartochka (2x2), 3) Katta grafik maydoni (span 2), 4) Responsive: 768px dan kichikda 1 ustun. gap: 20px har joyda.",
      hint: "grid-template-areas - eng oson usul. @media (max-width: 768px) da grid-template-columns: 1fr; qiling.",
      solution: `/* Dashboard Grid Layout */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', sans-serif;
    background: #f0f2f5;
}

.dashboard-layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 60px 1fr 50px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
}

.sidebar {
    grid-area: sidebar;
    background: #34495e;
    color: white;
    padding: 20px;
}

.sidebar-menu {
    list-style: none;
}

.sidebar-menu li {
    padding: 12px 15px;
    margin-bottom: 5px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
}

.sidebar-menu li:hover {
    background: rgba(255,255,255,0.1);
}

.main {
    grid-area: main;
    padding: 25px;
    overflow-y: auto;
}

/* Statistika kartochkalari */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 25px;
}

.stat-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.stat-card h3 {
    font-size: 14px;
    color: #7f8c8d;
    margin-bottom: 10px;
}

.stat-card .number {
    font-size: 32px;
    font-weight: bold;
    color: #2c3e50;
}

/* Katta widgetlar */
.widgets-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.widget {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.widget-large {
    grid-column: span 2;
}

.widget h3 {
    margin-bottom: 20px;
    color: #2c3e50;
}

.footer {
    grid-area: footer;
    background: #2c3e50;
    color: #bdc3c7;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
}

/* Responsive */
@media (max-width: 1024px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .dashboard-layout {
        grid-template-columns: 1fr;
        grid-template-rows: 60px 1fr 50px;
        grid-template-areas:
            "header"
            "main"
            "footer";
    }
    
    .sidebar {
        display: none;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .widgets-grid {
        grid-template-columns: 1fr;
    }
    
    .widget-large {
        grid-column: span 1;
    }
}`
    }
  },
  {
    id: 9,
    title: "Responsive dizayn",
    description: "Media queries, mobile-first yondashuvi",
    duration: "40 daqiqa",
    content: `## Responsive dizayn nima?

Sahifa turli ekranlarda (telefon, planshet, kompyuter) yaxshi ko'rinishi. Bugungi kunda 60%+ trafik mobildan!

## Media Queries

Shartli CSS yozish:

@media (max-width: 768px) {
    /* 768px dan KICHIK ekranlarda */
}

@media (min-width: 768px) {
    /* 768px dan KATTA ekranlarda */
}

## Breakpoints (Muhim nuqtalar)

Keng qo'llaniladigan:
- 480px - telefon
- 768px - planshet
- 1024px - laptop
- 1280px - desktop

## Mobile-First yondashuvi (Tavsiya!)

Birinchi mobil uchun yozing, keyin kattalar uchun qo'shing:

/* Mobil (default) */
.container {
    width: 100%;
    padding: 15px;
}

/* Planshet */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
}

## Responsive texnikalar

### 1. Foizlar
width: 100%;  - har doim sig'adi
max-width: 1200px;  - chegaralaydi

### 2. vw, vh birliklar
width: 50vw;  - ekran kengligining yarmi
height: 100vh;  - to'liq balandlik

### 3. clamp() - sehrli shrift
font-size: clamp(16px, 4vw, 24px);
Minimal 16px, maksimal 24px, o'rtada moslashuvchan.

### 4. max-width rasmlar
img {
    max-width: 100%;
    height: auto;
}

## Viewport meta (Majburiy!)

<meta name="viewport" content="width=device-width, initial-scale=1.0">

Bu tegni yozmaguningizcha responsive ishlamaydi!`,
    codeExample: `/* Responsive CSS - Mobile First */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* Mobil uchun (default) */
body {
    font-family: 'Segoe UI', sans-serif;
    font-size: 16px;
    line-height: 1.6;
}

.container {
    width: 100%;
    padding: 0 15px;
}

/* Responsive Typography */
h1 {
    font-size: clamp(28px, 6vw, 48px);
}

h2 {
    font-size: clamp(22px, 4vw, 36px);
}

/* Rasmlar */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Navbar - Mobil */
.navbar {
    padding: 15px;
    background: #2c3e50;
}

.nav-toggle {
    display: block; /* Hamburger ko'rinadi */
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
}

.nav-links {
    display: none; /* Mobilda yashirin */
    flex-direction: column;
    list-style: none;
    margin-top: 15px;
}

.nav-links.active {
    display: flex;
}

.nav-links a {
    color: white;
    padding: 10px 0;
    text-decoration: none;
}

/* Grid - Mobil */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.card {
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* ===== Planshet (768px+) ===== */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
    
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 30px;
    }
    
    .nav-toggle {
        display: none; /* Hamburger yashirin */
    }
    
    .nav-links {
        display: flex;
        flex-direction: row;
        gap: 30px;
        margin-top: 0;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* ===== Desktop (1024px+) ===== */
@media (min-width: 1024px) {
    .container {
        max-width: 1000px;
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    /* Sidebar layout */
    .page-layout {
        display: grid;
        grid-template-columns: 250px 1fr;
    }
    
    .sidebar {
        display: block;
    }
}

/* ===== Large (1280px+) ===== */
@media (min-width: 1280px) {
    .container {
        max-width: 1200px;
    }
    
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}`,
    vsCodeSteps: [
      "index.html da <meta name='viewport'...> borligini tekshiring",
      "Birinchi mobil uchun stillar yozing",
      "@media (min-width: 768px) {} qo'shing",
      "DevTools → Toggle Device Toolbar (Ctrl+Shift+M)",
      "Turli qurilmalarni tanlang va ko'ring",
      "Yana @media (min-width: 1024px) {} qo'shing"
    ],
    assignment: {
      title: "To'liq responsive sahifa",
      description: "Mobile-first sahifa: 1) Mobilda: hamburger menu (yashirin links), 1 ustun kontent, 2) Planshet (768px+): oddiy navbar, 2 ustun grid, 3) Desktop (1024px+): 3 ustun + sidebar, 4) clamp() bilan responsive h1 va h2, 5) img { max-width: 100%; } - barcha rasmlar uchun.",
      hint: "Mobile-first = birinchi mobil stillar, keyin @media (min-width: ...) bilan kattalar. DevTools da qurilma o'zgartiring.",
      solution: `/* Mobile-First Responsive CSS */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.6;
    background: #f5f5f5;
}

/* Responsive Typography */
h1 {
    font-size: clamp(28px, 7vw, 52px);
    color: #2c3e50;
    margin-bottom: 15px;
}

h2 {
    font-size: clamp(22px, 5vw, 36px);
    color: #34495e;
    margin-bottom: 12px;
}

p {
    font-size: clamp(15px, 2vw, 18px);
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

.container {
    width: 100%;
    padding: 0 15px;
}

/* ===== MOBIL (Default) ===== */

/* Navbar */
.navbar {
    background: #2c3e50;
    padding: 15px;
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 22px;
    font-weight: bold;
    color: #3498db;
}

.nav-toggle {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 28px;
    cursor: pointer;
}

.nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #34495e;
    flex-direction: column;
    list-style: none;
}

.nav-links.active {
    display: flex;
}

.nav-links li a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 15px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

/* Main Content */
.main-content {
    padding: 20px 15px;
}

/* Grid */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

.card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 3px 12px rgba(0,0,0,0.08);
}

/* Sidebar - Mobilda yashirin */
.sidebar {
    display: none;
}

/* ===== PLANSHET (768px+) ===== */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
    
    .nav-toggle {
        display: none;
    }
    
    .nav-links {
        display: flex;
        position: static;
        flex-direction: row;
        background: none;
        gap: 25px;
    }
    
    .nav-links li a {
        padding: 10px 0;
        border: none;
    }
    
    .nav-links li a:hover {
        color: #3498db;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .main-content {
        padding: 30px;
    }
}

/* ===== DESKTOP (1024px+) ===== */
@media (min-width: 1024px) {
    .container {
        max-width: 100%;
        padding: 0;
    }
    
    .page-wrapper {
        display: grid;
        grid-template-columns: 250px 1fr;
    }
    
    .sidebar {
        display: block;
        background: #34495e;
        color: white;
        padding: 25px;
        min-height: calc(100vh - 60px);
    }
    
    .sidebar-menu {
        list-style: none;
    }
    
    .sidebar-menu li {
        padding: 12px 15px;
        margin-bottom: 8px;
        border-radius: 8px;
        cursor: pointer;
    }
    
    .sidebar-menu li:hover {
        background: rgba(255,255,255,0.1);
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* ===== LARGE DESKTOP (1280px+) ===== */
@media (min-width: 1280px) {
    .grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;
    }
    
    .main-content {
        padding: 40px;
    }
}`
    }
  },
  {
    id: 10,
    title: "JavaScript asoslari",
    description: "JavaScript sintaksisi, o'zgaruvchilar va ma'lumot turlari",
    duration: "40 daqiqa",
    content: `## JavaScript nima?

JavaScript - veb sahifalarni JONLI qiladigan til. HTML struktura, CSS dizayn bersa, JS harakatni beradi.

JS qila oladi:
- Tugmani bosganda nimadir qilish
- Formani tekshirish
- Ma'lumot olish (API)
- Animatsiyalar
- va boshqalar

## JS qanday qo'shiladi?

1. HTML ichida:
<script>
    console.log("Salom!");
</script>

2. Alohida fayl (yaxshiroq):
<script src="script.js"></script>

## O'zgaruvchilar

O'zgaruvchi - ma'lumot saqlaydigan "quti".

### const - o'zgarmas (eng ko'p ishlating)
const PI = 3.14;
const name = "Ali";

### let - o'zgaruvchan
let age = 25;
age = 26; // OK

### var - eski (ishlatmang!)

## Ma'lumot turlari

### String (matn)
let ism = "Ali";
let gap = 'Salom';

### Number (son)
let yosh = 25;
let narx = 99.99;

### Boolean (ha/yo'q)
let active = true;
let deleted = false;

### undefined - qiymat berilmagan
let x; // undefined

### null - ataylab bo'sh
let y = null;

## Template Literals (Shablon matn)

Eng qulay usul:
const name = "Ali";
const age = 25;
console.log(\`Salom, \${name}! Yosh: \${age}\`);

## Operatorlar

### Arifmetik
+ - * / % **

### Taqqoslash
== (qiymat), === (qiymat VA tur - bu yaxshi!)
!= !==
< > <= >=

### Mantiqiy
&& (VA), || (YOKI), ! (EMAS)

## console.log()

Eng yaqin do'stingiz! Har narsani tekshiring:
console.log("Ishlayapti!");
console.log(x);`,
    codeExample: `// ===== JavaScript asoslari =====

// O'zgaruvchilar
const SITE_NAME = "front-end.uz"; // O'zgarmas
let userCount = 0; // O'zgaruvchan

// String (matn)
const firstName = "Jasur";
const lastName = "Karimov";
const fullName = \`\${firstName} \${lastName}\`; // "Jasur Karimov"
console.log(fullName);

// Number (son)
const age = 25;
const price = 99.99;
const discount = 0.15; // 15%
const finalPrice = price * (1 - discount);
console.log(\`Chegirma narx: \${finalPrice}\`); // 84.99

// Boolean (mantiqiy)
const isLoggedIn = true;
const isAdmin = false;
const canEdit = isLoggedIn && isAdmin; // false (ikkalasi ham true emas)
console.log(\`Tahrirlash mumkin: \${canEdit}\`);

// Arifmetik operatsiyalar
const a = 10;
const b = 3;
console.log(\`Qo'shish: \${a + b}\`);  // 13
console.log(\`Ayirish: \${a - b}\`);   // 7
console.log(\`Ko'paytirish: \${a * b}\`); // 30
console.log(\`Bo'lish: \${a / b}\`);   // 3.333...
console.log(\`Qoldiq: \${a % b}\`);    // 1
console.log(\`Daraja: \${a ** 2}\`);   // 100

// Taqqoslash
console.log(5 == "5");  // true (faqat qiymat)
console.log(5 === "5"); // false (qiymat VA tur) - BUNI ISHLATING!
console.log(5 !== "5"); // true

// Yosh tekshirish
const userAge = 20;
const isAdult = userAge >= 18;
console.log(\`Kattami: \${isAdult}\`); // true

// Shartli ifoda
const status = isAdult ? "Katta" : "Kichik";
console.log(status); // "Katta"

// typeof - turni aniqlash
console.log(typeof firstName); // "string"
console.log(typeof age);       // "number"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object" (JS xatosi)

// Qo'shimcha console usullari
console.log("Oddiy xabar");
console.warn("Ogohlantirish!");
console.error("Xatolik!");
console.table({ ism: firstName, yosh: age }); // Jadval ko'rinishida`,
    vsCodeSteps: [
      "Yangi fayl: script.js",
      "index.html da: <script src='script.js'></script> (</body> oldida)",
      "script.js da console.log('Ishlayapti!'); yozing",
      "Brauzerda sahifani oching",
      "F12 bosing → Console tab oching",
      "'Ishlayapti!' ko'rinishi kerak",
      "O'zgaruvchilar yaratib, console.log() qiling"
    ],
    assignment: {
      title: "JavaScript asoslari amaliyot",
      description: "script.js yarating: 1) 5 ta const o'zgaruvchi - ism, familiya, yosh, kasb, shahar, 2) Template literal bilan taqdimot matni (\"Salom, men ... ..., yoshim ..., ...\"), 3) isAdult boolean (yosh >= 18), 4) 2 ta son va ularning yig'indisi, ayirmasi, ko'paytmasi, 5) typeof bilan har birining turini console.log qiling.",
      hint: "Template literal: `Matn ${ozgaruvchi}`. Boolean: const isAdult = yosh >= 18;",
      solution: `// JavaScript amaliyot - Men haqimda

// 1. O'zgaruvchilar
const ism = "Jasur";
const familiya = "Karimov";
const yosh = 22;
const kasb = "Frontend Developer";
const shahar = "Toshkent";

// 2. Template literal bilan taqdimot
const taqdimot = \`Salom! Men \${ism} \${familiya}. 
Yoshim \${yosh} da. 
Men \${kasb} sifatida ishlayman. 
\${shahar} shahrida yashayman.\`;

console.log("=== TAQDIMOT ===");
console.log(taqdimot);

// 3. Boolean - katta yoshdami?
const isAdult = yosh >= 18;
console.log(\`\\nKatta yoshdami: \${isAdult}\`); // true

// 4. Arifmetik amallar
const son1 = 15;
const son2 = 4;

const yigindi = son1 + son2;
const ayirma = son1 - son2;
const kopaytma = son1 * son2;
const bolinma = son1 / son2;
const qoldiq = son1 % son2;

console.log("\\n=== ARIFMETIK AMALLAR ===");
console.log(\`\${son1} + \${son2} = \${yigindi}\`);   // 19
console.log(\`\${son1} - \${son2} = \${ayirma}\`);    // 11
console.log(\`\${son1} * \${son2} = \${kopaytma}\`);  // 60
console.log(\`\${son1} / \${son2} = \${bolinma}\`);   // 3.75
console.log(\`\${son1} % \${son2} = \${qoldiq}\`);    // 3

// 5. typeof - turlarni tekshirish
console.log("\\n=== TURLAR (typeof) ===");
console.log(\`ism turi: \${typeof ism}\`);           // string
console.log(\`yosh turi: \${typeof yosh}\`);         // number
console.log(\`isAdult turi: \${typeof isAdult}\`);   // boolean
console.log(\`undefined turi: \${typeof undefined}\`); // undefined

// Bonus: console.table
console.log("\\n=== JADVAL KO'RINISHIDA ===");
console.table({
    ism: ism,
    familiya: familiya,
    yosh: yosh,
    kasb: kasb,
    shahar: shahar,
    "katta yoshda": isAdult
});`
    }
  },
  {
    id: 11,
    title: "JavaScript funksiyalar va massivlar",
    description: "Funksiya yaratish, massivlar bilan ishlash",
    duration: "45 daqiqa",
    content: `## Funksiya nima?

Funksiya - qayta ishlatiladigan kod bloki. Bir marta yozasiz, ko'p marta chaqirasiz.

## Funksiya yaratish

### Oddiy usul
function spiqdash(ism) {
    return \`Salom, \${ism}!\`;
}

### Arrow function (zamonaviy)
const spiqdash = (ism) => {
    return \`Salom, \${ism}!\`;
};

// Qisqa yozuv (1 qator)
const spiqdash = (ism) => \`Salom, \${ism}!\`;

## Funksiyani chaqirish

const natija = spiqdash("Ali");
console.log(natija); // "Salom, Ali!"

## Massiv nima?

Massiv - ro'yxat. Bir nechta qiymatni bitta o'zgaruvchida saqlash.

const mevalar = ["olma", "banan", "uzum"];

## Massiv bilan ishlash

### Murojaat (0 dan boshlanadi!)
mevalar[0] // "olma"
mevalar[1] // "banan"

### Uzunlik
mevalar.length // 3

### Qo'shish/o'chirish
mevalar.push("anor"); // oxiriga
mevalar.pop(); // oxiridan o'chirish
mevalar.unshift("nok"); // boshiga
mevalar.shift(); // boshidan o'chirish

## Massiv metodlari (eng muhim!)

### forEach - har biri uchun
mevalar.forEach(meva => {
    console.log(meva);
});

### map - yangi massiv
const KATTA = mevalar.map(m => m.toUpperCase());

### filter - filtrlash
const uzunlar = mevalar.filter(m => m.length > 4);

### find - birinchi mos
const topildi = mevalar.find(m => m === "banan");

### reduce - yig'indi/jamla
const sonlar = [1, 2, 3, 4, 5];
const yigindi = sonlar.reduce((jami, son) => jami + son, 0);

## Spread operatori (...)

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]`,
    codeExample: `// ===== Funksiyalar =====

// Oddiy funksiya
function spiqdash(ism) {
    return \`Salom, \${ism}!\`;
}
console.log(spiqdash("Ali")); // "Salom, Ali!"

// Default parametr
function greet(ism = "Mehmon") {
    return \`Xush kelibsiz, \${ism}!\`;
}
console.log(greet()); // "Xush kelibsiz, Mehmon!"
console.log(greet("Jasur")); // "Xush kelibsiz, Jasur!"

// Arrow function
const kopaytirish = (a, b) => a * b;
console.log(kopaytirish(5, 3)); // 15

// ===== Massivlar =====

const mevalar = ["olma", "banan", "uzum", "anor"];

// Murojaat
console.log(mevalar[0]); // "olma"
console.log(mevalar[mevalar.length - 1]); // "anor" (oxirgi)

// Qo'shish/o'chirish
mevalar.push("gilos"); // oxiriga
console.log(mevalar); // [..., "gilos"]

// ===== forEach =====
console.log("\\n--- forEach ---");
mevalar.forEach((meva, index) => {
    console.log(\`\${index + 1}. \${meva}\`);
});

// ===== map =====
console.log("\\n--- map ---");
const kattaHarf = mevalar.map(meva => meva.toUpperCase());
console.log(kattaHarf); // ["OLMA", "BANAN", ...]

// ===== filter =====
console.log("\\n--- filter ---");
const uzunMevalar = mevalar.filter(meva => meva.length > 4);
console.log(uzunMevalar); // ["banan", "gilos"]

// ===== find =====
console.log("\\n--- find ---");
const banan = mevalar.find(meva => meva === "banan");
console.log(banan); // "banan"

// ===== reduce =====
console.log("\\n--- reduce ---");
const sonlar = [10, 20, 30, 40, 50];
const yigindi = sonlar.reduce((jami, son) => jami + son, 0);
console.log(\`Yig'indi: \${yigindi}\`); // 150

const ortacha = yigindi / sonlar.length;
console.log(\`O'rtacha: \${ortacha}\`); // 30

// ===== Amaliy misol: Talabalar =====
console.log("\\n--- Talabalar ---");

const talabalar = [
    { ism: "Ali", yosh: 20, ball: 85 },
    { ism: "Malika", yosh: 19, ball: 92 },
    { ism: "Jasur", yosh: 21, ball: 78 },
    { ism: "Nilufar", yosh: 20, ball: 95 }
];

// Eng yuqori ball
const maksimal = Math.max(...talabalar.map(t => t.ball));
console.log(\`Eng yuqori ball: \${maksimal}\`);

// A'lochi talabalar (90+)
const allochilar = talabalar.filter(t => t.ball >= 90);
console.log("A'lochilar:", allochilar.map(t => t.ism));

// O'rtacha yosh
const yoshYigindi = talabalar.reduce((sum, t) => sum + t.yosh, 0);
const ortachaYosh = yoshYigindi / talabalar.length;
console.log(\`O'rtacha yosh: \${ortachaYosh}\`);`,
    vsCodeSteps: [
      "script.js ni oching",
      "Oddiy funksiya yarating va chaqiring",
      "Arrow function sinab ko'ring",
      "Massiv yarating: const mevalar = [...]",
      "forEach bilan har birini chiqaring",
      "map bilan yangi massiv yarating",
      "filter va reduce ni sinang"
    ],
    assignment: {
      title: "Funksiyalar va massivlar amaliyot",
      description: "Quyidagilarni yarating: 1) ortacha funksiyasi - sonlar massivi olib o'rtacha qaytaradi, 2) filterByLength - so'zlar massivi va uzunlik, shu uzunlikdagi so'zlarni qaytaradi, 3) Talabalar massivi [{ism, yosh, ball}] va: a) eng yuqori ball, b) o'rtacha yosh, c) ball > 80 ro'yxat. Faqat arrow function va massiv metodlari!",
      hint: "O'rtacha = reduce yig'indi / length. filter(x => x.length === n). Math.max(...massiv).",
      solution: `// Funksiyalar va massivlar amaliyot

// 1. O'rtacha hisoblash funksiyasi
const ortacha = (sonlar) => {
    if (sonlar.length === 0) return 0;
    const yigindi = sonlar.reduce((sum, son) => sum + son, 0);
    return yigindi / sonlar.length;
};

// Test
console.log("=== O'RTACHA ===");
console.log(ortacha([10, 20, 30, 40, 50])); // 30
console.log(ortacha([5, 15, 25])); // 15

// 2. Uzunlik bo'yicha filtrlash
const filterByLength = (sozlar, uzunlik) => {
    return sozlar.filter(soz => soz.length === uzunlik);
};

// Test
console.log("\\n=== FILTER BY LENGTH ===");
const sozlar = ["olma", "banan", "uzum", "anor", "gilos"];
console.log(\`5 harfli: \${filterByLength(sozlar, 5)}\`); // ["olma", "banan", "gilos"]
console.log(\`4 harfli: \${filterByLength(sozlar, 4)}\`); // ["uzum", "anor"]

// 3. Talabalar massivi
console.log("\\n=== TALABALAR ===");

const talabalar = [
    { ism: "Ali", yosh: 20, ball: 85 },
    { ism: "Malika", yosh: 19, ball: 92 },
    { ism: "Jasur", yosh: 21, ball: 78 },
    { ism: "Nilufar", yosh: 20, ball: 95 },
    { ism: "Sardor", yosh: 22, ball: 88 }
];

// a) Eng yuqori ball
const ballar = talabalar.map(t => t.ball);
const engYuqori = Math.max(...ballar);
const engYaxshi = talabalar.find(t => t.ball === engYuqori);
console.log(\`Eng yuqori ball: \${engYuqori} (\${engYaxshi.ism})\`);

// b) O'rtacha yosh
const ortachaYosh = ortacha(talabalar.map(t => t.yosh));
console.log(\`O'rtacha yosh: \${ortachaYosh.toFixed(1)}\`);

// c) Ball > 80 bo'lganlar
const yaxshilar = talabalar.filter(t => t.ball > 80);
console.log("Ball > 80:");
yaxshilar.forEach(t => {
    console.log(\`  - \${t.ism}: \${t.ball}\`);
});

// Bonus: Jadval ko'rinishida
console.log("\\n=== JADVAL ===");
console.table(talabalar);

// Bonus: Statistika
console.log("\\n=== STATISTIKA ===");
const statistika = {
    "Jami talabalar": talabalar.length,
    "O'rtacha ball": ortacha(ballar).toFixed(1),
    "O'rtacha yosh": ortachaYosh.toFixed(1),
    "Eng yuqori": engYuqori,
    "Eng past": Math.min(...ballar),
    "80+ ball": yaxshilar.length
};
console.table(statistika);`
    }
  },
  {
    id: 12,
    title: "DOM bilan ishlash",
    description: "HTML elementlarini JavaScript orqali boshqarish",
    duration: "45 daqiqa",
    content: `## DOM nima?

DOM (Document Object Model) - JavaScript HTML ni ko'rish usuli. HTML faylni daraxt shaklida ko'rsatadi va JS uni o'zgartira oladi.

## Elementlarni topish

### ID bo'yicha (eng tez)
const element = document.getElementById("header");

### Query selector (eng qulay)
const element = document.querySelector(".card"); // birinchisi
const elements = document.querySelectorAll(".card"); // hammasi

## Element kontentini o'zgartirish

### Matn
element.textContent = "Yangi matn";

### HTML
element.innerHTML = "<strong>Qalin</strong> matn";

## Atributlar

element.setAttribute("href", "https://...");
element.getAttribute("src");
element.removeAttribute("disabled");

## Class bilan ishlash

element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("open"); // bor-yo'q
element.classList.contains("active"); // tekshirish

## Stil o'zgartirish

element.style.color = "red";
element.style.backgroundColor = "blue";
element.style.display = "none";

## Element yaratish

const yangi = document.createElement("div");
yangi.textContent = "Yangi element";
yangi.className = "card";

## Element qo'shish

parent.appendChild(yangi); // oxiriga
parent.prepend(yangi); // boshiga
parent.insertBefore(yangi, reference);

## Element o'chirish

element.remove();

## Navigatsiya

element.parentElement - ota
element.children - bolalar
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling`,
    codeExample: `// ===== DOM bilan ishlash =====

// Elementlarni topish
const header = document.getElementById("header");
const firstCard = document.querySelector(".card");
const allCards = document.querySelectorAll(".card");

// Matn o'zgartirish
header.textContent = "Yangi sarlavha";

// HTML o'zgartirish
const container = document.querySelector(".container");
container.innerHTML = \`
    <h2>Dinamik kontent</h2>
    <p>JavaScript orqali qo'shildi</p>
\`;

// Class bilan ishlash
const button = document.querySelector(".btn");
button.classList.add("active");
button.classList.remove("disabled");

// Toggle - bor-yo'q
button.addEventListener("click", () => {
    button.classList.toggle("loading");
});

// Stil o'zgartirish
const box = document.querySelector(".box");
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "#3498db";
box.style.borderRadius = "10px";
box.style.transition = "all 0.3s ease";

// Yangi element yaratish
const newCard = document.createElement("div");
newCard.className = "card";
newCard.innerHTML = \`
    <h3>Yangi kartochka</h3>
    <p>JavaScript bilan yaratildi</p>
    <button class="btn">Ko'proq</button>
\`;

// Qo'shish
const cardsContainer = document.querySelector(".cards");
cardsContainer.appendChild(newCard);

// Bir nechta element yaratish
const mahsulotlar = [
    { nom: "Telefon", narx: 500 },
    { nom: "Laptop", narx: 1200 },
    { nom: "Quloqchin", narx: 100 }
];

mahsulotlar.forEach(mahsulot => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = \`
        <h3>\${mahsulot.nom}</h3>
        <p class="price">$\${mahsulot.narx}</p>
        <button class="btn-buy">Sotib olish</button>
    \`;
    cardsContainer.appendChild(card);
});

// insertAdjacentHTML - qayerga qo'yishni tanlash
container.insertAdjacentHTML("beforeend", \`
    <div class="footer-note">
        Oxirga qo'shildi
    </div>
\`);

// O'chirish
const oldElement = document.querySelector(".old");
if (oldElement) {
    oldElement.remove();
}

// querySelectorAll bilan ishlash
allCards.forEach((card, index) => {
    card.style.animationDelay = \`\${index * 0.1}s\`;
});`,
    vsCodeSteps: [
      "index.html da elementlar yarating (id va class bilan)",
      "script.js da document.querySelector() ishlating",
      "Brauzer Console (F12) da element.textContent o'zgartiring",
      "classList.add/remove/toggle sinang",
      "createElement() bilan yangi element yarating",
      "appendChild() bilan sahifaga qo'shing",
      "DevTools → Elements da o'zgarishlarni ko'ring"
    ],
    assignment: {
      title: "DOM bilan todo ro'yxati yaratish",
      description: "Oddiy todo ro'yxat yarating: 1) Input va 'Qo'shish' tugmasi HTML da, 2) JS bilan: tugma bosilganda input qiymatini oling, 3) Yangi <li> element yarating va ro'yxatga qo'shing, 4) Har bir li da 'O'chirish' tugmasi, 5) O'chirish bosilganda li.remove(). classList.toggle('completed') ham qo'shing.",
      hint: "input.value - inputdagi matn. createElement('li'). classList.toggle() - bajarilgan/bajarilmagan.",
      solution: `<!-- index.html -->
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo Ro'yxat</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        body {
            font-family: 'Segoe UI', sans-serif;
            background: #f5f5f5;
            padding: 40px;
        }
        .container {
            max-width: 500px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 25px;
        }
        .add-form {
            display: flex;
            gap: 10px;
            margin-bottom: 25px;
        }
        #todoInput {
            flex: 1;
            padding: 12px 15px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
        }
        #todoInput:focus {
            outline: none;
            border-color: #3498db;
        }
        #addBtn {
            padding: 12px 25px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
        }
        #addBtn:hover {
            background: #2980b9;
        }
        #todoList {
            list-style: none;
        }
        .todo-item {
            display: flex;
            align-items: center;
            padding: 15px;
            background: #f9f9f9;
            margin-bottom: 10px;
            border-radius: 8px;
            transition: all 0.3s;
        }
        .todo-item.completed {
            background: #d4edda;
        }
        .todo-item.completed .todo-text {
            text-decoration: line-through;
            color: #888;
        }
        .todo-text {
            flex: 1;
            cursor: pointer;
        }
        .delete-btn {
            padding: 5px 12px;
            background: #e74c3c;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .delete-btn:hover {
            background: #c0392b;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 Vazifalar</h1>
        
        <div class="add-form">
            <input type="text" id="todoInput" placeholder="Yangi vazifa...">
            <button id="addBtn">Qo'shish</button>
        </div>
        
        <ul id="todoList"></ul>
    </div>
    
    <script src="script.js"></script>
</body>
</html>

// ===== script.js =====

// Elementlarni topish
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Vazifa qo'shish funksiyasi
const addTodo = () => {
    const text = todoInput.value.trim();
    
    // Bo'sh bo'lsa qo'shmaymiz
    if (text === "") {
        todoInput.style.borderColor = "#e74c3c";
        return;
    }
    
    todoInput.style.borderColor = "#ddd";
    
    // Yangi li yaratish
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = \`
        <span class="todo-text">\${text}</span>
        <button class="delete-btn">O'chirish</button>
    \`;
    
    // Ro'yxatga qo'shish
    todoList.appendChild(li);
    
    // Inputni tozalash
    todoInput.value = "";
    todoInput.focus();
};

// Qo'shish tugmasi
addBtn.addEventListener("click", addTodo);

// Enter tugmasi bilan ham qo'shish
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

// Event delegation - tugmalar uchun
todoList.addEventListener("click", (e) => {
    const li = e.target.closest(".todo-item");
    
    // O'chirish
    if (e.target.classList.contains("delete-btn")) {
        li.style.animation = "fadeOut 0.3s ease";
        setTimeout(() => li.remove(), 300);
    }
    
    // Bajarilgan deb belgilash
    if (e.target.classList.contains("todo-text")) {
        li.classList.toggle("completed");
    }
});`
    }
  },
  {
    id: 13,
    title: "JavaScript hodisalar (Events)",
    description: "Click, input, submit va boshqa hodisalar bilan ishlash",
    duration: "40 daqiqa",
    content: `## Hodisa (Event) nima?

Hodisa - foydalanuvchi harakati. Masalan:
- click - bosish
- input - yozish
- submit - forma yuborish
- keydown - tugma bosish

## Event Listener qo'shish

element.addEventListener("eventType", function);

Misol:
button.addEventListener("click", () => {
    console.log("Bosildi!");
});

## Eng muhim hodisalar

### Sichqoncha
- click - bosish
- dblclick - ikki marta bosish
- mouseenter - ustiga kelish
- mouseleave - ustidan ketish

### Klaviatura
- keydown - tugma bosildi
- keyup - tugma qo'yib yuborildi

### Forma
- submit - yuborish
- input - har bir o'zgarish
- change - o'zgarib bo'lgach (focus yo'qolganda)
- focus - fokusga kirdi
- blur - fokusdan chiqdi

## Event obyekti

Handler funksiyaga event obyekti keladi:

button.addEventListener("click", (event) => {
    event.target // bosilgan element
    event.preventDefault() // standart harakatni to'xtatish
});

### Klaviatura uchun
event.key // "Enter", "a", "Escape"
event.ctrlKey // Ctrl bosilganmi?

### Forma uchun
event.preventDefault() // sahifa yangilanishini to'xtatish

## Event Delegation

Ko'p elementga emas, ota elementga bitta listener:

ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        // li bosildi
    }
});

Bu yangi qo'shilgan elementlar uchun ham ishlaydi!`,
    codeExample: `// ===== Event Handlers =====

// Click
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
    console.log("Tugma bosildi!");
});

// Event obyekti
button.addEventListener("click", (event) => {
    console.log("Bosilgan element:", event.target);
    console.log("X koordinata:", event.clientX);
});

// ===== Input hodisasi =====
const searchInput = document.querySelector("#search");

// Har bir harf bosilganda
searchInput.addEventListener("input", (e) => {
    const query = e.target.value;
    console.log("Qidirilmoqda:", query);
    
    // Real-time qidiruv qilish mumkin
});

// ===== Forma submit =====
const form = document.querySelector("#loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Sahifa yangilanishini TO'XTATISH!
    
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    // Validatsiya
    if (email === "" || password === "") {
        alert("Barcha maydonlarni to'ldiring!");
        return;
    }
    
    console.log("Login:", { email, password });
    // API ga yuborish...
});

// ===== Klaviatura =====
document.addEventListener("keydown", (e) => {
    console.log("Bosilgan tugma:", e.key);
    
    // Escape - modal yopish
    if (e.key === "Escape") {
        closeModal();
    }
    
    // Ctrl + S - saqlash
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        saveDocument();
    }
});

// ===== Event Delegation =====
const todoList = document.querySelector("#todoList");

// Bitta listener - barcha li lar uchun
todoList.addEventListener("click", (e) => {
    const target = e.target;
    const li = target.closest("li");
    
    if (!li) return;
    
    // Delete tugmasi
    if (target.classList.contains("delete-btn")) {
        li.remove();
    }
    
    // Complete tugmasi
    if (target.classList.contains("complete-btn")) {
        li.classList.toggle("completed");
    }
});

// ===== Hover effekti =====
const card = document.querySelector(".card");

card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
});

// ===== Focus/Blur =====
const input = document.querySelector("input");

input.addEventListener("focus", () => {
    input.style.borderColor = "#3498db";
});

input.addEventListener("blur", () => {
    input.style.borderColor = "#ddd";
});`,
    vsCodeSteps: [
      "HTML da tugma, input va forma yarating",
      "addEventListener('click', ...) qo'shing",
      "Console (F12) da event.target ko'ring",
      "Forma uchun e.preventDefault() ishlating",
      "Event delegation bilan ko'p elementni boshqaring",
      "Keyboard events (keydown) sinang"
    ],
    assignment: {
      title: "Interaktiv Todo ilova",
      description: "Oldingi darsni davom ettirib: 1) Forma submit bilan vazifa qo'shish (e.preventDefault()!), 2) 'Bajarildi' tugmasi - classList.toggle('completed'), 3) 'O'chirish' tugmasi - element.remove(), 4) Enter tugmasi bilan ham qo'shish (keydown), 5) Bo'sh input yubormaslik (validatsiya). Event delegation ishlatilsin!",
      hint: "form.addEventListener('submit', e => { e.preventDefault(); ... }). Event delegation: ul.addEventListener da e.target.matches('.delete-btn') tekshiring.",
      solution: `// Interaktiv Todo - script.js

const todoInput = document.getElementById("todoInput");
const todoForm = document.getElementById("todoForm");
const todoList = document.getElementById("todoList");
const errorMsg = document.getElementById("errorMsg");

// Xatolik xabarini ko'rsatish/yashirish
const showError = (message) => {
    errorMsg.textContent = message;
    errorMsg.style.display = "block";
    todoInput.style.borderColor = "#e74c3c";
};

const hideError = () => {
    errorMsg.style.display = "none";
    todoInput.style.borderColor = "#ddd";
};

// Todo qo'shish
const addTodo = (text) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = \`
        <span class="todo-text">\${text}</span>
        <div class="todo-actions">
            <button class="complete-btn">✓</button>
            <button class="delete-btn">✕</button>
        </div>
    \`;
    
    todoList.appendChild(li);
    
    // Animatsiya
    li.style.animation = "slideIn 0.3s ease";
};

// Forma submit
todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Sahifa yangilanishini TO'XTATISH!
    
    const text = todoInput.value.trim();
    
    // Validatsiya
    if (text === "") {
        showError("Iltimos, vazifa kiriting!");
        todoInput.focus();
        return;
    }
    
    if (text.length < 2) {
        showError("Vazifa kamida 2 ta belgi bo'lishi kerak!");
        return;
    }
    
    hideError();
    addTodo(text);
    todoInput.value = "";
    todoInput.focus();
});

// Input o'zgarganda xatolikni yashirish
todoInput.addEventListener("input", () => {
    if (todoInput.value.trim() !== "") {
        hideError();
    }
});

// Event Delegation - delete va complete
todoList.addEventListener("click", (e) => {
    const target = e.target;
    const li = target.closest(".todo-item");
    
    if (!li) return;
    
    // Delete
    if (target.classList.contains("delete-btn")) {
        li.style.animation = "fadeOut 0.3s ease";
        setTimeout(() => li.remove(), 300);
    }
    
    // Complete toggle
    if (target.classList.contains("complete-btn") || 
        target.classList.contains("todo-text")) {
        li.classList.toggle("completed");
    }
});

// Keyboard: Escape - inputni tozalash
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        todoInput.value = "";
        hideError();
        todoInput.blur();
    }
});

// Dastlabki todo'lar
const initialTodos = [
    "HTML o'rganish",
    "CSS o'rganish", 
    "JavaScript o'rganish"
];

initialTodos.forEach(text => addTodo(text));`
    }
  },
  {
    id: 14,
    title: "CSS animatsiyalar va transitions",
    description: "Transition, keyframe animatsiyalar va transform",
    duration: "40 daqiqa",
    content: `## Transition nima?

Transition - bir holatdan boshqasiga SILLIQ o'tish. Masalan hover da rang o'zgarishi.

## Transition sintaksisi

transition: property duration timing-function;

Misol:
.button {
    background: blue;
    transition: background 0.3s ease;
}

.button:hover {
    background: red;
}

## Timing functions

- ease - sekin boshlaydi va tugaydi (default)
- linear - teng tezlik
- ease-in - sekin boshlaydi
- ease-out - sekin tugaydi
- ease-in-out - ikkalasi

## Transform

Elementni aylantirish, kattalashtirish, surish:

- translate(x, y) - surish
- scale(1.2) - kattalashtirish
- rotate(45deg) - aylantirish
- skew(10deg) - qiyshiq qilish

Misol:
.card:hover {
    transform: translateY(-10px) scale(1.05);
}

## @keyframes animatsiya

Murakkab, ko'p bosqichli animatsiyalar:

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.element {
    animation: fadeIn 0.5s ease forwards;
}

## Animation xususiyatlari

animation-name: fadeIn;
animation-duration: 0.5s;
animation-timing-function: ease;
animation-delay: 0.2s;
animation-iteration-count: infinite; // cheksiz
animation-direction: alternate; // oldinga-orqaga

Qisqa:
animation: fadeIn 0.5s ease 0.2s infinite alternate;

## Performance

Tez ishlaydigan xususiyatlar:
- transform
- opacity

Sekin (ishlatmang):
- width, height
- margin, padding
- left, top`,
    codeExample: `/* ===== Transitions ===== */

.btn {
    padding: 12px 24px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    
    /* Transition - barcha xususiyatlar uchun */
    transition: all 0.3s ease;
}

.btn:hover {
    background: #2980b9;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.btn:active {
    transform: translateY(-1px);
}

/* ===== Card hover ===== */
.card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

/* ===== Keyframe Animatsiyalar ===== */

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

/* Pulse */
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
}

.pulse {
    animation: pulse 2s ease-in-out infinite;
}

/* Bounce */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
}

.bounce {
    animation: bounce 1s ease infinite;
}

/* Spinner */
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Slide In */
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.slide-in {
    animation: slideInLeft 0.5s ease forwards;
}

/* Staggered animation */
.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }`,
    vsCodeSteps: [
      "Tugma yarating va transition qo'shing",
      ":hover da transform: scale(1.05) sinang",
      "@keyframes fadeIn yarating",
      "Elementga animation: fadeIn 0.5s; qo'shing",
      "infinite va alternate sinang",
      "animation-delay bilan staggered effekt yarating"
    ],
    assignment: {
      title: "Animatsiyali landing page",
      description: "Animatsiyali sahifa yarating: 1) Hero h1 - fadeIn animatsiya, 2) Tugmalar - hover transition (scale, shadow), 3) 4 ta kartochka - staggered animation (ketma-ket paydo bo'lish), 4) Loading spinner (spin keyframe), 5) Scroll'da ko'rinadigan elementlar - slideIn. Kamida 3 ta @keyframes va 5 ta transition.",
      hint: "fadeIn: opacity 0→1, translateY 20→0. Staggered: nth-child(n) bilan animation-delay. animation: ... forwards; - oxirgi holatda qoladi.",
      solution: `/* Animatsiyali Landing Page CSS */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.6;
    background: #f5f5f5;
}

/* ===== Keyframes ===== */

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* ===== Hero Section ===== */
.hero {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    padding: 40px;
}

.hero h1 {
    font-size: clamp(36px, 8vw, 64px);
    margin-bottom: 20px;
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
}

.hero p {
    font-size: clamp(18px, 3vw, 24px);
    margin-bottom: 30px;
    opacity: 0;
    animation: fadeInUp 0.8s ease 0.2s forwards;
}

/* ===== Buttons ===== */
.btn {
    padding: 15px 35px;
    font-size: 18px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    animation: fadeInUp 0.8s ease 0.4s forwards;
}

.btn-primary {
    background: white;
    color: #667eea;
}

.btn-primary:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.btn-primary:active {
    transform: translateY(-2px) scale(1.02);
}

/* ===== Cards Section ===== */
.features {
    padding: 80px 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.feature-card {
    flex: 0 1 280px;
    background: white;
    padding: 35px;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    transition: all 0.4s ease;
    
    /* Staggered animation */
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards;
}

.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
.feature-card:nth-child(4) { animation-delay: 0.4s; }

.feature-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
}

.feature-card .icon {
    font-size: 48px;
    margin-bottom: 20px;
    animation: float 3s ease-in-out infinite;
}

/* ===== Spinner ===== */
.spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #e0e0e0;
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 50px auto;
}

/* ===== Pulse Effect ===== */
.cta-btn {
    animation: pulse 2s ease-in-out infinite;
}

/* ===== Slide In (for scroll reveal) ===== */
.slide-in-left {
    opacity: 0;
    animation: fadeInLeft 0.6s ease forwards;
}

.slide-in-left.visible {
    animation-play-state: running;
}`
    }
  },
  {
    id: 15,
    title: "React asoslari",
    description: "React komponentlar, props va useState hook",
    duration: "50 daqiqa",
    content: `## React nima?

React - Facebook yaratgan JavaScript kutubxonasi. U sahifani KOMPONENTLAR dan quradi.

Komponent = kichik, qayta ishlatiladigan UI qismi.

## Nima uchun React?

- Komponentlar - qayta ishlating
- Virtual DOM - tez ishlaydi
- Katta jamoa va ekotizim
- Ishga olinish oson

## Birinchi komponent

function Welcome() {
    return <h1>Salom!</h1>;
}

Bu JSX - JavaScript ichida HTML yozish.

## JSX qoidalari

1. className (class emas)
2. camelCase (onClick, onChange)
3. Bitta ildiz element
4. {} ichida JavaScript

## Props

Props = tashqaridan keling ma'lumot

function Card({ title, description }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

// Ishlatish
<Card title="React" description="UI kutubxonasi" />

## useState

useState = komponent ichidagi holat (o'zgaruvchan ma'lumot)

import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <button onClick={() => setCount(count + 1)}>
            Bosildi: {count}
        </button>
    );
}

## Hodisalar

React da camelCase:
- onClick
- onChange
- onSubmit

<button onClick={() => console.log("Bosildi!")}>
    Bosing
</button>

## Massivni render qilish

const mevalar = ["olma", "banan", "uzum"];

return (
    <ul>
        {mevalar.map((meva, index) => (
            <li key={index}>{meva}</li>
        ))}
    </ul>
);

key - har bir element uchun noyob ID.`,
    codeExample: `import { useState } from 'react';

// ===== Oddiy komponent =====
function Header() {
    return (
        <header className="header">
            <h1>Mening Saytim</h1>
            <nav>
                <a href="/">Bosh sahifa</a>
                <a href="/about">Biz haqimizda</a>
            </nav>
        </header>
    );
}

// ===== Props bilan =====
function Card({ title, description, imageUrl }) {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

// ===== useState - Hisoblagich =====
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

// ===== useState - Toggle =====
function ToggleButton() {
    const [isOn, setIsOn] = useState(false);
    
    return (
        <button 
            onClick={() => setIsOn(!isOn)}
            style={{ 
                backgroundColor: isOn ? '#27ae60' : '#95a5a6',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '20px'
            }}
        >
            {isOn ? 'ON' : 'OFF'}
        </button>
    );
}

// ===== useState - Input =====
function SearchBox() {
    const [query, setQuery] = useState('');
    
    return (
        <div>
            <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Qidirish..."
            />
            <p>Siz qidirmoqdasiz: {query}</p>
        </div>
    );
}

// ===== Todo App =====
function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    
    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { 
                id: Date.now(), 
                text: input, 
                completed: false 
            }]);
            setInput('');
        }
    };
    
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id 
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    };
    
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    return (
        <div className="todo-app">
            <h1>Vazifalar</h1>
            
            <div className="add-todo">
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Yangi vazifa..."
                />
                <button onClick={addTodo}>Qo'shish</button>
            </div>
            
            <ul className="todo-list">
                {todos.map(todo => (
                    <li 
                        key={todo.id}
                        className={todo.completed ? 'completed' : ''}
                    >
                        <span onClick={() => toggleTodo(todo.id)}>
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>
                            O'chirish
                        </button>
                    </li>
                ))}
            </ul>
            
            <p>{todos.filter(t => !t.completed).length} ta bajarilmagan</p>
        </div>
    );
}

// ===== App =====
function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Counter />
                <ToggleButton />
                <SearchBox />
                <TodoApp />
                
                <div className="cards">
                    <Card 
                        title="React"
                        description="UI kutubxonasi"
                        imageUrl="https://picsum.photos/300/200"
                    />
                </div>
            </main>
        </div>
    );
}

export default App;`,
    vsCodeSteps: [
      "Loyiha allaqachon React - App.tsx ni oching",
      "Yangi komponent yarating: function MyComponent()",
      "return ichida JSX yozing",
      "className (class emas) ishlating",
      "useState import qiling: import { useState } from 'react'",
      "const [count, setCount] = useState(0);",
      "onClick={() => setCount(count + 1)}"
    ],
    assignment: {
      title: "React bilan Todo ilova",
      description: "React da Todo ilova yarating: 1) TodoApp komponenti - useState bilan todos massiv, 2) Input va 'Qo'shish' tugmasi, 3) todos.map() bilan ro'yxat, 4) Har bir item da 'Bajarildi' (toggle) va 'O'chirish' tugmalari, 5) Bajarilmaganlar sonini ko'rsating. Alohida TodoItem komponenti yarating!",
      hint: "useState([]) - bo'sh massiv. setTodos([...todos, yangiItem]). filter(t => t.id !== id) - o'chirish. map() bilan toggle.",
      solution: `import { useState } from 'react';

// TodoItem komponenti
function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li className={\`todo-item \${todo.completed ? 'completed' : ''}\`}>
            <span 
                onClick={() => onToggle(todo.id)}
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                    flex: 1
                }}
            >
                {todo.text}
            </span>
            <button 
                onClick={() => onToggle(todo.id)}
                className="complete-btn"
            >
                {todo.completed ? '↩️' : '✓'}
            </button>
            <button 
                onClick={() => onDelete(todo.id)}
                className="delete-btn"
            >
                ✕
            </button>
        </li>
    );
}

// Asosiy TodoApp komponenti
function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'React o\\'rganish', completed: false },
        { id: 2, text: 'Loyiha yaratish', completed: false },
        { id: 3, text: 'Portfolio to\\'ldirish', completed: true }
    ]);
    const [input, setInput] = useState('');
    
    // Yangi todo qo'shish
    const addTodo = () => {
        const text = input.trim();
        if (text === '') return;
        
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        
        setTodos([...todos, newTodo]);
        setInput('');
    };
    
    // Toggle - bajarildi/bajarilmadi
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id 
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    };
    
    // O'chirish
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    
    // Enter bilan qo'shish
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };
    
    // Statistika
    const totalTodos = todos.length;
    const completedTodos = todos.filter(t => t.completed).length;
    const remainingTodos = totalTodos - completedTodos;
    
    return (
        <div className="todo-app">
            <h1>📝 Vazifalar Ro'yxati</h1>
            
            {/* Qo'shish formasi */}
            <div className="add-form">
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Yangi vazifa..."
                    className="todo-input"
                />
                <button onClick={addTodo} className="add-btn">
                    Qo'shish
                </button>
            </div>
            
            {/* Vazifalar ro'yxati */}
            {todos.length === 0 ? (
                <p className="empty-message">Hozircha vazifalar yo'q</p>
            ) : (
                <ul className="todo-list">
                    {todos.map(todo => (
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                        />
                    ))}
                </ul>
            )}
            
            {/* Statistika */}
            {todos.length > 0 && (
                <div className="stats">
                    <span>Jami: {totalTodos}</span>
                    <span>Bajarilgan: {completedTodos}</span>
                    <span>Qoldi: {remainingTodos}</span>
                </div>
            )}
        </div>
    );
}

export default TodoApp;`
    }
  }
];
