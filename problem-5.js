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

