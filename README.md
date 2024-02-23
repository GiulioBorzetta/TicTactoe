# TIC TAC TOE

Progetto creato con Vue che permette su uno stesso computer di giocare a tris!
[Clicca qui](https://tictactoetris.netlify.app/) per poter provare il gioco!

## Funzionamento

Una volta aperto il sito, chiederà i nomi del primo e secondo giocatore. 
Una volta inseriti si svolgerà la partita ed attraverso le combinazioni per vincere, solo la griglia del tetris comparirà la scritta con chi ha vinto. 
In caso non vincesse nessuno dei due giocatori, comparirà la scritta del pareggio sempre sotto la griglia del tetris. 
Al termine della partita si potrà resettare la griglia per poter rigiocare la partita senza dover inserire di nuovo i nomi.


# Struttura

## Template

Il codice è stato creato con l’aiuto dei comandi di vue. Potevo usare un metodo più semplificato attraverso più div che rappresentavano le celle, ma l’ho ritenuto più appropriato questo metodo, anche a livello visivo risulta molto più pulito.

## Script

- Lo script è strutturato in:
- click,
- checkWinner,
- reset,
- getIcon;

Con la funzione click, permette che quando si clicca su una cella, riconosce che è stata cliccata una cella ed applica una foto (X o O) la scelta della foto è stata scelta grazie al calcolo dei click che sono stati fatti, la X verrà applicato per i numeri pari (quindi la X partirà sempre per primo) e per i numeri dispari verrà usata la O ed infine controlla il checkWinner, dove vede se è stata applica una delle combinazioni scritte in winningCombos ed in caso andrà a controllare chi ha vinto, se ha vinto ed se ci fosse stato un pareggio, in base al risultato che uscirà si comporterà in modi distinti: andrà ad analizzare i nomi dei giocatori inseriti all’inizio della partita attraverso il comando di firstPlayer e secondPlayer. Se non dovesse trovare un vincitore andrà semplicemente ad applicare la scritta PAREGGIO. La funzione di reset, permette alla fine di una partita di svuotare la griglia e di poter cominciare una nuova partita. Nella funzione reset sono stati applicati tutti i valori base della griglia, come si può trovare appena cominci la prima partita. Infine getIcon permette di applicare l’icona (X o O) solamente in una determinata cella.
