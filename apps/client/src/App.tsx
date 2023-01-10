import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router/AppRouter";
import { Footer, Header } from "@rrdx-mono/ui";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
