module.exports = {

name: "kick",

async execute(sock, msg) {

const from = msg.key.remoteJid

if (!from.endsWith("@g.us")) return

const mentioned =
msg.message.extendedTextMessage?.contextInfo?.mentionedJid

if (!mentioned) return

await sock.groupParticipantsUpdate(
from,
mentioned,
"remove"
)

}

}
