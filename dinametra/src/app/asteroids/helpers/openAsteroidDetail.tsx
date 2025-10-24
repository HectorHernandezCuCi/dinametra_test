import { AsteroidData } from "../types/asteroids";
interface OpenAsteroidDetailProps {
  asteroid: AsteroidData;
  setSelectedAsteroid: React.Dispatch<React.SetStateAction<AsteroidData | null>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const openAsteroidDetail = ({
    asteroid,
    setSelectedAsteroid,
    setIsModalOpen
}: OpenAsteroidDetailProps) => {
    setSelectedAsteroid(asteroid);
    setIsModalOpen(true);
};

export default openAsteroidDetail