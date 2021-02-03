// ## Exo 1 
// 1. Créez un objet avec vos valeurs
// 2. 'Nom', 'prenom', 'age', 'taille'
// 3. Affichez votre age via un console.log()

let o = {
    nom: "Abdel",
    prenom: "Elbakkal",
    age: 25,
    taille: 186,
}
console.log(o.age);




// ## Exo 2 
// 1. Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

let p = {
    nom: "Michel",
    prenom: "Delarue",
    age: 24,
    taille: 152,
}
console.log(p);






// ## Exo 3
// 1. Remplir les propriétées du 3eme personnage
// 2. Son nom doit valoir le nom du personnage1
// 3. Son age doit valoir celui du personnage2
// 4. Et sa taille doit être rempli avec la valeur que vous souhaitez


// let m = {
//     nom: o.nom,
//     age: p.age,
//     taille: "200 cm",
// }
// console.log(m);

let m = {}

m.nom = o.nom;
m.age = p.age;
m.taille = 174;

console.log(m);
// ## Exo 4
// 1. Créer un personnage4 et donner lui la méthode [Saluer] qui dira "Coucou" avec le nom du personage2
// 2. Lancer cette méthode

let h = {
    Saluer(){console.log(`Coucou ${m.nom}`);}
}

h.Saluer();


// ## Exo 5
// 1. Créez 3 personnes avec leur nom et l'age, puis créez un voleur.
// 2. Le voleur a juste une methode qui est 'usurpation' qui prend comme parametre un des 3 personnages et il prend son nom et son age

// let a = {
//     nom: "Michel",
//     age: 28,
// }

// let b = {
//     nom: "Maksime",
//     age:19,
// }

// let c = {
//     nom: "Mourad",
//     age: 43,
// }

// let thief = {
//     usurpation(x){
//         this.nom = x.nom;
//         this.age = x.age; 
//     }
// }
// thief.usurpation(c)
// console.log(thief);