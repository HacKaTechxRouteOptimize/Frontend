"use client";

import { AppDispatch, RootState } from "@/app/store";
import { addRoute } from "@/app/store/slice/routeSlice";
import { Route } from "@/app/types/route";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const WorkSpace = () => {
  const [isHideRoutes, setIsHideRoutes] = useState(false);
  const [tagSkill, setTagSkill] = useState<string>("");
  const [startHour, setStartHour] = useState<string>("");
  const [capacity, setCapacity] = useState<string>("");
  const [startminute, setStartMinute] = useState<string>("");
  const [endHour, setEndHour] = useState<string>("");
  const [endminute, setEndMinute] = useState<string>("");
  const [maxTask, setMaxTask] = useState<string>("");
  const routeSlice = useSelector((state: RootState) => state.route);
  const dispatch = useDispatch<AppDispatch>();
  const formatStringTime = (hour: string, minute: string): string => {
    const hh = hour.padStart(2, "0");
    const mm = minute.padStart(2, "0");

    return `${hh}.${mm}`;
  };
  const handlerCreateRoute = () => {
    const startTime = formatStringTime(startHour, startminute);
    const endTime = formatStringTime(endHour, startminute);
    const newRoute: Route = {
      id: routeSlice.routes.length + 1,
      tagSkill: [tagSkill],
      capacity: Number(capacity),
      workingTimeStart: startTime,
      workingTimeEnd: endTime,
      maxTask: Number(maxTask),
      breakTimeStart: "12.00",
      breakTimeEnd: "13.00",
    };
    dispatch(addRoute(newRoute));
  };
  return (
    <div>
      <button onClick={() => setIsHideRoutes((prev) => !prev)}>
        {isHideRoutes ? "show" : "hide"}
      </button>
      <br />
      <br />
      {!isHideRoutes && (
        <section>
          <div>
            {routeSlice?.routes.map((r, index) => (
              <div key={index}>
                <p>dirver id:{r.id}</p>
                <p>
                  breakTime {r.breakTimeStart} to {r.breakTimeEnd}
                </p>
                <p>
                  workTime {r.workingTimeStart} to {r.workingTimeEnd}
                </p>
                <p>capacity {r.capacity}</p>
                <p>max task {r.maxTask}</p>
                <div>================</div>
                <br />
              </div>
            ))}
          </div>
          <label htmlFor="">TagSkill </label>
          <select
            value={tagSkill}
            onChange={(e) => setTagSkill(e.target.value)}
          >
            <option value="">-- Select color --</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <br />
          <br />
          <label htmlFor="">Capacity </label>
          <input
            type="text"
            placeholder="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="">Start </label>
          <input
            type="text"
            value={startHour}
            onChange={(e) => setStartHour(e.target.value)}
            placeholder="day"
          />
          <input
            type="text"
            placeholder="minute"
            value={startminute}
            onChange={(e) => setStartMinute(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="">End </label>
          <input
            type="text"
            value={endHour}
            onChange={(e) => setEndHour(e.target.value)}
            placeholder="hour"
          />
          <input
            type="text"
            placeholder="minute"
            value={endminute}
            onChange={(e) => setEndMinute(e.target.value)}
          />

          <br />
          <br />
          <label htmlFor="">maxtask </label>
          <input
            value={maxTask}
            onChange={(e) => setMaxTask(e.target.value)}
            type="text"
          />
          <br />
          <button type="button" onClick={() => handlerCreateRoute()}>
            create
          </button>
        </section>
      )}
    </div>
  );
};

export default WorkSpace;
