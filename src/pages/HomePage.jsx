import TopBar from "../components/TopBar";
import { getCars } from "../API/cars";
import { Link } from "react-router-dom";

const HomePage = () => {
  const cars = getCars();

  return (
    <div>
      <TopBar />
      <h1>Home Page</h1>
      <ul>
        {cars.map((car) => (
          <Link key={car.id} to={`/cars/${car.id}`}>
            <li style={{ color: "white" }}>
              {car.make}, {car.model}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
