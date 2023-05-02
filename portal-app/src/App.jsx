import { Content } from "./Content";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Login } from "./Login";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
