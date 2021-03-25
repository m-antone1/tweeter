$(document).ready(function() {
  $('#tweet-text').on('keyup', function() {
    const currentNumChars = $(this).val().length;
    const outputNum = $(this.closest('form')).find('output')
    outputNum.val(140 - currentNumChars);

    if (outputNum.val() < 0) {
      $(outputNum).css('color', 'red');
    } else {
      $(outputNum).css('color', '#545149');
    };
  });
});