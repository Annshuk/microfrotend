import { Input, Label, FormGroup, Col, FormFeedback } from 'reactstrap'


/**
 * InputLabelField
 * input label field
 * 
 */
export const InputLabelField = ({ label, name, id, errors, ...rest }) => <FormGroup row>
    <Label
        for={ id }
        sm={ 2 }
    >
        { label }
    </Label>
    <Col sm={ 10 }>
        <Input
            id={ id }
            name={ name }
            type="text"
            { ...rest }

        />

        { errors && <FormFeedback>
            You will not be able to see this
        </FormFeedback> }
    </Col>
</FormGroup>


