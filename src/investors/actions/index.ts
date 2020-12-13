import { IState } from "../store";
import * as InvestorsService from "../../services/investors";
import { IStore} from "../../types";

export async function loadAllInvestors(store: IStore<IState>) {
  const investors = await InvestorsService.getAllInvestors();
  store.setState((state) => ({...state,...investors}));
}

export async function loadAllInvestments(store: IStore<IState>){
  const investments = await InvestorsService.getAllInvestments();
  store.setState((state) => ({...state, ...investments}));
}
