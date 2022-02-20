import Link from 'next/link'

import Button from '../ui/Button'
import AddressIcon from '../icons/AddressIcon'
import DateIcon from '../icons/DateIcon'
import ArrowRight from '../icons/ArrowRightIcon'

import classes from './EventListItem.module.css'

const EventsListItem = ({ event }) => {
  const {
    id,
    title,
    description,
    location,
    date,
    image,
    isFeatured
  } = event;
  const prettyDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const prettyAddress = location.replace(',', '\n')
  const link = `/events/${id}`
  return (
    <li className={classes.item}>
      <img src={image} alt={title} ></img>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{prettyDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{prettyAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={link}>
            <span>Explore More</span>
            <span className={classes.icon}> <ArrowRight /> </span>
          </Button>
        </div>
      </div>
    </li>)
}

export default EventsListItem