const axios = require("axios")

module.exports = {
  name: "صور",

  execute: async (sock, msg, text) => {

    const jid = msg.key.remoteJid

    const query = text.split(" ").slice(1).join(" ").trim()

    if (!query) {
      return sock.sendMessage(jid, {
        text: "❌ اكتب كلمة البحث\nمثال: .صور قطط"
      })
    }

    try {

      const res = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: query,
          per_page: 30
        },
        headers: {
Authorization: "Client-ID bo_QZQqilBncP1IOAYhpo_LIcU9fiu1PQN3Ni6PIVQcGUk"
        }
      })

      const results = res.data.results

      if (!results || results.length === 0) {
        return sock.sendMessage(jid, {
          text: "❌ مفيش صور متاحة"
        })
      }

      const img = results[Math.floor(Math.random() * results.length)]

      await sock.sendMessage(jid, {
        image: { url: img.urls.regular },
        caption: `🖼️ ${query}`
      })

    } catch (err) {
      console.log(err)
      sock.sendMessage(jid, {
        text: "❌ حصل خطأ في جلب الصور"
      })
    }

  }
}
