import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import { Box, flexbox } from '@chakra-ui/react';

function App() {
  const [isLoading, SetIsLoading] = useState(false)
  const gradient = 'linear-gradient(to top, #ff8a00, #da1b60)';
  if (!isLoading) {
    setTimeout(() => {
      SetIsLoading(true)
    }, 2000);
    return (
      <>
        <Box w="100%"
          h="100vh"
          style={{
            backgroundImage: gradient,
            color: 'white',
            textAlign: 'center',
            fontSize: 'xl',
            padding: '10px'
          }}
          p={10}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}

        >
          <div class="loading-wave">
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
            <div class="loading-bar"></div>
          </div>
        </Box>

      </>
    )
  }
  return (
    <Box
      className="App"
      w="100%"
      h="100vh"
      style={{
        backgroundImage: gradient,
        color: 'white',
        textAlign: 'center',
        fontSize: 'xl',
        padding: '10px'
      }}
      p={10}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}

      >
      <Quiz />
    </Box>
  );
}

export default App;
