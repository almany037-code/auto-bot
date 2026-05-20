module.exports = {

name: "تحكم",

async execute(sock, msg) {

const from = msg.key.remoteJid

const النص = `
🛠️ لوحة التحكم الخاصة

👥 إدارة الجروبات:
.طرد
.تنزيل
.منشن

🔐 الحماية:
.قفل
.فتح
.منع الروابط
.منع السبام

⚙️ البوت:
.إعادة تشغيل
.حالة
.اوامر

🤖 الذكاء:
.ذكاء
.صورة
.بحث
`

await sock.sendMessage(from, {
text: النص
})

}

}
