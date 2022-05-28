// Packages
import { useColorModeValue } from "@chakra-ui/react";

const Logo = () => {
    const Image = useColorModeValue("../assets/images/logo.png", "../assets/images/logo-dark.png")
    return (
        <img src={Image} alt="NeoBank logo" height={100} width={250}/>
    )
}

export default Logo;