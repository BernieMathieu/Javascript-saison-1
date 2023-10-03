let nom = (prompt("Quel est votre nom?"))
let sexe = (prompt("Quel est votre sexe?"))
if (sexe === "Masculin"){
    alert("Bonjour Monsieur " + nom)
}
else if (sexe === "Féminin") {
    alert("Bonjour Madame " + nom)
}
else{
    alert("Sexe non reconnu. Veuillez saisir Féminin ou Masculin.")
}