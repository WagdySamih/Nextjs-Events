import Button from '../ui/Button';
import classes from './ResultsTitle.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const prettyDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {prettyDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
