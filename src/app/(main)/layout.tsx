import { BottomNav } from "@/src/components/BottomNav";
import type { Metadata } from "next";
import "../globals.css";
import Avatar from "@/src/components/Avatar";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "SplitTrip - Smart Expense Splitter",
  description: "Split trip expenses effortlessly with friends",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-(--layout-color) min-h-dvh relative  ">
      {children}
      <BottomNav />
    </div>
  );
}
