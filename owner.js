module.exports = {

name: "المالك",

async execute(sock, msg) {

const from = msg.key.remoteJid

const ownerText = `
╔══════════════════════╗

        المـو͠ن

╠══════════════════════╣

👑 المطور الرسمي للبوت

📱 الرقم :
01023372465

🎵 تيك توك :
https://www.tiktok.com/@alma_ny?_r=1&_t=ZS-96UqXhbYsjf

🤖 مطور بوتات واتساب
🛡️ حماية وإدارة جروبات
⚡ أوامر احترافية وسريعة

╠══════════════════════╣

🔥 بوت المـو͠ن يعمل بكفاءة

╚══════════════════════╝
`

await sock.sendMessage(from, {
text: ownerText
})

}

}
