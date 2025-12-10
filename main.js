import { Application } from '@splinetool/runtime'; // Import the Application class from runtime.js to initialize 3D app

const canvas = document.getElementById('canvas3d'); // Get reference to the canvas element
const app = new Application(canvas, { wasmPath: '/' }); // Create a new Application instance with wasm path configured
app.load('./scene.splinecode'); // Load the 3D scene file

// Variables to store rotation values for the 3D subject
let rotationX = 0;
let rotationY = 0;

// Get references to tap overlay and toast message elements
const tapOverlay = document.getElementById('tap-overlay');
const toastMsg = document.getElementById('toast-msg');

// Show the toast message shortly after page load to prompt user interaction
setTimeout(() => {
    toastMsg.classList.add('show');
}, 500); // slight delay after load

// Function to start listening to device motion after permission granted
async function startMotion() {
    // On iOS devices, permission is required to access motion sensors
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        const response = await DeviceMotionEvent.requestPermission();
        if (response !== 'granted') {
            // Alert user if permission is denied and reload page
            alert(
                "Apple Motion Access Was Denied. \n\n" +
                "Please close reopen Safari to allow Motion and Orientation access."
            );
            location.reload();
            return;
        }
    }

    // Listen for device orientation events to update rotation
    window.addEventListener('deviceorientation', (event) => {
        // Ignore events without beta or gamma values
        if (event.beta == null || event.gamma == null) return;

        // Define baseline orientation values (neutral position)
        const BASE_BETA = 45;  // phone tilted toward user
        const BASE_GAMMA = 0;  // centered left-right

        // Calculate relative rotation from baseline
        let relX = event.beta - BASE_BETA;
        let relY = event.gamma - BASE_GAMMA;

        // Clamp rotation values to a max range to avoid extreme tilts
        relX = Math.max(-30, Math.min(30, relX));
        relY = Math.max(-30, Math.min(30, relY));

        // Smoothly ease rotation values for smoother animation
        rotationX += (relX - rotationX) * 0.08;
        rotationY += (relY - rotationY) * 0.08;

        // Find the 3D object named "Subject" or whatever you keep in the scene, replace if different
        const target = app.findObjectByName("Subject");
        if (target) {
            // Apply rotation to the subject in radians
            target.rotation.x = rotationX * (Math.PI / 180);
            target.rotation.y = rotationY * (Math.PI / 180);
        }
    });

}

// Handle tap on overlay to request motion access and start rotation updates
tapOverlay.addEventListener('click', async () => {
    await startMotion();
    // Hide the tap overlay after permission granted
    tapOverlay.style.display = 'none';
    // Fade out the toast message
    toastMsg.classList.remove('show');
    // After fade out transition, hide the toast completely
    setTimeout(() => {
        toastMsg.style.display = 'none';
    }, 500); // matches CSS transition duration
});
