import { DocumentStore } from "ravendb";
import { getDecryptedSecret } from "./decrept-secret";

const authOptions = {
    certificate: getDecryptedSecret(),
    type: "pem",
};

const store = new DocumentStore(process.env.DATABASE_URL, "2kdb", authOptions);
store.initialize();

export { store }