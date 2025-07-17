import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[80px] flex items-center justify-between px-8 bg-background shadow-sm">
      <div className="flex items-center">
        <span className="font-inter font-bold text-[48px] text-primary">InvoiceAI</span>
      </div>
      <nav className="flex gap-6 text-lg font-medium">
        <Link href="/" className="hover:text-blue-700 transition">Home</Link>
        <Link href="#features" className="hover:text-blue-700 transition">Features</Link>
        <Link href="#pricing" className="hover:text-blue-700 transition">Pricing</Link>
        <Link href="/auth/signup" className="hover:text-blue-700 transition">Sign Up</Link>
        <Link href="/auth/login" className="hover:text-blue-700 transition">Log In</Link>
      </nav>
    </header>
  );
}
