"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoaderWrapper from "@/components/LoaderWrapper";
import ThemeProvider from "@/components/ThemeProvider";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LoaderWrapper>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </LoaderWrapper>
    </ThemeProvider>
  );
}
