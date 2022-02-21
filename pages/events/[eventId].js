
import EventSummary from '../../components/event-detail/EventSummary'
import EventContent from '../../components/event-detail/EventContent'
import EventLogistics from '../../components/event-detail/EventLogistics'
import { getEventById, getFeaturedEvents } from "../../helpers/restClient"


const EventDetailPage = ({ event }) => {
  if (!event) return <div className='center'> Loading...</div>
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent >
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event
    },
    revalidate: 30,
  }
}

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }))
  return {
    paths,
    // is true when paths don't have all options! 
    fallback: true
  }
}

export default EventDetailPage