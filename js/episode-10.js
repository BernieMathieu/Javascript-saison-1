function Facture () {
    let montantFacture = (prompt ("Entrez le montant de la facture"));

    let totalAPayer;
    
    if (montantFacture > 40000) {
        totalAPayer = montantFacture - (montantFacture * 0.1);
      } 
      
      else {
        totalAPayer = montantFacture;
      }
    
      alert("Le total à payer est de : " + totalAPayer + " F");
}

Facture ()