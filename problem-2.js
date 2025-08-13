
/* 
    let originalString = "This is a string with extra  spaces.";
    let noSpacesString = originalString.replace(/\s+/g, '');
    console.log(noSpacesString); // Output: "Thisisastringwithextraspaces."
 */



function  onlyCharacter( str ) {
    if(typeof str !== "string"){
        return "Invalid"
    }
    
    let finalResult = str.replace(/\s+/g, '').toUpperCase();
    return finalResult;
}

