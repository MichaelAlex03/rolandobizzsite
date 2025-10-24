import Image from "next/image";
import LandingPage from "./components/LandingPage";
import Menu from "./components/Menu";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <LandingPage />
      <Menu />
      <About />
    </main>
  );
}
