
function EventCard({ title, date, time, description }) {
  return (
    <article className="event-card">
      <div className="event-date">
        <span>{date}</span>
      </div>

      <div className="event-details">
        <h3>{title}</h3>
        <p className="event-time">{time}</p>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default EventCard
