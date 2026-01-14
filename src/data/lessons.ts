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
    duration: "15 daqiqa",
    content: `HTML (HyperText Markup Language) - bu veb-sahifalar yaratish uchun ishlatiladigan standart til. U veb-brauzerga sahifa qanday ko'rinishda bo'lishi kerakligini aytadi.

## HTML nima qiladi?
- Matn, rasm va boshqa kontentlarni joylashtiradi
- Sahifa strukturasini belgilaydi
- Brauzer uchun ko'rsatmalar beradi

## HTML tegi nima?
Teglar - bu maxsus belgilar bo'lib, ular < va > belgilari orasida yoziladi. Masalan: <p>, <h1>, <div>

Har bir teg ochiladi va yopiladi:
- Ochilish tegi: <tagname>
- Yopilish tegi: </tagname>`,
    codeExample: `<!DOCTYPE html>
<html>
<head>
    <title>Mening birinchi sahifam</title>
</head>
<body>
    <h1>Salom Dunyo!</h1>
    <p>Bu mening birinchi veb-sahifam.</p>
</body>
</html>`,
    assignment: {
      title: "Birinchi HTML sahifangizni yarating",
      description: "Oddiy HTML sahifa yarating. Unda h1 tegi ichida o'z ismingizni, p tegi ichida esa o'zingiz haqida qisqa ma'lumot yozing.",
      hint: "<!DOCTYPE html> bilan boshlang va <html>, <head>, <body> teglarini ishlating"
    }
  },
  {
    id: 2,
    title: "HTML teglar va atributlar",
    description: "Asosiy HTML teglari va ularning atributlari",
    duration: "20 daqiqa",
    content: `## Asosiy HTML teglar

### Sarlavha teglari
h1 dan h6 gacha - sarlavhalar uchun. h1 eng katta, h6 eng kichik.

### Paragraf
<p> tegi - oddiy matn uchun ishlatiladi.

### Link (havola)
<a> tegi - boshqa sahifalarga havola qilish uchun.

### Rasm
<img> tegi - rasmlar qo'shish uchun.

## Atributlar nima?
Atributlar tegga qo'shimcha ma'lumot beradi. Ular ochilish tegi ichida yoziladi.`,
    codeExample: `<h1>Asosiy sarlavha</h1>
<h2>Ikkinchi darajali sarlavha</h2>

<p>Bu oddiy paragraf matni.</p>

<a href="https://google.com">Google saytiga o'tish</a>

<img src="rasm.jpg" alt="Rasm tavsifi" width="300">`,
    assignment: {
      title: "Turli teglardan foydalaning",
      description: "Sahifa yarating: 2 ta sarlavha (h1 va h2), 2 ta paragraf, 1 ta havola va 1 ta rasm qo'shing.",
      hint: "img tegida src va alt atributlarini unutmang"
    }
  },
  {
    id: 3,
    title: "HTML ro'yxatlar va jadvallar",
    description: "Tartibli va tartibsiz ro'yxatlar, jadval yaratish",
    duration: "25 daqiqa",
    content: `## Ro'yxatlar

### Tartibsiz ro'yxat (ul)
Nuqtalar bilan belgilangan ro'yxat:

### Tartibli ro'yxat (ol)
Raqamlar bilan belgilangan ro'yxat:

## Jadvallar
Jadval yaratish uchun quyidagi teglar ishlatiladi:
- <table> - jadval
- <tr> - qator (table row)
- <th> - sarlavha katagi (table header)
- <td> - oddiy katak (table data)`,
    codeExample: `<!-- Tartibsiz ro'yxat -->
<ul>
    <li>Olma</li>
    <li>Banan</li>
    <li>Apelsin</li>
</ul>

<!-- Tartibli ro'yxat -->
<ol>
    <li>Birinchi qadam</li>
    <li>Ikkinchi qadam</li>
    <li>Uchinchi qadam</li>
</ol>

<!-- Jadval -->
<table>
    <tr>
        <th>Ism</th>
        <th>Yosh</th>
    </tr>
    <tr>
        <td>Ali</td>
        <td>25</td>
    </tr>
</table>`,
    assignment: {
      title: "Ro'yxat va jadval yarating",
      description: "Sevimli 5 ta taomingiz ro'yxatini (ul) va oila a'zolaringiz jadvali (ism, yosh, kasb) yarating.",
      hint: "Jadvalda kamida 3 ta qator bo'lsin"
    }
  },
  {
    id: 4,
    title: "CSS bilan tanishuv",
    description: "CSS nima va u qanday ishlaydi",
    duration: "20 daqiqa",
    content: `## CSS nima?
CSS (Cascading Style Sheets) - HTML elementlarini bezash uchun til. U ranglar, shriftlar, joylashuv va boshqalarni boshqaradi.

## CSS qanday ulanadi?
3 xil usul bor:
1. **Inline** - style atributi orqali
2. **Internal** - <style> tegi orqali
3. **External** - alohida .css fayl orqali (eng yaxshi usul)

## CSS sintaksisi
selector {
    property: value;
}`,
    codeExample: `/* Inline CSS */
<p style="color: red;">Qizil matn</p>

/* Internal CSS */
<style>
    p {
        color: blue;
        font-size: 18px;
    }
</style>

/* External CSS (styles.css) */
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

h1 {
    color: navy;
    text-align: center;
}`,
    assignment: {
      title: "CSS bilan sahifa bezang",
      description: "Oldingi darsda yaratgan sahifangizga CSS qo'shing: fon rangi, matn rangi, shrift o'lchami o'zgartiring.",
      hint: "<style> tegini <head> ichida yozing"
    }
  },
  {
    id: 5,
    title: "CSS selektorlar",
    description: "Element, class va ID selektorlar",
    duration: "25 daqiqa",
    content: `## Selektor turlari

### Element selektori
HTML teg nomi bo'yicha tanlaydi:
p { } - barcha paragraflar

### Class selektori
class atributi bo'yicha tanlaydi (. bilan boshlanadi):
.qizil { } - class="qizil" elementlar

### ID selektori
id atributi bo'yicha tanlaydi (# bilan boshlanadi):
#asosiy { } - id="asosiy" element

## Muhim farq
- Class - bir nechta elementda ishlatilishi mumkin
- ID - faqat bitta elementda ishlatiladi`,
    codeExample: `/* Element selektori */
p {
    line-height: 1.6;
}

/* Class selektori */
.highlight {
    background-color: yellow;
    padding: 5px;
}

.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
}

/* ID selektori */
#header {
    background-color: navy;
    color: white;
}

/* HTML da ishlatish */
<p class="highlight">Bu ajratilgan matn</p>
<div id="header">Bu sarlavha</div>`,
    assignment: {
      title: "Selektorlar bilan mashq",
      description: "3 ta turli class va 1 ta ID yarating. Har biriga turli stil bering (rang, fon, chegara).",
      hint: "Bir elementga bir nechta class berish mumkin: class='card highlight'"
    }
  },
  {
    id: 6,
    title: "CSS Box Model",
    description: "Margin, padding, border tushunchasi",
    duration: "30 daqiqa",
    content: `## Box Model nima?
Har bir HTML elementi to'rtburchak quti sifatida ko'riladi. Bu quti 4 qismdan iborat:

1. **Content** - kontent joylashadigan maydon
2. **Padding** - kontent atrofidagi ichki bo'shliq
3. **Border** - chegara
4. **Margin** - tashqi bo'shliq (boshqa elementlardan masofa)

## Xususiyatlar
- width/height - kenglik/balandlik
- padding - ichki bo'shliq
- border - chegara
- margin - tashqi bo'shliq`,
    codeExample: `.card {
    /* Kontent o'lchami */
    width: 300px;
    height: 200px;
    
    /* Ichki bo'shliq */
    padding: 20px;
    padding-top: 10px;
    padding-right: 15px;
    
    /* Chegara */
    border: 2px solid #333;
    border-radius: 10px;
    
    /* Tashqi bo'shliq */
    margin: 20px;
    margin-bottom: 30px;
}

/* Box-sizing */
* {
    box-sizing: border-box; /* padding va border width ichiga kiradi */
}`,
    assignment: {
      title: "Kartochka dizayni",
      description: "3 ta kartochka yarating. Har birida: kontent, padding (20px), border (2px), margin (15px). Turli ranglar ishlating.",
      hint: "box-sizing: border-box; ishlatish qulay"
    }
  },
  {
    id: 7,
    title: "CSS Flexbox asoslari",
    description: "Moslashuvchan layout yaratish",
    duration: "35 daqiqa",
    content: `## Flexbox nima?
Flexbox - elementlarni gorizontal yoki vertikal tartibda joylashtirishning qulay usuli.

## Asosiy xususiyatlar

### Container (ota element) uchun:
- display: flex - flexboxni yoqish
- flex-direction - yo'nalish (row/column)
- justify-content - gorizontal joylashuv
- align-items - vertikal joylashuv
- gap - elementlar orasidagi bo'shliq

### Items (bola elementlar) uchun:
- flex-grow - o'sish
- flex-shrink - kichrayish
- flex-basis - boshlang'ich o'lcham`,
    codeExample: `.container {
    display: flex;
    flex-direction: row; /* yoki column */
    justify-content: space-between; /* center, flex-start, flex-end */
    align-items: center;
    gap: 20px;
}

.item {
    flex: 1; /* teng bo'linadi */
}

/* Responsive navbar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
}

.nav-links {
    display: flex;
    gap: 30px;
}`,
    assignment: {
      title: "Flexbox bilan navbar",
      description: "Flexbox yordamida navigatsiya paneli yarating: chapda logo, o'rtada havolalar, o'ngda tugma.",
      hint: "justify-content: space-between ishlatib ko'ring"
    }
  },
  {
    id: 8,
    title: "CSS Grid asoslari",
    description: "Murakkab layoutlar uchun Grid",
    duration: "35 daqiqa",
    content: `## CSS Grid nima?
Grid - ikki o'lchovli (qator va ustunlar) layout yaratish tizimi. Murakkab sahifa strukturalari uchun ideal.

## Asosiy xususiyatlar

### Container uchun:
- display: grid
- grid-template-columns - ustunlar
- grid-template-rows - qatorlar
- gap - bo'shliqlar

### Items uchun:
- grid-column - ustun joylashuvi
- grid-row - qator joylashuvi`,
    codeExample: `.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 ta teng ustun */
    grid-template-rows: auto;
    gap: 20px;
}

/* 12 ustunli tizim */
.layout {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 15px;
}

.sidebar {
    grid-column: span 3; /* 3 ustun egallaydi */
}

.main-content {
    grid-column: span 9; /* 9 ustun egallaydi */
}

/* Kartochkalar tarmog'i */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}`,
    assignment: {
      title: "Grid bilan galereya",
      description: "6 ta rasmdan iborat galereya yarating. 3 ustun, 2 qator. Responsive bo'lsin (kichik ekranda 1-2 ustun).",
      hint: "repeat(auto-fit, minmax(200px, 1fr)) ishlatib ko'ring"
    }
  },
  {
    id: 9,
    title: "Responsive dizayn",
    description: "Media queries va moslashuvchan dizayn",
    duration: "30 daqiqa",
    content: `## Responsive dizayn nima?
Sahifa turli ekran o'lchamlarida (telefon, planshet, kompyuter) yaxshi ko'rinishini ta'minlash.

## Media Queries
Ekran o'lchamiga qarab stillarni o'zgartirish:

@media (max-width: 768px) {
    /* 768px va kichikroq ekranlar uchun */
}

## Muhim nuqtalar (Breakpoints):
- Mobil: 0-480px
- Planshet: 481-768px
- Laptop: 769-1024px
- Desktop: 1025px+`,
    codeExample: `/* Mobil avval yondashuvi */
.container {
    width: 100%;
    padding: 15px;
}

.navbar {
    flex-direction: column;
    gap: 10px;
}

/* Planshet uchun */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
        margin: 0 auto;
    }
    
    .navbar {
        flex-direction: row;
    }
}

/* Desktop uchun */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
    
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}`,
    assignment: {
      title: "Responsive sahifa",
      description: "Mobil va desktop versiyasi bo'lgan sahifa yarating. Mobilda 1 ustun, desktopda 3 ustun bo'lsin.",
      hint: "min-width media query ishlatib ko'ring"
    }
  },
  {
    id: 10,
    title: "JavaScript kirish",
    description: "JavaScript asoslari va sintaksisi",
    duration: "30 daqiqa",
    content: `## JavaScript nima?
JavaScript - veb-sahifalarni interaktiv qiluvchi dasturlash tili. U:
- Foydalanuvchi harakatlariga javob beradi
- Kontentni dinamik o'zgartiradi
- Serverdan ma'lumot oladi

## Asosiy tushunchalar
- O'zgaruvchilar (variables)
- Ma'lumot turlari (string, number, boolean)
- Funksiyalar
- Shartlar va sikllar`,
    codeExample: `// O'zgaruvchilar
let ism = "Ali";
const yosh = 25;
var shahar = "Toshkent";

// Ma'lumot turlari
let matn = "Salom"; // string
let son = 42; // number
let togri = true; // boolean

// Funksiya
function salomlash(ism) {
    return "Salom, " + ism + "!";
}

console.log(salomlash("Jasur")); // "Salom, Jasur!"

// Shart
if (yosh >= 18) {
    console.log("Kattalar uchun");
} else {
    console.log("Bolalar uchun");
}

// Sikl
for (let i = 1; i <= 5; i++) {
    console.log(i);
}`,
    assignment: {
      title: "Kalkulyator funksiyasi",
      description: "4 ta funksiya yarating: qoshish, ayirish, kopaytirish, bolish. Har biri 2 ta son qabul qilsin.",
      hint: "function qoshish(a, b) { return a + b; }"
    }
  },
  {
    id: 11,
    title: "DOM bilan ishlash",
    description: "HTML elementlarini JavaScript orqali boshqarish",
    duration: "35 daqiqa",
    content: `## DOM nima?
DOM (Document Object Model) - HTML hujjatning JavaScript uchun ko'rinishi. U orqali elementlarni tanlash, o'zgartirish va yaratish mumkin.

## Elementlarni tanlash
- getElementById() - ID bo'yicha
- querySelector() - CSS selektor bo'yicha
- querySelectorAll() - barcha mos elementlar

## Elementni o'zgartirish
- innerHTML - ichki HTML
- textContent - matn
- style - CSS stillari
- classList - classlar`,
    codeExample: `// Elementni tanlash
const sarlavha = document.getElementById("header");
const tugma = document.querySelector(".btn");
const kartalar = document.querySelectorAll(".card");

// Matnni o'zgartirish
sarlavha.textContent = "Yangi sarlavha";

// Stil o'zgartirish
tugma.style.backgroundColor = "blue";
tugma.style.color = "white";

// Class qo'shish/olib tashlash
tugma.classList.add("active");
tugma.classList.remove("disabled");
tugma.classList.toggle("hidden");

// Yangi element yaratish
const yangiElement = document.createElement("p");
yangiElement.textContent = "Yangi paragraf";
document.body.appendChild(yangiElement);`,
    assignment: {
      title: "Dinamik kontent",
      description: "Sahifada tugma yarating. Bosilganda matn rangini va sarlavhani o'zgartirsin.",
      hint: "document.querySelector va element.style ishlating"
    }
  },
  {
    id: 12,
    title: "JavaScript hodisalar (Events)",
    description: "Click, input va boshqa hodisalarni boshqarish",
    duration: "30 daqiqa",
    content: `## Hodisalar nima?
Hodisalar - foydalanuvchi harakatlari: bosish, yozish, sichqoncha harakati va h.k.

## Hodisa turlari:
- click - bosish
- input - matn kiritish
- submit - forma yuborish
- mouseover/mouseout - sichqoncha ustiga/tashqariga
- keydown/keyup - klaviatura

## Event listener qo'shish
element.addEventListener("hodisa", funksiya)`,
    codeExample: `// Click hodisasi
const tugma = document.querySelector("#myButton");
tugma.addEventListener("click", function() {
    alert("Tugma bosildi!");
});

// Arrow function bilan
tugma.addEventListener("click", () => {
    console.log("Bosildi");
});

// Input hodisasi
const input = document.querySelector("#search");
input.addEventListener("input", (event) => {
    console.log("Kiritilgan matn:", event.target.value);
});

// Forma submit
const forma = document.querySelector("form");
forma.addEventListener("submit", (event) => {
    event.preventDefault(); // Sahifa yangilanishini to'xtatish
    console.log("Forma yuborildi");
});

// Mouseover
const card = document.querySelector(".card");
card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
});`,
    assignment: {
      title: "Interaktiv forma",
      description: "Ism kiritish inputi va tugma yarating. Tugma bosilganda 'Salom, [ism]!' xabarini ko'rsating.",
      hint: "input.value orqali kiritilgan matnni oling"
    }
  },
  {
    id: 13,
    title: "CSS animatsiyalar",
    description: "Transition va keyframe animatsiyalar",
    duration: "30 daqiqa",
    content: `## Transition
Oddiy animatsiyalar - bir holatdan ikkinchisiga o'tish:
- transition-property - qaysi xususiyat
- transition-duration - davomiyligi
- transition-timing-function - tezlik egri chizig'i

## Keyframes
Murakkab animatsiyalar uchun:
@keyframes nomi {
    from { } / 0% { }
    to { } / 100% { }
}`,
    codeExample: `/* Transition */
.button {
    background-color: blue;
    transform: scale(1);
    transition: all 0.3s ease;
}

.button:hover {
    background-color: darkblue;
    transform: scale(1.1);
}

/* Keyframe animatsiya */
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

.card {
    animation: fadeIn 0.5s ease forwards;
}

/* Cheksiz animatsiya */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.logo {
    animation: pulse 2s ease-in-out infinite;
}`,
    assignment: {
      title: "Animatsiyali kartochka",
      description: "Kartochka yarating: hover'da kattaroq bo'lsin, soya qo'shilsin. Fadeın animatsiyasi bilan paydo bo'lsin.",
      hint: "transition: transform 0.3s, box-shadow 0.3s;"
    }
  },
  {
    id: 14,
    title: "React kirish",
    description: "React asoslari va komponentlar",
    duration: "40 daqiqa",
    content: `## React nima?
React - foydalanuvchi interfeyslarini yaratish uchun JavaScript kutubxonasi. U:
- Komponentlarga asoslangan
- Virtual DOM ishlatadi (tez)
- Deklarativ yondashuv

## Komponent nima?
Qayta ishlatiladigan UI qismi. Masalan: tugma, kartochka, navbar.

## JSX
JavaScript ichida HTML yozish imkoniyati.`,
    codeExample: `// Oddiy komponent
function Salomlash() {
    return <h1>Salom Dunyo!</h1>;
}

// Props bilan
function Kartochka({ title, description }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

// Ishlatish
function App() {
    return (
        <div>
            <Salomlash />
            <Kartochka 
                title="React" 
                description="JavaScript kutubxonasi"
            />
        </div>
    );
}

// Event bilan
function Tugma() {
    const handleClick = () => {
        alert("Bosildi!");
    };
    
    return <button onClick={handleClick}>Bos</button>;
}`,
    assignment: {
      title: "Profil kartochkasi",
      description: "Profil komponent yarating: rasm, ism, kasb, bio ko'rsatsin. Props orqali ma'lumot bering.",
      hint: "function Profil({ ism, kasb, bio }) { ... }"
    }
  },
  {
    id: 15,
    title: "React useState hook",
    description: "Holatni boshqarish va dinamik UI",
    duration: "40 daqiqa",
    content: `## useState nima?
useState - komponent holatini saqlash va o'zgartirish uchun hook. Holat o'zgarganda komponent qayta renderlanadi.

## Sintaksis
const [qiymat, setQiymat] = useState(boshlangichQiymat);

## Qachon ishlatish?
- Hisoblagichlar
- Forma ma'lumotlari
- Ko'rsatish/yashirish
- Ro'yxatlar`,
    codeExample: `import { useState } from 'react';

// Hisoblagich
function Hisoblagich() {
    const [son, setSon] = useState(0);
    
    return (
        <div>
            <p>Son: {son}</p>
            <button onClick={() => setSon(son + 1)}>+1</button>
            <button onClick={() => setSon(son - 1)}>-1</button>
        </div>
    );
}

// Forma
function LoginForma() {
    const [email, setEmail] = useState("");
    const [parol, setParol] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, parol });
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input 
                type="password"
                value={parol}
                onChange={(e) => setParol(e.target.value)}
                placeholder="Parol"
            />
            <button type="submit">Kirish</button>
        </form>
    );
}`,
    assignment: {
      title: "Todo ilova",
      description: "Oddiy vazifalar ro'yxati yarating: yangi vazifa qo'shish, vazifani o'chirish imkoniyati bo'lsin.",
      hint: "Ro'yxat uchun useState([]) ishlatib, spread operatori bilan yangi element qo'shing"
    }
  }
];
