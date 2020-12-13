import React, { useContext, useEffect, useState } from "react";
import InvestorList from "./InvestorsList";
import styled from "styled-components";
import { Context as InvestorsContext } from "../store";
import { loadAllInvestors } from "../actions/index";
import { List, Avatar, Button } from "antd";
import { Investor } from "../../types";
import AddInvestor from "./AddInvestors";

export const InvestorTitle = styled.div`
  width: 116px;
  height: 33px;
  font-family: Agenda;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 26px;
  color: #000000;
  display: inline;
  margin-right: 1rem;
`;

export const AddInvestorBox = styled.div`
  color: #000000;
  margin-bottom: 2rem;
`;

export default function InvestorsHome() {
  const investorsStore = useContext(InvestorsContext);
  const [showAddInvestor, setShowAddinvestor] = useState(false);
  const [loadInvestorList, setShowInvestorList] = useState(false);

  useEffect(() => {
    loadAllInvestors(investorsStore);
  }, []);

  function addInvestorClick(event: React.MouseEvent) {
    setShowAddinvestor(true);
  }

  return (
    <div>
      <AddInvestorBox>
        <InvestorTitle>Investors</InvestorTitle>
        <Button type="primary" onClick={addInvestorClick}>
          Add Investor
        </Button>
      </AddInvestorBox>
      {investorsStore.state.investors.length ? investorsStore.state.investors.map((investor: Investor) => {
            return (
              <List itemLayout="horizontal">
                <InvestorList key={investor.id} {...investor} />
              </List>
            );
          })
        : // <Button type="primary" onClick={addInvestorClick}>Add Investor</Button>
          null}
      {showAddInvestor ? <AddInvestor /> : null}
    </div>
  );
}
