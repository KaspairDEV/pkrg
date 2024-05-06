import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const menu: SimpleTranslationEntries = {
  "cancel": "Annuler",
  "continue": "Continuer",
  "dailyRun": "Défi du jour (Bêta)",
  "loadGame": "Charger la partie",
  "newGame": "Nouvelle partie",
  "selectGameMode": "Sélectionnez un mode de jeu.",
  "logInOrCreateAccount": "Connectez-vous ou créez un compte pour commencer. Aucun e-mail requis !",
  "username": "Nom d’utilisateur",
  "password": "Mot de passe",
  "login": "Connexion",
  "register": "S’inscrire",
  "emptyUsername": "Le nom d’utilisateur est manquant",
  "invalidLoginUsername": "Le nom d’utilisateur n’est pas valide",
  "invalidRegisterUsername": "Le nom d’utilisateur ne doit contenir que\ndes lettres, chiffres ou traits bas",
  "invalidLoginPassword": "Le mot de passe n’est pas valide",
  "invalidRegisterPassword": "Le mot de passe doit contenir 6 caractères ou plus",
  "usernameAlreadyUsed": "Le nom d’utilisateur est déjà utilisé",
  "accountNonExistent": "Le nom d’utilisateur n’existe pas",
  "unmatchingPassword": "Le mot de passe n’est pas correct",
  "passwordNotMatchingConfirmPassword": "Les mots de passe ne correspondent pas",
  "confirmPassword": "Confirmer le MDP",
  "registrationAgeWarning": "Vous confirmez en vous inscrivant que vous avez 13 ans ou plus.",
  "backToLogin": "Retour",
  "failedToLoadSaveData": "Échec du chargement des données. Veuillez recharger la page.\nSi cela continue, veuillez contacter l’administrateur.",
  "sessionSuccess": "Session chargée avec succès.",
  "failedToLoadSession": "Vos données de session n’ont pas pu être chargées.\nElles pourraient être corrompues.",
  "boyOrGirl": "Es-tu un garçon ou une fille ?",
  "boy": "Garçon",
  "girl": "Fille",
  "dailyRankings": "Classement du Jour",
  "weeklyRankings": "Classement de la Semaine",
  "noRankings": "Pas de Classement",
  "loading": "Chargement…",
  "playersOnline": "Joueurs Connectés",
  "empty":"Empty",
  "yes":"Yes",
  "no":"No",
  "confirmStartTeam":'Begin with these Pokémon?',
  "growthRate": "Growth Rate:",
  "ability": "Ability:",
  "passive": "Passive:",
  "nature": "Nature:",
  "eggMoves": 'Egg Moves',
  "start": "Start",
  "addToParty": "Add to Party", 
  "toggleIVs": 'Toggle IVs',
  "manageMoves": 'Manage Moves',
  "useCandies": 'Use Candies',
  "selectMoveSwapOut": "Select a move to swap out.",
  "selectMoveSwapWith": "Select a move to swap with",
  "unlockPassive": "Unlock Passive",
  "reduceCost": "Reduce Cost",
  "cycleShiny": "R: Cycle Shiny",
  "cycleForm": 'F: Cycle Form',
  "cycleGender": 'G: Cycle Gender',
  "cycleAbility": 'E: Cycle Ability',
  "cycleNature": 'N: Cycle Nature',
  "cycleVariant": 'V: Cycle Variant'
} as const;
