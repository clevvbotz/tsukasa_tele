exports.noToken = "Bot token tidak boleh kosong, silahkan buat bot melalui https://t.me/BotFather"

exports.first_chat = (botname, pushname) => {
    return `Halo ${pushname}! Nama saya ${botname} - Saya adalah Bot Telegram multi fungsi! Klik /menu untuk mengetahui lebih lanjut tentang cara menggunakan bot ini.

Jika bot ini error, silakan chat owner agar segera diperbaiki!

Bot ini tidak dapat mengatur grup kamu, silakan coba bot kedua kami agar bisa mengatur grup kamu
Bot kedua [@tsukasagroup26_bot](https://t.me/tsukasagroup26_bot)

Bergabunglah dengan [channel saya](https://t.me/tsukasainfo) untuk mendapatkan informasi tentang semua pembaruan terbaru.

Kirim perintah /privacy untuk melihat syarat dan ketentuan penggunaan bot.
`
}
exports.snk = "Syarat & Ketentuan Bot\n\n1. Kami tidak pernah menyimpan gambar, video, file, audio, dan dokumen yang anda kirim\n2. Kami tidak pernah meminta anda untuk memberikan informasi pribadi\n3. Apapun yang anda perintahkan pada bot ini, **KAMI TIDAK BERTANGGUNG JAWAB!**\n\n**Konsekuensi bila melanggar peraturan bot ini, maka bot akan memblokir kamu atau keluar dari grup yang kamu kelola**\n\n__Jika sudah mengerti ketik /menu untuk memulai!__"
exports.getStyle = (style, style2) => {
    return `**${style2} Yang Kamu Masukkan Salah**\n\n__Berikut List ${style2} Yang Benar, Total__ **${style}** __${style2}__\n\n`
}
exports.wait = "`⏳ Sedang diproses...`"
exports.ok = `Sukses ✅`
exports.menu = async (alpha, thumbnail, pushname, OWNER_NAME, OWNER, prefix, hitall, latensii, os, simple, week, date, dateIslamic, username, isCreator, user_id) => {
    var ini_anu = `Hi ${pushname}

╭─❒ 「 Bot Info 」 
├ Creator :  [@${OWNER_NAME}](${OWNER[0]})
├ Sponsored :  [@BotFather](https://t.me/BotFather)
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Speed : ${latensii.toFixed(4)} Second
├ Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
╰❒ Runtime : ${simple.runtime(process.uptime())}

╭─❒ 「 Date Info 」 
├ Masehi : ${week}, ${date}
├ Hijriah : ${dateIslamic}
╰❒

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Profile : [@${pushname}](https://t.me/${username})
╰❒ Owner : ${isCreator ? 'True' : `False`}
`
    var button = [
        [{
                text: '🃏 Anime',
                callback_data: 'animecmd ' + user_id
            },
            {
                text: 'Asupan 😋',
                callback_data: 'asupancmd ' + user_id
            }
        ],
        [{
                text: '👧 Cecan',
                callback_data: 'cecancmd ' + user_id
            },
            {
                text: 'Cogan️ 👦',
                callback_data: 'cogancmd ' + user_id
            }
        ],
        [{
        	    text: '🏞️ Random Image',
                callback_data: 'randomcmd ' + user_id
            },
            {
            	text: 'Random Quotes 💬',
                callback_data: 'quotescmd ' + user_id
            }
        ],
        [{
                text: '📥 Download',
                callback_data: 'downloadcmd ' + user_id
            },
            {
                text: 'Ephoto 360 🖼️',
                callback_data: 'ephotocmd ' + user_id
            },
        ],
        [{
                text: '🐚 Kerang Ajaib',
                callback_data: 'kerangcmd ' + user_id
            },
            {
            	text: 'Group 👥',
                callback_data: 'groupcmd ' + user_id
            },
        ],
        [{
        	    text: '🔮 Primbon',
                callback_data: 'primboncmd ' + user_id
            },
                text: '📝 Info',
                callback_data: 'infocmd ' + user_id
            },
        ],
        [{
                text: '🖼️ Logo Maker',
                callback_data: 'logocmd ' + user_id
            },
            {
                text: 'Islamic 🕌',
                callback_data: 'islamcmd ' + user_id
            },
        ],
        [{
                text: '👙 Nsfw & Sfw',
                callback_data: 'nsfwcmd ' + user_id
            },
            {
                text: 'Photooxy 🖼️',
                callback_data: 'photooxycmd ' + user_id
            },
        ],
        [{
                text: '👦 Owner',
                callback_data: 'owner ' + user_id
            },
            {
                text: 'Text Pro 🖌️',
                callback_data: 'textprocmd ' + user_id
            },
        ],
    ]
    try {
        await alpha.editMessageMedia({
            type: "photo",
            media: {
                source: thumbnail
            },
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true
        }, {
            reply_markup: {
                inline_keyboard: button
            }
        })
    } catch {
        await alpha.replyWithPhoto({
            source: thumbnail
        }, {
            caption: ini_anu,
            parse_mode: "MARKDOWN",
            disable_web_page_preview: true,
            reply_markup: {
                inline_keyboard: button
            }
        })
    }
}
exports.animecmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'menucmd ' + user_id
            },
            {
                text: 'Asupan 😋',
                callback_data: 'asupancmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ANIME 」 
» /akira
» /akiyama
» /ana
» /asuna
» /ayuzawa
» /boruto
» /chitoge
» /deidara
» /doraemon
» /elaina
» /emilia
» /elza
» /gremory
» /hestia
» /hinata
» /inori
» /isuzu
» /itachi
» /kaga
» /kagura
» /kakasih
» /kaori
» /keneki
» /kotori
» /kurumi
» /loli
» /madara
» /mikasa
» /miku
» /minato
» /naruto
» /nezuko
» /onepiece
» /pokemon
» /rize
» /sagiri
» /sakura
» /sasuke
» /shina
» /shinka
» /shizuka
» /shota
» /toukachan
» /tsunade
» /yuki
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.asupancmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'animecmd ' + user_id
            },
            {
                text: 'Cecan 👧',
                callback_data: 'cecancmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ASUPAN 」 
» /chika
» /rikagusriani
» /bocil
» /geayubi
» /santuy
» /ukhty
» /asupan
» /delvira
» /ayu
» /bunga
» /aura
» /nisa
» /ziva
» /yana
» /viona
» /syania
» /riri
» /syifa
» /mama-gina
» /alcakenya
» /mangayutri
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.cecancmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'asupancmd ' + user_id
            },
            {
                text: 'Cogan️ 👦',
                callback_data: 'cogancmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 CECAN 」 
» /china
» /indonesia
» /malaysia
» /thailand
» /korea
» /japan
» /vietnam
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.cogancmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'cecancmd ' + user_id
            },
            {
                text: 'Random Image 🏞️',
                callback_data: 'randomcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 COGAN 」 
» /wuyifan
» /suga
» /parkchanyeol
» /ohsehun
» /luhan
» /kimtaehyung
» /kimseok
» /kimnanjoon
» /kimminseok
» /kimjunmyeon
» /kimjong
» /kimjondae
» /jungkook
» /jimin
» /jhope
» /huangzitao
» /dohkyungsoo
» /baekhyung
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.randomcmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'cogancmd ' + user_id
            },
            {
                text: 'Random Quotes 💬',
                callback_data: 'quotescmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 RANDOM IMAGE 」 
» /aesthetic
» /anjing
» /boneka
» /darkjokes
» /memeindo
» /hekel
» /justina
» /kpop
» /kucing
» /mobil
» /motor
» /pubg
» /rose
» /ryujin
» /wallhp
» /randomcoffe
» /couple
» /cyberspace
» /mountain
» /programming
» /technology
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.quotescmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'randomcmd ' + user_id
            },
            {
                text: 'Download 📥',
                callback_data: 'downloadcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 RANDOM QUOTES 」 
» /pantun
» /puisi
» /faktaunik
» /katabijak
» /quotesdilan
» /quotesislam
» /quotesanime
» /quotesimage
» /bucin
» /truth
» /dare
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.downloadcmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'quotescmd ' + user_id
            },
            {
                text: 'Kerang Ajaib 🐚',
                callback_data: 'kerangcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 DOWNLOAD 」 
» /ytmp4
» /ytmp3
» /play
» /ytsearch
» /fbdl
» /facebook
» /igdl
» /igphoto
» /igvideo
» /igreels
» /twitter
» /mediafire
» /tiktok
» /tiktokaudio
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.kerangcmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'downloadcmd ' + user_id
            },
            {
                text: 'Group 👥',
                callback_data: 'groupcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 KERANG AJAIB 」 
» /apakah
» /bisakah
» /kapankah
» /bagaimanakah
» /rate
» /cekganteng
» /cekcantik
» /ceksange
» /cekgay
» /ceklesbi
» /cekmati
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.groupcmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'kerangcmd ' + user_id
            },
            {
                text: 'Ephoto 360 🖼️',
                callback_data: 'ephotocmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `Bot ini tidak dapat mengatur grup yang kamu kelola hanya bisa merespon pada grup yang kamu kelola
Silakan coba bot kedua kami agar dapat mengatur grup yang kamu kelola

Bot kedua: @tsukasagroup26_bot`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.ephotocmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'groupcmd ' + user_id
            },
            {
                text: 'Logo Maker 🖼️',
                callback_data: 'logocmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 EPHOTO 360 」 
» /wetglass
» /multicolor3d
» /watercolor
» /luxurygold
» /galaxywallpaper
» /lighttext
» /beautifulflower
» /puppycute
» /royaltext
» /heartshaped
» /birthdaycake
» /galaxystyle
» /hologram3d
» /greenneon
» /glossychrome
» /greenbush
» /metallogo
» /noeltext
» /glittergold
» /textcake
» /starsnight
» /wooden3d
» /textbyname
» /writegalacy
» /galaxybat
» /snow3d
» /birthdayday
» /goldplaybutton
» /silverplaybutton
» /freefire
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.primboncmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'ephotocmd ' + user_id
            },
            {
                text: 'Info 📝',
                callback_data: 'infocmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 PRIMBON 」 
» /nomorhoki
» /artimimpi
» /artinama
» /ramaljodoh
» /ramaljodohbali
» /suamiistri
» /ramalcinta
» /cocoknama
» /pasangan
» /jadiannikah
» /sifatusaha
» /rezeki
» /pekerjaan
» /ramalnasib
» /penyakit
» /tarot
» /fengshui
» /haribaik
» /harisangar
» /harisial
» /nagahari
» /arahrezeki
» /peruntungan
» /weton
» /karakter
» /keberuntungan
» /memancing
» /masasubur
» /zodiak
» /shio
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.infocmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'primboncmd ' + user_id
            },
            {
                text: 'Logo Maker 🖼️',
                callback_data: 'logocmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 INFO 」 
» /kbbi
» /brainly
» /roboguru
» /jarak
» /wikipedia
» /translate
» /jadwaltv
» /jadwaltvnow
» /jadwalbola
» /newsinfo
» /cnnindonesia
» /cnnnasional
» /cnninternasional
» /infogempa
» /infocuaca
» /lirik
» /kodepos
» /google
» /gimage
» /pinterest
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.logocmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'ephotocmd ' + user_id
            },
            {
                text: 'Next ➡️',
                callback_data: 'logocmd2 ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 LOGO MAKER 」 
» /anonymous2
» /astronotspace
» /avatar3q360
» /avatarff
» /avatarleagueofking
» /avatarlolbyname
» /avataroverwatch
» /bannerofaov
» /bannerofaov2
» /bannerofapex
» /banneroffreefire
» /banneroflol
» /bannerofoverwatch
» /bannerofpubg
» /bannerytcsgo
» /beautifulgalaxylol
» /beautifulshimmering
» /blueneon
» /circlemarcotteam
» /colorfulpubg
» /companylogo
» /companylogo2
» /coverbannerlol
» /coverdota2
» /coverfblol
» /coverfreefirefb
» /coverleagueofking
» /coverloknew
» /coverofwarface
» /coveronepiecefb
» /crossfirecover
» /crossfirestyle
» /csgocover
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.logocmd2 = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'ephotocmd ' + user_id
            },
            {
                text: 'Islamic 🕌',
                callback_data: 'islamcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 LOGO MAKER 」 
» /cutegirlgamer
» /cyberhunterfb
» /dragonballfb
» /effect3donbeach
» /elegantrotation
» /fbgamepubgcover
» /footballteam
» /gaminglogo4fvs
» /gamingmascot
» /gradientlogo
» /gunlogogaming
» /introvideomaker
» /letterlogos 
» /logoaccording 
» /logogamingassasin 
» /lolcoverbyname 
» /lolpentakill 
» /lolwallpaper 
» /maketeamlogo 
» /mascotstyle 
» /metalmascot 
» /newlolavatar 
» /overwatchcover 
» /overwatchwallpaper 
» /pencilsketch 
» /pubgcutelogo 
» /pubglogomaker 
» /rovwallpaper 
» /rovwallpaperhd 
» /teamlogo 
» /wallpaperaov 
» /wallpaperml
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.islamcmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'logocmd ' + user_id
            },
            {
                text: 'Nsfw & Sfw 👙',
                callback_data: 'nsfwcmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 ISLAMIC 」 
» /asmaulhusna
» /kisahnabi
» /jadwalshalat
» /randomquran
» /randomquran2
» /dictator
» /listsurah
» /tafsirsurah
» /alquranaudio
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.nsfwcmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'islamcmd ' + user_id
            },
            {
                text: 'Photooxy 🖼️',
                callback_data: 'photooxycmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 NSFW & SFW 」 
» /nsfwloli
» /nsfwhentai
» /nsfwpussy
» /ahegao
» /anal
» /blowjob
» /armpits
» /eroyuri
» /feets
» /nsfw_avatar
» /bigtiddies
» /ero
» /erokemo
» /erofeet
» /feetg
» /femdom
» /futanari
» /hentaifemdom
» /holoero
» /hentai4everyone
» /keta
» /hololewd
» /kuni
» /lewd
» /lewdanimegirls
» /lewdk
» /lewdkemo
» /chiisaihentai
» /milf
» /neko
» /sideoppai
» /solo
» /bj
» /solog
» /classic
» /tits
» /trap
» /waifu
» /yaoi
» /yuri
» /pussy_jpg
» /hentai
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.photooxycmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'nsfwcmd ' + user_id
            },
            {
                text: 'Text Pro 🖌️',
                callback_data: 'textprocmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「 PHOTO OXY 」 
» /arcade8bit
» /battlefield4
» /pubg
» /burnpaper
» /carvedwood
» /coffe
» /cup
» /cup2
» /fallleaves
» /flamming
» /golderrose
» /harrypoter
» /love
» /lovemessage
» /nature3d
» /romance
» /shadow
» /smoke
» /summer3d
» /summernature
» /undergrass
» /underwater
» /wolfmetal
» /woodheart
» /woodenboard
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}
exports.textprocmd = async (alpha, thumbnail, user_id) => {
    var button = [
        [{
                text: '⬅️ Back',
                callback_data: 'photooxycmd ' + user_id
            },
            {
                text: '🃏 Anime',
                callback_data: 'animecmd ' + user_id
            }
        ],
        [{
            text: '⚘ Owner ⚘',
            callback_data: 'owner ' + user_id
        }, ]
    ]
    var caption = `╭─❒ 「  TEXT PRO 」 
» /pornhub
» /glitch
» /avenger
» /space
» /ninjalogo
» /marvelstudio
» /lionlogo
» /wolflogo
» /steel3d
» /wallgravity
» /blackpink
» /neon
» /greenneon
» /advanceglow
» /futureneon
» /sandwriting
» /sandsummer
» /sandengraved
» /metaldark
» /neonlight
» /holographic
» /text1917
» /minion
» /deluxesilver
» /newyearcard
» /bloodfrosted
» /halloween
» /jokerlogo
» /fireworksparkle
» /natureleaves
» /bokeh
» /toxic
» /strawberry
» /box3d
» /roadwarning
» /breakwall
» /icecold
» /luxury
» /cloud
» /summersand
» /horrorblood
» /thunder
╰──────────◇
`
    await alpha.editMessageMedia({
        type: "photo",
        media: {
            source: thumbnail
        },
        caption: caption
    }, {
        parse_mode: "MARKDOWN",
        disable_web_page_preview: true,
        reply_markup: {
            inline_keyboard: button
        }
    })
}