var i = 0

function createDivs() {
  while (i < (400*400)/100) {
    $(".grid").append('<div></div>');
    i++;
   }
};

function greyGrid() {
  $('.grid').on('mouseover', 'div', function() {
    $(this).removeClass('blue');
    $(this).addClass('hovered');
  });
};

function getRandomClass() {
    var classArray = ['red', 'blue', 'green', 'orange', 'purple', 'pink'];
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

});

// $('.container > div').toggleClass('hovered'); Use this to invert selection
