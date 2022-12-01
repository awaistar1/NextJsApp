import EventItem from "./event-item";
import classes from "../../components/events/event-list.module.css"
const EventList = (props) => {
    const { items } = props;
    return (
        <ul>
            {items.length > 1 ? (
                items.map((event) => <EventItem key={event.id} id={event.id} title={event.title} date={event.date} location={event.location} image={event.image} />)

            ) : (
                <>
                    <EventItem key={items.id} id={items.id} title={items.title} date={items.date} location={items.location} image={items.image} />
                </>
            )

            }
        </ul>

    )
}
export default EventList;