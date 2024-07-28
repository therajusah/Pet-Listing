import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PetDetails from "./components/PetDetails";
import SearchResults from "./components/SearchResults";
import ErrorBoundary from "./components/ErrorBoundary";
import PetProvider from "./utils/Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <PetProvider>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<PetDetails />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </ErrorBoundary>
      </PetProvider>
    </Router>
  );
}

export default App;
