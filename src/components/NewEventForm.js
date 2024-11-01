import { useRef, useState } from "react";
import "./NewEventForm.css";

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("manchester");

  // const title = useRef();
  // const date = useRef();

  const resetForm = () => {
    setTitle("");
    setDate("");
    setLocation("manchester");
    // title.current.value = "";
    // date.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      // title: title.current.value,
      // date: date.current.value,
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };

    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        Event title:
        <input
          type="text"
          // ref={title}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          // ref={date}
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="manchester">Manchester</option>
          <option value="london">London</option>
          <option value="cardiff">Cardiff</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
