const { Client, GatewayIntentBits } = require('discord.js');
const { sprueche } = require("./axel.json")
require('dotenv').config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once('ready', () => {
	console.log('Ready!')
})

function makeRandomInteger(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return

	const { commandName } = interaction

	if (commandName === 'weisheit') {
		await interaction.reply(getRandomSpruch())
	}
})

const getRandomSpruch = () => {
	const randomSpruch = sprueche[makeRandomInteger(0, sprueche.length - 1)] 
	return randomSpruch
}

client.login(process.env.TOKEN)