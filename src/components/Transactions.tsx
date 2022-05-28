// Packages
import {Text, VStack, useColorModeValue} from "@chakra-ui/react"
import styled from "@emotion/styled";

const Transactions = ({amount, period} : {amount: number, period: string}) => {
    return (
        <Container>
                <VStack align="center">
                    <Text fontSize={"1rem"} >Transactions</Text>
                    <Text fontSize={"2rem"} color={useColorModeValue("primaryLightColor", "primaryDarkColor")} >{amount}</Text>
                    <Text fontSize={"1rem"} >{period}</Text>
                </VStack>
        </Container>
    )
}

export default Transactions;

const Container = styled.div`
border: 1px solid #E5E5E5;
    border-radius: 2rem;
    padding: 1rem;
    margin: 1rem;
    width: 100%;
`