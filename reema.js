$(function(){
    
  $('li').hide().delay(1200).fadeIn(800);
  
  });
  
  $( "li" ).click(function() {
    $( this ).toggleClass( "Clicked!" );
    console.log('Clicked');
  });
  
  
  // $().button('toggle')
  
  $('#1').click(function(){
    alert ('Clicked!');
  
  });
  
  $('#2').click(function(){
    alert ('Clicked!');
  
  });
  $('#3').click(function(){
    alert ('Clicked!');
  
  });
  $('#4').click(function(){
    alert ('Clicked!');
  
  });