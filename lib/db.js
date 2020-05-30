import { DocumentStore, Certificate } from "ravendb";

const key = new Buffer(process.env.RAVENDB_KEY, 'base64');
const cert = new Buffer(process.env.RAVENDB_CERT, 'base64');
const certificate = cert + key;

const authOptions = {
    certificate,
    type: "pem",
};

const store = new DocumentStore(process.env.DATABASE_URL, "2kdb", authOptions);
store.initialize();

export { store }