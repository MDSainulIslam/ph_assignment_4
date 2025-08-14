function  bestTeam( player1, player2 ) {
    if(typeof player1 !== "object" || typeof player2 !== "object" ||
        Array.isArray(player1) || Array.isArray(player2) ||
        !player1 || !player2){
        return "Invalid";
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
        return player2.name;
    }
}