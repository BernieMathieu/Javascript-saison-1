function Moyenne (){
    let nombre1= (prompt("entrer le premier nombre"));
    let nombre2= (prompt("entrer le deuxième nombre"));
    let nombre3= (prompt("entrer le troisième nombre"));
    let moyenne= (Number (nombre1) + Number (nombre2) + Number (nombre3))/3;
    alert ("la moyenne de ces nombres est: " + moyenne);
}
Moyenne()