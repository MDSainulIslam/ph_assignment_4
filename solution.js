function totalFine( fare ) {
    if(typeof fare !== "number" || fare <= 0){
        return "Invalid"
    }
let serviceCharge = fare * 20/100;
let extraServiceCharge = 30;

let totalAmount = fare +  serviceCharge + extraServiceCharge;

return totalAmount;
}




















function  bestTeam( player1, player2 ) {
    if(typeof player1 !== "object" || typeof player2 !== "object"){
        return "Invalid"
    }

    let player1Marks = player1.foul + player1.cardY + player1.cardR;
    let player2Marks = player2.foul + player2.cardY + player2.cardR;

    if(player1Marks === player2Marks){
        return "Tie";
    }
    else if(player1Marks < player2Marks){
        return player1.name;
    }
    else{
        return player2.name
    }
}










function  isSame(arr1 , arr2 ) {
    if(Array.isArray(arr1) === false || Array.isArray(arr2) === false){
        return "Invalid"
    }

    if(arr1.length !== arr2.length){
        return false;
    }

    for (let i=0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }

    return true;
}










function  resultReport( marks ) {
    let passCount = 0;
    let failCount = 0;
    let totalMarks =0;
    
    if(Array.isArray(marks) !== true){
        return "Invalid";
    }

    if(marks.length === 0){
        return {
            finalScore: 0,
            pass: 0,
            fail: 0 };
    }


    for(let mark of marks){

        totalMarks = totalMarks + mark;

        if(mark >= 40){
            passCount++ ;
        }
        else{
            failCount++ ;
        }  
    }

    let averageMarks = Math.round(totalMarks/marks.length);

    let finalResult = {
        finalScore : averageMarks,
        pass : passCount,
        fail : failCount
    };
    return finalResult;
}

