var player1_name=localStorage.getItem("player1_name_input");
var player2_name=localStorage.getItem("player2_name_input");
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
var player1_score=0;
var player2_score=0;
function send(){
    Number1=document.getElementById("number1").value;
    Number2=document.getElementById("number2").value;
    actual_answer=parseInt(Number1)*parseInt(Number2);
}
question_number= "<h4>"+ Number1+"X"+ Number2 +"</h4>";
input_box ="<br>answer:<input = type='text' id='input_check_box'>";
check_button = "<br><br>button class='btn btn-info' onclick='check()'>check</button>
row= question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";