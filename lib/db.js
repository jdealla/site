import { DocumentStore, Certificate } from "ravendb";

const certificate = process.env.RAVENDB_CERT + process.env.RAVENDB_RSA;

console.log(certificate);

const authOptions = {
    certificate,
    type: "pem",
};

const store = new DocumentStore(process.env.DATABASE_URL, "2kdb", authOptions);
store.initialize();

export { store }