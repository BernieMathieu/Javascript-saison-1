function verifierReponse() {
    let reponseUtilisateur = prompt("Combien font 5 + 1 ?");
    while (reponseUtilisateur !== "6") {
      reponseUtilisateur = prompt("Mauvaise réponse. Essaye encore : Combien font 5 + 1 ?");
    }
    alert("Bravo ! Tu as trouvé la bonne réponse !");
  }
  
  verifierReponse();