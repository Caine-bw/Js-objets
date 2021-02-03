// ## Exo 1 
// 1. Créez un objet avec vos valeurs
// 2. 'Nom', 'prenom', 'age', 'taille'
// 3. Affichez votre age via un console.log()

// let o = {
//     nom: "Abdel",
//     prenom: "Elbakkal",
//     age: 25,
//     taille: 186,
// }
// console.log(o.age);




// ## Exo 2 
// 1. Créez un second et un 3eme personnage (le 3eme personnage doit rester vide)

// let p = {
//     nom: "Michel",
//     prenom: "Delarue",
//     age: 24,
//     taille: 152,
// }
// console.log(p);






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

// let m = {}

// m.nom = o.nom;
// m.age = p.age;
// m.taille = 174;

// console.log(m);
// ## Exo 4
// 1. Créer un personnage4 et donner lui la méthode [Saluer] qui dira "Coucou" avec le nom du personage2
// 2. Lancer cette méthode

// let h = {
//     Saluer(){console.log(`Coucou ${m.nom}`);}
// }

// h.Saluer();


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

//-----------------------------------------------------------------------------------------------------------------------------------------------------//


// ## Exo 1
// 1. Créez un personnage avec un nom un et prenom et donnez lui une méthode 'sePresenter' qui fera un console.log "Bonjour je m'appelle " avec son nom puis son prénom.

// let a = {
//     nom: "Vandeputte",
//     prenom: "Maksime",
//     sePresenter(){
//         console.log(`Bonjour je m'appelle  ${a.nom}  ${a.prenom}`);}
// }
// a.sePresenter()


// ## Exo 2
// 1. Créer un objet avec un nom et une méthode
// 2. La méthode de votre objet lance un prompt permetant de changer son age
// 3. Une alert renvoi "[objet] a [age de l'objet] ans"

// let g = {
//     nom: "Eric",
//     age(){
//     this.age = +prompt("Quelle age as tu ?")
//     }
// }
// g.age()
// alert(`${this.nom} à ${this.age} ans`)





//----------------------3-------------------------------------------------------------//
// ## Exo 1

// 1. Créer deux personnages du nom de François et Sergio
// let f = {
//     nom: "François",
//     panier: ["Poivre", "Tomate", "Sprite"],
// }


// let s = {
//     nom: "Sergio",
//     panier: ["Poivre", "Tomate", "Sprite"],
// }

// 2. Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// 3. Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

// let f = {
//     nom: "François",
//     panier: ["Poivre", "Tomate", "Sprite"],
//     derober(enlever){
//         this.panier.push(enlever.panier.shift())
//         this.panier.push(enlever.panier.shift())
//     }
// }


// let s = {
//     nom: "Sergio",
//     panier: ["Poulet", "Patates", "Courgette"],
// }

// f.derober(s)
// console.log(f);

// console.log(s);





//---------------------------------------------------------------------------------------------------------------4----------------------------------------------------------------------------------//

// ## Exo 

// 1. Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne 
// 2. une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.
// 3. Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".
// 4. Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.


let vielle_dame = {
    age: 
}














































// let vielle_dame = {
//     age: 69,
//     nom: "Cruz Abuela",
//     moral: "mal",
//     objet: "Canne",
//     parler(x){
//         if (this.moral == "mal") {
//             alert(`Vous me dérangez, vous méritez un coup de ${this.objet}`)
//         } else if (this.moral == "bien"){
//             alert(`Bonjour ${x.nom}`)
//         }
//     }
// }


// let vielle_homme = {
//     nom: "Michel",
//     adoucir(){
//     vielle_dame.moral = "bien"
//     }
// }

// vielle_dame.parler(vielle_homme)
// vielle_homme.adoucir(vielle_dame)
// vielle_dame.parler(vielle_homme)






















