module.exports = {

name: "قفل",

async execute(sock, msg) {

await sock.groupSettingUpdate(
msg.key.remoteJid,
"announcement"
)

await sock.sendMessage(
msg.key.remoteJid,
{
text: "🔒 تم قفل الجروب"
}
)

}

}
