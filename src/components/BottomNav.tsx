"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, User } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const navItems = [
  { path: "/dashboard", icon: Home, label: "Home" },
  { path: "/trips", icon: Map, label: "Trips" },
  { path: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    // <div
    //   className="
    //   fixed bottom-8 left-12 right-12 z-50
    //   rounded-full
    //   bg-white/10
    //   backdrop-blur-xl
    //   border border-white/20
    //   shadow-lg shadow-black/10
    //   supports-backdrop-filter:bg-white/10
    // "
    // >
    <div className="bg-(--primary-black) rounded-full fixed bottom-8 left-12 right-12 z-50">
      <div className="container max-w-lg mx-auto">
        <div className="flex items-center justify-between p-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative  flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-fast",
                  isActive
                    ? "text-(--primary-black) p-4"
                    : "text-(--layout-color) hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="bottom-nav-bg"
                    className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--layout-color) shadow-md shadow-(--primary-black)/20"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
                <div className="relative z-10">
                  <Icon className="w-6 h-6" />

                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    />
                  )}
                </div>

                {/* <span className="text-xs font-medium">{item.label}</span> */}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
