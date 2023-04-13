import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {publicRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.component} />
            );
          })}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
