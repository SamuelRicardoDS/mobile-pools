import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base";

interface Props extends IButtonProps {
    title: string
    type?: 'primary' | 'secondary'
}

export function Button({ title, type = 'primary', ...rest }: Props) {
    return (
        <ButtonNativeBase
        w="full"
        h={14}
        rounded="lg"
        fontSize="md" 
        textTransform="uppercase"
        bg={type === 'secondary' ? 'red.500' : 'yellow.500'}
        _pressed={{
            bg: type === 'secondary' ? 'red.600' : 'yellow.600'
        }}
        _loading={{
            _spinner: { color: 'black' }
        }}
        {...rest}>
            <Text
            fontFamily="heading"
            fontSize="sm"
            color={type === 'secondary' ? 'white' : 'black'}>{title}</Text>
            
        </ButtonNativeBase>
        
    )
}