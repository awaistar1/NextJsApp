import react from 'react';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data'

const HomePage = () => {
  const featuredData = getFeaturedEvents();
  return (
    <h1>
      <EventList items={featuredData} />
    </h1>
  )
}

export default HomePage;