import { useRef } from 'react';
import Button from '../ui/Button'
import classes from "./EventsSearch.module.css"

const EventsSearch = ({ onSearch }) => {

  const yearInputRef = useRef()
  const monthInputRef = useRef()

  const years = [2020, 2021, 2020];
  const months = [
    { name: "January", val: 1 },
    { name: "February", val: 2 },
    { name: "March", val: 3 },
    { name: "April", val: 4 },
    { name: "May", val: 5 },
    { name: "June", val: 6 },
    { name: "July", val: 7 },
    { name: "August", val: 8 },
    { name: "September", val: 9 },
    { name: "October", val: 10 },
    { name: "November", val: 11 },
    { name: "December", val: 12 },
  ]

  const onSubmitHandler = (event) => {
    event.preventDefault()
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    onSearch(selectedYear, selectedMonth)
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label>Year: </label>
          <select ref={yearInputRef}>
            {years.map((year) => <option key={year} value={year}>{year}</option>)}
          </select>
        </div>
        <div className={classes.control}>
          <label>Month: </label>
          <select ref={monthInputRef}>
            {months.map((month) => (
              <option key={month.val} value={month.val}>{month.name}</option>)
            )}
          </select>
        </div>
      </div>
      <Button onClick={() => { }}>Filter!</Button>
    </form>
  )
}


export default EventsSearch