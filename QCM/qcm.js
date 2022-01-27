function verif() {
 
	var score=0;
	var result1=document.getElementById('result1');
	var result2=document.getElementById('result2');
	var result3=document.getElementById('result3');
	var result4=document.getElementById('result4');
	var result5=document.getElementById('result5');
	
	if(document.getElementById('correct1').checked)
	{
		score++;
		result1.textContent="Correct."
	}
	else{
		result1.textContent="Incorrect."
	}

	if(document.getElementById('correct2').checked)
	{
		score++;
		result2.textContent="Correct."
	}
	else{
		result2.textContent="Incorrect."
	}

	if(document.getElementById('correct3').checked)
	{
		score++;
		result3.textContent="Correct."
	}
	else{
		result3.textContent="Incorrect."
	}

	if(document.getElementById('correct4').checked)
	{
		score++;
		result4.textContent="Correct."
	}
	else{
		result4.textContent="Incorrect."
	}
	if(document.getElementById('correct5').checked)
	{
		score++;
		result5.textContent="Correct."
	}
	else{
		result5.textContent="Incorrect."
	}

if (score<5){
 	
 	result.textContent=`Votre avez ${score} points, réessayez pour avoir tous les points si vous tenez tant à ce QCM pathétique !`
	}
else{
	
	result.textContent="Vous avez eu les 5 points. WOW. Quel beau travail."
}
}



