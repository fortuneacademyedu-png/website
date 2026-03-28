Create a modern, premium education consultancy website using Next.js (App Router) and Tailwind CSS.

Business Name:
Fortune Academy (fortuneacademyedu.com)

Context:
This is an education consultancy based in Bangalore that helps students get admission into top colleges (Engineering, Medical, Management, etc.). The focus is on direct admissions, counseling, and college guidance.

Contact Details (use exactly):

- Name: Naren Choudary (Managing Director)
- Email: narenchoudary1@gmail.com
- Phone: 91 98862 34079,9731250001
- Address: #4 Hightech SLV 5B, 5th Floor, Banday Colony, Geddalahalli, Aramane Nagar, Bangalore 560094

Colleges (display prominently as trust section/grid):
images will be in public/images folder

- RV College of Engineering
- BMS College of Engineering
- MS Ramaiah Institute of Technology
- New Horizon College of Engineering
- Akash Institute
- Acharya Institute
- Atria Institute of Technology
- Vyasa Institute
- CMR Institute of Technology
- Dayananda Sagar Academy of Technology (Kanakapura Road)
- Dayananda Sagar College of Engineering (Kumaraswamy Layout)
- Presidency University
- Reva University
- AMC Engineering College
- Nitte Meenakshi Institute of Technology
- SRM Vishveshwarya Institute of Technology

Style:

- Clean, modern, premium (inspired by Stripe / Vercel / modern ed-tech startups)
- Strong typography, lots of whitespace
- Soft gradients, glassmorphism (subtle)
- Rounded cards (2xl), soft shadows
- Smooth animations (Framer Motion)
- Mobile-first responsive

Sections:

1. Navbar

- Logo + Fortune Academy
- Links: Home, Colleges, Services, Contact
- CTA: "Book Free Counseling"

2. Hero Section

- Headline: "Get Direct Admission Into Top Colleges in Bangalore"
- Subtext: "Expert counseling for Engineering, Medical, and Management courses"
- CTA: "Book Free Counseling"
- Secondary CTA: "View Colleges"
- Add trust line: "Partnered with Top Bangalore Colleges"

3. Courses Section

- Engineering
- Medical (MBBS / BDS / Allied)
- MBA / Management
- Display as modern cards

4. Services Section

- Career Counseling
- College Selection Guidance
- Direct Admission Assistance
- Documentation Support
- Display as clean UI cards

5. Top Colleges Section (IMPORTANT)

- Grid layout with college names/logos
- Clean, minimal, trust-building

6. Why Choose Us

- Trusted Network of Colleges
- Transparent Admission Process
- Expert Guidance
- Fast & Reliable Support

7. Process Section

- Step 1: Consultation
- Step 2: College Shortlisting
- Step 3: Admission Processing
- Step 4: Enrollment

8. Contact Section (HIGH PRIORITY)

- Form fields: name, phone, email, course interest, message
- Strong CTA: "Book Free Consultation"
- Show phone number clearly
- Add WhatsApp CTA button

Form Handling:

- Use Next.js API route (/app/api/contact/route.ts)
- Handle POST with FormData
- Serverless (Vercel Functions)
- Add validation + loading + success state
- Prepare for email integration (Resend)

Content:

- Do NOT hardcode text
- Load from /content/content.md

Images:

- Use /public/images
- Optimize with next/image

UX:

- Smooth scrolling
- Sticky CTA
- Mobile optimized for lead conversion

Goal:

- High-conversion lead generation website
- Trust-building + clean + modern (NOT outdated like typical consultancies)
