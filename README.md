Ciao ragazzi,
Esercizio di oggi: **React Context API**
repo: react-context-api

**Consegna**
Sfruttiamo le Context API per rendere disponibile la lista dei post in tutta la nostra app.
- Partiamo col definire la lista dei post all’interno di App.jsx oppure fate la chiamata alle API per prelevarle
- Se non lo abbiamo già fatto in precedenza, creiamo un componente `PostsPage.jsx`  che conterrà al suo interno un titolo e un componente `PostsList.jsx`  che mostra la lista di tutti i nostri post.
- Creiamo un file per definire il nostro Context ed esportiamolo
- Importiamo il Provider in `App.jsx` e wrappiamoci la nostra applicazione
- Facciamo in modo che il componente `PostsList.jsx` recuperi i post consumando il Context e crei dunque una card per ciascuno di essi.

**Bonus**
- Implementare un componente `Alert` gestito tramite Context, prevedete il passaggio dinamico di testo e di tipologia dell'Alert
- Implementate il dismiss automatico dell'alert dopo 10 secondi