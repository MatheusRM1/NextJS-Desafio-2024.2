'use client'

import getApi from "@/api/get-secao";
import Card from "@/components/cards";

import Carrosel from "@/components/carrossel-card";
import Carrossel from "@/components/carrossel";
import HeroSection from "@/components/hero-section";
import Produtos from "@/components/posts-card";
import { useEffect, useState } from "react";

type ApiProps = {
  id: number,
  title: string,
  text: string
};

export default function Home() {
  const [cards, setCards] = useState<ApiProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { identities } = await getApi();
        //console.log(identities);
        setCards(identities);
      } catch {
        console.error("Erro!");
      }
    };
    fetchData();
  });

  return (
    <div className="bg-gradient-to-bl from-[#4095C9] to-[#A8DADC] w-full">
      <HeroSection />
        <Carrossel />
      <div className="flex flex-col lg:flex-row">
        {(cards.map((card, index) => (
          <Card key={index} id={card.id} title={card.title} text={card.text} />
        )))}
      </div>

      <div className="flex flex-col lg:flex-row">
        <Produtos
          imageAlt="Produto"
          imageSrc="/produtos/Geek.png"
          title="Geek Binario"
          price="50,00"
        />
        <Produtos
          imageAlt="Produto"
          imageSrc="/produtos/Geek.png"
          title="Geek Binario"
          price="50,00"
        />
         <Produtos
          imageAlt="Produto"
          imageSrc="/produtos/Geek.png"
          title="Geek Binario"
          price="50,00"
        />
      </div>
    </div>
  );
}
