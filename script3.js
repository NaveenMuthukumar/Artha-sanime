'use strict';

var RbMenu = function(elmId) {
  var elm    = document.querySelector(elmId);
  console.log(elm);
  var target = document.querySelector(elm.getAttribute('rb-target'));

  elm.addEventListener('click', function(evt) {
    if (target.classList.contains('active') === true) {
      target.classList.remove('active');
    }
    else {
      target.classList.add('active');
    }
  });
}

RbMenu('#rb_menu_toggle');
function dbz()
{
  document.getElementById("fav").innerHTML="Dragon Ball Z continues the adventures of Son Goku in his adult life as he and his companions defend the Earth against villains including aliens (Vegeta, Frieza), androids (Cell), and magical creatures (Majin Buu). At the same time, the story parallels the life of his son, Gohan, as well as the development of his rivals, Piccolo and Vegeta.Due to the success of the anime in the United States, the manga chapters making up its story were initially released by Viz Media under the Dragon Ball Z title.";

  
}
function naruto()
{
  document.getElementById("fav").innerHTML="Naruto was serialized in Shueisha's magazine, Weekly Shōnen Jump from 1999 to 2014, and released in tankōbon (book) form in 72 volumes. The manga was adapted into an anime television series produced by Pierrot and Aniplex, which broadcast 220 episodes in Japan from 2002 to 2007; the English dub of the series aired on Cartoon Network and YTV from 2005 to 2009. Naruto: Shippuden, a sequel to the original series, premiered in Japan in 2007, and ended in 2017, after 500 episodes. The English dub was broadcast on Disney XD from 2009 to 2011, airing the first 98 episodes, and then switched over to Adult Swim's Toonami programming block in January 2014, starting over from the first episode. ";
}
function ft()
{
  document.getElementById("fav").innerHTML="The manga has been adapted into an anime series produced by A-1 Pictures, Dentsu Inc., Satelight, Bridge, and CloverWorks which was broadcast in Japan on TV Tokyo from October 2009 to March 2013. A second series was broadcast from April 2014 to March 2016. A third and final series was aired from October 2018 to September 2019. The series has also inspired numerous spin-off manga, including a prequel by Mashima, Fairy Tail Zero, and a sequel storyboarded by him, titled Fairy Tail: 100 Years Quest. Additionally, A-1 Pictures has developed nine original video animations and two animated feature films.The manga series was originally licensed for an English release in North America by Del Rey Manga, which began releasing the individual volumes in March 2008 and ended its licensing with the 12th volume release in September 2010. In December 2010, Kodansha USA took over the North American release of the series.";
}
function hai()
{
  document.getElementById("fav").innerHTML="Haikyu!! (ハイキュー!!, Haikyū!!, from the kanji 排球 volleyball) is a Japanese manga series written and illustrated by Haruichi Furudate. The story follows Shoyo Hinata, a boy determined to become a great volleyball player despite his small stature. It was serialized in Shueisha's Weekly Shōnen Jump from February 2012 to July 2020, with its chapters collected in forty-five tankōbon volumes.An anime television series adaptation by Production I.G aired from April 2014 to September 2014, with 25 episodes. A second season aired from October 2015 to March 2016, with 25 episodes. A third season aired from October 2016 to December 2016, with 10 episodes. A fourth season was announced during the Jump Festa '19 and was planned for release in two cours, the first cour of 13 episodes aired from January to April 2020, and the second cour of 12 episodes aired from October to December 2020.";
}