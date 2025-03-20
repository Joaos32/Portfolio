import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Sobre', path: '/about' },
  { label: 'Projetos', path: '/projects' },
  { label: 'Contato', path: '/contact' }
];

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    console.log('Navbar foi carregada!');
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#121212', zIndex: 10 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Meu Portfólio
        </Typography>

        {/* Links Desktop */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map(({ label, path }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              style={{
                margin: '0 15px',
                borderBottom: location.pathname === path ? '3px solid #90caf9' : 'none'
              }}
            >
              <Link to={path} style={{ textDecoration: 'none', color: 'white', fontSize: '1rem' }}>
                {label}
              </Link>
            </motion.div>
          ))}
        </Box>

        {/* Ícone do Menu Mobile */}
        <IconButton 
          color="inherit" 
          sx={{ display: { xs: 'block', md: 'none' } }} 
          onClick={handleOpen}
          aria-label="Abrir menu de navegação"
        >
          <MenuIcon />
        </IconButton>

        {/* Menu Mobile */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          {navLinks.map(({ label, path }, index) => (
            <MenuItem key={index} onClick={handleClose} component={Link} to={path}>
              {label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
