// Packages
import { Box } from "@chakra-ui/react";

const Title = ({title}) => {
    return (
        <Box p={2} ml={5} h="5vh">
            {title}
        </Box>
    )
}

export default Title;