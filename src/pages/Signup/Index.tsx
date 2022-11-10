import logoTwitter from '../../../src/assets/twitterLight.svg';
import { Button } from '../../components/Button/Button';
import { Title } from '../../components/Title/Title';

export function signUp(){
  return(
    <>
      <div style={{
        backgroundImage: `url${'../../../src/assets/back-twitter.png'}`,
        backgroundRepeat: 'no-repeat'
      }}>
        
      </div>
      <div>
        <Button color='transparent'>Sign up with Google</Button>
        <Button color='transparent'>Sign Up with Apple</Button>
        <Button color='transparent'>Sign up with phone or email</Button>
      </div>
      <div>
        <p>By singing up you agree to the <a href="404.html">Terms of Service</a> and <a href="">Privacy Policy</a>, including <a href="404.html">Cookie Use</a>.</p>
      </div>
      <p>Already have an account? <a href="404.html">Log in</a></p>
    </>
  )
}