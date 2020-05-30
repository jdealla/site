import crypto from 'crypto';

import { encrypted } from '../db/encrypted.enc';

const algorithm = 'aes-128-cbc';

const cipher = crypto.createDecipheriv(
    algorithm,
    process.env.RAVENDB_CERT_KEY,
    process.env.RAVENDB_CERT_IV,
);

export const getDecryptedSecret = () => {
    let decrypted = cipher.update(encrypted, 'base64') + cipher.final('utf8');

    return decrypted;
};