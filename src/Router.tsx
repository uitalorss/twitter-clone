import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { PageError } from './pages/PageError';
import { Profile } from './pages/Profile';

interface RouterProps{
  changeTheme(): void;
}

export function Router({changeTheme}: RouterProps){
  return(
    <Routes>
      <Route path='/' element={<Home changeTheme={changeTheme} />}/>
      <Route path='/user' element={<Profile changeTheme={changeTheme}/>}/>
      <Route path='/404' element={<PageError changeTheme={changeTheme}/>}/>
    </Routes>
  )
}