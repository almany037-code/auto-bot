module.exports = {

name: "منشن",

async execute(sock, msg) {

const from = msg.key.remoteJid

const البيانات =
await sock.groupMetadata(from)

let النص = "📢 منشن للجميع\n\n"

let الأعضاء = []

for (let عضو of البيانات.participants) {

الأعضاء.push(عضو.id)

النص += `@${عضو.id.split("@")[0]}\n`

}

await sock.sendMessage(from, {
text: النص,
mentions: الأعضاء
})

}

}
