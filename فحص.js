module.exports = {
name: "فحص",

execute: async (sock, msg) => {

await sock.sendMessage(msg.key.remoteJid, {
text: "🏓 البوت يعمل بشكل طبيعي"
})
}
}
