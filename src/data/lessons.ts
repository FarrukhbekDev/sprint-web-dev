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
  };
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "HTML nima va u qanday ishlaydi?",
    description: "Web sahifalarning asosi - HTML tili bilan tanishish",
    duration: "25 daqiqa",
    content: `HTML (HyperText Markup Language) - bu veb-sahifalar yaratish uchun ishlatiladigan standart til. U veb-brauzerga sahifa qanday ko'rinishda bo'lishi kerakligini aytadi. HTML 1991 yilda Tim Berners-Li tomonidan yaratilgan va hozirgi kunda HTML5 versiyasi ishlatiladi.

## HTML nima qiladi?

HTML veb-sahifaning skeletini yaratadi. U quyidagi vazifalarni bajaradi:

- Matn, rasm va boshqa kontentlarni joylashtiradi
- Sahifa strukturasini belgilaydi (sarlavhalar, paragraflar, ro'yxatlar)
- Brauzer uchun ko'rsatmalar beradi
- Boshqa sahifalarga havolalar yaratadi
- Forma va interaktiv elementlar qo'shadi

## HTML tegi nima?

Teglar - bu maxsus belgilar bo'lib, ular < va > belgilari orasida yoziladi. Masalan: <p>, <h1>, <div>. Teglar brauzerga kontentni qanday ko'rsatish kerakligini aytadi.

Har bir teg ochiladi va yopiladi:
- Ochilish tegi: <tagname>
- Yopilish tegi: </tagname>
- Ba'zi teglar o'z-o'zini yopadi: <img />, <br />, <hr />

## HTML hujjat strukturasi

Har bir HTML hujjat quyidagi asosiy qismlardan iborat:

- <!DOCTYPE html> - brauzerga bu HTML5 hujjat ekanini bildiradi
- <html> - butun hujjatni o'rab turadi
- <head> - meta ma'lumotlar (title, CSS, JavaScript havolalar)
- <body> - sahifada ko'rinadigan barcha kontent

## Nima uchun HTML muhim?

HTML - bu veb-dasturlashning asosi. JavaScript va CSS bilan birgalikda u "veb-ning uch ustuni" deb ataladi. HTML strukturani, CSS dizaynni, JavaScript esa interaktivlikni ta'minlaydi.

## Brauzer HTML ni qanday o'qiydi?

1. Brauzer HTML faylni yuklab oladi
2. HTML kodini tahlil qiladi (parsing)
3. DOM (Document Object Model) daraxtini yaratadi
4. Sahifani ekranga chizadi (rendering)`,
    codeExample: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mening birinchi sahifam</title>
</head>
<body>
    <h1>Salom Dunyo!</h1>
    <p>Bu mening birinchi veb-sahifam.</p>
    <p>Men bugun HTML o'rganishni boshladim!</p>
    
    <!-- Bu izoh - brauzer buni ko'rsatmaydi -->
    
    <h2>Nega HTML o'rganish kerak?</h2>
    <p>HTML barcha veb-sahifalarning asosi hisoblanadi.</p>
</body>
</html>`,
    assignment: {
      title: "Birinchi HTML sahifangizni yarating",
      description: "To'liq HTML sahifa yarating. Unda: 1) h1 tegi ichida o'z ismingizni yozing, 2) p tegi ichida o'zingiz haqida 2-3 gap yozing, 3) h2 tegi ichida 'Mening maqsadlarim' deb yozing, 4) Yana bir p tegi ichida dasturlash bo'yicha maqsadlaringizni yozing.",
      hint: "<!DOCTYPE html> bilan boshlang. <html>, <head>, <title>, <body> teglarini to'g'ri joylashtiring. Izohlar uchun <!-- izoh --> sintaksisidan foydalaning."
    }
  },
  {
    id: 2,
    title: "HTML teglar va atributlar",
    description: "Asosiy HTML teglari va ularning atributlari bilan ishlash",
    duration: "30 daqiqa",
    content: `## Asosiy HTML teglar

HTML da 100 dan ortiq teglar mavjud, lekin kundalik ishda 20-30 tasini ko'p ishlatamiz. Keling, eng muhimlarini o'rganamiz.

### Sarlavha teglari (Headings)

h1 dan h6 gacha - sarlavhalar uchun ishlatiladi. h1 eng katta va muhim, h6 eng kichik.

- <h1> - Sahifaning asosiy sarlavhasi (har sahifada faqat 1 ta bo'lishi kerak)
- <h2> - Bo'lim sarlavhalari
- <h3> - <h6> - Kichik bo'limlar

SEO uchun muhim: Sarlavhalarni tartib bilan ishlating (h1 -> h2 -> h3).

### Matn teglari

- <p> - Paragraf (oddiy matn uchun)
- <span> - Inline matn qismi (stillashtirish uchun)
- <strong> - Qalin va muhim matn
- <em> - Kursiv va ta'kidlangan matn
- <br> - Yangi qatorga o'tish
- <hr> - Gorizontal chiziq

### Havola (Link) tegi

<a> tegi - boshqa sahifalarga havola qilish uchun ishlatiladi. Bu veb-ning eng muhim xususiyatlaridan biri.

### Rasm tegi

<img> tegi - rasmlarni ko'rsatish uchun. Bu o'z-o'zini yopadigan teg.

## Atributlar nima?

Atributlar tegga qo'shimcha ma'lumot beradi. Ular ochilish tegi ichida yoziladi va qiymat oladi.

Sintaksis: <teg atribut="qiymat">

### Eng ko'p ishlatiladigan atributlar:

- id - elementga noyob identifikator beradi (sahifada takrorlanmasligi kerak)
- class - elementlarni guruhlash uchun (CSS da ishlatiladi)
- style - inline CSS stillari
- title - sichqoncha ustiga kelganda ko'rinadigan maslahat
- src - rasm yoki video manba yo'li
- href - havola manzili
- alt - rasm yuklanmaganda ko'rinadigan matn
- width/height - o'lchamlar

## Boolean atributlar

Ba'zi atributlar qiymat olmaydi, faqat mavjudligi muhim:
- disabled - elementni o'chiradi
- required - to'ldirish majburiy
- readonly - faqat o'qish uchun`,
    codeExample: `<!-- Sarlavhalar -->
<h1>Asosiy sarlavha - sahifada 1 ta</h1>
<h2>Ikkinchi darajali sarlavha</h2>
<h3>Uchinchi darajali sarlavha</h3>

<!-- Matn elementlari -->
<p>Bu oddiy paragraf matni. <strong>Bu muhim matn</strong> va <em>bu ta'kidlangan</em>.</p>

<p>Birinchi qator<br>Ikkinchi qator</p>

<hr>

<!-- Havola - yangi tabda ochiladi -->
<a href="https://google.com" target="_blank" title="Google saytiga o'tish">
    Google saytiga o'tish
</a>

<!-- Rasm -->
<img 
    src="rasm.jpg" 
    alt="Rasmning tavsifi - SEO uchun muhim" 
    width="300"
    height="200"
>

<!-- ID va Class ishlatish -->
<div id="header" class="container main-header">
    <h1 class="title">Sayt nomi</h1>
</div>

<!-- Inline style (yaxshi emas, lekin ishlaydi) -->
<p style="color: blue; font-size: 18px;">Ko'k rangdagi matn</p>`,
    assignment: {
      title: "Turli teglar va atributlardan foydalaning",
      description: "Shaxsiy portfolio sahifa yarating: 1) h1 da ismingiz (id='name'), 2) Rasmingiz yoki placeholder rasm (alt bilan), 3) O'zingiz haqida 2 ta paragraf (class='about'), 4) 3 ta havola - ijtimoiy tarmoqlaringizga (target='_blank'), 5) hr bilan ajratilgan footer bo'limi.",
      hint: "Har bir img tegida alt atributi bo'lishi kerak. Havolalar uchun href='https://...' formatidan foydalaning. target='_blank' havolani yangi tabda ochadi."
    }
  },
  {
    id: 3,
    title: "HTML ro'yxatlar va jadvallar",
    description: "Tartibli va tartibsiz ro'yxatlar, jadval yaratish usullari",
    duration: "35 daqiqa",
    content: `## Ro'yxatlar (Lists)

Ro'yxatlar ma'lumotlarni tartibli ko'rsatish uchun ishlatiladi. HTML da 3 xil ro'yxat bor.

### Tartibsiz ro'yxat (Unordered List)

<ul> tegi - nuqtalar bilan belgilangan ro'yxat. Tartib muhim bo'lmagan hollarda ishlatiladi.

Ishlatish holatlari:
- Menyular
- Xususiyatlar ro'yxati
- Afzalliklar

### Tartibli ro'yxat (Ordered List)

<ol> tegi - raqamlar yoki harflar bilan belgilangan ro'yxat. Ketma-ketlik muhim bo'lganda ishlatiladi.

Ishlatish holatlari:
- Qadamlar, yo'riqnomalar
- Reyting, top ro'yxatlar
- Retseptlar

### Ta'rifli ro'yxat (Description List)

<dl> tegi - atama va uning ta'rifi uchun. Lug'at yoki FAQ uchun ideal.

## Jadvallar (Tables)

Jadvallar ma'lumotlarni qator va ustunlarda ko'rsatish uchun ishlatiladi.

### Jadval teglari:

- <table> - jadvalni boshlash
- <thead> - jadval sarlavhasi qismi
- <tbody> - jadval tanasi
- <tfoot> - jadval pastki qismi
- <tr> - qator (table row)
- <th> - sarlavha katagi (table header) - avtomatik qalin
- <td> - oddiy katak (table data)

### Jadval atributlari:

- colspan - bir nechta ustunni birlashtirish
- rowspan - bir nechta qatorni birlashtirish
- border - chegara (CSS da yaxshiroq)

### Qachon jadval ishlatish kerak?

✅ To'g'ri: ma'lumotlarni ko'rsatish (hisobotlar, jadvallar, taqqoslash)
❌ Noto'g'ri: sahifa layouti uchun (flexbox/grid ishlating)

## Ichma-ich ro'yxatlar (Nested Lists)

Ro'yxatlar ichida boshqa ro'yxatlar bo'lishi mumkin. Bu ierarxik ma'lumotlar uchun foydali (masalan, fayl tuzilmasi).`,
    codeExample: `<!-- Tartibsiz ro'yxat -->
<h3>Mening sevimli taomlarim:</h3>
<ul>
    <li>Osh</li>
    <li>Lag'mon</li>
    <li>Somsa</li>
    <li>Manti</li>
</ul>

<!-- Tartibli ro'yxat - type bilan -->
<h3>Dasturlashni o'rganish bosqichlari:</h3>
<ol type="1">
    <li>HTML asoslarini o'rganing</li>
    <li>CSS bilan tanishing</li>
    <li>JavaScript o'rganing</li>
    <li>Framework tanlang</li>
</ol>

<!-- Ichma-ich ro'yxat -->
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
        </ul>
    </li>
</ul>

<!-- Ta'rifli ro'yxat -->
<dl>
    <dt>HTML</dt>
    <dd>Veb-sahifa strukturasi uchun til</dd>
    
    <dt>CSS</dt>
    <dd>Veb-sahifa dizayni uchun til</dd>
</dl>

<!-- To'liq jadval -->
<table border="1">
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
            <td colspan="2">Jami: 2 kishi</td>
            <td colspan="2">O'rtacha yosh: 24</td>
        </tr>
    </tbody>
</table>`,
    assignment: {
      title: "Ro'yxat va jadval yarating",
      description: "Shaxsiy CV sahifa yarating: 1) Tartibsiz ro'yxatda 5 ta ko'nikmangiz, 2) Tartibli ro'yxatda ta'lim bosqichlaringiz (maktab, kollej, universitet), 3) Jadvalda ish tajribangiz (kompaniya, lavozim, yillar, tavsif) - kamida 2 qator. 4) Ichma-ich ro'yxatda texnik bilimlaringiz (Frontend: HTML, CSS... Backend: ...).",
      hint: "Jadvalda thead va tbody ishlating. colspan atributi bir nechta ustunni birlashtiradi. Ichma-ich ro'yxat uchun <li> ichida yangi <ul> boshlang."
    }
  },
  {
    id: 4,
    title: "CSS bilan tanishuv",
    description: "CSS nima, uning vazifasi va HTMLga ulash usullari",
    duration: "30 daqiqa",
    content: `## CSS nima?

CSS (Cascading Style Sheets) - HTML elementlarini bezash uchun til. U ranglar, shriftlar, joylashuv, animatsiyalar va boshqalarni boshqaradi. "Cascading" so'zi stillarning ierarxik tartibda qo'llanishini bildiradi.

## CSS nimalarni boshqaradi?

- Ranglar (matn, fon, chegara)
- Shriftlar (turi, o'lchami, qalinligi)
- Joylashuv (margin, padding, position)
- O'lchamlar (width, height)
- Animatsiyalar va o'tishlar
- Responsive dizayn

## CSS qanday ulanadi?

3 xil usul bor, har birining o'z afzalliklari va kamchiliklari:

### 1. Inline CSS
style atributi orqali to'g'ridan-to'g'ri elementga yoziladi.
- ✅ Tez sinash uchun qulay
- ❌ Kodni takrorlash, qiyin boshqarish

### 2. Internal CSS
<style> tegi orqali <head> ichida yoziladi.
- ✅ Bitta sahifa uchun qulay
- ❌ Boshqa sahifalarga tarqalmaydi

### 3. External CSS (Eng yaxshi usul)
Alohida .css faylda yoziladi va <link> orqali ulanadi.
- ✅ Qayta ishlatish, toza kod
- ✅ Brauzer keshlay oladi (tezroq yuklash)
- ✅ Jamoa ishi uchun qulay

## CSS sintaksisi

CSS qoidasi 3 qismdan iborat:

selector {
    property: value;
    property2: value2;
}

- Selector - qaysi elementga stil berish
- Property - qaysi xususiyatni o'zgartirish
- Value - yangi qiymat

## CSS izohlar

/* Bu CSS izohi */
/* Bir nechta
   qatorli izoh */

## Cascading qoidalari

Bir xil elementga bir nechta stil berilsa, CSS quyidagi tartibda qaror qiladi:
1. !important (eng yuqori)
2. Inline style
3. ID selector
4. Class selector
5. Element selector
6. Inherited styles (eng past)`,
    codeExample: `/* ===== External CSS fayl (styles.css) ===== */

/* Element selector - barcha p teglarga */
p {
    color: #333;
    font-size: 16px;
    line-height: 1.6;
}

/* Class selector - .card classli elementlarga */
.card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin: 10px 0;
}

/* ID selector - #header idli elementga */
#header {
    background-color: #2196F3;
    color: white;
    padding: 20px;
    text-align: center;
}

/* Bir nechta selector */
h1, h2, h3 {
    font-family: 'Arial', sans-serif;
    color: #1a1a1a;
}

/* ===== HTML fayl ===== */
<!DOCTYPE html>
<html>
<head>
    <!-- External CSS ulash -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Internal CSS -->
    <style>
        .highlight {
            background-color: yellow;
            padding: 2px 5px;
        }
    </style>
</head>
<body>
    <div id="header">
        <h1>Sayt Sarlavhasi</h1>
    </div>
    
    <div class="card">
        <p>Bu <span class="highlight">ajratilgan</span> matn.</p>
    </div>
    
    <!-- Inline CSS (yaxshi emas) -->
    <p style="color: red; font-weight: bold;">Qizil qalin matn</p>
</body>
</html>`,
    assignment: {
      title: "CSS bilan sahifani bezang",
      description: "Oldingi darsda yaratgan CV sahifangizga external CSS qo'shing: 1) body ga fon rangi va shrift, 2) Sarlavhalarga turli ranglar, 3) Paragraflar uchun line-height va font-size, 4) Jadvalga border va padding, 5) Havolalarga rang va hover effekti. styles.css faylini yarating va HTML ga ulang.",
      hint: "External CSS uchun <link rel='stylesheet' href='styles.css'> ishlatng. Ranglar uchun hex (#ffffff) yoki rgb(255,255,255) formatini ishlating. Hover uchun: a:hover { color: red; }"
    }
  },
  {
    id: 5,
    title: "CSS selektorlar",
    description: "Element, class, ID va murakkab selektorlar",
    duration: "35 daqiqa",
    content: `## Selektor turlari

CSS selektorlar HTML elementlarni tanlash uchun ishlatiladi. To'g'ri selektor tanlash - samarali CSS yozishning kaliti.

### 1. Element selektori (Type selector)

HTML teg nomi bo'yicha tanlaydi. Barcha mos elementlarga ta'sir qiladi.

p { } - barcha paragraflar
div { } - barcha divlar
a { } - barcha havolalar

### 2. Class selektori

class atributi bo'yicha tanlaydi. Nuqta (.) bilan boshlanadi.

.card { } - class="card" elementlar
.btn { } - class="btn" elementlar

Afzalliklari:
- Bir nechta elementda ishlatilishi mumkin
- Bir elementda bir nechta class bo'lishi mumkin
- Eng ko'p ishlatiladigan selektor turi

### 3. ID selektori

id atributi bo'yicha tanlaydi. # belgisi bilan boshlanadi.

#header { } - id="header" element
#navigation { } - id="navigation" element

Muhim: ID sahifada takrorlanmasligi kerak!

### 4. Universal selektor

Barcha elementlarni tanlaydi.
* { } - hamma elementlar

### 5. Atribut selektorlari

Atribut qiymatiga qarab tanlaydi.
[type="text"] - type="text" elementlar
[href^="https"] - https bilan boshlanadigan havolalar
[class*="btn"] - classida "btn" so'zi bor elementlar

## Kombinatsiya selektorlar

### Avlod selektori (Descendant)
div p { } - div ichidagi barcha p (ichma-ich ham)

### Bevosita bola (Child)
div > p { } - faqat to'g'ridan-to'g'ri div ichidagi p

### Qo'shni (Adjacent sibling)
h2 + p { } - h2 dan keyin kelgan birinchi p

### Umumiy qo'shni (General sibling)
h2 ~ p { } - h2 dan keyin kelgan barcha p

## Pseudo-class selektorlar

Elementning maxsus holatini tanlaydi:
- :hover - sichqoncha ustida
- :active - bosilgan payt
- :focus - fokusda (input)
- :first-child - birinchi bola
- :last-child - oxirgi bola
- :nth-child(n) - n-chi bola

## Selektor prioriteti (Specificity)

Bir xil elementga bir nechta qoida mos kelsa:
1. Inline style (1000 ball)
2. ID selector (100 ball)
3. Class/attribute/pseudo-class (10 ball)
4. Element/pseudo-element (1 ball)`,
    codeExample: `/* Element selektorlari */
body {
    font-family: 'Segoe UI', Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }

/* Class selektorlari */
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
}

.btn-primary {
    background-color: #007bff;
    color: white;
}

.btn-secondary {
    background-color: #6c757d;
    color: white;
}

/* ID selektori */
#main-navigation {
    background-color: #343a40;
    padding: 15px 0;
}

/* Kombinatsiya selektorlar */
.card .title {
    font-size: 1.25rem;
    margin-bottom: 10px;
}

.nav > li {
    display: inline-block;
    margin-right: 20px;
}

/* Atribut selektori */
input[type="text"] {
    border: 1px solid #ccc;
    padding: 8px;
}

a[href^="https"] {
    color: green; /* Xavfsiz havolalar yashil */
}

/* Pseudo-class */
a:hover {
    color: #0056b3;
    text-decoration: underline;
}

.btn:active {
    transform: scale(0.98);
}

li:first-child {
    font-weight: bold;
}

li:nth-child(odd) {
    background-color: #f8f9fa;
}

/* Murakkab selektor */
.card:hover .card-title {
    color: #007bff;
}`,
    assignment: {
      title: "Selektorlar bilan amaliyot",
      description: "Sahifa yarating va quyidagi selektorlarni ishlating: 1) 3 ta turli class (.card, .highlight, .btn), 2) 2 ta ID (#header, #footer), 3) Kombinatsiya: .nav > li va .card .title, 4) Pseudo-class: :hover 3 ta elementda, :first-child, :nth-child(even), 5) Atribut selector: input[type='email']. Har bir selektor turlicha stil bersin.",
      hint: "Bir elementga bir nechta class berish: class='btn btn-primary'. Specificity: ID > class > element. nth-child(even) juft, odd toq elementlarni tanlaydi."
    }
  },
  {
    id: 6,
    title: "CSS Box Model",
    description: "Margin, padding, border va content tushunchasi",
    duration: "40 daqiqa",
    content: `## Box Model nima?

CSS Box Model - har bir HTML elementining joylashuvini tushuntiradigan konsepsiya. Har bir element to'rtburchak quti sifatida ko'riladi va bu quti 4 qatlamdan iborat:

1. **Content** - Matn, rasm va boshqa kontent joylashadigan ichki maydon
2. **Padding** - Kontent atrofidagi ichki bo'shliq (fon rangi ta'sir qiladi)
3. **Border** - Chegara (rang, qalinlik, stil bor)
4. **Margin** - Tashqi bo'shliq (boshqa elementlardan masofa, shaffof)

## Content (Kontent)

Elementning asosiy maydoni. width va height xususiyatlari bilan boshqariladi.

width - kenglik
height - balandlik
min-width, max-width - chegaralar
min-height, max-height - chegaralar

## Padding (Ichki bo'shliq)

Kontent va chegara orasidagi masofa. Fon rangi bu yerda ko'rinadi.

padding: 20px; - barcha tomondan
padding: 10px 20px; - yuqori/pastdan 10, chap/o'ngdan 20
padding: 10px 20px 15px 25px; - yuqori, o'ng, past, chap (soat yo'nalishida)
padding-top, padding-right, padding-bottom, padding-left

## Border (Chegara)

Elementning chegarasi. 3 ta xususiyat bor:
- border-width - qalinlik
- border-style - stil (solid, dashed, dotted, double, none)
- border-color - rang

Qisqa yozuv: border: 2px solid #333;

border-radius - burchaklarni yumaloqlash

## Margin (Tashqi bo'shliq)

Elementlar orasidagi masofa. Shaffof bo'ladi.

margin: auto; - gorizontal markazlashtirish
Manfiy margin ham ishlatilishi mumkin: margin-top: -20px;

Margin collapse: Vertikal marginlar birlashadi (kattasi qoladi).

## Box-sizing

Standart holatda width va height faqat content o'lchamini belgilaydi. Padding va border qo'shiladi.

box-sizing: content-box; - standart
box-sizing: border-box; - padding va border width ichiga kiradi (tavsiya etiladi)

Global qo'llash:
* { box-sizing: border-box; }`,
    codeExample: `/* Box-sizing global */
*, *::before, *::after {
    box-sizing: border-box;
}

/* Asosiy element */
.card {
    /* Content o'lchami */
    width: 350px;
    height: auto; /* Kontentga qarab o'sadi */
    min-height: 200px;
    
    /* Ichki bo'shliq */
    padding: 25px;
    padding-bottom: 30px; /* Pastdan ko'proq */
    
    /* Chegara */
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    border-top: 4px solid #007bff; /* Yuqori chegara boshqacha */
    
    /* Tashqi bo'shliq */
    margin: 20px;
    margin-bottom: 30px;
    
    /* Markazlashtirish */
    /* margin: 20px auto; */
}

/* Turli chegara stillari */
.border-examples {
    border: 3px solid #333;      /* Oddiy chiziq */
    border: 3px dashed #333;     /* Punktir */
    border: 3px dotted #333;     /* Nuqtali */
    border: 3px double #333;     /* Ikki chiziq */
}

/* Yumaloq burchaklar */
.rounded-small { border-radius: 5px; }
.rounded-medium { border-radius: 10px; }
.rounded-large { border-radius: 20px; }
.circle { border-radius: 50%; } /* To'liq doira */

/* Har bir burchak alohida */
.custom-radius {
    border-top-left-radius: 20px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 0;
}

/* Soya */
.shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.shadow-hover:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
    transition: all 0.3s ease;
}

/* Outline (border ga o'xshash, lekin layout ga ta'sir qilmaydi) */
.focus-outline:focus {
    outline: 3px solid #007bff;
    outline-offset: 2px;
}`,
    assignment: {
      title: "Box Model bilan kartochkalar",
      description: "3 ta mahsulot kartochkasi yarating: 1) Har birida width: 300px, padding: 20px, border: 1px solid, margin: 15px, 2) Rasm, sarlavha, tavsif va narx bo'lsin, 3) Tugmaga padding va border-radius qo'shing, 4) Kartochkaga box-shadow va hover effekti, 5) Turli border-radius qiymatlari sinab ko'ring. box-sizing: border-box global ishlatilsin.",
      hint: "box-sizing: border-box; * selektorga qo'ying. box-shadow: x y blur color formatida. rgba(0,0,0,0.1) yarim shaffof qora."
    }
  },
  {
    id: 7,
    title: "CSS Flexbox asoslari",
    description: "Moslashuvchan bir o'lchovli layout yaratish",
    duration: "45 daqiqa",
    content: `## Flexbox nima?

Flexbox (Flexible Box) - elementlarni gorizontal yoki vertikal yo'nalishda moslashuvchan tarzda joylashtirishning zamonaviy usuli. U 2009 yilda kiritilgan va hozir barcha brauzerlarda qo'llab-quvvatlanadi.

## Asosiy tushunchalar

- Flex Container - display: flex; berilgan ota element
- Flex Items - container ichidagi bevosita bola elementlar
- Main Axis - asosiy o'q (default: gorizontal)
- Cross Axis - kesishuvchi o'q (default: vertikal)

## Container xususiyatlari

### display: flex;
Flexbox ni yoqadi. Container inline-flex ham bo'lishi mumkin.

### flex-direction
Asosiy o'q yo'nalishini belgilaydi:
- row (default) - chapdan o'ngga
- row-reverse - o'ngdan chapga
- column - yuqoridan pastga
- column-reverse - pastdan yuqoriga

### justify-content
Asosiy o'q bo'ylab joylashuv:
- flex-start - boshida
- flex-end - oxirida
- center - markazda
- space-between - orasida teng bo'shliq
- space-around - atrofida teng bo'shliq
- space-evenly - butunlay teng bo'shliq

### align-items
Kesishuvchi o'q bo'ylab joylashuv:
- stretch (default) - cho'ziladi
- flex-start - boshida
- flex-end - oxirida
- center - markazda
- baseline - matn chizig'i bo'yicha

### flex-wrap
Elementlar sig'masa:
- nowrap (default) - bir qatorda qoladi
- wrap - keyingi qatorga o'tadi
- wrap-reverse - teskari wrap

### gap
Elementlar orasidagi bo'shliq:
- gap: 20px; - barcha yo'nalishda
- row-gap: 20px; - qatorlar orasida
- column-gap: 10px; - ustunlar orasida

## Item xususiyatlari

### flex-grow
Qo'shimcha joy bo'lsa qancha o'sish:
- 0 - o'smaydi
- 1 - teng o'sadi
- 2 - 2 barobar ko'p o'sadi

### flex-shrink
Joy yetishmasa qancha kichrayish:
- 1 (default) - kichrayadi
- 0 - kichraymaydi

### flex-basis
Boshlang'ich o'lcham (width o'rniga):
- auto - content ga qarab
- 200px - aniq o'lcham
- 25% - foiz

### flex (shorthand)
flex: grow shrink basis;
flex: 1; = flex: 1 1 0%;

### align-self
Bitta elementning alohida joylashuvi (align-items ni override qiladi)

### order
Elementlar tartibini o'zgartirish (default: 0)`,
    codeExample: `/* Asosiy Flex Container */
.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px;
}

/* Responsive navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #333;
}

.nav-logo {
    font-size: 1.5rem;
    color: white;
}

.nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
}

.nav-links a {
    color: white;
    text-decoration: none;
}

/* Kartochkalar grid */
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.card {
    flex: 0 1 300px; /* o'smaydi, kichrayadi, 300px dan boshlaydi */
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
}

/* Teng bo'lingan ustunlar */
.equal-columns {
    display: flex;
    gap: 20px;
}

.equal-columns > * {
    flex: 1; /* Hammasi teng o'sadi */
}

/* Sidebar layout */
.page-layout {
    display: flex;
    min-height: 100vh;
}

.sidebar {
    flex: 0 0 250px; /* O'zgarmas 250px */
    background-color: #f5f5f5;
}

.main-content {
    flex: 1; /* Qolgan joyni egallaydi */
    padding: 20px;
}

/* Vertikal markazlashtirish */
.center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
}

/* Footer elementlarni pastga surish */
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
    assignment: {
      title: "Flexbox bilan to'liq sahifa",
      description: "Flexbox yordamida sahifa layouti yarating: 1) Navbar: chapda logo, o'rtada 4 ta havola, o'ngda 'Kirish' tugmasi (space-between), 2) Hero section: markazda sarlavha va tugma (center, column), 3) 4 ta xususiyat kartochkasi qatori (flex-wrap), 4) Footer: 3 ta ustun (flex: 1). Barcha bo'shliqlar gap bilan.",
      hint: "Navbar: justify-content: space-between. Hero: flex-direction: column va align-items: center. Kartochkalar uchun flex-wrap: wrap. Footer ustunlari: flex: 1."
    }
  },
  {
    id: 8,
    title: "CSS Grid asoslari",
    description: "Ikki o'lchovli murakkab layoutlar uchun Grid",
    duration: "45 daqiqa",
    content: `## CSS Grid nima?

CSS Grid - ikki o'lchovli (qator VA ustunlar) layout yaratish tizimi. Flexbox bir o'lchovda ishlasa, Grid bir vaqtda ikkala o'lchamni boshqaradi. Murakkab sahifa strukturalari uchun ideal.

## Flexbox vs Grid

Flexbox:
- Bir yo'nalishda (qator YOKI ustun)
- Kontent asosida
- Komponentlar ichida

Grid:
- Ikki yo'nalishda (qator VA ustun)
- Layout asosida
- Sahifa strukturasi uchun

## Asosiy tushunchalar

- Grid Container - display: grid; berilgan element
- Grid Items - container ichidagi bevosita bolalar
- Grid Lines - chiziqlar (1, 2, 3...)
- Grid Tracks - qator yoki ustun
- Grid Cell - bitta katak
- Grid Area - bir nechta katakdan iborat maydon

## Container xususiyatlari

### grid-template-columns
Ustunlarni belgilash:
- grid-template-columns: 200px 200px 200px; - 3 ta 200px ustun
- grid-template-columns: 1fr 1fr 1fr; - 3 ta teng ustun
- grid-template-columns: repeat(3, 1fr); - yuqoridagi bilan bir xil
- grid-template-columns: 1fr 2fr 1fr; - o'rtadagi 2 barobar keng
- grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); - responsive!

### grid-template-rows
Qatorlarni belgilash (ustunlar kabi)

### gap (yoki grid-gap)
Bo'shliqlar:
- gap: 20px;
- row-gap: 20px;
- column-gap: 10px;

### grid-template-areas
Nomlangan maydonlar bilan layout:

grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";

## fr birligi

fr (fraction) - mavjud joyning bir qismi.
1fr 2fr = 1/3 va 2/3
1fr 1fr 1fr = har biri 1/3

## Item xususiyatlari

### grid-column va grid-row
Element joylashuvi:
- grid-column: 1 / 3; - 1-chi chiziqdan 3-chigacha
- grid-column: span 2; - 2 ta ustun egallaydi
- grid-row: 1 / 4; - 1-3 qatorlar

### grid-area
Nomlangan maydonni egallash:
- grid-area: header;

### justify-self va align-self
Bitta elementning joylashuvi katak ichida

## Implicit Grid

Belgilanganidan ko'p element bo'lsa, Grid avtomatik qator/ustun qo'shadi:
- grid-auto-rows: 200px;
- grid-auto-columns: 1fr;`,
    codeExample: `/* Asosiy Grid */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 20px;
}

/* 12 ustunli tizim */
.twelve-column {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 15px;
}

.col-4 { grid-column: span 4; }
.col-6 { grid-column: span 6; }
.col-8 { grid-column: span 8; }
.col-12 { grid-column: span 12; }

/* Responsive kartochkalar */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

/* Sahifa layouti - areas bilan */
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

.header { grid-area: header; background: #333; }
.sidebar { grid-area: sidebar; background: #f5f5f5; }
.main { grid-area: main; padding: 20px; }
.footer { grid-area: footer; background: #333; }

/* Galereya - turli o'lchamli elementlar */
.gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 200px);
    gap: 10px;
}

.gallery-item:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
}

/* Dashboard layout */
.dashboard {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(150px, auto);
    gap: 20px;
}

.widget-large {
    grid-column: span 2;
    grid-row: span 2;
}

.widget-wide {
    grid-column: span 2;
}

/* Markazlashtirish */
.center-grid {
    display: grid;
    place-items: center; /* justify + align */
    min-height: 100vh;
}`,
    assignment: {
      title: "Grid bilan dashboard",
      description: "Admin dashboard yarating: 1) Header to'liq kenglikda (grid-template-areas), 2) Chapda sidebar (200px), o'ngda main content, 3) Main ichida 4 ta statistika kartochkasi (2x2 grid), 4) Katta grafik maydoni (span 2), 5) Responsive: kichik ekranda 1 ustun bo'lsin. Barcha layout faqat Grid bilan.",
      hint: "grid-template-areas ishlatib ko'ring. auto-fit, minmax() responsive qiladi. Media query: @media (max-width: 768px) { grid-template-columns: 1fr; }"
    }
  },
  {
    id: 9,
    title: "Responsive dizayn",
    description: "Media queries, mobile-first va moslashuvchan dizayn",
    duration: "40 daqiqa",
    content: `## Responsive dizayn nima?

Responsive (moslashuvchan) dizayn - sahifaning turli ekran o'lchamlarida (telefon, planshet, laptop, katta monitor) yaxshi ko'rinishini ta'minlash usuli. Bugungi kunda trafikning 60%+ mobil qurilmalardan keladi.

## Media Queries

Media queries CSS da shartli stillar yozish imkonini beradi.

Sintaksis:
@media (shart) {
    /* shartga mos stilllar */
}

### Breakpoints (Muhim nuqtalar)

Umumiy qabul qilingan:
- Mobile: 0-480px
- Mobile landscape: 481-767px
- Tablet: 768-1023px
- Laptop: 1024-1279px
- Desktop: 1280-1919px
- Large: 1920px+

Amalda 3-4 ta breakpoint yetarli.

## Mobile-First yondashuvi

Birinchi mobil uchun yozib, keyin katta ekranlar uchun qo'shamiz.

/* Mobil uchun (default) */
.container { width: 100%; }

/* Tablet va yuqori */
@media (min-width: 768px) {
    .container { max-width: 720px; }
}

/* Desktop */
@media (min-width: 1024px) {
    .container { max-width: 1200px; }
}

## Desktop-First yondashuvi

Birinchi desktop uchun, keyin kichraytirish.

/* Desktop uchun */
.container { max-width: 1200px; }

@media (max-width: 1023px) {
    .container { max-width: 720px; }
}

@media (max-width: 767px) {
    .container { width: 100%; }
}

Mobile-first tavsiya etiladi chunki:
- Mobil ustuvorlik
- Kamroq CSS yozish
- Tezroq mobil yuklash

## Responsive birliklar

### Nisbiy birliklar:
- % - ota elementga nisbatan
- vw - viewport kengligi (1vw = 1%)
- vh - viewport balandligi
- rem - root font-size ga nisbatan
- em - joriy font-size ga nisbatan

### Foydali funksiyalar:
- calc() - hisoblash: calc(100% - 250px)
- min() - eng kichigini olish: min(100%, 1200px)
- max() - eng kattasini olish
- clamp() - min, ideal, max: clamp(1rem, 5vw, 3rem)

## Responsive rasmlar

img {
    max-width: 100%;
    height: auto;
}

## Viewport meta teg

HTML da bo'lishi shart:
<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
    codeExample: `/* ===== Mobile-First Responsive CSS ===== */

/* Global */
* {
    box-sizing: border-box;
}

body {
    font-size: 16px;
    line-height: 1.6;
}

img {
    max-width: 100%;
    height: auto;
}

/* Container */
.container {
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
}

/* Navbar - Mobil */
.navbar {
    display: flex;
    flex-direction: column;
    padding: 15px;
}

.nav-toggle {
    display: block; /* Hamburger menu */
}

.nav-links {
    display: none; /* Yashirin */
    flex-direction: column;
}

.nav-links.active {
    display: flex;
}

/* Grid - Mobil */
.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

/* Typography - Responsive */
h1 {
    font-size: clamp(1.75rem, 5vw, 3rem);
}

h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
}

/* ===== Tablet (768px+) ===== */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
    
    .navbar {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    
    .nav-toggle {
        display: none; /* Hamburger yashirish */
    }
    
    .nav-links {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* ===== Desktop (1024px+) ===== */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
    
    /* Sidebar layout */
    .page-layout {
        display: grid;
        grid-template-columns: 250px 1fr;
    }
}

/* ===== Large screens (1400px+) ===== */
@media (min-width: 1400px) {
    .container {
        max-width: 1320px;
    }
    
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}`,
    assignment: {
      title: "To'liq responsive sahifa",
      description: "Mobile-first yondashuvi bilan sahifa yarating: 1) Mobilda: hamburger menu, 1 ustunli kontent, 2) Tabletda (768px+): oddiy navbar, 2 ustun, 3) Desktopda (1024px+): 3 ustun + sidebar, 4) clamp() bilan responsive tipografiya, 5) Rasmlar max-width: 100%. 3 ta media query ishlatilsin.",
      hint: "min-width ishlatib mobile-first yozing. clamp(min, ideal, max) - masalan font-size: clamp(1rem, 3vw, 2rem). Navbar uchun JavaScript hamburger toggle kerak bo'ladi."
    }
  },
  {
    id: 10,
    title: "JavaScript asoslari",
    description: "JavaScript sintaksisi, o'zgaruvchilar va ma'lumot turlari",
    duration: "40 daqiqa",
    content: `## JavaScript nima?

JavaScript - veb-sahifalarni interaktiv qiluvchi dasturlash tili. HTML struktura, CSS dizayn bersa, JavaScript xatti-harakatni boshqaradi.

JavaScript qila oladi:
- Foydalanuvchi harakatlariga javob berish (click, input)
- DOM ni dinamik o'zgartirish
- Serverdan ma'lumot olish (API)
- Animatsiyalar yaratish
- Forma validatsiyasi
- va yana ko'p narsa...

## JavaScript qo'shish

### 1. Internal (HTML ichida)
<script>
    console.log("Salom!");
</script>

### 2. External (alohida fayl)
<script src="script.js"></script>

Tavsiya: script tegini </body> oldidan qo'yish yoki defer atributini ishlatish.

## O'zgaruvchilar (Variables)

O'zgaruvchilar ma'lumotlarni saqlash uchun ishlatiladi.

### let - o'zgartirish mumkin
let yosh = 25;
yosh = 26; // OK

### const - o'zgartirish mumkin EMAS
const PI = 3.14159;
// PI = 3; // XATO!

### var - eski usul (ishlatmang)

Qoida: Doimiy const, o'zgaradigan let ishlatilsin.

## Ma'lumot turlari (Data Types)

### Primitiv turlar:

1. String (matn)
let ism = "Ali";
let gap = 'Salom dunyo';
let shablon = \`Salom \${ism}\`; // Template literal

2. Number (son)
let butun = 42;
let kasr = 3.14;
let manfiy = -10;

3. Boolean (mantiqiy)
let togri = true;
let notogri = false;

4. undefined - qiymat berilmagan
let nomalum;

5. null - ataylab bo'sh
let bosh = null;

6. BigInt - juda katta sonlar
let katta = 9007199254740991n;

7. Symbol - noyob identifikator

### Murakkab turlar:
- Object (obyekt)
- Array (massiv)
- Function (funksiya)

## Operatorlar

### Arifmetik:
+ - * / % **

### Taqqoslash:
== (qiymat), === (qiymat va tur)
!= !==
< > <= >=

### Mantiqiy:
&& (VA), || (YOKI), ! (EMAS)

### Qisqa yozuv:
+= -= *= /=
++ --

## typeof operatori

Turning qiymatini aniqlash:
typeof "salom" // "string"
typeof 42 // "number"
typeof true // "boolean"`,
    codeExample: `// ===== O'zgaruvchilar =====

// const - o'zgarmaydi
const SITE_NAME = "front-end.uz";
const MAX_USERS = 100;

// let - o'zgaradi
let currentUser = "Ali";
let score = 0;

// String
let firstName = "Jasur";
let lastName = 'Karimov';
let fullName = \`\${firstName} \${lastName}\`; // "Jasur Karimov"

// Number
let age = 25;
let price = 99.99;
let discount = 0.15; // 15%
let finalPrice = price * (1 - discount); // 84.99

// Boolean
let isLoggedIn = true;
let hasPermission = false;
let isAdult = age >= 18; // true

// undefined va null
let notDefined; // undefined
let emptyValue = null;

// ===== Operatorlar =====

// Arifmetik
let sum = 10 + 5; // 15
let diff = 10 - 5; // 5
let product = 10 * 5; // 50
let quotient = 10 / 5; // 2
let remainder = 10 % 3; // 1 (qoldiq)
let power = 2 ** 3; // 8 (daraja)

// Qisqa yozuv
let count = 0;
count++; // count = count + 1
count += 5; // count = count + 5

// Taqqoslash
console.log(5 == "5"); // true (faqat qiymat)
console.log(5 === "5"); // false (qiymat va tur)
console.log(5 !== "5"); // true

// Mantiqiy
let canVote = age >= 18 && isLoggedIn; // ikkalasi ham true bo'lsa
let hasAccess = isAdult || hasPermission; // biri true bo'lsa
let isBlocked = !hasPermission; // teskarisi

// ===== Console =====
console.log("Oddiy xabar");
console.warn("Ogohlantirish");
console.error("Xatolik");
console.table({ ism: firstName, yosh: age });

// ===== typeof =====
console.log(typeof firstName); // "string"
console.log(typeof age); // "number"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof notDefined); // "undefined"
console.log(typeof null); // "object" (JavaScript xatosi)`,
    assignment: {
      title: "JavaScript asoslari amaliyot",
      description: "JavaScript fayl yarating va quyidagilarni bajaring: 1) O'zingiz haqida 5 ta const o'zgaruvchi (ism, familiya, yosh, kasb, shahar), 2) Template literal bilan to'liq taqdimot matni, 3) Yosh asosida isAdult o'zgaruvchi (boolean), 4) 2 ta son va ularning yig'indisi, ayirmasi, ko'paytmasi, 5) typeof bilan har bir o'zgaruvchi turini console.log qiling.",
      hint: "Template literal: `Mening ismim ${ism}`. Boolean: const isAdult = yosh >= 18. Barcha natijalarni console.log() bilan ko'ring."
    }
  },
  {
    id: 11,
    title: "JavaScript funksiyalar va massivlar",
    description: "Funksiya yaratish, massivlar bilan ishlash",
    duration: "45 daqiqa",
    content: `## Funksiyalar

Funksiya - qayta ishlatiladigan kod bloki. DRY (Don't Repeat Yourself) tamoyilining asosi.

### Funksiya e'lon qilish (Declaration)

function functionName(parameters) {
    // kod
    return result;
}

### Funksiya ifodasi (Expression)

const myFunc = function(params) {
    return result;
};

### Arrow Function (ES6)

const myFunc = (params) => {
    return result;
};

// Qisqa yozuv (1 ta ifoda)
const double = (x) => x * 2;
const add = (a, b) => a + b;

### Parametrlar

- Default qiymat: function greet(name = "Mehmon")
- Rest parametr: function sum(...numbers)

### Return

Funksiya return bilan qiymat qaytaradi. Return dan keyin kod ishlamaydi.

## Massivlar (Arrays)

Massiv - tartiblangan ma'lumotlar to'plami.

### Yaratish
const arr = [1, 2, 3, 4, 5];
const mixed = [1, "ikki", true, null];
const empty = [];

### Murojaat
arr[0] // 1 (birinchi element)
arr[arr.length - 1] // oxirgi element

### Asosiy metodlar

Qo'shish/O'chirish:
- push() - oxiriga qo'shish
- pop() - oxiridan o'chirish
- unshift() - boshiga qo'shish
- shift() - boshidan o'chirish
- splice() - istalgan joydan

Qidirish:
- indexOf() - indeksni topish
- includes() - mavjudligini tekshirish
- find() - shartga mos elementni topish
- findIndex() - indeksini topish

Aylanish:
- forEach() - har bir element uchun
- map() - yangi massiv yaratish
- filter() - filtrlash
- reduce() - bitta qiymatga kamaytirish

Boshqa:
- sort() - tartiblash
- reverse() - teskari
- join() - stringga aylantirish
- slice() - qismini olish
- concat() - birlashtirish

## Spread operatori (...)

Massivni "yoyish":
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

## Destructuring

const [first, second] = [1, 2];
const [a, , c] = [1, 2, 3]; // a=1, c=3`,
    codeExample: `// ===== Funksiyalar =====

// Oddiy funksiya
function greet(name) {
    return \`Salom, \${name}!\`;
}
console.log(greet("Ali")); // "Salom, Ali!"

// Default parametr
function sayHello(name = "Mehmon") {
    return \`Xush kelibsiz, \${name}!\`;
}
console.log(sayHello()); // "Xush kelibsiz, Mehmon!"

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // 15

// Rest parametr
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log(sum(1, 2, 3, 4, 5)); // 15

// ===== Massivlar =====

const fruits = ["olma", "banan", "uzum", "anor"];

// Asosiy operatsiyalar
console.log(fruits[0]); // "olma"
console.log(fruits.length); // 4

fruits.push("gilos"); // oxiriga qo'shish
fruits.pop(); // oxiridan o'chirish
fruits.unshift("nok"); // boshiga qo'shish

// Qidirish
console.log(fruits.includes("banan")); // true
console.log(fruits.indexOf("uzum")); // 2

// ===== Massiv metodlari =====

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach - har biri uchun
numbers.forEach((num, index) => {
    console.log(\`\${index}: \${num}\`);
});

// map - yangi massiv
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// filter - filtrlash
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// find - birinchi mos
const firstBig = numbers.find(num => num > 5);
console.log(firstBig); // 6

// reduce - yig'indi
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total); // 55

// sort - tartiblash
const words = ["banan", "olma", "anor"];
words.sort(); // ["anor", "banan", "olma"]

// Raqamlarni tartiblash
numbers.sort((a, b) => a - b); // o'sish
numbers.sort((a, b) => b - a); // kamayish

// ===== Spread va Destructuring =====

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1,2,3,4,5,6]

const [first, second, ...rest] = combined;
console.log(first); // 1
console.log(rest); // [3, 4, 5, 6]`,
    assignment: {
      title: "Funksiyalar va massivlar amaliyot",
      description: "Quyidagilarni yarating: 1) calculateAverage funksiyasi - sonlar massivi olib o'rtachasini qaytaradi, 2) filterByLength funksiyasi - so'zlar massivi va uzunlik olib, shu uzunlikdagi so'zlarni qaytaradi, 3) Talabalar massivi (ism, yosh, ball) va ularning: a) eng yuqori ball, b) o'rtacha yosh, c) 18 dan kattalar ro'yxati. Arrow function va massiv metodlari ishlatilsin.",
      hint: "O'rtacha: reduce bilan yig'ib, length ga bo'ling. filterByLength: filter(word => word.length === len). Eng yuqori: Math.max(...balls) yoki reduce."
    }
  },
  {
    id: 12,
    title: "DOM bilan ishlash",
    description: "HTML elementlarini JavaScript orqali boshqarish",
    duration: "45 daqiqa",
    content: `## DOM nima?

DOM (Document Object Model) - HTML hujjatning JavaScript uchun ko'rinishi. Brauzer HTML ni o'qib, daraxt strukturasidagi obyektlar to'plamini yaratadi. JavaScript bu obyektlarni o'zgartirishi mumkin.

document obyekti - butun sahifa
document.documentElement - <html>
document.body - <body>
document.head - <head>

## Elementlarni tanlash

### ID bo'yicha (eng tez)
const element = document.getElementById("myId");

### Class bo'yicha
const elements = document.getElementsByClassName("myClass");
// HTMLCollection qaytaradi

### Tag bo'yicha
const paragraphs = document.getElementsByTagName("p");

### CSS selektor bo'yicha (zamonaviy)
const one = document.querySelector(".card"); // birinchisi
const all = document.querySelectorAll(".card"); // hammasi
// NodeList qaytaradi

## Element xususiyatlari

### Kontent
element.innerHTML - HTML kontent
element.textContent - faqat matn
element.innerText - ko'rinadigan matn

### Atributlar
element.getAttribute("href")
element.setAttribute("href", "https://...")
element.removeAttribute("disabled")
element.hasAttribute("checked")

// data-* atributlar
element.dataset.userId // data-user-id

### Class bilan ishlash
element.classList.add("active")
element.classList.remove("hidden")
element.classList.toggle("open")
element.classList.contains("selected")
element.classList.replace("old", "new")

### Stil
element.style.color = "red"
element.style.backgroundColor = "blue"
element.style.display = "none"

// Computed style (haqiqiy)
getComputedStyle(element).fontSize

## Element yaratish va qo'shish

### Yaratish
const div = document.createElement("div");
div.textContent = "Yangi element";
div.className = "card";

### Qo'shish
parent.appendChild(child) // oxiriga
parent.insertBefore(new, reference) // oldiga
parent.prepend(child) // boshiga
parent.append(child1, child2) // oxiriga (bir nechta)

### insertAdjacentHTML
element.insertAdjacentHTML("beforebegin", html) // oldidan
element.insertAdjacentHTML("afterbegin", html) // ichida boshida
element.insertAdjacentHTML("beforeend", html) // ichida oxirida
element.insertAdjacentHTML("afterend", html) // keyinida

### O'chirish
element.remove()
parent.removeChild(child)

## Navigatsiya

element.parentElement - ota
element.children - bolalar
element.firstElementChild - birinchi bola
element.lastElementChild - oxirgi bola
element.nextElementSibling - keyingi qo'shni
element.previousElementSibling - oldingi qo'shni`,
    codeExample: `// ===== Elementlarni tanlash =====

// ID bo'yicha
const header = document.getElementById("header");

// Query selector
const firstCard = document.querySelector(".card");
const allCards = document.querySelectorAll(".card");
const submitBtn = document.querySelector("button[type='submit']");

// ===== Kontent o'zgartirish =====

// Matn
header.textContent = "Yangi sarlavha";

// HTML
const container = document.querySelector(".container");
container.innerHTML = "<h2>Yangi kontent</h2><p>Paragraf</p>";

// ===== Atributlar =====

const link = document.querySelector("a");
link.setAttribute("href", "https://google.com");
link.setAttribute("target", "_blank");

const img = document.querySelector("img");
console.log(img.getAttribute("src"));
img.alt = "Yangi tavsif";

// data-* atributlar
const card = document.querySelector(".card");
console.log(card.dataset.productId); // data-product-id
card.dataset.category = "electronics";

// ===== Class bilan ishlash =====

const button = document.querySelector(".btn");

button.classList.add("active", "primary");
button.classList.remove("disabled");
button.classList.toggle("loading"); // bor-yo'q

if (button.classList.contains("active")) {
    console.log("Tugma faol");
}

// ===== Stil o'zgartirish =====

const box = document.querySelector(".box");
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "#3498db";
box.style.borderRadius = "10px";
box.style.transition = "all 0.3s ease";

// ===== Element yaratish =====

// Yangi kartochka
const newCard = document.createElement("div");
newCard.className = "card";
newCard.innerHTML = \`
    <h3>Yangi mahsulot</h3>
    <p>Mahsulot tavsifi</p>
    <button class="btn">Sotib olish</button>
\`;

// Qo'shish
container.appendChild(newCard);

// insertAdjacentHTML bilan
container.insertAdjacentHTML("beforeend", \`
    <div class="card">
        <h3>Yana bir mahsulot</h3>
    </div>
\`);

// ===== O'chirish =====

const oldCard = document.querySelector(".old-card");
oldCard.remove();

// ===== Navigatsiya =====

const list = document.querySelector("ul");
const firstItem = list.firstElementChild;
const lastItem = list.lastElementChild;
const secondItem = firstItem.nextElementSibling;
const parent = list.parentElement;`,
    assignment: {
      title: "DOM manipulyatsiya",
      description: "Interaktiv todo ro'yxat yarating (faqat DOM, hali event yo'q): 1) HTML da input va tugma, bo'sh ul ro'yxat, 2) JavaScript bilan 3 ta vazifa elementi yarating va ro'yxatga qo'shing, 3) Har bir vazifada: matn, 'Bajarildi' tugmasi, 'O'chirish' tugmasi, 4) classList bilan completed class qo'shish/olish imkoniyati. createElement va appendChild ishlatilsin.",
      hint: "const li = document.createElement('li'); li.innerHTML = `<span>${text}</span><button>...</button>`; ul.appendChild(li); Tugmalar keyingi darsda ishlaydi."
    }
  },
  {
    id: 13,
    title: "JavaScript hodisalar (Events)",
    description: "Click, input va boshqa hodisalarni boshqarish",
    duration: "45 daqiqa",
    content: `## Hodisalar nima?

Hodisalar (Events) - brauzerda sodir bo'ladigan voqealar: sichqoncha bosish, klaviatura bosish, forma yuborish, sahifa yuklash va h.k. JavaScript bu hodisalarga "quloq soladi" va javob beradi.

## Hodisa turlari

### Sichqoncha hodisalari:
- click - bosish
- dblclick - ikki marta bosish
- mousedown/mouseup - bosish/qo'yish
- mouseover/mouseout - ustiga/tashqarisiga
- mousemove - harakatlanish
- contextmenu - o'ng tugma

### Klaviatura:
- keydown - tugma bosildi
- keyup - tugma qo'yildi
- keypress - belgi kiritildi (deprecated)

### Forma:
- submit - forma yuborildi
- change - qiymat o'zgardi (blur da)
- input - har bir kiritishda
- focus - fokus oldi
- blur - fokusdan chiqdi

### Hujjat/Oyna:
- DOMContentLoaded - HTML yuklandi
- load - hammasi yuklandi
- resize - o'lcham o'zgardi
- scroll - scroll qilindi

## Event Listener qo'shish

### addEventListener (tavsiya etiladi)
element.addEventListener("event", handler);
element.addEventListener("click", function() {
    console.log("Bosildi!");
});

### on... xususiyati (eski usul)
element.onclick = function() {};

### HTML atributi (yaxshi emas)
<button onclick="handleClick()">

## Event obyekti

Handler funksiyaga event obyekti avtomatik uzatiladi:

element.addEventListener("click", function(event) {
    event.target // bosilgan element
    event.currentTarget // listener bog'langan element
    event.type // hodisa turi
    event.preventDefault() // standart harakatni to'xtatish
    event.stopPropagation() // tarqalishni to'xtatish
});

### Klaviatura event:
event.key // "Enter", "a", "Escape"
event.code // "KeyA", "Enter"
event.ctrlKey, event.shiftKey, event.altKey

### Sichqoncha event:
event.clientX, event.clientY // koordinatalar
event.button // qaysi tugma

## Event Bubbling va Capturing

Hodisa ichki elementdan tashqariga "ko'pirib" chiqadi (bubbling).

<div> <- 3-chi
    <ul> <- 2-chi
        <li> <- 1-chi (bosish)

### Bubbling to'xtatish
event.stopPropagation()

### Capturing (teskari)
element.addEventListener("click", handler, true);

## Event Delegation

Ko'p elementga emas, ota elementga bitta listener qo'yish:

ul.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        // li bosildi
    }
});`,
    codeExample: `// ===== Oddiy click =====

const button = document.querySelector("#myButton");

button.addEventListener("click", function() {
    console.log("Tugma bosildi!");
});

// Arrow function bilan
button.addEventListener("click", () => {
    alert("Salom!");
});

// ===== Event obyekti =====

button.addEventListener("click", (event) => {
    console.log("Bosilgan element:", event.target);
    console.log("Hodisa turi:", event.type);
    console.log("Koordinatalar:", event.clientX, event.clientY);
});

// ===== Input hodisasi =====

const searchInput = document.querySelector("#search");
const resultsDiv = document.querySelector("#results");

searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value;
    console.log("Qidirilmoqda:", searchTerm);
    
    // Real-time qidiruv
    resultsDiv.innerHTML = \`Natijalar: \${searchTerm}\`;
});

// ===== Forma submit =====

const form = document.querySelector("#loginForm");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Sahifa yangilanishini to'xtatish
    
    const email = form.querySelector("#email").value;
    const password = form.querySelector("#password").value;
    
    console.log("Login:", { email, password });
    
    // Validatsiya
    if (email && password.length >= 6) {
        console.log("Forma to'g'ri");
    } else {
        console.log("Xatolik");
    }
});

// ===== Klaviatura =====

document.addEventListener("keydown", (e) => {
    console.log("Bosilgan tugma:", e.key);
    
    if (e.key === "Escape") {
        // Modal yopish
        console.log("Escape bosildi");
    }
    
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        console.log("Ctrl+S bosildi");
    }
});

// ===== Event Delegation =====

const todoList = document.querySelector("#todoList");

// Har bir li ga emas, ul ga bitta listener
todoList.addEventListener("click", (e) => {
    // Delete tugmasi bosildi
    if (e.target.classList.contains("delete-btn")) {
        const li = e.target.closest("li");
        li.remove();
    }
    
    // Complete tugmasi
    if (e.target.classList.contains("complete-btn")) {
        const li = e.target.closest("li");
        li.classList.toggle("completed");
    }
});

// ===== Hover effekti =====

const card = document.querySelector(".card");

card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "none";
});`,
    assignment: {
      title: "Interaktiv Todo ilova",
      description: "Oldingi darsdan davom etib, to'liq interaktiv todo yarating: 1) Forma submit da yangi vazifa qo'shish, 2) 'Bajarildi' tugmasi - completed class toggle, 3) 'O'chirish' tugmasi - elementni remove, 4) Enter tugmasi bilan ham vazifa qo'shish, 5) Bo'sh input yubormaslik validatsiyasi. Event delegation ishlatilsin.",
      hint: "form.addEventListener('submit', e => { e.preventDefault(); ... }). Event delegation: ul.addEventListener('click', e => { if(e.target.matches('.delete')) ... }). classList.toggle('completed')."
    }
  },
  {
    id: 14,
    title: "CSS animatsiyalar va transitions",
    description: "Transition, keyframe animatsiyalar va transform",
    duration: "40 daqiqa",
    content: `## CSS Transitions

Transition - bir holatdan boshqasiga silliq o'tish. Oddiy hover effektlari uchun ideal.

### Transition xususiyatlari:

transition-property: - qaysi xususiyat
transition-duration: - davomiyligi
transition-timing-function: - tezlik egri chizig'i
transition-delay: - kechikish

### Qisqa yozuv:
transition: property duration timing-function delay;
transition: all 0.3s ease;
transition: transform 0.3s, opacity 0.5s;

### Timing functions:
- ease - sekin boshlaydi va tugaydi
- linear - teng tezlik
- ease-in - sekin boshlaydi
- ease-out - sekin tugaydi
- ease-in-out - ikkalasi
- cubic-bezier(n,n,n,n) - custom

## CSS Transform

Elementni aylanntirish, kattalashtirish, surish.

### 2D Transform:
- translate(x, y) - surish
- rotate(deg) - aylantirish
- scale(x, y) - kattalashtirish
- skew(x, y) - qiyshiq qilish

### 3D Transform:
- translateZ, rotateX, rotateY
- perspective - chuqurlik effekti

### transform-origin
Aylanish nuqtasi (default: center)

## CSS Keyframe Animations

Murakkab, ko'p bosqichli animatsiyalar uchun.

### @keyframes
@keyframes animationName {
    from { } / 0% { }
    50% { }
    to { } / 100% { }
}

### animation xususiyatlari:
- animation-name
- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count (infinite)
- animation-direction (alternate, reverse)
- animation-fill-mode (forwards, backwards, both)
- animation-play-state (running, paused)

### Qisqa yozuv:
animation: name duration timing-function delay iteration-count direction fill-mode;

## Performance

- transform va opacity GPU da ishlaydi (tez)
- width, height, margin sekin
- will-change: transform; - oldindan xabar berish`,
    codeExample: `/* ===== Transitions ===== */

.button {
    background-color: #3498db;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    /* Transition */
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.button:active {
    transform: translateY(0);
}

/* ===== Transform ===== */

.card {
    transition: transform 0.3s ease;
}

.card:hover {
    transform: scale(1.05) rotate(2deg);
}

/* 3D flip */
.flip-card {
    perspective: 1000px;
}

.flip-card-inner {
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* ===== Keyframe Animations ===== */

/* Fade in */
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
    animation: fadeIn 0.5s ease forwards;
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
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}

.bounce {
    animation: bounce 1s ease infinite;
}

/* Spin */
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

/* Slide in from left */
@keyframes slideIn {
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
    animation: slideIn 0.5s ease-out forwards;
}

/* Staggered animation */
.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }`,
    assignment: {
      title: "Animatsiyali landing page",
      description: "Animatsiyali sahifa yarating: 1) Hero matn fadeIn bilan paydo bo'lsin, 2) Tugmalarda hover transition (scale, shadow), 3) 4 ta kartochka staggered animation bilan (ketma-ket), 4) Loading spinner (spin animatsiya), 5) Scroll da ko'rinadigan elementlar uchun slideIn. Kamida 3 ta @keyframes va 5 ta transition.",
      hint: "Staggered: nth-child(n) bilan animation-delay. Spinner: border-radius: 50% va border-top boshqa rang. animation: fadeIn 0.5s ease forwards; - forwards oxirgi holatni saqlaydi."
    }
  },
  {
    id: 15,
    title: "React asoslari",
    description: "React komponentlar, props va useState hook",
    duration: "50 daqiqa",
    content: `## React nima?

React - Facebook tomonidan yaratilgan JavaScript kutubxonasi. U foydalanuvchi interfeyslarini (UI) komponentlar asosida yaratish uchun ishlatiladi.

### React afzalliklari:
- Komponentlar asosida (qayta ishlatish)
- Virtual DOM (tez)
- Bir yo'nalishli ma'lumot oqimi
- Katta jamiyat va ekotizim

## Komponent nima?

Komponent - mustaqil, qayta ishlatiladigan UI qismi. Har bir komponent o'z HTML, CSS va JavaScript ini o'z ichiga oladi.

### Funksional komponent:
function Welcome() {
    return <h1>Salom!</h1>;
}

### Arrow function:
const Welcome = () => {
    return <h1>Salom!</h1>;
};

## JSX

JSX - JavaScript ichida HTML yozish imkoniyati. Bu React ning maxsus sintaksisi.

Oddiy HTML:
<div class="container">

JSX:
<div className="container">

### JSX qoidalari:
- class → className
- for → htmlFor
- camelCase atributlar (onClick, onChange)
- Bitta ildiz element
- {} ichida JavaScript

## Props

Props - komponentga tashqaridan ma'lumot uzatish. Read-only (faqat o'qish).

function Card({ title, description }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

// Ishlatish
<Card title="React" description="JavaScript kutubxonasi" />

### Props children:
Komponent ichidagi kontent:
<Card>
    <p>Ichki kontent</p>
</Card>

function Card({ children }) {
    return <div className="card">{children}</div>;
}

## useState Hook

useState - komponent holatini boshqarish uchun hook. Holat o'zgarganda komponent qayta renderlanadi.

const [state, setState] = useState(initialValue);

- state - joriy qiymat
- setState - qiymatni o'zgartiruvchi funksiya
- initialValue - boshlang'ich qiymat

### Qoidalar:
- Faqat komponent ichida
- Shartlar/sikllar ichida EMAS
- use bilan boshlanadi

## Hodisalar React da

React da hodisalar camelCase:
- onClick
- onChange
- onSubmit
- onMouseEnter

<button onClick={() => setCount(count + 1)}>
    Bosing
</button>`,
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
        <div>
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
                backgroundColor: isOn ? 'green' : 'gray',
                color: 'white',
                padding: '10px 20px'
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
                        imageUrl="/react.png"
                    />
                    <Card 
                        title="Vue"
                        description="Progressive framework"
                        imageUrl="/vue.png"
                    />
                </div>
            </main>
        </div>
    );
}

export default App;`,
    assignment: {
      title: "React mini loyiha",
      description: "To'liq React ilovasi yarating: 1) Header komponenti (logo va nav), 2) ProductCard komponenti (props: rasm, nom, narx, description), 3) useState bilan savat (cart) - mahsulot qo'shish/o'chirish, 4) Jami narxni hisoblash va ko'rsatish, 5) 'Savat bo'sh' xabari agar bo'sh bo'lsa. Kamida 3 ta komponent va 2 ta useState.",
      hint: "Cart uchun: const [cart, setCart] = useState([]). Qo'shish: setCart([...cart, product]). O'chirish: setCart(cart.filter(p => p.id !== id)). Jami: cart.reduce((sum, p) => sum + p.price, 0)."
    }
  }
];
