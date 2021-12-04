module.exports = {
  name:"bot-ekle",
  code:`
  $deletecommand
  $setServerVar[başvuranbotu;$message[1];$authorID]
  $channelSendMessage[$getServerVar[botlog];<@$authorID>,<@&$getServerVar[botyetkili]>{author:$userTag:$authorAvatar}{description:<@$authorID> Adlı üye **$userTag[$message[1]]( \`$message[1]\` )** adlı botu ile başvurdu

Prefixi:  \`$message[2]\`

[0 Perm](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot+applications.commands&permissions=0) | [8 perm](https://discord.com/oauth2/authorize?client_id=$message[1]&scope=bot+applications.commands&permissions=8)}{color:ORANGE}{thumbnail:$userAvatar[$message[1]]}]

$channelSendMessage[$channelID;\`$userTag[$message[1]]\` adlı botun başarıyla sıraya eklendi{delete:5s}]
$onlyIf[$message[2]!=;❌ **Kullanım:** \`$getServerVar[prefix]bot-ekle $clientID $getServerVar[prefix]\` **Hata:** Prefix yazılmadı{delete:7s}]
$onlyIf[$isBot[$message[1]]==true;❌ **Kullanım:** \`$getServerVar[prefix]bot-ekle $clientID $getServerVar[prefix]\` **Hata:** Girilen id bir bota ait değil{delete:5s}]
$onlyIf[$isNumber[$message[1]]==true;❌ **Kullanım:** \`$getServerVar[prefix]bot-ekle $clientID $getServerVar[prefix]\` **Hata:** ID'niz sayı olmalı]
$onlyIf[$message[1]!=;❌ **Kullanım:** \`$getServerVar[prefix]bot-ekle $clientID $getServerVar[prefix]\` **Hata:** ID girilmedi]
$onlyIf[$channelID==$getServerVar[botkanal];<#$getServerVar[botkanal]>]
`
  }
