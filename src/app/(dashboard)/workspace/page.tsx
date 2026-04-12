"use client";

import { Route } from "@/app/types/route";
import { useState } from "react";

const WorkSpace = () => {
  const [routes, setRoutes] = useState<Route[]>([]);
  const [tagSkill, setTagSkill] = useState<string>("");
  const [startDay, setStartDay] = useState<number>(1);
  const [startMouth, setStartMouth] = useState<number>(1);
  const [startYear, setStartYear] = useState<number>(2026);
  const [endDay, setEndDay] = useState<number>(1);
  const [endMouth, setEndMouth] = useState<number>(1);
  const [endYear, setEndYear] = useState<number>(2026);
  const [maxTask, setMaxTask] = useState<number>(0);
  return (
    <div>
      <label htmlFor="">TagSkill </label>
      <select value={tagSkill} onChange={(e) => setTagSkill(e.target.value)}>
        <option value="">-- Select color --</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <br />
      <br />
      <label htmlFor="">Capacity </label>
      <input type="number" placeholder="capacity" />
      <br />
      <br />
      <label htmlFor="">Start </label>
      <input
        type="number"
        value={startDay}
        onChange={(e) => setStartDay(Number(e.target.value))}
        placeholder="day"
      />
      <input
        type="number"
        placeholder="mouth"
        value={startMouth}
        onChange={(e) => setStartMouth(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="year"
        value={startYear}
        onChange={(e) => setStartYear(Number(e.target.value))}
      />
      <br />
      <br />
      <label htmlFor="">End </label>
      <input
        type="number"
        value={endDay}
        onChange={(e) => setEndDay(Number(e.target.value))}
        placeholder="day"
      />
      <input
        type="number"
        placeholder="mouth"
        value={endMouth}
        onChange={(e) => setEndMouth(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="year"
        value={endYear}
        onChange={(e) => setEndYear(Number(e.target.value))}
      />
      <br />
      <br />
      <label htmlFor="">maxtask</label>
      <br />
      <input
        value={maxTask}
        onChange={(e) => setMaxTask(Number(e.target.value))}
        type="number"
      />
    </div>
  );
};

export default WorkSpace;
