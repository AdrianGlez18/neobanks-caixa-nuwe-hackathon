// @ts-nocheck

// Packages
import { Box, Flex, Heading, useColorModeValue, HStack } from '@chakra-ui/react';
import styled from '@emotion/styled';

// Files
import Logo from '../Logo';
import ThemeButton from '../buttons/ThemeButton';
import SettingsButton from '../buttons/SettingsButton';

const Header = () => {
    return (
        <Navbar>
            <Box
                position='fixed'
                as="nav"
                w="100%"
                css={{ backdropFilter: 'blur(10px)' }}
                bg={useColorModeValue("#fff", "#252626")}
                zIndex={1}
            >
                <HStack display="flex"
                    p={2}
                    wrap="wrap"
                
                    justify="space-between">

                    <Flex mr={5}>
                        <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                            <Logo />
                        </Heading>
                    </Flex>

                    <Box flex={3} align="right" p={3}>
                        <ThemeButton/>
                        <SettingsButton/>
                    </Box>
                </HStack>
            </Box>
        </Navbar>
    )
}

export default Header;

const Navbar = styled.header`
    width: 100vw;
    height: 10vh;
`