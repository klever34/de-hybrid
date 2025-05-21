import { Metadata } from "next";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "De-Hybrid",
  description: "Buy audios and books online",
};

const Home = (): JSX.Element => {
  return <HomePage />;
};

export default Home;
