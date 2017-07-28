function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var insults1 = [
  "racist",
  "xenophobic",
  "privileged",
  "white",
  "womyn-hating",
  "misogynistic",
  "racist",
  "chauvinistic",
  "hateful",
  "fascist",
  "racist",
  "straight",
  "narrow-minded",
  "deluded",
  "marginalizing",
  "eurocentric"
];

var insults2 = [
  "sexist",
  "bigoted",
  "elitist",
  "oppressive",
  "ignorant",
  "patriarchal",
  "fat-shaming",
  "male",
  "hyper-masculine",
  "mansplaining",
  "middle-class",
  "nativist",
  "close-minded",
  "euro-centric",
  "ethno-centric",
  "elitist",
  "alt-right",
];

var insults3 = [
  "homophobic",
  "transphobic",
  "cisgendered",
  "islamophobic",
  "rich",
  "greedy",
  "nazi",
  "intolerant",
  "heteronormative",
  "heterosexual",
  "thin-privileged",
  "imperialistic",
  "nationalistic",
  "anti-semitic",
  "hate-mongering",
  "victim-blaming",
  "man-splaining",
  "putin-loving"
];

var insults4 = [
  "bigot",
  "Christian",
  "Conservative",
  "Republican",
  "Catholic",
  "Protestant",
  "prude",
  "zionist",
  "pig",
  "Russian Hacker",
  "nazi",
  "Neo-Confederate",
  "Hitler",
  "neo-nazi",
  "traditionalist",
  "subhuman",
  "rapist",
  "colonialist",
  "white-supremacist",
  "sympathizer",
  "Nazi",
  "rape-apologist",
  "cracker",
  "whitey",
  "white-devil",
  "WASP",
  "fear-monger",
  "transphobe",
  "islamophobe",
  "nationalist"
]

var rand1 = random(0, insults1.length - 1);
var rand2 = random(0, insults2.length - 1);
var rand3 = random(0, insults3.length - 1);
var rand4 = random(0, insults4.length - 1);

var insult = "You're a " + insults1[rand1] + ", " + insults2[rand2] + ", " + insults3[rand3] + " " + insults4[rand4] + "!"
var blurb = document.getElementById('blurb');

blurb.innerHTML = '&ldquo;' + insult + '&rdquo;';

var caps = document.getElementById('caps');
var capsclicked = false;

caps.onclick = function() {

  blurb.className += " " + "uppercase";

  if(capsclicked) {
     blurb.className = "insult";
     caps.innerHTML = "RAGE CAPS";
   } else {
     caps.innerHTML = "SENTENCE CASE";
   }

   capsclicked = !capsclicked
}

var shuffle = document.getElementById('shuffle');
shuffle.onclick = function() {
  window.location.reload();
}

var tweet = document.getElementById("tweet");
tweet.onclick = function() {
  window.open("https://twitter.com/share" + "?text=" + insult + "%0A" + " %23SJWinsult",'','width=400,height=300')
}


