/*
 * JS file to add a new tab 
 * Created by Riddhi Modha
 */


var tabId = 1; //a variable to keep the tab count and set the id of the tab

/**
 * Function to add a new tab
 */
function addnewtab() {
	tabId++; //increment the tabId 
	var i;
	//accessing the 'tab'->(id) div
	var tabs = document.getElementById("tab");
	/**
	  *loop through all the 'tabs' in the tab div,
	  *when a new tab is created reset the previous tab's class
	  *from active to empty
	  */
	for(i=0; i < tabId; i++)
	{
		var previoustab = document.getElementById(i); //getting the previoustab
		previoustab.setAttribute('class',""); //setting the class attribute of that tab to null

		/**
		  *An attempt to accomodate new tabs created
		  *CSS gets a little messy (sorry :/)
		  *if the number of tabs crosses 5 then reset the width of the previous tabs
		  */
		if(tabs.children.length>5)
		{
			previoustab.style.width = previoustab.offsetWidth - 30 + "px";
		}
	}
    var newtab = document.createElement("BUTTON"); //create a newtab as button
    newtab.className = 'active'; //set the class of the button as active
    newtab.innerHTML = 'Youtube - #WeAreNamshi'+'<img src="images/close.png">'; //set the text as shown
    newtab.setAttribute('id',tabId); //set the id as tabId
    document.getElementById("tabcontent").src = "https://www.youtube.com/embed/vX8M7gww_F8"; //display content on the iframe as this link
    document.getElementById("AddressBar").value = "https://www.youtube.com/embed/vX8M7gww_F8"; //set the address bar text to the link 
    var addtabbutton = document.getElementById("addtabbutton"); //get the addtab button 
    tabs.appendChild(newtab); //add the newtab to the 'tab' div
    tabs.insertBefore(newtab, addtabbutton); //insert it before the add tab button
}
