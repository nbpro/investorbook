import { IState } from "../store";
import * as InvestorsService from "../../services/investors";
import { IStore} from "../../types";

export async function loadAllInvestors(store: IStore<IState>) {
  const investors = await InvestorsService.getAllInvestors();
  console.log(store);
  store.setState((store: any) => ({...store, investors}));
  console.log(store);
}

export async function loadAllInvestments(store: IStore<IState>){
  const investments = await InvestorsService.getAllInvestments();
  store.setState((state) => ({...state, ...investments}));
}
