import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";

// 设置页面的元数据
// export const metadata: Metadata = {
//   title: "My Next.js App",
//   description: "A description of my Next.js app",
// };

// 根布局组件
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
};

export default RootLayout;
