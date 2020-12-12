import { List, Avatar, Button } from "antd";
import React from "react";

export default function InvestorList({...props}) {
  console.log(props);
  return (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={<a href="https://sarkari-naukri-jobs.in/"></a>}
            description="Flipkart, AJIO, Amazon, Tata Motors, Cred, Paytm, PhonePay, JioMoney, Gainsight, Vista"
          />
        </List.Item>
  )
}
