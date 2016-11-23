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
  "marginalizing"
];

var insults2 = [
  "sexist",
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
  "elitist"
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
  "victim-blaming"
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
  "nazi",
  "neo-con",
  "Hitler",
  "neo-nazi",
  "traditionalist",
  "subhuman",
  "rapist",
  "colonialist",
  "sympathizer",
  "Nazi",
  "rape-apologist",
  "cracker",
  "white-devil",
  "WASP",
  "fear-monger",
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
  window.open("https://twitter.com/share" + "?text=" + insult + "%0A" + " %23SJWinsult @skylerwestby",'','width=400,height=300')
}

// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));
