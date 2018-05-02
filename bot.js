var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    var myMessage = message.substring(message.length - 2);    
    if (message.substring(message.length - 2) === '??') {
        var replies = [
            'Yes',
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
            'Outlook good',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Don\'t count on it',
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful',

        ]
        var repliesSarcastic = [
            'Signs point to yes. Except that you were born an idiot, you will die an idiot, and nothing will change in-between.',
            'Without a doubt. Nah, I’m just messing with you, go shoot yourself.',
            'My sources say no. They also tell me they hate you and hope you burn in hell.',
            'Yes, definitely. Unless it doesn’t happen. Listen it’s not my fault your father didn’t love you. Get off my back!',
            'Outlook not so good. Especially since you’re so goddamn ugly.',
            'All signs point to yes. But on second thought, go fuck yourself.',
            'As If', 
            'Ask Me If I Care', 
            'Dumb Question Ask Another', 
            'Forget About It', 
            'Get A Clue', 
            'In Your Dreams',  
            'Not A Chance', 
            'Obviously', 
            'Oh Please', 
            'Sure',
            'That\'s Ridiculous', 
            'Well Maybe', 
            'What Do You Think?', 
            'Yes... You Prick',
            'Who Cares?', 
            'Yeah And I\'m The Fucking Pope',
            'Yeah Right', 
            'You Wish', 
            'You\'ve Got To Be Kidding...'

        ]
        var randomReply = replies[
            Math.floor(Math.random()*replies.length)
        // var randomReply = repliesSarcastic[
            // Math.floor(Math.random()*repliesSarcastic.length)
        ];
        bot.sendMessage({
            to: channelID,
            message: randomReply
        });
     }
});