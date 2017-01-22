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

function rainbowGrid() {
  $('.grid').on('mouseover', 'div', function() {
    $(this).removeClass('hovered');
    $(this).addClass('blue');
  });
};

function clear() {
  $('.grid>div').removeClass('hovered');
  $('.grid>div').removeClass('blue');
};

$(document).ready(function() {
  createDivs();
  rainbowGrid();

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
