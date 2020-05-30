import { DocumentStore } from "ravendb";
import * as fs from "fs";

const authOptions = {
    certificate: fs.readFileSync('./db/2kdb.pfx'),
    type: "pfx", // or "pem"
    password: process.env.RAVENDB_PASS
};

const store = new DocumentStore(process.env.DATABASE_URL, "2kdb", authOptions);
store.initialize();

export { store }