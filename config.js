//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348168092001";
global.owner = process.env.OWNER_NUMBER || "2348168092001";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BVNWpyMDdWRXFZQ0dXZXFnUEs0WFhFdWdKalBMemtVL3VTazNkT2NVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGV0R0l6OGRjNm5VaWpKUzZqWXA5ZkF1K3RlbGVEbzBXZ04xSjgrTjZqYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyT1piUnhwWWdUcVUyNDBtMkRzOVRLOUFXQi84QjVLb3k0QjZWWUNTZ0ZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZbWZsRkhhSGVjU2FTNlJPd3JqaEhNTUVFcmxKK0dJbUV0THFxcDFtYXhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllEQVNLUjY2L2NiajQzYzlKaUFQbXpGZEIxMS96NGJaYnU5ajFObUd0VzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZuejZxdy9ubjBpcXc2V3pFaXdoVmZydjZTUy9VNzNuSXhVVExaYklxbjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1DdDhhN3k2dDAyM0hRcFBOSnVQMzdyNDZORVZDYnVvemQ1VDUxazNrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTNKd2lVbGh6UlFPS1AwaG5vVWFhOGZtMHN3SEUyaFIySjBYZHhUbm1tND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhvS2orSjVxVWFsR3I3ZjB0RmNhZC9GWGt3b0Z3a1lSemFmVDVhVmczOUFMeE5PTG9GSUtiU1lEcnJHeFRrNGxoMEtFR0Rnb2NwbDF5ZHRUQm5WSWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI0LCJhZHZTZWNyZXRLZXkiOiJDbGpubDd4ektyN2lrWHg1TDZ1eFVoQVdEZ3JyQW4waVlFK1hKQ0JjTGtVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpUWtsSFZ0YVJJdU5nLThFZnI4aHlRIiwicGhvbmVJZCI6ImZkZmQxNDBiLTc4ZGEtNGZlZS1hZTczLWQzYWM1OGRmM2YzYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUFBwcWN0NVdTbVJac0g3YXg1bTQrR28vV0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDQ0L0FIVVB2ZVZEWE05Z0VKK1RIOERBRjZvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRMUDdKSllBIiwibWUiOnsiaWQiOiIyMzQ4MTY4MDkyMDAxOjczQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRvbHVwcmFpc2UifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wzTXRjVUZFSnJGdnJ3R0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik15QXhvQThLNVlvL2tDVTllQk16SzM0YW5oTi8vYjcxTXVkcWQ2OGsvRUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJkTVhlRWwyUDFDYytwbzhvNWIxbm9VU3pOdnZmWUg0QnFlWnBNSUdIOGQwdGlQMUJESGZpdmJBU1h5UWVvbnMzUkN1TTFiS212WWZlUnNob3ptb0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxdGZzRFRnSUF3d211TmRvbFVibWVJdXdMTjNvTTdqNlZkMktNa3Q0SUxoeEg2MXdBQVI4T0pvbzdSRzl1aE9oWXNMZUYxY1hxWG9tNjZKVXJQbjhnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNjgwOTIwMDE6NzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVE1nTWFBUEN1V0tQNUFsUFhnVE15dCtHcDRUZi8yKzlUTG5hbmV2SlB4QSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNzQ2NjUzNH0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "PRAISE",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
