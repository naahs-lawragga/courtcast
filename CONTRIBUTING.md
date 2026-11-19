# Contributing to CourtCast

Contributions are welcome once the repository is public. Keep changes focused, readable and compatible with the static hosting model. Use authorized devices and accounts for testing.

## Development

- Clone the repository and serve it on localhost using a static HTTP server. Use HTTPS for remote browser testing.
- Run the security checks with Node.js 20 or later: `node tests/security.test.mjs` and `node tests/source-scan.mjs`.
- Test pairing, sender approval, QR expiration, Stop sharing, browser permission cancellation, orientation and accessibility when relevant.
- Preserve the visual design, reduced-motion preference, actual WebRTC metrics and existing security safeguards.

## Pull requests

Explain the change, the tests performed and known limitations. Do not commit credentials, personal information, private pairing links, screen recordings, device data or real user logs. Keep dependency changes version-pinned and explain why they are needed. Automated checks are useful but do not replace review and physical-device testing.

For vulnerabilities, follow [SECURITY.md](SECURITY.md), not a public issue containing sensitive reproduction details.

By contributing, you agree that your submitted project code may be distributed under the project's [MIT license](LICENSE).
