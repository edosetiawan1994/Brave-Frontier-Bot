# Edo Setiawan's Bot

How to install (for windows):

1. open cmd

	(optional) you can choose where to put the repo by changing your location, something helpful :

	"cd folder_name" - to enter stated folder

	"cd .." - to go back

	"ls" - to view files in your location

	"pwd" - to check you location

	i recommend no need to change location, because its easier for lazy people ;)

2. clone this repo by typing "git clone https://github.com/edosetiawan1994/mybot.git" and press enter

3. after done cloning, get brave frontier or one piece datas which is optional

	brave frontier data -> 

		make sure you are inside "mybot" folder, then type "git clone https://github.com/Deathmax/bravefrontier_data.git" and press enter

	one piece data ->

		make sure you are inside "mybot" folder, then type "git clone https://github.com/optc-db/optc-db.github.io.git" and press enter

4. your data is all ready, next is to get the bot ready, first you have to make sure you are in mybot folder then install discord.js by typing "npm install discord.js" and press enter

5. finally you can turn your bot on by typing "node mybot.js" and press enter, you have to be inside mybot folder to do this step.


additional, if you clone onepiece data, then theres a slight changes you have to change...

use your editor (i recommend sublime 3, download it f you dont have it) then open mybot folder, go to : 

optc-db.github.io/common/data/units, change "window.units" in line 1 into "var units", then at the bottom of the same file add this "exports.units = units;" and save the file.

not only units, you have to change details, families, and cooldowns (e.g. : "window.details" into "var details" and add "exports.details = details;", then save)