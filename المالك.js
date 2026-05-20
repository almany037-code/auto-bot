module.exports = {

name: "المالك",

async execute(sock, msg) {

const from = msg.key.remoteJid

const buttons = [
{ buttonId: ".معلومات", buttonText: { displayText: "📊 معلومات" }, type: 1 },
{ buttonId: ".تحكم", buttonText: { displayText: "🛠️ تحكم" }, type: 1 }
]

const message = {
text: `
👑 المـو͠ن | المطور

👋 أهلاً بيك في بروفايل المطور

📱 الرقم: 01023372465
🎵 تيك توك: https://www.tiktok.com/@alma_ny?_r=1&_t=ZS-96UqXhbYsjf
`,
buttons: buttons,
headerType: 1
}

await sock.sendMessage(from, message)

}

}
