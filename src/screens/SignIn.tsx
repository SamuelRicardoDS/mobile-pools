import { Center, Text, Icon} from "native-base";
import Logo from '../assets/logo.svg';
import { Button } from "../components/Button";
import { Fontisto } from "@expo/vector-icons";

export function SignIn () {
    return (
        <Center flex={1} bgColor="gray.900">
           <Logo width={212} height={40}/>
           <Button 
           title="ENTRAR COM GOOGLE"
           leftIcon={<Icon as={Fontisto} name="google" size="md" color="white" />}
           />

           <Text color="white">não utilizamos nenhuma informação além do seu e-mail</Text>
        </Center>
    )
}