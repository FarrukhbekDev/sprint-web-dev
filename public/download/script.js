// ===== Lessons Data =====
const lessons = [
    { id: 1, title: "HTML nima va u qanday ishlaydi?", description: "Web sahifalarning asosi - HTML tili bilan tanishish",
      content: "HTML (HyperText Markup Language) - bu veb-sahifalar yaratish uchun ishlatiladigan standart til. Qisqacha aytganda, HTML brauzerlarga \"bu sarlavha\", \"bu rasm\", \"bu havola\" deb aytuvchi til.\n\n## Oddiy tilda tushuntirish\n\nTasavvur qiling: siz uy quryapsiz. HTML - bu uyning g'ishtlari va skelet-konstruksiyasi. U uyga shakl beradi, lekin hali bezak yo'q (CSS) va elektr yo'q (JavaScript).\n\nBrauzer (Chrome, Firefox) HTML faylni o'qiydi va uni chiroyli sahifaga aylantiradi.\n\n## HTML hujjat strukturasi\n\nHar bir HTML sahifa quyidagi qismlardan iborat:\n\n- <!DOCTYPE html> - \"Bu HTML5 hujjati\" degan bildirish\n- <html> - hamma narsa shu ichida\n- <head> - sahifa haqida ma'lumot (brauzer ko'rsatmaydi)\n- <body> - foydalanuvchi ko'radigan hamma narsa\n\n## Teglar qanday ishlaydi?\n\nTeg - bu < va > ichidagi maxsus so'z. Masalan:\n- <p> - paragraf boshlaydi\n- </p> - paragraf tugaydi\n\nMisol: <p>Salom dunyo!</p>\n\n## Eng ko'p ishlatiladigan teglar\n\n- <h1> - eng katta sarlavha\n- <h2> - bo'lim sarlavhasi\n- <p> - paragraf\n- <strong> - qalin matn\n- <em> - kursiv matn",
      codeExample: '<!DOCTYPE html>\n<html lang="uz">\n<head>\n    <meta charset="UTF-8">\n    <title>Mening birinchi sahifam</title>\n</head>\n<body>\n    <h1>Salom Dunyo!</h1>\n    <p>Bu mening birinchi veb-sahifam.</p>\n    <p>Men bugun <strong>HTML</strong> o\'rganishni boshladim!</p>\n    <h2>Nega HTML o\'rganish kerak?</h2>\n    <p>HTML barcha veb-sahifalarning <em>asosi</em> hisoblanadi.</p>\n</body>\n</html>',
      assignment: { title: "Birinchi HTML sahifangizni yarating", description: "To'liq HTML sahifa yarating. h1 da ismingiz, p da o'zingiz haqida, h2 da maqsadlaringiz.", hint: "<!DOCTYPE html> bilan boshlang. VS Code da '!' yozib Enter bosing." }
    },
    { id: 2, title: "HTML teglar va atributlar", description: "Asosiy HTML teglari va ularning atributlari bilan ishlash",
      content: "## Atribut nima?\n\nAtribut - tegga qo'shimcha ma'lumot beradi. Masalan:\n- <a href=\"...\"> - href atributi havolaning manzilini ko'rsatadi\n- <img src=\"...\"> - src atributi rasm joylashgan joyni ko'rsatadi\n\n## Eng muhim atributlar\n\n### href - havolalar uchun\n<a href=\"https://google.com\">Google</a>\n\n### src - rasmlar uchun\n<img src=\"rasm.jpg\">\n\n### alt - rasm tavsifi\n<img src=\"rasm.jpg\" alt=\"Chiroyli tog'\">\n\n### id va class\n- id - sahifada yagona\n- class - bir nechta elementda ishlatilishi mumkin",
      codeExample: '<!DOCTYPE html>\n<html lang="uz">\n<head>\n    <meta charset="UTF-8">\n    <title>Teglar va atributlar</title>\n</head>\n<body>\n    <h1 id="main-title">Asosiy sarlavha</h1>\n    <p>Bu oddiy paragraf. <strong>Muhim matn</strong> va <em>ta\'kidlangan</em>.</p>\n    <a href="https://google.com" target="_blank">Google</a>\n    <img src="https://picsum.photos/300/200" alt="Tasodifiy rasm" width="300">\n</body>\n</html>',
      assignment: { title: "Shaxsiy portfolio sahifa", description: "Portfolio sahifa: h1 da ismingiz, rasm, 3 ta havola, telefon va email.", hint: "target='_blank' bilan yangi tabda ochiladi." }
    },
    { id: 3, title: "HTML ro'yxatlar va jadvallar", description: "Tartibli va tartibsiz ro'yxatlar, jadval yaratish",
      content: "## Ro'yxatlar\n\n### Tartibsiz ro'yxat (ul)\nNuqtalar bilan:\n<ul><li>Olma</li><li>Banan</li></ul>\n\n### Tartibli ro'yxat (ol)\nRaqamlar bilan:\n<ol><li>HTML</li><li>CSS</li><li>JavaScript</li></ol>\n\n## Jadvallar\n\n- <table> - jadval\n- <tr> - qator\n- <th> - sarlavha katak\n- <td> - oddiy katak\n- <thead> - sarlavha qismi\n- <tbody> - asosiy qism",
      codeExample: '<!DOCTYPE html>\n<html lang="uz">\n<body>\n    <h2>Mening sevimli taomlarim:</h2>\n    <ul>\n        <li>Osh</li>\n        <li>Lag\'mon</li>\n        <li>Somsa</li>\n    </ul>\n    <h2>Jadval</h2>\n    <table border="1" cellpadding="10">\n        <thead><tr><th>Ism</th><th>Yosh</th></tr></thead>\n        <tbody>\n            <tr><td>Ali</td><td>25</td></tr>\n            <tr><td>Malika</td><td>23</td></tr>\n        </tbody>\n    </table>\n</body>\n</html>',
      assignment: { title: "Shaxsiy CV sahifasi", description: "CV: ko'nikmalar ro'yxati, ta'lim bosqichlari, ish tajribasi jadvali.", hint: "<thead> va <tbody> ishlating." }
    },
    { id: 4, title: "CSS bilan tanishuv", description: "CSS nima, HTMLga ulash usullari",
      content: "## CSS nima?\n\nCSS (Cascading Style Sheets) - HTML elementlarini bezash uchun til.\n\n## CSS qanday ulanadi?\n\n### 1. Inline CSS\n<p style=\"color: red;\">Qizil matn</p>\n\n### 2. Internal CSS\n<head> ichida <style> tegida\n\n### 3. External CSS (eng yaxshi!)\n<link rel=\"stylesheet\" href=\"styles.css\">\n\n## CSS sintaksisi\n\nselector {\n    property: value;\n}",
      codeExample: '/* styles.css */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f5f5f5;\n    color: #333;\n}\n\nh1 {\n    color: #2c3e50;\n    font-size: 32px;\n}\n\n.card {\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n}\n\na:hover {\n    color: #2980b9;\n}',
      assignment: { title: "CSS bilan sahifani bezang", description: "CV sahifangizga external CSS qo'shing: body, h1, jadval, havolalar.", hint: "<link rel='stylesheet' href='styles.css'>." }
    },
    { id: 5, title: "CSS selektorlar", description: "Element, class, ID va murakkab selektorlar",
      content: "## Asosiy selektorlar\n\n### Element selektori\np { color: blue; }\n\n### Class selektori (.)\n.card { padding: 20px; }\n\n### ID selektori (#)\n#header { background: blue; }\n\n## Kombinatsiya selektorlar\n\ndiv p { } - div ichidagi barcha p lar\ndiv > p { } - faqat to'g'ri bola p lar\n\n## Pseudo-class\n\n:hover - sichqoncha ustida\n:focus - fokusda\n:first-child - birinchi bola\n:nth-child(even) - juft bolalar",
      codeExample: '.btn {\n    padding: 10px 20px;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.btn-primary {\n    background-color: #3498db;\n    color: white;\n}\n\n.btn-primary:hover {\n    background: #2980b9;\n}\n\n#navigation {\n    background-color: #333;\n    padding: 15px;\n}\n\nli:first-child {\n    font-weight: bold;\n}\n\ntr:nth-child(even) {\n    background-color: #f5f5f5;\n}',
      assignment: { title: "Selektorlar bilan amaliyot", description: "3 xil class, 1 ta ID, pseudo-classlar: :hover, :first-child, :nth-child(even).", hint: "Bir elementga bir nechta class: class='btn btn-primary'." }
    },
    { id: 6, title: "CSS Box Model", description: "Margin, padding, border va content",
      content: "## Box Model\n\nHar bir HTML element \"quti\":\n\n1. Content - ichki matn/rasm\n2. Padding - ichki bo'shliq\n3. Border - chegara\n4. Margin - tashqi bo'shliq\n\n## box-sizing: border-box\n\n* { box-sizing: border-box; }\n\nEndi width = content + padding + border. Ancha qulay!",
      codeExample: '* {\n    box-sizing: border-box;\n}\n\n.card {\n    width: 300px;\n    padding: 20px;\n    border: 1px solid #ddd;\n    border-radius: 12px;\n    margin: 20px;\n    background: white;\n    box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n}\n\n.card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 10px 25px rgba(0,0,0,0.15);\n}',
      assignment: { title: "Box Model bilan kartochkalar", description: "3 ta mahsulot kartochkasi: width, padding, border, border-radius, box-shadow, hover effekti.", hint: "* { box-sizing: border-box; } qo'shing." }
    },
    { id: 7, title: "CSS Flexbox asoslari", description: "Moslashuvchan bir o'lchovli layout",
      content: "## Flexbox\n\n.container { display: flex; }\n\n## justify-content (gorizontal)\n\nflex-start | flex-end | center | space-between | space-around\n\n## align-items (vertikal)\n\nstretch | flex-start | flex-end | center\n\n## flex-wrap\n\nwrap - sig'masa keyingi qatorga\n\n## gap\n\ngap: 20px; - elementlar orasidagi bo'shliq",
      codeExample: '.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 30px;\n    background: #2c3e50;\n}\n\n.cards-container {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n    justify-content: center;\n}\n\n.card {\n    flex: 0 1 300px;\n}\n\n.hero {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 400px;\n}',
      assignment: { title: "Flexbox bilan sahifa layout", description: "Navbar, hero, 4 ta kartochka, 3 ustunli footer - hammasi Flexbox bilan.", hint: "Navbar: justify-content: space-between." }
    },
    { id: 8, title: "CSS Grid asoslari", description: "Ikki o'lchovli layout tizimi",
      content: "## Grid\n\n.container { display: grid; }\n\n## Ustun va qatorlar\n\ngrid-template-columns: repeat(3, 1fr);\n\n## Responsive Grid\n\ngrid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n\n## grid-template-areas\n\ngrid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";",
      codeExample: '.simple-grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px;\n}\n\n.responsive-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 25px;\n}\n\n.page-layout {\n    display: grid;\n    grid-template-columns: 250px 1fr;\n    grid-template-rows: 70px 1fr 60px;\n    grid-template-areas:\n        "header header"\n        "sidebar main"\n        "footer footer";\n    min-height: 100vh;\n}',
      assignment: { title: "Grid bilan Dashboard", description: "Admin dashboard: header, sidebar, main, footer - grid-template-areas bilan.", hint: "@media (max-width: 768px) da 1 ustun." }
    },
    { id: 9, title: "Responsive dizayn", description: "Media queries, mobile-first",
      content: "## Media Queries\n\n@media (max-width: 768px) { /* mobil */ }\n@media (min-width: 768px) { /* planshet+ */ }\n\n## Breakpoints\n\n- 480px - telefon\n- 768px - planshet\n- 1024px - laptop\n- 1280px - desktop\n\n## Mobile-First\n\nBirinchi mobil uchun yozing, keyin kattalar uchun min-width ishlating.\n\n## Viewport meta (Majburiy!)\n\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      codeExample: '/* Mobile-First */\n.container {\n    width: 100%;\n    padding: 0 15px;\n}\n\nh1 { font-size: clamp(28px, 6vw, 48px); }\nimg { max-width: 100%; height: auto; }\n\n.grid {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 20px;\n}\n\n@media (min-width: 768px) {\n    .container { max-width: 720px; margin: 0 auto; }\n    .grid { grid-template-columns: repeat(2, 1fr); }\n}\n\n@media (min-width: 1024px) {\n    .container { max-width: 1000px; }\n    .grid { grid-template-columns: repeat(3, 1fr); }\n}',
      assignment: { title: "To'liq responsive sahifa", description: "Mobile-first: 1 ustun → 2 ustun → 3 ustun + sidebar.", hint: "Birinchi mobil stillar, keyin @media (min-width: ...)." }
    },
    { id: 10, title: "JavaScript asoslari", description: "O'zgaruvchilar va ma'lumot turlari",
      content: "## JavaScript nima?\n\nJavaScript - veb sahifalarni JONLI qiladigan til.\n\n## O'zgaruvchilar\n\nconst - o'zgarmas (eng ko'p ishlating)\nlet - o'zgaruvchan\n\n## Ma'lumot turlari\n\n- String: let ism = \"Ali\";\n- Number: let yosh = 25;\n- Boolean: let active = true;\n\n## Template Literals\n\nconst name = \"Ali\";\nconsole.log(`Salom, ${name}!`);\n\n## Operatorlar\n\n=== (qiymat VA tur) - BUNI ISHLATING!",
      codeExample: '// O\'zgaruvchilar\nconst SITE_NAME = "front-end.uz";\nlet userCount = 0;\n\nconst firstName = "Xudarganov";\nconst lastName = "Farrux";\nconst fullName = `${firstName} ${lastName}`;\nconsole.log(fullName);\n\nconst age = 25;\nconst price = 99.99;\nconst discount = 0.15;\nconst finalPrice = price * (1 - discount);\nconsole.log(`Chegirma narx: ${finalPrice}`);\n\nconsole.log(5 === "5"); // false\nconsole.log(typeof firstName); // "string"',
      assignment: { title: "JavaScript asoslari amaliyot", description: "5 ta const: ism, familiya, yosh, kasb, shahar. Template literal bilan taqdimot.", hint: "Template literal: `Matn ${ozgaruvchi}`." }
    },
    { id: 11, title: "JavaScript funksiyalar va massivlar", description: "Funksiya yaratish, massivlar",
      content: "## Funksiyalar\n\nconst spiqdash = (ism) => `Salom, ${ism}!`;\n\n## Massiv\n\nconst mevalar = [\"olma\", \"banan\", \"uzum\"];\n\n## Massiv metodlari\n\n- forEach - har biri uchun\n- map - yangi massiv qaytaradi\n- filter - filtrlash\n- find - birinchi mos\n- reduce - yig'indi",
      codeExample: 'function spiqdash(ism) {\n    return `Salom, ${ism}!`;\n}\n\nconst kopaytirish = (a, b) => a * b;\n\nconst mevalar = ["olma", "banan", "uzum", "anor"];\n\nmevalar.forEach((meva, index) => {\n    console.log(`${index + 1}. ${meva}`);\n});\n\nconst kattaHarf = mevalar.map(meva => meva.toUpperCase());\nconst uzunMevalar = mevalar.filter(meva => meva.length > 4);\n\nconst sonlar = [10, 20, 30, 40, 50];\nconst yigindi = sonlar.reduce((jami, son) => jami + son, 0);',
      assignment: { title: "Funksiyalar va massivlar", description: "ortacha funksiya, talabalar massivi filter va reduce bilan.", hint: "O'rtacha = reduce yig'indi / length." }
    },
    { id: 12, title: "DOM bilan ishlash", description: "HTML elementlarini JS bilan boshqarish",
      content: "## DOM\n\nDOM (Document Object Model) - JavaScript HTML ni ko'rish usuli.\n\n## Elementlarni topish\n\ndocument.getElementById(\"header\")\ndocument.querySelector(\".card\")\n\n## Element o'zgartirish\n\nelement.textContent = \"Yangi matn\";\nelement.classList.add(\"active\");\nelement.classList.toggle(\"open\");\n\n## Element yaratish\n\nconst yangi = document.createElement(\"div\");\nparent.appendChild(yangi);",
      codeExample: 'const header = document.getElementById("header");\nheader.textContent = "Yangi sarlavha";\n\nconst button = document.querySelector(".btn");\nbutton.classList.add("active");\n\nbutton.addEventListener("click", () => {\n    button.classList.toggle("loading");\n});\n\nconst newCard = document.createElement("div");\nnewCard.className = "card";\nnewCard.innerHTML = `<h3>Yangi kartochka</h3>`;\ndocument.querySelector(".cards").appendChild(newCard);',
      assignment: { title: "DOM bilan todo ro'yxati", description: "Input, tugma, yangi li yaratish, o'chirish tugmasi.", hint: "input.value, createElement('li')." }
    },
    { id: 13, title: "JavaScript hodisalar (Events)", description: "Click, input, submit hodisalar",
      content: "## Event Listener\n\nelement.addEventListener(\"eventType\", function);\n\n## Hodisa turlari\n\n- click, dblclick, mouseenter, mouseleave\n- keydown, keyup\n- submit, input, change, focus, blur\n\n## Event obyekti\n\nevent.target - bosilgan element\nevent.preventDefault() - standart harakatni to'xtatish\n\n## Event Delegation\n\nKo'p elementga emas, ota elementga bitta listener.",
      codeExample: 'const button = document.querySelector("#myButton");\nbutton.addEventListener("click", () => {\n    console.log("Tugma bosildi!");\n});\n\nconst searchInput = document.querySelector("#search");\nsearchInput.addEventListener("input", (e) => {\n    console.log("Qidirilmoqda:", e.target.value);\n});\n\nconst form = document.querySelector("#loginForm");\nform.addEventListener("submit", (e) => {\n    e.preventDefault();\n    const email = document.querySelector("#email").value;\n    console.log("Login:", { email });\n});',
      assignment: { title: "Interaktiv Todo ilova", description: "Forma submit, bajarildi/o'chirish tugmalari, Enter bilan qo'shish.", hint: "form.addEventListener('submit', e => { e.preventDefault(); })" }
    },
    { id: 14, title: "CSS animatsiyalar", description: "Transition, keyframe animatsiyalar",
      content: "## Transition\n\n.button { transition: background 0.3s ease; }\n.button:hover { background: red; }\n\n## Transform\n\ntranslate(x, y) | scale(1.2) | rotate(45deg)\n\n## @keyframes\n\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\n.element {\n    animation: fadeIn 0.5s ease forwards;\n}",
      codeExample: '.btn {\n    transition: all 0.3s ease;\n}\n\n.btn:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 5px 15px rgba(0,0,0,0.2);\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; transform: translateY(20px); }\n    to { opacity: 1; transform: translateY(0); }\n}\n\n.fade-in { animation: fadeIn 0.6s ease forwards; }\n\n@keyframes spin {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n}\n\n.spinner {\n    width: 50px; height: 50px;\n    border: 4px solid #e0e0e0;\n    border-top: 4px solid #3498db;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n}',
      assignment: { title: "Animatsiyali landing page", description: "Hero fadeIn, tugmalar hover transition, kartochkalar staggered animation.", hint: "nth-child(n) bilan animation-delay." }
    },
    { id: 15, title: "React asoslari", description: "Komponentlar, props va useState",
      content: "## React nima?\n\nReact - Facebook yaratgan JavaScript kutubxonasi. Sahifani KOMPONENTLAR dan quradi.\n\n## Birinchi komponent\n\nfunction Welcome() {\n    return <h1>Salom!</h1>;\n}\n\n## JSX qoidalari\n\n1. className (class emas)\n2. camelCase (onClick, onChange)\n3. Bitta ildiz element\n4. {} ichida JavaScript\n\n## Props va useState\n\nProps = tashqaridan keluvchi ma'lumot\nuseState = komponent ichidagi holat",
      codeExample: "import { useState } from 'react';\n\nfunction Card({ title, description }) {\n    return (\n        <div className=\"card\">\n            <h3>{title}</h3>\n            <p>{description}</p>\n        </div>\n    );\n}\n\nfunction Counter() {\n    const [count, setCount] = useState(0);\n    return (\n        <div>\n            <h2>Son: {count}</h2>\n            <button onClick={() => setCount(count + 1)}>+1</button>\n            <button onClick={() => setCount(0)}>Reset</button>\n        </div>\n    );\n}",
      assignment: { title: "React bilan Todo ilova", description: "useState bilan todos massiv, input, map() bilan ro'yxat, toggle va o'chirish.", hint: "useState([]). setTodos([...todos, yangiItem])." }
    },
    { id: 16, title: "React useEffect va Hooks", description: "useEffect hook bilan ishlash",
      content: "## useEffect\n\nuseEffect(() => {\n    // Har render da\n});\n\nuseEffect(() => {\n    // Faqat bir marta\n}, []);\n\nuseEffect(() => {\n    // dependency o'zgarganda\n}, [dependency]);\n\n## Amaliy misollar\n\n- API dan ma'lumot olish\n- Timer yaratish\n- localStorage bilan ishlash\n\n## Cleanup function\n\nreturn () => clearInterval(interval);",
      codeExample: "import { useState, useEffect } from 'react';\n\nfunction Counter() {\n    const [count, setCount] = useState(0);\n    useEffect(() => {\n        document.title = `Soni: ${count}`;\n    }, [count]);\n    return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n\nfunction TodoApp() {\n    const [todos, setTodos] = useState(() => {\n        const saved = localStorage.getItem('todos');\n        return saved ? JSON.parse(saved) : [];\n    });\n    useEffect(() => {\n        localStorage.setItem('todos', JSON.stringify(todos));\n    }, [todos]);\n    return <div>...</div>;\n}",
      assignment: { title: "useEffect bilan Todo", description: "localStorage ga saqlash, sahifa yuklanganda o'qish, timer.", hint: "localStorage.setItem('key', JSON.stringify(data))." }
    },
    { id: 17, title: "React Router", description: "Sahifalar navigatsiyasi",
      content: "## React Router\n\nTurli sahifalar yaratish va navigatsiya qilish.\n\n## Asosiy komponentlar\n\nBrowserRouter - ilovani o'raydi\nRoutes va Route - sahifalar\nLink - navigatsiya\n\n## useParams\n\nDinamik parametrlarni olish:\nconst { id } = useParams();\n\n## useNavigate\n\nconst navigate = useNavigate();\nnavigate('/about');",
      codeExample: "import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';\n\nfunction Navbar() {\n    return (\n        <nav>\n            <Link to=\"/\">Bosh sahifa</Link>\n            <Link to=\"/about\">Biz haqimizda</Link>\n        </nav>\n    );\n}\n\nfunction ProductDetail() {\n    const { id } = useParams();\n    return <h1>Mahsulot #{id}</h1>;\n}\n\nfunction App() {\n    return (\n        <BrowserRouter>\n            <Navbar />\n            <Routes>\n                <Route path=\"/\" element={<Home />} />\n                <Route path=\"/products/:id\" element={<ProductDetail />} />\n            </Routes>\n        </BrowserRouter>\n    );\n}",
      assignment: { title: "React Router bilan blog", description: "Bosh sahifa, /posts/:id, /about, Navbar bilan navigatsiya.", hint: "useParams() bilan id ni oling." }
    },
    { id: 18, title: "Git asoslari", description: "Git versiya nazorati tizimi",
      content: "## Git nima?\n\nKodingiz tarixini saqlash va hamkorlik qilish uchun tizim.\n\n## Asosiy buyruqlar\n\ngit init - repository yaratish\ngit status - holat\ngit add . - o'zgarishlarni qo'shish\ngit commit -m \"Xabar\" - saqlash\ngit log - tarix\n\n## Branch\n\ngit branch feature-name\ngit checkout -b feature-name\n\n## GitHub\n\ngit remote add origin URL\ngit push -u origin main\ngit clone URL",
      codeExample: '# 1. Yangi loyiha\ngit init\ngit add .\ngit commit -m "Initial commit"\n\n# 2. Kundalik ish\ngit status\ngit add .\ngit commit -m "Add navbar"\n\n# 3. Branch\ngit branch feature-login\ngit checkout feature-login\ngit checkout -b feature-cart\n\n# 4. Merge\ngit checkout main\ngit merge feature-login\n\n# 5. GitHub\ngit remote add origin https://github.com/user/repo.git\ngit push -u origin main\ngit clone URL',
      assignment: { title: "Git bilan loyiha boshqarish", description: "git init, commit, feature branch, merge qiling.", hint: "git checkout -b feature-style." }
    },
    { id: 19, title: "API bilan ishlash", description: "Fetch API va asinxron JavaScript",
      content: "## API nima?\n\nBoshqa serverlardan ma'lumot olish yo'li.\n\n## Fetch API\n\nfetch('URL').then(res => res.json()).then(data => console.log(data));\n\n## async/await\n\nconst getData = async () => {\n    const response = await fetch('URL');\n    const data = await response.json();\n    return data;\n};\n\n## HTTP metodlar\n\nGET - olish | POST - yaratish | PUT - yangilash | DELETE - o'chirish\n\n## Error handling\n\ntry { ... } catch (error) { console.error(error); }",
      codeExample: "async function getUsers() {\n    try {\n        const response = await fetch('https://jsonplaceholder.typicode.com/users');\n        const users = await response.json();\n        console.log(users);\n    } catch (error) {\n        console.error('Xatolik:', error);\n    }\n}\n\nasync function createPost(postData) {\n    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(postData)\n    });\n    return await response.json();\n}",
      assignment: { title: "API bilan React ilova", description: "API dan postlar ro'yxati, loading, error, kartochkalar.", hint: "https://jsonplaceholder.typicode.com/posts" }
    },
    { id: 20, title: "Loyiha yaratish", description: "Portfolio loyiha yaratish",
      content: "## Kurs yakunlandi! 🎉\n\nSiz o'rgandingiz:\n- HTML - sahifa strukturasi\n- CSS - dizayn va responsive\n- JavaScript - interaktivlik\n- React - zamonaviy UI\n- Git - versiya nazorati\n- API - tashqi ma'lumotlar\n\n## Portfolio loyiha uchun g'oyalar\n\n1. Shaxsiy portfolio sayti\n2. Todo ilova\n3. Blog platformasi\n4. E-commerce do'kon\n5. Weather ilovasi\n\n## Best practices\n\n1. Clean code\n2. Git commits\n3. Responsive\n4. Accessibility",
      codeExample: "// Portfolio loyiha strukturasi\n\nfunction Navbar() {\n    return (\n        <nav>\n            <Link to=\"/\">Bosh sahifa</Link>\n            <Link to=\"/projects\">Loyihalar</Link>\n            <Link to=\"/about\">Men haqimda</Link>\n        </nav>\n    );\n}\n\nfunction Home() {\n    return (\n        <main>\n            <section className=\"hero\">\n                <h1>Salom, men Frontend dasturchiman</h1>\n                <p>React, TypeScript bilan ishlayman</p>\n            </section>\n            <section className=\"skills\">\n                <h2>Ko'nikmalar</h2>\n                {['HTML', 'CSS', 'JavaScript', 'React', 'Git'].map(skill => (\n                    <div key={skill} className=\"skill-card\">{skill}</div>\n                ))}\n            </section>\n        </main>\n    );\n}",
      assignment: { title: "Portfolio sayt yarating", description: "Hero, skills, projects, contact, responsive dizayn.", hint: "CSS Grid va Flexbox ishlating." }
    }
];

// ===== Quiz Questions =====
const quizQuestions = [
    { id: 1, question: "HTML qanday til hisoblanadi?", options: ["Dasturlash tili", "Belgilash tili", "Stil tili", "Ma'lumotlar bazasi tili"], correctAnswer: 1, explanation: "HTML - belgilash tili bo'lib, veb-sahifalar strukturasini yaratish uchun ishlatiladi." },
    { id: 2, question: "HTML sahifaning ko'rinadigan qismi qaysi teg ichida?", options: ["<head>", "<html>", "<body>", "<meta>"], correctAnswer: 2, explanation: "<body> tegi ichidagi kontent foydalanuvchiga ko'rinadi." },
    { id: 3, question: "Qaysi atribut rasmga tavsif beradi?", options: ["src", "href", "alt", "title"], correctAnswer: 2, explanation: "alt atributi rasm yuklanmasa tavsif beradi." },
    { id: 4, question: "Tartibli ro'yxat uchun qaysi teg?", options: ["<ul>", "<ol>", "<li>", "<dl>"], correctAnswer: 1, explanation: "<ol> raqamlar bilan tartibli ro'yxat yaratadi." },
    { id: 5, question: "CSS ni HTML ga ulashning eng yaxshi usuli?", options: ["Inline CSS", "Internal CSS", "External CSS", "Hammasi bir xil"], correctAnswer: 2, explanation: "External CSS alohida faylda saqlanadi va qayta ishlatiladi." },
    { id: 6, question: "CSS da class selektori qanday yoziladi?", options: ["#classname", ".classname", "*classname", "classname"], correctAnswer: 1, explanation: "Class selektori nuqta (.) bilan boshlanadi." },
    { id: 7, question: "Box Model ning to'g'ri tartibi?", options: ["margin, padding, border, content", "content, padding, border, margin", "border, margin, padding, content", "padding, content, margin, border"], correctAnswer: 1, explanation: "Box Model: content → padding → border → margin." },
    { id: 8, question: "Flexbox da gorizontal markazlash?", options: ["align-items: center", "justify-content: center", "text-align: center", "margin: auto"], correctAnswer: 1, explanation: "justify-content asosiy o'q bo'ylab joylashtiradi." },
    { id: 9, question: "CSS Grid da auto-fit bilan minmax() nima?", options: ["Faqat 3 ta ustun", "Responsive grid", "Faqat mobil uchun", "Animatsiya qo'shadi"], correctAnswer: 1, explanation: "auto-fit, minmax() ekranga qarab ustunlar sonini moslashtiradi." },
    { id: 10, question: "Mobile-first uchun qaysi ishlatiladi?", options: ["max-width", "min-width", "width", "device-width"], correctAnswer: 1, explanation: "min-width: mobil default, katta ekranlar uchun @media (min-width: ...)." },
    { id: 11, question: "JavaScript da o'zgarmas o'zgaruvchi?", options: ["var", "let", "const", "static"], correctAnswer: 2, explanation: "const o'zgarmas o'zgaruvchi yaratadi." },
    { id: 12, question: "Massiv oxiriga element qo'shish?", options: ["add()", "push()", "append()", "insert()"], correctAnswer: 1, explanation: "push() massiv oxiriga element qo'shadi." },
    { id: 13, question: "map() nima qaytaradi?", options: ["Boolean", "Number", "Yangi massiv", "String"], correctAnswer: 2, explanation: "map() har elementga funksiya qo'llab yangi massiv qaytaradi." },
    { id: 14, question: "DOM da ID bo'yicha topish?", options: ["querySelector()", "getElementById()", "getElementsByClass()", "findById()"], correctAnswer: 1, explanation: "getElementById('id') eng tez usul." },
    { id: 15, question: "e.preventDefault() nima qiladi?", options: ["Hodisani o'chiradi", "Standart harakatni to'xtatadi", "Elementni o'chiradi", "Console ga yozadi"], correctAnswer: 1, explanation: "preventDefault() brauzerning standart harakatini to'xtatadi." },
    { id: 16, question: "transition nima uchun?", options: ["Rangni o'zgartirish", "O'zgarishlarni silliq qilish", "Elementni yashirish", "Shrift o'zgartirish"], correctAnswer: 1, explanation: "transition - silliq o'tish effektini yaratadi." },
    { id: 17, question: "@keyframes bilan nima yaratiladi?", options: ["O'zgaruvchi", "Funksiya", "Animatsiya", "Selektor"], correctAnswer: 2, explanation: "@keyframes ko'p bosqichli animatsiyalar yaratadi." },
    { id: 18, question: "React da komponent nima?", options: ["CSS fayl", "Qayta ishlatiladigan UI qismi", "Database", "Server"], correctAnswer: 1, explanation: "React komponent - mustaqil, qayta ishlatiladigan UI qismi." },
    { id: 19, question: "useState nima uchun?", options: ["API chaqirish", "Komponent holatini boshqarish", "Routing", "Styling"], correctAnswer: 1, explanation: "useState komponent ichidagi holatni boshqarish uchun." },
    { id: 20, question: "useEffect qachon ishlaydi?", options: ["Faqat bir marta", "Har render da", "Dependency o'zgarganda", "Hammasi to'g'ri bo'lishi mumkin"], correctAnswer: 3, explanation: "useEffect dependency array ga qarab ishlaydi." },
    { id: 21, question: "React Router da dinamik parametr?", options: ["useParams()", "useNavigate()", "useLocation()", "useRoute()"], correctAnswer: 0, explanation: "useParams() URL dagi :id ni olish uchun." },
    { id: 22, question: "Git da o'zgarishlarni saqlash?", options: ["git save", "git commit", "git push", "git store"], correctAnswer: 1, explanation: "git commit -m 'xabar' local ga saqlaydi." },
    { id: 23, question: "Git branch nima uchun?", options: ["Fayllarni o'chirish", "Parallel rivojlantirish", "Serverga yuklash", "Loyihani o'chirish"], correctAnswer: 1, explanation: "Branch parallel rivojlantirish imkonini beradi." },
    { id: 24, question: "fetch() nima qaytaradi?", options: ["JSON", "String", "Promise", "Array"], correctAnswer: 2, explanation: "fetch() Promise qaytaradi." },
    { id: 25, question: "async/await nima uchun?", options: ["CSS yozish", "Asinxron kodni sinxron ko'rinishda yozish", "HTML yaratish", "Animatsiya"], correctAnswer: 1, explanation: "async/await Promise bilan ishlashni osonlashtiradi." },
    { id: 26, question: "HTTP POST nima uchun?", options: ["Ma'lumot olish", "Ma'lumot yaratish", "Ma'lumot o'chirish", "Sahifani yangilash"], correctAnswer: 1, explanation: "POST serverga yangi ma'lumot yuborish uchun." },
    { id: 27, question: "React da props nima?", options: ["Ichki holat", "Tashqaridan keluvchi ma'lumot", "CSS stillar", "HTML teglar"], correctAnswer: 1, explanation: "Props ota komponentdan keluvchi ma'lumotlar." },
    { id: 28, question: "JSX da class o'rniga nima?", options: ["class", "className", "cssClass", "htmlClass"], correctAnswer: 1, explanation: "JSX da className ishlatiladi." },
    { id: 29, question: ":hover qachon ishlaydi?", options: ["Bosilganda", "Sichqoncha ustida", "Fokusda", "Yuklanganda"], correctAnswer: 1, explanation: ":hover sichqoncha kursori ustida bo'lganda." },
    { id: 30, question: "Responsive uchun qaysi meta teg?", options: ["<meta charset>", "<meta viewport>", "<meta description>", "<meta author>"], correctAnswer: 1, explanation: "viewport meta tegi mobilda to'g'ri ko'rsatish uchun majburiy." }
];

// ===== Initialize Lessons Grid (Landing Page) =====
function initLessons() {
    const lessonsGrid = document.getElementById('lessonsGrid');
    if (!lessonsGrid) return;

    lessonsGrid.innerHTML = lessons.map(lesson => `
        <a href="lesson.html?id=${lesson.id}" class="lesson-card">
            <div class="lesson-content">
                <div class="lesson-number">${lesson.id}</div>
                <div class="lesson-info">
                    <h3 class="lesson-title">${lesson.title}</h3>
                    <div class="lesson-meta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                        </svg>
                        <span>Dars ${lesson.id}</span>
                    </div>
                </div>
            </div>
            <svg class="lesson-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
            </svg>
        </a>
    `).join('');
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

    // Main content
    html += '<div class="lesson-text">';
    lesson.content.split('\n\n').forEach(p => {
        if (p.startsWith('## ')) {
            html += `<h2>${p.replace('## ', '')}</h2>`;
        } else if (p.startsWith('### ')) {
            html += `<h3>${p.replace('### ', '')}</h3>`;
        } else if (p.startsWith('- ')) {
            const items = p.split('\n').filter(l => l.startsWith('- '));
            html += '<ul>' + items.map(i => `<li>${i.replace('- ', '')}</li>`).join('') + '</ul>';
        } else {
            html += `<p>${p}</p>`;
        }
    });
    html += '</div>';

    // Code example
    if (lesson.codeExample) {
        html += `
            <div class="lesson-code-section">
                <div class="lesson-code-header">
                    <h3>Kod namunasi</h3>
                    <button class="btn btn-ghost btn-sm" onclick="copyCode(this)">📋 Nusxalash</button>
                </div>
                <div class="code-block"><pre><code>${escapeHtml(lesson.codeExample)}</code></pre></div>
            </div>`;
    }

    // Assignment
    html += `
        <div class="lesson-assignment">
            <div class="lesson-assignment-inner">
                <div class="lesson-assignment-icon">💡</div>
                <div>
                    <h3>${lesson.assignment.title}</h3>
                    <p>${lesson.assignment.description}</p>
                    ${lesson.assignment.hint ? `<div class="lesson-hint">💡 Maslahat: ${lesson.assignment.hint}</div>` : ''}
                </div>
            </div>
        </div>`;

    // Navigation
    const prev = id > 1 ? id - 1 : null;
    const next = id < lessons.length ? id + 1 : null;
    html += '<div class="lesson-nav">';
    if (prev) html += `<a href="lesson.html?id=${prev}" class="btn btn-outline">← Oldingi dars</a>`;
    else html += '<div></div>';
    if (next) html += `<a href="lesson.html?id=${next}" class="btn btn-hero">Keyingi dars →</a>`;
    else html += `<a href="quiz.html" class="btn btn-hero" style="background:var(--success);color:white;">Yakuniy testga o'tish →</a>`;
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
    // Update sidebar
    const link = document.querySelector(`.sidebar-link.active`);
    if (link && !link.classList.contains('completed')) {
        link.classList.add('completed');
        link.innerHTML += '<span class="sidebar-check">✓</span>';
    }
}

function updateCompleteBtn(done) {
    const btn = document.getElementById('completeBtn');
    if (done) {
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span class="btn-complete-text">Tugatilgan</span>';
        btn.classList.add('done');
        btn.disabled = true;
    }
}

function copyCode(btn) {
    const code = btn.closest('.lesson-code-section').querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(() => {
        btn.textContent = '✅ Nusxalandi';
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

function initQuizPage() {
    quizState = { current: 0, selected: null, showResult: false, answers: [] };
    renderQuestion();
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
    expEl.innerHTML = `<strong>Tushuntirish:</strong> ${q.explanation}`;

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
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('quizResult').style.display = 'flex';

    const score = quizState.answers.reduce((s, a, i) => s + (a === quizQuestions[i].correctAnswer ? 1 : 0), 0);
    const passed = score >= 25;
    const pct = Math.round((score / quizQuestions.length) * 100);

    document.getElementById('resultIcon').innerHTML = passed ? '🏆' : '❌';
    document.getElementById('resultIcon').className = 'quiz-result-icon ' + (passed ? 'pass' : 'fail');
    document.getElementById('resultTitle').textContent = passed ? 'Tabriklaymiz! 🎉' : "Afsuski, o'ta olmadingiz";
    document.getElementById('resultScore').innerHTML = `Sizning natijangiz: <strong>${score}</strong> / ${quizQuestions.length}`;
    document.getElementById('resultProgress').style.width = `${pct}%`;
    document.getElementById('resultProgress').className = 'quiz-result-progress ' + (passed ? 'pass' : 'fail');
    document.getElementById('resultMessage').textContent = passed
        ? "Siz kursni muvaffaqiyatli yakunladingiz! Endi sertifikat olishingiz mumkin."
        : "O'tish uchun kamida 25 ta to'g'ri javob kerak. Yana urinib ko'ring!";
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
