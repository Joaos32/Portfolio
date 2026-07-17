import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { Suspense, lazy } from "react";
import { ThemeProviderComponent } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const Loader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "60vh",
    }}
  >
    <CircularProgress color="primary" aria-label="Carregando conteúdo" />
  </Box>
);

const StaticRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

const App = () => {
  return (
    <ThemeProviderComponent>
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "background.default",
          }}
        >
          <Navbar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: "100%",
              pt: { xs: 7, md: 8 },
            }}
          >
            <StaticRoutes />
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProviderComponent>
  );
};

export default App;
