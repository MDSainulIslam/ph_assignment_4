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










