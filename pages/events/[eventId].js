import Meta from "../../components/shared/Meta"

import EventSummary from '../../components/event-detail/EventSummary'
import EventContent from '../../components/event-detail/EventContent'
import EventLogistics from '../../components/event-detail/EventLogistics'
import Comments from "../../components/input/Comments"
import { getEventById, getFeaturedEvents } from "../../helpers/restClient"


const EventDetailPage = ({ event }) => {
  if (!event) return <div className='center'> Loading...</div>
  return (
    <>
      <Meta title={event.title} description={event.description} />
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
      <Comments eventId={event.id} />
    </>
  )
}

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event: event || null
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