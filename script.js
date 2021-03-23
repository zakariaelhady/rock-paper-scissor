var user_score=document.getElementById("user-score");
var computer_score=document.getElementById("computer-score");
var draw=document.getElementById("draw");
var user_img=document.getElementById("cu");
var computer_img=document.getElementById("cc");
var computer_choice;
var user_choice;
var rock=document.getElementById("r");
var scissor=document.getElementById("s");
var paper=document.getElementById("p");
const choices=["r","s","p"];
//
scissor.addEventListener("click",function(){
	user_choice="s";
})
paper.addEventListener("click",function(){
	user_choice="p";
})
rock.addEventListener("click",function(){
	user_choice="r";
})

//
var click_choice=document.querySelector(".choices");
//
click_choice.addEventListener("click",function(){

var n=Math.floor(Math.random() * 3);
computer_choice=choices[n];


switch(user_choice+computer_choice){
	case "ss": draw.innerHTML++;user_img.src="scissor.png";computer_img.src="scissor.png" ;
	    break;
	case "rr":draw.innerHTML++;user_img.src="rock.png";computer_img.src="rock.png" ;
	    break;
	case "pp":draw.innerHTML++;user_img.src="paper.png";computer_img.src="paper.png" ;
	    break;
	case "sp":user_score.innerHTML++; user_img.src="scissor.png";computer_img.src="paper.png" ;
		break;
	case "pr":user_score.innerHTML++; user_img.src="paper.png";computer_img.src="rock.png" ;
		break;
	case "rs":user_score.innerHTML++; user_img.src="rock.png";computer_img.src="scissor.png" ;
		break;
	case "ps":computer_score.innerHTML++; user_img.src="paper.png";computer_img.src="scissor.png" ;
		break;
	case "rp":computer_score.innerHTML++; user_img.src="rock.png";computer_img.src="paper.png" ;
		break;
	case "sr":computer_score.innerHTML++; user_img.src="scissor.png";computer_img.src="rock.png" ;
		break;
}
})
