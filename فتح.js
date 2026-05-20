module.exports = {

name: "فتح",

async execute(sock, msg) {

await sock.groupSettingUpdate(
msg.key.remoteJid,
"not_announcement"
)

await sock.sendMessage(
msg.key.remoteJid,
{
text: "🔓 تم فتح الجروب"
}
)

}

}
