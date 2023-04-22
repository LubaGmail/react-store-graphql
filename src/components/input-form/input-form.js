import { FormInputLabel, Input, Group } from './input-form.styles';

//  <InputForm id='displayName' label='Display Name' type='text' ...
//
const InputForm = ({ label, ...otherProps }) => {
    // const {id, type, name, value, onChange} = otherProps

    return (
        <Group>
            <Input {...otherProps} />
            
            {/* 
                apply shrink class on focus or input 
                 ${ ({ shrink }) => shrink && shrinkLabelStyles };
            */}
            { label && (
                
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            ) } 
        </Group>
    )
}

export default InputForm