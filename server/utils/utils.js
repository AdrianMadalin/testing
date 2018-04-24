const bcrypt = require('bcrypt');

Util = {};

// Util.prototype.cryptPassword = (myPlaintextPassword, saltRounds) => {
//     bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
//         if (err) {
//             console.log(err)
//         } else {
//             return hash;
//         }
//     })
// };

module.exports = Util;