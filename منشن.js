module.exports = {
name: "منشن",

execute: async (sock, msg) => {

const jid = msg.key.remoteJid

const meta = await sock.groupMetadata(jid)

const users = meta.participants.map(p => p.id)

let text = "📢 منشن للجميع:\n\n"

for (let p of meta.participants) {
text += `@${p.id.split("@")[0]}\n`
}

await sock.sendMessage(jid, {
text,
mentions: users
})
}
}
