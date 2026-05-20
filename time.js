module.exports = {

name: "الوقت",

async execute(sock, msg) {

const الوقت =
new Date().toLocaleTimeString("ar-EG")

await sock.sendMessage(
msg.key.remoteJid,
{
text: `🕒 الوقت الآن : ${الوقت}`
}
)

}

}
