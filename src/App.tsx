import { Route, Routes } from "react-router-dom";
import { CapturePage } from "./page/capturePage";

function App() {
  return (
    <Routes>

      <Route
        element={
          <CapturePage />
        }
        path="/"
       
      />
      


    </Routes>
  );
}

export default App;
