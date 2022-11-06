import { Center, Spinner } from "native-base";

type Props = {
    title: String
}
export function Loading() {
    return (
        <Center flex={1} bg="gray.900">
            <Spinner color="yellow.500" />
        </Center>
    )
}