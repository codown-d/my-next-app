import Link from "next/link";
import Logo from "../logo";
import { Button } from "antd";
import TzMenuUi from "../menu";

export default function Header() {
  return (
    <header className="fixed z-30 w-full bg-[#262626] shadow-lg shadow-black/[0.03]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3  px-3  backdrop-blur-sm ">
          <div className="flex  items-center">
            <Logo />
          </div>
          <div className="flex flex-1 justify-center">
            <TzMenuUi />
          </div>
          <ul className="flex items-center justify-end gap-3">
            <li>
              <Button type="primary">
                <Link href="/signin">Login</Link>
              </Button>
            </li>
            <li>
              <Button type="primary">
                <Link href="/signup">Register</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
