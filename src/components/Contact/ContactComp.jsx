import { Form } from 'react-router-dom'
import './Contact.css'
import email from '../../assets/email.svg'
import mobile from '../../assets/mobile.svg'

const ContactComp = () => {
  return (
    <div className='contact'>
      <div className='contact-text'>
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero</p>
        <div className='email'>
          <img src={email} alt="" />
          <p>imginfo@snapit.com</p>
        </div>
        <div className='phone'>
          <img src={mobile} alt="" />
          <p>Support<span>(+21) 123 456</span></p>
        </div>
      </div>
      <Form className='contact-form'>
        <h1>We'd love to hear from you!</h1>
        <h2>Let's get in touch</h2>
        <div className="col1">
          <p>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" name='fullname' required/>
          </p>
          <p>
            <label htmlFor="Company">Company</label>
            <input type="text" name='company' />
          </p>
        </div>
        <div className="col2">
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' required/>
          </p>
          <p>
            <label htmlFor="phone">Phone number</label>
            <input type="tel" name='phone' required/>
          </p>
        </div>
        <p>
          <label htmlFor="address">Address</label>
          <input type='text' name='address' required/>
        </p>
        <p>
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="" col='2' required/>
        </p>
        <div className='action'>
          <button>Send Message</button>
        </div>
      </Form>
    </div>
  )
}

export default ContactComp
