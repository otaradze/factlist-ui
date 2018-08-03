import React from 'react'
import { Flex, Box } from 'grid-styled'
import { reduxForm, Field } from 'redux-form'
import { EVIDENCE_FORM } from 'modules/evidence/constants'
import MultimediaInputForm from 'containers/Forms/MultimediaInputForm'
import { required, minLength } from 'core/validationRules'
import Button from 'components/Button'
import Label from './Label'
import Conclusions from './Conclusions'

const minLength30 = minLength(30)

const Form = ({
  handleSubmit,
  submitting,
  onMultimediaInputFocus,
}) => (
  <form onSubmit={handleSubmit}>
    <Flex flexDirection="column">
      <Box>
        <Label>Claim is:</Label>
        <Field name="conclusion" component={Conclusions} validate={[ required ]} />
      </Box>

      <Box mt={30} >
        <Label>Because:</Label>
        <Field
          id="evidence"
          name="text"
          placeholder="Start explaning your evidence here."
          component={MultimediaInputForm}
          validate={[ required, minLength30 ]}
          onFocus={onMultimediaInputFocus} />
      </Box>

      <Box alignSelf="flex-end" mt={25} mb='5px'>
        <Button disabled={submitting}>
          {submitting ? 'Adding...' : 'Add Evidence'}
        </Button>
      </Box>
    </Flex>
  </form>
)

export default reduxForm({
  form: EVIDENCE_FORM,
  destroyOnUnmount: false,
})(Form)
