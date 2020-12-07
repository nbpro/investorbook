import React from "react";
import InvestorsIndex from './investors';


function AppContents() {
  return (
      <div style={{ display: "flex"}}>
          <InvestorsIndex/>
      </div>
  );
}

export default function App() {
  return (
      <AppContents />
  );
}
