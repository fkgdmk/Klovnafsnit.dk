var $afsnitLabel = $('.afsnit');
var $header = $('.header');
var $klovnLogo = $('.logo');
var klovnImg = document.getElementById("image");
var pauseLogo = document.getElementById("pauseLogo");
var $pauseLogo = $('.pauseLogo');
var audio = new Audio('BentFabric.mp3');
var $tableDiv = $('.tableDiv');

var action = 1;
var action1 = 2;
var afsnit = ""


var season1 = ["5 årsdagen", "De nye danskere", "Hushovmesteren", "Dalai Lama","Godfather of Drugs",
"Løft ikke hunden", "Fars sidste ønske", "Str. 44" , "Årstiderne", "Farvel igen mor"];

var season2 = ["Casa Tua", "Bye Bye Bodil", "Don Ø-æffæren", "Thors øje", "Kgl. Hofnar", "It's a jungle down there",
"Ambassadøren", "Carøes barnedåb", "Irma-pigen", "Franks fede ferie"];

var season3 = ["Rosé-forbandelsen", "London Kashmir", "Pepino og Pepito", "Nina krære Nina", "100 dage i Forum",
"Biggie Blackie", "Længe leve demokratiet", "Bøssernes Kennedy", "En revisor-smølfe-CD", "God jul, Frank"];

var season4 = ["Unge hjerter", "Hjem til far", "Sankt Hans", "Bornholm", "Aben Ditmark", "Jarlens død",
            "Piverts Polterarbend", "Hejsan Sverige", "Tango for tre", "Ups!"];

var season5 = ["Mamma Mia", "Mere ost Christian Braad Thomsen?", "White House Potential", "Tak for svaneæg",
            "Den japanske have", "Troldmanden fra Frederiksberg", "Hør nu efter Frank!", "Tillykke Frank",
            "Drys fra muffedissen", "Suprise Mia"];

var season6 = ["Guffeliguf", "Shut Up", "Sivsko og ægget", "Fru af og til", "Monsieur le boss",
            "Bedragsholm slot", "Bispebjerg Tricket", "Et krus for et knus", "Dilettanterne", "Falsk Lorte Alarm"];

var top10 = ["Bedragsholm slot", "White House Potential", "De nye danskere", "Bornholm", "Hejsan Sverige",
"Hushovmesteren", "Godfather of Drugs", "Falsk Lorte Alarm", "Piverts Polterarbend", "Franks fede ferie"];

var citater = ['"Man kan altid tage en tage en thai pige på brysterne" - Casper Christensen',
'"Jeg anede ikke at sorte kunne interessere sig for økonomi" - Frank Hvam',
'"Jeg kan ikke aflæse en fed mands ansigtsudtryk" - Casper Christensen',
'"Fuck Amnesty. Det´ poolparty" - Casper Christensen', '"Der er lort i vandet!" - Casper Christensen',
'"Det´ grande." - Pivert', '"Jeg har bare sådan en lars lars dag" - Lars Hjortshøj',
'"Carsten Bang, jeg fatter ikke hvor du er. Du flytter til fyn uden at ringe" - Casper Christensen' ];



function main(){

  var $s1 = $('.s1');
  var $s2 = $('.s2');
  var $s3 = $('.s3');
  var $s4 = $('.s4');
  var $s5 = $('.s5');
  var $s6 = $('.s6');
  var $top10 = $('.top10Btn');
  var $alleAfsnitBtn = $('.alleAfsnitBtn');
  audio.volume = 0.2;

  popUpWindow();

  $("div#klovnLogo").removeClass("hidden");

  hideAndFade();
  playAndPause();
  afsnit = visAfsnit($s1, season1), visAfsnit($s2, season2), visAfsnit($s3, season3),
  visAfsnit($s4, season4), visAfsnit($s5, season5), visAfsnit($s6, season6), visAfsnit($top10, top10);


  $('.alleAfsnitBtn').on('click', function(){
    if (action === 1) {
        $('.afsnit').css("color", "#E73028");
        action = 2;
    } else {
        $('.afsnit').css("color", "#F39591");
        action = 1;
    }
    afsnit = alleAfsnit();
    $afsnitLabel.text(afsnit);
  });

  sendTilUrl();
}

function popUpWindow() {

  var $popUpContent = $('.popUpContent');
  var $contact = $('.contact');

  var modal = document.getElementById("popUp");
  var $popUp = $('.popUp');

  $('.showTop10').on('click', function () {
    modal.style.display = "block";
    $popUpContent.text("Bedragsholm slot, White House Potential, De nye danskere, Bornholm, Hejsan Sverige, Hushovermesteren, Godfather of Drugs, Falsk lorte alarm, Piverts polterarbend, Franks fede ferie.");
  });

  $('.dagensCitat').on('click', function(){
    modal.style.display = "block";
    $popUpContent.text(dagensCitat());
  });

  var test = 0;
  $contact.on('click', function() {
    modal.style.display = "block";
    $popUpContent.text("Klovnafsnit@gmail.com")

  })

  $('.close').on('click', function() {
      modal.style.display = "none";
  });

  window.onclick = function(event) {
    if (event.target == modal){
      modal.style.display = "none";
    }
  }

}


function hide (){

  $("div#klovnLogo").removeClass("hidden");
  $("table#knapper").removeClass("hidden");

}

function dagensCitat () {
  var citat = findAfsnit(citater);
  return citat;
}

function myFunction(x) {
    x.classList.toggle("change");
}

function sendTilUrl () {

  var url = "";

  $('.logo').on('click', function(){

    switch (afsnit) {

      //Sæson 1
      case "5 årsdagen":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/5-aarsdagen-17358/';
        break;
      case "De nye danskere":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/de-nye-danskere-17359/';
        break;
      case "Hushovmesteren":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/hushovmesteren-17364/';
        break;
      case "Dalai Lama":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/dalai-lama-17362/';
        break;
      case "Godfather of Drugs":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/godfather-of-drugs-17365/';
        break;
      case "Løft ikke hunden":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/loeft-ikke-hunden-17360/';
        break;
      case "Fars sidste ønske":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/fars-sidste-oenske-17361/';
        break;
      case "Str. 44":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/str-44-17363/';
        break;
      case "Årstiderne":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/aarstiderne-17367/';
        break;
      case "Farvel igen mor":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/farvel-igen-mor-17366/';
        break;

      //Sæson 2
      case "Casa Tua":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/casa-tua-17372/';
          break;
      case "Bye Bye Bodil":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/bye-bye-bodil-17377/';
        break;
      case "Don Ø-æffæren":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/don-oe-affaeren-17369/';
        break;
      case "Thors øje":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/thors-oeje-52912/';
        break;
      case "Kgl. Hofnar":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/kgl-hofnar-52913/';
        break;
      case "It's a jungle down there":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/its-a-jungle-down-there-17368/';
        break;
      case "Ambassadøren":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/ambassadoeren-17374/';
        break;
      case "Carøes barnedåb":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/caroees-barnedaab-95902/';
        break;
      case "Irma-pigen":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/irma-pigen-17375/';
        break;
      case "Franks fede ferie":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/franks-fede-ferie-17376/';
        break;

      //Sæson 3
      case "Rosé-forbandelsen":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/ros-forbandelsen-17380/';
        break;
      case "London Kashmir":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/london-kashmir-17381/';
        break;
      case "Pepino og Pepito":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/pepino-og-pepito-17383/';
        break;
      case "Nina kære Nina":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/nina-kaere-nina-17378/';
        break;
      case "100 dage i Forum":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/100-dage-i-forum-17382/';
        break;
      case "Bigge Blackie":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/biggie-blackie-17379/';
        break;
      case "Længe leve demokratiet":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/laenge-leve-demokratiet-17385/';
        break;
      case "Bøssernes Kennedy":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/boessernes-kennedy-17387/';
        break;
      case "En revisor-smølfe-CD":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/en-revisor-smoelfe-cd-17386/';
        break;
      case "God jul, Frank":
        url = 'https://play.tv2.dk/programmer/serier/komedie/klovn/god-jul-frank-17384/';
        break;

      //Sæson 4
      case "Unge hjerter":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/unge-hjerter-17388/";
                break;
            case "Hjem til far":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/hjem-til-far-17394/";
                break;
            case "Sankt Hans":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/sankt-hans-17389/";
                break;
            case "Bornholm":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/bornholm-17390/";
                break;
            case "Aben Ditmark":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/aben-ditmark-17391/";
                break;
            case "Jarlens død":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/jarlens-doed-17400/";
                break;
            case "Piverts Polterarbend":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/piverts-polterabend-17393/";
                break;
            case "Hejsan Sverige":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/hejsan-sverige-17395/";
                break;
            case "Tango for tre":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/tango-for-tre-17402/";
                break;
            case "Ups!":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/ups-17401/";
                break;

          //Sæson 5
                      case "Mamma Mia":
                          url = "http://play.tv2.dk/programmer/serier/komedie/klovn/mamma-mia-17397/";
                          break;
                      case "Mere ost Christian Braad Thomsen?":
                          url = "http://play.tv2.dk/programmer/serier/komedie/klovn/mere-ost-christian-braad-thomsen-17399/";
                          break;
                      case "White House Potential":
                          url = "http://play.tv2.dk/programmer/serier/komedie/klovn/white-house-potential-17404/";
                          break;
                      case "Tak for svaneæg":
                          url = "http://play.tv2.dk/programmer/serier/komedie/klovn/tak-for-svaneaeg-17403/";
                          break;
                      case "Den japanske have":
                          url = "http://play.tv2.dk/programmer/serier/komedie/klovn/den-japanske-have-17392/";
                          break;
                      case "Troldmanden fra Frederiksberg":
                          url = "http://play.tv2.dk/programmer/serier/komedie/klovn/troldmanden-fra-frederiksberg-17398/";
                          break;
                      case "Hør nu efter Frank!":
                          url = "http://play.tv2.dk/programmer/serier/komedie/klovn/hoer-nu-efter-frank-17396/";
                          break;
                      case "Tillykke Frank":
                          url = "http://play.tv2.dk/programmer/serier/komedie/klovn/tillykke-frank-17407/";
                          break;
                      case "Drys fra muffedissen":
                          url = "http://play.tv2.dk/programmer/serier/komedie/klovn/drys-fra-muffedissen-17406/";
                          break;
                      case "Suprise Mia":
                          url = "http://play.tv2.dk/programmer/serier/komedie/klovn/surprise-mia-17405/";
                          break;

      //Sæson 6
      case "Guffeliguf":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/guffeliguf-17411/";
                break;
            case "Shut Up":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/shut-up-17408/";
                break;
            case "Sivsko og ægget":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/sivsko-og-aegget-17409/";
                break;
            case "Fru af og til":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/fru-af-og-til-17415/";
                break;
            case "Monsieur le boss":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/monsieur-le-boss-17410/";
                break;
            case "Bedragsholm slot":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/bedragsholm-slot-17417/";
                break;
            case "Bispebjerg Tricket":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/bispebjergtricket-26058/";
                break;
            case "Et krus for et knus":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/et-knus-for-et-krus-17414/";
                break;
            case "Dilettanterne":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/dilettanterne-17412/";
                break;
            case "Falsk Lorte Alarm":
                url = "http://play.tv2.dk/programmer/serier/komedie/klovn/falsk-lorte-alarm-17413/";
                break;
      default:
        console.log("Switch fejl");
    }

    if (afsnit !== "") {
      audio.pause();
      window.open(url);
      klovnImg.src="images/klovnIcon.ico";
      pauseLogo.src="images/play.png";
      $afsnitLabel.text("");
      afsnit = "";
      action1=2;
    } else {
      alert('Vælg sæson eller kategori');
    }
  });

}

function changeKlovnImg () {

  klovnImg.src="images/senuIcon1.ico";

  return false;
}


function hideAndFade() {
  $tableDiv.hide();
  $klovnLogo.hide();
  $tableDiv.fadeIn(3000);
  $klovnLogo.fadeIn(2000);

}

function playAndPause () {

  $('.pauseBtn').on('click', function() {
    if (action1 === 1) {
        pauseLogo.src="images/play.png";
        audio.pause();
        action1 =  2;
    } else {
        pauseLogo.src="images/pause1.png";
        audio.play();
        action1 = 1
    }

  });

}

function alleAfsnit () {

  var randomTal = Math.floor(Math.random()*6)+1;
  var afsnit;

  switch (randomTal) {
    case 1:
      afsnit = findAfsnit(season1);
      break;
    case 2:
      afsnit = findAfsnit(season2);
      break;
    case 3:
      afnit = findAfsnit(season3);
      break;
    case 4:
      afsnit = findAfsnit(season4);
      break;
    case 5:
      afsnit = findAfsnit(season5);
      break;
    case 6:
      afsnit = findAfsnit(season6);
      break;
    default:

  }
  return afsnit;

}

function visAfsnit(btn, array){

  $(btn).on('click', function(){

    afsnit = findAfsnit(array);

    $('.afsnit').text(afsnit);
    if (action === 1) {
        $('.afsnit').css("color", "#E73028");
        action = 2;
    } else {
        $('.afsnit').css("color", "#F39591");
        action = 1;
    }

  });
  return afsnit;
}

function findAfsnit(array){

  var randomTal = Math.floor(Math.random()*array.length);
  afsnit = array[randomTal];
  return afsnit;

}

$(document).ready(main);
