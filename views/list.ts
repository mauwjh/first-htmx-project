import GROCERIES_DATA, { IGroceries } from "../data/data";
import createGroceryItem from "./groceryItem";

const createListTemplate = () => `
    <ul>
        ${GROCERIES_DATA.map((groceryItem: IGroceries) => createGroceryItem(groceryItem)).join("")}
    </ul>
`;

export default createListTemplate;