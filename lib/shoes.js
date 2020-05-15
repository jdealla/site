import allShoes from "../data/diamondshoes.csv";

export function getAllShoes() {
    return allShoes;
}

export const shoeButton = (
    <button className="button" disabled>
        <span className="icon">
            <img src={require("images/icons/icon_shoes.png")} />
        </span>
        <span>Add Shoe</span>
    </button>
)

