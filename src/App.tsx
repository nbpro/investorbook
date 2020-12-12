import React from "react";
import InvestorsIndex from "./investors";

import { Tabs } from "antd";
import styled from "styled-components";

const { TabPane } = Tabs;

export const Container = styled.div`
  max-width: 90vw;
  margin: 0 auto;
`;
export const AppHeader = styled.div`
  width: 190px;
  height: 33px;
  left: 269px;
  top: 134px;
  font-family: Agenda;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0.18em;
  color: #4970f8;
  margin-top: 2rem;
`;

function AppContents() {
  const callback = (key: any) => {
    console.log(key);
  };
  return (
    <Container>
      <AppHeader>INVESTORBOOK</AppHeader>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="investors" key="1">
          <InvestorsIndex />
        </TabPane>
        <TabPane tab="Companies" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </Container>
  );
}

export default function App() {
  return <AppContents />;
}
