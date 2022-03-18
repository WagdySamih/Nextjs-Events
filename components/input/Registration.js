import { useRef } from 'react';
import classes from './Registration.module.css';

const Registration = () => {

  const emailInputRef = useRef()

  const registrationHandler = async (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email }),
    })
    const payload = await res.json()

  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailInputRef}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default Registration;