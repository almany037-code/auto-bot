const axios = require("axios")

module.exports = {
name: "بحث",

execute: async (sock, msg, text) => {

const jid = msg.key.remoteJid

const query = text.split(" ").slice(1).join(" ").trim()

if (!query) {
return sock.sendMessage(jid, {
text: "❌ اكتب كلمة البحث\nمثال: .بحث مصر"
})
}

try {

// 1️⃣ البحث عن أقرب عنوان
const searchUrl = `https://ar.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(query)}&limit=1&namespace=0&format=json`

const searchRes = await axios.get(searchUrl, {
headers: {
"User-Agent": "Mozilla/5.0"
}
})

const data = searchRes.data

if (!data[1] || data[1].length === 0) {
return sock.sendMessage(jid, {
text: "❌ مفيش نتائج في ويكيبيديا"
})
}

const title = data[1][0]

// 2️⃣ جلب التفاصيل
const infoUrl = `https://ar.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`

const infoRes = await axios.get(infoUrl, {
headers: {
"User-Agent": "Mozilla/5.0"
},
timeout: 10000,
validateStatus: () => true
})

if (infoRes.status !== 200 || !infoRes.data?.extract) {
return sock.sendMessage(jid, {
text: "❌ مفيش تفاصيل عن النتيجة"
})
}

const info = infoRes.data

await sock.sendMessage(jid, {
text: `
🔎 *نتيجة البحث من ويكيبيديا*

📌 العنوان:
${info.title}

📖 المعلومات:
${info.extract}

🌐 الرابط:
https://ar.wikipedia.org/wiki/${encodeURIComponent(title)}
`
})

} catch (err) {

await sock.sendMessage(jid, {
text: "❌ حصل خطأ في البحث، حاول تاني"
})

}

}
}
