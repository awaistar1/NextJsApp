import { useRouter } from "next/router";
import { getEventById } from '../../dummy-data';
import EventList from "../../components/events/event-list";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
const EventDetailPage = () => {
    const [data, setData] = useState([]);
    const router = useRouter();
    const id = router.query.eventsId;
    useEffect(() => {
        const filteredData = getEventById(id);
        setData(filteredData);
    })
    return (
        <>
            {
                data == [] ?
                    (<>
                    </>
                    ) :
                    data == undefined ?
                        (<>
                            <h1>
                                No data available
                            </h1>
                        </>
                        ) :
                        (
                            <>
                                <Fragment>
                                    <EventSummary title={data.title} />
                                    <EventLogistics date={data.date} address={data.location} image={data.image} imageAlt={data.title} />
                                    <EventContent>
                                        <p>
                                            {data.description}
                                        </p>
                                    </EventContent>

                                </Fragment>
                            </>
                        )
            }
        </>
    )

}
export default EventDetailPage;
