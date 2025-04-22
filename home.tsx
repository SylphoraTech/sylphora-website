import React from "react";
import CardList from "@/components/cards/CardList";
import { LampDemo } from "@/components/ui/lampe/LampDemo";

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <LampDemo />
      <CardList />
    </div>
  );
};

export default Home;
