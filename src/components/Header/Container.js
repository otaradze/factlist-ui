import styled from 'styled-components'
import { Flex } from 'grid-styled'

const Container = styled(Flex)`
  background-color: #FFF;
  padding: 30px 0;
  margin-bottom: 50px;

  @media (max-width: 730px) {
    padding: 20px 0;
    background-color: #F1F3F5;
    margin: 0;
  }
`

export default Container
