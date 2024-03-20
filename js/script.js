// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede


// creo un array di oggetti con i dati forniti 
const members = [
    {
        firstName: 'Wayne',
        lastName: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg' 
    },
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg' 
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg' 
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg' 
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg' 
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg' 
    }
];

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto 
for (let key in members){
    console.log(key + ': ' + members[key].firstName + ' ' + members[key].lastName + ' ' + members[key].role + ' ' + members[key].image) ;
}

// Stampare le stesse informazioni su DOM sottoforma di stringhe
const memberShow = document.querySelector('#show');
let list = '';
for (let key in members) {
    const member = members[key];
    // Trasformare la stringa foto in una immagine effettiva
    // Organizzare i singoli membri in card/schede
    list += `<div class="card m-3" style="width: 18rem;">
                <img src="img/${member.image}" class="card-img-top" alt="member">
                <div class="card-body">
                    <h5 class="card-title text-center">${member.firstName}${member.lastName}</h5>
                    <p class="card-text text-center">${member.role}</p>
                </div>
            </div>`;

            memberShow.innerHTML = list;
}