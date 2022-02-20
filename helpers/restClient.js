const BASE_URL = "https://next-events-d802f-default-rtdb.europe-west1.firebasedatabase.app"
const EVENTS_URL = `${BASE_URL}/events.json`

export const getAllEvents = async () => {
  try {
    const response = await fetch(EVENTS_URL);
    const data = await response.json()
    const events = []
    for (let key in data) {
      events.push({
        id: key,
        ...data[key]
      })
    }
    
    return events
  } catch (error) {
    console.error(error)
  }
}

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  const featuredEvents = allEvents.filter((event) => event.isFeatured)

  return featuredEvents
}