import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "../pages/Todo";
import App from "../App";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
