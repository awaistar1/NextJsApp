import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data.js";
import EventList from "../../components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from "../../components/events/results-title.js";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/event-detail/error-alert.js";
const FilteredEventsPage = () => {
    const router = useRouter();
    const filteredData = router.query.slug;
    console.log(filteredData)
    if (!filteredData) {
        return <ErrorAlert><p className="center"> Loading...</p></ErrorAlert>
    }
    const filteredMonths = filteredData[1];
    const filteredYears = filteredData[0];
    const numMonth = +filteredMonths;
    const numYear = +filteredYears;
    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {

        <Fragment>
            <ErrorAlert><p> Something is wrong with the filters.Please Adjust your filters</p></ErrorAlert>
            <div className="center">
                <Button link="/events">
                    Show All events
                </Button>
            </div>
        </Fragment>
    }
    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })
    if (!filteredEvents || filteredEvents.length == 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p>
                        No events found for the choosen filter!
                    </p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">
                        Show All events
                    </Button>
                </div>
            </Fragment>
        )
    }
    console.log(filteredEvents)
    const numDate = new Date(numYear, numMonth - 1);


    return (
        <Fragment>
            <ResultsTitle date={numDate} />
            <EventList items={filteredEvents} />
        </Fragment>

    )
}
export default FilteredEventsPage;