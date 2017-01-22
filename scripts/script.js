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
  var userInput = parseInt(prompt("How many square per side?"));
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
  });
  $('.grid').on('mouseleave', 'div', function() {
    $(this).animate({'opacity': '0.5'}, 200);
    $(this).animate({'opacity': '0.9'}, 200)
  });
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
  $('.grid').on('mouseleave', 'div', function() {
    $(this).css('opacity', 0.8)
  });
};

function clear() {
  $('.grid>div').removeClass();
};

$(document).ready(function() {
  createDivs();
  greyGrid();

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
