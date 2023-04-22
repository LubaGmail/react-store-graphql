import {
    BaseButton,
    GoogleButton,
    ProductButton
} from "./button.styles";

export const BUTTON_TYPES = {
    base: 'baseType',
    google: 'googleType',
    product: 'productType'
}

const getButton = (buttonType = BUTTON_TYPES.base) => {
    return (
        {
            [BUTTON_TYPES.base]: BaseButton,
            [BUTTON_TYPES.google]: GoogleButton,
            [BUTTON_TYPES.product]: ProductButton,
        }[buttonType]     // 'googleType'  
    )
}

//   <Button buttonType='googleType'
const Button = ({ children, buttonType }) => {
    const CustomButton = getButton(buttonType)
    
    return (
        <CustomButton>
            {children}
        </CustomButton>
    )
}

export default Button