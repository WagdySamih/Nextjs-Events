import { useRouter } from "next/router"
import { getEventById } from "../../eventsData"

import EventSummary from '../../components/event-detail/EventSummary'
import EventContent from '../../components/event-detail/EventContent'
import EventLogistics from '../../components/event-detail/EventLogistics'
import ErrorAlert from '../../components/ui/ErrorAlert'

const EventDetailPage = () => {
  const router = useRouter()
  const eventId = router.query.eventId
  const event = getEventById(eventId)
  if (!event) return <ErrorAlert>No Event Found!</ErrorAlert>
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

export default EventDetailPage