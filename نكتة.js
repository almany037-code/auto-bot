module.exports = {
name: "نكتة",

execute: async (sock, msg) => {

const jid = msg.key.remoteJid

// قوالب نكت مصرية يتم تركيبها عشوائيًا
const people = ["واحد صعيدي", "واحد بلدي", "طالب", "مدرس", "غبي", "واحد عريس", "واحد صاحبي"]
const actions = ["راح للدكتور", "دخل الامتحان", "صحى من النوم", "راح يشتري حاجة", "فتح التلاجة", "اتخانق مع صاحبه", "راح المدرسة"]
const results = [
"قاله: كل ما أعمل كده بحس بحاجة غريبة",
"قاله: أنا تعبت من الحياة دي",
"قاله: فهمني بسرعة",
"قاله: أنا مش فاهم حاجة",
"قاله: الدنيا مقلوبة معايا",
"قاله: هو أنا كده طبيعي؟"
]
const punch = [
"الدكتور قاله: عندك مشكلة في التفكير 😂",
"قاله: انت محتاج ترتاح شوية 🤣",
"قاله: انت السبب في المشكلة 😂",
"قاله: روح نام أحسن لك 😆",
"قاله: انت حالة خاصة 😂"
]

// تركيب نكتة عشوائية
const joke =
`${people[Math.floor(Math.random()*people.length)]} ${actions[Math.floor(Math.random()*actions.length)]}
${results[Math.floor(Math.random()*results.length)]}
${punch[Math.floor(Math.random()*punch.length)]}`

await sock.sendMessage(jid, {
text: `😂 *نكتة مصرية تلقائية*\n\n${joke}`
})

}
}
