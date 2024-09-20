"use client";
import { Avatar, Card } from "antd";
import React from "react";
import Meta from "antd/es/card/Meta";
interface InfoCardProps {
  imgUrl: any;
  avatar: any;
  title: any;
  description: any;
}
export default function (props: InfoCardProps) {
  let { imgUrl, avatar, title, description } = props;
  return (
    <Card
      className="w-80"
      hoverable
      cover={<img alt="example" src={imgUrl} />}
      actions={
        [
          // <SettingOutlined key="setting" />,
          // <EditOutlined key="edit" />,
          // <EllipsisOutlined key="ellipsis" />,
        ]
      }
    >
      <Meta
        avatar={<Avatar src={avatar} />}
        title={title}
        description={description}
      />
    </Card>
  );
}
