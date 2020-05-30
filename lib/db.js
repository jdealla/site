import { DocumentStore } from "ravendb";

const certificate = process.env.RAVENDB_CERT + process.env.RAVENDB_RSA_KEY;

const authOptions = {
    certificate,
    type: "pem",
};

const store = new DocumentStore(process.env.DATABASE_URL, "2kdb", authOptions);
store.initialize();

export { store }