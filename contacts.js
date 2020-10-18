function ContactForms(){
    document.getElementById("log").innerHTML ="";
    document.getElementById("log").innerHTML += "<h2>Renseigner le contact</h2>";       
    document.getElementById("log").innerHTML += "<label> Nom:</label><br>";
    document.getElementById("log").innerHTML += "<input type='text' id='nom'></br>";
    document.getElementById("log").innerHTML += "<label> Prenon:</label><br>";
    document.getElementById("log").innerHTML += "<input type='text' id='prenom'></br>";
    document.getElementById("log").innerHTML += "<input type='submit' onclick='AddContact()'>";

}

function AddContact()
{
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    var newContact = new Contact(nom, prenom);
    contacts.push(newContact);
    //document.getElementById("log").innerHTML += "<br>"+ " Le nouveau contact est: " +  document.getElementById("nom").value +" " + document.getElementById("prenom").value;
}

class Contact {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }
   decrire()
  {
    return this.nom +" "+  this.prenom;
  }
}

  //contact existant

  var contact1 = new Contact("Lévisse", "Carole");
  var contact2 = new Contact("Nelsonne", "Mélodie");
  var contacts = [contact1, contact2];
  
  //Choix 1
  function listerContacts(contacts)
  {

    console.log("Voici la liste de vos contacts :");
    console.log('| Nom       , Prenom   |');
    contacts.forEach(function(contact){
    console.log(`${contact.decrire()}`);
    document.getElementById("list").innerHTML += contact.decrire() + "</br>";
    });
      
  }

//Choix 2
function ajouterContact(nom, prenom)
{

  var newContact = new Contact(nom,prenom)
  contacts.push(newContact);
  console.log("Le nouveau contact à été ajouté.");
}




function logcontact(){  
    var choix;
    while (choix !== "0"){
     // listChoix();
      choix = prompt(" 1 : Lister les contacts 2 : Ajouter un contact  0 : Quitter");

      switch(choix) {
        case "1":
          listerContacts(contacts)
        break;

        case "2":
          var nom = prompt("Saisissez le nom :");
          var prenom = prompt("Saisissez le prénom :");
          ajouterContact(nom, prenom);
        break;
        case "3":
        break;
        default:
          console.log("Aurevoir");
        break;
  }
}
}
