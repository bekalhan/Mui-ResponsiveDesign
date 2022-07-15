import SideBar from './components/Sidebar';
import Feed from './components/Feed';
import RightBar from './components/Rightbar';
import {Box,Stack}  from '@mui/material'; 
import Navbar from './components/Navbar';


function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar />
          <Feed />
          <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
