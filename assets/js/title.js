if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){loaded()})}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){loaded()})}function loaded(){setInterval(loop,500)}var x=0;var titleText=["❤","J","JF","❤","D","De","Dev","Deve","Devel","Develo","Develop","Develope","Developer","❤","JF Developer"];function loop(){document.getElementsByTagName("title")[0].innerHTML=titleText[x++%titleText.length]}
