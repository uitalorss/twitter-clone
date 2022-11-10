import logoTwitter from '../../../src/assets/twitterLight.svg';
import { Button } from '../../components/Button/Button';
import { Title } from '../../components/Title/Title';
export function Login(){
  return(
    <div>
      <img src={logoTwitter} alt="" />
      <Title color='txt-primary' size='normal'>Log in</Title>
      <form action="">
        <input 
          type="text"
          placeholder='Phone number, email address' 
        />
        <input 
          type="password"
          placeholder='******' 
        />
      </form>
      <Button color='primary'>Log in</Button>
      <div>
        <a href="404.html">Forgot Password</a>
        <a href="signup.html">Sign up to Twitter</a>
      </div>
    </div>
  )
}