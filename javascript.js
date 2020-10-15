
// Controllo Email
var eMail = ['francesco@gmail.com', 'silvia@gmail.com', 'laura@gmail.com'];

var user = prompt('Scrivi qui la tua eMail, grazie!!!');

user = user.toLowerCase();
console.log(user);

var userFound = false;

for (var i = 0; i < eMail.lenght; i++){
  var item = (eMail[i]);

  if (user == item) {
    userFound= true;
  }
}

if (userFound == true) {
console.log ('Utente trovato, procedi con l accesso');
}

else {
  console.log ('Errore di autenticazione, riprova!');
}
