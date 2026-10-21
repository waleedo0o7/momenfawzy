# Contact configuration

All Contact-page business information is centralized in `src/data/contact.ts`. Contact components
must consume that module rather than embedding phone numbers, email addresses, office details, map
coordinates, or social URLs.

## Editable details

- `phones`: display values and international `tel:` destinations.
- `emails`: unique department addresses and `mailto:` destinations.
- `office`: the verified Main Office address, map coordinates, embed URL, and directions URL.
- `socials`: verified external profiles.
- `whatsappUrl`: the client-confirmed WhatsApp destination for project inquiries.
- `workingHours`: remains `null` until approved hours are supplied.

## Form delivery

The inquiry form validates the visitor's details in the browser, formats them into a clear project
inquiry, and opens the client-confirmed WhatsApp conversation with the message prefilled. WhatsApp
requires the visitor to review and explicitly send the prepared message; the website cannot send it
silently on their behalf.

The direct email link remains available as a fallback.
