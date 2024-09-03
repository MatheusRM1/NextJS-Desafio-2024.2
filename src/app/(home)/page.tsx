"use client";

import getApi from "@/api/get-secao";
import Card from "@/components/cards";
import Carrossel from "@/components/carrossel";
import HeroSection from "@/components/hero-section";
import { useEffect, useState } from "react";
import getProdutosHome, { getCarrossel } from "../../../actions/home/actions";
import PostsHome from "@/components/posts-home";

type ApiProps = {
  id: number;
  title: string;
  text: string;
};

export default function Home() {
  const [cards, setCards] = useState<ApiProps[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [carrossel, setCarrossel] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { identities } = await getApi();
        setCards(identities);

        const fetchedPosts = await getProdutosHome();
        setPosts( fetchedPosts );

        const fetchedCar = await getCarrossel();
        setCarrossel( fetchedCar );
        
      } catch {
        console.error("Erro!");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-bl from-[#4095C9] to-[#A8DADC] w-full">
      <HeroSection />
      <Carrossel posts={carrossel}/>
      <div className="flex flex-col lg:flex-row">
        {cards.map((card, index) => (
          <Card key={index} id={card.id} title={card.title} text={card.text} />
        ))}
      </div>
      <PostsHome posts={posts}/>
    </div>
  );
}
