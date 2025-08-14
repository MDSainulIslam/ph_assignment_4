function  onlyCharacter( str ) {
    if(typeof str !== "string"){
        return "Invalid"
    }
    
    let finalResult = str.split(" ").join("").toUpperCase();
    return finalResult;
}