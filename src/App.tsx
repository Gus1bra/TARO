import { Route, Routes } from "react-router-dom";
import ParentLayout from "./pages/ParentLayout/ParentLayout";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { CardsListPage } from "./pages/CardsListPage/CardsListPage";
import { OracleAdvicePage } from "./pages/OracleAdvicePage/OracleAdvicePage";
import { path } from "./api/data/consts";

function App() {
  return (
    <Routes>
      <Route
        path={path.startPage}
        element={<ParentLayout child={<AboutPage />} />}
      />
      <Route
        path={path.cardListPage}
        element={<ParentLayout child={<CardsListPage />} />}
      />
      <Route
        path={path.oracleAdvicePage}
        element={<ParentLayout child={<OracleAdvicePage />} />}
      />
    </Routes>
  );
}

export default App;
