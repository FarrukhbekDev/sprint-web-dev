export interface Lesson {
  id: number;
  title: string;
  description: string;
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
    <h1>Xudarganov Farrux</h1>
    <p>Men <strong>Toshkent</strong>da yashayman. Yoshim 22 da. <em>Dasturlashni</em> juda yaxshi ko'raman!</p>
    
    <h2>Mening maqsadlarim</h2>
    <p>Men professional <strong>frontend dasturchi</strong> bo'lmoqchiman. 
    2026 yil oxirigacha <em>React</em> va <em>TypeScript</em> ni mukammal o'rganmoqchiman.</p>
</body>
</html>`
    }
  },
  {
    id: 2,
    title: "HTML teglar va atributlar",
    description: "Asosiy HTML teglari va ularning atributlari bilan ishlash",
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
<a href="mailto:email@example.com">Email yuborish</a>`,
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
    <h1 id="name">Xudarganov Farrux</h1>
    
    <img src="https://picsum.photos/200" alt="Xudarganov Farrux rasmi">
    
    <h2>Men haqimda</h2>
    <p class="about">Men frontend dasturchiman. 3 yillik tajribam bor.</p>
    <p class="about">HTML, CSS, JavaScript va React texnologiyalarini bilaman.</p>
    
    <h2>Ijtimoiy tarmoqlar</h2>
    <p>
        <a href="https://github.com/farrux" target="_blank">GitHub</a> | 
        <a href="https://linkedin.com/in/farrux" target="_blank">LinkedIn</a> | 
        <a href="https://t.me/farrux" target="_blank">Telegram</a>
    </p>
    
    <h2>Bog'lanish</h2>
    <p>
        <a href="tel:+998901234567">📞 +998 90 123 45 67</a><br>
        <a href="mailto:farrux@example.com">📧 farrux@example.com</a>
    </p>
    
    <hr>
    <footer>
        <p>&copy; 2026 Xudarganov Farrux. Barcha huquqlar himoyalangan.</p>
    </footer>
</body>
</html>`
    }
  },
  {
    id: 3,
    title: "HTML ro'yxatlar va jadvallar",
    description: "Tartibli va tartibsiz ro'yxatlar, jadval yaratish",
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

## Tartibli ro'yxat (ol)

Raqamlar bilan. Tartib muhim:

<ol>
    <li>HTML o'rganing</li>
    <li>CSS o'rganing</li>
    <li>JavaScript o'rganing</li>
</ol>

## Jadvallar

Jadval = qatorlar + ustunlar. Excel jadvaliga o'xshaydi.

Asosiy teglar:
- <table> - jadval
- <tr> - qator (table row)
- <th> - sarlavha katak (table header)
- <td> - oddiy katak (table data)

Struktura:
- <thead> - sarlavha qismi
- <tbody> - asosiy qism`,
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
    </ul>
    
    <!-- Tartibli ro'yxat -->
    <h2>Dasturlashni o'rganish bosqichlari:</h2>
    <ol>
        <li>HTML asoslarini o'rganing</li>
        <li>CSS bilan tanishing</li>
        <li>JavaScript o'rganing</li>
    </ol>
    
    <h1>Jadval</h1>
    
    <table border="1" cellpadding="10">
        <thead>
            <tr>
                <th>Ism</th>
                <th>Yosh</th>
                <th>Kasb</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ali</td>
                <td>25</td>
                <td>Dasturchi</td>
            </tr>
            <tr>
                <td>Malika</td>
                <td>23</td>
                <td>Dizayner</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`,
    vsCodeSteps: [
      "Yangi fayl: cv.html",
      "<ul> bilan ko'nikmalar ro'yxatini yozing",
      "<ol> bilan ta'lim bosqichlarini yozing",
      "<table> bilan ish tajribasi jadvalini yarating",
      "<thead> va <tbody> ishlating",
      "border='1' qo'shib chegarani ko'ring"
    ],
    assignment: {
      title: "Shaxsiy CV sahifasi",
      description: "CV sahifa yarating: 1) Tartibsiz ro'yxatda 5 ta texnik ko'nikmangiz, 2) Tartibli ro'yxatda ta'lim bosqichlaringiz, 3) Ish tajribasi jadvali (kompaniya, lavozim, yillar) - kamida 3 qator.",
      hint: "Jadvalda <thead> va <tbody> ishlating. colspan bilan footer yarating.",
      solution: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Xudarganov Farrux - CV</title>
</head>
<body>
    <h1>Xudarganov Farrux</h1>
    <p>Frontend Developer | Toshkent</p>
    
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
        <li>2019-2021: IT Park Academy</li>
        <li>2021-2025: TATU</li>
    </ol>
    
    <h2>Ish tajribasi</h2>
    <table border="1" cellpadding="10">
        <thead>
            <tr>
                <th>Kompaniya</th>
                <th>Lavozim</th>
                <th>Yillar</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>IT Solutions</td>
                <td>Junior Developer</td>
                <td>2021-2022</td>
            </tr>
            <tr>
                <td>WebStudio</td>
                <td>Frontend Developer</td>
                <td>2022-2023</td>
            </tr>
            <tr>
                <td>TechCorp</td>
                <td>Senior Developer</td>
                <td>2023-hozir</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`
    }
  },
  {
    id: 4,
    title: "CSS bilan tanishuv",
    description: "CSS nima, uning vazifasi va HTMLga ulash usullari",
    content: `## CSS nima?

CSS (Cascading Style Sheets) - HTML elementlarini bezash uchun til. 

Oddiy tilda: HTML - uyning skelet-konstruksiyasi, CSS - uning bo'yoqlari, mebellari, dekori.

## CSS qanday ulanadi?

### 1. Inline CSS (yomon usul)
<p style="color: red;">Qizil matn</p>

### 2. Internal CSS (o'rtacha)
<head> ichida <style> tegida yoziladi.

### 3. External CSS (eng yaxshi!)
Alohida .css faylda:
<link rel="stylesheet" href="styles.css">

## CSS sintaksisi

selector {
    property: value;
}

Misol:
p {
    color: blue;
    font-size: 18px;
}`,
    codeExample: `/* styles.css */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f5f5f5;
    color: #333;
}

h1 {
    color: #2c3e50;
    font-size: 32px;
    margin-bottom: 20px;
}

p {
    font-size: 16px;
    margin-bottom: 10px;
}

.card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

#header {
    background-color: #3498db;
    color: white;
    padding: 20px;
    text-align: center;
}

a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    color: #2980b9;
    text-decoration: underline;
}`,
    vsCodeSteps: [
      "Yangi papka yarating: my-project",
      "Ichida 2 ta fayl: index.html va styles.css",
      "index.html da <head> ichiga: <link rel='stylesheet' href='styles.css'>",
      "styles.css da stillar yozing",
      "Saqlang va brauzerda oching",
      "CSS ni o'zgartirib, natijani ko'ring"
    ],
    assignment: {
      title: "CSS bilan sahifani bezang",
      description: "Oldingi CV sahifangizga external CSS qo'shing: 1) body - oq fon, qora matn, 2) h1 - ko'k rang, 3) Jadvalga border va padding, 4) Havolalarga hover effekti.",
      hint: "External CSS uchun <link rel='stylesheet' href='styles.css'>.",
      solution: `/* styles.css */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #f0f0f0;
    color: #333;
    padding: 20px;
}

h1 {
    color: #3498db;
    text-align: center;
}

h2 {
    color: #555;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
    margin-top: 25px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ddd;
    padding: 12px;
}

th {
    background-color: #3498db;
    color: white;
}

a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    color: #e74c3c;
    text-decoration: underline;
}`
    }
  },
  {
    id: 5,
    title: "CSS selektorlar",
    description: "Element, class, ID va murakkab selektorlar",
    content: `## Selektor nima?

Selektor - qaysi elementga stil berish kerakligini ko'rsatadi.

## Asosiy selektorlar

### 1. Element selektori
p { color: blue; }  - barcha p lar ko'k

### 2. Class selektori (.)
.card { padding: 20px; }
HTML: <div class="card">...</div>

### 3. ID selektori (#)
#header { background: blue; }
HTML: <div id="header">...</div>

## Kombinatsiya selektorlar

### Avlod (space)
div p { }  - div ICHIDAGI barcha p lar

### Bevosita bola (>)
div > p { }  - faqat TO'G'RI bola p lar

## Pseudo-class selektorlar

:hover - sichqoncha ustida
:focus - fokusda
:first-child - birinchi bola
:nth-child(even) - juft bolalar`,
    codeExample: `/* Element selektori */
body {
    font-family: Arial, sans-serif;
}

/* Class selektori */
.btn {
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary {
    background-color: #3498db;
    color: white;
}

.btn-primary:hover {
    background: #2980b9;
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

/* Pseudo-class */
li:first-child {
    font-weight: bold;
}

tr:nth-child(even) {
    background-color: #f5f5f5;
}

input:focus {
    outline: 2px solid #3498db;
}`,
    vsCodeSteps: [
      "styles.css faylingizni oching",
      "Turli selektorlar qo'shing",
      ".card ichidagi .title uchun stil yozing",
      ":hover effekti qo'shing",
      ":nth-child(even) bilan juft qatorlarni ranglang"
    ],
    assignment: {
      title: "Selektorlar bilan amaliyot",
      description: "Sahifa yarating: 1) 3 xil class (.container, .card, .btn), 2) 1 ta ID (#main-header), 3) Pseudo-classlar: :hover (3 joyda), :first-child, :nth-child(even).",
      hint: "Bir elementga bir nechta class: class='btn btn-primary'.",
      solution: `/* Selektorlar amaliyot */

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

.card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}

.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.btn:hover {
    opacity: 0.9;
}

#main-header {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 40px;
    text-align: center;
}

li:first-child {
    font-weight: bold;
}

tr:nth-child(even) {
    background: #f9f9f9;
}`
    }
  },
  {
    id: 6,
    title: "CSS Box Model",
    description: "Margin, padding, border va content tushunchasi",
    content: `## Box Model nima?

Har bir HTML element to'rtburchak "quti" hisoblanadi. Bu quti 4 qatlamdan iborat:

1. **Content** - ichki matn/rasm
2. **Padding** - kontent atrofidagi ichki bo'shliq
3. **Border** - chegara (ramka)
4. **Margin** - tashqi bo'shliq

## Padding (Ichki bo'shliq)

padding: 20px;  - barcha tomondan 20px
padding: 10px 20px;  - tepa/past 10, chap/o'ng 20

## Border (Chegara)

border: 2px solid #333;
border-radius: 10px;  - burchaklarni yumaloqlash

## Margin (Tashqi bo'shliq)

margin: 20px;
margin: 0 auto;  - gorizontal markazlash

## Box-sizing (Muhim!)

* {
    box-sizing: border-box;
}

Endi width = content + padding + border. Ancha qulay!`,
    codeExample: `/* Box Model CSS */

* {
    box-sizing: border-box;
}

.card {
    width: 300px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 12px;
    margin: 20px;
    background: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.centered-box {
    width: 400px;
    margin: 0 auto;
    padding: 30px;
}

.button {
    padding: 12px 24px;
    margin: 5px;
    border: none;
    border-radius: 8px;
    transition: all 0.3s ease;
}`,
    vsCodeSteps: [
      "Yangi HTML va CSS fayl yarating",
      "* { box-sizing: border-box; } qo'shing",
      ".card classi yarating - padding, border, margin",
      "DevTools (F12) oching, element ustida Box Model ko'ring",
      "box-shadow qo'shib soya yarating"
    ],
    assignment: {
      title: "Box Model bilan mahsulot kartochkalari",
      description: "3 ta mahsulot kartochkasi yarating: 1) width: 280px, padding: 20px, border: 1px solid, 2) Har birida rasm, sarlavha, narx va tugma, 3) border-radius: 12px, 4) box-shadow va hover effekti.",
      hint: "* { box-sizing: border-box; } - bu hamma elementlarga qo'llanadi.",
      solution: `/* Mahsulot kartochalari */

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.products {
    display: flex;
    gap: 20px;
    padding: 40px;
}

.product-card {
    width: 280px;
    padding: 20px;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.product-card img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
}

.product-card .btn {
    width: 100%;
    padding: 12px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
}`
    }
  },
  {
    id: 7,
    title: "CSS Flexbox asoslari",
    description: "Moslashuvchan bir o'lchovli layout yaratish",
    content: `## Flexbox nima?

Flexbox - elementlarni QATORDA yoki USTUNDA tartibga solish usuli.

## Qanday yoqiladi?

.container {
    display: flex;
}

## justify-content (gorizontal)

flex-start - boshida
flex-end - oxirida
center - markazda
space-between - orasida teng bo'shliq
space-around - atrofida bo'shliq

## align-items (vertikal)

stretch - cho'ziladi
flex-start - tepada
flex-end - pastda
center - markazda

## flex-wrap

wrap - sig'masa keyingi qatorga o'tadi

## gap

gap: 20px; - elementlar orasidagi bo'shliq`,
    codeExample: `/* Flexbox CSS */

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background: #2c3e50;
}

.navbar .nav-links {
    display: flex;
    gap: 25px;
    list-style: none;
}

.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    text-align: center;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.card {
    flex: 0 1 300px;
}

.footer {
    display: flex;
    justify-content: space-between;
    padding: 40px;
}`,
    vsCodeSteps: [
      "Container yarating: <div class='container'>",
      "CSS da display: flex; qo'shing",
      "justify-content qiymatlarini sinab ko'ring",
      "flex-wrap: wrap; bilan responsive qiling",
      "gap: 20px; bilan bo'shliq qo'shing"
    ],
    assignment: {
      title: "Flexbox bilan to'liq sahifa layout",
      description: "Flexbox yordamida sahifa yarating: 1) Navbar: chapda logo, o'rtada linklar, o'ngda tugma, 2) Hero: markazda h1 va tugma, 3) 4 ta kartochka (flex-wrap), 4) 3 ustunli footer.",
      hint: "Navbar: justify-content: space-between. Hero: flex-direction: column.",
      solution: `/* Flexbox sahifa layout */

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background: #2c3e50;
}

.nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
}

.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
}

.features {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    padding: 60px;
}

.feature-card {
    flex: 0 1 280px;
    padding: 30px;
    background: white;
    border-radius: 12px;
    text-align: center;
}

.footer {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding: 50px;
    background: #2c3e50;
    color: white;
}

.footer-section {
    flex: 1;
}`
    }
  },
  {
    id: 8,
    title: "CSS Grid asoslari",
    description: "Ikki o'lchovli murakkab layoutlar uchun Grid",
    content: `## Grid nima?

Grid - ikki o'lchamli layout tizimi. Flexbox QATOR yoki USTUN bilan ishlasa, Grid IKKALASI bilan bir vaqtda.

## Qanday yoqiladi?

.container {
    display: grid;
}

## Ustun va qatorlar

grid-template-columns: 200px 200px 200px;
grid-template-columns: 1fr 1fr 1fr;
grid-template-columns: repeat(3, 1fr);

## Responsive Grid

grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

Bu sehrli kod! Minimal 250px, maksimal teng bo'linadi.

## grid-template-areas

.container {
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
}`,
    codeExample: `/* CSS Grid */

.simple-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

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

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

.widget-large {
    grid-column: span 2;
}`,
    vsCodeSteps: [
      "Container yarating, display: grid; qo'shing",
      "grid-template-columns: repeat(3, 1fr); sinang",
      "DevTools → Grid badge bosing - chiziqlar ko'rinadi",
      "auto-fit, minmax() bilan responsive qiling"
    ],
    assignment: {
      title: "Grid bilan Dashboard",
      description: "Admin dashboard yarating: 1) grid-template-areas bilan: header, sidebar, main, footer, 2) Main ichida 4 ta statistika kartochka (2x2), 3) Responsive: 768px dan kichikda 1 ustun.",
      hint: "grid-template-areas - eng oson usul. @media (max-width: 768px) da grid-template-columns: 1fr;",
      solution: `/* Dashboard Grid Layout */

.dashboard-layout {
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 60px 1fr 50px;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    min-height: 100vh;
}

.header { grid-area: header; background: #2c3e50; }
.sidebar { grid-area: sidebar; background: #34495e; }
.main { grid-area: main; padding: 25px; }
.footer { grid-area: footer; background: #2c3e50; }

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

@media (max-width: 768px) {
    .dashboard-layout {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "main"
            "footer";
    }
    
    .sidebar { display: none; }
    
    .stats-grid {
        grid-template-columns: 1fr;
    }
}`
    }
  },
  {
    id: 9,
    title: "Responsive dizayn",
    description: "Media queries, mobile-first yondashuvi",
    content: `## Responsive dizayn nima?

Sahifa turli ekranlarda (telefon, planshet, kompyuter) yaxshi ko'rinishi.

## Media Queries

@media (max-width: 768px) {
    /* 768px dan KICHIK ekranlarda */
}

@media (min-width: 768px) {
    /* 768px dan KATTA ekranlarda */
}

## Breakpoints

- 480px - telefon
- 768px - planshet
- 1024px - laptop
- 1280px - desktop

## Mobile-First yondashuvi

Birinchi mobil uchun yozing, keyin kattalar uchun:

.container {
    width: 100%;
    padding: 15px;
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

## Viewport meta (Majburiy!)

<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    codeExample: `/* Mobile-First Responsive CSS */

body {
    font-family: 'Segoe UI', sans-serif;
}

.container {
    width: 100%;
    padding: 0 15px;
}

h1 {
    font-size: clamp(28px, 6vw, 48px);
}

img {
    max-width: 100%;
    height: auto;
}

/* Mobil - hamburger menu */
.nav-toggle { display: block; }
.nav-links { display: none; }

.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

/* Planshet (768px+) */
@media (min-width: 768px) {
    .container { max-width: 720px; margin: 0 auto; }
    .nav-toggle { display: none; }
    .nav-links { display: flex; }
    .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
    .container { max-width: 1000px; }
    .grid { grid-template-columns: repeat(3, 1fr); }
}`,
    vsCodeSteps: [
      "index.html da <meta name='viewport'...> borligini tekshiring",
      "Birinchi mobil uchun stillar yozing",
      "@media (min-width: 768px) {} qo'shing",
      "DevTools → Toggle Device Toolbar (Ctrl+Shift+M)",
      "Turli qurilmalarni tanlang va ko'ring"
    ],
    assignment: {
      title: "To'liq responsive sahifa",
      description: "Mobile-first sahifa: 1) Mobilda: hamburger menu, 1 ustun, 2) Planshet (768px+): oddiy navbar, 2 ustun, 3) Desktop (1024px+): 3 ustun + sidebar.",
      hint: "Mobile-first = birinchi mobil stillar, keyin @media (min-width: ...).",
      solution: `/* Mobile-First CSS */

* { box-sizing: border-box; margin: 0; padding: 0; }

h1 { font-size: clamp(28px, 7vw, 52px); }

.navbar { padding: 15px; background: #2c3e50; }
.nav-toggle { display: block; color: white; }
.nav-links { display: none; }

.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
}

.sidebar { display: none; }

@media (min-width: 768px) {
    .nav-toggle { display: none; }
    .nav-links { display: flex; gap: 25px; }
    .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
    .page-wrapper {
        display: grid;
        grid-template-columns: 250px 1fr;
    }
    .sidebar { display: block; }
    .grid { grid-template-columns: repeat(3, 1fr); }
}`
    }
  },
  {
    id: 10,
    title: "JavaScript asoslari",
    description: "JavaScript sintaksisi, o'zgaruvchilar va ma'lumot turlari",
    content: `## JavaScript nima?

JavaScript - veb sahifalarni JONLI qiladigan til. HTML struktura, CSS dizayn bersa, JS harakatni beradi.

## O'zgaruvchilar

### const - o'zgarmas (eng ko'p ishlating)
const PI = 3.14;
const name = "Ali";

### let - o'zgaruvchan
let age = 25;
age = 26; // OK

## Ma'lumot turlari

- String (matn): let ism = "Ali";
- Number (son): let yosh = 25;
- Boolean (ha/yo'q): let active = true;

## Template Literals

const name = "Ali";
console.log(\`Salom, \${name}!\`);

## Operatorlar

### Arifmetik
+ - * / % **

### Taqqoslash
=== (qiymat VA tur) - BUNI ISHLATING!
!== < > <= >=`,
    codeExample: `// O'zgaruvchilar
const SITE_NAME = "front-end.uz";
let userCount = 0;

// String (matn)
const firstName = "Jasur";
const lastName = "Karimov";
const fullName = \`\${firstName} \${lastName}\`;
console.log(fullName);

// Number (son)
const age = 25;
const price = 99.99;
const discount = 0.15;
const finalPrice = price * (1 - discount);
console.log(\`Chegirma narx: \${finalPrice}\`);

// Boolean (mantiqiy)
const isLoggedIn = true;
const isAdmin = false;
const canEdit = isLoggedIn && isAdmin;

// Arifmetik operatsiyalar
const a = 10;
const b = 3;
console.log(\`Qo'shish: \${a + b}\`);
console.log(\`Bo'lish: \${a / b}\`);

// Taqqoslash
console.log(5 === "5"); // false (qiymat VA tur)
console.log(5 == "5");  // true (faqat qiymat)

// typeof
console.log(typeof firstName); // "string"
console.log(typeof age);       // "number"`,
    vsCodeSteps: [
      "Yangi fayl: script.js",
      "index.html da: <script src='script.js'></script>",
      "script.js da console.log('Ishlayapti!'); yozing",
      "Brauzerda F12 → Console oching",
      "O'zgaruvchilar yaratib, console.log() qiling"
    ],
    assignment: {
      title: "JavaScript asoslari amaliyot",
      description: "script.js yarating: 1) 5 ta const o'zgaruvchi - ism, familiya, yosh, kasb, shahar, 2) Template literal bilan taqdimot matni, 3) isAdult boolean (yosh >= 18), 4) 2 ta sonning yig'indisi, ayirmasi, ko'paytmasi.",
      hint: "Template literal: `Matn ${ozgaruvchi}`. Boolean: const isAdult = yosh >= 18;",
      solution: `// JavaScript amaliyot

const ism = "Jasur";
const familiya = "Karimov";
const yosh = 22;
const kasb = "Frontend Developer";
const shahar = "Toshkent";

const taqdimot = \`Salom! Men \${ism} \${familiya}. 
Yoshim \${yosh} da. \${kasb} sifatida ishlayman.\`;

console.log(taqdimot);

const isAdult = yosh >= 18;
console.log(\`Katta yoshdami: \${isAdult}\`);

const son1 = 15;
const son2 = 4;
console.log(\`Yig'indi: \${son1 + son2}\`);
console.log(\`Ayirma: \${son1 - son2}\`);
console.log(\`Ko'paytma: \${son1 * son2}\`);`
    }
  },
  {
    id: 11,
    title: "JavaScript funksiyalar va massivlar",
    description: "Funksiya yaratish, massivlar bilan ishlash",
    content: `## Funksiya nima?

Funksiya - qayta ishlatiladigan kod bloki.

## Funksiya yaratish

### Arrow function (zamonaviy)
const spiqdash = (ism) => \`Salom, \${ism}!\`;

## Massiv nima?

Massiv - ro'yxat. Bir nechta qiymatni bitta o'zgaruvchida saqlash.

const mevalar = ["olma", "banan", "uzum"];

## Massiv metodlari

### forEach - har biri uchun
mevalar.forEach(meva => console.log(meva));

### map - yangi massiv
const KATTA = mevalar.map(m => m.toUpperCase());

### filter - filtrlash
const uzunlar = mevalar.filter(m => m.length > 4);

### find - birinchi mos
const topildi = mevalar.find(m => m === "banan");

### reduce - yig'indi
const sonlar = [1, 2, 3, 4, 5];
const yigindi = sonlar.reduce((jami, son) => jami + son, 0);`,
    codeExample: `// Funksiyalar
function spiqdash(ism) {
    return \`Salom, \${ism}!\`;
}
console.log(spiqdash("Ali"));

// Arrow function
const kopaytirish = (a, b) => a * b;
console.log(kopaytirish(5, 3));

// Massivlar
const mevalar = ["olma", "banan", "uzum", "anor"];

// forEach
mevalar.forEach((meva, index) => {
    console.log(\`\${index + 1}. \${meva}\`);
});

// map
const kattaHarf = mevalar.map(meva => meva.toUpperCase());
console.log(kattaHarf);

// filter
const uzunMevalar = mevalar.filter(meva => meva.length > 4);
console.log(uzunMevalar);

// reduce
const sonlar = [10, 20, 30, 40, 50];
const yigindi = sonlar.reduce((jami, son) => jami + son, 0);
console.log(\`Yig'indi: \${yigindi}\`);

// Talabalar massivi
const talabalar = [
    { ism: "Ali", ball: 85 },
    { ism: "Malika", ball: 92 },
    { ism: "Jasur", ball: 78 }
];

const allochilar = talabalar.filter(t => t.ball >= 90);
console.log("A'lochilar:", allochilar);`,
    vsCodeSteps: [
      "script.js ni oching",
      "Oddiy funksiya yarating va chaqiring",
      "Arrow function sinab ko'ring",
      "Massiv yarating: const mevalar = [...]",
      "forEach, map, filter, reduce ni sinang"
    ],
    assignment: {
      title: "Funksiyalar va massivlar amaliyot",
      description: "Yarating: 1) ortacha funksiyasi - sonlar massivi olib o'rtacha qaytaradi, 2) Talabalar massivi [{ism, yosh, ball}] va: a) eng yuqori ball, b) ball > 80 ro'yxat.",
      hint: "O'rtacha = reduce yig'indi / length. Math.max(...massiv).",
      solution: `// O'rtacha hisoblash
const ortacha = (sonlar) => {
    const yigindi = sonlar.reduce((sum, son) => sum + son, 0);
    return yigindi / sonlar.length;
};

console.log(ortacha([10, 20, 30, 40, 50])); // 30

// Talabalar
const talabalar = [
    { ism: "Ali", yosh: 20, ball: 85 },
    { ism: "Malika", yosh: 19, ball: 92 },
    { ism: "Jasur", yosh: 21, ball: 78 }
];

const ballar = talabalar.map(t => t.ball);
const engYuqori = Math.max(...ballar);
console.log(\`Eng yuqori ball: \${engYuqori}\`);

const yaxshilar = talabalar.filter(t => t.ball > 80);
console.log("Ball > 80:", yaxshilar.map(t => t.ism));`
    }
  },
  {
    id: 12,
    title: "DOM bilan ishlash",
    description: "HTML elementlarini JavaScript orqali boshqarish",
    content: `## DOM nima?

DOM (Document Object Model) - JavaScript HTML ni ko'rish usuli.

## Elementlarni topish

### ID bo'yicha
const element = document.getElementById("header");

### Query selector
const element = document.querySelector(".card");
const elements = document.querySelectorAll(".card");

## Element kontentini o'zgartirish

element.textContent = "Yangi matn";
element.innerHTML = "<strong>Qalin</strong> matn";

## Class bilan ishlash

element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("open");

## Element yaratish va qo'shish

const yangi = document.createElement("div");
yangi.textContent = "Yangi element";
parent.appendChild(yangi);`,
    codeExample: `// Elementlarni topish
const header = document.getElementById("header");
const firstCard = document.querySelector(".card");
const allCards = document.querySelectorAll(".card");

// Matn o'zgartirish
header.textContent = "Yangi sarlavha";

// Class bilan ishlash
const button = document.querySelector(".btn");
button.classList.add("active");

button.addEventListener("click", () => {
    button.classList.toggle("loading");
});

// Yangi element yaratish
const newCard = document.createElement("div");
newCard.className = "card";
newCard.innerHTML = \`
    <h3>Yangi kartochka</h3>
    <p>JavaScript bilan yaratildi</p>
\`;

const container = document.querySelector(".cards");
container.appendChild(newCard);

// Bir nechta element yaratish
const mahsulotlar = [
    { nom: "Telefon", narx: 500 },
    { nom: "Laptop", narx: 1200 }
];

mahsulotlar.forEach(mahsulot => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = \`
        <h3>\${mahsulot.nom}</h3>
        <p>$\${mahsulot.narx}</p>
    \`;
    container.appendChild(card);
});`,
    vsCodeSteps: [
      "index.html da elementlar yarating (id va class bilan)",
      "script.js da document.querySelector() ishlating",
      "classList.add/remove/toggle sinang",
      "createElement() bilan yangi element yarating",
      "appendChild() bilan sahifaga qo'shing"
    ],
    assignment: {
      title: "DOM bilan todo ro'yxati",
      description: "Oddiy todo ro'yxat: 1) Input va 'Qo'shish' tugmasi, 2) JS bilan: tugma bosilganda yangi <li> yarating, 3) Har bir li da 'O'chirish' tugmasi.",
      hint: "input.value - inputdagi matn. createElement('li').",
      solution: `const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

const addTodo = () => {
    const text = todoInput.value.trim();
    if (text === "") return;
    
    const li = document.createElement("li");
    li.innerHTML = \`
        <span>\${text}</span>
        <button class="delete-btn">O'chirish</button>
    \`;
    
    todoList.appendChild(li);
    todoInput.value = "";
};

addBtn.addEventListener("click", addTodo);

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest("li").remove();
    }
});`
    }
  },
  {
    id: 13,
    title: "JavaScript hodisalar (Events)",
    description: "Click, input, submit va boshqa hodisalar bilan ishlash",
    content: `## Event Listener qo'shish

element.addEventListener("eventType", function);

## Eng muhim hodisalar

### Sichqoncha
- click, dblclick, mouseenter, mouseleave

### Klaviatura
- keydown, keyup

### Forma
- submit, input, change, focus, blur

## Event obyekti

button.addEventListener("click", (event) => {
    event.target // bosilgan element
    event.preventDefault() // standart harakatni to'xtatish
});

## Event Delegation

Ko'p elementga emas, ota elementga bitta listener:

ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        // li bosildi
    }
});`,
    codeExample: `// Click
const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
    console.log("Tugma bosildi!");
});

// Input
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (e) => {
    console.log("Qidirilmoqda:", e.target.value);
});

// Forma submit
const form = document.querySelector("#loginForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    if (email === "" || password === "") {
        alert("Barcha maydonlarni to'ldiring!");
        return;
    }
    
    console.log("Login:", { email, password });
});

// Klaviatura
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});

// Event Delegation
const todoList = document.querySelector("#todoList");
todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest("li").remove();
    }
    
    if (e.target.classList.contains("complete-btn")) {
        e.target.closest("li").classList.toggle("completed");
    }
});`,
    vsCodeSteps: [
      "HTML da tugma, input va forma yarating",
      "addEventListener('click', ...) qo'shing",
      "Console (F12) da event.target ko'ring",
      "Forma uchun e.preventDefault() ishlating",
      "Event delegation bilan ko'p elementni boshqaring"
    ],
    assignment: {
      title: "Interaktiv Todo ilova",
      description: "Oldingi darsni davom ettirib: 1) Forma submit bilan vazifa qo'shish, 2) 'Bajarildi' tugmasi, 3) 'O'chirish' tugmasi, 4) Enter tugmasi bilan ham qo'shish. Event delegation ishlating!",
      hint: "form.addEventListener('submit', e => { e.preventDefault(); ... })",
      solution: `const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

const addTodo = (text) => {
    const li = document.createElement("li");
    li.innerHTML = \`
        <span class="todo-text">\${text}</span>
        <button class="complete-btn">✓</button>
        <button class="delete-btn">✕</button>
    \`;
    todoList.appendChild(li);
};

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (text === "") return;
    
    addTodo(text);
    todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    
    if (e.target.classList.contains("delete-btn")) {
        li.remove();
    }
    
    if (e.target.classList.contains("complete-btn") || 
        e.target.classList.contains("todo-text")) {
        li.classList.toggle("completed");
    }
});`
    }
  },
  {
    id: 14,
    title: "CSS animatsiyalar",
    description: "Transition, keyframe animatsiyalar va transform",
    content: `## Transition

Bir holatdan boshqasiga SILLIQ o'tish:

.button {
    transition: background 0.3s ease;
}

.button:hover {
    background: red;
}

## Transform

- translate(x, y) - surish
- scale(1.2) - kattalashtirish
- rotate(45deg) - aylantirish

## @keyframes animatsiya

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.element {
    animation: fadeIn 0.5s ease forwards;
}

## Animation xususiyatlari

animation: name duration timing delay iteration-count direction;`,
    codeExample: `/* Transitions */
.btn {
    padding: 12px 24px;
    background: #3498db;
    transition: all 0.3s ease;
}

.btn:hover {
    background: #2980b9;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

/* Keyframe Animatsiyalar */
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
}

/* Staggered animation */
.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }`,
    vsCodeSteps: [
      "Tugma yarating va transition qo'shing",
      ":hover da transform: scale(1.05) sinang",
      "@keyframes fadeIn yarating",
      "Elementga animation: fadeIn 0.5s; qo'shing",
      "animation-delay bilan staggered effekt yarating"
    ],
    assignment: {
      title: "Animatsiyali landing page",
      description: "Animatsiyali sahifa: 1) Hero h1 - fadeIn animatsiya, 2) Tugmalar - hover transition, 3) 4 ta kartochka - staggered animation, 4) Loading spinner.",
      hint: "fadeIn: opacity 0→1, translateY 20→0. Staggered: nth-child(n) bilan delay.",
      solution: `@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.hero h1 {
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
}

.btn {
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.feature-card {
    opacity: 0;
    animation: fadeInUp 0.6s ease forwards;
}

.feature-card:nth-child(1) { animation-delay: 0.1s; }
.feature-card:nth-child(2) { animation-delay: 0.2s; }
.feature-card:nth-child(3) { animation-delay: 0.3s; }
.feature-card:nth-child(4) { animation-delay: 0.4s; }

.spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #e0e0e0;
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}`
    }
  },
  {
    id: 15,
    title: "React asoslari",
    description: "React komponentlar, props va useState hook",
    content: `## React nima?

React - Facebook yaratgan JavaScript kutubxonasi. U sahifani KOMPONENTLAR dan quradi.

## Birinchi komponent

function Welcome() {
    return <h1>Salom!</h1>;
}

## JSX qoidalari

1. className (class emas)
2. camelCase (onClick, onChange)
3. Bitta ildiz element
4. {} ichida JavaScript

## Props

Props = tashqaridan keluvchi ma'lumot

function Card({ title, description }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

## useState

import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <button onClick={() => setCount(count + 1)}>
            Bosildi: {count}
        </button>
    );
}`,
    codeExample: `import { useState } from 'react';

// Oddiy komponent
function Header() {
    return (
        <header className="header">
            <h1>Mening Saytim</h1>
        </header>
    );
}

// Props bilan
function Card({ title, description }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

// useState - Hisoblagich
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

// Massivni render qilish
function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'React o\\'rganish', completed: false }
    ]);
    
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}`,
    vsCodeSteps: [
      "Loyiha allaqachon React - App.tsx ni oching",
      "Yangi komponent yarating: function MyComponent()",
      "return ichida JSX yozing",
      "className (class emas) ishlating",
      "useState import qiling",
      "const [count, setCount] = useState(0);"
    ],
    assignment: {
      title: "React bilan Todo ilova",
      description: "React da Todo ilova: 1) TodoApp komponenti - useState bilan todos massiv, 2) Input va 'Qo'shish' tugmasi, 3) todos.map() bilan ro'yxat, 4) Toggle va O'chirish tugmalari.",
      hint: "useState([]) - bo'sh massiv. setTodos([...todos, yangiItem]).",
      solution: `import { useState } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    
    const addTodo = () => {
        if (input.trim() === '') return;
        
        setTodos([...todos, {
            id: Date.now(),
            text: input,
            completed: false
        }]);
        setInput('');
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
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>O'chirish</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;`
    }
  },
  {
    id: 16,
    title: "React useEffect va Hooks",
    description: "useEffect hook va boshqa React hooklar bilan ishlash",
    content: `## useEffect nima?

useEffect - komponent render bo'lganda yoki o'zgarganda chaqiriladigan funksiya.

## Asosiy sintaksis

import { useEffect } from 'react';

useEffect(() => {
    // Har render da ishlaydi
});

useEffect(() => {
    // Faqat bir marta (mount da)
}, []);

useEffect(() => {
    // dependency o'zgarganda
}, [dependency]);

## Amaliy misollar

- API dan ma'lumot olish
- Timer yaratish
- Document title o'zgartirish
- localStorage bilan ishlash

## Cleanup function

useEffect(() => {
    const interval = setInterval(() => {
        console.log('Har sekund');
    }, 1000);
    
    return () => clearInterval(interval);
}, []);`,
    codeExample: `import { useState, useEffect } from 'react';

// Document title o'zgartirish
function Counter() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        document.title = \`Soni: \${count}\`;
    }, [count]);
    
    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}

// localStorage bilan ishlash
function TodoApp() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    return <div>...</div>;
}

// Timer
function Timer() {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);
    
    return <p>Vaqt: {seconds} sekund</p>;
}

// API dan ma'lumot olish
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);
    
    if (loading) return <p>Yuklanmoqda...</p>;
    
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}`,
    vsCodeSteps: [
      "import { useEffect } from 'react' qo'shing",
      "useEffect(() => { console.log('Render!') }, []) sinang",
      "document.title o'zgartiring",
      "localStorage bilan ishlang",
      "Timer yarating va cleanup function qo'shing"
    ],
    assignment: {
      title: "useEffect bilan Todo ilova",
      description: "Oldingi Todo ilovasini kengaytiring: 1) localStorage ga saqlash (useEffect), 2) Sahifa yuklanganda localStorage dan o'qish, 3) Timer - necha sekund o'tganini ko'rsating.",
      hint: "localStorage.setItem('key', JSON.stringify(data)). JSON.parse(localStorage.getItem('key')).",
      solution: `import { useState, useEffect } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });
    const [input, setInput] = useState('');
    const [seconds, setSeconds] = useState(0);
    
    // localStorage ga saqlash
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    // Timer
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);
    
    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
            setInput('');
        }
    };
    
    return (
        <div>
            <p>Vaqt: {seconds} sekund</p>
            <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTodo}>Qo'shish</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;`
    }
  },
  {
    id: 17,
    title: "React Router",
    description: "React da sahifalar navigatsiyasi",
    content: `## React Router nima?

React Router - React ilovada turli sahifalar yaratish va ular orasida navigatsiya qilish uchun kutubxona.

## Asosiy komponentlar

### BrowserRouter
Butun ilovani o'raydi.

### Routes va Route
Sahifalarni aniqlaydi.

### Link
Sahifalar orasida o'tish.

## Asosiy sintaksis

<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
    </Routes>
</BrowserRouter>

## useParams

Dinamik parametrlarni olish:

const { id } = useParams();

## useNavigate

Programmatik navigatsiya:

const navigate = useNavigate();
navigate('/about');`,
    codeExample: `import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// Navbar
function Navbar() {
    return (
        <nav>
            <Link to="/">Bosh sahifa</Link>
            <Link to="/about">Biz haqimizda</Link>
            <Link to="/products">Mahsulotlar</Link>
        </nav>
    );
}

// Sahifalar
function Home() {
    return <h1>Bosh sahifa</h1>;
}

function About() {
    return <h1>Biz haqimizda</h1>;
}

function Products() {
    const products = [
        { id: 1, name: 'Telefon' },
        { id: 2, name: 'Laptop' }
    ];
    
    return (
        <div>
            <h1>Mahsulotlar</h1>
            <ul>
                {products.map(p => (
                    <li key={p.id}>
                        <Link to={\`/products/\${p.id}\`}>{p.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    return (
        <div>
            <h1>Mahsulot #{id}</h1>
            <button onClick={() => navigate('/products')}>
                Orqaga
            </button>
        </div>
    );
}

// App
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    );
}`,
    vsCodeSteps: [
      "npm install react-router-dom",
      "import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'",
      "App ni BrowserRouter bilan o'rang",
      "Routes ichida Route lar yarating",
      "Link bilan navigatsiya qo'shing"
    ],
    assignment: {
      title: "React Router bilan blog",
      description: "Blog yarating: 1) Bosh sahifa - postlar ro'yxati, 2) /posts/:id - alohida post, 3) /about - haqida sahifa, 4) Navbar bilan navigatsiya.",
      hint: "useParams() bilan id ni oling. Link to={`/posts/${post.id}`}.",
      solution: `import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

const posts = [
    { id: 1, title: 'React o\\'rganish', content: 'React ajoyib kutubxona...' },
    { id: 2, title: 'JavaScript asoslari', content: 'JS haqida...' }
];

function Navbar() {
    return (
        <nav>
            <Link to="/">Blog</Link>
            <Link to="/about">Haqida</Link>
        </nav>
    );
}

function Home() {
    return (
        <div>
            <h1>Blog</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <Link to={\`/posts/\${post.id}\`}>
                        <h2>{post.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
}

function Post() {
    const { id } = useParams();
    const post = posts.find(p => p.id === parseInt(id));
    
    if (!post) return <p>Post topilmadi</p>;
    
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to="/">Orqaga</Link>
        </div>
    );
}

function About() {
    return <h1>Blog haqida</h1>;
}

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts/:id" element={<Post />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}`
    }
  },
  {
    id: 18,
    title: "Git asoslari",
    description: "Git versiya nazorati tizimi bilan ishlash",
    content: `## Git nima?

Git - kodingiz tarixini saqlash va boshqa dasturchilar bilan hamkorlik qilish uchun tizim.

## Asosiy buyruqlar

### Repository yaratish
git init

### Status tekshirish
git status

### O'zgarishlarni qo'shish
git add .
git add filename.js

### Commit qilish
git commit -m "Xabar"

### Tarixni ko'rish
git log

## Branch (tarmoqlar)

git branch feature-name
git checkout feature-name
git checkout -b feature-name

## Merge

git checkout main
git merge feature-name

## GitHub bilan ishlash

git remote add origin URL
git push -u origin main
git pull origin main
git clone URL`,
    codeExample: `# Git buyruqlari

# 1. Yangi loyiha boshlash
git init
git add .
git commit -m "Initial commit"

# 2. Kundalik ish jarayoni
git status                    # Holat
git add .                     # Barcha o'zgarishlar
git commit -m "Add navbar"    # Commit

# 3. Branch bilan ishlash
git branch                    # Barcha branch
git branch feature-login      # Yangi branch
git checkout feature-login    # Branch ga o'tish
git checkout -b feature-cart  # Yaratish va o'tish

# 4. Merge
git checkout main             # main ga o'tish
git merge feature-login       # Birlashtirish

# 5. GitHub
git remote add origin https://github.com/user/repo.git
git push -u origin main       # Yuklash
git pull origin main          # Yangilash
git clone URL                 # Nusxa olish

# 6. Foydali buyruqlar
git log --oneline             # Qisqa tarix
git diff                      # O'zgarishlar
git stash                     # Vaqtincha saqlash
git stash pop                 # Qaytarish`,
    vsCodeSteps: [
      "Terminal oching: Ctrl + `",
      "git init - repository yarating",
      "git add . - o'zgarishlarni qo'shing",
      "git commit -m 'Xabar' - commit qiling",
      "GitHub da yangi repository yarating",
      "git remote add origin URL",
      "git push -u origin main"
    ],
    assignment: {
      title: "Git bilan loyihani boshqarish",
      description: "1) Yangi papka va git init, 2) index.html yarating va commit, 3) feature-style branch yarating, 4) style.css qo'shing va commit, 5) main ga merge qiling.",
      hint: "git checkout -b feature-style - yangi branch. git checkout main - main ga qaytish.",
      solution: `# Amaliyot buyruqlari

# 1. Loyiha boshlash
mkdir my-project
cd my-project
git init

# 2. Birinchi fayl
echo "<!DOCTYPE html>..." > index.html
git add index.html
git commit -m "Add index.html"

# 3. Feature branch
git checkout -b feature-style

# 4. CSS qo'shish
echo "body { font-family: Arial; }" > style.css
git add style.css
git commit -m "Add style.css"

# 5. Main ga merge
git checkout main
git merge feature-style

# Natija tekshirish
git log --oneline`
    }
  },
  {
    id: 19,
    title: "API bilan ishlash",
    description: "Fetch API va asinxron JavaScript",
    content: `## API nima?

API (Application Programming Interface) - boshqa serverlardan ma'lumot olish yo'li.

## Fetch API

fetch('URL')
    .then(response => response.json())
    .then(data => console.log(data));

## async/await (qulay usul)

const getData = async () => {
    const response = await fetch('URL');
    const data = await response.json();
    return data;
};

## HTTP metodlar

- GET - ma'lumot olish
- POST - yangi yaratish
- PUT - yangilash
- DELETE - o'chirish

## POST so'rov

fetch('URL', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Ali' })
});

## Error handling

try {
    const data = await fetchData();
} catch (error) {
    console.error('Xatolik:', error);
}`,
    codeExample: `// GET so'rov
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users);
        return users;
    } catch (error) {
        console.error('Xatolik:', error);
    }
}

// POST so'rov
async function createPost(postData) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    });
    
    const newPost = await response.json();
    return newPost;
}

// React da ishlatish
import { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) throw new Error('Xatolik!');
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchUsers();
    }, []);
    
    if (loading) return <p>Yuklanmoqda...</p>;
    if (error) return <p>Xatolik: {error}</p>;
    
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}`,
    vsCodeSteps: [
      "Console da fetch sinang",
      "async/await bilan funksiya yozing",
      "try/catch bilan xatolik ushlang",
      "React da useEffect ichida fetch qiling",
      "loading va error state qo'shing"
    ],
    assignment: {
      title: "API bilan React ilova",
      description: "Postlar ilovasi: 1) API dan postlar ro'yxatini oling, 2) Loading holati, 3) Error holati, 4) Postlarni kartochkalarda ko'rsating.",
      hint: "https://jsonplaceholder.typicode.com/posts - test API.",
      solution: `import { useState, useEffect } from 'react';

function PostsApp() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) throw new Error('Ma\\'lumot olinmadi');
                const data = await response.json();
                setPosts(data.slice(0, 10));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchPosts();
    }, []);
    
    if (loading) return <div className="loading">Yuklanmoqda...</div>;
    if (error) return <div className="error">Xatolik: {error}</div>;
    
    return (
        <div className="posts">
            <h1>Postlar</h1>
            <div className="posts-grid">
                {posts.map(post => (
                    <div key={post.id} className="post-card">
                        <h3>{post.title}</h3>
                        <p>{post.body.substring(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostsApp;`
    }
  },
  {
    id: 20,
    title: "Loyiha yaratish",
    description: "O'rganganlaringizni birlashtirib portfolio loyiha yaratish",
    content: `## Kurs yakunlandi! 🎉

Siz o'rgandingiz:
- HTML - sahifa strukturasi
- CSS - dizayn va responsive
- JavaScript - interaktivlik
- React - zamonaviy UI
- Git - versiya nazorati
- API - tashqi ma'lumotlar

## Portfolio loyiha uchun g'oyalar

1. Shaxsiy portfolio sayti
2. Todo ilova
3. Blog platformasi
4. E-commerce do'kon
5. Weather ilovasi
6. Recipe finder

## Loyiha strukturasi

my-portfolio/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── styles/
│   └── utils/
├── public/
└── package.json

## Best practices

1. Clean code - toza kod yozing
2. Comments - kerakli joylarda izoh
3. Git commits - tez-tez commit qiling
4. Responsive - barcha qurilmalar uchun
5. Accessibility - barcha foydalanuvchilar uchun`,
    codeExample: `// Portfolio loyiha strukturasi

// src/components/Navbar.jsx
function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Bosh sahifa</Link>
            <Link to="/projects">Loyihalar</Link>
            <Link to="/about">Men haqimda</Link>
            <Link to="/contact">Bog'lanish</Link>
        </nav>
    );
}

// src/pages/Home.jsx
function Home() {
    return (
        <div className="home">
            <section className="hero">
                <h1>Salom, men Frontend dasturchiman</h1>
                <p>React, TypeScript va zamonaviy texnologiyalar bilan ishlayman</p>
            </section>
            
            <section className="skills">
                <h2>Ko'nikmalar</h2>
                <div className="skills-grid">
                    <SkillCard name="React" level={90} />
                    <SkillCard name="TypeScript" level={85} />
                    <SkillCard name="CSS" level={95} />
                </div>
            </section>
            
            <section className="projects">
                <h2>Loyihalarim</h2>
                <ProjectsGrid />
            </section>
        </div>
    );
}

// src/pages/Projects.jsx
function Projects() {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        // API dan yoki local dan
        setProjects([
            { id: 1, title: 'Todo App', tech: ['React', 'CSS'] },
            { id: 2, title: 'Blog', tech: ['React', 'API'] }
        ]);
    }, []);
    
    return (
        <div className="projects-page">
            {projects.map(project => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
}`,
    vsCodeSteps: [
      "Yangi React loyiha yarating yoki mavjudini ishlating",
      "components, pages papkalar tuzilmasini yarating",
      "Navbar, Footer komponentlarini yarating",
      "Bosh sahifa, Loyihalar, Haqimda sahifalarini yarating",
      "React Router bilan bog'lang",
      "CSS bilan chiroyli dizayn qiling",
      "GitHub ga yuklang va deploy qiling"
    ],
    assignment: {
      title: "Portfolio sayt yarating",
      description: "O'z portfolio saytingizni yarating: 1) Hero section - ism, kasb, qisqa tavsif, 2) Skills - o'rgangan texnologiyalar, 3) Projects - 3-5 ta loyiha kartochkalari, 4) Contact - bog'lanish formasi, 5) Responsive dizayn.",
      hint: "Boshqa portfoliolarni ko'rib ilhom oling. CSS Grid va Flexbox ishlating.",
      solution: `// Portfolio App
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

function Home() {
    return (
        <main>
            <section className="hero">
                <h1>Salom, men <span>Jasur</span>man</h1>
                <p>Frontend Developer | React Specialist</p>
                <div className="buttons">
                    <Link to="/projects" className="btn-primary">
                        Loyihalarim
                    </Link>
                    <Link to="/contact" className="btn-secondary">
                        Bog'lanish
                    </Link>
                </div>
            </section>
            
            <section className="skills">
                <h2>Texnologiyalar</h2>
                <div className="skills-grid">
                    {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Git'].map(skill => (
                        <div key={skill} className="skill-card">{skill}</div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default App;`
    }
  }
];
