
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Hola 👋🏻, Bienvenido a los grupos oficiales, te invito a unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de Charlie 😸

➤ Grupos oficiales del bot:
1) *${nn}*

2) *${nnn}*

➤ Grupo de Colaboracion CharliexNati
 *${nnnt}*
 
➤ Grupo del col 2 (sin limite)
*${nnntt}*

➤ Infomarte sobre las nuevas actualizaciones del bot
 *${nna}*
 
➤ Grupos del ayuda sobre el bot
 *${nnntttt}*
 
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
Grupos De ventas y spam por bot

*Grupos de spam por bot*
https://chat.whatsapp.com/J8UFc7kWbzi7m63xkqTwHn

*Grupos de ventas de bot*
https://chat.whatsapp.com/C8UfYBHRzSqIvZpMrbPc2c
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

Si quieres que tu grupo aparezca aca habla con mi creador
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '𝐂𝐇𝐀𝐑𝐋𝐈𝐄-𝐕𝟒', 'status@broadcast')
}
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i

export default handler
