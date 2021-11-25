import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import Tasks from './Containers/Tasks'

function App() {
  return (
    <ChakraProvider>
      <Tasks />
    </ChakraProvider>
  );
}

export default App;
