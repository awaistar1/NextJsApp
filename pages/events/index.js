import { getAllEvents } from "../../dummy-data";
import { Fragment } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

const AllEventsPage = () => {
    const router = useRouter();
    const allEvents = getAllEvents();
    const handleFilteredValues = (months, years) => {
        const fullPath = `/events/${years}/${months}`;
        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventsSearch onSearch={handleFilteredValues} />
            <EventList items={allEvents} />
        </Fragment>
    )
}
export default AllEventsPage;