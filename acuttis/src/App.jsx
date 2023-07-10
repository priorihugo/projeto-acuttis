import { useEffect } from "react";
import History from "./components/History";
import Inputs from "./components/Inputs";
import Navbar from "./components/Navbar";
import ParallaxImage from "./components/ParallaxImage";
import MainRoute from "./routes/MainRoute";
import axios from "axios";

function App() {
  const fetch = async () => {
    //http://localhost:8888/
    //"http://acuttis-backend.vercel.app

    const res = await axios.get("http://acuttis-backend.vercel.app");
    console.log("res test ", res);
    return res;
  };

  useEffect(() => {
    // const res = fetch();
  });

  return (
    <>
      <Navbar />
      <ParallaxImage />
      <MainRoute />
    </>
  );
}

export default App;
