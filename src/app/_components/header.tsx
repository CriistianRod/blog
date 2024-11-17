import Link from "next/link";

const Header = () => {
  return (
    <header className="flex  sticky top-0 tracking-tight md:tracking-tighter bg-slate-900 leading-tight mb-6 mt-4 py-4 flex items-center dark:text-white">
        <h2 className="text-2xl md:text-4xl font-bold sticky top-0 tracking-tight md:tracking-tighter leading-tight">
          <Link href="/" className="hover">
            CR
          </Link>
        </h2>
    </header>
  );
};

export default Header;
