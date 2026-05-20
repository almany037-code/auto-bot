module.exports = {
name: "حالة",

execute: async (sock, msg) => {

await sock.sendMessage(msg.key.remoteJid, {
text: "🤖 البوت يعمل بشكل طبيعي ✔"
})

}
}
