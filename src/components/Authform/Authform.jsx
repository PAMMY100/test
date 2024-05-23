import { Form, Link, useSearchParams, useNavigation, useActionData } from 'react-router-dom'
import './Authform.css'


const Authform = () => {
   const [searchParams] = useSearchParams();
  const nagivation = useNavigation();
  const data = useActionData()

  const isLogin = searchParams.get('mode') === 'login'
  const isSubmitting = nagivation.state === 'submitting'

  return (
    <>
      <Form method="post" className='form'>
        <h1>{isLogin ? 'Log in' : 'Sign up'}</h1>
        {data && data.errors && <ul>
          {Object.values(data.errors).map((err) =>
          <li key={err}>{err}</li>)}
        </ul>}
        {data && data.message && <p>{data.message}</p>}
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
        <div className='actions'>
          <Link to={`?mode= ${isLogin ? 'signup' : 'login'}`}>{isLogin ? 'Register' : 'Login'}</Link>
          <button>{isSubmitting ? 'Submitting...' : `${isLogin ? 'Login' : 'Save'}`}</button>
        </div>
      </Form>
    </>
  )
}

export default Authform
