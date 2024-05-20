import Image from "next/image";
import Navbar from "./components/navbar";
import Introduction from "./components/introduction";
import Aboutme from "./components/aboutme";
import Services from "./components/services";
import Qualification from "./components/qualification";
import Footer from "./components/footer";
import Chat from "./components/chat";

export default function Home() {
  return (
    <div className="flex w-100 bg-[white]  h-100 flex-col gap-4">
      <Navbar />
      <Introduction />
      <Aboutme />
      <Services />
      <Qualification />
      <Chat />
      <Footer />
    </div>
  );
}
