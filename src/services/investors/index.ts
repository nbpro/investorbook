import { Investors } from "../../types";
import * as data from "./dummyInvestors";

let investors = data.investors;

export async function getAllInvestors() {
  return [...investors];
}
export async function addInvestors(investor: Investors) { // TODO: add type defn
  return investors.concat(investor);
}
export async function deleteInvestors(id: string) {
  investors = investors.filter((investor) => investor.id !== id);
}