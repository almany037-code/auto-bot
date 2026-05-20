module.exports = {

name: "طرد",

async execute(sock, msg, text) {

const from = msg.key.remoteJid

if (!text.includes("@")) {
return sock.sendMessage(from, { text: "❌ منشن الشخص" })
}

const jid = text.split(" ")[1].replace("@", "") + "@s.whatsapp.net"

await sock.groupParticipantsUpdate(from, [jid], "remove")

await sock.sendMessage(from, { text: "✅ تم طرد العضو" })

}

}
