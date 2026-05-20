const yts = require("yt-search")

module.exports = {
name: "يوتيوب",

execute: async (sock, msg, text) => {

const jid = msg.key.remoteJid

const query = text.split(" ").slice(1).join(" ").trim()

if (!query) {
return sock.sendMessage(jid, {
text: "❌ اكتب كلمة البحث\nمثال: .يوتيوب اغنية"
})
}

try {

const result = await yts(query)

if (!result.videos.length) {
return sock.sendMessage(jid, {
text: "❌ مفيش نتائج"
})
}

const video = result.videos[0]

await sock.sendMessage(jid, {
text: `
🎬 *نتيجة يوتيوب*

📌 العنوان: ${video.title}
👤 القناة: ${video.author.name}
⏱️ المدة: ${video.timestamp}
👀 المشاهدات: ${video.views}

🔗 الرابط:
${video.url}
`
})

} catch (err) {

console.log(err)

await sock.sendMessage(jid, {
text: "❌ حصل خطأ في يوتيوب، حاول تاني"
})

}

}
}
