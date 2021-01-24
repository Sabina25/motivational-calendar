import "./Calendar.css";

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar-root">
        <div className="calendar-root-dot"></div>
        <div className="calendar-root-dot"></div>
      </div>
      <div className="calendar-date">
        <div className="calendar-date-page"></div>
      </div>
    </div>
  );
};

export default Calendar;
