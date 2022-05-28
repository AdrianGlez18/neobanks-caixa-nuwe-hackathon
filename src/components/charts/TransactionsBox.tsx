// Packages
import styled from "@emotion/styled"
import { HStack } from "@chakra-ui/react"

// Files
import Transactions from "../Transactions"
import { transactions } from "../../data/charts"

const TransactionsBox = () => {
    return (
        <Container>
                <HStack>
                    <Transactions amount={transactions["today"].amount} period={transactions["today"].period} />
                    <Transactions amount={transactions["last"].amount} period={transactions["last"].period} />
                </HStack>
        </Container>
    )
}

export default TransactionsBox;

const Container = styled.div`
    padding: 1rem;
    margin: 1rem;
    width: 100%;
`