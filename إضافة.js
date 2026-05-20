module.exports = {
name: "إضافة",

execute: async (sock, msg) => {

const jid = msg.key.remoteJid

const user =
msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0]

if (!user) {
return sock.sendMessage(jid, { text: "❌ منشن الشخص اللي عايز تضيفه" })
}

await sock.groupParticipantsUpdate(jid, [user], "add")

await sock.sendMessage(jid, {
text: "✅ تم إضافة العضو بالمنشن"
})
}
}
