// display time

function showTime(){
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	document.getElementById("time").innerHTML = m;
	var t = setTimeout(showTime, 1000);
	console.log(m);
}
showTime();

// randomly picks from array of 140 named web colors

function changeColor(){
var webColors = ["AliceBlue","AntiqueWhite","Aqua","AquaMarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate ","Coral","CornFlowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenrodYellow","LightGray","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
var randoColor = webColors[Math.floor(Math.random() * webColors.length)];
document.body.style.backgroundColor = randoColor;
console.log(randoColor);
console.log(webColors.length);
document.getElementById("what-color").innerHTML = randoColor;
}

// changes color at 1 minute interval

function colorChange(func, interval) {
	var now = new Date,
	delay = interval - now % interval;

	function start(){
		changeColor();
		setInterval(func, interval);
	}
	setTimeout(start, delay);
}
colorChange(changeColor, 60 * 1000);

// display quote in randor order
function quoteRandomizer (){
var hundredBestQuotes = ['An unexamined life is not worth living.', 'Eighty percent of success is showing up.'];
var lawsOfPowerQuotes = ['Do not leave your reputation to chance or gossip; it is your life\'s artwork, and you must craft it, hone it, and display it with the care of an artist.', 'There is nothing more intoxicating than victory, and nothing more dangerous.'];
var reggaeQuotes = ['You never know how strong you are until being strong is your only choice.', 'The only difference between a good day and a bad day is your attitude.'];
var randoBest = hundredBestQuotes[Math.floor(Math.random() * hundredBestQuotes.length)];
var randoPower = lawsOfPowerQuotes[Math.floor(Math.random() * lawsOfPowerQuotes.length)];
var randoReggae = reggaeQuotes[Math.floor(Math.random() * reggaeQuotes.length)];
var quoteArray = [randoBest, randoPower, randoReggae];
var quoteRandom = quoteArray[Math.floor(Math.random() * quoteArray.length)];
console.log(quoteRandom);
}
quoteRandomizer ()





