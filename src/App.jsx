import { Header, Hero, Footer, Features } from "./components/index";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
