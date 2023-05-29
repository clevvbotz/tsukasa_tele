const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeone.my.id', //apabila link api eror, segera laporkan ke owner
   jaya: 'https://happy-jeans-fox.cyclic.app',
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.zeeone.my.id': 'pQiw9LeYKq5gNfB', // 👉 login https://api.zeeoneofc.my.id to get apikey
   'https://happy-jeans-fox.cyclic.app': 'Ke6J9btNRV',
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "5883281799:AAHdlXukw3G0FcMpuiam1Svr0Ze68RnVa9g" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "ClevvBotz Telegram" //your bot name
global.OWNER_NAME = "Mr.Clevv" //your name
global.OWNER_NUMBER = "6289524664142" //your telegram number
global.OWNER = ["https://t.me/jayaeditz_26", "https://t.me/anime_editz_26"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change
