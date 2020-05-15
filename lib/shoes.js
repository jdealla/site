import allShoes from "../data/diamondshoes.csv";

export function getAllShoes() {
    return allShoes;
}

export function getShoe(name) {
    return allShoes.find(shoe => shoe.name === name);
}

export const shoeButton = (
    <button className="button is-centered">
        <span className="icon">
            <img src={require("images/icons/icon_shoes.png")} />
        </span>
        <span>Add Shoe</span>
    </button>
)


