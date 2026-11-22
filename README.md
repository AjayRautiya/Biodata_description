# Ajay Rautiya — Data Analyst

A one-page personal site that introduces who I am, what I do, and how to reach me.

## About me

Data Analyst with over 9 years of professional experience across engineering, technical recruitment, and AI analysis. I use SQL, Python, and pandas to build data-driven metrics and experimentation frameworks that scale AI Services.

**Why it matters:** I translate complex analytical findings into actionable insights that help stakeholders drive commercial outcomes and profitability.

Based in Katni, M.P.

## What's on the site

- **Intro**: name, role, and a short summary
- **Why it matters**: the value I bring
- **Experience**: roles from Vehicle Factory Jabalpur through Innodata Inc.
- **Skills**: Data Science & Analysis, Tools & Platforms, Business & Strategy
- **Projects**: Black Friday Sales Analysis, Capstone SQL Project – Retail Store, Uber Ride Analytics Dataset-2024
- **Education & Certifications**
- **Contact**: email, LinkedIn, and GitHub

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Vercel Analytics

## Getting started

Requires Node.js and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:

```bash
pnpm build
pnpm start
```

## Editing the content

All personal details are in one file, `lib/profile.ts`: profile, experience, skills, projects, and education. Change the values there and the page updates.

## Project structure

```
app/
  layout.tsx            # Metadata, fonts, and the root layout
  page.tsx              # The page
  globals.css           # Theme colors (blue) and base styles
components/
  hero.tsx              # Name, role, summary, and contact buttons
  profile-sections.tsx  # Experience, skills, projects, education
  section.tsx           # Shared section layout
lib/
  profile.ts            # All personal content
```

## Contact

- Email: [ajayrautiya@gmail.com](mailto:ajayrautiya@gmail.com)
- LinkedIn: [linkedin.com/in/ajay-rautiya](https://www.linkedin.com/in/ajay-rautiya/)
- GitHub: [github.com/AjayRautiya](https://github.com/AjayRautiya)
