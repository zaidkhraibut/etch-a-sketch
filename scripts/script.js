var i = 0

function createDivs() {
  while (i < (400*400)/100) {
    $(".grid").append('<div></div>');
    i++;
   }
};

var j = 0

function changeDivs() {
  $('.grid').empty();
  var userInput = parseInt(prompt("How many squares per side? Feel free to play around or press Enter for default."));

  if (userInput < 1 || isNaN(parseFloat(userInput))) {
    userInput = 40;
}

  while(userInput > 100) {
  userInput = parseInt(prompt("That numbers a little high. Try something under 100."));
}

  console.log(userInput);

  var boxSize = 400/userInput;
  while (j < userInput * userInput) {
    $(".grid").append('<div></div>');
    j++;
  }
  $('.grid > div').css({'height': boxSize, 'width': boxSize});
  j = 0;
};

function greyGrid() {
  $('.grid').on('mouseover', 'div', function() {
    $(this).removeClass();
    $(this).addClass('hovered');
    $(this).css({'opacity': '0.9'});
  });
//  $('.grid').on('mouseleave', 'div', function() {
//    $(this).animate({'opacity': '0.5'}, 500);
//    $(this).animate({'opacity': '0.9'}, 500);
//  });
};


function getRandomClass() {
    var classArray = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'violet', 'lightblue', 'lightgreen'];
    var rand = Math.floor(Math.random() * classArray.length);
    return classArray[rand];
    console.log(classArray[rand]);
}

function rainbowGrid() {
  $('.grid').on('mouseover', 'div', function() {
    $(this).removeClass();
    $(this).addClass(getRandomClass);
  });
};

function clear() {
  $('.grid>div').removeClass();
};

$(document).ready(function() {
  createDivs();
  greyGrid();

 //$('#optionsDiv').fadeIn();

  $('#clear').on('click', function() {
    clear();
  });

  $('#default').on('click', function() {
    clear();
    greyGrid();
  });

  $('#rainbow').on('click', function() {
    clear();
    rainbowGrid();
  });

  $('#change').on('click', function() {
    changeDivs();
  });
});

// $('.container > div').toggleClass('hovered'); Use this to invert selection
