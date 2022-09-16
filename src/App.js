import { useState } from 'react';
import './App.css';
import create from './requests';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function App() {

const [name, setName] = useState("");
const [symbol, setSymbol] = useState("");

const handleClick = ()=>{
  create(name, symbol)
}

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Create contract with clicks</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Contract Name</FormLabel>
              <Input type="text" onChange={(e)=>setName(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Contract Symbol</FormLabel>
              <Input type="text" onChange={(e)=>setSymbol(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={handleClick}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Create Contract
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default App;
