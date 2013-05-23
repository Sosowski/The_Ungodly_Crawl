/*
 *Level 1.js handles character selection, level 1 events, and the boss fight battle.
 */

//Proceed past intro, pick class
function startGame(){
	if(youtubeFlag == 1){
		document.getElementById("youtube").innerHTML="<iframe width='250' height='188' src='http://www.youtube.com/embed/yOJfA6uAq5c?autoplay=1' frameborder='0' autohide='1'></iframe>";
		youtubeFlag = 0;
	}
	document.getElementById("textBox").style.background="#CC9";
	document.getElementById("title").innerHTML="THE UNGODLY CRAWL";
	score = 0;
 	swordflag = 0;
	level = 1;
	fightflag = 0;
	tHealth = 500;
	tStrength = 15;
        dodgeRing = 0;
        strengthRing = 0;
        magicRing = 0;
        pointRing = 0;
        weakenRing = 0;
        ringCount = 0;
        tiamatFight = 0;
		enchantedIron = 0;
		swordflag2 = 0;
		mimicDevice = 0;
        document.getElementById("inventory").innerHTML="";
        statsToCookie();
	document.getElementById("tStats").innerHTML=" ";
	document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
	document.getElementById("picture").innerHTML="<img src='classes.png'>";
	document.getElementById("stats").innerHTML="";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='Warrior()'>Play as Warrior!</button><button type='button' 		onclick='Wizard()'>Play as Wizard!</button><button type='button' onclick='Rouge()'>Play as Rouge!</button>";
	document.getElementById("textBox").innerHTML="Welcome adventurer, to the halls of the ungodly crawl! Legend says no man has ever made it out of these halls alive,<br> which might have something to do with the fact that there's no real end to the ungodly crawl, making it so... UNGODLY!<br><br>Choose a class to aid you in your suicidal quest!<br><br><b>WARRIOR</b>-A mighty class adapt at hitting things really hard<br><b>WIZARD</b>-For those who like picking spells and running out of mana all the time<br><b>ROUGE</b>-Pray to the RNG gods, mortal! I hope you like dodging blows!"
}
//Player chooses warrior
function Warrior(){
	classFlag = 1;
	health = 30;
	healthCap = 30;
	mana = 5;
	manaCap = 5;
	dodge = 10;
	strength = 15;
	document.getElementById("picture").innerHTML="<img src='warrior.png'>";
	document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
	document.getElementById("textBox").innerHTML="As a warrior, you excel in melee combat, and have a large amount of health.<br><b>SPECIAL ABILITY: POWERHOUSE</b><br>Warriors deal an extra 10 damage when attacking and take 5 less damage!";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>DIVE INTO BATTLE</button><button type='button' onclick='startGame()'>Repick Class</button>";
}
//Player chooses wizard
function Wizard(){
	classFlag = 2;
	health = 15;
	healthCap = 15;
	mana = 30;
	manaCap = 30;
	dodge = 20;
	strength = 5;
	document.getElementById("picture").innerHTML="<img src='wizard.png'>";
	document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
	document.getElementById("textBox").innerHTML="As a wizard, your powerful mana pool makes up for your poor constitution.<br><b>SPECIAL ABILITY: SPELLCASTER</b><br>The wizard's spells in battle deal twice as much damage!";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Proceed carefully</button><button type='button' onclick='startGame()'>Repick Class</button> ";
}
//Player chooses rouge
function Rouge(){
	classFlag = 3;
	health = 20;
	healthCap = 20;
	mana = 15;
	manaCap = 15;
	dodge = 30;
	strength = 10;
	document.getElementById("picture").innerHTML="<img src='rouge.png'>";
	document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
	document.getElementById("textBox").innerHTML="You're nimble, swift, and can avoid every blow! Except for the ones that hit you, of course.<br><b>SPECIAL ABILITY: DOUBLE STRIKE</b><br>The rouge has a 25% chance to attack twice during battle!";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Sneak into the halls!</button><button type='button' onclick='startGame()'>Repick Class</button> ";
}
//Begin the crawling
function crawl(){
	document.getElementById("title").innerHTML="";
        statsToCookie();
        //If player is dead and death isn't caught, give generic death message
	if( health <= 0){
					document.getElementById("textBox").style.background="#C00";
		document.getElementById("textBox").innerHTML="You have perished in the halls of the crawl! Oh woe is you for having such a generic death.";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
	}
        //If player leveled up, give them a nice little party.
	else if( score >= 100){
		health = health + 5;
		healthCap = healthCap + 5;
		mana = mana + 5;
		manaCap = manaCap + 5;
		dodge = dodge + 5;
		strength = strength + 5;
		score = score - 100;
		level++;
		document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You leveled up! All stats go up by 5 points! Nice job not dying!";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Onwards!</button>"
	}
        //If none of the above, let's crawl.
	else{
	mana++;
	if(mana >= manaCap){
		mana = manaCap;
	}
	score++;
	document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
	document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
	//Give event a random number 1-100 and go from there
	event = Math.floor((Math.random()*100)+1);
	//Basic idea of if statements : check level and event number for event
	//RPS Ghost
	if(level == 1 && (event >= 0 && event <= 6)){
		if(event1 == 1){
			score--;
			crawl();
		}
		else{
		clearEventFlags();
		event1 = 1;
		document.getElementById("picture").innerHTML="<img src='ghost.png'>";
		document.getElementById("textBox").innerHTML="A ghost appears!<br><b>Hey kid, it's your lucky day! Just lose to me in rock paper scissors and I'll bring you closer to death!<br> Doesn't that sound great?</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='rock()'>Rock</button><button type='button' onclick='paper()'>Paper</button><button type='button' onclick='scissors()'>Scissors</button> ";
		}
	}
	//Mascot
	if(level == 1 && (event >= 7 && event <= 20)){
		if(event2 == 1){
			score--;
			crawl();
		}
		else{
			clearEventFlags();
			event2 = 1;
		document.getElementById("picture").innerHTML="<img src='mascot.png'>";
		document.getElementById("textBox").innerHTML="The game's adorable little mascot appears!<br><b>Hey mister! I found this potion for you! It'll help you beat this game!</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='drinkPotion()'>Drink it</button><button type='button' onclick='noDrink()'>Don't drink it</button><button type='button' onclick='youMonster()'>Punch mascot</button> ";
		}
	}
	//Fire Trap
	if(level == 1 && (event >= 21 && event <= 30)){
		if(event3 == 1){
			score--;
			crawl();
		}
		else{
			clearEventFlags();
			event3 = 1;
		document.getElementById("picture").innerHTML="<img src='trap.png'>";
		var Evade;
		Evade = Math.floor((Math.random()*100)+1);
		Evade = Evade + dodge;
		if((Evade >= 0) && (Evade <=10)){
			health = health - 15;
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("textBox").innerHTML="You stumble into a fire trap! Unfortinately, you practically jumped into the dang thing!<br>You are hurt for 15 points!";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
		if((Evade >= 11) && (Evade <=50)){
			health = health - 5;
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("textBox").innerHTML="You stumble into a fire trap! You are moderately hurt.<br>You take 5 points of damage";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
			if( health <= 0){
					document.getElementById("textBox").style.background="#C00";
				document.getElementById("textBox").innerHTML="You stumble into a fire trap! You are moderately hurt.<br>You take 5 points of damage.<br>You have perished in the halls of the crawl! Oh woe is you for having such a generic death.";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
			}
		}
		if((Evade >= 51) && (Evade <=95)){
			document.getElementById("textBox").innerHTML="You set off a fire trap but are able to dodge the flames! Nice job!";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
		if(Evade >= 95){
			dodge = dodge + 2;
			score = score + 5;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("textBox").innerHTML="You set off a fire trap...INTENTIONALLY! Showing off your amazing manuverability, you cartwheel away from the flames and do a double backflip before landing safely away from the trap!<br>You gain 2 points in dodge and 5 score for being flashy!";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
		}
	}
	//Mana Vaccum
	if(level == 1 && (event >= 31 && event <= 40)){
		if(event4 == 1){
			score--;
			crawl();
		}
		else{
			clearEventFlags();
			event4 = 1;
		document.getElementById("picture").innerHTML="<img src='manavac.png'>";
		document.getElementById("textBox").innerHTML="A powerful magic ensnares you, leaving you face to face with a vile mana vaccum.<br>You're not entirely sure, but you'd have to guess it's going to suck out your mana.";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='manaVac()'>Fight back!</button>";
		}
	}
	
	//Spell Princess
	if(level == 1 && (event >=41 && event <= 50)){
		if(event5 == 1){
			score--;
			crawl();
		}
		else{
			clearEventFlags();
			event5 = 1;
		document.getElementById("picture").innerHTML="<img src='princess.png'>";
		document.getElementById("textBox").innerHTML="Roaming the halls of the dungeon you come across a...princess?<br><b>Hail, adventurer! I am in search of new spells to add to my repertoire! Might you have one to show?</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='princess()'>Show a spell</button><button type='button' onclick='princessNo()'>Refuse</button>";
		}
	}
	
	//Dwarf
	if(level == 1 && (event >=51 && event <= 60)){
		if(event6 == 1){
			score--;
			crawl();
		}
		else{
			clearEventFlags();
			event6 = 1;
		document.getElementById("picture").innerHTML="<img src='dwarf.png'>";
		document.getElementById("textBox").innerHTML="You encounter a dwarf, a short, sturdy creature fond of drink and industry.<br><b>Aye laddie, you look like you've been wandering around a bit too long! How bout' a drink of me ale?</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='dwarf()'>Accept</button><button type='button' onclick='dwarfNo()'>Refuse</button>";
		}
	}
	
	//Boulder
	if(level == 1 && (event >=61 && event <= 70)){
		if(event7 == 1){
			score--;
			crawl();
		}
		else{
			clearEventFlags();
			event7 = 1;
		document.getElementById("picture").innerHTML="<img src='boulder.png'>";
		if( strength < 25 ){
			document.getElementById("textBox").innerHTML="A huge boulder blocks your path. Try as you might, you simply lack the strength to move it.<br> You decide to turn around and find another route.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
			else{
			health = health + 2;
			healthCap = healthCap + 2;
			strength = strength + 2;
			score = score +2;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("textBox").innerHTML="A huge boulder blocks your path. Being the manly man you are, you heave it to the side, feeling tougher for doing so.<br>Max health increased by 2!<br>Strength increased by 2!<br>Score increased by 2!";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}	
		}
	}
	
	//THE ULTIMATE SWORD
	if(level == 1 && (event >=71 && event <= 72)){
		if(event8 == 1){
			score--;
			crawl();
		}
		else{
			clearEventFlags();
			event8 = 1;
		if (swordflag == 1){
			document.getElementById("picture").innerHTML="<img src='sword.png'>";
			document.getElementById("textBox").innerHTML="You check for any more swords in the sword spot. To your dismay, no more swords have appeared.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";	
		}
		else{
		swordflag = 1;
                statsToCookie();
		document.getElementById("picture").innerHTML="<img src='sword.png'>";
		document.getElementById("textBox").innerHTML="You've found a sword lying in the corner! The blade is rusted and frail, so you don't want to hit anything with it.<br>The sword eminates a magical aura however...<br>Unknown sword aquired!";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
		}
	}
	
	//A very pissed off gnome
	if(level == 1 && (event >= 73 && event <=80)){
		if(event9==1){
			score--;
			crawl();
		}
		else{
			clearEventFlags();
			event9 = 1;
		document.getElementById("picture").innerHTML="<img src='gnome.png'>";
		document.getElementById("textBox").innerHTML="Turning the corner, you find a gnome blaring exceptionally profane statements at the top of his lungs.<br><b>****ING TRASH TALKING PIECE OF **** DUNGEON WHY DON'T YOU SUCK ON MY *** YOU PILE OF ****<br> YOU SUCK SO ****ING HARD RIGHT NOW SON OF A ****ING DWARF HOLY ****!</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='gnomeCalm()'>Calm him down</button><button type='button' onclick='gnomeKnock()'>Knock him out</button><button type='button' onclick='gnomeRun()'>Run away</button>";
		}
	}
        //Small, random events, each with varied effects.
	if(level == 1 && (event >= 81 && event <=100)){
		var RNGstat;
		RNGstat = Math.floor((Math.random()*10)+1);
		if(RNGstat == 1){
			health--;
			
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You accidentally stub your toe! Ouch!<br>You take 1 damage.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
			if( health <= 0){
					document.getElementById("textBox").style.background="#C00";
				document.getElementById("textBox").innerHTML="You stub your toe on a rock. 'Ouch!' you think to yourself as you DIE FROM THE WOUND.<br>Congratulations, you were the most pathetic adventurer in all the lands.";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
			}
		}
		if(RNGstat == 2){
			strength++;
			score++;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You shove some debre aside. You feel stronger<br>You gain 1 strength and score.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
		if(RNGstat == 3){
			mana++;
			manaCap++;
			score++;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You read some enchanted glyphs on the walls. You feel smarter!<br>You gain 1 max mana and 1 score.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
		if(RNGstat == 4){
			strength--;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>A small spider bites your hand. It's poision is irritating.<br>You lose 1 strength";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
		if(RNGstat == 5){
			health += 3;
			if(health > healthCap){
				health = healthCap;
			}
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You find some leftover health potion in a bottle and drink it.<br>You regain 3 hit points.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
		if(RNGstat == 6){
			dodge++;
			score++;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You look up and see some falling rocks! You quickly jump to the side<br>You gain 1 dodge and score";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
		if(RNGstat == 7){
			health = health - 2;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You look up and see some falling rocks! You stare at them as they smack you in the face.<br>You lose 2 health";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
			if( health <= 0){
					document.getElementById("textBox").style.background="#C00";
				document.getElementById("textBox").innerHTML="You look up and see some falling rocks! You think 'yeah, those are pretty neat' as they crush your wounded body.<br>You have died...";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
			}
		}
		if(RNGstat == 8){
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You start humming music to yourself.<br>You feel like if bard was a class, you'd be better at it.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
		if(RNGstat == 9){
			score = score + 5;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You slide your hand along a wall and find a secret button! It opens a door containing 100 gold!<br>You gain 5 score!";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
		if(RNGstat == 10){
			score = score + 2;
			dodge++;
			strength++;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You stumble across a potion.<br>It gives you 1 more strength and dodge! You also gain 2 score.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
		}
	}
	
	//OH GOD WHY AM I MAKING THE PLAYER FIGHT TIAMAT JESUS CHRIST
	if(level == 2){
		youtubeFlag = 1;
	document.getElementById("youtube").innerHTML="<iframe width='250' height='188' src='http://www.youtube.com/embed/op6Qqbk3KSE?autoplay=1' frameborder='0' autohide='1'></iframe>";
		document.getElementById("picture").innerHTML="<img src='tiamat.png'>";
		document.getElementById("textBox").innerHTML="Before you have time to celebrate your leveling, the walls fall away and the ceiling rises, revealing...<br><b><font size='13'>TIAMAT, GODDESS OF THE DRAGONS!</font></b><br><br><b>'Well done, adventurer. I suppose. I am Tiamat, and you are a flea interrupting my morning coffee.I think it's high time I disposed of you.'";
		if(swordflag == 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat()'>Fight!</button>";
		}
		else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat()'>Fight!</button><button type='button' onclick='swordTiamat()'>Use the old sword!</button>";	
		}
	}
}
}

//RPS Events
function rock(){
		var RPS;
		RPS = Math.floor((Math.random()*3)+1);
			if( RPS == 1){
				score = score + 2;
				document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
				document.getElementById("textBox").innerHTML="The ghost also threw rock!<br><b>Eh, forget it. I don't have time for this.</b><br>He leaves!<br>You have gained two points!";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
			}
			if( RPS == 2){
				health -= 14;
				document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " "
				if(health <= 0){
					document.getElementById("textBox").style.background="#C00";
					document.getElementById("picture").innerHTML="<img src='ghostDead.png'>";
					document.getElementById("textBox").innerHTML="The ghost threw paper!<br><b>See, there you go! Thanks for being such a good sport!</b><br>He zaps you with a magic most unpleasent.<br><br><b>***YOU HAVE DIED***<b>";
					document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
				}
				else{
					document.getElementById("textBox").innerHTML="The ghost threw paper!<br><b>See, there you go! Thanks for being such a good sport!</b><br>He zaps you with a magic most unpleasent.<br>You take 14 points of damage.";
					document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
				}
			}
			if( RPS == 3){
				score = score + 5;
				dodge++;
				document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
				document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
				document.getElementById("textBox").innerHTML="The ghost threw scissors!<br><b>Aw crap, really? Well that's stupid. Here's your 'prize,' idiot.</b><br>You feel more nimble and are awarded 5 points!";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
			}
}

function paper(){
		var RPS;
		RPS = Math.floor((Math.random()*3)+1);
			if( RPS == 1){
				score = score + 5;
				health = health + 5;
				healthCap = healthCap + 5;
				document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
				document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
				document.getElementById("textBox").innerHTML="The ghost threw rock!<br><b>Man, what are you doing? You're supposed to lose! Fine, here's your spoils, you moron.</b><br>You feel healthier!<br>You have gained five points!";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
			}
			if( RPS == 2){
				score = score + 2;
				document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
				document.getElementById("textBox").innerHTML="The ghost also threw paper!<br><b>Eh, forget it. I don't have time for this.</b><br>He leaves!<br>You have gained two points!";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>"
			}
			if( RPS == 3){
				health -= 14;
				document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " "
				if(health <= 0){
					document.getElementById("textBox").style.background="#C00";
					document.getElementById("picture").innerHTML="<img src='ghostDead.png'>";
					document.getElementById("textBox").innerHTML="The ghost threw scissors!<br><b>See, there you go! Thanks for being such a good sport!</b><br>He zaps you with a magic most unpleasent<br><br><b>***YOU HAVE DIED***<b>";
					document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
				}
				else{
					document.getElementById("textBox").innerHTML="The ghost threw scissors!<br><b>See, there you go! Thanks for being such a good sport!</b><br>He zaps you with a magic most unpleasent<br>You take 14 points of damage.";
					document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
				}
			}
}

function scissors(){
		var RPS;
		RPS = Math.floor((Math.random()*3)+1);
			if( RPS == 1){
				health -= 14;
				document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " "
				if(health <= 0){
					document.getElementById("textBox").style.background="#C00";
					document.getElementById("picture").innerHTML="<img src='ghostDead.png'>";
					document.getElementById("textBox").innerHTML="The ghost threw rock!<br><b>See, there you go! Thanks for being such a good sport!</b><br>He zaps you with a magic most unpleasent.<br><br><b>***YOU HAVE DIED***<b>";
					document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
				}
				else{
					document.getElementById("textBox").innerHTML="The ghost threw rock!<br><b>See, there you go! Thanks for being such a good sport!</b><br>He zaps you with a magic most unpleasent.<br>You take 14 points of damage.";
					document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
				}
			}
			if( RPS == 2){
				score = score + 5;
				strength++;
				document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
				document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
				document.getElementById("textBox").innerHTML="The ghost threw paper!<br><b>Man, what are you doing? You're supposed to lose! Fine, here's your spoils, you moron.</b><br>He enchants you with extra strength!<br>You have gained five points!";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
			}
			if( RPS == 3){
				score = score + 2;
				document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
				document.getElementById("textBox").innerHTML="The ghost also threw scissors!<br><b>Eh, forget it. I don't have time for this.</b><br>He leaves!<br>You have gained two points!";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>"
			}
}

//Mascot event functions
function drinkPotion(){
	var Potion
	Potion = Math.floor((Math.random()*100)+1);
	if ((Potion >=0) && (Potion <=5)){
		score = score + 50;
		document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
		document.getElementById("picture").innerHTML="<img src='mascothappy.png'>";
		document.getElementById("textBox").innerHTML="Holy crap! That potion was amazing!<br>YOU GAINED 50 POINTS!!!<br><br><b>Wow! I guess that shelf marked 'victory potions' was the real deal! I'll find you again if I can get more! Good luck out there!</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
	}
	if ((Potion >=6) && (Potion <=59)){
		health = health + 15;
		if(health > healthCap){
			health = healthCap;
		}
		document.getElementById("picture").innerHTML="<img src='mascothappy.png'>";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You chug the potion down. It's a normal health potion.<br>You are healed for 15 points<br><br><b>Looking good, sir! I'll come find you if I can get my hands on anything else!</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
	}
	if ((Potion >=60) && (Potion <=75)){
		document.getElementById("picture").innerHTML="<img src='mascothappy.png'>";
		document.getElementById("textBox").innerHTML="You chug the potion down. OH MY GOD IT'S...just some water.<br><b>Well that's odd. I guess the guy that left these around got lazy. I'll see if I can find something more useful.</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
	}
	if ((Potion >=76) && (Potion <=94)){
		health++;
		healthCap++;
		mana++;
		manaCap++;
		strength++;
		dodge++;
		document.getElementById("picture").innerHTML="<img src='mascothappy.png'>";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You chug the potion down. You feel better overall!<br>All stats gain one point!<br><br><b>Looking good, sir! I'll come find you if I can get my hands on anything else!</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
	}
	if ((Potion >=95) && (Potion <=100)){
					document.getElementById("textBox").style.background="#C00";
		document.getElementById("picture").innerHTML="<img src='mascotdead.png'>";
		document.getElementById("textBox").innerHTML="You chug the potion down. You feel...worse? Oh god, you feel a LOT worse! It was a bottle of poision!<br>***YOU HAVE DIED***<br><br><b>Aw crap. Guess I should have read the label first...</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
	}
}

function noDrink(){
	document.getElementById("picture").innerHTML="<img src='mascotsad.png'>";
	document.getElementById("textBox").innerHTML="You inform the mascot that you don't want to take chances drinking random potions.<br><b>Oh u-uh, sure. That's fine I...I guess. I'll just uh...go somewhere else then...</b><br>The mascot leaves. You feel like a bit of a jerk.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
}

function youMonster(){
	document.getElementById("picture").innerHTML="<img src='mascotangry.png'>";
	document.getElementById("textBox").innerHTML="You punch the mascot in the face. Instad of making him run away, this actually makes him angry.<br><b>VERY. ANGRY.</b><br>You wonder where you've gone wrong in your life as the mascot grows at least 10 times bigger.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='mascotDeath()'>Run away!!!</button><button type='button' onclick='mascotDeath()'>Fight...back?</button><button type='button' onclick='mascotDeath()'>Beg for mercy!</button>";
}

function mascotDeath(){
					document.getElementById("textBox").style.background="#C00";
	document.getElementById("picture").innerHTML="<img src='mascotangrydead.png'>";
	document.getElementById("textBox").innerHTML="Your attempts are futile as the mascot slashes you in half with his claws. Guess you shouldn't have been such a jerk, huh?<br>***YOU HAVE DIED***";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
}

//manavac

function manaVac(){
	var StrCheck;
	StrCheck = Math.floor((Math.random()*100)+1);
	StrCheck = StrCheck + strength;
	if((StrCheck >= 0) && (StrCheck <= 49))
	{
		mana = 0;
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You strike the mana vaccum as hard as you can, but it hurts you more than it.<br>You feel that if a vaccum could laugh, this one would be in tears.<br>Your mana is drained.";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
	}
	else if((StrCheck >= 50) && (StrCheck <= 95))
	{
		mana = manaCap;
		document.getElementById("picture").innerHTML="<img src='manavacdisabled.png'>";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You kick the mana vaccum, knocking it over. The now confused and bewildered vaccum is flailing about,<br> releasing mana from it's bag. You take the opportunity to casually walk away.<br>Your mana is refilled!";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
	}
	else if(StrCheck >= 95)
	{
		manaCap = manaCap + 10;
		mana = manaCap;
		score = score + 10;
		document.getElementById("picture").innerHTML="<img src='manavacexplode.png'>";
		document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="In your head, you hit the mana vaccum with all you had and it simply exploded. To the mana vaccum,<br> it looked like it's pray <b>SCREAMED AT THE TOP OF IT'S LUNGS AND LUNGED AT YOU, DELIVERING A BLOW EVEN THE GODS WOULD TREMBLE AT.</b><br>Your mana is refilled and your mana pool increased!<br>The flashy display nets you 10 points!";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
	}
}

//princess event
function princess(){
	if(mana < 5 ){
		document.getElementById("picture").innerHTML="<img src='princesssad.png'>";
		document.getElementById("textBox").innerHTML="You attempt to show the princess a palor trick you learned at the nearby taven when you soon realise that you don't have enough mana!<br>The princess looks at you disaprovingly as you slowly back away, waving your arms around and going 'oooh magic oooh.'<br>You feel that if there was a pride stat, it would be significantly damaged.";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
	}
	else{
		mana = mana - 5;
		strength = strength + 5;
		score = score + 5;
		document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You show off a flashy, harmless trick to the princess, and she looks enthralled!<br><b>Wow, what a great spell! Here, have one of mine!</b><br>The princess zaps you with an enchantment spell!<br>Your strength is increased by 5!<br>Your score increases by 5!";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
	}
}

function princessNo(){
	document.getElementById("picture").innerHTML="<img src='princesssad.png'>";
	document.getElementById("textBox").innerHTML="You politely decline, saying you know no spells and you question the validity of a princess wandering around in a dungeon.<br><b>A pity, I suppose.</b><br>She wanders off somewhere else.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
}

//Dwarf events
function dwarf(){
	mana = mana - 5;
	manaCap = manaCap - 5;
	if (mana < 0){
		mana = 0;
	}
	if (manaCap < 0){
		manaCap = 0;
	}
	strength = strength + 5;
	score = score + 5;
	document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
	document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
	document.getElementById("picture").innerHTML="<img src='dwarfdrunk.png'>";
	document.getElementById("textBox").innerHTML="You take a sip of the ale and find out that you're pretty sure that it's somehow 200% alcohol. You stumble around the room.<br><b>Hahahahaha, oh man. I forgot how lightweight you humans are.</b><br>The dwarf casually walks off, chugging the ale.<br>You have lost 5 max mana<br>You have gained 5 strength<br>You have gained 5 points";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
}

function dwarfNo(){
	health = health - 7;
	document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
	document.getElementById("picture").innerHTML="<img src='dwarfangry.png'>";
	document.getElementById("textBox").innerHTML="The dwarf gives you a look like you just insulted his livelyhood. Remembering that dwarves only work and drink, you probably did.<br>As you consider the ramifications of your actions, the dwarf clocks you over the head with his mug.<br>You take 7 points of damage.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
	if( health <= 0){
					document.getElementById("textBox").style.background="#C00";
				document.getElementById("textBox").innerHTML="The dwarf splits your skull open with his mug. Apparently you should have just taken it.";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
		}
}
//Gnome functions
function gnomeCalm(){
	health = health - 2;
	document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
	document.getElementById("picture").innerHTML="<img src='gnomeangry.png'>";
	document.getElementById("textBox").innerHTML="Only when the gnome jumps on you and tries to strangle you do you realise that you're probably wasting your time.<br><b>WHAT THE **** DID YOU SAY TO ME YOU ****TY ****ING HUMAN? I'LL TEAR YOUR GUTS OUT AND HANG THEM ON MY ****ING WALL! I DON'T EVEN OWN A WALL? DO YOU KNOW WHY? BECAUSE I'VE BEEN TRAPPED IN THIS ****TY ****ING **** HOLE OF A DUNGEON FOR THE PAST 20 ****ING YEARS. MY GRANDPA</b><br>Look, you get the picture. You take 2 points of choking damage, which is like normal damage but with more choking.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='gnomeKnock()'>Knock him out</button><button type='button' onclick='gnomeRun()'>Run away</button>";
	if( health <= 0){
					document.getElementById("textBox").style.background="#C00";
				document.getElementById("textBox").innerHTML="The gnome strangles you to death! Congratulations on getting the second most pathetic death in the game!";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
			}
}

function gnomeKnock(){
	dodge = dodge + 3;
	score = score + 3;
	document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
	document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
	document.getElementById("picture").innerHTML="<img src='gnomedead.png'>";
	document.getElementById("textBox").innerHTML="You punch the gnome's lights out. Wow, that was easy! You should try punching other things, like that stupid mascot! I'm sure that can't go badly.<br>You find a potion of agility in his pockets!<br>You have gained 3 dodge points!<br>You have gained 3 score!";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
}

function gnomeRun(){
	document.getElementById("picture").innerHTML="<img src='gnome.png'>";
	document.getElementById("textBox").innerHTML="You run away from the gnome, his profanity harming your sensitive little ears. Hopefully you won't have a 10% chance to see him again...";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl()'>Keep crawling</button>";
}

//Tiamat Fight functions
//If player has the sword, hinder tiamat.
function swordTiamat(){
	tHealth = tHealth / 2;
	tStrength = tStrength / 2;
	document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
	document.getElementById("picture").innerHTML="<img src='tiamatsword.png'>";
	document.getElementById("textBox").innerHTML="You pull out the old sword and point it at Tiamat!<br>To your suprise, magical energy shoots out of the sword at Tiamat!<br><b>OH GOD, WHY DID I KEEP THAT SWORD IN HERE?</b><br>Tiamat's stats are halved! It's now or never!";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat()'>Fight!</button>";
}

//Fight tiamat
function fightTiamat(){
	mana += 1;
	if(mana > manaCap){
	mana = manaCap;	
	}
	document.getElementById("picture").innerHTML="<img src='tiamat.png'>";
	document.getElementById("textBox").innerHTML="Tiamat is looming above you, drinking some coffee! WHAT WILL YOU DO?";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatAttack()'>Attack!</button><button type='button' onclick='tiamatMagic()'>Use magic!</button>";
	if(fightflag == 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatAttack()'>Attack!</button><button type='button' onclick='tiamatMagic()'>Use magic!</button><button type='button' onclick='callHelp()'>Call for help!</button>";
	}
}
//Call for help! (haha)
function callHelp(){
	fightflag = 1;
	health = healthCap;
	mana = manaCap;
	document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
	document.getElementById("textBox").innerHTML="You call out for help! The adorable mascot appears!<br><b>Hey, mister! What do you- HOLY CRAP IS THAT TIAMAT? U-uh...you're on your own b-buddy...</b><br>He sprints off, dropping a full restore potion behind him.<br>Your health and mana are full!";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat()'>Let's get back to buisness</button>";	
}

//Bring up the magic menu
function tiamatMagic(){
	document.getElementById("textBox").innerHTML="Which spell will you cast?";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='magicMissle()'>Magic Missle (5MP)</button><button type='button' onclick='forceStone()'>Force Stone (10MP)</button><button type='button' onclick='lavaSpray()'>Lava Spray (15MP)</button><button type='button' onclick='piercingLight()'>Piercing Light (20MP)</button><button type='button' onclick='fightTiamat()'>Never Mind</button>";	
}

//Various magics
function magicMissle(){
	if(mana >=5){
		if(classFlag == 2){
		tHealth = tHealth - 40;
		mana = mana - 5;
		document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You fire off a magic missile! It strikes Tiamat for 40 points of damage!"
		}
		else{
		tHealth = tHealth - 20;
		mana = mana - 5;
		document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You fire off a magic missile! It strikes Tiamat for 20 points of damage!";
		}
	}
	else if(mana < 5){
		document.getElementById("textBox").innerHTML="You didn't have enough mana! You waste a turn waving your arms around.";
	}
	if(tHealth <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatTurn()'>Proceed</button>"	
	}
}

function forceStone(){
	if(mana >=10){
		if(classFlag == 2){
		tHealth = tHealth - 80;
		mana = mana - 10;
		document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You imbue a nearby rock with magical energies and throw it at Tiamat, causing it to explode! Tiamat takes 80 damage!"
		}
		else{
		tHealth = tHealth - 40;
		mana = mana - 10;
		document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You imbue a nearby rock with magical energies and throw it at Tiamat, causing it to explode! Tiamat takes 40 damage!";
		}
	}
	else if(mana < 10){
		document.getElementById("textBox").innerHTML="You didn't have enough mana! You waste a turn waving your arms around.";
	}
	if(tHealth <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatTurn()'>Proceed</button>"	
	}
}

function lavaSpray(){
	if(mana >=15){
		if(classFlag == 2){
		tHealth = tHealth - 120;
		mana = mana - 15;
		document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You point your hands at Tiamat. Lava shoots out of your hands, dealing 120 damage!"
		}
		else{
		tHealth = tHealth - 60;
		mana = mana - 15;
		document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You point your hands at Tiamat. Lava shoots out of your hands, dealing 60 damage!";
		}
	}
	else if(mana < 15){
		document.getElementById("textBox").innerHTML="You didn't have enough mana! You waste a turn waving your arms around.";
	}
	if(tHealth <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatTurn()'>Proceed</button>"	
	}
}

function piercingLight(){
	if(mana >=20){
		if(classFlag == 2){
		tHealth = tHealth - 160;
		mana = mana - 20;
		document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You channel a ton of energy and fire it at Tiamat! Tiamat is struck by a blinding, piercing light! She takes a whopping 160 damage!"
		}
		else{
		tHealth = tHealth - 80;
		mana = mana - 20;
		document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You channel a ton of energy and fire it at Tiamat! Tiamat is struck by a blinding, piercing light! She takes a whopping 80 damage!";
		}
	}
	else if(mana < 20){
		document.getElementById("textBox").innerHTML="You didn't have enough mana! You waste a turn waving your arms around.";
	}
	if(tHealth <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatTurn()'>Proceed</button>"	
	}
}

function tiamatAttack(){
	var miss;
	miss = Math.floor((Math.random()*100)+1);
	if((miss>=0)&&(miss<=89)){
		if(classFlag == 1){
			var damage = strength + 10;
			tHealth = tHealth - (strength + 10);
		document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
		document.getElementById("textBox").innerHTML="You skillfully attack Tiamat, dealing " + damage + " damage!";
		}
		else if(classFlag == 3){
		tHealth = tHealth - strength;
		document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
		document.getElementById("textBox").innerHTML="You strike Tiamat with all your might, hitting for " + strength + " damage!";
		var doublehit = Math.floor((Math.random()*100)+1);
			if(doublehit >=0 && doublehit <= 25){
				var damage = strength * 2;
				tHealth = tHealth - strength;
				document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
				document.getElementById("textBox").innerHTML="You nimbly strike twice, dealing " + damage + " damage!";
			}
		}
		else{
		tHealth = tHealth - strength;
		document.getElementById("tStats").innerHTML="Tiamat's Health : " + tHealth + " ";
		document.getElementById("textBox").innerHTML="You strike Tiamat with all your might, hitting for " + strength + " damage!";
		}
	}
	if((miss>=90)&&(miss<=100)){
		document.getElementById("textBox").innerHTML="Tiamat lazily evades your blow, yawning."
	}
	if(tHealth <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatTurn()'>Proceed</button>"	
	}	
}

//Tiamat attacks
function tiamatTurn(){
	var miss;
	miss = Math.floor((Math.random()*100)+1);
	miss = miss + dodge;
	var damage
	if((miss>=0)&&(miss<=100)){
		if(classFlag == 1){
			health = health - (tStrength - 5);
			damage = tStrength - 5;
		}
		else{
			health = health - tStrength;
			damage = tStrength
		}
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="Tiamat backhands you for " + damage + " damage!";	
	}
	if(miss>=101){
		document.getElementById("textBox").innerHTML="Tiamat tries to hit you, but you nimbly dodge out of the way! Tiamat chuckles a bit.";
	}
	if(health <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='playerDead()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat()'>Proceed</button>"	
	}	
}

//Player death
function playerDead(){
	document.getElementById("textBox").style.background="#C00";
	document.getElementById("picture").innerHTML="<img src='tiamatDead.png'>";
	youtubeFlag = 1;
	document.getElementById("youtube").innerHTML="<iframe width='250' height='188' src='http://www.youtube.com/embed/9pPQnhhUqtU?autoplay=1' frameborder='0' autohide='1'></iframe>";
	document.getElementById("textBox").innerHTML="You crumble under the might of Tiamat!<br><b>Perhaps that will teach you a lesson about invading random dungeons, adventurer. I'm sure you'll be back anyway...</b>";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
}

//Tiamat death sequences
function tiamatDead(){
	fightflag = 0;
	score = score + 100;
	document.getElementById("tStats").innerHTML="";
	document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
	document.getElementById("picture").innerHTML="<img src='tiamatVictory.png'>";
	youtubeFlag = 1;
	document.getElementById("youtube").innerHTML="<iframe width='300' height='300' src='http://www.youtube.com/embed/vDAC9E81Vc8?autoplay=1' frameborder='0' autohide='1'></iframe>";
	document.getElementById("textBox").innerHTML="Tiamat's cool complexion suddenly faulters when she realises that she's OUT OF HEALTH!<br><b>WHAT? THIS IS...IMPOSSIBLE! HOW COULD A LEVEL TWO CHARACTER DEFEAT ME!</b><br>Tiamat is sucked into a dark, brooding portal as the rest of dungeon falls apart.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDeadSecond()'>Proceed</button>";
}

function tiamatDeadSecond(){
        statsToCookie();
	document.getElementById("picture").innerHTML="<img src='tiamatVictory2.png'>";
	document.getElementById("textBox").innerHTML="You rush out of the dungeon as it collapses in on itself. You smile at the wreckage, knowing you have beat the game!<br>Adorable game mascot appears!<br><b>Well, what are you going to do now?</b>";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='levelTwo()'>Retire from adventuring</button>";
}

//If an event was rolled that wasn't a duplicate, call this function to clear all possible flags
function clearEventFlags(){
	event1 = 0;
	event2 = 0;
	event3 = 0;
	event4 = 0;
	event5 = 0;
	event6 = 0;
	event7 = 0;
	event8 = 0;
	event9 = 0;	
}
//Hi mom


