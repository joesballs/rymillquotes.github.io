var rymillQuotes = new Array();
rymillQuotes[0] = "3 hours revision a day atleast";
rymillQuotes[1] = "What even is a 5 letter swear word?";
rymillQuotes[2] = "<i>*wears stripey socks and puts his feet on the desk*</i>";
rymillQuotes[3] = "<font color='red'>PHYSICALLY</font> turn your chairs around";
rymillQuotes[4] = "fruad your way into the education system";
rymillQuotes[5] = "They used the best wood in the world to make this school, it would take days to burn down";
rymillQuotes[6] = "this booklet has 90% of the course in it lads";
rymillQuotes[7] = "The government is run by Google";
rymillQuotes[8] = "quit yapping lads";
rymillQuotes[9] = "what are u doing mate";
rymillQuotes[10] = "<i>*wears same coloured socks to match his jumper*</i>";
rymillQuotes[11] = "<i>*to ben*</i> you can’t say anything about haircuts";
rymillQuotes[12] = "you all need to get out more, when i was your age i was jumping the fence to glastonbury";
rymillQuotes[13] = "there were no phones in my day";
rymillQuotes[14] = "what are you doing lad?";
rymillQuotes[15] = "childwall is too posh for you";
rymillQuotes[16] = "alright hair do 1 and 2 over there ";
rymillQuotes[17] = "you’re not revising man";
rymillQuotes[18] = "and all that palaver";
rymillQuotes[19] = "when you leave this school with this qualification you’ll be makin bacon";
rymillQuotes[20] = "what a load of phony balony";
rymillQuotes[21] = "<i>*asks you a question that you don’t know*</i> ... i rest my case";
rymillQuotes[22] = "alright over there lad?";
rymillQuotes[23] = "Mr spence over there";
rymillQuotes[24] = "What’s he do when he’s at home";
rymillQuotes[25] = "Nah come on Joel man";
rymillQuotes[26] = "it's a past paper I’ve cobbled together";
rymillQuotes[27] = "I mean I do it every year am like 70-80% accurate";
rymillQuotes[28] = "The top an tale of it is";
rymillQuotes[29] = "That's a minimise there lad";
rymillQuotes[30] = "i know u just minimised it, i just saw you. turn it off.";
rymillQuotes[31] = "Yeno I’m not that good at maths";
rymillQuotes[32] = "There’s a reason we get higher than national average";
rymillQuotes[33] = "My point proven";
rymillQuotes[34] = "goed take the new sign home as a souvenir";
rymillQuotes[35] = "Basically I guess the questions every year";
rymillQuotes[36] = "an all tha palaver";
rymillQuotes[37] = "<font color='red'>LOG OFF</font> and <font color='red'>DISAPPEAR</font>";
rymillQuotes[38] = "back in my day lad";
rymillQuotes[39] = "Ben over there ye need to be revisin";
rymillQuotes[40] = "phoney baloney";
rymillQuotes[41] = "gotta eat your granola";
rymillQuotes[42] = "joe over there what's the answer"
rymillQuotes[43] = "that's a breach of the computer misuse act"
rymillQuotes[44] = "<i>*ben says it's his birthday*</i> <font color='red'>not bothered</font>"

var rymillSpeech = new Array();
rymillSpeech[0] = "says";
rymillSpeech[1] = "shouts";
rymillSpeech[2] = "shudders";
rymillSpeech[3] = "beams";
rymillSpeech[4] = "remarks";
rymillSpeech[5] = "carps";
rymillSpeech[6] = "scoffs";
rymillSpeech[7] = "snaps";
rymillSpeech[8] = "bellows";

var rymillRandom = Math.floor(Math.random() * rymillQuotes.length);
var speechRandom = Math.floor(Math.random() * rymillSpeech.length);
document.getElementById("rymillDisplay").innerHTML = 'Rymill '+rymillSpeech[speechRandom]+': <br />"'+rymillQuotes[rymillRandom]+'"';