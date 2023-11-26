const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': pickRandom(['pQiw9LeYKq5gNfB', 'ZsXyfTFQE3vYjNO', 'mrq2hB5spVLIsgk', 'OgZcHhxFMANBcrp', 'Dvg3sqhgQLupk4I', 'pwODfRvUsJlhcWi', '7xu7jm5yJP2vFj7', 'h7P4WkxCXIIxv3c']), // 👉 login https://api.zeeoneofc.my.id to get apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "6088374397:AAFXb900daKCUthMuhngL9H262VkSRLyJ2Y" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "TsukasaBotz Telegram" //your bot name
global.OWNER_NAME = "ᴹᴿ᭄ Anime Editzོ ×፝֟͜×" //your name
global.OWNER_NUMBER = "6282339922441" //your telegram number
global.OWNER = ["https://t.me/anime_editz_26", "https://t.me/jayaeditz_26"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
