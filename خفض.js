module.exports = {

name: "خفض",

async execute(sock, msg, text) {

const from = msg.key.remoteJid

if (!text.includes("@")) {
return sock.sendMessage(from, {
text: "❌ منشن الشخص"
})
}

const jid = text.split(" ")[1].replace("@", "") + "@s.whatsapp.net"

try {

await sock.groupParticipantsUpdate(from, [jid], "demote")

await sock.sendMessage(from, {
text: "⬇️ تم خفض العضو من الأدمن"
})

} catch (e) {

console.log(e)

await sock.sendMessage(from, {
text: "❌ حصل خطأ أثناء تنفيذ الأمر"
})

}

}

}
