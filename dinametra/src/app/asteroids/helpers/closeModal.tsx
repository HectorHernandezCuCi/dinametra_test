import { AsteroidData } from "../types/asteroids";

interface CloseModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedAsteroid: React.Dispatch<React.SetStateAction<AsteroidData | null>>;
}

const closeModal = ({ setIsModalOpen, setSelectedAsteroid }: CloseModalProps) => {
  setIsModalOpen(false);
  setSelectedAsteroid(null);
};

export default closeModal;
