import ws from "ws";

// @ts-expect-error
globalThis.WebSocket = ws;

import ha from "./ha.js";

// Write your automations here
ha.onStateChange("sensor.docker_hub", (state) => {
  console.log("Docker Hub:", state);
});
