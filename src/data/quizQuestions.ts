export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "HTML qanday til hisoblanadi?",
    options: ["Dasturlash tili", "Belgilash tili", "Stil tili", "Ma'lumotlar bazasi tili"],
    correctAnswer: 1,
    explanation: "HTML (HyperText Markup Language) - bu belgilash tili bo'lib, veb-sahifalar strukturasini yaratish uchun ishlatiladi."
  },
  {
    id: 2,
    question: "HTML sahifaning ko'rinadigan qismi qaysi teg ichida yoziladi?",
    options: ["<head>", "<html>", "<body>", "<meta>"],
    correctAnswer: 2,
    explanation: "<body> tegi ichidagi barcha kontent foydalanuvchiga ko'rinadi."
  },
  {
    id: 3,
    question: "Qaysi atribut rasmga tavsif beradi?",
    options: ["src", "href", "alt", "title"],
    correctAnswer: 2,
    explanation: "alt atributi rasm yuklanmasa yoki ko'rinmas foydalanuvchilar uchun tavsif beradi."
  },
  {
    id: 4,
    question: "Tartibli ro'yxat yaratish uchun qaysi teg ishlatiladi?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    correctAnswer: 1,
    explanation: "<ol> (ordered list) - raqamlar bilan tartibli ro'yxat yaratadi."
  },
  {
    id: 5,
    question: "CSS ni HTML ga ulashning eng yaxshi usuli qaysi?",
    options: ["Inline CSS", "Internal CSS", "External CSS", "Hammasi bir xil"],
    correctAnswer: 2,
    explanation: "External CSS alohida faylda saqlanadi va ko'p sahifalarda qayta ishlatilishi mumkin."
  },
  {
    id: 6,
    question: "CSS da class selektori qanday yoziladi?",
    options: ["#classname", ".classname", "*classname", "classname"],
    correctAnswer: 1,
    explanation: "Class selektori nuqta (.) bilan boshlanadi: .classname"
  },
  {
    id: 7,
    question: "Box Model ning to'g'ri tartibi qaysi?",
    options: ["margin, padding, border, content", "content, padding, border, margin", "border, margin, padding, content", "padding, content, margin, border"],
    correctAnswer: 1,
    explanation: "Box Model: content (ichki) → padding → border → margin (tashqi)"
  },
  {
    id: 8,
    question: "Flexbox da elementlarni gorizontal markazlash uchun qaysi xususiyat ishlatiladi?",
    options: ["align-items: center", "justify-content: center", "text-align: center", "margin: auto"],
    correctAnswer: 1,
    explanation: "justify-content asosiy o'q bo'ylab (odatda gorizontal) elementlarni joylashtiradi."
  },
  {
    id: 9,
    question: "CSS Grid da auto-fit bilan minmax() qanday foyda beradi?",
    options: ["Faqat 3 ta ustun yaratadi", "Responsive grid - ekran o'lchamiga qarab ustunlar soni o'zgaradi", "Faqat mobil uchun", "Animatsiya qo'shadi"],
    correctAnswer: 1,
    explanation: "repeat(auto-fit, minmax(250px, 1fr)) - ekran kengligiga qarab ustunlar sonini avtomatik moslashtiradi."
  },
  {
    id: 10,
    question: "Media query da mobile-first yondashuv uchun qaysi ishlatiladi?",
    options: ["max-width", "min-width", "width", "device-width"],
    correctAnswer: 1,
    explanation: "min-width: mobil stillar default, keyin katta ekranlar uchun @media (min-width: ...) ishlatiladi."
  },
  {
    id: 11,
    question: "JavaScript da o'zgarmas o'zgaruvchi qanday e'lon qilinadi?",
    options: ["var", "let", "const", "static"],
    correctAnswer: 2,
    explanation: "const - o'zgarmas o'zgaruvchi yaratadi, qiymatini o'zgartirib bo'lmaydi."
  },
  {
    id: 12,
    question: "JavaScript da massivga oxiriga element qo'shish uchun qaysi metod ishlatiladi?",
    options: ["add()", "push()", "append()", "insert()"],
    correctAnswer: 1,
    explanation: "push() metodi massiv oxiriga yangi element qo'shadi."
  },
  {
    id: 13,
    question: "map() metodi nima qaytaradi?",
    options: ["Boolean", "Number", "Yangi massiv", "String"],
    correctAnswer: 2,
    explanation: "map() har bir elementga funksiya qo'llab, YANGI massiv qaytaradi."
  },
  {
    id: 14,
    question: "DOM da elementni ID bo'yicha topish uchun qaysi metod ishlatiladi?",
    options: ["querySelector()", "getElementById()", "getElementsByClass()", "findById()"],
    correctAnswer: 1,
    explanation: "document.getElementById('id') - eng tez usul, ID bo'yicha elementni topadi."
  },
  {
    id: 15,
    question: "Event listener da e.preventDefault() nima qiladi?",
    options: ["Hodisani o'chiradi", "Standart harakatni to'xtatadi", "Elementni o'chiradi", "Console ga yozadi"],
    correctAnswer: 1,
    explanation: "preventDefault() brauzerning standart harakatini (masalan, forma yuborish) to'xtatadi."
  },
  {
    id: 16,
    question: "CSS da transition xususiyati nima uchun ishlatiladi?",
    options: ["Rangni o'zgartirish", "O'zgarishlarni silliq qilish", "Elementni yashirish", "Shrift o'zgartirish"],
    correctAnswer: 1,
    explanation: "transition - bir holatdan boshqasiga SILLIQ o'tish effektini yaratadi."
  },
  {
    id: 17,
    question: "@keyframes bilan nima yaratiladi?",
    options: ["O'zgaruvchi", "Funksiya", "Animatsiya", "Selektor"],
    correctAnswer: 2,
    explanation: "@keyframes - ko'p bosqichli CSS animatsiyalarini yaratish uchun ishlatiladi."
  },
  {
    id: 18,
    question: "React da komponent nima?",
    options: ["CSS fayl", "Qayta ishlatiladigan UI qismi", "Database", "Server"],
    correctAnswer: 1,
    explanation: "React komponent - mustaqil, qayta ishlatiladigan UI qismi."
  },
  {
    id: 19,
    question: "React da useState hook nima uchun ishlatiladi?",
    options: ["API chaqirish", "Komponent holatini boshqarish", "Routing", "Styling"],
    correctAnswer: 1,
    explanation: "useState - komponent ichidagi o'zgaruvchan ma'lumotlarni (state) boshqarish uchun."
  },
  {
    id: 20,
    question: "useEffect qachon ishlaydi?",
    options: ["Faqat bir marta", "Har render da", "Dependency o'zgarganda", "Hammasi to'g'ri bo'lishi mumkin"],
    correctAnswer: 3,
    explanation: "useEffect dependency array ga qarab: [] - bir marta, [dep] - dep o'zgarganda, bo'sh - har render da."
  },
  {
    id: 21,
    question: "React Router da dinamik parametr qanday olinadi?",
    options: ["useParams()", "useNavigate()", "useLocation()", "useRoute()"],
    correctAnswer: 0,
    explanation: "useParams() - URL dagi dinamik parametrlarni (:id) olish uchun ishlatiladi."
  },
  {
    id: 22,
    question: "Git da o'zgarishlarni saqlash uchun qaysi buyruq ishlatiladi?",
    options: ["git save", "git commit", "git push", "git store"],
    correctAnswer: 1,
    explanation: "git commit -m 'xabar' - o'zgarishlarni local repository ga saqlaydi."
  },
  {
    id: 23,
    question: "Git branch nima uchun kerak?",
    options: ["Fayllarni o'chirish", "Parallel rivojlantirish", "Serverga yuklash", "Loyihani o'chirish"],
    correctAnswer: 1,
    explanation: "Branch - asosiy kodga zarar bermasdan yangi xususiyatlarni rivojlantirish imkonini beradi."
  },
  {
    id: 24,
    question: "fetch() funksiyasi nima qaytaradi?",
    options: ["JSON", "String", "Promise", "Array"],
    correctAnswer: 2,
    explanation: "fetch() - Promise qaytaradi, natijani .then() yoki await bilan olish kerak."
  },
  {
    id: 25,
    question: "async/await nima uchun ishlatiladi?",
    options: ["CSS yozish", "Asinxron kodni sinxron ko'rinishda yozish", "HTML yaratish", "Animatsiya"],
    correctAnswer: 1,
    explanation: "async/await - Promise bilan ishlashni osonlashtiradi, kod o'qilishi yaxshilanadi."
  },
  {
    id: 26,
    question: "HTTP POST so'rovi nima uchun ishlatiladi?",
    options: ["Ma'lumot olish", "Ma'lumot yaratish", "Ma'lumot o'chirish", "Sahifani yangilash"],
    correctAnswer: 1,
    explanation: "POST - serverga yangi ma'lumot yuborish/yaratish uchun ishlatiladi."
  },
  {
    id: 27,
    question: "React da props nima?",
    options: ["Ichki holat", "Tashqaridan keluvchi ma'lumot", "CSS stillar", "HTML teglar"],
    correctAnswer: 1,
    explanation: "Props - ota komponentdan bola komponentga uzatiladigan ma'lumotlar."
  },
  {
    id: 28,
    question: "JSX da class o'rniga nima ishlatiladi?",
    options: ["class", "className", "cssClass", "htmlClass"],
    correctAnswer: 1,
    explanation: "JSX da class - JavaScript ning reserved word, shuning uchun className ishlatiladi."
  },
  {
    id: 29,
    question: "CSS da :hover pseudo-class qachon ishlaydi?",
    options: ["Element bosilganda", "Sichqoncha ustida bo'lganda", "Element fokusda bo'lganda", "Sahifa yuklanganda"],
    correctAnswer: 1,
    explanation: ":hover - sichqoncha kursori element ustida bo'lganda stillarni qo'llaydi."
  },
  {
    id: 30,
    question: "Responsive dizayn uchun qaysi meta teg majburiy?",
    options: ["<meta charset>", "<meta viewport>", "<meta description>", "<meta author>"],
    correctAnswer: 1,
    explanation: "<meta name='viewport' content='width=device-width, initial-scale=1.0'> - mobil qurilmalarda to'g'ri ko'rsatish uchun majburiy."
  }
];
