import { useRoutes } from "react-router-dom";
import Inputs from "../components/Inputs";
import History from "../components/History";

function MainRoute() {
  //setando as rotas para cada elemento de pagina corespondente que desejo exibir

  return useRoutes([
    { path: "/", element: <Inputs /> },
    { path: "/acuttis-frontend/", element: <Inputs /> },
    { path: "/history/", element: <History /> },
    { path: "/acuttis-frontend/history/", element: <History /> },
  ]);
}

export default MainRoute;
