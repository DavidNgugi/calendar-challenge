import { convertToCurrTime, convertToDate } from "../utils";
import { IEvent } from "../../types";

export default function Event(props: { index: number; event: IEvent }) {
  const hourDiff =
    Math.abs(
      convertToDate(props.event.end).getTime() -
        convertToDate(props.event.start).getTime()
    ) / 36e5;
  const startMin = props.event.start % 60;
  const height = hourDiff === 1 ? 40 : hourDiff * 40;
  const top = startMin === 0 ? 0 : 52 - startMin;

  const styling = {
    height: `${height}px`,
    top: `${top}px`,
  };

  return (
    <div className="calendar-event" style={styling}>
      <div className="time">
        {convertToCurrTime(props.event.start)}
        {height <= 24 ? (
          <span style={{ fontWeight: "bolder" }}> {props.event.title}</span>
        ) : null}
      </div>
      {height > 24 ? <div className="title">{props.event.title}</div> : null}
    </div>
  );
}
