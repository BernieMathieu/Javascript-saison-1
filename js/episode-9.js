function Mention () {
    let moyenne= (prompt("entrez votre moyenne"))
    if (moyenne >= 0 && moyenne < 10) {
        alert("passable")
    }
    else if (moyenne >= 10 && moyenne < 12) {
        alert ("Assez-Bien"); 
    } 
    else if (moyenne >= 12 && moyenne < 14) { 
        alert ("Bien"); 
    } 
    else if (moyenne >= 14 && moyenne < 16) { 
        alert ("Très bien");
     } 
        else if (moyenne >= 16 && moyenne <= 20) { 
            alert ("Excellent");
    } 
    else { 
        alert ("La moyenne doit être entre 0 et 20."); 
    } 
}

Mention()