import { DocumentStore } from "ravendb";
const fs = require('fs');
const path = require('path');

const authOptions = {
    certificate: fs.readFileSync(path.resolve(process.cwd(), './db/2kdb.pfx')),
    type: "pfx", // or "pem"
};

const store = new DocumentStore(process.env.DATABASE_URL, "2kdb", authOptions);
store.initialize();

export { store }