import { useRef, useContext } from 'react';
import classes from './Registration.module.css';
import NotificationContext from '../../store/notification-context';

const errorMessage = "something went wrong please try again later"

const Registration = () => {
  const emailInputRef = useRef()
  const notificationCtx = useContext(NotificationContext);
  const showNotification = notificationCtx.showNotification

  const registrationHandler = async (event) => {
    try {
      showNotification({
        title: "Signing up...",
        message: "signing to new events in progress",
        status: "pending"
      })
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
      const payload = await res.json();
      if (!res.ok) throw (payload)

      showNotification({
        title: "Signup success!",
        message: "signing to new events successfully",
        status: "success"
      })
    } catch (error) {
      showNotification({
        title: "Signup Failed!",
        message: error.message || errorMessage,
        status: "error"
      })
    }
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