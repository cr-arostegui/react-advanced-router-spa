import { Link } from 'react-router-dom';

export default function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        <Link to="event-a">
          <li>Event A</li>
        </Link>
        <Link to="event-b">
          <li>Event B</li>
        </Link>
        <Link to="event-c">
          <li>Event C</li>
        </Link>
      </ul>
    </>
  );
}
