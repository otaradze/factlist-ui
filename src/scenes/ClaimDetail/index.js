import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'grid-styled'
import Header from 'scenes/Header'
import { Container, Left, Right, Center } from 'components/Layout'
import { fetchClaimByIdRequest } from 'modules/claim/actions'
import Claim from 'containers/Claim'
import Evidence from 'containers/Evidence'
import EvidenceForm from 'containers/Forms/Evidence'
import { ClaimLoader } from 'components/ContentLoaders'

class ClaimDetail extends Component {
  claimId = parseInt(this.props.match.params.id, 10)

  componentDidMount() {
    const { fetchClaimByIdRequest } = this.props

    fetchClaimByIdRequest(this.claimId)

    window.scrollTo(0, 0)
  }

  render() {
    const { requesting, claim } = this.props

    return (
      <Fragment>
        <Header />

        <Container>
          <Left></Left>
          <Center>
            <Flex flexDirection="column" mb={200}>
              <Box>
                {requesting && <ClaimLoader />}
              </Box>

              <Box>
                {!requesting && claim && <Claim claim={claim} />}
              </Box>
              <Box>
                {!requesting && claim && claim.evidences.map(evidence => <Evidence
                  key={evidence.id}
                  evidence={evidence} />)}
              </Box>
              <Box mt={40}>
                <EvidenceForm claimId={this.claimId} />
              </Box>
            </Flex>
          </Center>
          <Right></Right>
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  requesting: state.claim.detail.requesting,
  claim: state.claim.detail.data,
})

const mapDispatchToProps = dispatch => ({
  fetchClaimByIdRequest: (id) => dispatch(fetchClaimByIdRequest(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClaimDetail)
