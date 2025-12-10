# Gyro Portal – Vanilla JavaScript Edition

A lightweight web-based version of the Spline gyroscope playground.  
This project brings real-time device motion controls to a Spline 3D scene directly in the browser using **vanilla JavaScript** and the **Spline Web Runtime**.

Originally inspired by Gábor Pribék’s SwiftUI version, this adaptation focuses on making it easy to run gyroscope-controlled Spline scenes on **any mobile browser** (iOS or Android), without needing an app.

## Overview

https://github.com/user-attachments/assets/09c52907-aa0e-48e7-9b77-f50cac8692fa

This project demonstrates:

- Tilt‑based interaction using **DeviceMotion**  
- Real‑time rotation of objects inside a Spline scene  
- A “tap to enable motion” flow that works across iOS and Android  
- Simple vanilla JS setup suitable for mobile websites  
- Optional HTTPS tunneling support for iOS motion permission  

Hold your phone naturally (~30–45°), tilt it around, and watch the Spline object react smoothly.

## Features

- 📱 Mobile‑friendly gyro control  
- 🎮 Smooth rotation mapping  
- 🌐 Pure vanilla JavaScript  
- 🎨 Spline Web Runtime integration  
- 🔒 iOS‑compatible permission handling  
- 🍃 No frameworks, minimal setup  
- 🚀 Works locally or over HTTPS with a Cloudflare tunnel  

## Running Locally

1. Start a local server in your project folder:

```
npx serve
```

2. Your server will start (usually on `http://localhost:3000`).

3. To open it on your phone:
   - Ensure both devices are on the same Wi‑Fi
   - Open the LAN URL shown in your terminal (`http://192.168.x.x:3000`)

This works immediately on **Android**, but iOS may require HTTPS for motion permissions.

## Using HTTPS (Cloudflare Tunnel)

iOS requires a secure origin (HTTPS) to prompt for motion access.  
You can create a temporary HTTPS link using Cloudflare Tunnel.

1. In a separate terminal, install cloudflared:

```
brew install cloudflared
```

2. Run the following to get a HTTPS link:

```
cloudflared tunnel --url http://localhost:3000
```

3. Copy the generated HTTPS link (e.g., `https://abc123.trycloudflare.com`) and open it on your phone.

Each time you restart the tunnel, a new link is generated.

## Deployment

All files are static — you can host them anywhere:

- Vercel  
- Netlify  
- GitHub Pages  
- Your own server  

If deploying in a subdirectory, update your `wasmURL` in `index.html` accordingly.

## Technologies

- JavaScript (Vanilla) – motion handling, scene interaction
- Spline Web Runtime – embedding and controlling Spline 3D scenes
- DeviceMotion API – gyroscope & orientation access
- HTML / CSS – layout, overlay UI, and styling
- Node.js + serve – lightweight local development server
- Cloudflare Tunnel (optional) – HTTPS support for iOS motion permissions

## Learn More

[Exporting as Code](https://docs.spline.design/exporting-your-scene/web/exporting-as-code) - Check out docs to know how to export Spline 3d scenes as code

[Official Spline Runtime](https://www.npmjs.com/package/@splinetool/runtime) - Spline 3D Code API for Web

## License

This project is licensed under the MIT License.

## Credits

This project was inspired by **Gábor Pribék’s SwiftUI Spline Gyro Playground**, which demonstrated the same concept using the native iOS Spline Runtime.

Original SwiftUI project by:  
**Gábor Pribék**  
*(Used as a reference while building this Vanilla JS mobile-web version.)*

SwiftUI Version:  
https://github.com/kapor00/gyro-spline/



## Author

Syed Abdur Rahman  
Vanilla JS implementation based on Spline's Web Runtime.

---

Made with ❤️ using JavaScript and Spline
