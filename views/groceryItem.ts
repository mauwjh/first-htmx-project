import { IGroceries } from "../data/data";

const createGroceryItem = (groceryItem: IGroceries | undefined) => {
  if (!groceryItem) return;

  return `
    <li data-id="${groceryItem.id}">
        <div class="details">
            <h3>${groceryItem.title}</h3>
            <p>x ${groceryItem.quantity}</p>  
        </div>
        <button hx-post="/groceries/delete/${groceryItem.id}" hx-swap="delete" hx-target="closest li">Delete</button>
    </li>
`;
};

export default createGroceryItem;
