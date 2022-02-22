
import { getFilteredEvents } from '../../helpers/restClient'

import ResultsTitle from "../../components/events/ResultsTitle"
import EventsList from "../../components/events/EventsList"
import Button from "../../components/ui/Button"
import ErrorAlert from '../../components/ui/ErrorAlert'
import Meta from "../../components/shared/Meta"
const FilteredEventsPage = ({ events, hasError, date, loading = true }) => {
  if (loading)
    return <div className="center">Loading...</div>

  if (hasError) {
    return (
      <div className="center">
        <ErrorAlert>
          <p>Please enter valid filtering values!</p>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </div>
    )
  }

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
    <Meta title={"Filtered Events"} description={`events on ${date.year}/${date.month}`} />
    <ResultsTitle date={`${date.year}-${date.month - 1}`} />
    <EventsList events={events} />
  </>
}


export const getServerSideProps = async (context) => {
  let [year, month] = context.params.slug;
  year = +year;
  month = +month;
  const isYearValid = (year) => !isNaN(year) && year > 2000 && year < 2030;
  const isMonthValid = (month) => !isNaN(month) && month <= 12 && month >= 1;

  if (!isMonthValid(month) || !isYearValid(year)) {
    return {
      props: {
        hasError: true,
        loading: false
      }
    }
  }

  const events = await getFilteredEvents({ year, month })

  return {
    props: {
      events,
      date: {
        year, month
      },
      loading: false
    }
  }
}

export default FilteredEventsPage