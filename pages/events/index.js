import EventsList from "../../components/events/EventsList"
import { getAllEvents } from '/eventsData'
const Events = () => {
  const events = getAllEvents()
  return (
    <div>
      <EventsList events={events } />
    </div>
  )
}
export default Events