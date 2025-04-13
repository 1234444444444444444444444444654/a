const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const fs = require('fs');

client.once('ready', () => {
  console.log(`Bot iniciado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  const args = message.content.slice(1).split(/ +/);
  const command = args.shift().toLowerCase();

  if (fs.existsSync(`./comandos/${command}.js`)) {
    const comando = require(`./comandos/${command}.js`);
    comando.run(client, message, args);
  }
});

client.login('MTM1OTIzNDM1MDI1MTYzODkyNA.GARmlx.YKGjlbLybkicDLgn-c_uHzSwKlO4d5ZCXdfhMw');
