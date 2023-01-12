import EventRegistrationForm from "./EventRegistrationForm/EventRegistrationForm";
import SearchFilter from "./SearchFilter/SearchFilter";
import ShoppingListApp from "./ShoppingListApp";
import TodoApp from "./TodoApp";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import CarPage from "./pages/CarPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/shopping" element={<ShoppingListApp />}></Route>
        <Route path="/todo" element={<TodoApp />}></Route>
        <Route path="/form" element={<EventRegistrationForm />}></Route>
        <Route path="/filter" element={<SearchFilter />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
        <Route path="/cars/:id" element={<CarPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
