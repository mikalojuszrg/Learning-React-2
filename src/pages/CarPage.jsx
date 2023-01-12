import { useParams } from "react-router-dom";
import { getCar } from "../API/cars";
import TopBar from "../components/TopBar";

const CarPage = () => {
  const { id } = useParams();
  const car = getCar(Number(id));
  return (
    <div>
      <TopBar />
      {car.make} {car.model} color: {car.color}
    </div>
  );
};

export default CarPage;
