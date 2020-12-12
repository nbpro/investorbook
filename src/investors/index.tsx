import React from "react";
import InvestorsHome from "./components/InvestorsHome";
import { initialState, Context as InvestorsContext } from "./store";

export default function InvestorsIndex() {
  const [state, setState] = React.useState(initialState);
  const store = { state, setState };
  
return (
  <InvestorsContext.Provider value={store}>
     <InvestorsHome/>
  </InvestorsContext.Provider>
);
}



