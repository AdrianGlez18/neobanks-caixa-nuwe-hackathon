// Packages
import { Box, Text, HStack, Grid, GridItem, useColorModeValue, VStack } from '@chakra-ui/react'

// Files
import TransactionsBox from "./charts/TransactionsBox"
import PieChartBox from "./charts/PieChartBox";
import MainChartBox from "./charts/MainChartBox";

const Dashboard = () => {
    return (
        <Box bg={useColorModeValue("#fff", "#252626")} h="85vh" w="100vw" overflowX={"hidden"}>
            <div className="row">
                <div className="col-lg-3 col-md-12">
                    <TransactionsBox />
                    <PieChartBox />
                </div>
                <div className="col-lg-9 col-md-12">
                    <MainChartBox />
                </div>
            </div>
        </Box>
    )
}

export default Dashboard;