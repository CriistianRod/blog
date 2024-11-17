import Link from "next/link";

const Header = () => {
  return (
    <header className="flex sticky top-0 tracking-tight md:tracking-tighter bg-slate-900 leading-tight mb-6 mt-4 py-4 flex items-center dark:text-white">
      <Link href="/" className="hover flex flex-row">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
          CR
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight text-sky-400 ml-1">
          ○
        </h2>
      </Link>
    </header>
  );
};

export default Header;
