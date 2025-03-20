import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976D2' }, // Azul principal
    secondary: { main: '#F48FB1' }, // Rosa secundário
    background: { default: '#f4f4f4' }, // Cor de fundo
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 700 },
    h2: { fontSize: '2rem', fontWeight: 600 },
    h3: { fontSize: '1.5rem', fontWeight: 500 },
  },
  spacing: 8, // Define espaçamentos em múltiplos de 8px
  shape: { borderRadius: 8 }, // Borda arredondada padrão
});

export default theme;
