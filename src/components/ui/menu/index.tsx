"use client";
import { ConfigProvider, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TzMenuUi() {
  const currentPath = usePathname();
  console.log(currentPath);
  let items = [
    {
      label: "金融服务",
      key: "/financial-services",
    },
    {
      label: "保函服务",
      key: "/guarantee-services",
    },
    {
      label: "机构服务",
      key: "/institutional-aervices",
    },
    {
      label: "政策服务",
      key: "/policy-services",
    },
    {
      label: "投资服务",
      key: "/investment-services",
    },
  ].map((item) => {
    let { key, label } = item;
    return {
      label: <Link href={`${key}`}>{label}</Link>,
      key: key,
    };
  });
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHoverColor: "#82b440",
            itemColor: "#fff",
            itemBg: "transparent",
          },
        },
      }}
    >
      <Menu
        selectedKeys={[currentPath]}
        mode="horizontal"
        items={items}
        onChange={() => {}}
      />
    </ConfigProvider>
  );
}
