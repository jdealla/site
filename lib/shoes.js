import allShoes from "../data/diamondshoes.csv";

export function getAllShoes() {
    return allShoes;
}

export function getShoe(name) {
    return allShoes.find(shoe => shoe.name === name);
}


