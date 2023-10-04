// déclaration de la fonction
function permuterVariables() {
  
    let age = 15;
    let num = "bonjour";
    let perm = " ";

    perm = age;
    age = num;
    num = perm;
  
    console.log(age);
    console.log(num);
  }

  
  permuterVariables();