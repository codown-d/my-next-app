import Link from "next/link";
import Logo from "../logo";
import { Button } from "antd";
import TzMenuUi from "../menu";
import TopInfo from "../TopInfo";

export default function Header() {
  return (
    
    <header className="fixed z-30 w-full bg-[#262626] shadow-lg shadow-black/[0.03]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {false&&<TopInfo></TopInfo>}
        <div className="relative flex h-14 items-center justify-between gap-3  px-3  backdrop-blur-sm ">
          <div className="flex  items-center">
            <Logo />
            <span className="ml-2 text-l font-bold text-white leading-[28px]">欢迎访问，安徽省综合金融服务平台！</span>
          </div>
          <div className="flex flex-1 justify-center">
            <TzMenuUi />
          </div>
          <ul className="flex items-center justify-end gap-3">
            <li>
              <Button type="primary">
                <Link href="/signin">登录</Link>
              </Button>
            </li>
            <li>
              <Button type="primary">
                <Link href="/signup">注册</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
