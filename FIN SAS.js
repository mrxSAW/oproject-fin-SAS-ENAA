const prompt = require('prompt-sync')(); 

let TabLivre   = []     // declaration du tableau a livre 
let Tababonne  = []    // declaration du tableau a abonnée
let emprunttab = []   // declaration du tableau a emprunt 
let choix            // declaration du variable -choix- a reutiliser 
let i               // i a utuliser ulterierment 
  
function ajouterLivre (){                  //fonction pour ajouter les livre 
                                     
    i=1                              // initialisation a 1 pour que id debut par 1
    let livre = {}                      // declaration de l'object libre a pousher dans le tableau des livre 
    livre.id         = TabLivre.length + 100              // l'id va etre assigner automatiqueme est s'incrimente pour chaque livre 
    livre.titre      = prompt(`Titre du livre :` )          // demmander le titre du livre    
    livre.auteur     = prompt("Auteur du livre : ")           // demander le nom de l'auteur 
    livre.annee      = prompt("Année de publication : ")                      // demander l'annee de publication 
    livre.disponible = prompt("Le livre est-il disponible ? (oui/non) : ")            // demander l'etat du livre si il est disponoble ou non 
    TabLivre.push(livre)                         // ajouter le livre a la fin du tableau 
    console.log("Livre ajouté avec succès !")                  // affichage du succes de l'auperation 
                           }

function ajouterPlusLivre (){                    // fonction d'ajout de plusieur livre 
    let Nlivres = Number(prompt("Combien de livres voulez-vous ajouter ? (nombre seulment) : "))    // nombre des livre a ajouter
    for (let i = 0; i < Nlivres; i++) {                           //loop pour repeter les instruction autent de livre a ajouter 
        console.log(`\nAjout du livre ${i+1} :`)                 // affichage du numero de livre a ajouter 
        ajouterLivre()                                           // appel de la fonction d'ajoute des livre precedente 
    }
                              }

function afficherLivres() {                                // fonction d'affichage  des livre 
    if (TabLivre.length === 0) {                           // cas ou tableau vide 
            console.log("Aucun livre disponible.")         // message tableau vide   
                                } 
    else {                                             
            console.log("\nListe des livres :")             //  titre 
       for(let i = 0; i < TabLivre.length; i++) {          // loop pour les livre un apres l'autre
                              console.log(TabLivre [i])   // element a afficher 
                                                 }
         }
                             }

function triLivreAscDec () {                            // fonction de tri des livre assendant ou dissandant par titre 
    let x = prompt("enter 1 pour trie ascendant et 2 pour trie descendant : ")  // declaration du variable pour choix entre ascd est desnd
    if (x == 1){                                                                // choix 1 lance un classement ascd 
        let triAsc = [...TabLivre].sort((a, b) => a.titre.localeCompare(b.titre));     // creation un tableau copier du tableau tablivre et
                                                                                       //la finction du tris qui va comparer des titre sucssisif est les replacer 
       console .log(`le tri assendant des livre par titre : \n `)                 // titre 
       console .log(triAsc)                                             // affichage du tri 
    } 
    else if (x == 2){                                                  // choix 2 lance le tri desaandant 
        let triDesc = [...TabLivre].sort((a, b) => b.titre.localeCompare(a.titre));       // inverce de la fonction du tri Asc  
           
          console .log(`le tri assendant des livre  par titre  : \n `)      // titre 
           console .log(triDesc)                                // afichage du tri 
                    }    
                             }

function triLivreAnnee () {                          // fonction de tri des livre ASC par annee 
    
        let triAsc = [...TabLivre].sort((a, b) => a.annee.localeCompare(b.annee));         // recoper le tab et trie par annee de publication 
         console .log(`le tri assendant par annee  : \n `)                                 // titre 
        console .log(triAsc)                                                                   // afichage du tri 
    
                            }

function afficheLivreDispo() {                   // fonction d'affichage des livre disponible      
    let i                           
                                                      
     for ( i = 0; i < TabLivre.length; i++) {        // loop pour afficher les element sucsessif
        if (TabLivre.length === 0 && TabLivre[i].disponible !== "oui") {                // cas ou le tableau vide ou pas de livre dispo 
                                             console.log("Aucun livre disponible.")     // message non dispo 
                                           } 
        if (TabLivre[i].disponible == "oui"){                                          // cas  de livre disponible 
                                            
                                            console.log(TabLivre[i])                   // liste des livre dispo
                                            }                        
                                            }
                             }

function rechercheID(){                        // fonction de recherche par ID 
    let idRecherche = Number(prompt("Entrez l'ID du livre à rechercher : "))     // demande de id a rechercher 
      for (let i = 0; i < TabLivre.length; i++) {                               //loop pour naviguer le tableau 
        if (TabLivre[i].id === idRecherche) {                           //cas de correspandance 
            console.log("Livre trouvé :\n", TabLivre[i])                // affichage du livre trouve
            return
                                            }
                                            }
                       }                      

function ajouterAbonne() {                   // fonction qui ajout un abonneé 
    let abonne = {}                                 // creation de object abonne 
    abonne.id = Tababonne.length + 1                // id automatique depant du tableau 
    abonne.nom = prompt("Nom de l'abonné : ")        //  demande du nom 
    abonne.prenom = prompt("Prénom de l'abonné : ")        // demande  du prenom 
    abonne.telephone = prompt("Téléphone de l'abonné : ")  // demande nom du tel 
    abonne.email = prompt("Email de l'abonné : ")          // demande email 
    Tababonne.push(abonne)                                  // ajout de l'objet  au tableau  
    console.log("Abonné ajouté avec succès !")               // message tach fait 
                          }

function afficheAbonne(){                  // fonction affichage abonnee
           if (Tababonne.length === 0) {                                    // cas tableau vide 
                      console.log("Aucun abonné trouvé.")                   // message pas d'abonne
                                      }
           else {
        console.log("\nListe des abonnés :")                                   // titre  
        for (let i = 0; i < Tababonne.length; i++) {                           // loop d'affichage succesive des abonée 
                                                    console.log(Tababonne[i])    // liste des elemenet
                                                    }              
                }
                         }

function emprunt(){                      // fonction enrgistrer une emprient 
    let idLivre = +prompt("Entrez l'ID du livre à emprunter : ")     // demande id livre       
  let idAbonne = +prompt("Entrez l'ID de l'abonné : ")               // demande  id 

                                                         // Vérif si le livre  disponible
  let livre = TabLivre.find(l => l.id === idLivre)       // trouve livre 
  if (!livre || livre.disponible !== "oui") {                //si le livre non disponible ou id non trouver dans aucun objet
    console.log("Livre non disponible ou inexistant.")      // message livre inixistant 
    return                                                  // sorter de la fonction livre non trouver 
  }

                                                              // Enregistrer l'emprunt
  emprunttab.push({ idLivre, idAbonne })                      // ajout l'objt au tableau 
  livre.disponible = "non"                                   // changer statu a non
  console.log("Emprunt enregistré avec succès !")            // message succe tach
  console.log(emprunttab)                                    // afiche tableau des emprunt
                    }                         

function retournerLivre() {            // fonction retourner livre 
  let idLivre = +prompt("Entrez l'ID du livre à retourner : ");   // demander id du livre retourner 
  let idAbonne = +prompt("Entrez l'ID de l'abonné : ");           // demander id de l'abonee retourner le livre 
 
  let trouve = false;

  for (let i = 0; i < emprunttab.length; i++) {                              // for loop pour parcourire le tableau  
    if (emprunttab[i].idLivre === idLivre && emprunttab[i].idAbonne === idAbonne) {          // cas ou livre abonee trouver 
      emprunttab.splice(i, 1);                                    //  supprimer l'emprunt

                                         // retrouver le livre et changer sa disponibilité
      let livre = TabLivre.find(l => l.id === idLivre);     // variable pour chercher id livre  
      if (livre) {livre.disponible = "oui";                  // modifier disponible on oui         

      console.log("Retour enregistré !");                   // message tach done 
      trouve = true;                                        // modifier  trouve to true 
      break;                                               //arreter si condition virifier 
                                                         }                                                   }
                                                }

  if (!trouve) {                                          // si trouve rest false 
    console.log("Aucun emprunt trouvé.");                 // message emprunt enixistant 
                }
                           }





do{
  console.log(`\n ====== Gestion de bibliotheque ====== \n entrer un nombre pour choisire l'operation voulu   \n 1:ajouter liver \n 2:ajouter plusieur livre \n 3:afficher livre \n 4:tri asd/dec \n 5:tri annee \n 6:afficher livre disponible \n 7:rechrche livre par ID \n 8:ajouter abonnee \n 9:afficher abonnee \n 10:enregistrer emprunt \n 11:enregister un routour \n 12: quiter  `)
  choix = prompt("entre un choix ")            // demander le choix 

   
        if (choix == 1){                                 //  test des choix et appel de fonction correspondant
                        ajouterLivre()
                        }
        else if (choix == 2) {
                        ajouterPlusLivre()  
                            }
       else if (choix == 3) {
                        afficherLivres()
                           }          
        else if(choix == 4){
                        triLivreAscDec()
                        }        
        else if(choix == 5){
                        triLivreAnnee()
                            }
        else if (choix == 6) {
                        afficheLivreDispo()
                            } 
        else if (choix == 7) {
                        rechercheID()
                            }
        else if (choix == 8) {
                        ajouterAbonne()
                             }
        else if (choix == 9) {
                        afficheAbonne()
                              }
        else if (choix == 10) {
                        emprunt()
                            }
        else if (choix == 11) {
                        retournerLivre()
                             }
        else if (choix == 12) {
                        console.log("merci")
                               }
        else {
                        console.log("cas introuvale entrer un nombre valide")
               }
            
    
   }while(choix !== "12" )


