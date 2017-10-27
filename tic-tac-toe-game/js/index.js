$(document).ready(function(){
  var turn ="X";
  var turns =["#","#","#","#","#","#","#","#","#"];
  var computerTurn="O"; //Default Computer turn
  var start="false";
  var count=0;
  $('#turnX').click(function(){
   turn ="O";
   computerTurn="X";
   $("#turnX").removeClass("btn-primary");
   $("#turnO").addClass("btn-primary");
    reset();
   });

$('#turnO').click(function(){
   turn ="X";
   computerTurn="O";
   $("#turnO").removeClass("btn-primary");
   $("#turnX").addClass("btn-primary");
  reset();
   });
  
 function reset(){
   turns=["#","#","#","#","#","#","#","#","#"];
   count=0;
   $(".onclick").text("#") ;
   start = false;
 }
  
 function compTurn(){
    var taken=false;
    while(taken===false && count !== 5){
      var computerMove = (Math.random()*10).toFixed();
      var move= $("#"+ computerMove).text();
      if(move==="#"){
        $("#" + computerMove).text(computerTurn);
        taken = true;
        turns[computerMove] = computerTurn;
      }
    }
  }

function playerTurn(turn, id){
  var spot= $("#" + id).text();
  if(spot==="#"){
    count++;
    turns[id]=turn;
    $("#" + id).text(turn);
    win(turns,turn);
    if(start===false){
      compTurn();
      win(turns,compTurn);
    }
  }
}
 function win(turnarr, presentturn){
   if(turnarr[0]===presentturn && turnarr[1]===presentturn && turnarr[2]===presentturn){
     reset();
     start = true;
     alert("Player " + presentturn + " wins!!! Congratulations!");
   }
   else if(turnarr[2]===presentturn && turnarr[4]===presentturn && turnarr[6]===presentturn){
     reset();
     start = true;
     alert("Player " + presentturn + " wins!!! Congratulations!");
   }
   else if(turnarr[0]===presentturn && turnarr[3]===presentturn && turnarr[6]===presentturn){
     reset();
     start = true;
     alert("Player " + presentturn + " wins!!! Congratulations!");
   }
   else if(turnarr[3]===presentturn && turnarr[4]===presentturn && turnarr[5]===presentturn){
     reset();
     start = true;
     alert("Player " + presentturn + " wins!!! Congratulations!");
   }
   else if(turnarr[6]===presentturn && turnarr[7]===presentturn && turnarr[8]===presentturn){
     reset();
     start = true;
     alert("Player " + presentturn + " wins!!! Congratulations!");
   }
   else if(turnarr[0]===presentturn && turnarr[4]===presentturn && turnarr[8]===presentturn){
     reset();
     start = true;
     alert("Player " + presentturn + " wins!!! Congratulations!");
   }
   else if(turnarr[1]===presentturn && turnarr[4]===presentturn && turnarr[7]===presentturn){
     reset();
     start = true;
     alert("Player " + presentturn + " wins!!! Congratulations!");
   }
   else if(turnarr[2]===presentturn && turnarr[5]===presentturn && turnarr[8]===presentturn){
     reset();
     start = true;
     alert("Player " + presentturn + " wins!!! Congratulations!");
   }
   else{
     start = false;
   }
 }
$(".onclick").click(function(){
  var slot= $(this).attr('id');
  playerTurn(turn, slot);
});
});