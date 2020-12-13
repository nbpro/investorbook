import React, {
  useEffect,
  useState,
  useRef,
  CSSProperties,
  useContext,
} from "react";
import { Drawer, List, Avatar, Divider, Col, Row, Image } from "antd";
import styled from "styled-components";
import { Table, Tag, Space } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";
import { loadAllInvestments } from "../actions";
import { Context as InvestorsContext } from "../store";

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

export const InvestorProfile = styled.div`
  font-size: 16px;
  span {
    font-family: Agenda;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    color: #000000;
    margin-left: 2rem;
  }
`;

export const InvestmentsTitle = styled.div`
  font-family: Agenda;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;
  margin-bottom: 1rem;
`;

export default function AddInvestor() {
  const [visible, setVisible] = useState(true);
  const addInvestmentsStore = useContext(InvestorsContext);

  useEffect(() => {
    loadAllInvestments(addInvestmentsStore);
  }, []);

  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "ACTION",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EditTwoTone />
          <DeleteTwoTone />
        </Space>
      ),
    },
  ];

  function onClose() {
    setVisible(false);
  }
  return (
    <Drawer
      width={640}
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <InvestorProfile>
        <Avatar
          src={
            <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
        />
        <span>Anil Ambani</span>
        <EditTwoTone />
        <DeleteTwoTone />
      </InvestorProfile>
      <Divider></Divider>
      <InvestmentsTitle>INVESTMENTS</InvestmentsTitle>
      <Table
        columns={columns}
        dataSource={addInvestmentsStore.state.investors}
      />
    </Drawer>
  );
}
