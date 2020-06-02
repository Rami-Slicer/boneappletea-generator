/* Hello!
 * You've found yourself in the script that make the action happen, that turns the bon to bone, that switches the
 * appetit to apple tea, but most importantly, gives a bone apple tea!
 */

//add entries to this dictionary to add more bone apple teas.
const wordlib = {
	"bon": "bone",
	"appetit": "apple tea",
	"onward": "on word",
	"onwards": "on words",
	"violence": "violins",
	"piece of cake": "pizza cake",
	"entitled": "in title",
	"indoctrination": "in doctor nation",
	"indoctrinating": "in doctor mating",
	"indoctrinated": "in doctor mated",
}

function generate() {
	var output = document.getElementById("textbox").value;
	
	for (const [key, value] of Object.entries(wordlib)) {
		var re = new RegExp(key, 'g');
		output = output.replace(re,value);
	}
	
	document.getElementById("output").innerHTML = output;
} 
