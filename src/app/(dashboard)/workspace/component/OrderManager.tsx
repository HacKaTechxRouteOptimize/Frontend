import { AppDispatch, RootState } from "@/app/store";
import { addOrder } from "@/app/store/slice/orderSlice";
import { Order } from "@/app/types/order";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const OrderManager = () => {
  const [type, setType] = useState<"pick up" | "delivery">("pick up");
  const [priority, setPriority] = useState<
    "critical" | "high" | "medium" | "low"
  >("medium");
  const [startTimeWindow, setStartTimeWindow] = useState("");
  const [endTimeWindow, setEndTimeWindow] = useState("");
  const [capacity, setCapacity] = useState("");
  const [tagSkill, setTagSkill] = useState([""]);
  const orderSlice = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const orderID = orderSlice.order[orderSlice.order.length - 1]?.id ?? 0;
    const newOrder: Order = {
      id: orderID,
      startTimeWindow,
      endTimeWindow,
      capacity: Number(capacity),
      tagSkill,
      type,
      priority,
    };
    dispatch(addOrder(newOrder));
  };

  return (
    <div>
      <div>
        {orderSlice.order.map((o, index) => (
          <div key={index}>
            <p>Order ID :{o.id}</p>
            <p>Start Time:{o.startTimeWindow}</p>
            <p>End Time:{o.endTimeWindow}</p>
            <div>
              {o.tagSkill?.map((t, ti) => (
                <div key={ti + ":" + index}>{t}</div>
              ))}
            </div>
            <p>{o.priority}</p>
            <p>{o.type}</p>
            <div>==========</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Type</legend>
          <label>
            <input
              checked={type == "pick up"}
              onChange={() => setType("pick up")}
              type="radio"
              name="type"
              value={"pick up"}
            />
            Pick up
          </label>
          <label>
            <input
              checked={type == "delivery"}
              onChange={() => setType("delivery")}
              type="radio"
              name="type"
              value={"delivery"}
            />
            Delivery
          </label>
        </fieldset>
        <fieldset>
          <legend>Priority</legend>
          <label>
            <input
              checked={priority == "critical"}
              onChange={() => setPriority("critical")}
              type="radio"
              name="priority"
              value={"critical"}
            />
            Critical
          </label>
          <label>
            <input
              checked={priority == "high"}
              onChange={() => setPriority("high")}
              type="radio"
              name="priority"
              value={"high"}
            />
            High
          </label>
          <label>
            <input
              checked={priority == "medium"}
              onChange={() => setPriority("medium")}
              type="radio"
              name="priority"
              value={"medium"}
            />
            Medium
          </label>
          <label>
            <input
              checked={priority == "low"}
              onChange={() => setPriority("low")}
              type="radio"
              name="priority"
              value={"low"}
            />
            Low
          </label>
        </fieldset>
        <br />
        <label htmlFor="timeWindowStart">Start </label>
        <input
          type="time"
          name="timeWindowStart"
          value={startTimeWindow}
          onChange={(e) => setStartTimeWindow(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="endTime">End </label>
        <input
          type="time"
          name="timeWindowStart"
          value={endTimeWindow}
          onChange={(e) => setEndTimeWindow(e.target.value)}
        />

        <br />
        <br />
        <label htmlFor="tagSkill">Tag Skill </label>
        <select
          id="tagSkill"
          value={tagSkill[0]}
          onChange={(e) => setTagSkill([e.target.value])}
        >
          <option value="">none</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>

        <br />
        <br />
        <label htmlFor="capacity">Capacity </label>
        <input
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          type="text"
          id="capacity"
        />
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default OrderManager;
