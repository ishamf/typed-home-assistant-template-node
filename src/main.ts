import ws from "ws";

// @ts-expect-error
globalThis.WebSocket = ws;

import ha from "./ha.js";

// Write your automations here
ha.onStateChange("sun.sun", (state) => {
  if (state === "above_horizon") {
    console.log("Sunrise!");
  } else {
    console.log("Sunset!");
  }
});
