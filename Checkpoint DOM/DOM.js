


  let plusButtons = document.querySelectorAll('.boutonPlus');
  let deleteButtons = document.querySelectorAll('.delete-button');
  let mnsButtons = document.querySelectorAll('.boutonMoins');
  let heartButtons = document.querySelectorAll('#boutonLike');
  let article = document.querySelectorAll('.Article');
  let price = document.querySelectorAll('#prix');
  let quantite = document.querySelectorAll('[id^="quantity"]'); // Sélectionne tous les éléments dont l'ID commence par "quantite"
  let sum = document.querySelector('.Prixtotal');

  function calculateTotal() {
      let totalPrice = 0;
      for (let i = 0; i < price.length; i++) {
          let itemPrice = parseInt(price[i].innerHTML);
          let itemQte = parseInt(quantite[i].innerHTML);
          let itemTotal = itemPrice * itemQty;
          totalPrice += itemTotal;
      }
      sum.innerHTML = totalPrice;
  }
  function addQte(container) {
 // Vous pouvez implémenter ici le code nécessaire pour augmenter la quantité du premier article (Xassidas wakana Haqqan)
 let quantiteElement = document.getElementById('quantite');
 let quantite = parseInt(quantiteElement.innerHTML);
 quantite++;
 quantiteElement.innerHTML = quantite;


  }
  function subtractQte(Article1) {
    // Vous pouvez implémenter ici le code nécessaire pour diminuer la quantité du premier article (Xassidas wakana Haqqan)
    let quantiteElement = document.getElementById('quantite');
    let quantite = parseInt(quantiteElement.innerHTML);
    quantite--;
    quantiteElement.innerHTML = quantite;
   
    }


   
  for (let i = 0; i < plusButtons.length; i++) {
      plusButtons[i].addEventListener('onclick', function() {
          quantities[i].innerHTML++;
          calculateTotal();
      });

      mnsButtons[i].addEventListener('onclick', function() {
          if (quantities[i].innerHTML > 0) {
              quantities[i].innerHTML--;
              calculateTotal();
          }
      });

      deleteButtons[i].addEventListener('onclick', function() {
          // Supprimez l'élément parent (col-4) au lieu de l'article lui-même
          plusButtons[i].parentNode.parentNode.remove();
          calculateTotal();
      });

      heartButtons[i].addEventListener('click', function() {
          // Ajoutez le code pour gérer le clic sur le bouton like
      });
  }

  // Appelez calculateTotal() pour initialiser le total au chargement de la page
  calculateTotal();
;
