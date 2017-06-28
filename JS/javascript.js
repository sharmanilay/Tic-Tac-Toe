$(document).ready(function(){
		$('#X').fadeOut(1);
		$('#O').fadeOut(1);
		$('.board').fadeOut(1);
});

var counter = 0;
var player = 1;
var WinCombs = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3]
  ];
 var p1 = [];
 var p2 = [];
 var moves = 0;

function SinglePlayer() {
	//alert("hi");
	player = 1;
	$('h1').fadeOut(10);
	$("#button").fadeOut(10);
	//$('h1').html("Welcome To the Game");
	$('h1').html("Select your totem");
	$('h1').fadeIn(2000);
	$('#X').fadeIn(2000);
	$('#O').fadeIn(2000);

	$('#X').click(function(){
		startGame("X");
	});
	$('#O').click(function(){
		startGame("O");
	});
}

function startGame(totem) {
	$('h1').fadeOut(1);
	$('#X').fadeOut(1);
	$('#O').fadeOut(1);
	$('h1').html("The Game Begins");
	$('h1').fadeIn(2000);
	$('.board').fadeIn(2000);

	//alert(WinCombs[0][2]);

	if (totem == "O") {
		counter = 1;
	}else {
		counter = 0;
	}
	$('.r').click(function(){
		//alert($(this).val());
		if(counter == 1){
			counter = 0;
			if($(this).html() === "." ){
			//	p1.push($(this).val());
			//console.log("p1 is " +p1);
			$(this).html("O");
			moves++;
			checkWin(1);
			checkDraw();

			if (player == 1) {

				MachineAI("X");
				checkWin(1);
				checkDraw();
			}
			

		}else{
			alert("Alredy Marked");
			counter = 1;
		}
		}
		else{
			counter = 1;
			if($(this).html() === "."){
				//alert($(this).html());
			//	p2.push($(this).val());
			//console.log("p2 is " +p2);
			$(this).html("X");
			moves++;
			checkWin(1);
			checkDraw();
			if (player == 1) {

				MachineAI("O");	
				checkWin(1);
				checkDraw();
			}
			
		}else{
			alert("Alredy Marked");
			counter = 0;
		}
		}
	});

}

function reset() {
	location.reload();/*
	$("#button").show();
	$('h1').html("Select Player Options");
	$('#X').fadeOut(1);
	$('#O').fadeOut(1);
	$('.r').each(function(){
		$(this).html(".");
	});
	$('.board').fadeOut(1);
	//	$('.totem-option').css("visibilty","hidden");
	*/
}
function MachineAI(totem) {

	console.log(moves);
	if(counter == 0){
		counter = 1;
	}else{
		counter = 0;
	}

	var totem = totem;
  switch (true) {
    case $('#R1c1').html() == ".":
      $('#R1c1').html(totem);
      moves++;
      break;
    case $('#R1c2').html() == ".":
      $('#R1c2').html(totem);
      moves++;
      break;
    case $('#R1c3').html() == ".":
      $('#R1c3').html(totem);
      moves++;
      break;
    case $('#R2c1').html() == "." :
      $('#R2c1').html(totem);
      moves++;
      break;
    case $('#R2c2').html() == "." :
      $('#R2c2').html(totem);
      moves++;
      break;
    case $('#R2c3').html() == "." :
      $('#R2c3').html(totem);
      moves++;
      break;
    case $('#R3c1').html() == "." :
      $('#R3c1').html(totem);
      moves++;
      break;
    case $('#R3c2').html() == "." :
     $('#R3c2').html(totem);
     moves++;
      break;
    case $('R3c3').html() == "." :
      $('#R3c3').html(totem);
      moves++;
      break;


  }
};

function DoublePlayer() {
	player = 2;
	$('h1').fadeOut(10);
	$("#button").fadeOut();
	$('h1').html("Player 1 select your totem");
	$('h1').fadeIn(2000);
	$('#X').fadeIn(2000);
	$('#O').fadeIn(2000);
	$('#X').click(function(){
		startGame("X");
	});
	$('#O').click(function(){
		startGame("O");
	});
}

function checkWin(counter){

	if(counter == 0){
	 switch (true) {
    case $('#R1c1').text() === "X" && $('#R1c2').text() === "X" &&
    $('#R1c3').text() === "X":
      alert("Game Over");
     	reset();
      break;
    case $('#R2c1').text() === "X" && $('#R2c2').text() === "X" &&
    $('#R2c3').text() === "X":
      alert("Game Over");
      reset();
      break;
    case $('#R3c1').text() === "X" && $('#R3c2').text() === "X" &&
    $('#R3c3').text() === "X":
      alert("Game Over");
      reset();
      break;
    case $('#R1c1').text() === "X" && $('#R2c1').text() === "X" &&
    $('#R3c1').text() === "X":
      alert("Game Over");
      reset();
      break;
    case $('#R1c2').text() === "X" && $('#R2c2').text() === "X" &&
    $('#R3c2').text() === "X":
      alert("Game Over");
      reset();
      break;
    case $('#R1c3').text() === "X" && $('#R2c3').text() === "X" &&
    $('#R3c3').text() === "X":
      alert("Game Over");
      reset();
      break;
    case $('#R1c1').text() === "X" && $('#R2c2').text() === "X" &&
    $('#R3c3').text() === "X":
      alert("Game Over");
      reset();
      break;
    case $('#R1c3').text() === "X" && $('#R2c2').text() === "X" &&
    $('#R3c1').text() === "X":
      alert("Game Over");
      reset();
      break;
    default:
  }
}else {
	 switch (true) {
    case $('#R1c1').text() === "O" && $('#R1c2').text() === "O" &&
    $('#R1c3').text() === "O":
      alert("Game Over");
   		reset();
      break;
    case $('#R2c1').text() === "O" && $('#R2c2').text() === "O" &&
    $('#R2c3').text() === "O":
      alert("Game Over");
      reset();
      break;
    case $('#R3c1').text() === "O" && $('#R3c2').text() === "O" &&
    $('#R3c3').text() === "O":
      alert("Game Over");
      reset();
      break;
    case $('#R1c1').text() === "O" && $('#R2c1').text() === "O" &&
    $('#R3c1').text() === "O":
      alert("Game Over");
      reset();
      break;
    case $('#R1c2').text() === "O" && $('#R2c2').text() === "O" &&
    $('#R3c2').text() === "O":
      alert("Game Over");
      reset();
      break;
    case $('#R1c3').text() === "O" && $('#R2c3').text() === "O" &&
    $('#R3c3').text() === "O":
      alert("Game Over");
      reset();
      break;
    case $('#R1c1').text() === "O" && $('#R2c2').text() === "O" &&
    $('#R3c3').text() === "O":
     alert("Game Over");
     reset();
      break;
    case $('#R1c3').text() === "O" && $('#R2c2').text() === "O" &&
    $('#R3c1').text() === "O":
      alert("Game Over");
      reset();
      break;
    default:

  }
}
}

function checkDraw() {
		if (moves == 9) {
			alert("Game Draw");
			reset();
		}	
}



