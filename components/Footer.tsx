export default function Footer() {
  return (
    <footer className="w-full h-[100px] flex flex-col items-center justify-center bg-muted text-muted-foreground">
      <div className="flex gap-6 mb-2">
        <a href="#help" className="hover:text-blue-700">Help</a>
        <a href="#blog" className="hover:text-blue-700">Blog</a>
        <a href="#contact" className="hover:text-blue-700">Contact</a>
      </div>
      <div className="text-sm">&copy; {new Date().getFullYear()} InvoiceAI. All rights reserved.</div>
    </footer>
  );
}
