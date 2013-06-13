function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
    {
      c_start = c_value.indexOf(c_name + "=");
    }
if (c_start == -1)
	{
	  c_value = null;
	}
else
    {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1)
        {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
        }
return c_value;
}

function setCookie(c_name,value,exdays)
{
document.cookie = null;	
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;
}

function statsToCookie(){
    setCookie("swordflag",swordflag,1);
    setCookie("fightflag",fightflag,1);
    setCookie("ringCount",ringCount,1);
    setCookie("dodgeRing",dodgeRing,1);
    setCookie("strengthRing",strengthRing,1);
    setCookie("magicRing",magicRing,1);
    setCookie("pointRing",pointRing,1);
    setCookie("weakenRing",weakenRing,1);
	setCookie("enchantedIron",enchantedIron,1);
	setCookie("swordflag2", swordflag2, 1);
	setCookie("mimicDevice", mimicDevice, 1);
	setCookie("shameRing", shameRing, 1);
}

function cookieToStats(){
    swordflag=getCookie("swordflag");
    fightflag=getCookie("fightflag");
    ringCount=getCookie("ringCount");
    dodgeRing=getCookie("dodgeRing");
    strengthRing=getCookie("strengthRing");
    magicRing=getCookie("magicRing");
    pointRing=getCookie("pointRing");
    weakenRing=getCookie("weakenRing");
	enchantedIron=getCookie("enchantedIron");
	swordflag2=getCookie("swordflag2");
	mimicDevice=getCookie("mimicDevice");
	shameRing=getCookie("shameRing");
}

function del_cookie(name)
{
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
