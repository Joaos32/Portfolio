import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { DarkMode, LightMode, Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useThemeMode } from "../context/themeMode";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Sobre", path: "/about" },
  { label: "Projetos", path: "/projects" },
];

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const { darkMode, toggleTheme } = useThemeMode();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "rgba(11, 15, 23, 0.82)",
        color: "white",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 } }}>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            color="inherit"
            sx={{ flexGrow: 1, fontWeight: 700, textDecoration: "none", letterSpacing: -0.5 }}
          >
            João Vitor<span style={{ color: "#35D6ED" }}>.</span>
          </Typography>

          <Box component="nav" aria-label="Navegação principal" sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
            {navLinks.map(({ label, path }) => (
              <Button
                key={path}
                component={Link}
                to={path}
                color="inherit"
                aria-current={location.pathname === path ? "page" : undefined}
                sx={{ color: location.pathname === path ? "secondary.main" : "inherit" }}
              >
                {label}
              </Button>
            ))}
            <Button component={Link} to="/contact" variant="contained" sx={{ ml: 1 }}>
              Contato
            </Button>
          </Box>

          <Tooltip title={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}>
            <IconButton color="inherit" onClick={toggleTheme} aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"} sx={{ ml: 1 }}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Tooltip>

          <IconButton
            color="inherit"
            sx={{ display: { xs: "inline-flex", md: "none" } }}
            onClick={(event) => setAnchorEl(event.currentTarget)}
            aria-label="Abrir menu de navegação"
            aria-controls="menu-mobile"
            aria-expanded={Boolean(anchorEl)}
          >
            <MenuIcon />
          </IconButton>
          <Menu id="menu-mobile" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
            {[...navLinks, { label: "Contato", path: "/contact" }].map(({ label, path }) => (
              <MenuItem key={path} component={Link} to={path} selected={location.pathname === path} onClick={() => setAnchorEl(null)}>
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
