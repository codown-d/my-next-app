import Link from "next/link";
import Logo from "../logo";

export default function Header() {
  let nav = [
    { title: '金融服务' },
    { title: '保函服务' },
    { title: '机构服务' },
    { title: '政策服务' },
    { title: '投资服务' },

  ]
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm ">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          <div className="flex">
             {nav.map((item,index) => {
            return <div key={index}>{item.title}</div>
          })}
          </div>
         
          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/signin"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm bg-gray-800 text-gray-200 shadow hover:bg-gray-900"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
