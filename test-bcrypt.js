const bcrypt = require('bcrypt');

const plainPassword = 'Amit1234';
const hashFromDB = '$2b$10$SdE2JoIrBO/ui5FI.UGuJe8XHihyt1UNjw4hkNPaoEjB6cXG.rX/q';

bcrypt.compare(plainPassword, hashFromDB)
    .then(result => {
        console.log("Match result:", result); // true or false
    })
    .catch(err => {
        console.error("Error comparing passwords:", err);
    });