//Give a little intro sequence for the next area
function levelTwo(){
    statsToCookie();
	document.getElementById("youtube").innerHTML="<iframe width='250' height='188' src='http://www.youtube.com/embed/0v829LHb4ys?autoplay=1' frameborder='0' autohide='1'></iframe>";
    document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
    document.getElementById("picture").innerHTML="<img src='Images/hawk.png'>";
    document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
    document.getElementById("textBox").innerHTML="Yeah, right! A giant hawk swoops out of the sky and grabs you and adorable game mascot in it's talons.<br>You black out, but soon awaken in a similar looking dungeon.<br>You mutter curses under your breath.";
    document.getElementById("buttonBar").innerHTML="<button type='button' onclick='Intro()'>Proceed</button>";
}

function Intro(){
    document.getElementById("picture").innerHTML="<img src='Images/mascotintro1.png'>";
    document.getElementById("textBox").innerHTML="<b>Hey! Mister! You've gotta pay attention, because it only gets harder from here!</b>";
    document.getElementById("buttonBar").innerHTML="<button type='button' onclick='Intro2()'>Oh boy...</button>";
}

function Intro2(){
    document.getElementById("picture").innerHTML="<img src='Images/mascotintro2.png'>";
    document.getElementById("inventory").innerHTML="<button type='button' onclick='Inventory()'>Inventory</button>";
    document.getElementById("textBox").innerHTML="<b>You now have an inventory window! Click that new button down there at any time to see your inventory!</b>";
    document.getElementById("buttonBar").innerHTML="<button type='button' onclick='Intro3()'>Okay...</button>";
}

function Intro3(){
    health = healthCap;
    mana = manaCap;
    document.getElementById("picture").innerHTML="<img src='Images/mascotintro3.png'>";
    document.getElementById("inventory").innerHTML="<button type='button' onclick='Inventory()'>Inventory</button>"
    document.getElementById("textBox").innerHTML="<b>Oh! And the fighting system is going to show up a lot here! Watch your health! I'm going to go find items for you!</b><br>With that he scampers off, like some sort of cat or something.<br>Your health and mana have been refilled!";
    document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Guess I'm on my own now</button>";
}

//variables for enemy stats
var eAttack;
var eDodge;
var eHealth;
//Store enemy name for reference
var eName;
//Rewards
var eScore;
//Track if player called for help in a fight
var helpCalled = 0;

fightflag = 0;

clearEventFlags();

//It's like crawl(), but only for the second stage.
function crawl2(){
	document.getElementById("title").innerHTML="";
    //Reset the help flag from a fight
    helpCalled = 0;
    //Reset the monster's HP and item message displays
    document.getElementById("tStats").innerHTML=" ";
	document.getElementById("itemMessage").innerHTML=" ";
	//Player is dead and nothing caught it, kill player here
    if( health <= 0){
		document.getElementById("textBox").style.background="#C00";
		document.getElementById("textBox").innerHTML="You have perished in the halls of the crawl! Oh woe is you for having such a generic death.";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
    }
    //Player leveled up! Give them a nice prompt. They're swell.
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
		document.getElementById("textBox").innerHTML="You leveled up! All stats go up by 5 points! I hope it helps!";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Onwards!</button>"
    }
    
    else if( level >= 5){
        document.getElementById("youtube").innerHTML="<iframe width='300' height='300' src='http://www.youtube.com/embed/1SWYoEOU2fI?autoplay=1' frameborder='0' autohide='1'></iframe>";
        tiamatFight = 1;
                eName = "Tiamat";
                eHealth = 1500 - (weakenRing*2);
                eAttack = 50 - (weakenRing*2);
                eDodge = 5 - (weakenRing*2);
                document.getElementById("tStats").innerHTML="Tiamat's Health : " + eHealth + " ";
                document.getElementById("picture").innerHTML="<img src='Images/tiamat2.png'>";
		document.getElementById("textBox").innerHTML="As you revel in your achievements, a gigantic claw appears out of nowhere and tears reality asunder!<br>You are left facing a familiar foe..<br><b><font size='13'>TIAMAT, GODDESS OF THE DRAGONS!</font><br>'I HAVE HAD ENOUGH OF THIS CHARADE. YOU THINK YOU CAN JUST BEAT A GOD WITH A FEW MOUSECLICKS?<br>IT IS TIME TO PUT YOU IN YOUR PLACE. BOW TO ME, MORTAL, FOR I SHALL END YOUR LIFE.</b><br>You can't help but wonder what Tiamat did to look so different since the last area...";
		if(swordflag == 1){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat2()'>Fight!</button><button type='button' onclick='swordTiamat2()'>Use the old sword!</button>";
		}
        else if(swordflag2 == 1){
         document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat2()'>Fight!</button><button type='button' onclick='swordTiamat3()'>Use the Cruel Longsword of the Hero!</button>";      
         }
		else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat2()'>Fight!</button>";	
		}
    
    }
    //Let's crawl.
    else{
    //Increase score per click
	mana++;
	if(mana >= manaCap){
		mana = manaCap;
	}
    score++;
    //Add score from rings
    score += pointRing;
    document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
    event = Math.floor((Math.random()*100)+1);
    //Gnoll fight
    if(event >= 0 && event <= 10){
		if(event1==1){
			score--;
			score -= pointRing;
			crawl2();
		}
		else{
			clearEventFlags();
			event1 = 1;
                eAttack = 10 - (weakenRing*2);
                eDodge = 5 - (weakenRing*2);
                eHealth = 50 - (weakenRing*2);
                eName = "Gnoll";
                eScore = 5;
                document.getElementById("tStats").innerHTML=eName + "'s Health : " + eHealth + " ";
		document.getElementById("picture").innerHTML="<img src='Images/gnoll.png'>";
		document.getElementById("textBox").innerHTML="A Gnoll appears! Looks like he's in no mood for diplomacy!";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fight()'>Fight!</button><button type='button' onclick='flee()'>Flee!</button>";
		}
	}
    //Ogre fight
    if(event >= 10 && event <= 15){
		if(event2==1){
			score--;
			score -= pointRing;
			crawl2();
		}
		else{
			clearEventFlags();
			event2 = 1;
                eAttack = 20 - (weakenRing*2);
                eDodge = 0 - (weakenRing*2);
                eHealth = 85 - (weakenRing*2);
                eName = "Ogre";
                eScore = 15;
                document.getElementById("tStats").innerHTML=eName + "'s Health : " + eHealth + " ";
		document.getElementById("picture").innerHTML="<img src='Images/ogre.png'>";
		document.getElementById("textBox").innerHTML="An Ogre appears! You take some brief moments to wonder where you've gone wrong in your life.";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fight()'>Fight!</button><button type='button' onclick='flee()'>Flee!</button>";
		}
	}
    //Find Enchanted Ring
    if(event >= 16 && event <= 30){
		if(event3 == 1){
			score--;
			score -= pointRing;
			crawl2();
		}
		else{
			clearEventFlags();
			event3 = 1;
        //Create another roll and give the player a ring
        //If player has 10 rings, don't give them any more. Toe rings aren't allowed.
        var ringRoll = Math.floor((Math.random()*100)+1);
        if(ringCount >= 10){
			document.getElementById("picture").innerHTML="<img src='Images/empty.png'>";
            document.getElementById("textBox").innerHTML="You found a ring, but...you already have a ring on every finger!<br> You leave it behind.";
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Aw, man.</button>";
        }
        else if(ringRoll >= 0 && ringRoll <= 20){
            dodgeRing++;
            ringCount++;
            dodge += 2;
            score += 2;
			document.getElementById("picture").innerHTML="<img src='Images/ringDodge.png'>";
            document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
            document.getElementById("textBox").innerHTML="You found a ring of dodging! You put it on, gaining +2 to dodge and 2 points!";
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Nimble!</button>";
            statsToCookie();
        }
        else if(ringRoll >= 21 && ringRoll <= 40){
            strengthRing++;
            ringCount++;
            strength += 2;
            score += 2;
			document.getElementById("picture").innerHTML="<img src='Images/ringStrength.png'>";
            document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
            document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
            document.getElementById("textBox").innerHTML="You found a ring of strength! You put it on, gaining +2 to strength and 2 points!";
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Strong!</button>";
            statsToCookie();
        }
        else if(ringRoll >= 41 && ringRoll <= 60){
            magicRing++;
            ringCount++;
            mana += 2;
            manaCap += 2;
            score += 2;
			document.getElementById("picture").innerHTML="<img src='Images/ringMagic.png'>";
            document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
            document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
            document.getElementById("textBox").innerHTML="You found a ring of mana! You put it on, gaining +2 to mana and 2 points!";
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Magical!</button>";
            statsToCookie();
        }
        else if(ringRoll >= 61 && ringRoll <= 80){
            pointRing++;
            ringCount++;
			document.getElementById("picture").innerHTML="<img src='Images/ringScore.png'>";
            document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
            document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
            document.getElementById("textBox").innerHTML="You found a ring of...points? You put it on, and will recieve 1 additional point every time you look for trouble!";
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Wealth!</button>";
            statsToCookie();
        }
        else if(ringRoll >= 81 && ringRoll <= 100){
            weakenRing++;
            ringCount++;
			document.getElementById("picture").innerHTML="<img src='Images/ringWeaken.png'>";
            document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
            document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
            document.getElementById("textBox").innerHTML="You found a ring of weakening! Look, before you freak out, this ring lowers enemy stats by 2! It's good, I swear!<br>You put it on.";
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Weaker?</button>";
            statsToCookie();
        }  
		}
    }
    //End ring section
	
	//These next two events share the same event flag on purpose.
	//Find enchanted iron
	if(event >= 31 && event <= 35){
		if(event4==1){
			score--;
			score -= pointRing;
			crawl2();
		}
		else{
			clearEventFlags();
			event4 = 1;
			if(enchantedIron==1 || swordflag2 == 1){
				document.getElementById("picture").innerHTML="<img src='Images/chestEmpty.png'>";
				document.getElementById("textBox").innerHTML="The tresure chest is just as you left it. Empty and disapointing.";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Aw...</button>";
			}
			else{
				document.getElementById("picture").innerHTML="<img src='Images/chest.png'>";
				document.getElementById("textBox").innerHTML="You've come across a treasure chest! Do you open it?";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='openIron()'>Yes</button><button type='button' onclick='denyChest()'>No</button>";	
			}
		}
	}
	
	//Legendary blacksmith
	if(event >= 36 && event <= 40){
		if(event4==1){
			score--;
			score -= pointRing;
			crawl2();
		}
		else{
			clearEventFlags();
			event4 = 1;
			document.getElementById("picture").innerHTML="<img src='Images/dwarfBlacksmith.png'>";
			document.getElementById("textBox").innerHTML="You encounter a Dwarf working a forge. He's far more manly than the drunkard you met before.<br><b>Hail, traveler. My name is Urist McWeaponsmith. I am a world renown weaponsmith, if you didn't quite hear my name before.<br>If you've got a weapon and some metal, I can help you. I'm a tad dry on supplies lately.</b>";
			if(swordflag2 == 1){
				document.getElementById("picture").innerHTML="<img src='Images/dwarfBlacksmithGone.png'>";
				document.getElementById("textBox").innerHTML="You go back to where the weaponsmith was, but find that he's left. You find a note on his anvil.<br><b>Dear adventurer,<br>I've decided that I can't make anything better than your sword, so I've decided to go into retirement. I apperciate everything you've done.<br>PS: Dungeons are a terrible place to live. Would not reccomend.</b>";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>What a nice fellow.</button>";
			}
			else if(enchantedIron==1 && swordflag ==1){
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='blacksmithComplete()'>Show him the iron and the sword</button><button type='button' onclick='crawl2()'>Leave</button>";	
			}
			else if(enchantedIron == 1){
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='blacksmithIron()'>Show him the iron</button><button type='button' onclick='crawl2()'>Leave</button>";
			}
			else if(swordflag==1){
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='blacksmithSword()'>Show him the sword</button><button type='button' onclick='crawl2()'>Leave</button>";
			}
			else{
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>You don't have either of those things...</button>";
			}
		}
	}
	
	//Good chest
	if(event >= 41 && event <= 50){
		if(event5==1){
			score--;
			score -= pointRing;
			crawl2();
		}
		else{
			clearEventFlags();
			event5 = 1;
			document.getElementById("picture").innerHTML="<img src='Images/chest.png'>";
			document.getElementById("textBox").innerHTML="You've come across a treasure chest! Do you open it?";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='openGood()'>Yes</button><button type='button' onclick='denyChest()'>No</button>";	
		}
	}
	
	//Mimic
	if(event >= 51 && event <= 60){
		if(event6==1){
			score--;
			score -= pointRing;
			crawl2();
		}
		else{
			clearEventFlags();
			event6 = 1;
			if(mimicDevice == 1){
				document.getElementById("itemMessage").innerHTML="<b>Your mimic detector is beeping furiously!</b>";
			}
			document.getElementById("picture").innerHTML="<img src='Images/chest.png'>";
			document.getElementById("textBox").innerHTML="You've come across a treasure chest! Do you open it?";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='openMimic()'>Yes</button><button type='button' onclick='denyChest()'>No</button>";	
		}
	}
	
	//Adorable Game Mascot (again)
	if(event >= 61 && event <= 70){
		if(event7==1){
			score--;
			score -= pointRing;
			crawl2();
		}
		else{
			clearEventFlags();
			event7 = 1;
			document.getElementById("picture").innerHTML="<img src='Images/mascot.png'>";
			document.getElementById("textBox").innerHTML="The game's adorable little mascot appears!<br><b>Ok, I spent of a lot of time running around, but this potion isn't water, and there's no way it's poison!</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='drinkPotion2()'>Drink it</button><button type='button' onclick='noDrink2()'>Don't drink it</button><button type='button' onclick='youMonster2()'>Punch mascot</button> ";
		}	
	}
	
	//Let's be nice and give the player another shot at finding the sword
	
	if(event >=71 && event <= 75){
		if(event8 == 1){
			score--;
			score -= pointRing;
			crawl2();
		}
		else{
			clearEventFlags();
			event8 = 1;
		if (swordflag == 1 || swordflag2 == 1){
			document.getElementById("picture").innerHTML="<img src='Images/sword.png'>";
			document.getElementById("textBox").innerHTML="You check for any more swords in the sword spot. To your dismay, no more swords have appeared.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";	
		}
		else{
		swordflag = 1;
                statsToCookie();
		document.getElementById("picture").innerHTML="<img src='Images/sword.png'>";
		document.getElementById("textBox").innerHTML="You've found a sword lying in the corner! The blade is rusted and frail, so you don't want to hit anything with it.<br>The sword eminates a magical aura however...<br>Unknown sword aquired!";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
		}
		}
	}
	
	if(event >= 76 && event <= 85){
		if(event9 == 1){
			score--;
			score -= pointRing;
			crawl2();	
		}
		else{
			clearEventFlags();
			event9 = 1;
                eAttack = 5 - (weakenRing*2);
                eDodge = 3 - (weakenRing*2);
                eHealth = 150 - (weakenRing*2);
                eName = "Mud Golem";
                eScore = 10;
                document.getElementById("tStats").innerHTML=eName + "'s Health : " + eHealth + " ";
		document.getElementById("picture").innerHTML="<img src='Images/mudgolem.png'>";
		document.getElementById("textBox").innerHTML="A Mud Golem appears! He looks hefty, but how much damage can mud do?";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fight()'>Fight!</button><button type='button' onclick='flee()'>Flee!</button>";
		}	
	}
	
	if(event >= 86 && event <=100){
		var RNGstat;
		RNGstat = Math.floor((Math.random()*10)+1);
		if(RNGstat == 1){
			health-= 2;
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='Images/empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You don't look where you're going and smack face-first into a wall<br>You take 2 damage.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
			if( health <= 0){
				document.getElementById("textBox").innerHTML="Haphazardly, you smack face-first into a wall.<br>You fall down backwards and manage to break your neck on a rock.<br>My god, what a display.";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
			}
		}
		if(RNGstat == 2){
			strength+=2;
			score+=2;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='Images/empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You find it suddenly easier to carry your equipment.<br>You gain 2 strength and score.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
		}
		if(RNGstat == 3){
			mana+=2;
			manaCap+=2;
			score+=2;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='Images/empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You find a spellbook on the ground and breifly flip through it before it vanishes.<br>You gain 2 max mana and 2 score.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
		}
		if(RNGstat == 4){
			strength-=2;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='Images/empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>Something moves in the corner of your eye. You freak out for a second, before seeing it's only a mouse.<br>You feel like a wuss.<br>You lose 2 strength";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
		}
		if(RNGstat == 5){
			health += 6;
			if(health > healthCap){
				health = healthCap;
			}
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='Images/empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You find a small flask of health potion and drink it.<br>You regain 6 hit points.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
		}
		if(RNGstat == 6){
			dodge+=2;
			score+=2;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='Images/empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>A dart trap is sprung! You instinctively tumble to the side.<br>You gain 2 dodge and score";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
		}
		if(RNGstat == 7){
			health = health - 4;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='Images/empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>A dart trap is sprung! Unfortinaly you only notice when they hit you in the leg.<br>You lose 4 health";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
			if( health <= 0){
					document.getElementById("textBox").style.background="#C00";
				document.getElementById("textBox").innerHTML="A dart trap is sprung! Yeah, that's what they'll write for your biography.<br> They'll also write about that magical flying steed you had, and how you were a billionaire!<br>You hallucinate a bit as the poison on the darts sets in.<br>You have perished...";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
			}
		}
		if(RNGstat == 8){
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='Images/empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You remember a jaunty tune from the local inn, but now it's stuck in your head.<br>Crap.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
		}
		if(RNGstat == 9){
			score += 10;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='Images/empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You step on a pressure plate! Instead of a trap, a wall panel opens revealing a solid gold bar. Neat!<br>You gain 10 score!";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
		}
		if(RNGstat == 10){
			score += 4;
			dodge+= 2;
			strength+= 2;
			document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
			document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
			document.getElementById("picture").innerHTML="<img src='Images/empty.png'>";
			document.getElementById("textBox").innerHTML="You wander the halls.<br>You find a potion labled 'Manly Man's Tonic'.<br>You're pretty sure it was just water, but you feel buff anyway.<br>You gained 2 dodge, strength, and 4 score.";
			document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
		}
	}
    
    }//End else container for events.
}
//BEGIN FUNCTIONS FOR FIGHTING ------------------------------------------
//These functions are universal for all fights.
//Handles flee roll for encounters
function flee(){
    var fleeCheck;
    fleeCheck = Math.floor((Math.random()*100)+1);
    fleeCheck += dodge;
    if(fleeCheck <= 70){
        document.getElementById("textBox").innerHTML="You try to run, but the " + eName + " blocks your path! Looks like you'll have to fight!";
        document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fight()'>What a load of crap!</button>";
    }
    if(fleeCheck >= 71 && fleeCheck <=124){
        document.getElementById("textBox").innerHTML="You manage to evade the " + eName + ". I'm sure it went back to it's monster buddies to tell them<br>about how much of a coward you are.";
        document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Yeah, whatever.</button>";
    }
    if(fleeCheck >= 125){
        dodge += 2;
        score += 2;
        document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
	document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
        document.getElementById("textBox").innerHTML="You manage to evade the " + eName + " so gracefully, that it is dazzled by your display of acrobatics.<br>The " + eName + " can do nothing but marvel as you leap off of walls with your skills.<br>Gained 2 points in dodge and 2 score!";
        document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Gracefully click this button</button>";
    }
}

//Display the player's options in a fight
function fight(){
	mana += 1;
	if(mana > manaCap){
	mana = manaCap;	
	}
    document.getElementById("textBox").innerHTML="The " + eName + " prepares to strike!";
    document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyAttack()'>Attack!</button><button type='button' onclick='enemyMagic()'>Use magic!</button>";
    //Player is low on health, add help option
    if((health/healthCap) <= 0.25 && helpCalled == 0){
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyAttack()'>Attack!</button><button type='button' onclick='enemyMagic()'>Use magic!</button><button type='button' onclick='enemyHelp()'>Call for help!</button>";
    }
}

//Handles calling for help in a fight
function enemyHelp(){
    helpCalled = 1;
    event = Math.floor((Math.random()*100)+1);
    if(event >= 0 && event <= 20){
        document.getElementById("textBox").innerHTML="Adorable game mascot appears!<br><b>Help? Well gee, I don't know why you're asking now.</b><br>You watch in dismay as mascot pulls out and reads through <b>THE UNGODLY CRAWL\u2122</b> manual. It is nothing you haven't heard before.<br>Fortunately, the " + eName + " is enthralled with the reading.<br><b>Hope that helps!</b><br>You thank mascot and he leaves. He didn't help, but you really don't want to disapoint him.";
        document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyTurn()'>Sigh...</button>";
    }
    if(event >= 21 && event <= 70){
        health += 20;
        if(health >= healthCap){
            health = healthCap;
        }
        document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
        document.getElementById("textBox").innerHTML="Adorable game mascot appears!<br><b>Help! Yeah! I was going to give you this potion anyway!</b><br>You drink a health potion and regain 15 hit points!";
        document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyTurn()'>Cool!</button>";
    }
    if(event >= 71 && event <= 90){
        health += 50;
        if(health >= healthCap){
            health = healthCap;
        }
        document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
        document.getElementById("textBox").innerHTML="Adorable game mascot appears!<br><b>Help? Yeah, I can do that!</b><br>He gives you a dire health potion!<br>You have regained 50 hit points!"
        document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyTurn()'>Sweet!</button>";
    }
    if(event >= 91 && event <= 100){
        eHealth -= 500;
        document.getElementById("tStats").innerHTML=eName + "'s Health : " + eHealth + " ";
        document.getElementById("textBox").innerHTML="Adorable game mascot appears, you think. I mean, he was pretty small before, now he's twice your size.<br>Not only that, he's ripping a support beam off the wall and smashing the " + eName +"'s face in with it for 500 points of damage.<br>That wasn't really something he did, last time you checked.";
        if(eHealth <= 0){
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyDead()'>Well, that was something.</button>"
        }
        else{
        document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyTurn()'>Well, that was something.</button>";
        }
    }   
}

//Displays the list of magic to cast
function enemyMagic(){
	document.getElementById("textBox").innerHTML="Which spell will you cast?";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='magicMissle2()'>Magic Missle (5MP)</button><button type='button' onclick='forceStone2()'>Force Stone (10MP)</button><button type='button' onclick='lavaSpray2()'>Lava Spray (15MP)</button><button type='button' onclick='piercingLight2()'>Piercing Light (20MP)</button><button type='button' onclick='fight()'>Never Mind</button>";	
}

//Magic Missle Attack
function magicMissle2(){
	if(mana >=5){
		if(classFlag == 2){
		eHealth = eHealth - 40;
		mana = mana - 5;
		document.getElementById("tStats").innerHTML=eName+"'s Health : " + eHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You fire off a magic missile! It strikes " + eName + " for 40 points of damage!";
		}
		else{
		eHealth = eHealth - 20;
		mana = mana - 5;
		document.getElementById("tStats").innerHTML=eName+"'s Health : " + eHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You fire off a magic missile! It strikes " + eName + " for 20 points of damage!";
		}
	}
	else if(mana < 5){
		document.getElementById("textBox").innerHTML="You didn't have enough mana! You waste a turn waving your arms around.";
	}
	if(eHealth <= 0 && tiamatFight == 1){
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead2()'>Proceed</button>";
    }
    else if((eHealth > 0) && (tiamatFight == 1) && (fightflag == 1)){
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='mascotAttack()'>Proceed</button>"
     }
	else if(eHealth <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyDead()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyTurn()'>Proceed</button>"	
	}
}

//Force Stone Attack
function forceStone2(){
	if(mana >=10){
		if(classFlag == 2){
		eHealth = eHealth - 80;
		mana = mana - 10;
		document.getElementById("tStats").innerHTML=eName+"'s Health : " + eHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You imbue a nearby rock with magical energies and throw it at " + eName +", causing it to explode! " + eName + " takes 80 damage!";
		}
		else{
		eHealth = eHealth - 40;
		mana = mana - 10;
		document.getElementById("tStats").innerHTML=eName + "'s Health : " + eHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You imbue a nearby rock with magical energies and throw it at " + eName +", causing it to explode! " + eName + " takes 40 damage!";
		}
	}
	else if(mana < 10){
		document.getElementById("textBox").innerHTML="You didn't have enough mana! You waste a turn waving your arms around.";
	}
	if(eHealth <= 0 && tiamatFight == 1){
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead2()'>Proceed</button>";
    }
    else if((eHealth > 0) && (tiamatFight == 1) && (fightflag == 1)){
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='mascotAttack()'>Proceed</button>"
     }
	else if(eHealth <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyDead()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyTurn()'>Proceed</button>"	
	}
}

//Lava Spray Attack
function lavaSpray2(){
	if(mana >=15){
		if(classFlag == 2){
		eHealth = eHealth - 120;
		mana = mana - 15;
		document.getElementById("tStats").innerHTML=eName+"'s Health : " + eHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You point your hands at " + eName+ ". Lava shoots out of your hands, dealing 120 damage!";
		}
		else{
		eHealth = eHealth - 60;
		mana = mana - 15;
		document.getElementById("tStats").innerHTML=eName + "'s Health : " + eHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You point your hands at " + eName+ ". Lava shoots out of your hands, dealing 60 damage!";
		}
	}
	else if(mana < 15){
		document.getElementById("textBox").innerHTML="You didn't have enough mana! You waste a turn waving your arms around.";
	}
	if(eHealth <= 0 && tiamatFight == 1){
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead2()'>Proceed</button>";
    }
    else if((eHealth > 0) && (tiamatFight == 1) && (fightflag == 1)){
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='mascotAttack()'>Proceed</button>"
     }
	else if(eHealth <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyDead()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyTurn()'>Proceed</button>"	
	}
}

//Piercing Light Attack
function piercingLight2(){
	if(mana >=20){
		if(classFlag == 2){
		eHealth = eHealth - 160;
		mana = mana - 20;
		document.getElementById("tStats").innerHTML=eName+"'s Health : " + eHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You channel a ton of energy and fire it at " + eName + "!" + eName + " is struck by a blinding, piercing light! It takes a whopping 160 damage!";
		}
		else{
		eHealth = eHealth - 80;
		mana = mana - 20;
		document.getElementById("tStats").innerHTML=eName + "'s Health : " + eHealth + " ";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You channel a ton of energy and fire it at " + eName + "!" + eName + " is struck by a blinding, piercing light! It takes a whopping 80 damage!";
		}
	}
	else if(mana < 20){
		document.getElementById("textBox").innerHTML="You didn't have enough mana! You waste a turn waving your arms around.";
	}
	if(eHealth <= 0 && tiamatFight == 1){
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead2()'>Proceed</button>";
    }
    else if((eHealth > 0) && (tiamatFight == 1) && (fightflag == 1)){
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='mascotAttack()'>Proceed</button>"
     }
	else if(eHealth <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyDead()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyTurn()'>Proceed</button>"	
	}
}

//Hit enemy with basic attack
function enemyAttack(){
	var miss;
	var damage;
	miss = Math.floor((Math.random()*100)+1);
        miss += eDodge;
	if((miss>=0)&&(miss<=100)){
		eHealth = eHealth - strength;
		damage = strength;
		if(swordflag2 == 0 && classFlag == 1){
			eHealth -= 10;
			damage += 10;
		}
		else if(swordflag2 == 0 && classFlag == 3){
			var doublehit = Math.floor((Math.random()*100)+1);
			if(doublehit >=0 && doublehit <= 25){
				var damage = strength * 2;
				eHealth = eHealth - strength;
			}
		}
		else if(swordflag2 == 1){
			eHealth -= 20;
			damage = strength + 20;
			if(classFlag == 1){
			eHealth -= 10;
			damage += 10;	
			}
			else if(classFlag == 3){
				var doublehit = Math.floor((Math.random()*100)+1);
				if(doublehit >=0 && doublehit <= 25){
				damage += strength + 20;
				eHealth = eHealth - strength + 20;
				}
			}
		}
		document.getElementById("tStats").innerHTML=eName + "'s Health : " + eHealth + " ";
		document.getElementById("textBox").innerHTML="You hit the "+ eName + " for " + damage + " damage!";
                if(tiamatFight == 1){
                    document.getElementById("textBox").innerHTML="You strike "+ eName + " for " + strength + " damage!";
                }
		if(swordflag2 == 1){
			document.getElementById("textBox").innerHTML="You slash the "+ eName + " for " + damage + " points of damage!";
		}
                if(tiamatFight == 1 && swordflag2 == 1){
                    document.getElementById("textBox").innerHTML="You slash "+ eName + " for " + damage + " points of damage!";
                }
	}
	if(miss>=100){
		document.getElementById("textBox").innerHTML=eName + " dodges your blow."
	}
	if(eHealth <= 0 && tiamatFight == 1){
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead2()'>Proceed</button>";
    }
    else if((eHealth > 0) && (tiamatFight == 1) && ((fightflag == 1) || (fightflag == 2))){
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='mascotAttack()'>Proceed</button>"
     }
	else if(eHealth <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyDead()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyTurn()'>Proceed</button>"	
	}	
}

//Enemy attacks player
function enemyTurn(){
	var miss;
	miss = Math.floor((Math.random()*100)+1);
	miss = miss + dodge;
	var damage;
	if((miss>=0)&&(miss<=100)){
		//Don't heal the player
		if(classFlag == 1){
			if((eAttack - 5) > 0){
				health = health - (eAttack - 5);
				damage = eAttack - 5;
			}
		}
		else if(eAttack <= 0){
			eAttack = 0;
			damage = 0;
		}
		else{
		health = health - eAttack;
		damage = eAttack;
		}
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML=eName + " strikes you for " + damage + " damage!";	
	}
	if(miss>=101){
		document.getElementById("textBox").innerHTML=eName + " tries to hit you, but you evade the blow!";
	}
	if(tiamatFight == 1 && health <= 0){
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='playerDead3()'>Proceed</button>";
      }
    else if(tiamatFight == 1 && health > 0){
           document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat2()'>Proceed</button>";
      }
	else if(health <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='playerDead2()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fight()'>Proceed</button>"	
	}	
}

//Enemy is dead!
function enemyDead(){
        score += eScore;
	document.getElementById("picture").innerHTML="<img src='Images/empty.png'>";
	document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
	document.getElementById("textBox").innerHTML="The " + eName + " is defeated!<br>You gained " + eScore + " points!";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Finally!</button>";
}

//The player has died...
function playerDead2(){    
	document.getElementById("textBox").style.background="#C00"; 
    document.getElementById("textBox").innerHTML=eName + " has dealt a mortal wound! <br><b>You have been slain...</b>";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
}

//Treasure Chest functions
function openIron(){
	enchantedIron = 1;
	statsToCookie();
	document.getElementById("picture").innerHTML="<img src='Images/iron.png'>";
	document.getElementById("textBox").innerHTML="You open the chest, revealing...<br><b>A bar of magical iron!</b><br>You're not sure what to do with it, but you hang on to it anyway.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Uh, ok?</button>";
}

function openGood(){
	var itemRoll;
	itemRoll = Math.floor((Math.random()*100)+1);
			if(itemRoll >=0 && itemRoll <= 50){
				health += 30;
				if(health > healthCap){
					health = healthCap;	
				}
				document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : 			" + strength + " | Dodge : " + dodge + " ";
				document.getElementById("picture").innerHTML="<img src='Images/potion.png'>";
				document.getElementById("textBox").innerHTML="You open the chest, revealing a bottle of 'Doctor Hababbit's Pretty Good Health Potion'<br>You chug it, despite it's terrible name.<br>You have regained 30 health points.";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Continue crawling</button>";
			}
			if(itemRoll >=51 && itemRoll <=75){
				document.getElementById("picture").innerHTML="<img src='Images/chestEmpty.png'>";
				document.getElementById("textBox").innerHTML="You open the chest, and magical dust shoots into your face!<br>No, wait. That's just normal dust. The chest is empty.";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Continue crawling</button>";
			}
			if(itemRoll >= 76 && itemRoll <=90){
				health += 2;
				healthCap += 2;
				mana += 2;
				manaCap += 2;
				strength += 2;
				dodge += 2;
				score += 5;
				document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
				document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : 			" + strength + " | Dodge : " + dodge + " ";
				document.getElementById("picture").innerHTML="<img src='Images/statbooster.png'>";
				document.getElementById("textBox").innerHTML="You open the chest, revealing a statbooster potion, with a +1 scrawled on it's label.<br>You drink it, recieving +2 in all stats and 5 points in score!";
				document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Continue crawling</button>";
			}
			if(itemRoll >= 91 && itemRoll <=100){
				if (mimicDevice==1){
					document.getElementById("picture").innerHTML="<img src='Images/chestEmpty.png'>";
					document.getElementById("textBox").innerHTML="You open the chest, and magical dust shoots into your face!<br>No, wait. That's just normal dust. The chest is empty.";
					document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Continue crawling</button>"
				}
				else{
					mimicDevice = 1;
					statsToCookie();
					document.getElementById("picture").innerHTML="<img src='Images/mimicdetector.png'>";
					document.getElementById("textBox").innerHTML="You open the chest, revealing a strange mechanical box with a speaker. There's a label on the back.<br>It reads : 'Mimic Detector V3 : because mimics are a load of crap!'<br>You take the thing with you.";
					document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Continue crawling</button>"
				}
			}
}

function openMimic(){
	 eAttack = 15 - (weakenRing*2);
                eDodge = 10 - (weakenRing*2);
                eHealth = 60 - (weakenRing*2);
                eName = "Mimic";
                eScore = 10;
                document.getElementById("tStats").innerHTML=eName + "'s Health : " + eHealth + " ";
		document.getElementById("picture").innerHTML="<img src='Images/Mimic.png'>";
		document.getElementById("textBox").innerHTML="The chest opens, revealing teeth and a tongue? The chest was a mimic! No getting out of this fight!";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fight()'>Fight!</button>";
	
}

function denyChest(){
	document.getElementById("textBox").innerHTML="You rightfully think that a chest in a dungeon might be a bad thing, and walk away.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Not falling for that one!</button>";
}

//Blacksmith functions
function blacksmithComplete(){
	swordflag2 = 1;
	swordflag = 0;
	enchantedIron = 0;
	statsToCookie();
	document.getElementById("textBox").innerHTML="The blacksmith's eyes light up. A voice suddenly resounds in your head.<br><b>URIST MCWEAPONSMITH IS TAKEN BY A FEY MOOD!</b><br>Before you have a chance to wonder what the heck that was, the dwarf begins to furiously work on the sword.<br>A mere 30 seconds later, he whips back around to face you.<br><b>IT IS COMPLETE! MY GREATEST WORK!</b><br>You have recieved the <b>Cruel Longsword of the Hero!</b><br>You equip it, giving you an extra 20 damage to your basic attacks!";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>WHERE'S THAT OGRE?</button>"
}

function blacksmithIron(){
	document.getElementById("textBox").innerHTML="<b>Hm...enchanted iron. I'm afraid I can't use this for anything other than improving a magical weapon.<br>Any normal weapon would be imbalanced. Trust me. I'm a dwarf.</b>";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Gotta find a magic weapon...</button>"
}

function blacksmithSword(){
	document.getElementById("textBox").innerHTML="<b>Oh, wow! Is that Tiamatbane? A hyper-specific sword, that. You can't even hit things with it, or it would break.<br>I could probably fix that, but I'd need enchanted iron. Normal iron won't cut it. Magical properties and all that crap.</b>";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Let's get on that!</button>"
}

function drinkPotion2(){
	var Potion2
	Potion2 = Math.floor((Math.random()*100)+1);
	if ((Potion2 >=0) && (Potion2 <=10)){
		health = healthCap;
		mana = manaCap;
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("picture").innerHTML="<img src='Images/mascothappy.png'>";
		document.getElementById("textBox").innerHTML="You drink the potion. It was a full restore potion!<br>Your health and mana have been refilled!<br><b>See, I told you the potions were better! I'll try to find another.</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
	}
	if ((Potion2 >=11) && (Potion2 <=75)){
		health = health + 15;
		if(health > healthCap){
			health = healthCap;
		}
		document.getElementById("picture").innerHTML="<img src='Images/mascothappy.png'>";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You chug the potion down. It's a normal health potion.<br>You are healed for 15 points<br><br><b>Not bad, but I can probably do better than that, now.</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
	}
	if ((Potion2 >=76) && (Potion2 <=90)){
		health = health + 30;
		if(health > healthCap){
			health = healthCap;
		}
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("picture").innerHTML="<img src='Images/mascothappy.png'>";
		document.getElementById("textBox").innerHTML="You chug the potion down. It tastes a bit better than the normal health potions.<br>You are healed for 30 points!<br><b>Allright! Try not to get yourself killed, sir!</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
	}
	if ((Potion2 >=91) && (Potion2 <=99)){
		health+=2;
		healthCap+=2;
		mana+=2;
		manaCap+=2;
		strength+=2;
		dodge+=2;
		score+=5;
		document.getElementById("picture").innerHTML="<img src='Images/mascothappy.png'>";
		document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
		document.getElementById("textBox").innerHTML="You chug the potion down. You feel better overall!<br>All stats gain two points and you gain 5 score!<br><br><b>Wow, even that potion was better! I'll keep looking around, this place is great!</b>";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling</button>";
	}
	if (Potion2==100){
		document.getElementById("textBox").style.background="#C00";
		document.getElementById("picture").innerHTML="<img src='Images/mascotdead.png'>";
		document.getElementById("textBox").innerHTML="You chug the potion down.<br><b>Well, unless some jerk hard-coded a 1% chance of poison into the game, but what are the odds of-</b><br>Your senses deafen as that was, indeed, poison. You have perished.";
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
	}
}

function noDrink2(){
	if(ringCount >= 10){
            document.getElementById("picture").innerHTML="<img src='Images/mascotsad.png'>";
			document.getElementById("textBox").innerHTML="You inform the mascot that you don't want to take chances drinking random potions.<br><b>B-but I even made sure it was...um...I guess you have a point...</b><br>The mascot leaves, dropping a ring.<br>It is a ring of shame. A pity you already have 10 rings, though.<br>Jerk.";
            document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling...</button>";
        }
		else{
	ringCount++;
	shameRing++;
	statsToCookie();
	document.getElementById("picture").innerHTML="<img src='Images/mascotsad.png'>";
	document.getElementById("textBox").innerHTML="You inform the mascot that you don't want to take chances drinking random potions.<br><b>B-but I even made sure it was...um...I guess you have a point...</b><br>The mascot leaves, dropping a ring.<br>You are now wearing a ring of shame. It does nothing, and totally takes up a ring slot.<br>Jerk.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='crawl2()'>Keep crawling...</button>";
		}
}

function youMonster2(){
	document.getElementById("textBox").innerHTML="Buddy, we both know what happens when you do that. You've made it this far, don't throw it away now.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='drinkPotion2()'>Drink It</button><button type='button' onclick='noDrink2()'>Don't drink it</button><button type='button' onclick='mascotDeath2()'>Screw it, punch him anyway.</button>";
}

function mascotDeath2(){
	document.getElementById("textBox").style.background="#C00";
	document.getElementById("picture").innerHTML="<img src='Images/mascotangrydead.png'>";
	document.getElementById("textBox").innerHTML="Suprise! You've sliced in half by his claws.<br>Was it really too much to ask to just drink the potion?";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
}

function swordTiamat2(){
        eHealth = (eHealth * 0.75);
	eAttack = (eAttack * 0.75);
	document.getElementById("tStats").innerHTML="Tiamat's Health : " + eHealth + " ";
	document.getElementById("picture").innerHTML="<img src='Images/tiamat2old.png'>";
	document.getElementById("textBox").innerHTML="You pull out the old sword and point it at Tiamat!<br>The sword shoots out a faint blue energy. Tiamat's stats are lowered by 1/4th!<br><b>Not bad, but I doubt that little trick will save you here.</b>";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat2()'>Well, it's something.</button>";
}

function swordTiamat3(){
        eHealth = eHealth / 2;
	eAttack = eAttack / 2;
	document.getElementById("tStats").innerHTML="Tiamat's Health : " + eHealth + " ";
	document.getElementById("picture").innerHTML="<img src='Images/tiamat2new.png'>";
	document.getElementById("textBox").innerHTML="You pull out the Cruel Longsword of the Hero and point it at Tiamat.<br>The improved sword emits a far more brilliant light!<br><b>WHAT? YOU CAN IMPROVE THAT OLD THING? CRAP!</b><br>Tiamat's stats are halved!";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat2()'>Let's do this!</button>";
}

function fightTiamat2(){
	mana += 1;
	if(mana > manaCap){
	mana = manaCap;	
	}
	document.getElementById("picture").innerHTML="<img src='Images/tiamat2.png'>";
	document.getElementById("textBox").innerHTML="Tiamat is looming above you, looking quite agitated.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyAttack()'>Attack!</button><button type='button' onclick='enemyMagic()'>Use magic!</button>";
	if(fightflag == 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyAttack()'>Attack!</button><button type='button' onclick='enemyMagic()'>Use magic!</button><button type='button' onclick='callHelp2()'>Call for help!</button>";
	}
	if(fightflag == 1){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyAttack()'>Attack!</button><button type='button' onclick='enemyMagic()'>Use magic!</button><button type='button' onclick='callHelp3()'>Give me a full restore!</button>";
	}
}

function callHelp2(){
    fightflag = 1;
    document.getElementById("textBox").innerHTML="You call out for help! The adorable mascot appears!<br><b>Hey, mister! What do you- OH COME ON, NOT AGAIN!</b><br>You're a tad suprised when mascot readies himself for combat!<br>Mascot will now attack Tiamat after your turn!";
    document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat2()'>Right, let's do this.</button>";
}

function callHelp3(){
	document.getElementById("textBox").innerHTML="You yell out to mascot to give you a potion!<br><b>I only have one, sir! I hope you really need it!</b>";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='callHelp4()'>Use It!</button><button type='button' onclick='fightTiamat2()'>Not now...</button>";
}

function callHelp4(){
	fightflag = 2;
	health = healthCap;
	mana = manaCap;
	document.getElementById("stats").innerHTML="Health : " + health + "/" + healthCap + " | Mana : " + mana +  "/" + manaCap + " | Strength : " + strength + " | Dodge : " + dodge + " ";
	document.getElementById("textBox").innerHTML="Your health and mana are fully restored!";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='fightTiamat2()'>Continue the fight!</button>";
}

function mascotAttack(){
        var miss;
	miss = Math.floor((Math.random()*100)+1);
        miss += eDodge;
	if((miss>=0)&&(miss<=100)){
		eHealth = eHealth - 15;
		document.getElementById("tStats").innerHTML=eName + "'s Health : " + eHealth + " ";
		document.getElementById("textBox").innerHTML="Mascot claws Tiamat for 15 points of damage!";
	}
	if(miss>=100){
		document.getElementById("textBox").innerHTML="Mascot tries to claw Tiamat, but Tiamat dodges him!"
	}
	if(eHealth <= 0){
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead3()'>Proceed</button>";	
	}
	else{
		document.getElementById("buttonBar").innerHTML="<button type='button' onclick='enemyTurn()'>Proceed</button>"	
	}
}

function playerDead3(){
	document.getElementById("textBox").style.background="#C00";
        document.getElementById("picture").innerHTML="<img src='Images/tiamat2dead.png'>";
	document.getElementById("youtube").innerHTML="<iframe width='250' height='188' src='http://www.youtube.com/embed/rsDg-fOMLbE?autoplay=1' frameborder='0' autohide='1'></iframe>";
	document.getElementById("textBox").innerHTML="You crumble under the might of Tiamat!<br><b>AND STAY OUT. I'M SICK OF YOU PEOPLE.</b>";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Retry?</button>";
}

function tiamatDead2(){
	document.getElementById("youtube").innerHTML="<iframe width='250' height='188' src='http://www.youtube.com/embed/uYAYvkzNl0o?autoplay=1' frameborder='0' autohide='1'></iframe>";
	document.getElementById("picture").innerHTML="<img src='Images/tiamat2defeated.png'>";
        document.getElementById("textBox").innerHTML="Your mighty blow fells Tiamat!<br><b>THIS IS...IMPOSSIBLE! YOU CHEATED, I KNOW IT, I KNOW-</b><br>The god dragon evaporates as this dungeon starts to crumble.<br>You quickly rush out of the dungeon through a newly-formed exit.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead2Second()'>Proceed</button>";
}

function tiamatDead2Second(){
	document.getElementById("picture").innerHTML="<img src='Images/villagers.png'>";
        document.getElementById("textBox").innerHTML="You escape the crumbling ruins as a crowd of villagers from the nearby town run out of their houses<br>and lift you in the air in celebration! You are carried to the local Inn, where a feast has been prepared in your honor."
        document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead2Third()'>Proceed</button>";
}

function tiamatDead2Third(){
	document.getElementById("picture").innerHTML="<img src='Images/bagofcash.png'>";
        document.getElementById("textBox").innerHTML="As you are feasting, adorable game mascot appears, carring a very large bag.<br><b>Hey! Sir! You forgot this when you were running out of the dungeon!</b><br>He drops the large bag on the table, so you decide to open it..."
        document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead2Fourth()'>Proceed</button>";
}

function tiamatDead2Fourth(){
        score += 9999999999999;
		document.getElementById("picture").innerHTML="<img src='Images/gold.png'>";
        document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
        document.getElementById("textBox").innerHTML="<b>IT'S ENTIRELY FULL OF GOLD!</b><br>Your score has gone up by, holy crap, I can't even count, my god.<br>You retire from adventuring, having more than enough money to last you 5 lifetimes.<br><b>YOU'VE WON!</b>"
        document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Play Again?</button>";
}

function tiamatDead3(){
	document.getElementById("youtube").innerHTML="<iframe width='250' height='188' src='http://www.youtube.com/embed/kX3IA3Nop3o?autoplay=1' frameborder='0' autohide='1'></iframe>";
	document.getElementById("picture").innerHTML="<img src='Images/tiamat2defeated.png'>";
        document.getElementById("textBox").innerHTML="Mascot's last blow stops Tiamat dead in her tracks. She tries to strike again, but collapses!<br><b>WH-WHAT? BEATEN BY THE GAME'S MASCOT? ARE YOU KIDDING MEEEE-</b><br>Tiamat's body suddenly evaporates, causing the dungeon to begin to crumble!<br>You and mascot rush towards a newly-formed entrance.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead3Second()'>Proceed</button>";
}

function tiamatDead3Second(){
	document.getElementById("picture").innerHTML="<img src='Images/villagersmascot.png'>";
        document.getElementById("textBox").innerHTML="As you run out of the dungeon, villagers from the nearby town rush out in celebration.<br>However, instead of praising you, they instead praise Adorable Game Mascot! He is lifted up and lead back to town for a feast!<br>You stare in dismay as you are approached by an architect.";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead3Third()'>Proceed</button>";
}

function tiamatDead3Third(){
	document.getElementById("picture").innerHTML="<img src='Images/architect.png'>";
        document.getElementById("textBox").innerHTML="<b>A moment of your time sir...<br>That dungeon was the result of years of work within my family, and I won't take it's destruction lightly.<br>You need to rectify this, or else I will contact the local authorities.</b><br>He hands you a piece of paper...";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='tiamatDead3Fourth()'>Proceed</button>";
}

function tiamatDead3Fourth(){
        score -= 99999999999;
		document.getElementById("picture").innerHTML="<img src='Images/bill.png'>";
        document.getElementById("score").innerHTML="Score : " + score + " | Level : " + level + " ";
        document.getElementById("textBox").innerHTML="Oh my god, it's a bill!<br>A HUGE bill! You're going to have to adventure for the rest of your life if you have any hopes of paying this off!<br>You curse loudly and swear to all sorts of gods that one day you will punch that damn mascot!";
	document.getElementById("buttonBar").innerHTML="<button type='button' onclick='startGame()'>Try...again?</button>";
}