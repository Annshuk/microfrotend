import { forwardRef } from 'react'
import { Input, Label, FormGroup, Col, FormFeedback } from 'reactstrap'


/**
 * InputLabelReadonlyField
 * input label field
 * 
 */
export const InputLabelReadonlyField = forwardRef(({ name, label, id, errors, ...rest }, ref) => {
    return (<FormGroup row>
        <Label for={ id }>{ label }</Label>
        <Col>
            <Input
                type="text"
                name={ name }
                innerRef={ ref }
				readOnly
                id={ id }
                { ...rest }
            />
            { errors && <FormFeedback>
                You will not be able to see this
            </FormFeedback>
            }
        </Col>
    </FormGroup>
    )
})

