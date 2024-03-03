let personName :string = "";

personName =prompt("what is your name?") || "";

if(personName !== null && personName !== ""){
    alert('Hello {Alvina}, would you like to learn some python? ')
}
else{
    alert("you have to fill your name")
}