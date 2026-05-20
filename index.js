const fs = require("fs")
const qrcode = require("qrcode-terminal")

const {
default: makeWASocket,
useMultiFileAuthState,
DisconnectReason
} = require("@whiskeysockets/baileys")

async function startBot() {

const { state, saveCreds } = await useMultiFileAuthState("./session")

const sock = makeWASocket({
auth: state,
printQRInTerminal: false,
logger: require("pino")({ level: "silent" }),
browser: ["BOT", "Chrome", "1.0.0"]
})

// حفظ الجلسة
sock.ev.on("creds.update", saveCreds)

sock.ev.on("connection.update", ({ connection, qr, lastDisconnect }) => {

if (qr) {
console.log("📌 QR CODE:")
qrcode.generate(qr, { small: true })
}

if (connection === "open") {
console.log("✅ BOT CONNECTED")
}

if (connection === "close") {

const statusCode = lastDisconnect?.error?.output?.statusCode

if (statusCode !== DisconnectReason.loggedOut) {
console.log("❌ RESTARTING...")
setTimeout(startBot, 3000)
} else {
console.log("⚠️ LOGGED OUT")
}
}

})

// 📩 الرسائل
sock.ev.on("messages.upsert", async ({ messages }) => {

const msg = messages[0]
if (!msg.message) return

const jid = msg.key.remoteJid

const text =
msg.message.conversation ||
msg.message.extendedTextMessage?.text ||
""

// ❌ لازم يبدأ بـ .
if (!text.startsWith(".")) return

const command = text.slice(1).split(" ")[0].toLowerCase()

console.log("📩 CMD:", command)

// قراءة الأوامر
const folders = fs.readdirSync("./commands")

for (const folder of folders) {

const files = fs.readdirSync(`./commands/${folder}`)

for (const file of files) {

if (!file.endsWith(".js")) continue

const path = `./commands/${folder}/${file}`

delete require.cache[require.resolve(path)]

const cmd = require(path)

if (!cmd?.name || !cmd?.execute) continue

if (cmd.name.toLowerCase() === command) {

try {
await cmd.execute(sock, msg, text)
} catch (e) {
console.log("❌ ERROR:", e.message)

await sock.sendMessage(jid, {
text: "❌ حصل خطأ في الأمر"
})
}

}

}

}

})

}

startBot()
