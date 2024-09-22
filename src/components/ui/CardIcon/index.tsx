"use client";
import { Avatar, Card, Image } from "antd";
import React from "react";
import Meta from "antd/es/card/Meta";
import { generateRandomColor, getColorScale } from "@/lib";
interface InfoCardProps {
  imgUrl: any;
  avatar: any;
  title: any;
  description: any;
}
export default function (props: InfoCardProps) {
  let { imgUrl, avatar, title, description } = props;
  const randomNumber = Math.floor(Math.random() * 10);
  let bg = getColorScale(randomNumber);
  return (
    <Card
      className={"!w-80 !bg-imgbg !text-white !bg-no-repeat"}
      style={{ backgroundColor: bg }}
    >
       <Image
        preview={false}
        className="rounded-lg inline"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div >
        <div className="text-base">Starting At</div>
        <div className="text-4xl font-bold">$2.99</div>
        <div className="text-xl font-bold">Probiotics & Digestion</div>
        <div>It is an advanced formula of probiotics.</div>
      </div>

     
    </Card>
  );
}
