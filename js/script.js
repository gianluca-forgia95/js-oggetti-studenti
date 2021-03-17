/*
- Creare un oggetto che descriva uno studente con le
seguenti proprietà: nome, cognome e età. Stampare a
schermo attraverso il for in tutte le proprietà.
- Creare un array di oggetti di studenti. Ciclare su tutti gli
studenti e stampare per ognuno nome e cognome
- Dare la possibilità all’utente attraverso 3 prompt di
aggiungere un nuovo oggetto studente inserendo
nell’ordine: nome, cognome e età.
*/
//Creo l'oggetto con le proprietà richieste
var student = {
  nome: 'Gianluca',
  cognome: 'Forgia',
  eta: 25,
};
//Definisco il ciclo for in per stamparlo
for (var property  in student ) {
 console.log(student[property]);
}
//Creo un array di oggetti studenti
var students = [
  {
    nome: 'Gianluca',
    cognome: 'Forgia',
    eta: 25
  },
  {
    nome: 'Andrea',
    cognome: 'Bianchi',
    eta: 20
  },
  {
    nome: 'Franco',
    cognome: 'Rossi',
    eta: 28
  },
];


//Ciclo l'array e stampo nomi e cognomi
for (var i = 0; i < students.length; i++) {
  console.log(students[i].nome + ' ' + students[i].cognome );

}


//Chiedo all' utente di aggiungere dei dati studente
var nomePrompt = prompt('Inserisci il nome');
var cognomePrompt = prompt('Inserisci il cognome');
var etaPrompt = parseInt(prompt('Inserisci l eta'));
//Creo l'oggetto nuovo studente
var newStudent = {
  nome: nomePrompt,
  cognome: cognomePrompt,
  eta: etaPrompt
};

//Metto nell'array studenti il nuovo oggetto studente
students.push(newStudent);
//console.log(students[i].nome + ' ' + students[i].cognome + ' ' + students[i].eta );
//Lo stampo insieme agli altri studenti
for (var i = 0; i < students.length; i++) {
  console.log(students[i].nome + ' ' + students[i].cognome + ' ' + students[i].eta);
}
