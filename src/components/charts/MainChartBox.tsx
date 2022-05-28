// Packages
import styled from "@emotion/styled";
import { Text, HStack, useColorModeValue } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

//Files
import DateButton from "../buttons/DateButton";
import MainChart from "./MainChart";

import { revenue, revenueChange } from "../../data/charts";
const MainChartBox = () => {
    let changeComponent = revenueChange >= 0 ? (
        <Text color="increaseGreen">
            <ArrowUpIcon /> {revenueChange} %
        </Text>
    ) : (
        <Text color="decreaseRed">
            <ArrowDownIcon /> {revenueChange} %
        </Text>
    )

    return (
        <Container>
            <HStack w="100%" justify={"space-between"}>
                <Text fontSize={"2.5rem"} fontFamily="Montserrat" fontWeight={"700"}>Weekly expenses</Text>
                <DateButton />
            </HStack>
            <MainChartContainer>
                <MainChart />
                <Text fontFamily="Montserrat" fontSize="1.5rem" color={useColorModeValue("lightModeGray", "darkModeGray")} mt={4}>Total Revenue</Text>
                <Text fontFamily="Montserrat" fontSize="2.5rem" fontWeight={800}>${revenue}</Text>
                {changeComponent}
            </MainChartContainer>

        </Container>
    )
}

export default MainChartBox;

const Container = styled.div`
border: 1px solid #E5E5E5;
    border-radius: 2rem;
    padding: 2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    width: 95%;
    min-height:93%;
`

const MainChartContainer = styled.div`
    height: 70%;
    width: 90%;
    margin: 1rem;
    align-items: center;

`