import { getFeaturedEvents } from "../eventsData"
import EventsList from "../components/events/EventsList"
const Home = () => {
  const events = getFeaturedEvents()
  return (
    <EventsList events={events} />
  )
}

export default Home
