"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { authService } from "@/services/auth.service";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();

  const handleLogout = () => {
    authService.logout();
    toast({
      title: "Success",
      description: "Logged out successfully",
    });
    router.push("/login");
  };

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/rooms", label: "Rooms" },
    { href: "/scripts", label: "Scripts" },
  ];

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "hover:text-primary transition-colors",
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground",
                pathname.startsWith(item.href) && item.href !== "/"
                  ? "text-primary font-semibold"
                  : ""
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button variant="ghost" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
} 