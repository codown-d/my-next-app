"use client";
import { Button, Select } from "antd";
import React from "react";
import styles from "./index.module.css";
export default function() {
  let handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  let opt = [
    { value: "city", label: "地市平台入口" },
  ];
  return (
    <div className="flex justify-between items-center z-30 w-full bg-[#262626] shadow-lg shadow-black/[0.03]">
      <div>
        <Select
        bordered={false}
          defaultValue="city"
          onChange={handleChange}
          className={styles['top-info-select']}
          options={opt}
        />
        <span className="text-white">欢迎访问，安徽省综合金融服务平台！</span>
      </div>
      <div>
        <Button type="primary">发布需求</Button>
        <Button type={'text'} className="!text-white"> 登录</Button>
        <Button type={'text'} className="!text-white"> 免费注册</Button>
      </div>
    </div>
  );
}
