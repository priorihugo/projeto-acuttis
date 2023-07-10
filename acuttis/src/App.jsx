import History from "./components/History";
import Inputs from "./components/Inputs";
import Navbar from "./components/Navbar";
import ParallaxImage from "./components/ParallaxImage";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <>
      <Navbar />
      <ParallaxImage />
      <MainRoute />
    </>
  );
}

export default App;
