import React from 'react'
import styled from 'styled-components'

const Check = props => (
  <svg viewBox="0 0 12 10" width="1em" height="1em" {...props}>
    <path
      d="M12 1.796a.717.717 0 0 1-.217.527L6.178 7.928 5.125 8.98a.717.717 0 0 1-.526.216.717.717 0 0 1-.527-.216L3.02 7.928.217 5.125A.717.717 0 0 1 0 4.6c0-.207.072-.382.217-.527L1.27 3.02a.717.717 0 0 1 .526-.216c.207 0 .382.072.527.216l2.276 2.284L9.677.217A.717.717 0 0 1 10.204 0c.206 0 .382.072.526.217l1.053 1.053c.145.144.217.32.217.526z"
      fill="#000"
      fillRule="nonzero"
    />
  </svg>
)

const StyledCheck = styled(Check)`
  // Centering
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default StyledCheck
