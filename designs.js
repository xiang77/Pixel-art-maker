//let sizeN = $('#inputHeight').val();
//let sizeM = $('#inputWidth').val();
//var table =document.getElementById('pixelCanvas');
//$(function(){

  function makeGrid() {
      //remove old grid
      $('#pixel_canvas').children().remove();

      var sizeN = $('#input_height').val();
      var sizeM = $('#input_width').val();
      //create table row 
      for (var i = 0; i < sizeN; i++) {
        var row = document.createElement('tr');
        
        for (var j = 0; j < sizeM; j++) {
            var cell = document.createElement('td');
            row.append(cell);
        }
      $('#pixel_canvas').append(row);
      }
  }

  function colorFill(){
      $(this).css('background-color', $('#colorPicker').val())
  }

  //submit listener
  $(':submit').click(function(e){
      e.preventDefault();
      makeGrid();
  });
  //cell color fill listener
  $('#pixel_canvas').on('click', 'td', colorFill);

//});