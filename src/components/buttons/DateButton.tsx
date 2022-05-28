// Packages
import { CalendarIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'

const DateButton = () => {
  return (
        <Container>
            Oct - Nov 2019 <IconWrap><CalendarIcon/></IconWrap>
        </Container>
  )
}

export default DateButton

const Container = styled.div`
    padding: 0.25rem;
    margin: 1rem;
    border: 1px solid #E5E5E5;
    border-radius: 10px;
    width: 12%;
`
const IconWrap = styled.span`
margin: 0.5rem;
cursor: pointer;
&:hover {
    color: blue;
    transition-duration: 0.5s;
}
`