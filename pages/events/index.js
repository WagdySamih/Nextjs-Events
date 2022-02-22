
import { useRouter } from "next/router"
import EventsList from "../../components/events/EventsList"
import EventsSearch from "../../components/events/EventsSearch"
import Meta from "../../components/shared/Meta"
import { getAllEvents } from '../../helpers/restClient'
const Events = ({ events }) => {
  const router = useRouter()
  const searchHandler = (year, month) => {
    const path = `/events/${year}/${month}`
    router.push(path)
  }
  return (
    <div>
      <Meta title={"All Events"} description={"Explore All Events!"} />
      <EventsSearch onSearch={searchHandler} />
      <EventsList events={events} />
    </div>
  )
}

export const getStaticProps = async () => {
  const allEvents = await getAllEvents();
  return {
    props: {
      events: allEvents
    },
    revalidate: 60
  }
}
export default Events