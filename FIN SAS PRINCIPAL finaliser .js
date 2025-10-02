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
                                                                                       
       console .log(`le tri ascendant des livre par titre : \n `)                  
       console .log(triAsc)                                             
    } 
    else if (x == 2){                                                  // choix 2 lance le tri desaandant 
        let triDesc = [...TabLivre].sort((a, b) => b.titre.localeCompare(a.titre));        
           
          console .log(`le tri descendant des livre  par titre  : \n `)      
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

function emprunt(){                      // fonction enrgistrer une emprient 
  
      afficherLivres();

    let idLivre = Number(prompt("\n Entrez l'ID du livre à emprunter (nombre > 100): ") )       
    let LivreChek = TabLivre.find(l => l.id === idLivre)   

    while(!LivreChek){
                       console.log("ID inexistant");
                       idLivre = Number(prompt("\nEntrez un ID valide : ") )       
                       LivreChek = TabLivre.find(l => l.id === idLivre) 
                       }

    
    while(LivreChek.disponible !== "oui"){
                                         console.log("\n Ce livre est déjà emprunté !");
                                         idLivre = Number(prompt("\nEntrez l'ID d'un autre livre disponible : ") )       
                                          LivreChek = TabLivre.find(l => l.id === idLivre) 

        while(!LivreChek){  
                          console.log("ID inexistant");
                          idLivre = Number(prompt("\nEntrez un ID valide : ") )       
                          LivreChek = TabLivre.find(l => l.id === idLivre) 
                          }
                                          }

    
    afficheAbonne();
    let idAbonne = Number(prompt("\nEntrez l'ID de l'abonné : ") )
    let aboneeChek = Tababonne.find(l => l.id === idAbonne) 

    while(!aboneeChek){
                       console.log("\n ID abonné inexistant");
                       idAbonne = Number(prompt("\n Entrez l'ID abonné : ") )       
                       aboneeChek = Tababonne.find(l => l.id === idAbonne) 
                       }

    
    emprunttab.push({ idLivre, idAbonne })                       
    LivreChek.disponible = "non"                                  
    console.log("\n Emprunt enregistré avec succès !")            
    console.log(emprunttab)                                    
                                    
                      }                              

function retournerLivre() {            // fonction retourner livre 
  let idLivreR = Number(prompt("\n Entrez l'ID du livre à retourner : "));    
           
 
 
   let LivreChek = emprunttab.find(l => l.idLivre === idLivreR)   
   while(!LivreChek)    {
    console.log("\n id inixestant dans les emprunt ")
    idLivreR = Number(prompt("\n Entrez l'ID du livre a retourner : ") )       
                
                                 
   LivreChek = emprunttab.find(l => l.idLivre === idLivreR) 
   }


 let idAbonneR = Number(prompt("\n Entrez l'ID de l'abonné : ")); 

 let idAbonneChek = emprunttab.find(l => l.idAbonne === idAbonneR)   
   while(!idAbonneChek)    {
    console.log("\n id inixestant dans les emprunt ")
    idAbonneR = Number(prompt("\n Entrez l'ID abonne a nouveau : ") )       
                
                                 
   idAbonneChek = emprunttab.find(l => l.idAbonne === idAbonneR) 
   }





  let trouve = false;
  for (let i = 0; i < emprunttab.length; i++) {                              
    if (emprunttab[i].idLivre === idLivreR && emprunttab[i].idAbonne === idAbonneR) {          
      emprunttab.splice(i, 1);                                   

                                         // retrouver le livre et changer sa disponibilité
      let livre = TabLivre.find(l => l.id === idLivreR);      
      if (livre) {livre.disponible = "oui";                          

      console.log("\n Retour enregistré !");                    
      trouve = true;                                        
      break;                                                
                                                         }                                                   }
                                                }

  if (!trouve) {                                         
    console.log("\n Aucun emprunt trouvé.");                 
                }
                           }



                                       // ========== menu principale ==========

do{
  console.log(`\n ====== Gestion de bibliotheque ====== \n entrer un nombre pour choisire l'operation voulu   \n 1:ajouter liver \n 2:ajouter plusieur livre \n 3:afficher livre \n 4:tri asd/dec \n 5:tri annee \n 6:afficher livre disponible \n 7:rechrche livre par ID \n 8:ajouter abonnee \n 9:afficher abonnee \n 10:enregistrer emprunt \n 11:enregister un routour \n 12: quiter  `)
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


