"use client";

import Footer from "../components/footer";
import Header from "../components/header";
import SideNavBar from "../components/sideNavBar";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Header fixo no topo */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar fixa à esquerda */}
        <aside className="w-64 fixed top-0 left-0 h-screen">
          <SideNavBar />
        </aside>

        {/* Conteúdo principal com espaço reservado */}
        <main className="flex-1 ml-64 p-6 overflow-y-auto">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
