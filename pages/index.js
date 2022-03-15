import { getFeaturedEvents } from "../helpers/restClient"
import EventsList from "../components/events/EventsList"
import Registration from "../components/input/Registration"
const Home = ({ events }) => {
  return (
    <>
      <Registration />
      <EventsList events={events} />
    </>
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
