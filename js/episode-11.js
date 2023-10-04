function afficherTableMultiplication() {
    let nombre = (prompt("Entrez un nombre :"));
  
    for (let i = 1; i <= 10; i++) {
      let resultat = nombre * i;
      alert (nombre + " x " + i + " = " + resultat);
    }
  }
  
  afficherTableMultiplication();