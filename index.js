const bot = require(__dirname + "/lib/amd");
const {
  VERSION
} = require(__dirname + "/config");
const start = async () => {
  Debug.info("Starting queen_Nikka " + VERSION);
  try {
    await bot.init();
    await bot.DATABASE.sync();
    await bot.connect();
  } catch (_0x11dc77) {
    Debug.error(_0x11dc77);
    start();
  }
};
start();
