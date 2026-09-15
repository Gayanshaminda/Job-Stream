# Job Stream

A full-stack recruitment platform for discovering opportunities, organizing companies, and publishing location-aware job listings.

## Overview

Job Stream gives candidates a searchable job board while allowing authenticated organization members to create companies and manage their own listings. The application uses Next.js server features for data operations and WorkOS for authentication and organization membership.

## Features

- Browse and search job listings
- Filter opportunities by keywords and location
- View detailed job and company information
- WorkOS authentication and callback flow
- Create a company organization
- Publish, edit, and manage job listings
- Role-aware access to company-specific actions
- Upload company and listing media through Cloudinary
- MongoDB persistence with a Mongoose data model
- Responsive interface built with Radix UI and Tailwind CSS

## Technology Stack

| Area | Technologies |
| --- | --- |
| Application | Next.js 14, React, TypeScript |
| Authentication | WorkOS AuthKit and Organizations |
| Database | MongoDB, Mongoose |
| Media | Cloudinary |
| Interface | Tailwind CSS, Radix UI, Font Awesome |

## Application Routes

| Route | Purpose |
| --- | --- |
| `/` | Landing page and featured opportunities |
| `/jobs` | Searchable job listings |
| `/show/[jobId]` | Job details |
| `/new-company` | Create an organization |
| `/new-listing` | Publish a job |
| `/jobs/edit/[jobId]` | Edit an existing listing |

## Local Setup

### Prerequisites

- Node.js 18 or newer
- npm
- MongoDB database
- WorkOS application
- Cloudinary account for uploads

### Install and configure

```powershell
npm install
Copy-Item .env.example .env.local
```

Fill in the WorkOS, MongoDB, and Cloudinary values in `.env.local`. Use a strong value for `WORKOS_COOKIE_PASSWORD` and keep the file outside version control.

### Run locally

```powershell
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```powershell
npm run build
npm start
```

For deployment, configure the same environment variables in the hosting platform and update `WORKOS_REDIRECT_URI` to the production callback URL.

## Security Notes

- Never commit `.env.local` or production credentials.
- Restrict listing-management actions to authenticated organization members.
- Validate file type and size for production uploads.
- Use separate development and production WorkOS applications where practical.

## Author

Developed by [Gayan Shaminda](https://github.com/Gayanshaminda).
