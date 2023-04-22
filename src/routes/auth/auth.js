import SigninForm from '../../components/signin-form/signin-form';
import SignupForm from '../../components/signup-form/signup-form';

import { AuthContainer } from './auth.styles'

/**
    <Route path='auth' element={<Auth />} />
*/
const Auth = () => {
   
    return (
        <AuthContainer>
            <SigninForm />
            <SignupForm />
        </ AuthContainer>
    )
}

export default Auth
