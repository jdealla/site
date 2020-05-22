import allEvos from "../data/evos.csv";

export function getAllEvos() {
    return allEvos;
}

export function getEvo(id) {
    return allEvos.find(evo => evo.id === id);
}

