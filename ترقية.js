module.exports = {
name: "ترقية",

execute: async (sock, msg) => {

const jid = msg.key.remoteJid

const user =
msg.message.extendedTextMessage?.contextInfo?.contextInfo?.mentionedJid?.[0] ||
msg.message.extendedTextMessage?.contextInfo?.mentionedJid?.[0]

if (!user) {
return sock.sendMessage(jid, { text: "❌ منشن الشخص" })
}

await sock.groupParticipantsUpdate(jid, [user], "promote")

await sock.sendMessage(jid, {
text: "👑 تم ترقية العضو بالمنشن"
})
}
}
