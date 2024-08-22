import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import About from './pages/about'

function App() {
 

  return (
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/about' element = {<About />} />
      <Route path='/signin' element = {<SignIn />} />
      <Route path='/signout' element = {<SignUp />} />
      <Route path='/profile' element = {<Profile />} />
    </Routes>
  )
}

export default App
