require('./assets/bootstrap.min.css')
require('./assets/font-awesome.css')
require('./assets/es6-promise.min.js')
require('./assets/es6-promise.auto.min.js')
require('./assets/html2canvas.min.js')
import img from './assets/004b0c80e0ec3373ef748fcacb194259.jpg'

$(document).ready(function(){
  var size_li = $("#myList a").length;
  var x=3;
  if(size_li > 3){
    $('#showMore').show();
  }
  $('#myList').children().slice(0,3).show();
  $('#showMore').click(function () {
    x=size_li;
    $('#myList a:lt('+x+')').show();
    $(this).hide();
    $('#showLess').show();
  });
  $('#showLess').click(function () {
    x=3;
    $('#myList a').not(':lt('+x+')').hide();
    $(this).hide();
    $('#showMore').show();
  });
  $('#image img').removeAttr('width');
  $('#image img').removeAttr('height');
  // dynamic html elements
  $('#header').html('<img class="logo" border="0" src="' + img + '">');
});
