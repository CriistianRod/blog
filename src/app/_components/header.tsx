import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold sticky top-0 bg-slate-900 tracking-tight md:tracking-tighter leading-tight mb-6 mt-4 py-4 flex items-center">
      <Link href="/" className="hover:underline">
        Cristian Rodríguez
      </Link>
    </h2>
  );
};

export default Header;
