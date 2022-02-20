import { getFeaturedEvents } from "../helpers/restClient"
import EventsList from "../components/events/EventsList"
const Home = ({ events }) => {
  return (
    <EventsList events={events} />
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      events: await getFeaturedEvents()
    }
  }
}
export default Home
