import { List, Avatar, Button, Divider } from "antd";
import React from "react";
import styled from "styled-components";

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function InvestorList({ ...props }) {
  console.log(props);
  return (
    <>
      <Divider></Divider>
      <ListItem>
          <Avatar src={props.imageUrl} />
      </ListItem>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={props.imageUrl} />}
          title={<a href="https://sarkari-naukri-jobs.in/"></a>}
          description={props?.companies && props.companies.toString()}
        />
      </List.Item>
    </>
  );
}
