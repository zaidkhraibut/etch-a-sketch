var i = 0

function createDivs() {
  while (i < (400*400)/100) {
    $(".container").append('<div class="grid"></div>');
    i++;
   }
};

createDivs();

$(document).ready(function() {
  $('.container').on('mouseover', 'div', function() {
    $(this).addClass('hovered');
  });
  $('#clear').on('click', function() {
    $('.hovered').toggleClass('hovered');
  });

});

function emptyDivs() {
  $('.container').empty();
  createDivs();
};


// $('.container > div').toggleClass('hovered'); Use this to invert selection
