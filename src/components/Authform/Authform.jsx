import { Form, Link, useSearchParams, useNavigation } from 'react-router-dom'
import './Authform.css'
import { useState } from 'react';


const Authform = () => {
  const [passwordAreNotEqual, setPasswordAreNotEqual] = useState(false)

  const [searchParams] = useSearchParams();
  const nagivation = useNavigation();

  const isLogin = searchParams.get('mode') === 'login'
  const isSubmitting = nagivation.state === 'submitting'

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target)
    const data = Object.fromEntries(fd.entries);

    if (data.password !== data['confirmPass']) {
      setPasswordAreNotEqual(true)
    }

    console.log(data);
  }


  return (
    <>
      <Form method="post" className='form'>
        <h1>{isLogin ? 'Log in' : 'Sign up'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required />
        </p>
        <p>
          <label htmlFor='image'>Password</label>
          <input
            id="password"
            type='password'
            name="password"
            minLength={6}
            required />
        </p>
        {!isLogin && <p>
          <label htmlFor='image'>Confirm Password</label>
          <input
            id="confirmPass"
            type='password'
            name="confirmPass"
            minLength={6}
            required />
        </p>}
        {passwordAreNotEqual && <p>Passwords must match.</p>}
        <div className='actions'>
          <Link to={`?mode= ${isLogin ? 'signup' : 'login'}`}>{isLogin ? 'Register' : 'Login'}</Link>
          <button onClick={handleSubmit}>{isSubmitting ? 'Submitting...' : `${isLogin ? 'Login' : 'Save'}`}</button>
        </div>
      </Form>
    </>
  )
}

export default Authform
