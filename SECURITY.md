# Security policy

## Reporting a vulnerability

If GitHub private vulnerability reporting is enabled, use the repository's Security tab to submit a private report. Otherwise, open a GitHub issue asking the maintainers to arrange a private reporting channel, without posting exploit details, private pairing codes, screen contents, credentials or personal information.

Include the affected version, supported device/browser, a description of the issue and non-sensitive steps to reproduce it. Only test on devices and accounts you own or have explicit permission to use. Do not access someone else's stream, interfere with a live session or bypass device or network restrictions.

## Supported version

Security fixes target the latest release on the main branch. This is a community project; no response-time or availability guarantee is made.

## Security model and limitations

- Browser capture requires the user's authorization.
- WebRTC protects media in transit, while peer signaling and STUN are provided externally.
- Pairing codes and QR invitations are sensitive. They are not substitutes for a verified identity or an access-control account system.
- CourtCast does not authenticate a viewer's real-world identity or prevent a recipient from recording the display.
- Third-party JavaScript dependencies run in the browser and must be included in any security review.
- Open source makes inspection possible; it is not a guarantee of security.
