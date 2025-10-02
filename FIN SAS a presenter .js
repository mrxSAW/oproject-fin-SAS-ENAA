const prompt = require('prompt-sync')(); 

let TabLivre   = []     
let Tababonne  = []    
let emprunttab = []   
let choix            
let i               
  
function ajouterLivre (){                  //fonction pour ajouter les livre 
                                     
                                
    let livre = {}                      
    livre.id         = TabLivre.length + 100 
    console.log("\n entrer les informations du livre \n")              
    livre.titre      = prompt(`Titre du livre :` )             
    livre.auteur     = prompt("Auteur du livre : ")            
    livre.annee      = prompt("Année de publication : ")                      
    livre.disponible = "oui"          
    TabLivre.push(livre)                         
    console.log("Livre ajouté avec succès !")                  
                           }

function ajouterPlusLivre (){                    // fonction d'ajout de plusieur livre 
    let Nlivres = Number(prompt(" \n Combien de livres voulez-vous ajouter ? (nombre seulment) :  "))  
      
    for (let i = 0; i < Nlivres; i++) {                           
        console.log(`\nAjout du livre ${i+1} :`)                 
        ajouterLivre()                                            
    }
                              }

function afficherLivres() {                                // fonction d'affichage  des livre 
    if (TabLivre.length === 0) {                           
            console.log("Aucun livre disponible.")            
                                } 
    else {                                             
            console.log("\nListe des livres :")              
       for(let i = 0; i < TabLivre.length; i++) {          
                              console.log(TabLivre [i])    
                                                 }
         }
                             }

function triLivreAscDec () {                            // fonction de tri des livre assendant ou dissandant par titre 
    let x = prompt("enter 1 pour trie ascendant et 2 pour trie descendant : ")  
    if (x == 1){                                                                
        let triAsc = [...TabLivre].sort((a, b) => a.titre.localeCompare(b.titre));     
                                                                                       
       console .log(`le tri assendant des livre par titre : \n `)                  
       console .log(triAsc)                                             
    } 
    else if (x == 2){                                                  // choix 2 lance le tri desaandant 
        let triDesc = [...TabLivre].sort((a, b) => b.titre.localeCompare(a.titre));        
           
          console .log(`le tri assendant des livre  par titre  : \n `)      
           console .log(triDesc)                                 
                    }    
                             }

function triLivreAnnee () {                          // fonction de tri des livre ASC par annee 
    
        let triAsc = [...TabLivre].sort((a, b) => a.annee.localeCompare(b.annee));         
         console .log(`le tri assendant par annee  : \n `)                                  
        console .log(triAsc)                                                                   
    
                            }

function afficheLivreDispo() {                   // fonction d'affichage des livre disponible      
                                                                       
let dispoTrouve = false;
  console.log(" \nliste des livre disponible ")
for (let i = 0; i < TabLivre.length; i++) {
    if (TabLivre[i].disponible === "oui") {
                                        console.log(TabLivre[i]);
                                         dispoTrouve = true;
                                          }
                                           }

if (!dispoTrouve) {
    console.log("Aucun livre disponible.");
                   }

                             }

function rechercheID(){                        // fonction de recherche par ID 
    let idRecherche = Number(prompt("\n Entrez l'ID du livre à rechercher : "))      
         let trouve=false  
    for (let i = 0; i < TabLivre.length; i++) {                              
        if (TabLivre[i].id === idRecherche) {                           
            console.log("Livre trouvé :\n", TabLivre[i])                
            trouve=true
            
                                            }
                                            }
           if (!trouve){console.log("livre introuvable ")}                                 
                       }                      

function ajouterAbonne() {                   // fonction qui ajout un abonneé 
    let abonne = {}  
    console.log("\n entrer les information de l'abonne")                                 
    abonne.id = Tababonne.length + 1                
    abonne.nom = prompt("Nom de l'abonné : ")        
    abonne.prenom = prompt("Prénom de l'abonné : ")         
    abonne.telephone = prompt("Téléphone de l'abonné : ")   
    abonne.email = prompt("Email de l'abonné : ")           
    Tababonne.push(abonne)                                  
    console.log("Abonné ajouté avec succès !")               
                          }

function afficheAbonne(){                  // fonction affichage abonnee
           if (Tababonne.length === 0) {                                     
                      console.log(" \n Aucun abonné trouvé.")                   
                                      }
           else {
        console.log("\nListe des abonnés :")                                     
        for (let i = 0; i < Tababonne.length; i++) {                            
                                                    console.log(Tababonne[i])    
                                                    }              
                }
                         }




                                       // ========== menu principale ==========

do{
  console.log(`\n ====== Gestion de bibliotheque ====== \n entrer un nombre pour choisire l'operation voulu   \n 1:ajouter liver \n 2:ajouter plusieur livre \n 3:afficher livre \n 4:tri asd/dec \n 5:tri annee \n 6:afficher livre disponible \n 7:rechrche livre par ID \n 8:ajouter abonnee \n 9:afficher abonnee  \n 12: quiter  `)
  choix = prompt("entre un choix ")             

   
        if (choix == 1){                                
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
       
        else if (choix == 12) {
                        console.log("merci")
                               }
        else {
                        console.log("cas introuvale entrer un nombre valide")
               }
            
    
    }while(choix !== "12" )


