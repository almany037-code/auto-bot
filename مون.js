module.exports = {

name: "مون",

async execute(sock, msg) {

const from = msg.key.remoteJid

const النص = `
👑 لوحة المـو͠ن

👋 أهلاً بيك يا مـو͠ن

📌 أوامر التحكم الخاصة:

🛠️ اكتب .تحكم لعرض أدوات الإدارة
⚙️ اكتب .اوامر لعرض كل الصلاحيات

──────────────────

📱 01023372465
🎵 TikTok: https://www.tiktok.com/@alma_ny?_r=1&_t=ZS-96UqXhbYsjf
`

await sock.sendMessage(from, {
text: النص
})

}

}
