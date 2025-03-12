// src/components/Navbar.jsx
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Meu Portfólio
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>Sobre</Link>
          <Link to="/projects" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>Projetos</Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}>Contato</Link>
        </Box>
        <IconButton color="inherit" sx={{ display: { xs: 'block', md: 'none' } }} onClick={handleOpen}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/about">Sobre</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/projects">Projetos</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/contact">Contato</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
