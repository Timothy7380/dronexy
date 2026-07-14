# Dronexy — React Native + Expo

Mobile app built from the DroneXY Figma design. Dark theme, client core flow.

## Run it

```bash
cd dronexy
npm install
npx expo start
```

Scan the QR code with the Expo Go app (iOS/Android), or press `i` / `a` for a simulator.

## Flow implemented (phase 1)

Splash → Onboarding (3 slides) → Get Started → Sign Up as (Pilot/Client)
→ Sign Up form (client + pilot variants) → Upload Documents (pilot)
→ OTP Verification → OTP Verified → Sign In → Enable Location → Home

## Design assets still needed from Figma

Export these from the Figma file and drop them in, then wire the `require(...)` paths:

| Asset | Where to put it | Where to wire it |
|---|---|---|
| Dronexy logo (icon + wordmark) | `assets/logo.png` | `src/screens/SplashScreen.js`, `GetStartedScreen.js` |
| Get Started hero photo | `assets/get-started.jpg` | `src/screens/GetStartedScreen.js` |
| 8 service icons (3D drones) | `assets/services/*.png` | `src/data/services.js` |
| Mission thumbnails | `assets/missions/*.jpg` | `src/data/services.js` |

Until then, styled Ionicons placeholders render in their place — same size, same layout.

## Structure

```
App.js                  navigation stack
src/theme.js            colors / typography / spacing tokens from Figma
src/components/         PrimaryButton, TextField, ScreenHeader
src/screens/            one file per Figma frame
src/data/services.js    home-screen content (services grid, missions)
```
