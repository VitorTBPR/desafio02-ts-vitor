import { Button, Center } from "@chakra-ui/react";
import { login } from "../../services/login";
import { boasVindas } from "../../services/boasVindas";

export const ButtonInicial = () => {
  return (
    <Center>
    <Button
      onClick={boasVindas}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px">
      Entrar
    </Button>
  </Center>
  );
};
