import { CircularProgress, Box } from '@mui/material';

function Loader() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <CircularProgress color="primary" size={80} />
    </Box>
  );
}

export default Loader;
