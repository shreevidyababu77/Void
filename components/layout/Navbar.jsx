import Link from "next/link";

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Goals", href: "/goals/new" },
  { name: "Focus", href: "/focus" },
  { name: "Redeem", href: "/redeem" },
  { name: "Progress", href: "/progress" },
  { name: "History", href: "/history" },
  { name: "Friends", href: "/friends" },
];

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-violet-600">
          VOID
        </h1>

        <div className="flex flex-wrap gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-violet-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}