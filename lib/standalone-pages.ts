export type StandalonePage = {
  title: string;
  intro: string;
  blocks: Array<{
    heading: string;
    points: string[];
  }>;
  ctaLabel: string;
  ctaHref: string;
};

export const standalonePages: Record<string, StandalonePage> = {
  "/about": {
    title: "About Us",
    intro:
      "Fortune Academy is a Bangalore-based education consultancy known by families as one of the best college councellors for direct admissions, transparent guidance, and end-to-end student support.",
    blocks: [
      {
        heading: "Who We Are",
        points: [
          "We help students and parents make confident admission decisions without confusion or last-minute stress.",
          "Our team works across Engineering, Medical, Management, and allied pathways with practical counseling support.",
          "Families choose us as trusted and best college councellors because we focus on clarity, speed, and real outcomes."
        ]
      },
      {
        heading: "Our Mission",
        points: [
          "Make college admissions transparent and stress-free for students and parents.",
          "Deliver profile-based recommendations instead of generic one-size-fits-all suggestions.",
          "Support every applicant from first consultation to final enrollment."
        ]
      },
      {
        heading: "Why Students and Parents Trust Fortune Academy",
        points: [
          "Strong network with top institutions across Bangalore and nearby admission hubs.",
          "Clear process with timeline planning, checklist-based documentation, and step-by-step execution.",
          "Fast response, transparent communication, and accountability throughout the admission cycle."
        ]
      },
      {
        heading: "What You Can Expect",
        points: [
          "Personalized counseling based on profile, budget, and long-term career goals.",
          "Shortlisted options that balance quality, affordability, and admission probability.",
          "A practical action plan from consultation to seat confirmation."
        ]
      }
    ],
    ctaLabel: "Book Free Counseling",
    ctaHref: "/contact"
  },
  "/services": {
    title: "Services",
    intro:
      "Our services are designed to move students from confusion to confident enrollment with transparent, step-by-step guidance across counseling, shortlisting, admissions, and documentation.",
    blocks: [
      {
        heading: "1) Career Counseling and Goal Mapping",
        points: [
          "One-on-one counseling to understand academic background, interests, and long-term career goals.",
          "Course-path recommendations for Engineering, Medical, Management, and allied programs.",
          "Practical guidance for students and parents to choose options with clarity and confidence."
        ]
      },
      {
        heading: "2) College Selection Guidance",
        points: [
          "College shortlisting based on eligibility, budget, specialization, and future opportunities.",
          "Comparison support across academics, campus ecosystem, and placement outlook.",
          "Backup planning with realistic alternatives to reduce admission risk."
        ]
      },
      {
        heading: "3) Direct Admission Assistance",
        points: [
          "Admission pathway planning for direct admission and institution-specific processes.",
          "Actionable support on application flow, timeline checkpoints, and follow-ups.",
          "Clear communication at every stage so families know exactly what to do next."
        ]
      },
      {
        heading: "4) Documentation and Process Support",
        points: [
          "Checklist support for essential student documents and admission paperwork.",
          "Guidance on document sequencing, submission timing, and verification readiness.",
          "Reduced delays by ensuring process completeness before final admission steps."
        ]
      },
      {
        heading: "5) Finance and Decision Support",
        points: [
          "Budget planning support and basic loan-assistance guidance during admission decisions.",
          "Seat confirmation planning aligned with financial readiness.",
          "Balanced recommendation approach: best-fit college + practical affordability."
        ]
      },
      {
        heading: "What You Can Expect From Us",
        points: [
          "Fast response from inquiry to consultation scheduling.",
          "Transparent communication with no confusing jargon.",
          "End-to-end support until enrollment completion."
        ]
      }
    ],
    ctaLabel: "Start With a Consultation",
    ctaHref: "/contact"
  },
  "/courses": {
    title: "Courses",
    intro:
      "Fortune Academy supports students across high-demand programs with profile-based counseling, college-fit strategy, and admission execution support.",
    blocks: [
      {
        heading: "Engineering Programs",
        points: [
          "B.E. / B.Tech guidance across Computer Science, AI/ML, ECE, Mechanical, Civil, and emerging specializations.",
          "College and branch shortlisting based on academics, budget, placements, and long-term goals.",
          "Support for direct admission pathways and counseling-stage decision-making."
        ]
      },
      {
        heading: "Medical and Allied Programs",
        points: [
          "MBBS, BDS, and Allied Health Sciences admission planning with clarity on process and timelines.",
          "Institution comparison support using eligibility, affordability, and academic outcomes.",
          "Documentation and admission workflow handholding for stress-free execution."
        ]
      },
      {
        heading: "Management and Career-Oriented Programs",
        points: [
          "BBA and MBA-focused guidance with specialization-level planning.",
          "Program mapping aligned to career objectives, profile strength, and future opportunities.",
          "Backup-ready admission strategy so students avoid last-minute uncertainty."
        ]
      },
      {
        heading: "What You Get With Our Course Counseling",
        points: [
          "One-on-one counseling with realistic recommendations, not generic lists.",
          "Step-by-step action plan from consultation to enrollment confirmation.",
          "Parent-friendly communication and complete transparency at each stage."
        ]
      }
    ],
    ctaLabel: "Book Course Counseling",
    ctaHref: "/contact"
  },
  "/colleges": {
    title: "Colleges",
    intro: "Discover institutions we guide students into, with dedicated category pages for focused exploration.",
    blocks: [
      {
        heading: "Categories",
        points: [
          "Engineering Colleges",
          "Medical Colleges",
          "Dental Colleges",
          "Architecture Colleges",
          "Management Colleges"
        ]
      },
      {
        heading: "How We Guide",
        points: [
          "Shortlist by specialization, budget, and future outcomes.",
          "Clarify admission path and required documents.",
          "Support final seat confirmation with confidence."
        ]
      }
    ],
    ctaLabel: "Get College Guidance",
    ctaHref: "/contact"
  },
  "/colleges/engineering-colleges": {
    title: "Engineering Colleges",
    intro: "Specialized counseling for B.E./B.Tech admissions in top Bangalore institutions.",
    blocks: [
      {
        heading: "Engineering Guidance",
        points: [
          "Branch-level planning based on aptitude and career fit.",
          "Top college comparison with practical outcomes.",
          "Admission support from consultation to confirmation."
        ]
      }
    ],
    ctaLabel: "Book Engineering Counseling",
    ctaHref: "/contact"
  },
  "/colleges/medical-colleges": {
    title: "Medical Colleges",
    intro: "Guidance for MBBS, BDS, and allied programs with complete process support.",
    blocks: [
      {
        heading: "Medical Admission Support",
        points: [
          "College and pathway planning.",
          "Documentation and timeline guidance.",
          "Counseling support until enrollment."
        ]
      }
    ],
    ctaLabel: "Get Medical Guidance",
    ctaHref: "/contact"
  },
  "/colleges/dental-colleges": {
    title: "Dental Colleges",
    intro: "Dedicated support for BDS admissions with practical shortlisting and process assistance.",
    blocks: [
      {
        heading: "Dental Admissions",
        points: [
          "Institute selection support.",
          "Eligibility and document planning.",
          "End-to-end admission coordination."
        ]
      }
    ],
    ctaLabel: "Plan Dental Admission",
    ctaHref: "/contact"
  },
  "/colleges/architecture-colleges": {
    title: "Architecture Colleges",
    intro: "Architecture-focused college selection and admission strategy.",
    blocks: [
      {
        heading: "Architecture Path",
        points: [
          "Program and institute mapping.",
          "Admission readiness and timeline planning.",
          "Family consultation before final selection."
        ]
      }
    ],
    ctaLabel: "Talk to an Advisor",
    ctaHref: "/contact"
  },
  "/colleges/management-colleges": {
    title: "Management Colleges",
    intro: "BBA/MBA admission guidance with specialization-focused counseling.",
    blocks: [
      {
        heading: "Management Guidance",
        points: [
          "Specialization and college-fit planning.",
          "Budget and return-on-investment perspective.",
          "Application and admission workflow support."
        ]
      }
    ],
    ctaLabel: "Start Management Planning",
    ctaHref: "/contact"
  },
  "/colleges/management-colleges/jain-university": {
    title: "Jain University",
    intro: "Focused admission guidance for Jain University aspirants.",
    blocks: [
      {
        heading: "Admission Planning",
        points: [
          "Program suitability discussion.",
          "Checklist and timeline guidance.",
          "Final decision and enrollment support."
        ]
      }
    ],
    ctaLabel: "Consult Now",
    ctaHref: "/contact"
  },
  "/contact": {
    title: "Contact Us",
    intro: "Speak with our counseling team for direct, transparent admission guidance.",
    blocks: [
      {
        heading: "Direct Details",
        points: [
          "Naren Choudary (Managing Director)",
          "Phone: 91 98862 34079",
          "Email: info@fortuneacademyedu.com",
          "Address: #4 Hightech SLV 5B, 5th Floor, Banday Colony, Geddalahalli, Aramane Nagar, Bangalore 560094"
        ]
      }
    ],
    ctaLabel: "Book Free Consultation",
    ctaHref: "/#contact"
  },
  "/counselling-registration": {
    title: "Counselling Registration",
    intro: "Register for one-on-one counseling to start your admission journey with a clear plan.",
    blocks: [
      {
        heading: "Before You Register",
        points: [
          "Keep your academic details ready.",
          "Share preferred courses and budget range.",
          "Mention your current admission stage for faster guidance."
        ]
      }
    ],
    ctaLabel: "Register Now",
    ctaHref: "/contact"
  },
  "/loan-assistance": {
    title: "Loan Assistance",
    intro: "Guidance for education financing so admission decisions are not delayed by funding uncertainty.",
    blocks: [
      {
        heading: "Loan Support",
        points: [
          "Education loan planning assistance.",
          "Document readiness guidance.",
          "Fee milestone alignment with admission steps."
        ]
      }
    ],
    ctaLabel: "Discuss Loan Support",
    ctaHref: "/contact"
  },
  "/channel-partners": {
    title: "Channel Partners",
    intro: "Partner with Fortune Academy for collaborative student counseling and admission support.",
    blocks: [
      {
        heading: "Partnership Areas",
        points: [
          "Student pipeline guidance.",
          "Documentation coordination.",
          "Transparent process and communication."
        ]
      }
    ],
    ctaLabel: "Become a Partner",
    ctaHref: "/contact"
  },
  "/education-consultant-jayanagar-bangalore": {
    title: "Education Consultant Jayanagar Bangalore",
    intro: "Localized support for students and families in and around Jayanagar and greater Bangalore.",
    blocks: [
      {
        heading: "Local Support",
        points: [
          "Personalized counseling for nearby families.",
          "Bangalore-focused college options.",
          "Timely support for fast admission windows."
        ]
      }
    ],
    ctaLabel: "Connect With Advisor",
    ctaHref: "/contact"
  },
  "/alliance-admission-guidance-2026": {
    title: "Alliance Admission Guidance 2026",
    intro: "Focused guidance for 2026 admissions with profile-based roadmap planning.",
    blocks: [
      {
        heading: "2026 Plan",
        points: [
          "Eligibility review.",
          "Program-level shortlisting.",
          "Admission process handholding."
        ]
      }
    ],
    ctaLabel: "Start 2026 Plan",
    ctaHref: "/contact"
  },
  "/christ-admission-guidance-2026": {
    title: "Christ Admission Guidance 2026",
    intro: "Program-focused support for Christ admissions in the 2026 cycle.",
    blocks: [
      {
        heading: "Guidance Areas",
        points: [
          "Program planning.",
          "Application readiness.",
          "Decision support with backups."
        ]
      }
    ],
    ctaLabel: "Plan Admission",
    ctaHref: "/contact"
  },
  "/jain-admission-guidance-2026": {
    title: "Jain Admission Guidance 2026",
    intro: "2026 intake support for Jain admission pathways.",
    blocks: [
      {
        heading: "Support Includes",
        points: [
          "Intake and specialization planning.",
          "Checklist and timeline support.",
          "Final decision guidance."
        ]
      }
    ],
    ctaLabel: "Get Guidance",
    ctaHref: "/contact"
  },
  "/mba-admission-guidance-2026": {
    title: "MBA Admission Guidance 2026",
    intro: "Strategic MBA admission planning across top colleges and specializations.",
    blocks: [
      {
        heading: "MBA Strategy",
        points: [
          "Specialization fit analysis.",
          "College and fee comparison.",
          "Admission timeline management."
        ]
      }
    ],
    ctaLabel: "Start MBA Planning",
    ctaHref: "/contact"
  },
  "/nri-quota-engineering-admissions-2026": {
    title: "NRI Quota Engineering Admissions 2026",
    intro: "Clear guidance for NRI quota engineering admissions in 2026.",
    blocks: [
      {
        heading: "NRI Admission Support",
        points: [
          "Eligibility and process explanation.",
          "Documentation sequence guidance.",
          "College-level shortlist support."
        ]
      }
    ],
    ctaLabel: "Consult for NRI",
    ctaHref: "/contact"
  },
  "/rvce-engineering-admission-2026": {
    title: "RVCE Engineering Admission 2026",
    intro: "RVCE-focused planning for students targeting 2026 engineering admissions.",
    blocks: [
      {
        heading: "RVCE Planning",
        points: [
          "Branch preference strategy.",
          "Timeline and documentation checkpoints.",
          "Seat decision support."
        ]
      }
    ],
    ctaLabel: "Plan RVCE Admission",
    ctaHref: "/contact"
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains how Fortune Academy collects, uses, stores, and protects personal information shared through consultations, forms, calls, and WhatsApp communication.",
    blocks: [
      {
        heading: "Information We Collect",
        points: [
          "Personal details such as name, phone number, email, course interests, and city/location preferences.",
          "Academic and counseling-related information shared by students or parents during consultation.",
          "Communication records necessary to provide admission support and follow-up updates."
        ]
      },
      {
        heading: "How We Use Information",
        points: [
          "To provide counseling, college shortlisting, and admission guidance services.",
          "To contact you about consultations, process updates, and required next steps.",
          "To improve our service quality, response workflows, and student support outcomes."
        ]
      },
      {
        heading: "Data Sharing and Protection",
        points: [
          "We do not sell your personal data to third parties.",
          "Information may be shared only when required for admission workflow support and with consent/context.",
          "Reasonable administrative and technical measures are used to protect stored information."
        ]
      },
      {
        heading: "User Rights",
        points: [
          "You may request correction of inaccurate information shared with us.",
          "You may request deletion of personal data, subject to legal and operational obligations.",
          "For privacy requests, contact us at info@fortuneacademyedu.com."
        ]
      }
    ],
    ctaLabel: "Contact Privacy Team",
    ctaHref: "/contact"
  },
  "/cookie-policy": {
    title: "Cookie Policy",
    intro: "Cookie usage and tracking preferences for site functionality and analytics.",
    blocks: [
      {
        heading: "Cookie Usage",
        points: [
          "Essential cookies support core website behavior.",
          "Analytics helps us improve user experience.",
          "Users can manage cookie settings from browser preferences."
        ]
      }
    ],
    ctaLabel: "Need Help?",
    ctaHref: "/contact"
  },
  "/terms-conditions": {
    title: "Terms and Conditions",
    intro:
      "These Terms and Conditions govern your use of Fortune Academy services, website content, consultation support, and communication channels.",
    blocks: [
      {
        heading: "Service Scope",
        points: [
          "Fortune Academy provides counseling, guidance, and process support for admissions.",
          "All guidance is advisory and based on information available during consultation.",
          "Final admission and seat allocation decisions are made solely by colleges/universities."
        ]
      },
      {
        heading: "User Responsibilities",
        points: [
          "Provide accurate academic and personal information for effective guidance.",
          "Review college requirements and submission deadlines before final application actions.",
          "Respond promptly for documentation and process completion where applicable."
        ]
      },
      {
        heading: "Liability and Accuracy",
        points: [
          "Institutional criteria, fees, and policies may change without prior notice.",
          "Fortune Academy is not liable for admission rejection due to eligibility or policy changes by institutions.",
          "Users should independently verify critical details directly with target institutions."
        ]
      },
      {
        heading: "Communication and Updates",
        points: [
          "By engaging our services, you agree to receive communication through phone, email, and messaging channels.",
          "Terms may be updated periodically; the latest version on this website is applicable.",
          "For term-related concerns, contact us through the Contact page."
        ]
      }
    ],
    ctaLabel: "Contact Support",
    ctaHref: "/contact"
  },
  "/terms-and-conditions": {
    title: "Terms and Conditions",
    intro:
      "This page mirrors the official Terms and Conditions governing counseling, admissions guidance, communication, and service usage.",
    blocks: [
      {
        heading: "Service Scope",
        points: [
          "Fortune Academy provides counseling, guidance, and process support for admissions.",
          "All guidance is advisory and based on information available during consultation.",
          "Final admission and seat allocation decisions are made solely by colleges/universities."
        ]
      },
      {
        heading: "User Responsibilities",
        points: [
          "Provide accurate academic and personal information for effective guidance.",
          "Review college requirements and submission deadlines before final application actions.",
          "Respond promptly for documentation and process completion where applicable."
        ]
      },
      {
        heading: "Liability and Accuracy",
        points: [
          "Institutional criteria, fees, and policies may change without prior notice.",
          "Fortune Academy is not liable for admission rejection due to eligibility or policy changes by institutions.",
          "Users should independently verify critical details directly with target institutions."
        ]
      },
      {
        heading: "Communication and Updates",
        points: [
          "By engaging our services, you agree to receive communication through phone, email, and messaging channels.",
          "Terms may be updated periodically; the latest version on this website is applicable.",
          "For term-related concerns, contact us through the Contact page."
        ]
      }
    ],
    ctaLabel: "Contact Support",
    ctaHref: "/contact"
  },
  "/refund-policy": {
    title: "Refund Policy",
    intro:
      "This policy explains the general framework used to review and process refund requests for counseling and related paid service engagements.",
    blocks: [
      {
        heading: "Refund Eligibility",
        points: [
          "Eligibility is assessed based on the specific service type and stage of engagement.",
          "Requests submitted after substantial delivery of service may not be eligible for full refund.",
          "All decisions are made after reviewing consultation records and payment details."
        ]
      },
      {
        heading: "How to Request a Refund",
        points: [
          "Submit request with payment proof, service details, and reason for cancellation.",
          "Requests are reviewed by the support team within a reasonable processing window.",
          "Additional clarification may be requested before final resolution."
        ]
      },
      {
        heading: "Processing",
        points: [
          "Approved refunds are initiated to the original payment source where possible.",
          "Bank/payment gateway timelines may vary and are outside direct control.",
          "For assistance, contact support through the Contact page."
        ]
      }
    ],
    ctaLabel: "Raise a Request",
    ctaHref: "/contact"
  },
  "/disclaimer": {
    title: "Disclaimer",
    intro:
      "All information and guidance provided by Fortune Academy is intended for counseling support and should be treated as advisory.",
    blocks: [
      {
        heading: "Advisory Nature",
        points: [
          "Admission guidance does not guarantee seat confirmation in any institution.",
          "Final decisions remain with colleges/universities and regulatory authorities.",
          "Users are encouraged to verify requirements directly from official institutional sources."
        ]
      },
      {
        heading: "Information Accuracy",
        points: [
          "While we aim for accuracy, institutional information may change at any time.",
          "Course structure, fees, eligibility, and deadlines can be revised by institutions.",
          "Fortune Academy is not responsible for changes made externally by colleges or authorities."
        ]
      },
      {
        heading: "Third-Party References",
        points: [
          "Any third-party tools, websites, or references are for convenience only.",
          "We do not control external content and are not liable for third-party updates or errors.",
          "Use of external links is at user discretion."
        ]
      }
    ],
    ctaLabel: "Clarify With Team",
    ctaHref: "/contact"
  },
  "/test": {
    title: "Test",
    intro: "Reserved route for testing and temporary campaign usage.",
    blocks: [
      {
        heading: "Route Availability",
        points: [
          "This page is kept for route compatibility.",
          "Can be repurposed for campaign landing pages.",
          "Design remains consistent with the site system."
        ]
      }
    ],
    ctaLabel: "Go Home",
    ctaHref: "/"
  },
  "/home": {
    title: "Home",
    intro: "Alias route pointing to home context for compatibility.",
    blocks: [
      {
        heading: "Navigation",
        points: [
          "Use primary homepage for complete experience.",
          "All admission sections are available there."
        ]
      }
    ],
    ctaLabel: "Open Home",
    ctaHref: "/"
  },
  "/terms-of-service": {
    title: "Terms of Service",
    intro:
      "Terms of Service page for users who prefer this naming; content aligns with our Terms and Conditions.",
    blocks: [
      {
        heading: "Service Terms",
        points: [
          "Fortune Academy provides advisory counseling and admissions support services.",
          "Final admission decisions are made by institutions and cannot be guaranteed.",
          "Users are expected to provide accurate information for proper guidance."
        ]
      },
      {
        heading: "Usage and Communication",
        points: [
          "By using our services, you consent to service-related communication.",
          "Policies may be updated periodically and latest versions apply.",
          "Contact our team if you need clarification before proceeding."
        ]
      }
    ],
    ctaLabel: "Contact Support",
    ctaHref: "/contact"
  },
  "/cancellation-policy": {
    title: "Cancellation Policy",
    intro:
      "This policy outlines cancellation request handling for paid services and consultation engagements.",
    blocks: [
      {
        heading: "Cancellation Requests",
        points: [
          "Cancellation should be requested as early as possible through official contact channels.",
          "Requests are evaluated based on service stage and resource allocation.",
          "Late cancellation may impact refund eligibility as per refund policy."
        ]
      },
      {
        heading: "Next Steps",
        points: [
          "Share your booking details and reason for cancellation.",
          "Team will confirm request status and applicable resolution timeline.",
          "Refer Refund Policy for refund-related outcomes."
        ]
      }
    ],
    ctaLabel: "Raise Cancellation Request",
    ctaHref: "/contact"
  },
  "/grievance-redressal": {
    title: "Grievance Redressal",
    intro:
      "We are committed to resolving concerns fairly and quickly through a clear grievance process.",
    blocks: [
      {
        heading: "How to Submit a Grievance",
        points: [
          "Share your issue with complete context, dates, and communication references.",
          "Mention expected resolution so we can assess and respond effectively.",
          "Submit via official contact details listed on the Contact page."
        ]
      },
      {
        heading: "Resolution Approach",
        points: [
          "Each grievance is reviewed and acknowledged by the team.",
          "Where needed, internal escalation is initiated for faster resolution.",
          "We aim to provide transparent status updates until closure."
        ]
      }
    ],
    ctaLabel: "Submit a Grievance",
    ctaHref: "/contact"
  },
  "/faq": {
    title: "Frequently Asked Questions",
    intro:
      "Common questions from students and parents regarding admissions, counseling, timelines, and support model.",
    blocks: [
      {
        heading: "Admissions and Counseling",
        points: [
          "Do you guarantee admission? We provide expert guidance, but final admission is decided by institutions.",
          "When should we start counseling? Ideally before counseling rounds and application deadlines.",
          "Can parents join consultation calls? Yes, we encourage parent participation for clear decisions."
        ]
      },
      {
        heading: "Documentation and Process",
        points: [
          "What documents are usually needed? Academic records, ID proofs, and course-specific requirements.",
          "Do you support direct admission process tracking? Yes, from shortlist to enrollment steps.",
          "How do we contact support quickly? Use phone, email, or WhatsApp from the Contact page."
        ]
      }
    ],
    ctaLabel: "Still Have Questions?",
    ctaHref: "/contact"
  }
};

export function getStandalonePage(path: string) {
  return standalonePages[path];
}
