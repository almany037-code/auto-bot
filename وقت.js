module.exports = {
name: "وقت",

execute: async (sock, msg) => {

const now = new Date().toLocaleString("ar-EG")

await sock.sendMessage(msg.key.remoteJid, {
text: `⏰ الوقت الآن:\n${now}`
})

}
}
