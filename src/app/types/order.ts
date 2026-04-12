import { Recipient } from "./recipe";

export interface Order {
  id: number;
  timeWindowStart: Date;
  timeWindowEnd: Date;
  capacity?: number;
  recipient: Recipient;
  tagSkill?: string;
  type: "pick up" | "delivery";
  priority: "critical" | "high" | "medium" | "low";
}
