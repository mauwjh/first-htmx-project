export interface IGroceries {
  id: string;
  title: string;
  quantity: number;
}

const GROCERIES_DATA: IGroceries[] = [
  { id: "1", title: "milk", quantity: 1 },
  { id: "2", title: "bread", quantity: 2 },
];

export default GROCERIES_DATA;
