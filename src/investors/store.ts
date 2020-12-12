import { createContext } from "react";
import { Investor} from '../types/index';

export interface IState {
    investors: Investor[];
}

export const initialState: IState = { investors: [] }; // intial state

export const Context = createContext<{
  state: IState;
  setState: React.Dispatch<React.SetStateAction<IState>>;
}>(undefined as any);