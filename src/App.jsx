import './App.css';
import { Header, Footer } from "./components/MainComponents";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from "./routes/routes"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {
          routes.map((itemRouter) => (
            <Route
              key={itemRouter.path}
              path={itemRouter.path}
              element={itemRouter.element}
            />
          ))
        }
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
