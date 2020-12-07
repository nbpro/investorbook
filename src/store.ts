import { createContext } from "react";
import { Tag, TagInfo } from "./types";

export interface IState {
  name?: string;
  device?: string;
  recentTags: TagInfo[];
  snack?: {
    message: string;
    onClick: () => void;
  };
}

export const initialState: IState = { recentTags: [] };

export const Context = createContext<{
  state: IState;
  setState: React.Dispatch<React.SetStateAction<IState>>;
}>(undefined as any);
