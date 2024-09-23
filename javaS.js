/*
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
  */

let x = -1;

function switchBackground(){
  x++;
  if (x>2){
    x = 0;
  }
  switch(x){
    case 0:
      document.body.style.backgroundColor = "black";
      document.body.style.backgroundImage = "url('')";
      break;
    case 1:
      document.body.style.backgroundColor = "#093640";
      break;
    case 2:
      document.body.style.backgroundImage = "url('Julios yard.png')";
      document.body.style.backgroundSize= "auto 300%";
      break;
  }
}