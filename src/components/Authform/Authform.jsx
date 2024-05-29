import { Link, useSearchParams, useNavigation, Form } from 'react-router-dom'
import './Authform.css'
import { useState } from 'react';
import { loginUser, signupUser } from '../../utils';


const Authform = () => {
   const [searchParams] = useSearchParams();
  const nagivation = useNavigation();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: "",
  })

  const isLogin = searchParams.get('mode') === 'login'
  const isSubmitting = nagivation.state === 'submitting'

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const login = async () => {
    console.log("Logging in data", formData);
    loginUser(formData)
  }

  const signup = async (e) => {
    console.log("signing up data", formData)
    signupUser(formData)
  }

  return (
    <>
      <Form className='form'>
        <h1>{isLogin ? 'Log in' : 'Sign up'}</h1>
        {!isLogin && <p>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id='username'
            name='username'
            onChange={handleChange}
            value={formData.username}
            required/>
        </p>}
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required />
        </p>
        <p>
          <label htmlFor='image'>Password</label>
          <input
            id="password"
            type='password'
            name="password"
            onChange={handleChange}
            value={formData.password}
            minLength={6}
            required />
        </p>
        <div className='actions'>
          <Link to={`?mode= ${isLogin ? 'signup' : 'login'}`}>{isLogin ? 'Register' : 'Login'}</Link>
          <button onClick={() => isLogin ? login(): signup()}>{isSubmitting ? 'Submitting...' : `${isLogin ? 'Login' : 'Save'}`}</button>
        </div>
      </Form>
    </>
  )
}

export default Authform
