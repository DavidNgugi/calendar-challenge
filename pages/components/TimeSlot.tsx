import { IEvent } from "../../types";
import Event from "./Event";

export default function TimeSlot(props: {
  index: number;
  time: string;
  timeSlots: { [key: string]: IEvent[] };
}) {
  return (
    <div className="calendar-time-slot">
      <span>{props.index !== 0 ? props.time : ""}</span>
      <div className="calendar-events">
        {props.timeSlots[props.time].map((event, indx) => (
          <Event key={event.id} index={indx} event={event} />
        ))}
      </div>
    </div>
  );
}
