
import { useRouter } from "next/router"
import { getFilteredEvents } from '../../eventsData'

import ResultsTitle from "../../components/events/ResultsTitle"
import EventsList from "../../components/events/EventsList"
import Button from "../../components/ui/Button"
import ErrorAlert from '../../components/ui/ErrorAlert'
const FilteredEventsPage = () => {
  const router = useRouter();

  const params = router.query.slug
  if (!params || !params.length)
    return <p>Loading...</p>

  const year = +params[0];
  const month = +params[1]
  const isYearValid = (year) => !isNaN(year) && year > 2000 && year < 2030;
  const isMonthValid = (month) => !isNaN(month) && month <= 12 && month >= 1;

  if (!isMonthValid(month) || !isYearValid(year)) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>Please enter valid filtering values!</p>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </div>
    )
  }

  const events = getFilteredEvents({ year, month })

  if (!events || !events.length)
    return (
      <div className="center">
        <ErrorAlert>
          <p>No Events found matches your filter!</p>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </div>
    )


  return <>
    <ResultsTitle date={`${year}-${month - 1}`} />
    <EventsList events={events} />
  </>
}

export default FilteredEventsPage