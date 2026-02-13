import { defineApp } from "rwsdk/worker";

export { LiveRoomDurableObject } from "@/realtime/liveRoomDurableObject";

export type AppContext = {};

export default defineApp([
  ({ ctx }) => {
    // Reserved for request-scoped context wiring.
    ctx;
  },
]);
