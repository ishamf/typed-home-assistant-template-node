import ha from "./ha.js";

// Write your automations here
ha.onStateChange('sensor.docker_hub', state => {
    console.log('Docker Hub:', state)
})