# API pour le projet final

## Cloner ce git

`git clone https://github.com/mattheri/projetfinalapi.git` puis `cd/projetfinalapi && npm install`

## Pour déployer sur Heroku

1. Créer un fichier .env
2. Ajouter deux clés: `SERVER` et `DATABASE`
3. Créer une base de données sur [MongoDB](https://cloud.mongodb.com/)
4. Une fois que la base de données est crée, aller dans le projet et trouver le cluster
5. Cliquer sur `CONNECT` puis choisir `Connect your application`
6. Aller dans `Database Access`
7. Cliquer sur `Edit`
8. Ajouter un nouveau mot de passe (je suggère d'en générer un aléatoire)
9. Dans le fichier .env clé `SERVER` ajouter la partie avant `/myFirstDatabse?`. Remplacer `<password>` par le mot de passe auto-généré précédemment
10. Dans le fichier .env clé `DATABASE` ajouter la partie `myFirstDatabase?retryWrites=true&w=majority`. Remplacer `myFirstDatabase` par le nom du cluster

[Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)

## Modifications

- Vous pouvez modifier les endpoints dans le fichier `server.js`.
- Vous pouvez modifier les schemas dans le folder `db/schema`.
- Vous pouvez modifier les routes dans le folder `router`.

## Utilisation

Je conseille d'utiliser un programme comme [Insomnia](https://insomnia.rest/) afin de tester les endpoints et de ne pas "polluer" l'API.

Le endpoint de l'API est:
`https://lit-shelf-44437.herokuapp.com/api/`

### Utilisateurs

{
"nom": "String",
"prenom": "String",
"courriel": "String",
"telephone": "String",
"ville": "String",
"competences": "Array",
"formations": "Array",
"cv": "String",
"message": "String"
}

_Je ne fais aucune authentification. Vous êtes responsable de créer votre propre flow d'authentification. Je n'ai pas géré les fichiers attachés non plus._

- endpoint: `utilisateur`
- créer: `POST` avec un body
- get tous: `GET`
- get un seul par id: `GET /id`
- mettre à jour: `PUT /id` avec un body
- supprimer: `DELETE /id`

### Entreprises

{
"nom": "String",
"nomPersonneContact": "String",
"prenomPersonneContact": "String",
"courriel": "String",
"telephone": "String",
"adresse": "String",
"ville": "String",
"siteWeb": "String",
"logo": "String",
"description": "String",
"secteurActivite": "Array",
"typesPostes": "Array"
}

- endpoint: `entreprise`
- créer: `POST` avec un body
- get tous: `GET`
- get un seul par id: `GET /id`
- mettre à jour: `PUT /id` avec un body
- supprimer: `DELETE /id`

### Regions

{
"nom": "String"
}

- endpoint: `region`
- créer: `POST` avec un body
- get tous: `GET`
- get un seul par id: `GET /id`
- mettre à jour: `PUT /id` avec un body
- supprimer: `DELETE /id`

### Secteurs d'activité

{
"nom": "String"
}

- endpoint: `activite`
- créer: `POST` avec un body
- get tous: `GET`
- get un seul par id: `GET /id`
- mettre à jour: `PUT /id` avec un body
- supprimer: `DELETE /id`

### Demandes de stages

{
"titre": "String",
"programmeSuivi": "String",
"autresFormations": "Array",
"competences": "Array",
"descriptionPosteRecherche": "String",
"ville": "String",
"dateDebut": "Date",
"dateFin": "Date",
"nbHeuresSemaine": "Number",
"type": "String",
"duree": "Number",
"remunere": "Boolean",
"dateParution": "Date",
"autresInformations": "String",
"etudiant": "String"
}

- endpoint: `demandes`
- créer: `POST` avec un body
- get tous: `GET`
- get un seul par id: `GET /id`
- mettre à jour: `PUT /id` avec un body
- supprimer: `DELETE /id`

### Offres de stage

{
"titre": "String",
"entreprise": "String",
"secteurActivite": "Array",
"ville": "String",
"dateDebut": "Date",
"dateFin": "Date",
"duree": "Number",
"description": "String",
"nbHeuresSemaine": "Number",
"competences": "Array",
"remunere": "Boolean",
"emploiApresStage": "Boolean",
"dateParution": "Date",
"informationsSupplementaires": "String",
"vedette": "Boolean"
}

- endpoint: `stage`
- créer: `POST` avec un body
- get tous: `GET`
- get un seul par id: `GET /id`
- mettre à jour: `PUT /id` avec un body
- supprimer: `DELETE /id`
