# CourtCast privacy notice

Last updated: November 19, 2026.

## Screen sharing

CourtCast asks the browser for screen-capture permission when you explicitly start sharing. The browser and operating system determine which screen, window or tab can be captured and whether audio is available. The selected capture is transmitted through WebRTC to connected viewers. CourtCast has no built-in recording service or persistent server-side media archive. A viewer may independently capture or record what they see; CourtCast cannot prevent that.

## Connection information

CourtCast creates random session codes and QR invitation tokens in the browser. Treat them like private access credentials. Manual pairing requires a viewer-selected nickname and individual sender approval. The nickname is included in PeerJS signaling metadata and displayed to the sender; it is not a verified identity. Choose a nickname instead of personal information. If you select Remember on this device, the nickname is saved in browser local storage; otherwise it is remembered only in the currently open page. Uncheck Remember and submit again, or clear the site's data, to erase the saved nickname. QR invitations expire after five minutes and may be used once; the sender intentionally opens the viewer's link and grants capture permission. Stop sharing closes existing viewer connections. Never approve a request from a stranger. The app uses public PeerJS signaling and Google STUN to establish connections; these external services can receive connection metadata such as network addresses and identifiers. WebRTC encrypts media in transit, but it does not independently verify a viewer's personal identity. Network paths depend on the devices and network.

## Hosting and libraries

The website may be hosted on Vercel and loads PeerJS, QRCode.js and Tesseract.js components through public CDNs (unpkg and jsDelivr). Hosting and library providers may receive ordinary web request information such as IP addresses, browser details and request timestamps. They operate under their own policies. Review their privacy notices for provider-specific practices.

CourtCast does not include a dedicated advertising tracker or analytics account system in its current application code. Hosting settings or third-party services may differ; this document is not an audit of their logging or retention.

## Local processing and settings

When enabled, smart auto rotation analyzes sampled video frames on the viewer device to help determine orientation. The application does not intentionally upload those frames or recognized text for remote analysis. Recognition libraries and language assets may be downloaded from external providers. The browser may cache these assets. Interface preferences may be stored locally; clear site data or turn off the relevant setting to remove or disable them. Clipboard actions occur when a user uses the copy controls.

## Your choices

Approve sharing only when intended, keep codes private, close the session or use Stop sharing when finished, and avoid showing private messages, passwords or other sensitive information. Sharing and streaming must comply with device, network and content policies. Screen capture and background streaming may be interrupted by the browser or operating system.

This notice describes the application as implemented; it does not promise that third-party services or recipient devices do not retain data.
