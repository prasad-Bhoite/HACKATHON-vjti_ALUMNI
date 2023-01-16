import React from 'react';
import "../styles/Events.scss";

const data = [
  {
    "title": "Alumni Sports Day",
    "date": "Jan 21, 2023 9:00 AM",
    "location": "VJTI, Mumbai",
    "count": "74"
  },
  {
    "title": "Annual Alumni Reunion 2022",
    "date": "Jan 21, 2023 9:00 AM",
    "location": "VJTI, Mumbai",
    "count": "119"
  }
]

const Event = (data) => {
    return (
        <div class="event">
          <div className="img"></div>
          <div className="title">{data.title}</div>
          <div className="description">
            <div className="date">{data.date}</div>
            <div className="location">{data.location}</div>
            <div className="count">{data.count}</div>
          </div>
        </div>
    )
}

function Events() {
  return (
    <div className="Events">
      { data.map(x => (<Event data={x} />)) }
    </div>
  )
}

export default Events;