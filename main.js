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

// changes color and quote at 1 minute interval

function intervalChange(func, interval) {
	var now = new Date,
	delay = interval - now % interval;

	function start(){
		changeColor();
		changeQuote();
		setInterval(func, interval);
	}
	setTimeout(start, delay);
}
intervalChange(changeColor, 60 * 1000);
intervalChange(changeQuote, 60 * 1000);

// display quote in random order

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;

}
function changeQuote(){
var hundredBestQuotes = ["Life is about making an impact, not making an income.","Whatever the mind of man can conceive and believe, it can achieve.","Strive not to be a success, but rather to be of value.","Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.","I attribute my success to this: I never gave or took any excuse.","You miss 100% of the shots you don't take.","I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.","The most difficult thing is the decision to act, the rest is merely tenacity.","Every strike brings me closer to the next home run.","Definiteness of purpose is the starting point of all achievement.","Life isn't about getting and having, it's about giving and being.","Life is what happens to you while you're busy making other plans.","We become what we think about.","Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.","Life is 10% what happens to me and 90% of how I react to it.","The most common way people give up their power is by thinking they don't have any.","The mind is everything. What you think you become.","The best time to plant a tree was 20 years ago. The second best time is now.","An unexamined life is not worth living.","Eighty percent of success is showing up.","Your time is limited, so don't waste it living someone else's life.","Winning isn't everything, but wanting to win is.","I am not a product of my circumstances. I am a product of my decisions.","Every child is an artist.  The problem is how to remain an artist once he grows up.","You can never cross the ocean until you have the courage to lose sight of the shore.","I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.","Either you run the day, or the day runs you.","Whether you think you can or you think you can't, you're right.","The two most important days in your life are the day you are born and the day you find out why.","Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.","The best revenge is massive success.","People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.","Life shrinks or expands in proportion to one's courage.","If you hear a voice within you say \"you cannot paint,\" then by all means paint and that voice will be silenced.","There is only one way to avoid criticism: do nothing, say nothing, and be nothing.","Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.","The only person you are destined to become is the person you decide to be.","Go confidently in the direction of your dreams.  Live the life you have imagined.","When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.","Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.","Certain things catch your eye, but pursue only those that capture the heart.","Believe you can and you're halfway there.","Everything you've ever wanted is on the other side of fear.","We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.","Teach thy tongue to say, \"I do not know,\" and thous shalt progress.","Start where you are. Use what you have.  Do what you can.","When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy'.  They told me I didn't understand the assignment, and I told them they didn't understand life.","Fall seven times and stand up eight.","When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.","Everything has beauty, but not everyone can see.","How wonderful it is that nobody need wait a single moment before starting to improve the world.","When I let go of what I am, I become what I might be.","Life is not measured by the number of breaths we take, but by the moments that take our breath away.","Happiness is not something readymade.  It comes from your own actions.","If you're offered a seat on a rocket ship, don't ask what seat! Just get on.","First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.","If the wind will not serve, take to the oars.","You can't fall if you don't climb.  But there's no joy in living your whole life on the ground.","We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.","Too many of us are not living our dreams because we are living our fears.","Challenges are what make life interesting and overcoming them is what makes life meaningful.","If you want to lift yourself up, lift up someone else.","I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.","Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.","You take your life in your own hands, and what happens? A terrible thing, no one to blame.","What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.","I didn't fail the test. I just found 100 ways to do it wrong.","In order to succeed, your desire for success should be greater than your fear of failure.","A person who never made a mistake never tried anything new.","The person who says it cannot be done should not interrupt the person who is doing it.","There are no traffic jams along the extra mile.","It is never too late to be what you might have been.","You become what you believe.","I would rather die of passion than of boredom.","A truly rich man is one whose children run into his arms when his hands are empty.","It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.","If you want your children to turn out well, spend twice as much time with them, and half as much money.","Build your own dreams, or someone else will hire you to build theirs.","The battles that count aren't the ones for gold medals. The struggles within yourself--the invisible battles inside all of us--that's where it's at.","Education costs money. But then so does ignorance.","I have learned over the years that when one's mind is made up, this diminishes fear.","It does not matter how slowly you go as long as you do not stop.","If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.","Remember that not getting what you want is sometimes a wonderful stroke of luck.","You can't use up creativity. The more you use, the more you have.","Dream big and dare to fail.","Our lives begin to end the day we become silent about things that matter.","Do what you can, where you are, with what you have.","If you do what you've always done, you'll get what you've always gotten.","Dreaming, after all, is a form of planning.","It's your place in the world; it's your life. Go on and do all you can with it, and make it the life you want to live.","You may be disappointed if you fail, but you are doomed if you don't try.","Remember no one can make you feel inferior without your consent.","Life is what we make it, always has been, always will be. ","The question isn't who is going to let me; it's who is going to stop me.","When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.","It's not the years in your life that count. It's the life in your years.","Change your thoughts and you change your world.","Either write something worth reading or do something worth writing.","Nothing is impossible, the word itself says, \"I'm possible!\"","The only way to do great work is to love what you do.","If you can dream it, you can achieve it."];
var lawsOfPowerQuotes = ["When you show yourself to the world and display your talents, you naturally stir all kinds of resentment, envy, and other manifestations of insecurity...","you cannot spend your life worrying about the petty feelings of others.","When you are trying to impress people with words, the more you say, the more common you appear, and the less in control. Even if you are saying something banal, it will seem original if you make it vague, open-ended, and sphinxlike. Powerful people impress and intimidate by saying less. The more you say, the more likely you are to say something foolish.","If you are unsure of a course of action, do not attempt it. Your doubts and hesitations will infect your execution. Timidity is dangerous: Better to enter with boldness. Any mistakes you commit through audacity are easily corrected with more audacity. Everyone admires the bold; no one honors the timid.","Do not leave your reputation to chance or gossip; it is your life's artwork, and you must craft it, hone it, and display it with the care of an artist.","Appearing better than others is always dangerous, but most dangerous of all is to appear to have no faults or weaknesses. Envy creates silent enemies. It is smart to occasionally display defects, and admit to harmless vices, in order to deflect envy and appear more human and approachable. Only gods and the dead can seem perfect with impunity.","Keep your friends for friendship, but work with the skilled and competent.","Do not accept the roles that society foists on you. Re-create yourself by forging a new identity, one that commands attention and never bores the audience.","Be the master of your own image rather than letting others define if for you. Incorporate dramatic devices into your public gestures and actions – your power will be enhanced and your character will seem larger than life.","Never assume that the person you are dealing with is weaker or less important than you are. Some people are slow to take offense, which may make you misjudge the thickness of their skin, and fail to worry about insulting them. But should you offend their honor and their pride, they will overwhelm you with a violence that seems sudden and extreme given their slowness to anger.","If you want to turn people down, it is best to do so politely and respectfully, even if you feel their request is impudent or their offer ridiculous.","There is nothing more intoxicating than victory, and nothing more dangerous.","...But the human tongue is a beast that few can master. It strains constantly to break out of its cage, and if it is not tamed, it will turn wild and cause you grief.","If you are unsure of a course of action, do not attempt it. Your doubts and hesitations will infect your execution. Timidity is dangerous: Better to enter with boldness. Any mistakes you commit through audacity are easily corrected with more audacity. Everyone admires the bold; no one honors the timid.","Keep your friends for friendship, but work with the skilled and competent","Do not leave your reputation to chance or gossip; it is your life's artwork, and you must craft it, hone it, and display it with the care of an artist.","Appearing better than others is always dangerous, but most dangerous of all is to appear to have no faults or weaknesses. Envy creates silent enemies. It is smart to occasionally display defects, and admit to harmless vices, in order to deflect envy and appear more human and approachable. Only gods and the dead can seem perfect with impunity.","Do not accept the roles that society foists on you. Re-create yourself by forging a new identity, one that commands attention and never bores the audience. Be the master of your own image rather than letting others define if for you. Incorporate dramatic devices into your public gestures and actions – your power will be enhanced and your character will seem larger than life.","Never assume that the person you are dealing with is weaker or less important than you are. Some people are slow to take offense, which may make you misjudge the thickness of their skin, and fail to worry about insulting them. But should you offend their honor and their pride, they will overwhelm you with a violence that seems sudden and extreme given their slowness to anger. If you want to turn people down, it is best to do so politely and respectfully, even if you feel their request is impudent or their offer ridiculous.","Many a serious thinker has been produced in prisons, where we have nothing to do but think.","If you make a show of going against the times, flaunting your unconventional ideas and unorthodox ways, people will think that you only want attention and that you look down upon them. They will find a way to punish you for making them feel inferior. It is far safer to blend in and nurture the common touch. Share your originality only with tolerant friends and those who are sure to appreciate your uniqueness.","...But the human tongue is a beast that few can master. It strains constantly to break out of its cage, and if it is not tamed, it will tun wild and cause you grief.","There is nothing more intoxicating than victory, and nothing more dangerous.","Lord, protect me from my friends; I can take care of my enemies.","Strike the shepherd and the sheep will scatter","Never waste valuable time, or mental peace of mind, on the affairs of others—that is too high a price to pay.","Be wary of friends—they will betray you more quickly, for they are easily aroused to envy. They also become spoiled and tyrannical. But hire a former enemy and he will be more loyal than a friend, because he has more to prove. In fact, you have more to fear from friends than from enemies. If you have no enemies, find a way to make them.","For the future, the motto is, \"No days unalert.\"","Few are born bold. Even Napoleon had to cultivate the habit on the battlefield, where he knew it was a matter of life and death. In social settings he was awkward and timid, but he overcame this and practice boldness in every part of his life because he saw its tremendous power, how it could literally enlarge a man(even one who, like Napoleon, was in fact conspicuously small).","Despise The Free Lunch","A Prince asked the dying spanish statesman, \"Does your Excellency forgive all your enemies?\" \"I do not have to forgive all my enemies,\" answered the stateman, \"I have had them all shot.\"","Be Royal in your Own Fashion: Act like a King to be treated","A person who cannot control his words shows that he cannot control himself, and is unworthy of respect.","To succeed in the game of power, you have to master your emotions. But even if you succeed in gaining such self-control, you can never control the temperamental dispositions of those around you. And this presents a great danger.","Remember: The best deceivers do everything they can to cloak their roguish qualities. They cultivate an air of honesty in one area to disguise their dishonesty in others. Honesty is merely another decoy in their arsenal of weapons.","Do I not destroy my enemies when I make them my friends?","You choose to let things bother you. You can just as easily choose not to notice the irritating offender, to consider the matter trivial and unworthy of your interest. That is the powerful move. What you do not react to cannot drag you down in a futile engagement. Your pride is not involved. The best lesson you can teach an irritating gnat is to consign it to oblivion by ignoring it.","A heckler once interrupted Nikita Khrushchev in the middle of a speech in which he was denouncing the crimes of Stalin. \"You were a colleague of Stalin\'s,\" the heckler yelled, \"why didn't you stop him then?\" Khrushschev apparently could not see the heckler and barked out, \"Who said that?\" No hand went up. No one moved a muscle. After a few seconds of tense silence, Khrushchev finally said in a quiet voice, \"Now you know why I didn't stop him.\" Instead of just arguing that anyone facing Stalin was afraid, knowing that the slightest sign of rebellion would mean certain death, he had made them feel what it was like to face Stalin—had made them feel the paranoia, the fear of speaking up, the terror of confronting the leader, in this case Khrushchev. The demonstration was visceral and no more argument was necessary.","friendship and love blind every man to their interests.","The key to power, then, is the ability to judge who is best able to further your interests in all situations. Keep friends for friendship, but work with the skilled and competent.","The human tongue is a beast that few can master.","All masters want to appear more brilliant than other people.","An emotional response to a situation is the single greatest barrier to power, a mistake that will cost you a lot more than any temporary satisfaction you might gain by expressing your feelings.","Any man who tries to be good all the time is bound to come to ruin among the great number who are not good.","Appearing better than others is always dangerous, but most dangerous of all is to appear to have no faults or weaknesses. Envy creates silent enemies. It is smart to occasionally display defects, and admit to harmless vices, in order to deflect envy and appear more human and approachable. Only gods and the dead can seem perfect with impunity.","But the human tongue is a beast that few can master. It strains constantly to break out of its cage, and if it is not tamed, it will run wild and cause you grief. Power cannot accrue to those who squander their treasure of words.","Despise The Free Lunch.","Do not accept the roles that society foists on you. Re-create yourself by forging a new identity, one that commands attention and never bores the audience. Be the master of your own image rather than letting others define if for you. Incorporate dramatic devices into your public gestures and actions – your power will be enhanced and your character will seem larger than life.","Do not leave your reputation to chance or gossip; it is your life\'s artwork, and you must craft it, hone it, and display it with the care of an artist.","Fools say that they learn by experience. I prefer to profit by others experience.","He who poses as a fool is not a fool.","Hide your intentions not by closing up (with the risk of appearing secretive, and making people suspicious) but by talking endlessly about your desires and goals-just not the real ones.","If you are unsure of a course of action, do not attempt it. Your doubts and hesitations will infect your execution. Timidity is dangerous: Better to enter with boldness. Any mistakes you commit through audacity are easily corrected with more audacity. Everyone admires the bold; no one honors the timid.","If you lead the sucker down a familiar path, he won\'t catch on when you lead him into a trap.","If you make a show of going against the times, flaunting your unconventional ideas and unorthodox ways, people will think that you only want attention and that you look down upon them. They will find a way to punish you for making them feel inferior. It is far safer to blend in and nurture the common touch. Share your originality only with tolerant friends and those who are sure to appreciate your uniqueness.","If, for example, you are miserly by nature, you will never go beyond a certain limit; only generous souls attain greatness.","Keep your friends for friendship, but work with the skilled and competent.","Little about your work, tease and titillate with alluring, even contradictory comments, then stand back and let others try to make sense of it all.","Lord, protect me from my friends; I can take care of my enemies.","Many a serious thinker has been produced in prisons, where we have nothing to do but think.","Never be distracted by people\'s glamorous portraits of themselves and their lives; search and dig for what really imprisons them.","Never waste valuable time, or mental peace of mind, on the affairs of others—that is too high a price to pay.","Person who cannot control his words shows that he cannot control himself, and is unworthy of respect.","Power is a game, and in games you do not judge your opponents by their intentions but by the effects of their actions.","Sometimes any emotion is better than the boredom of security.","The human tongue is a beast that few can master.","The key to power, then, is the ability to judge who is best able to further your interests in all situations. Keep friends for friendship, but work with the skilled and competent.","The mighty lion toys with the mouse that crosses his path—any other reaction would mar his fearsome reputation.","There is nothing more intoxicating than victory, and nothing more dangerous.","When you are trying to impress people with words, the more you say, the more common you appear, and the less in control. Even if you are saying something banal, it will seem original if you make it vague, open-ended, and sphinxlike. Powerful people impress and intimidate by saying less. The more you say, the more likely you are to say something foolish.","When you meet a swordsman, draw your sword: Do not recite poetry to one who is not a poet.","When you show yourself to the world and display your talents, you naturally stir all kinds of resentment, envy, and other manifestations of insecurity… you cannot spend your life worrying about the petty feelings of others.","You cannot repress anger or love, or avoid feeling them, and you should not try.","You choose to let things bother you. You can just as easily choose not to notice the irritating offender, to consider the matter trivial and unworthy of your interest. That is the powerful move. What you do not react to cannot drag you down in a futile engagement. Your pride is not involved. The best lesson you can teach an irritating gnat is to consign it to oblivion by ignoring it."];
var reggaeQuotes = ["The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.","I don't know where life will lead me, but I know where I\'ve been. I can't say what life will show me, but I know what I\'ve seen. Tried my hand at love and friendship, but all that is passed and gone. This little boy is moving on.","Some people feel the rain. Others just get wet.","I've abused myself a lot over the years. But my voice is still intact – really, it's better.","This world was not created piecemeal. Africa was born no later and no earlier than any other geographical area on this globe. Africans, no more and no less than other men, possess all human attributes, talents and deficiencies, virtues and faults.","Peace is a day-to-day problem, the product of a multitude of events and judgments. Peace is not an \"is\", it is a \"becoming\".","A man who says \"I have learned enough and will learn no further\" should be considered as knowing nothing at all.","Sometimes that is why you might even stay in the bathroom for even half an hour, making that water running all over, just singing.","Well, until this very day, I'm still learning.","I don't stand for the black man's side; I don't stand for the white man's side. I stand for God's side.","In the beginning there was the word. The word was Jah. The word is in I, Jah is in I. I make what is good, better, and what is better, best. I follow this in every aspect of life.","Open your eyes & look within, are you satisfied with the life you living?","In the abundance of water, the fool is thirsty.","Throughout history, it has been the inaction of those who could have acted; the indifference of those who should have known better; the silence of the voice of justice when it mattered most; that has made it possible for evil to triumph.","Life and Jah are one in the same. Jah is the gift of existence. I am in some way eternal, I will never be duplicated. The singularity of every man and woman is Jah's gift. What we struggle to make of it is our sole gift to Jah. The process of what that struggle becomes, in time, the Truth.","The only difference between a good day and a bad day is your attitude.","A bird sitting on a tree is never afraid of the branch breaking, because her trust is not on the branch but on its own wings. Always believe in yourself","You never know how strong you are until being strong is your only choice.","Me only have one ambition, y'know. I only have one thing I really like to see happen. I like to see mankind live together – black, white, Chinese, everyone – that\'s all.","Just can\'t live that negative way…make way for the positive day!"];
var randoBest = hundredBestQuotes[Math.floor(Math.random() * hundredBestQuotes.length)];
var randoPower = lawsOfPowerQuotes[Math.floor(Math.random() * lawsOfPowerQuotes.length)];
var randoReggae = reggaeQuotes[Math.floor(Math.random() * reggaeQuotes.length)];
var quoteArray = [randoBest, randoPower, randoReggae];
document.getElementById("quotes").innerHTML = quoteArray.join(" ");
console.log(quoteArray);
}
changeQuote();
