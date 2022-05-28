// Packages
import { Box, VStack, HStack, Text } from "@chakra-ui/react"
import styled from "@emotion/styled"

// Files
import DashboardPieChart from "./PieChart"
import ChartButton from "../buttons/ChartButton"
import { pieChartData } from "../../data/charts";

// Configured in lib/theme.tsx
const COLORS = [
    "#6FFFE9",
    "#5BC0BE",
    "#3A506B",
    "#1C2541",
    "#0B132B"
]

const Legend = () => {
    return (
        <VStack>
            <HStack justify="space-between" p={2} m={1}>
                {
                    pieChartData.map((entry, index) => (
                        <HStack m={5}>
                            <Box h="20px" w="20px" borderRadius={"50%"} bg={COLORS[index % COLORS.length]} />
                            <Box>{pieChartData[index].name}</Box>
                        </HStack>

                    ))
                }
            </HStack>
        </VStack>
    )
}

const PieChartBox = () => {
    return (
        <Container>
            <VStack>
                <HStack w="100%" justify={"space-between"} mx={5} my={2}>
                    <Text fontSize={"2.5rem"} fontFamily="Montserrat" fontWeight={"700"} mx={5} my={2} >Conversion</Text>
                    <ChartButton />
                </HStack>
                <DashboardPieChart />
                <Legend />
            </VStack>
        </Container>
    )
}

export default PieChartBox;

const Container = styled.div`
    border: 1px solid #E5E5E5;
    border-radius: 2rem;
    padding: 1rem;
    margin-top: 1rem;
    margin-left: 3rem;
    width: 90%;
    min-height: 59vh;
`