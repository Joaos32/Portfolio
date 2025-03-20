import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const navLinks = [
  { label: "Home", path: "/" },
  { label: "Sobre", path: "/about" },
  { label: "Projetos", path: "/projects" },
  { label: "Contato", path: "/contact" },
];

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#121212", zIndex: 10 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Meu Portfólio
        </Typography>

        {/* Links Desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {navLinks.map(({ label, path }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={path}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1rem",
                  borderBottom:
                    location.pathname === path ? "3px solid #90caf9" : "none",
                  paddingBottom: "2px",
                }}
                aria-label={`Ir para ${label}`}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </Box>

        {/* Ícone do Menu Mobile */}
        <IconButton
          color="inherit"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleOpen}
          aria-label="Abrir menu de navegação"
          aria-controls="menu-mobile"
        >
          <MenuIcon />
        </IconButton>

        {/* Menu Mobile */}
        <Menu
          id="menu-mobile"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {navLinks.map(({ label, path }, index) => (
            <MenuItem
              key={index}
              onClick={handleClose}
              component={Link}
              to={path}
              aria-label={`Ir para ${label}`}
            >
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
