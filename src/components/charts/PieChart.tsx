// Packages
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { Box, VStack } from "@chakra-ui/react";

// Files
import { pieChartData } from "../../data/charts";

// Configured in lib/theme.tsx
const COLORS = [
    "#6FFFE9",
    "#5BC0BE",
    "#3A506B",
    "#1C2541",
    "#0B132B"
]

const DashboardPieChart = () => {
    return (
        <Box maxW="800px">
            <VStack align={"center"}>
                <PieChart width={360} height={360}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        data={pieChartData}
                        outerRadius={180}
                        fill="orangered"
                    >
                        {pieChartData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                    
                </PieChart>
            </VStack>
        </Box>
    )
}

export default DashboardPieChart;