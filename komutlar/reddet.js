module.exports = {
  name:"reddet",
  code:`
  $channelSendMessage[$getServerVar[botlog];<@$message[1]>{author:$userTag[$getServerVar[başvuranbotu;$message[1]]] adlı botun reddedildi}{description:\`Sebep:\` $message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10]}{color:RED}]
  $onlyIf[$message[2]!=;❌ Sebep gir]
  $onlyIf[$getServerVar[başvuranbotu;$message[1]]!=;❌ Kullanıcı bir bot ile başvurmamış]
  $onlyIf[$isNumber[$message[1]]!=❌ Bu bir id değil]
  $onlyIf[$message[1]!=;❌ Başvuranın id'sini gir]
  $onlyIf[$hasRole[$authorID;$getServerVar[botyetkili]]==true;❌ Bunun için yetkin yok]
  `
  }
