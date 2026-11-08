# Sursangam Academy

A static, responsive website for Sursangam Academy, built with React and Vite.
It presents music classes, an editable sample timetable, pricing status, a
gallery, and direct enquiry paths without requiring a backend.
The layout adapts to mobile and tablet CSS viewport sizes; the Lenovo Tab P12's
2944 x 1840 panel resolution is handled through the browser's effective viewport
and orientation rather than a fixed-resolution layout.

## Run locally

1. Install a current Node.js LTS release.
2. From the project folder, run:

       npm install
       npm run dev

3. Open the local URL shown by Vite.

To make a production build, run:

    npm run build

To preview that build locally, run:

    npm run preview

## Edit academy-wide settings

Open src/data/siteConfig.js before publishing and add the academy's real:

- phone number
- email address
- WhatsApp number, including country code
- address and optional Google Maps embed URL
- social-profile URLs

These fields intentionally start empty. The interface should show the supplied
“to be added” labels and should not render a live call, mail, WhatsApp, map,
or social link until the corresponding value is configured. This avoids
publishing invented contact details.

The same file contains the site title, meta description, navigation labels,
hero/about/gallery image URLs, general enquiry copy, and helper functions for
safe mail, phone, and WhatsApp destinations. Replace the supplied image URLs
with licensed academy photography whenever it is available.

## Edit classes

Use src/data/courses.js to add, change, reorder, or remove course cards. Each
course has an ID, category, level, short description, image source and alt
text, plus its course-specific email enquiry subject/body.

## Update the timetable

Use src/data/schedules.js to replace the current rows once the academy confirms
its timetable. Every row in the starter content has isSample set to true and
the file exports scheduleNotice. Keep that notice visible until confirmed
schedules are entered; the starter days and times are not official.

## Update pricing

Use src/data/pricing.js to maintain course pricing. Starter records have:

- feeAmount set to null
- pricingAvailable set to false
- displayFee set to “Contact us for pricing”

Do not publish placeholder amounts. After an academy-approved fee is available,
set feeAmount, configure the fee period as needed, and set pricingAvailable to
true. The card can then render a formatted INR amount; otherwise it should
continue to show the contact-for-pricing label.

## Replace gallery images

Gallery entries are in siteConfig.media.gallery. Each item includes a stable
ID, source URL, and descriptive alt text. Add or replace items there, then
ensure the image grid continues to provide a meaningful fallback if an image
cannot load. Local images can be stored under public/images and referenced with
paths such as /images/gallery/guitar-learning.jpg.

## Deploy

This site has no backend, database, login, booking flow, or payment setup. It
can be deployed as a static Vite application.

### Vercel

1. Push the repository to a Git provider and import it into Vercel.
2. Use the Vite preset (or build command npm run build).
3. Set the output directory to dist.
4. Deploy after replacing the empty contact settings.

### Netlify

1. Create a new site from the repository.
2. Set the build command to npm run build.
3. Set the publish directory to dist.
4. Deploy after replacing the empty contact settings.

Always run npm run build locally before deployment and check the public site
on desktop and mobile. Verify every visible contact action, navigation link,
course enquiry link, image fallback, schedule notice, and price label.
