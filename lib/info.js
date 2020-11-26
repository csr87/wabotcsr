exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
APA KABAR? SEMOGA BAIK-BAIK SAJA!
Sebelum menggunakan bot ini ada baiknya kalian melihat menu *!info* dan *!donasi* 😁

💵TOLONG BANTU DONASI AGAR BOT INI BISA TERUS BERJALAN💵
💵GUNAKAN COMMAND !donasi untuk berdonasi💵

INFO BOT! :
🔱 *AUTHOR*: CSR 
🔱 *GITHUB*: https://github.com/csr/
🔱 *INSTAGRAM*: ${instagram}
🔱 *YOUTUBE*: ${youtube}
🔱 *TELEGRAM* : ${telegram}
🔱 *WHATSAPP* : 085336552251

🔱 *SCRIPT ORIGINAL BY*: https://github.com/

INFO LAIN! :

BOT INI MENGGUNAKAN SOURCE CODE YANG SAYA DAPATKAN DAN SAYA MODIFIKASI DENGAN PENAMBAHAN, PENGURANGAN, DAN PERUBAHAN BEBERAPA FITUR.
BOT INI DIBUAT MENGGUNAKAN NODE.JS

THANKS TO: 
-ALLAH SWT
-KEDUA ORTU
-HP GW


bot aktif selama : ${kapanbotaktif}
JANGAN LUPA FOLLOW instagram
 ${instagram}

 👾TELEGRAM : ${telegram}`
}
