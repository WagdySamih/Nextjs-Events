import Link from 'next/link'
import classes from './Button.module.css'
const Button = ({ link, onClick, children }) => {
  if (!link) {
    return (
      <button
        className={classes.btn}
        onClick={onClick}>
        {children}
      </button>
    )
  }
  return (
    <Link href={link} >
      <a className={classes.btn}>
        {children}
      </a>
    </Link>
  )
}

export default Button