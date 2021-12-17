const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
const isim = args[0]
if(!isim) {
  message.delete();
return message.reply("Bir Isim Gir Örnek: `.kayıt <isim> <yaş>`").then(msg => {
    setTimeout(() => msg.delete(), 10000)
  })
  }
const yas = args[1]
if(!yas) {
  message.delete();
return message.reply("Bir Yaş Gir Örnek: `.kayıt <isim> <yaş>`").then(msg => {
    setTimeout(() => msg.delete(), 10000)
  })
  }
  let user = message.author.id;
  if (!user) return message.reply("**Etiket Atmayı Unuttun!**");
  let role = message.guild.roles.cache.get("920629650215022672");
  message.member.roles.add(role);
  message.member.setNickname(isim + " " + yas)
  message.delete();
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kayıt"],
    permLevel: 0
}
exports.help = {
    name: 'kayıt',
    description: 'kayıt',
    usage: 'kayıt'
}