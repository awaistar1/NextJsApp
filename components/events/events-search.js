import Button from "../../components/ui/button.js";
import classes from "../../components/events/events-search.module.css"
import { useRef } from "react";

const EventsSearch = (props) => {
    const getMonthInput = useRef();
    const getYearInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const monthValue = getMonthInput.current.value;
        const yearValue = getYearInput.current.value;

        props.onSearch(monthValue, yearValue);
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">
                        Year
                    </label>
                    <select id="year" ref={getYearInput}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={getMonthInput}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
                <Button>Filter Events</Button>
            </div>
        </form>
    )
}
export default EventsSearch;