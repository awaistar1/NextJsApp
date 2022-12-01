import { getAllEvents } from "../../dummy-data";
import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const AllEventsPage = () => {
    const allEvents = getAllEvents();


    return (
        <Fragment>
            <EventsSearch />
            <EventList items={allEvents} />
        </Fragment>
    )
}
export default AllEventsPage;