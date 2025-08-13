// 📥 Input:
// ফাংশনের ইনপুট হবে একটি স্ট্রিং (string)।
// ইনপুট স্ট্রিং-এর মধ্যে অনেক স্পেস থাকতে পারে এবং character ছোট/বড় হাতের হতে পারে।




// 🚀 Output:
// ফাংশনটি সব স্পেস বাদ দিয়ে, অবশিষ্ট সব character কে  ক্যাপিটাল লেটারে রূপান্তর করে রিটার্ন করবে।
// Note: তোমাকে অবশ্যই output টা রিটার্ন করতে হবে।  console.log করলে কোন মার্ক পাবেনা


// 🚩Challenge:  যদি ইনপুট টি string না হয়  তাহলে  "Invalid"  স্ট্রিং  রিটার্ন করবে। 


function  onlyCharacter( str ) {
    if(typeof str !== "string"){
        return "Invalid"
    }
    return str.trim();
}

console.log(onlyCharacter( " s tr  " ));


