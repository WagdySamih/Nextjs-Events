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
    },
    revalidate: 60 * 30 // every have an hour
  }
}
export default Home
