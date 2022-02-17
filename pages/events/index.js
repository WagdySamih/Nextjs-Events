import { useRouter } from "next/router"
import EventsList from "../../components/events/EventsList"
import EventsSearch from "../../components/events/EventsSearch"
import { getAllEvents } from '/eventsData'
const Events = () => {
  const router = useRouter()
  const events = getAllEvents()

  const searchHandler = (year, month) => {
    const path = `/events/${year}/${month}`
    router.push(path)
  }
  return (
    <div>
      <EventsSearch onSearch={searchHandler} />
      <EventsList events={events} />
    </div>
  )
}
export default Events