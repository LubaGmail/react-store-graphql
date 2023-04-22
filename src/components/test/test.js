import Button from './button'
import { BUTTON_TYPES } from './button'

import { TestContainer, ButtonContainer } from "./test.styles";

const Test = () => {

    const handleSubmit = event => {
        event.preventDefault()
        console.log('handleSubmit')        
    }

    const doSomething = () => {
        console.log('doSomething')        
    }

    return (
        <TestContainer>
            <h2>Test</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='first'>First Name: </label>
                    <input id='first'
                        name='first'
                        type='text'
                        required
                        
                    />
                </div>
                <div>
                    <label htmlFor='last'>Last Name: </label>
                    <input id='last'
                        name='last'
                        type='text'
                        required
                        onClick={doSomething}
                    />
                </div>
                <ButtonContainer>
                    <Button buttonType={BUTTON_TYPES.product}
                        type='submit'
                    >
                        Button  
                    </Button>
                </ButtonContainer>

            </form>
        </TestContainer>
    )
}

export default Test
