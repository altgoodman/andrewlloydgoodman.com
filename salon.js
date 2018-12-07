
//Isotope / Packery Setup
var $salon = $(".salon").isotope({
  itemSelector: ".salon-frame",
  layoutMode: "packery",
  stamp: ".stamp",
  packery: {
  gutter: '.gutter-sizer',
  }
});

//Initial sub-menu div setup
$(".art-menu").hide();
$(".design-menu").hide();
$(".words-menu").hide();

//Art Sub-Menu Function
$('.art-button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
    $(".art-menu").show();
    $(".design-menu").hide();
    $(".words-menu").hide();
});

//Design Sub-Menu Function
$('.design-button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
    $(".design-menu").show();
    $(".art-menu").hide();
    $(".words-menu").hide();
});

//Words Sub-Menu Fucntion
$('.words-button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
    $(".words-menu").show();
    $(".art-menu").hide();
    $(".design-menu").hide();
});

//Reset Sub-Menu Function (aka "Everything")
$('.everything-button').on('click', function(){
    $('button').removeClass('selected');
    $(this).addClass('selected');
    $(".art-menu").hide();
    $(".design-menu").hide();
    $(".words-menu").hide();
});

//------------------------------------------------//

// Begin shuffleFrames Function Block!

function shuffleFrames() {
  //initial "shuffle"
  $(".salon-frame").each(function() {

    //remove classes in preparation for assigning new classes
    $(this).removeClass("large");
    $(this).removeClass("small");
    $(this).removeClass("medium");

 var x = Math.floor(Math.random() * 12 + 1);

      if (x >= 11) {
        $(this).addClass("large");
      }
      else if (x <= 6) {
        $(this).addClass("small");
      }
      else {                             $(this).addClass("medium");
      }

    //run packery layout function to tidy up
    $salon.isotope("layout");
  });
}

// END shuffleFrames Function Block!

//------------------------------------------------//

// BEGIN shuffleColors Function Block!

function shuffleColors() {

  //store the random color prepending "rgba("
  var rgbR = "rgba(" + randomRGBRed();
  var rgbB = "rgba(" + randomRGBBlue();
  var rgbY = "rgba(" + randomRGBYellow();

  //create solid and transparent variables of Red color
  var randomRed = rgbR + "1.0 )";
  var randomRedHighlight = rgbR + "0.6)";

  //create solid and transparent variables of Blue color
  var randomBlue = rgbB + "1.0 )";
  var randomBlueHighlight = rgbB + "0.6 )";

  //create solid and transparent variables of Yellow color
  var randomYellow = rgbY + "1.0 )";
  var randomYellowHighlight = rgbY + "0.6)";

  //create variable for random color selector
  var randomColor = randomRGB();

 //set the CSS color variables
document.documentElement.style.setProperty(`--main-red`, randomRed);

document.documentElement.style.setProperty(`--highlight-red`, randomRedHighlight);

document.documentElement.style.setProperty(`--main-blue`, randomBlue);

document.documentElement.style.setProperty(`--highlight-blue`, randomBlueHighlight);

document.documentElement.style.setProperty(`--main-yellow`, randomYellow);

document.documentElement.style.setProperty(`--highlight-yellow`, randomYellowHighlight);

document.documentElement.style.setProperty(`--rando-color`, randomColor);

//Red Color Generator
function randomRGBRed() { //begin function

    //declare the hexColor variable
    var rgbRed;

    //store a random red rgb value
    var rRed = Math.floor(Math.random() * 100) + 155;

   //store a random green rgb value
    var rGreen = Math.floor(Math.random() * 64 +1);

    //store a random blue rgb value
    var rBlue = Math.floor(Math.random() * 155 +1);

  rgbRed = rRed + "," + rGreen + "," + rBlue + ",";

 return rgbRed.toUpperCase();
} //end red color function

//Blue Color Generator
function randomRGBBlue() {

  //declare the hexColor variable
    var rgbBlue;

  //store a random red rgb value
    var bRed = Math.floor(Math.random() * 64 + 1);

  //store a random green rgb value
    var bGreen = Math.floor(Math.random() * 64 + 64);

  //store a random blue rgb value
    var bBlue = Math.floor(Math.random() * 100) + 128;

  //combine color values
    rgbBlue = bRed + "," + bGreen + "," + bBlue + ",";

 return rgbBlue.toUpperCase();

} //end blue color generator function

 //Yellow Generator Function
function randomRGBYellow() {

    //declare the hexColor variable
    var rgbYellow;

    //store a random red rgb value
    var yRed = Math.floor(Math.random() * 100) + 155;

    //store a random green rgb value
    var yGreen = Math.floor(Math.random() * 64) + 191;

    //store a random blue rgb value
    var yBlue = Math.floor(Math.random() * 64) +1;

   //combine color values
   rgbYellow = yRed + "," + yGreen + "," + yBlue + ",";

 return rgbYellow.toUpperCase();
  } //end function

//Random Color Selector
function randomRGB(){

  var rgbRando;

  //generate a random number between one and three
  var x = Math.floor(Math.random() * 3 + 1);

  if (x==1){
    rgbRando = randomRed;
  }
  else if (x==2){
    rgbRando = randomBlue;
  }
  else {
    rgbRando = randomYellow;
  }

   return rgbRando.toUpperCase();
  }
} //end random color selector

// END shuffleColors Function Block!

//------------------------------------------------//

// BEGIN salonCurate (Isotope Based Filter/Sorting) Function Block!
function salonCurate() {

 var filterValue = $(this).attr("data-filter");

 $(".salon-frame").each(function() {
   if (filterValue != "*" && !$(this).hasClass("feature")) {
     $(this).toggleClass("feature");
   }

   else if (filterValue == "*" && $(this).hasClass("feature")) {
     $(".salon-frame").each(function() {
       $(this).toggleClass("feature");
     });
   }

   $salon.isotope({ filter: filterValue });

   $salon.isotope("layout");
 });
} //end salonCurate Function

// filter items on button click in MAIN MENU
$(".navigation").on("click", "button", salonCurate);

// filter items on button click in ART SUB MENU
$(".art-menu").on("click", "button", salonCurate);

// END salonCurate (Isotope Based Filter/Sorting) Function Block!

//------------------------------------------------//

window.onload = shuffleFrames();
window.onload = shuffleColors();
//window.onload = shuffleFonts();
