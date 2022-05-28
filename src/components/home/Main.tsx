// Packages
import styled from '@emotion/styled'

//Files
import Dashboard from '../Dashboard';
import Title from "../Title"

const Main = () => {
    return (
        <MainContainer>
            <Title title="Dashboard"/>
            <Dashboard/>
        </MainContainer>
    )
}

export default Main;

const MainContainer = styled.main`
    height: 85vh;
    width: 95vw;
`