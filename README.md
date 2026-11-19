# CourtCast

CourtCast is a browser-based wireless screen-sharing project. It uses WebRTC to deliver a live screen from a supported sender browser to a viewer, without a CourtCast account or a dedicated media server.

## Features

- Private session codes and one-use QR invitations
- Up to four independent viewer screens (main screen plus three additional screens)
- Video quality presets, real WebRTC diagnostics, and connection recovery
- Automatic and manual rotation, with optional local text-based orientation detection on the main viewer
- Fullscreen viewing, fit/fill controls, and optional screen audio where supported
- Responsive Liquid Glass-inspired interface and adjustable animations

## Getting started

1. Open the deployed CourtCast website on the viewing device.
2. Choose Watch screen and scan its QR code using the sender's regular Camera app, or enter the sender's session code.
3. On the sender, approve screen sharing through the browser's permission dialog.
4. Stop sharing when finished. Share only with people you trust.

## Compatibility

Screen capture requires browser support for `getDisplayMedia`. Watching requires WebRTC. Use a current supported desktop browser or compatible iOS/iPadOS Safari; iOS 27 is the project's mobile target, not a guarantee of universal support. Android browsers generally support watching rather than sending. Background capture, orientation detection, audio and protected content depend on the operating system and browser. Observe device and network policies.

## Deploy locally or on Vercel

The site is static HTML, CSS and JavaScript. No build command, API key or package installation is needed for the site itself. Serve the files through a local HTTP server for development or HTTPS hosting for deployment. On Vercel, select the Other framework preset, use the repository root and leave the build command empty.

External dependencies include PeerJS 1.5.5, QRCode.js 1.0.0, and Tesseract.js 5.1.1 / Tesseract.js-core for optional local orientation recognition. Dependencies are loaded from public CDNs. The project uses PeerJS public signaling and Google STUN; there is no configured TURN relay. These external services have their own terms and privacy practices.

## Transparency and security

CourtCast does not implement an account system, built-in recording service or persistent media storage. WebRTC transports media between the connected peers; signaling, hosting and network discovery services may process technical connection data. Keep session codes and invitation links private. The receiver can view what you choose to capture, including notifications or sensitive content. Only share authorized content.

See [Privacy](PRIVACY.md) and [Security](SECURITY.md) for details and limitations.

## License

CourtCast's original project code is provided under the [MIT License](LICENSE). Third-party dependencies retain their own licenses. Third-party trademarks and branding are not covered by this license. CourtCast is independently developed and is not affiliated with Apple, Google, GitHub or Vercel.
