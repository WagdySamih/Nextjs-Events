import EventsListItem from "./EventsListItem"
import classes from './EventList.module.css'

const EventsList = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => <EventsListItem key={event.id} event={event} />)}
    </ul>)
}

export default EventsList