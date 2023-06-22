require("./settings")
const {
    Telegraf,
    Context
} = require('telegraf')
const {
    message,
    editedMessage,
    channelPost,
    editedChannelPost,
    callbackQuery
} = require("telegraf/filters");
const chalk = require('chalk')
const fs = require('fs')
const fetch = require('node-fetch')
const os = require('os')
const speed = require('performance-now')
const util = require('util')
const yts = require('yt-search')

const {
    simple
} = require('./lib/myfunc')

module.exports = alpha = async (alpha, bot) => {
    //console.log(alpha)
    try {
        const body = alpha.message.text || alpha.message.caption || ''
        const budy = (typeof alpha.message.text == 'string' ? alpha.message.text : '')
        const {
            isUrl
        } = simple
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)
        const prefix = isCmd ? body[0] : ''
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const user = simple.getUserName(alpha.message.from)
        const pushname = user.full_name;
        const user_id = alpha.message.from.id + " "
        const username = alpha.message.from.username ? alpha.message.from.username : "jayaeditz_26";
        const isCreator = OWNER[0].replace("https://t.me/", '') == alpha.update.message.from.username
        const from = alpha.message.chat.id

        const isGroup = alpha.chat.type.includes('group')
        const groupName = isGroup ? alpha.chat.title : ''
        /*const chatMember = await alpha.getChatMember(from, user_id)
        const botAdmin = await alpha.getChatMember(from, alpha.botInfo.id)
        const isAdmin = chatMember.status === 'administrator' || chatMember.status === 'creator'
        const isBotAdmin = botAdmin.status === 'administrator' || botAdmin.status === 'creator'*/


        const isImage = alpha.message.hasOwnProperty('photo')
        const isVideo = alpha.message.hasOwnProperty('video')
        const isAudio = alpha.message.hasOwnProperty('audio')
        const isSticker = alpha.message.hasOwnProperty('sticker')
        const isContact = alpha.message.hasOwnProperty('contact')
        const isLocation = alpha.message.hasOwnProperty('location')
        const isDocument = alpha.message.hasOwnProperty('document')
        const isAnimation = alpha.message.hasOwnProperty('animation')
        const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
        const quotedMessage = alpha.message.reply_to_message || {}
        const isQuotedImage = quotedMessage.hasOwnProperty('photo')
        const isQuotedVideo = quotedMessage.hasOwnProperty('video')
        const isQuotedAudio = quotedMessage.hasOwnProperty('audio')
        const isQuotedSticker = quotedMessage.hasOwnProperty('sticker')
        const isQuotedContact = quotedMessage.hasOwnProperty('contact')
        const isQuotedLocation = quotedMessage.hasOwnProperty('location')
        const isQuotedDocument = quotedMessage.hasOwnProperty('document')
        const isQuotedAnimation = quotedMessage.hasOwnProperty('animation')
        const isQuoted = alpha.message.hasOwnProperty('reply_to_message')
        const timestampi = speed();
        const latensii = speed() - timestampi

        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
                return await alpha.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
        const getStyle = (style_, style, style2) => {
            listt = `${lang.getStyle(style, style2)}`
            for (var i = 0; i < 300; i++) {
                listt += '» `' + style_[i] + '`\n'
            }
            reply(listt)
        }

        //get type message 
        var typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = 'Image'
        else if (isVideo) typeMessage = 'Video'
        else if (isAudio) typeMessage = 'Audio'
        else if (isSticker) typeMessage = 'Sticker'
        else if (isContact) typeMessage = 'Contact'
        else if (isLocation) typeMessage = 'Location'
        else if (isDocument) typeMessage = 'Document'
        else if (isAnimation) typeMessage = 'Animation'

        //push message to console
        if (alpha.message) {
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body || typeMessage)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname) + '\n' + chalk.blueBright('=> In'), chalk.green(isGroup ? groupName : 'Private Chat', alpha.message.chat.id))
        }
        switch (command) {
            case "tes": {
                reply("`I'm here`")
            }
            break
            case 'owner':
            case 'creator': {
                await alpha.sendContact(OWNER_NUMBER, OWNER_NAME)
                reply(`My lord [${OWNER_NAME}](${OWNER[0]}) 👑`)
            }
            break
            case 'sc':
            case 'script':
            case 'scrip': {
                alpha.reply("Source code this bot", {
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                text: 'Github',
                                url: "https://github.com/zeeoneofficial/telebot"
                            }, {
                                text: 'YouTube',
                                url: "https://www.youtube.com/@zeeoneofc"
                            }]
                        ]
                    }
                })
            }
            break
            case "privacy":
            case "snk": {
                reply(lang.snk)
            }
            break
            case 'menu':
            case 'panel':
            case 'help': {
                let hit_total;
                try {
                    hit_total = await simple.fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
                } catch {
                    hit_total = {
                        value: "-"
                    }
                }
                hitall = `${hit_total.value == undefined ? '-' : hit_total.value}`
                let dnew = new Date(new Date + 3600000)
                let week = dnew.toLocaleDateString('en', {
                    weekday: 'long'
                })
                let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
                let date = dnew.toLocaleDateString('en', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })
                let dateIslamic = Intl.DateTimeFormat('en' + '-TN-u-ca-islamic', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                }).format(dnew)
                var listaudio = ["toiletboundhanakokun", "tinylight", "mephisto", "idol"]
                var audio = listaudio[Math.floor(Math.random() * listaudio.length)]
                lang.menu(alpha, THUMBNAIL, pushname, OWNER_NAME, OWNER, prefix, hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, alpha.message.from.id.toString())
                alpha.replyWithVoice({ source: fs.createReadStream(`./audio/${audio}.mp3`) })
            }
            break
            //anime
            case "akame":
            case "anna":
            case "asuna-yuki":
            case "ayuzawa":
            case "chitoge":
            case "emilia":
            case "erza":
            case "hinata":
            case "inori":
            case "kaga-kouko":
            case "kaori-miyazono":
            case "kotori-minami":
            case "killua":
            case "mikasa":
            case "mio-akiyama":
            case "mizore-sirayuki":
            case "nakiri-alice":
            case "naruto":
            case "riyas-gremori":
            case "sakura":
            case "sento-isuzu":
            case "shana":
            case "shiina":
            case "shinka":
            case "winry":
            case "yukino":
            case "yuzuki":
            case "mikosiba":
            case "luffy":
            case "zoro":
            case "ussop":
            case "sanji":
            case "minato":
            case "boruto":
            case "sarada":
            case "mitsuki":
            case "orochimaru":
            case "tsunade":
            case "kakashi":
            case "rimuru":
            case "sagiri":
            case "natsu":
            case "tanjirou": {
                reply(lang.wait)
                let { pinterest } = require('./lib/scraper')
                let res = await pinterest(command)
                let result = res[Math.floor(Math.random() * res.length)]
                alpha.replyWithPhoto({
                    url: result
                }, {
                    caption: lang.ok
                })
            }
            break
            //Asupan
            case 'chika':
            case 'rikagusriani':
            case 'bocil':
            case 'geayubi':
            case 'santuy':
            case 'ukhty':
            case 'asupan':
            case 'delvira':
            case 'ayu':
            case 'bunga':
            case 'aura':
            case 'nisa':
            case 'ziva':
            case 'yana':
            case 'viona':
            case 'syania':
            case 'riri':
            case 'syifa':
            case 'mama-gina':
            case 'alcakenya':
            case 'mangayutri': {
                reply(lang.wait)
                let ini_url = global.api('alfa', '/api/asupan/' + command, {}, 'apikey')
                let res = await fetch(ini_url)
                if (!res.ok) throw await res.text()
                alpha.replyWithVideo({
                    url: ini_url
                }, {
                    caption: lang.ok
                })
            }
            break
            //cecan
            case 'china':
            case 'indonesia':
            case 'malaysia':
            case 'thailand':
            case 'korea':
            case 'japan':
            case 'vietnam': {
                reply(lang.wait)
                let ini_url = global.api('jaya', '/api/cecan/' + command, {}, 'apikey')
                let res = await fetch(ini_url)
                if (!res.ok) throw await res.text()
                alpha.replyWithPhoto({
                    url: ini_url
                }, {
                    caption: lang.ok
                })
            }
            break
            //cogan
            case "wuyifan":
            case "suga":
            case "parkchanyeol":
            case "ohsehun":
            case "luhan":
            case "kimtaehyung":
            case "kimseok":
            case "kimnanjoon":
            case "kimminseok":
            case "kimjunmyeon":
            case "kimjong":
            case "kimjondae":
            case "jungkook":
            case "jimin":
            case "jhope":
            case "huangzitao":
            case "dohkyungsoo":
            case "baekhyung": {
                reply(lang.wait)
                let { pinterest } = require('./lib/scraper')
                var res = await pinterest(command)
                var result = res[Math.floor(Math.random() * res.length)]
                alpha.replyWithPhoto({
                    url: result
                }, {
                    caption: lang.ok
                })
            }
            break
            //random image
            case "aesthetic":
            case "anjing":
            case "boneka":
            case "hekel":
            case "justina":
            case "kpop":
            case "kucing":
            case "mobil":
            case "motor":
            case "pubg":
            case "rose":
            case "ryujin":
            case "wallhp": {
            	reply(lang.wait)
                let { pinterest } = require('./lib/scraper')
                var res = await pinterest(command)
                var result = res[Math.floor(Math.random() * res.length)]
                alpha.replyWithPhoto({
                    url: result
                }, {
                    caption: lang.ok
                })
            }
            break
            case "darkjoke":
            case "memeindo": {
            	reply(lang.wait)
                alpha.replyWithPhoto({
                    url: `https://api.lolhuman.xyz/api/meme/${command}?apikey=${apikey}`
                }, {
                    caption: lang.ok
                })
            }
            break
            case "randomkopi":
            case "randomcoffe": {
            	reply(lang.wait)
                alpha.replyWithPhoto({
                    url: 'https://coffee.alexflipnote.dev/random'
                }, {
                    caption: lang.ok
                })
            }
            break
            //random quotes
            case "bucin":
            case "truth":
            case "dare": {
                reply(lang.wait);
                let { bucin, truth, dare } = require('@bochilteam/scraper');
                var result
                if (command === "bucin") {
                result = await bucin()
                } else if (command === "truth") {
                result = await truth()
                } else if (command === "dare") {
                result = await dare()
                }
              reply(result)
           }
           break
           case "pantun":
           case "puisi":
           case "faktaunik":
           case "katabijak": 
           case "quotesdilan": {
           	reply(lang.wait)
               var res = await fetch(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
               if (!res.ok) throw await message.text()
               var result = await res.json()
               var result = result.result
               reply(result)
            }
            break
            case "quotesislam": {
            	reply(lang.wait)
                var res = await fetch(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${apikey}`)
                if (!res.ok) throw await message.text()
                var result = await res.json()
                var result = result.result
                reply(result)
            }
            break
            case "quotesanime": {
            	reply(lang.wait)
                var res = await fetch(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${apikey}`)
                if (!res.ok) throw await message.text()
                var result = await res.json()
                var result = result.result
                var capt = `Quotes: ${result.quote}\nKarakter: ${result.character}\n\nAnime: ${result.anime}\nEpisode: ${result.episode}`
                reply(capt)
            }
            break
            case "quotesimage":
            case "quotesgambar": {
                reply(lang.wait)
                alpha.replyWithPhoto({
                    url: 'https://api.lolhuman.xyz/api/random/quotesimage?apikey=${apikey}'
                }, {
                    caption: lang.ok
                })
            }
            break
            //download
            case 'youtube':
            case 'yt':
            case 'ytv':
            case 'mp4':
            case 'ytmp4':
            case 'ytshorts':
            case 'ytshort': {
                if (!text) return reply(`Kirim perintah:\n${prefix+command} link youtube\n\nContoh penggunaan:\n${prefix+command} https://youtu.be/kwop2Eg5QY4`)
                if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link youtube\n\nContoh penggunaan:\n${prefix+command} https://youtu.be/kwop2Eg5QY4`)
                if (!args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return reply(`Kirim perintah:\n${prefix+command} link youtube\n\nContoh penggunaan:\n${prefix+command} https://youtu.be/kwop2Eg5QY4`)
                reply(lang.wait)
                let res = await fetch(global.api('jaya', '/api/download/ytmp4', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var {
                    id,
                    thumbnail,
                    title,
                    size,
                    download
                } = result
                var getdl = await simple.fetchJson(`https://tinyurl.com/api-create.php?url=${download}`)
                let key = "「 YOUTUBE VIDEO 」\n\n"
                key += `• Id: ${id}\n`
                key += `• Title: ${title}\n`
                key += `• Size: ${size}\n`
                key += `• Download: ${getdl.data}\n\n`
                key += `Ukuran media melebihi batas, silahkan download sendiri melalui link di atas.`
                if (size > 100000) { //batas download 50mb, tamabahin jika kurang (misal 100mb = 100000)
                    await alpha.replyWithPhoto({
                        url: thumbnail
                    }, {
                        caption: key
                    })
                } else {
                    await alpha.replyWithPhoto({
                        url: thumbnail
                    }, {
                        caption: key,
                        parse_mode: 'Markdown'
                    })
                    alpha.replyWithVideo({
                        url: download
                    }, {
                        caption: lang.ok
                    })

                }
            }
            break
            case 'ytshortsmp3':
            case 'ytshortmp3':
            case 'mp3':
            case 'ytmp3':
            case 'yta': {
                if (!text) return reply(`Kirim perintah:\n${prefix+command} link youtube\n\nContoh penggunaan:\n${prefix+command} https://youtu.be/kwop2Eg5QY4`)
                if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link youtube\n\nContoh penggunaan:\n${prefix+command} https://youtu.be/kwop2Eg5QY4`)
                if (!args[0].includes('youtu.be') && !args[0].includes('youtube.com')) return reply(`Kirim perintah:\n${prefix+command} link youtube\n\nContoh penggunaan:\n${prefix+command} https://youtu.be/kwop2Eg5QY4`)
                reply(lang.wait)
                let res = await fetch(global.api('jaya', '/api/download/ytmp3', {
                    url: args[0]
                }, 'apikey'))
                if (!res.ok) throw await res.text()
                var result = await res.json()
                var {
                    id,
                    thumbnail,
                    title,
                    size,
                    download,
                    url
                } = result
                var getdl = await simple.fetchJson(`https://tinyurl.com/api-create.php?url=${download}`)
                let key = "「 YOUTUBE AUDIO 」\n\n"
                key += `• Id: ${id}\n`
                key += `• Title: ${title}\n`
                key += `• Size: ${size}\n`
                key += `• Download: ${getdl.data}\n\n`
                key += `Ukuran media melebihi batas, silahkan download sendiri melalui link di atas.`
                if (size > 100000) { //batas download 50mb, tamabahin jika kurang (misal 100mb = 100000)
                    await alpha.replyWithPhoto({
                        url: thumbnail
                    }, {
                        caption: key
                    })
                } else {
                    await alpha.replyWithPhoto({
                        url: thumbnail
                    }, {
                        caption: key
                    })
                    await alpha.replyWithAudio({
                        url: download,
                        filename: title
                    })
                }
            }
            break
            case 'play': {
                if (!text) return reply(`Kirim perintah:\n${prefix+command} judul lagu\n\nContoh penggunaan:\n\`${prefix+command} bot WhatsApp Zeeoneofc\``)
                //if (isUrl(text)) return reply(`Kirim perintah:\n${prefix+command} judul lagu\n\nContoh penggunaan:\n${prefix+command} bot WhatsApp Zeeoneofc`)
                reply(lang.wait)
                let search = await yts(text)
                let res = search.videos[Math.floor(Math.random() * search.videos.length)]
                var {
                    videoId,
                    thumbnail,
                    title,
                    views,
                    timestamp,
                    author,
                    ago,
                    url
                } = res
                let thumbInfo = `*「 YOUTUBE PLAY 」*

🆔 ID : ${videoId}
💬 Title : ${title}
📺 Views : ${views}
⏰ Duration : ${timestamp}
▶️ Author : ${author.name}
💻 Channel : ${author.url}
📆 Upload : ${ago}
🔗 URL Video : ${url}

Kirim berikut perintah untuk mendownload media
${prefix}ytmp3 ${url}
${prefix}ytmp4 ${url}`
                alpha.replyWithPhoto({
                    url: thumbnail
                }, {
                    caption: thumbInfo,
                    parse_mode: 'MARKDOWN',
                    reply_markup: {
                        inline_keyboard: [
                            [{
                                    text: '🎻 Audio',
                                    callback_data: 'ytmp3 ' + user_id + url
                                },
                                {
                                    text: 'Video 🎦',
                                    callback_data: 'ytmp4 ' + user_id + url
                                }
                            ]
                        ]
                    }
                })
            }
            break
            case 'yts':
            case 'ytsearch': {
                if (!text) return reply(`Kirim perintah:\n${prefix+command} judul lagu/video\n\nContoh penggunaan:\n${prefix+command} bot WhatsApp Zeeoneofc`)
                reply(lang.wait)
                let search = await yts(text)
                let res = search.all
                cap = "「 YOUTUBE SEARCH 」\n\n"
                for (let v = 0; v < 2; v++) {
                    cap += `🆔 ID : ${res[v].videoId}
💬 Title : ${res[v].title}
📺 Views : ${res[v].views}
⏰ Duration : ${res[v].timestamp}
▶️ Author : ${res[v].author.name}
📆 Upload : ${res[v].ago}
🔗 URL Video : ${res[v].url}
📝 Description : ${res[v].description}\n\n---------------------------\n\n`
                }
                alpha.replyWithPhoto({
                    url: search.all[0].thumbnail
                }, {
                    caption: cap
                })
            }
            break
            case 'igphoto':
            case 'instaphoto':
            case 'instafoto':
            case 'igfoto':
            case "ig":
            case "igdl": {
                if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
                if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/p/ClU74LNpgaw/?igshid=YmMyMTA2M2Y=`)
                reply(lang.wait)
                let res = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`)
                if (!res.ok) throw await res.message()
                var result = await res.json()
                var result = result.result
                for (let i of result) {
                    if (i.includes(".mp4")) {
                        alpha.replyWithVideo({
                            url: i
                        }, {
                            caption: lang.ok
                        })
                    } else {
                        alpha.replyWithPhoto({
                            url: i
                        }, {
                            caption: lang.ok
                        })
                    }
                }
            }
            break
            case 'igvideo':
            case 'instavideo':
            case 'instavid':
            case 'igreels':
            case 'instareels':
            case 'instareel': {
                if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
                if (!isUrl(args[0])) return reply(`Kirim perintah:\n${prefix+command} link Instagram video/reels\n\nContoh penggunaan:\n${prefix+command} https://www.instagram.com/reel/CnVwm3KrQRl/?igshid=YmMyMTA2M2Y=`)
                reply(lang.wait)
                var { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } = require('@bochilteam/scraper')
                var result = await instagramdl(args[0]).catch(async _ => await instagramdlv2(args[0])).catch(async _ => await instagramdlv3(args[0])).catch(async _ => await instagramdlv4(args[0]))
                    for (let { url } of result) alpha.replyWithVideo({
                        url: url
                    }, {
                        caption: lang.ok
                    })
            }
            break
            case "pinterest": {
                if (!text) return reply(`Kirim perintah:\n${prefix+command} query\n\nContoh penggunaan:\n${prefix+command} sakura`)
                //if (isUrl(text)) return reply(`Kirim perintah:\n${prefix+command} query\n\nContoh penggunaan:\n${prefix+command} sakura`)
                reply(lang.wait)
                let { pinterest } = require('./lib/scraper')
                let res = await pinterest(text)
                let result = res[Math.floor(Math.random() * res.length)]
                alpha.replyWithPhoto({
                    url: result
                }, {
                    caption: lang.ok
                })
            }
            break
            case "mf":
            case "mediafire": {
                if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link mediafire\n\nContoh penggunaan:\n${prefix+command} https://www.mediafire.com/file/eb14v8x4oz7ok3h/Alphabot-Mdv17.5-withModule.zip/file`)
                if (!isUrl(args[0]) && !args[0].includes("mediafire.com")) return reply(`Kirim perintah:\n${prefix+command} link MediaFire\n\nContoh penggunaan:\n${prefix+command} https://www.mediafire.com/file/eb14v8x4oz7ok3h/Alphabot-Mdv17.5-withModule.zip/file`)
                reply(lang.wait)
                var res = await fetch(`https://api.lolhuman.xyz/api/mediafire?apikey=${apikey}&url=${args[0]}`)
                var result = await res.json()
                var {
                    filename,
                    filetype,
                    filesize,
                    uploaded,
                    link
                } = result.result
                console.log(filesize)
                if (filesize.replace('MB', '') >= 100 || filesize.replace('GB', '') >= 1) { //size edit sendiri jika mau download yang lebih media yang lebih besar
                    var key = `「 Mediafire Download 」\n\n`
                    key += `Nama: ${filename}\n`
                    key += `Tipe: ${filetype}\n`
                    key += `Size: ${filesize}\n`
                    key += `Diupload: ${uploaded}\n`
                    key += `Link: ${link}\n\n`
                    key += `Untuk size lebih dari batas, silahkan download melalui link diatas.`
                    reply(key)
                } else {
                    var key = `「 Mediafire Download 」\n\n`
                    key += `Nama: ${filename}\n`
                    key += `Tipe: ${filetype}\n`
                    key += `Size: ${filesize}\n`
                    key += `Diupload: ${uploaded}\n`
                    key += `Link: ${link}\n\n`
                    key += `Media dalam proses pengiriman, membutuhkan waktu sekitar 5,9 jam silahkan di tunggu.`
                    await reply(key)
                    if (filename.includes(".zip")) {
                        alpha.replyWithDocument({
                            url: link,
                            filename: filename
                        })
                    } else if (filename.includes(".mp4")) {
                        alpha.replyWithVideo({
                            url: link
                        }, {
                            caption: lang.ok
                        })
                    } else if (filename.includes(".mp3")) {
                        alpha.replyWithAudio({
                            url: link,
                            filename: filename
                        })
                    } else {
                        reply("Invalid media type")
                    }
                }
            }
            break
            case "tiktoknowm":
            case "tiktok": {
                if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30®ion=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t×tamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
                if (!isUrl(args[0]) && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30®ion=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t×tamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
                reply(lang.wait)
                var res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${args[0]}`)
                if (!res.ok) throw await res.message()
                var result = await res.json()
                var result = result.result
                alpha.replyWithVideo({
                    url: result.link
                }, {
                    caption: lang.ok
                })
            }
            break
            case "tiktokaudio": {
                if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30®ion=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t×tamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
                if (!isUrl(args[0]) && !args[0].includes("tiktok.com")) return reply(`Kirim perintah:\n${prefix+command} link tiktok video\n\nContoh penggunaan:\n${prefix+command} https://www.tiktok.com/@zeeone.official/video/7210229439744003355?_r=1&u_code=e44201c8bfkd30®ion=ID&mid=7202111782981913370&preview_pb=0&language=id&_d=e0cah74j08m7c7&share_item_id=7210229439744003355&source=h5_t×tamp=1679216331&user_id=7148061777321133083&sec_user_id=MS4wLjABAAAA50SieLfP2YD-R-gqSE3svcPxaPqr_53pA6RKyJUkQo_AreOGrLDiVRnajBVglVIk&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7160625938232592154&share_link_id=6b2fea89-b038-4919-8d58-38b4efba5b9c&share_app_id=1180&ugbiz_name=Main&ug_btm=b8727%2Cb2878`)
                reply(lang.wait)
                var res = await fetch(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${args[0]}`)
                if (!res.ok) throw await res.message()
                var result = await res.json()
                var result = result.result
                alpha.replyWithAudio({
                    url: result,
                    filename: "Tiktok Audio.mp3"
                })
            }
            break
            case "facebook":
            case "facebookdl":
            case "fb":
            case "fbdl": {
            	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link facebook\n\nContoh penggunaan:\n${prefix+command} https://fb.watch/kUjeQqwDuO/?mibextid=YCRy0i`)
                if (!isUrl(args[0]) && !args[0].includes("facebook.com") && !args[0].includes("fb.watch")) return reply(`Kirim perintah:\n${prefix+command} link facebook\n\nContoh penggunaan:\n${prefix+command} https://fb.watch/kUjeQqwDuO/?mibextid=YCRy0i`)
                reply(lang.wait)
                let { facebookdl, facebookdlv2, facebookdlv3, aiovideodl } = require('@bochilteam/scraper')
            	var { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0])).catch(async _ => await facebookdlv3(args[0])).catch(async _ => await aiovideodl(args[0]))
                for (let { url } of result.reverse()) alpha.replyWithVideo({ url: url }, { caption: lang.ok })
            }
            break
            case "twitter":
            case "twitterdl":
            case "twt":
            case "twtdl": {
            	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link twitter\n\nContoh penggunaan:\n${prefix+command} https://twitter.com/nctzenbase/status/1665687410368466945?s=20`)
                if (!isUrl(args[0]) && !args[0].includes("twitter.com")) return reply(`Kirim perintah:\n${prefix+command} link twitter\n\nContoh penggunaan:\n${prefix+command} https://twitter.com/nctzenbase/status/1665687410368466945?s=20`)
                reply(lang.wait)
                let { twitterDl } = require('./lib/scraper')
                let res = await twitterDl(text)
                for (let x = 0; x < res.media.length; x++) {
		           var capt = x === 0 ? res.caption.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, '').trim() : ''
		           alpha.replyWithVideo({ url: res.media[x].url }, { caption: capt })
	            }
	        }
	        break
            case "pixiv": {
            	if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} link pixiv\n\nContoh penggunaan:\n${prefix+command} https://www.pixiv.net/en/artworks/108780960`)
                if (!isUrl(args[0]) && !args[0].includes("pixiv.net")) return reply(`Kirim perintah:\n${prefix+command} link pixiv\n\nContoh penggunaan:\n${prefix+command} https://www.pixiv.net/en/artworks/108780960`)
                reply(lang.wait)
                let { pixivDl } = require('./lib/scraper')
            	let res = await pixivDl(text)
	            for (let i = 0; i < res.media.length; i++) {
		            let capt = i == 0 ? `${res.caption}\n\n• By: ${res.artist}\n• Tags: ${res.tags.join(', ')}` : ''
		            alpha.replyWithDocument({ url: res.media[i] }, { caption: capt })
		        }
		    }
		    break
            case "wikipedia": {
            	if (!text) return reply(`Kirim perintah:\n${prefix+command} pencarianmu\n\nContoh penggunaan:\n${prefix+command} jembatan`)
                reply(lang.wait)
                let { wikipedia } = require('@bochilteam/scraper')
                var res = await wikipedia(text)
                var capt = `${res.title}\n${res.img}\n\n${res.articles}`
                reply(capt)
            }
            break
            case "google": {
            	if (!text) return reply(`Kirim perintah:\n${prefix+command} pencarianmu\n\nContoh penggunaan:\n${prefix+command} jembatan`)
                reply(lang.wait)
            	let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let v = 0; v < 4; v++) {
                teks += `• *Title* : ${res[v].title}\n`
                teks += `• *Description* : ${res[v].snippet}\n`
                teks += `• *Link* : ${res[v].link}\n\n────────────────────────\n\n`
                }
                reply(teks)
                })
            }
            break
            case "gimage":
            case "googleimage": {
            	if (!text) return reply(`Kirim perintah:\n${prefix+command} pencarianmu\n\nContoh penggunaan:\n${prefix+command} jembatan`)
                reply(lang.wait)
                let { wallpaper, wallpaperv2 } = require('@bochilteam/scraper')
                var res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
                var img = res[Math.floor(Math.random() * res.length)]
                alpha.replyWithPhoto({ url: img }, { caption: lang.ok })
            }
            break
            //kerang ajaib
            case "apakah": {
            if (!text) return reply(`Kirim perintah:\n${prefix+command} pertanyaanmu\n\nContoh penggunaan:\n${prefix+command} saya bisa menjadi pragos`)
            var apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
            var kah = apa[Math.floor(Math.random() * apa.length)]
            reply(`Pertanyaan : Apakah ${text}\nJawaban : ${kah}`)
            }
            break
            case "bisakah": {
            if (!text) return reply(`Kirim perintah:\n${prefix+command} pertanyaanmu\n\nContoh penggunaan:\n${prefix+command} saya bisa menjadi pragos`)
            var bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
            var ga = bisa[Math.floor(Math.random() * bisa.length)]
            reply(`Pertanyaan : ${text}\nJawaban : ${ga}`)
            }
            break
            case "kapankah": {
            if (!text) return reply(`Kirim perintah:\n${prefix+command} pertanyaanmu\n\nContoh penggunaan:\n${prefix+command} karya aku`)
            var kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
            var kapankah = kapan[Math.floor(Math.random() * kapan.length)]
            reply(`Pertanyaan : ${text}\nJawaban : ${kapankah}`)
            }
            break
            case "bagaimanakah": {
            if (!text) return reply(`Kirim perintah:\n${prefix+command} pertanyaanmu\n\nContoh penggunaan:\n${prefix+command} saya bisa menjadi pragos`)
            var gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
            var ya = gimana[Math.floor(Math.random() * gimana.length)]
            reply(`Pertanyaan : ${text}\nJawaban : ${ya}`)
            }
            break
            case "rate": {
            if (!text) return reply(`Kirim perintah:\n${prefix+command} pertanyaanmu\n\nContoh penggunaan:\n${prefix+command} karya aku`)
            var ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
            var te = ra[Math.floor(Math.random() * ra.length)]
            reply(`Rate : ${text}\nJawaban : ${te}%`)
            }
            break
            case "gantengcek": 
            case "cekganteng": {
            if (!text) return reply(`Kirim perintah:\n${prefix+command} namamu\n\nContoh penggunaan:\n${prefix+command} husbuku`)
            var gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
            var teng = gan[Math.floor(Math.random() * gan.length)]
            reply(`Nama : ${text}\nJawaban : ${teng}`)
            }
            break
            case "cantikcek": 
            case "cekcantik": {
            if (!text) return reply(`Kirim perintah:\n${prefix+command} namamu\n\nContoh penggunaan:\n${prefix+command} waifuku`)
            var can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
            var tik = can[Math.floor(Math.random() * can.length)]
            reply(`Nama : ${text}\nJawaban : ${tik}`)
            }
            break
            case "sangecek":
            case "ceksange":
            case "gaycek":
            case "cekgay":
            case "lesbicek":
            case "ceklesbi": {
            if (!text) return reply(`Kirim perintah:\n${prefix+command} namamu\n\nContoh penggunaan:\n${prefix+command} pragos`)
            const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
            const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
            reply(`Nama : ${text}\nJawaban : ${sange}%`)
            }
            break
            case "cekmati":
            case "maticek": {
            if (!text) return reply(`Kirim perintah:\n${prefix+command} namamu\n\nContoh penggunaan:\n${prefix+command} asep`)
            var res = await fetch(`https://api.agify.io/?name=${text}`)
            var result = await res.json()
            reply(`Nama : ${result.name}\n*Mati Pada Umur :* ${result.age} Tahun.\n\n_Cepet cepet tobat bro soalnya mati ga ada yang tau_`)
            }
            break
            //group
            /*case "promote":
            case "pm": {
            if (!isGroup) return reply('Perintah ini hanya bisa didalam grup!')
            if (!isAdmin) return reply('Perintah ini hanya bisa digunakan oleh admin!')
            if (!isBotAdmin) return reply('Perintah ini hanya bisa digunakan jika bot menjadi admin!')
            await alpha.promoteChatMember(from, user_id, { can_change_info: true, can_delete_messages: true, can_invite_users: true })
            reply('Admin baru berhasil ditambahkan ke dalam grup!')
            }
            break
            case "demote":
            case "dm": {
            if (!isGroup) return reply('Perintah ini hanya bisa didalam grup!')
            if (!isAdmin) return reply('Perintah ini hanya bisa digunakan oleh admin!')
            if (!isBotAdmin) return reply('Perintah ini hanya bisa digunakan jika bot menjadi admin!')
            await alpha.restrictChatMember(from, user_id, { can_change_info: false, can_delete_messages: false, can_invite_users: false })
            reply('Berhasil menghapus status admin dari grup!')
            }
            break
            case "add": {
            if (!isGroup) return reply('Perintah ini hanya bisa didalam grup!')
            if (!isAdmin) return reply('Perintah ini hanya bisa digunakan oleh admin!')
            if (!isBotAdmin) return reply('Perintah ini hanya bisa digunakan jika bot menjadi admin!')
            await alpha.addChatMember(from, user_id)
            reply('Berhasil menambahkan peserta ke dalam grup!')
            }
            break
            case "kick":
            case "k": {
            if (!isGroup) return reply('Perintah ini hanya bisa didalam grup!')
            if (!isAdmin) return reply('Perintah ini hanya bisa digunakan oleh admin!')
            if (!isBotAdmin) return reply('Perintah ini hanya bisa digunakan jika bot menjadi admin!')
            await alpha.kickChatMember(from, user_id)
            reply('Berhasil mengeluarkan peserta dari grup!')
            }
            break
            case "ban": {
            if (!isGroup) return reply('Perintah ini hanya bisa didalam grup!')
            if (!isAdmin) return reply('Perintah ini hanya bisa digunakan oleh admin!')
            if (!isBotAdmin) return reply('Perintah ini hanya bisa digunakan jika bot menjadi admin!')
            await alpha.kickChatMember(from, user_id)
            await alpha.banChatMember(from, user_id)
            reply('Berhasil banned peserta dari grup!')
            }
            break
            case "unban": {
            if (!isGroup) return reply('Perintah ini hanya bisa didalam grup!')
            if (!isAdmin) return reply('Perintah ini hanya bisa digunakan oleh admin!')
            if (!isBotAdmin) return reply('Perintah ini hanya bisa digunakan jika bot menjadi admin!')
            await alpha.unbanChatMember(from, user_id)
            reply('Berhasil unban peserta dari grup!')
            }
            break
            case "listgc":
            case "listgroup": {
            const chatList = await alpha.getChatList()
            const groupCount = chatList.filter((chat) => chat.type === 'group').length
            reply(`Jumlah grup saat ini adalah: ${groupCount}`)
            }
            break
            case "listpc":
            case "listchat": {
            const chatList = await alpha.getChatList()
            const chatCount = chatList.length
            reply(`Jumlah chat saat ini adalah: ${chatCount}`)
            }
            break*/
            //semoji
               /*case "apple":
               case "aubykddi":
               case "docomo":
               case "softbank":
               case "mozilla":
               case "htc":
               case "lg":
               case "messenger":
               case "emojidex":
               case "openmoji":
               case "joypixels":
               case "facebook2":
               case "twitter2":
               case "whatsapp":
               case "microsoft":
               case "samsung":
               case "google": {
                   reply(lang.wait)
                   if (!args[0]) return reply(`Kirim perintah:\n${prefix+command} emoji\n\nContoh penggunaan:\n${prefix+command} 😎`)
                   let res = await fetch(global.api('alfa', '/api/emoji/' + command, {
                       emoji: args[0]
                   }, 'apikey'))
                   if (!res.ok) throw await res.text()
                   let img = await res.buffer()
                   let savestik = await alpha.replyWithSticker({ source: img })
                   await fs.unlinkSync(savestik)
               }
               break*/
             //Open Ai Chat Gpt
          case 'ai': case 'openai': case 'chatgpt': {
          try {
            if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
            const configuration = new Configuration({
              apiKey: `${aikey}`,
            });
            const openai = new OpenAIApi(configuration);

            /*const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: text,
              temperature: 0, // Higher values means the model will take more risks.
              max_tokens: 2048, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
              top_p: 1, // alternative to sampling with temperature, called nucleus sampling
              frequency_penalty: 0.3, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
              presence_penalty: 0 // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
          });
            m.reply(`${response.data.choices[0].text}`);*/
            const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: text}],
          });
          reply(`${response.data.choices[0].message.content}`);
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
        }
          break;
        case "img": case "ai-img": case "image": case "images": {
          try {
            if (!text) return reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`);
            const configuration = new Configuration({
              apiKey: `${aikey}`,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            conn.sendMessage(m.chat, { image: response.data.data[0].url }, text);
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
        }
        break
        //ephoto360
        case 'wetglass':
		case 'multicolor3d':
		case 'watercolor':
		case 'luxurygold':
		case 'galaxywallpaper':
		case 'lighttext':
		case 'beautifulflower':
		case 'puppycute':
		case 'royaltext':
		case 'heartshaped':
		case 'birthdaycake':
		case 'galaxystyle':
		case 'hologram3d':
		case 'greenneon':
		case 'glossychrome':
		case 'greenbush':
		case 'metallogo':
		case 'noeltext':
		case 'glittergold':
		case 'textcake':
		case 'starsnight':
		case 'wooden3d':
		case 'textbyname':
		case 'writegalacy':
		case 'galaxybat':
		case 'snow3d':
		case 'birthdayday':
		case 'goldplaybutton':
		case 'silverplaybutton':
		case 'freefire': {
			if (!text) return reply(`Example: ${prefix + command} Your Text`)
			reply(lang.wait)
			alpha.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${text}` }, { caption: lang.ok })
		}
		break
            // Creator Image
	        case 'bucinsertifikat':
		    case 'sertifikatbucin':
			case 'bucincert': {
				if (args.length == 0) return reply(`Example: ${prefix + command} Justimun Kentod`)
				reply(lang.wait)
				var kueri = args.join(" ")
                alpha.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${apikey}&name=${kueri}`}, { caption: lang.ok })
            }
            break
            
			case 'tololsert':
			case 'tololcert':
			case 'tololsertifikat': {
			if (!text) return reply(`Example: ${prefix + command} Justimun Kentod`)
			reply(lang.wait)
			var ytta = args.join(" ")
            alpha.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/toloserti?apikey=${apikey}&name=${ytta}`}, { caption: lang.ok })
            }
            break
            
			case 'pacarsertifikat':
			case 'pacarcert': {
            if (!text) return reply(`Usage: ${prefix + command} nama1|nama2`)
            reply(lang.wait)
            var get_args = args.join(" ").split("|")
            var nik = get_args[0]
            var prov = get_args[1]
			var titidnya = `Selamat yaa ${nik} ❤️ ${prov}`
			alpha.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${apikey}&name1=${nik}&name2=${prov}` }, { caption: titidnya })
            }
            break
	        
	        case 'carbon': {
	            if (!text) return reply(`Example: ${prefix + command} const adrian = required('adrian-api')`)
	            reply(lang.wait)
	            alpha.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/carbon?apikey=${apikey}&code=${text}&language=nodejs` }, { caption: lang.ok })
	        }
	        break
            case 'logo1': {
            if (!text) return reply(`Example: ${prefix + command} Your Text`)
			alpha.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=${apikey}&text=${text}` }, { caption: lang.ok })
			}
			break
			case 'logo2': {
			if (!text) return reply(`Example: ${prefix + command} Your Text`)
			alpha.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=${apikey}&text=${text}` }, { caption: lang.ok })
			}
			break
			case 'logo3': {
			if (!text) return reply(`Example: ${prefix + command} Your Text`)
			alpha.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/ephoto1/metallogo?apikey=${apikey}&text=${text}` }, { caption: lang.ok })
			}
			break
			case 'logo4': {
			if (!text) return reply(`Example: ${prefix + command} Your Text`)
			alpha.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/ephoto1/jokerlogo?apikey=${apikey}&text=${text}` }, { caption: lang.ok })
			}
			break
            //islamic
            case 'asmaulhusna': {
                var asma = await fetch(api('alfa', '/api/islam/' + command, {}, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let key = 'Asmaul Husna\n\n'
                key += `• Latin : ${data.result.latin}\n`
                key += `• Arabic : ${data.result.arabic}\n`
                key += `• Tr id : ${data.result.translation_id}\n`
                key += `• Tr en : ${data.result.translation_en}`
                reply(key)
            }
            break
            case 'kisahnabi': {
                if (!text) return reply(`Kirim perintah:\n${prefix+command} nama nabi\n\nContoh penggunaan:\n${prefix+command} Adam`)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {
                    nabi: q
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let key = 'Kisah Nabi\n\n'
                key += `• Name : ${data.result.name}\n`
                key += `• Birth : ${data.result.birth}\n`
                key += `• Death Age : ${data.result.death_age}\n`
                key += `• Country : ${data.result.country_from}\n`
                key += `• Story : ${data.result.story}\n`
                reply(key)
            }
            break
            case 'jadwalshalat': {
                if (!text) return reply(`Kirim perintah:\n${prefix+command} nama daerah\n\nContoh penggunaan:\n${prefix+command} Makassar`)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {
                    daerah: q
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let key = 'Jadwal Shalat \n\n'
                key += `• Daerah : ${q}\n\n`
                key += `• Date : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}\n`
                key += `• Subuh : ${data.result.today.Shubuh}\n`
                key += `• Zuhur : ${data.result.today.Dzuhur}\n`
                key += `• Ashr : ${data.result.today.Ashr}\n`
                key += `• Magrib : ${data.result.today.Maghrib}\n`
                key += `• Isya : ${data.result.today.Isya}\n`
                reply(key)
            }
            break
            case 'randomquran': {
                var asma = await fetch(api('alfa', '/api/islam/' + command, {}, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let short = data.result.resources
                let key = 'Random Quran\n\n'
                key += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
                key += `• Surah ke : ${short.numberOfSurah}\n`
                key += `• Total ayat : ${short.totalAyah}\n`
                key += `• Ayat ke : ${short.numberOfAyah}\n`
                key += `• Arab : ${short.ayah.text.arab}\n`
                key += `• Latin : ${short.ayah.text.transliteration.en}\n`
                key += `• Tr en : ${short.ayah.translation.en}\n`
                key += `• Tr id : ${short.ayah.translation.id}\n\n`
                key += `_Audio sedang dalam di proses pengiriman_`
                reply(key)
                alpha.replyWithAudio({
                    url: short.ayah.audio.primary,
                    filename: short.nameOfSurah.short
                })
            }
            break
            case 'randomquran2': {
                if (!text) return reply(`Kirim perintah:\n${prefix+command} juz 1-30\n\nContoh penggunaan:\n${prefix+command} 1`)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {
                    juz: q
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let short = data.result.resources
                let key = 'Random Quran\n\n'
                key += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
                key += `• Surah ke : ${short.numberOfSurah}\n`
                key += `• Total ayat : ${short.totalAyah}\n`
                key += `• Ayat ke : ${short.numberOfAyah}\n`
                key += `• Arab : ${short.ayah.text.arab}\n`
                key += `• Latin : ${short.ayah.text.transliteration.en}\n`
                key += `• Tr en : ${short.ayah.translation.en}\n`
                key += `• Tr id : ${short.ayah.translation.id}\n\n`
                key += `_Audio sedang dalam di proses pengiriman_`
                reply(key)
                alpha.replyWithAudio({
                    url: short.ayah.audio.primary,
                    filename: short.nameOfSurah.short
                })
            }
            break
            case 'listsurah': {
                var asma = await fetch(api('alfa', '/api/islam/' + command, {}, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                key = 'List Surah\n\n'
                reply(key + data.result)
            }
            break
            case 'tafsirsurah': {
                if (!text) return reply(`Kirim perintah:\n${prefix+command} nama surah\n\nContoh penggunaan:\n${prefix+command} Al-fatihah`)
                var asma = await fetch(api('alfa', '/api/islam/' + command, {
                    surah: q
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let key = 'Tafsir Surah\n\n'
                let no = 0
                for (var i = 0; i < data.result.length; i++) {
                    no += 1
                    key += `• Surah : ${data.result[i].surah}\n`
                    key += `• Tafsir : ${data.result[i].tafsir}\n\n-----------------------------------\n\n`
                }
                reply(key)
            }
            break
            case 'alquranaudio': {
                if (!text) return reply(`Kirim perintah:\n${prefix+command} surah|ayah\n\nContoh penggunaan:\n${prefix+command} 1|5`)
                var mon = args.join(' ')
                var m1 = mon.split("|")[0]
                var m2 = mon.split("|")[1]
                var asma = await fetch(api('alfa', '/api/islam/alquran-audio2', {
                    ayat: m2,
                    surah: m1
                }, 'apikey'))
                if (!asma.ok) throw asma.text()
                var data = await asma.json()
                let short = data.result.data
                let key = 'Alquran Audio\n\n'
                key += `• Surah : ${short.surah.name.short} (${short.surah.name.transliteration.en})\n`
                key += `• Arti : ${short.surah.name.translation.en} (${short.surah.name.translation.id})\n`
                key += `• Surah ke : ${short.surah.number}\n`
                key += `• Urutan : ${short.surah.sequence}\n`
                key += `• Total ayat : ${short.surah.numberOfVerses}\n`
                key += `• Wahyu : ${short.surah.revelation.arab} (${short.surah.revelation.id})\n`
                key += `• Tafsir : ${short.surah.tafsir.id}\n\n~~~~~~~~~~~~~~~~~~~\n\n`
                key += `• Juz : ${short.meta.juz}\n`
                key += `• Page : ${short.meta.page}\n`
                key += `• Manzil : ${short.meta.manzil}\n`
                key += `• Ruku : ${short.meta.ruku}\n`
                key += `• Quarte : ${short.meta.hizbQuarter}\n`
                key += `• Arab : ${short.text.arab}\n`
                key += `• Latin : ${short.text.transliteration.en}\n`
                key += `• Tr en : ${short.translation.en}\n`
                key += `• Tr id : ${short.translation.id}\n`
                key += `• Tafsir short : ${short.tafsir.id.short}\n`
                key += `• Tafsir long : ${short.tafsir.id.long}\n\n-----------------------------------\n\n`
                reply(key)
                alpha.replyWithAudio({
                    url: short.audio.primary,
                    filename: short.surah.name.short
                })
            }
            break
            //nsfw & sfw
            case 'loli': {
            	reply(lang.wait)
                let ini_url = `https://api.lolhuman.xyz/api/random/loli?apikey=${apikey}`
                let res = await fetch(ini_url)
                if (!res.ok) throw await res.message()
                alpha.replyWithPhoto({
                    url: ini_url
                }, {
                    caption: lang.ok
                })
            }
            break
            case 'anal':
            case 'nsfw_avatar':
            case 'pussy_jpg':
            case 'bj':
            case 'classic':
            case 'cum':
            case 'erokemo':
            case 'eroyuri':
            case 'feetg':
            case 'femdom':
            case 'futanari':
            case 'holoero':
            case 'keta':
            case 'kuni':
            case 'lewd':
            case 'lewdk':
            case 'lewdkemo':
            case 'pussy':
            case 'solo':
            case 'solog':
            case 'tits':
            case 'trap':
            case 'yuri':
            case 'hentai': {
            	reply(lang.wait)
                let ini_url = `https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`
                let res = await fetch(ini_url)
                if (!res.ok) throw await res.message()
                alpha.replyWithPhoto({
                    url: ini_url
                }, {
                    caption: lang.ok
                })
            }
            break
            case 'nsfwloli': {
            	reply(lang.wait)
                let ini_url = `https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${apikey}`
                let res = await fetch(ini_url)
                if (!res.ok) throw await res.message()
                alpha.replyWithPhoto({
                    url: ini_url
                }, {
                    caption: lang.ok
                })
            }
            break
            case 'nsfwhentai': {
            	reply(lang.wait)
                let ini_url = `https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${apikey}`
                let res = await fetch(ini_url)
                if (!res.ok) throw await res.message()
                alpha.replyWithPhoto({
                    url: ini_url
                }, {
                    caption: lang.ok
                })
            }
            break
            case 'nsfwpussy': {
            	reply(lang.wait)
                let ini_url = `https://api.lolhuman.xyz/api/random/nsfw/pussy?apikey=${apikey}`
                let res = await fetch(ini_url)
                if (!res.ok) throw await res.message()
                alpha.replyWithPhoto({
                    url: ini_url
                }, {
                    caption: lang.ok
                })
            }
            break
            case 'ahegao':
            case 'armpits':
            case 'booty':
            case 'feets':
            case 'thighss':
            case 'bigtiddies':
            case 'blowjob':
            case 'echi':
            case 'ero':
            case 'erofeet':
            case 'hentaifemdom':
            case 'hentai4everyone':
            case 'hololewd':
            case 'lewdanimegirls':
            case 'chiisaihentai':
            case 'milf':
            case 'neko':
            case 'sideoppai':
            case 'waifu':
            case 'yaoi': {
            	reply(lang.wait)
                let ini_url = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}`
                let res = await fetch(ini_url)
                if (!res.ok) throw await res.message()
                alpha.replyWithPhoto({
                    url: ini_url
                }, {
                    caption: lang.ok
                })
            }
            break
            //photooxy
            case 'shadow':
		case 'cup':
		case 'cup1':
		case 'romance':
		case 'smoke':
		case 'burnpaper':
		case 'lovemessage':
		case 'undergrass':
		case 'love':
		case 'coffe':
		case 'woodheart':
		case 'woodenboard':
		case 'summer3d':
		case 'wolfmetal':
		case 'nature3d':
		case 'underwater':
		case 'golderrose':
		case 'summernature':
		case 'letterleaves':
		case 'glowingneon':
		case 'fallleaves':
		case 'flamming':
		case 'harrypotter':
		case 'carvedwood': {
			if (!text) return reply(`Example: ${prefix + command} Your Text`)
			reply(lang.wait)
			alpha.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${text}` }, { caption: lang.ok })
			}
            break
            case 'nulis':
                reply(`Pilihan Fitur Nulis

1. ${prefix}nuliskiri
2. ${prefix}nuliskanan
3. ${prefix}foliokiri
4. ${prefix}foliokanan

Contoh:
${prefix}nuliskiri Subscribe Ya YT zeeoneofc`)
                break
            case 'foliokiri':
            case 'foliokanan':
            case 'nuliskanan':
            case 'nuliskiri': {
                if (text.length < 2) return reply(`Kirim perintah:\n${prefix+command} teks\n\nContoh penggunaan\n${prefix+command} ini tulisan saya`)
                reply(lang.wait)
                const tulisan = text
                let ini_url = global.api("alfa", '/api/canvas/' + command, {
                    text: tulisan
                }, 'apikey')
                let res = await fetch(ini_url)
                if (!res.ok) throw await res.text()
                alpha.replyWithPhoto({
                    url: ini_url
                }, {
                    caption: lang.ok
                })
            }
            break
            //textpro
            case 'pornhub':
		case 'glitch':
		case 'avenger':
		case 'space':
		case 'ninjalogo':
		case 'marvelstudio':
		case 'lionlogo':
		case 'wolflogo':
		case 'steel3d':
		case 'wallgravity': {
			if (!text) return reply(`Example: ${prefix + command} Tsukasa|Bot`)
			reply(lang.wait)
			var mon = args.join(' ')
            var text1 = mon.split("|")[0]
            var text2 = mon.split("|")[1]
			alpha.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${text1}&text2=${text2}` }, { caption: lang.ok })
			}
			break

        case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder': {
			if (!text) return reply(`Example: ${prefix + command} Your Text`)
			reply(lang.wait)
			alpha.replyWithPhoto({ url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${text}` }, { caption: lang.ok })
			}
			break
            default:
        }
    } catch (e) {
        alpha.reply(util.format(e))
        console.log('[ ERROR ] ' + e)
    }
}