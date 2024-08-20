const { Telegraf, Markup } = require('telegraf');
const Token = 'YOUR_BOT_TOKEN_HERE';
const bot = new Telegraf(Token); 

bot.start((ctx) => {
  ctx.reply(
    "Welcome! This is a Welcome Text for Initiating Telegram Bot",
    Markup.inlineKeyboard([
      [
        { text: "URL Button", url: "https://example.com" },
        { text: "Chat Button", callback_data: "foo" },
        { text: "Another Button", callback_data: "bar" }
      ]
    ])
  );
});

bot.on('callback_query', (ctx) => {
  const data = ctx.callbackQuery.data;

  if (data === "foo") {
    ctx.reply('This is A Response Text');
  } else if (data === "bar") {
    ctx.reply('This is Another Text');
  }
});

bot.help((ctx) => {
    ctx.reply(
    "Here is the list of the commands.\n\n/start - Initialize the Bot\n/info - Information about the Bot"
    )
});

bot.command('info', (ctx) => {
  ctx.reply(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat tellus non nunc facilisis, vitae ultrices dolor varius."
  );
});

bot.launch(
  console.log("Bot is Ready!")
)
