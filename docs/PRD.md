# Product Requirements Document (PRD)

Project: Novfolio

Version: 1.0

Status: Draft

---

# 1. Product Overview

Novfolio is a SaaS platform that enables users to create modern, recruiter-friendly portfolio websites without coding.

Users complete a guided profile, select a professional template, and instantly receive a publicly accessible portfolio hosted by Novfolio.

---

# 2. Goals

Primary Goals

- Reduce portfolio creation time to under 10 minutes.
- Eliminate technical barriers.
- Provide professionally designed portfolio websites.
- Enable easy sharing through a single URL.

Business Goals

- Build a scalable SaaS platform.
- Introduce premium features in future versions.
- Support multiple professions over time.

---

# 3. MVP Scope

Included

- User Registration
- User Login
- Email Verification
- Forgot Password
- Dashboard
- Profile Management
- Resume Upload
- Portfolio Generation
- Portfolio Editing
- Portfolio Publishing
- Public Portfolio URL
- Analytics Dashboard
- Portfolio Sharing

Excluded

- AI Features
- Resume Parsing
- GitHub Import
- LinkedIn Sync
- Premium Plans
- Custom Domains
- Multiple Portfolios
- Recruiter Dashboard

---

# 4. User Roles

## User

Can

- Register
- Login
- Manage Profile
- Upload Resume
- Generate Portfolio
- Edit Portfolio
- Publish Portfolio
- View Analytics

---

## Admin

Can

- Manage Users
- Moderate Content
- Remove Portfolios
- View Platform Statistics

---

# 5. User Flow

Landing Page

↓

Register

↓

Verify Email

↓

Login

↓

Complete Profile

↓

Upload Resume

↓

Choose Template

↓

Generate Portfolio

↓

Portfolio Published

↓

Share Portfolio URL

---

# 6. Functional Requirements

Authentication

- Register
- Login
- Logout
- Forgot Password
- Email Verification

---

Profile

- Personal Information
- Education
- Experience
- Skills
- Projects
- Certifications
- Achievements
- Languages
- Social Links
- Resume Upload

---

Portfolio

- Generate Portfolio
- Edit Portfolio
- Preview Portfolio
- Publish Portfolio
- Unpublish Portfolio

---

Dashboard

- Portfolio Views
- Visitor Count
- Completion Percentage
- QR Code
- Share Link

---

Analytics

- Total Views
- Unique Visitors
- Daily Visitors
- Countries
- Devices

---

# 7. Non Functional Requirements

Performance

- Page Load < 2 seconds

Availability

- 99.9% uptime

Security

- JWT Authentication
- Password Hashing
- HTTPS
- SQL Injection Protection
- XSS Protection

Scalability

- Modular Architecture
- PostgreSQL
- REST API

Accessibility

- Mobile Responsive
- Cross Browser Compatible

SEO

- Open Graph
- Meta Tags
- Sitemap
- Robots.txt

---

# 8. Tech Stack

Frontend

- React
- Tailwind CSS
- Framer Motion

Backend

- FastAPI
- SQLAlchemy
- Alembic
- Pydantic

Database

- PostgreSQL

Authentication

- JWT
- OAuth

Storage

- Cloudinary

Deployment

Frontend

- Vercel

Backend

- Railway

Database

- Neon PostgreSQL

---

# 9. Success Metrics

- Portfolio created in under 10 minutes.
- Mobile Lighthouse score above 90.
- PageSpeed score above 90.
- Portfolio generation success rate above 99%.
- High user satisfaction.
- Low portfolio abandonment rate.

---

# 10. Risks

Technical Risks

- Database scaling
- Storage optimization
- Large traffic spikes

Business Risks

- Competition
- User acquisition
- Template quality

Security Risks

- Spam accounts
- Abuse
- Data leakage

---

# 11. Future Roadmap

Version 2

- Resume Parsing
- GitHub Import
- AI Portfolio Suggestions

Version 3

- Premium Templates
- Custom Domains
- Team Workspaces

Version 4

- Recruiter Dashboard
- Marketplace
- AI Portfolio Assistant

---

End of Document
