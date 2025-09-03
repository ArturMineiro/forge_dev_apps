import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-primary">ForgeDevApps</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#services" className="hover:text-primary">
              Serviços
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-primary">
              Sobre
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
