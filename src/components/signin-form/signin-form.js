import { useState, useContext } from 'react'

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth }
    from '../../utils/firebase/firebase'
import InputForm from '../input-form/input-form'
import { UserContext } from '../../contexts/user-context'

import { SignInContainer, ButtonDiv, SigninButton, GoogleButton } from './signin-form.styles'

const SigninForm = () => {
    const defaultFields = {
        email: '',
        pass: ''
    }
    const [formFields, setFormFields] = useState(defaultFields)
    const { email, pass } = formFields
    const { currentUser } = useContext(UserContext);
    
    const handleChange = (ev) => {
        const { name, value } = ev.target
        setFormFields( {
            ...formFields,
            [name]: value.trim()
        } )
    }

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async(ev) => {
        ev.preventDefault()
        const { email, pass } = formFields
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, pass)
        } catch (error) {
          alert(error.toString())  
        }
        setFormFields(defaultFields)    
    }

    return (
        <>
            <SignInContainer>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password or with your Google account</span>
              
                { currentUser && (
                    <div>
                        currentUser: {JSON.stringify(currentUser['email'])}
                    </div>
                ) } 
                          
                <form onSubmit={handleSubmit}>
                    <InputForm id='email'
                        label='Email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        required 
                    />
                     
                    <InputForm id='pass'
                        label='Password'
                        type='password'  
                        name='pass'
                        value={pass}
                        onChange={handleChange}
                        minLength={6}
                        required
                    />

                    <ButtonDiv>
                        <SigninButton
                            onClick={handleSubmit} disabled={currentUser}
                        >
                            Sign In
                        </SigninButton>
                        <GoogleButton 
                            onClick={logGoogleUser} disabled={currentUser}
                        >
                            Google Sign In
                        </GoogleButton>
                    </ButtonDiv>
                </form>

            </SignInContainer>
        </>
    )
}

export default SigninForm
