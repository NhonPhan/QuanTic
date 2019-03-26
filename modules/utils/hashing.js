const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const Promise = require('bluebird');
const ALGORITHM = 'aes-256-ctr'; //aes192

class Hashing {
	constructor(){

	}
	makeHashPass(pass) {
		const salt = bcrypt.genSaltSync(12);
		const hash = bcrypt.hashSync(pass, salt);
		return hash;
	}

	compare(pass, hash) {
		return new Promise((resolve, reject) => {
			bcrypt.compare(pass, hash, (error, result) => {
				if(error) {
					return reject(error);
				}	
				return resolve(result);
			});
		});
	}

	encrypt(text, password) {
		const cipher = crypto.createCipher(ALGORITHM, password);
		let crypted = cipher.update(text, 'utf8', 'hex');
		crypted += cipher.final('hex');
		return crypted;
	}

	decrypt(text, password) {
		const decipher = crypto.createDecipher(ALGORITHM, password);
		let dec = decipher.update(text, 'hex', 'utf8');
		dec += decipher.final('utf8');
		return dec;
	}
}

module.exports = Hashing;