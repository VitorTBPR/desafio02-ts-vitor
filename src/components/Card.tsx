import { Box, Button, Center, Input } from "@chakra-ui/react"
import { login } from "../services/login"
import { ButtonInicial } from "./Button/ButtonInicial"
import { Header } from "./Header/Header";


export const Card = () => {
  return(
    <>
    <Header />
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Senha" type="password" />
        </Box>
        <ButtonInicial />
      </Box>
      
    

  
    </>
  );
}