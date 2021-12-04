const parzi = require("aoi.js")
var fs = require('fs')
const bot = new parzi.Bot({
    token: process.env.token,//.env dosyasında token yazan variablenin değerine tokeninizi yazın
    prefix:"$getServerVar[prefix]"//ayarlamalı prefix 
})
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code
    })
}

bot.command({
  name:"ping",
  code:`
  Pingim: **$ping**
  `
})

bot.status({
    text: "Tokyo Code",//buraya durum yazısı
    type: "PLAYING",//buraya oynuyor bölümü PLAYING LISTENING WATCHING STREAMING şeklindede yapabilirsiniz
    status: "dnd",//buraya status kısmı dnd idle online şeklinde yapabilirsiniz
    time: 12
})

bot.variables({
  prefix:"!",//prefix
  botlog:"",//bot log kanalı idsi
  botkanal:"",//bot ekle kanalı idsi
  botyetkili:"",//yetkili ıdsi
  başvuranbotu:""//burayı boş bırak
  })

bot.leaveCommand({
  channel:"LOG KANALI İDSİ",
  code:`
  $author[Baybay $userTag ve botu $userTag[$getServerVar[başvuranbotu;$authorID]];$authorAvatar]
  $description[$userTag sunucudan ayrıldığı için botu $userTag[$getServerVar[başvuranbotu;$authorID]] sunucudan atıldı]
  $color[GREEN]
  $kick[$getServerVar[başvuranbotu;$authorID]]
  $suppressErrors
  `
  })
