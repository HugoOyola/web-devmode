import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Noticias from "@/components/Noticias";
import Seciones from "@/components/Seciones";

export default function Home() {
  return (
    <div className="w-[1440px] relative bg-white">
      <div className="left-0 top-0 absolute flex-col justify-start items-start inline-flex">
        <Header />
        <Hero />
        <Seciones />
        <Noticias />
      </div>
    </div>
  );
}
