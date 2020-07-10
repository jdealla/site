import { DocumentStore } from "ravendb";
import { getDecryptedSecret } from "./decrept-secret";

const authOptions = {
    certificate: getDecryptedSecret(),
    type: "pem",
};

const store = new DocumentStore([process.env.DATABASE_URL, process.env.DATABASE_URL_2, process.env.DATABASE_URL_3], "2kdb", authOptions);
const conventions = store.conventions;

conventions.ReadBalanceBehavior = ReadBalanceBehavior.RoundRobin;
store.initialize();

export { store }