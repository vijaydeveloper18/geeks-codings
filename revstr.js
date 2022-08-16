var str = "mama";
for(i=0;i<str.length;i++){
    var face1 = str.split('');
    face1.reverse();
    var face2 = face1.join("");
}
if(face2 == str){
    console.log("Given string is palindrome");
}else{
    console.log("This string is not palindrome");
}
//console.log(face2);