import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box, Container, CircularProgress } from "@mui/material";
import { Suspense, lazy } from "react";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const Loader = () => (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
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
  console.log("O componente App foi renderizado!");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
          <Container
            component="main"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: { xs: 2, md: 3 },
              width: "100%",
              maxWidth: { xs: "100%", md: "lg" },
            }}
          >
            <StaticRoutes />
          </Container>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
