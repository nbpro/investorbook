import { IState } from "../store";
import * as InvestorsService from "../../services/investors";
import { IStore} from "../../types";

export async function loadAllInvestors(store: IStore<IState>) {
  const investors = await InvestorsService.getAllInvestors();
  store.setState((state) => ({...state,...investors}));
}
