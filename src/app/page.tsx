"use client";
import React from 'react';
import Header from "../components/Navbar";
import Profilesection from "../components/Profile";
import Skills from "../components/Skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import { User } from "../context/UserContext";

export default function Home() {
  const name = "nary";
  const age = "23";

  return (
    <User.Provider value={{ name, age }}>
      <main className="relative bg-[#F5F5F7]">
        <Header />
        <Profilesection />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </User.Provider>
  );
}
