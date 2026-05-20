module.exports = {

name: "قل",

async execute(sock, msg, text) {

const الكلام =
text.split(" ").slice(1).join(" ")

if (!الكلام) return

await sock.sendMessage(
msg.key.remoteJid,
{
text: الكلام
}
)

}

}
