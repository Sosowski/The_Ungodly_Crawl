function changelog(){
	window.open("changelog.html")
}

function Inventory(){
    window.open("inventory.html")
}

function checkFlags(){
    var inventoryString;
    
    //Pull the nessisary flags from cookies
    inventoryString = "You currently have : <ul>";
    cookieToStats();
	if(swordflag == 1){
            
            inventoryString += "<li>a magical sword</li>";
			
	}
        if(ringCount >= 1){
            if(dodgeRing >=1){
                inventoryString += "<li>" + dodgeRing + " dodge ring(s)</li>";
            }
            if(strengthRing >= 1){
                inventoryString += "<li>" + strengthRing + " strength ring(s)</li>";
            }
            if(magicRing >= 1){
                inventoryString += "<li>" +  magicRing + " magic ring(s)</li>";
            }
            if(pointRing >= 1){
                inventoryString += "<li>" +  pointRing + " point ring(s)</li>";
            }
            if(weakenRing >= 1){
                inventoryString += "<li>" +  weakenRing + " weakening ring(s)</li>";
            }
			if(shameRing >= 1){
				inventoryString	+= "<li>" +  shameRing + " shame ring(s)</li>";
			}
        }
		if(enchantedIron == 1){
			inventoryString += "<li>a bar of enchanted iron</li>";	
		}
		if(swordflag2 == 1){
			inventoryString += "<li>the Cruel Longsword of the Hero</li>";
		}
		if(mimicDevice == 1){
			inventoryString += "<li>a mimic detector</li>";	
		}
            inventoryString += "</ul>";
        if(inventoryString == "You currently have : <ul></ul>"){
            inventoryString = "You have no items.";
        }
        
        document.getElementById("message").innerHTML=inventoryString;
}