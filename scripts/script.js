var i = 0

while (i < 16 * 16) {
  $(".container").append('<div></div>');
  i++;
 }

$(document).ready(function() {
  $('.container').on('mouseover', 'div', function() {
    $(this).css('background-color', 'black');
  });
});
