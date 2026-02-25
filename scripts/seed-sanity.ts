/**
 * Seed script to populate Sanity with initial Case Studies and Job Positions.
 * Run with: npx tsx scripts/seed-sanity.ts
 */
import { config } from "dotenv";
import { createClient } from "next-sanity";

// Load .env.local
config({ path: ".env.local" });

const client = createClient({
    projectId: "mhgpqkec",
    dataset: "development",
    apiVersion: "2024-02-19",
    useCdn: false,
    token: process.env.SANITY_API_WRITE_TOKEN,
});

/** Convert a plain text string into a Sanity Portable Text block array */
function toBlocks(text: string) {
    return [
        {
            _type: "block",
            _key: Math.random().toString(36).slice(2, 10),
            style: "normal",
            markDefs: [],
            children: [
                {
                    _type: "span",
                    _key: Math.random().toString(36).slice(2, 10),
                    text,
                    marks: [],
                },
            ],
        },
    ];
}

// ---------- CASE STUDIES ----------
const caseStudies = [
    {
        _type: "caseStudy" as const,
        title: "AI-Powered Inventory Management",
        slug: { _type: "slug" as const, current: "ai-inventory-management" },
        client: "RetailCorp Inc.",
        summary:
            "Built an intelligent inventory forecasting system that reduced stockouts by 35% and overstock by 28% using machine learning models.",
        challenge:
            "RetailCorp was struggling with chronic inventory imbalances. Their manual forecasting approach led to frequent stockouts on popular items and significant capital tied up in overstock. They needed an automated, data-driven solution.",
        solution:
            "We developed a custom ML pipeline using TensorFlow that analyzes historical sales data, seasonal trends, supplier lead times, and external market signals. The system generates daily reorder recommendations and integrates directly with their ERP system via a Next.js dashboard.",
        result:
            "Within 6 months, stockouts decreased by 35%, overstock reduced by 28%, and the company freed up $2.4M in working capital. The system now processes 50,000+ SKUs daily with 94% forecast accuracy.",
        tags: ["AI", "Machine Learning"],
        technologies: ["Python", "TensorFlow", "Next.js"],
        featured: true,
        publishedAt: "2025-09-15T00:00:00Z",
    },
    {
        _type: "caseStudy" as const,
        title: "Automated Customer Support Platform",
        slug: { _type: "slug" as const, current: "automated-customer-support" },
        client: "TechStart Solutions",
        summary:
            "Developed a multi-channel chatbot platform handling 80% of tier-1 support tickets automatically, reducing response time from hours to seconds.",
        challenge:
            "TechStart's support team was overwhelmed with 5,000+ tickets per day, with average response times exceeding 4 hours. Customer satisfaction scores were plummeting, and hiring more agents wasn't sustainable.",
        solution:
            "We built a multi-channel AI support platform powered by OpenAI's GPT models, fine-tuned on TechStart's knowledge base. The system handles queries across live chat, email, and social media with intelligent routing for complex issues.",
        result:
            "The platform now resolves 80% of tier-1 tickets automatically with a 92% customer satisfaction rate. Average response time dropped from 4 hours to 12 seconds, and the support team can focus on complex, high-value interactions.",
        tags: ["AI", "Automation", "NLP"],
        technologies: ["Node.js", "OpenAI", "React"],
        featured: true,
        publishedAt: "2025-07-22T00:00:00Z",
    },
    {
        _type: "caseStudy" as const,
        title: "Smart Manufacturing Dashboard",
        slug: { _type: "slug" as const, current: "smart-manufacturing-dashboard" },
        client: "IndoMfg Ltd.",
        summary:
            "Real-time IoT monitoring dashboard with predictive maintenance alerts, preventing 200+ hours of unplanned downtime annually.",
        challenge:
            "IndoMfg's factory floor relied on reactive maintenance — machines were only fixed after they broke down, causing costly production halts and safety risks.",
        solution:
            "We deployed IoT sensors across critical machinery and built a real-time monitoring dashboard using React and Python. Predictive ML models analyze vibration, temperature, and power patterns to forecast failures 72 hours in advance.",
        result:
            "Prevented 200+ hours of unplanned downtime in the first year, saving an estimated $1.8M. Maintenance scheduling is now proactive, and the dashboard serves as the central operations hub for 3 factory floors.",
        tags: ["IoT", "Data Analytics"],
        technologies: ["React", "Python", "AWS"],
        featured: false,
        publishedAt: "2025-05-10T00:00:00Z",
    },
    {
        _type: "caseStudy" as const,
        title: "E-Commerce Personalization Engine",
        slug: { _type: "slug" as const, current: "ecommerce-personalization" },
        client: "ShopSmart Global",
        summary:
            "Recommendation engine using collaborative filtering that increased average order value by 22% and conversion rates by 15%.",
        challenge:
            "ShopSmart's generic product recommendations weren't engaging users. Cart abandonment was above 70% and average order value was stagnating despite growing traffic.",
        solution:
            "We built a hybrid recommendation engine combining collaborative filtering with content-based approaches. The system personalizes product suggestions, search rankings, and homepage content based on browsing behavior and purchase history.",
        result:
            "Average order value increased by 22%, conversion rates improved by 15%, and cart abandonment dropped by 18%. The engine processes 2M+ user interactions daily with sub-100ms response times.",
        tags: ["AI", "E-Commerce"],
        technologies: ["Python", "Next.js", "PostgreSQL"],
        featured: false,
        publishedAt: "2025-03-18T00:00:00Z",
    },
    {
        _type: "caseStudy" as const,
        title: "HR Process Automation Suite",
        slug: { _type: "slug" as const, current: "hr-process-automation" },
        client: "PeopleFirst Corp.",
        summary:
            "End-to-end HR automation covering recruitment screening, onboarding workflows, and leave management — saving 40 hours/week in manual tasks.",
        challenge:
            "PeopleFirst's HR team of 5 was managing 200+ employees with spreadsheets and email chains. Onboarding took 2 weeks, leave requests got lost, and recruitment screening was a bottleneck.",
        solution:
            "We built a comprehensive HR automation suite with AI-powered resume screening, automated onboarding checklists, and a self-service leave portal. The system integrates with their existing payroll and communication tools.",
        result:
            "Onboarding time reduced from 2 weeks to 3 days. Resume screening is 90% automated. The HR team saves 40+ hours per week on manual tasks and can now focus on employee experience and retention strategies.",
        tags: ["Automation", "SaaS"],
        technologies: ["Next.js", "Prisma", "Vercel"],
        featured: false,
        publishedAt: "2025-01-05T00:00:00Z",
    },
    {
        _type: "caseStudy" as const,
        title: "Fraud Detection System",
        slug: { _type: "slug" as const, current: "fraud-detection-system" },
        client: "FinSecure Bank",
        summary:
            "Real-time transaction monitoring with anomaly detection that caught 95% of fraudulent activities while maintaining a 0.1% false positive rate.",
        challenge:
            "FinSecure was losing $5M+ annually to fraud. Their rule-based detection system had a 40% miss rate and flagged too many legitimate transactions, frustrating customers.",
        solution:
            "We developed a real-time fraud detection pipeline using Kafka for stream processing and gradient-boosted decision trees for anomaly scoring. The model trains on behavioral patterns and adapts to emerging fraud techniques.",
        result:
            "Fraud detection rate improved to 95% with only a 0.1% false positive rate. Annual fraud losses dropped by $4.2M. The system processes 100,000+ transactions per minute with sub-50ms latency.",
        tags: ["AI", "FinTech", "Security"],
        technologies: ["Python", "Kafka", "PostgreSQL"],
        featured: true,
        publishedAt: "2024-11-20T00:00:00Z",
    },
];

// ---------- JOB POSITIONS ----------
const jobs = [
    {
        _type: "job" as const,
        title: "Senior AI/ML Engineer",
        slug: { _type: "slug" as const, current: "senior-ai-ml-engineer" },
        department: "Engineering",
        location: "Lahore, Pakistan",
        type: "Full-time",
        tags: ["AI", "Machine Learning", "Python"],
        salary: "$80K - $120K",
        description: toBlocks(
            "We're looking for a Senior AI/ML Engineer to lead the development of our machine learning infrastructure and build intelligent systems that power our client solutions. You'll work at the intersection of cutting-edge research and practical engineering."
        ),
        requirements: [
            "5+ years of experience in machine learning engineering",
            "Strong proficiency in Python, TensorFlow, and PyTorch",
            "Experience with production ML systems and MLOps pipelines",
            "Solid understanding of deep learning architectures (transformers, CNNs, RNNs)",
            "Experience with cloud platforms (AWS, GCP, or Azure)",
            "Strong communication skills and ability to translate technical concepts for non-technical stakeholders",
        ],
        responsibilities: [
            "Design and implement ML models for client projects",
            "Build and maintain data pipelines and feature engineering workflows",
            "Collaborate with product and design teams to define technical requirements",
            "Mentor junior engineers and conduct code reviews",
            "Stay current with ML research and evaluate new techniques for adoption",
            "Contribute to technical architecture decisions",
        ],
        publishedAt: "2025-11-01T00:00:00Z",
    },
    {
        _type: "job" as const,
        title: "Full-Stack Developer",
        slug: { _type: "slug" as const, current: "full-stack-developer" },
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        tags: ["Next.js", "TypeScript", "React"],
        salary: "$60K - $90K",
        description: toBlocks(
            "Join our engineering team to build beautiful, performant web applications for our clients. You'll work across the full stack, from crafting pixel-perfect interfaces to designing robust APIs and database schemas."
        ),
        requirements: [
            "3+ years of experience with React and Next.js",
            "Strong TypeScript proficiency",
            "Experience with databases (PostgreSQL, MongoDB)",
            "Familiarity with Tailwind CSS and modern CSS practices",
            "Understanding of REST and GraphQL APIs",
            "Git proficiency and experience with CI/CD pipelines",
        ],
        responsibilities: [
            "Build and maintain web applications using Next.js and React",
            "Design and implement RESTful APIs",
            "Write clean, maintainable, and well-tested code",
            "Participate in sprint planning and agile ceremonies",
            "Deploy and monitor applications in production",
            "Collaborate with designers to implement pixel-perfect interfaces",
        ],
        publishedAt: "2025-10-15T00:00:00Z",
    },
    {
        _type: "job" as const,
        title: "UI/UX Designer",
        slug: { _type: "slug" as const, current: "ui-ux-designer" },
        department: "Design",
        location: "Lahore, Pakistan",
        type: "Full-time",
        tags: ["Figma", "UI Design", "Prototyping"],
        salary: "$50K - $75K",
        description: toBlocks(
            "We're looking for a talented UI/UX Designer to create intuitive and visually stunning interfaces for our AI-powered products. You'll collaborate closely with engineers and stakeholders to ship exceptional user experiences."
        ),
        requirements: [
            "3+ years of UI/UX design experience",
            "Expert-level proficiency in Figma",
            "Strong portfolio showcasing web and mobile designs",
            "Understanding of design systems and component libraries",
            "Experience with user research and usability testing",
            "Knowledge of accessibility best practices (WCAG)",
        ],
        responsibilities: [
            "Design user interfaces for web and mobile applications",
            "Create wireframes, prototypes, and high-fidelity mockups",
            "Conduct user research and usability testing",
            "Maintain and evolve the design system",
            "Collaborate with developers to ensure design fidelity",
            "Present design decisions to stakeholders",
        ],
        publishedAt: "2025-10-01T00:00:00Z",
    },
    {
        _type: "job" as const,
        title: "DevOps Engineer",
        slug: { _type: "slug" as const, current: "devops-engineer" },
        department: "Infrastructure",
        location: "Remote",
        type: "Contract",
        tags: ["AWS", "Docker", "CI/CD"],
        salary: "$70K - $100K",
        description: toBlocks(
            "Help us build and maintain robust, scalable infrastructure. You'll be responsible for our CI/CD pipelines, cloud architecture, and ensuring our services run reliably at scale."
        ),
        requirements: [
            "4+ years of DevOps or SRE experience",
            "Strong AWS or GCP expertise",
            "Proficiency with Docker and Kubernetes",
            "Experience with Terraform or similar IaC tools",
            "Knowledge of monitoring and alerting (Datadog, Grafana, etc.)",
            "Understanding of security best practices",
        ],
        responsibilities: [
            "Design and maintain CI/CD pipelines",
            "Manage cloud infrastructure on AWS",
            "Implement monitoring, logging, and alerting",
            "Optimize system performance and reliability",
            "Automate repetitive operations tasks",
            "Respond to incidents and conduct post-mortems",
        ],
        publishedAt: "2025-09-20T00:00:00Z",
    },
    {
        _type: "job" as const,
        title: "Data Analyst Intern",
        slug: { _type: "slug" as const, current: "data-analyst-intern" },
        department: "Data",
        location: "Lahore, Pakistan",
        type: "Part-time",
        tags: ["Python", "SQL", "Data Analytics"],
        salary: "$20K - $30K",
        description: toBlocks(
            "Great opportunity for aspiring data professionals! Work alongside our data team to analyze client data, build dashboards, and develop insights that drive business decisions."
        ),
        requirements: [
            "Currently enrolled in a CS, Data Science, or related degree",
            "Basic proficiency in Python and SQL",
            "Familiarity with data visualization tools (Tableau, Power BI, or similar)",
            "Strong analytical and problem-solving skills",
            "Eagerness to learn and grow in a fast-paced environment",
        ],
        responsibilities: [
            "Assist in data cleaning and preprocessing",
            "Build basic dashboards and reports",
            "Support senior analysts on client projects",
            "Document data sources and methodologies",
            "Participate in team meetings and learning sessions",
        ],
        publishedAt: "2025-09-10T00:00:00Z",
    },
    {
        _type: "job" as const,
        title: "Technical Project Manager",
        slug: { _type: "slug" as const, current: "technical-project-manager" },
        department: "Management",
        location: "Hybrid",
        type: "Full-time",
        tags: ["Agile", "Scrum", "Leadership"],
        salary: "$70K - $100K",
        description: toBlocks(
            "Lead cross-functional teams to deliver complex AI and automation projects on time and within scope. You'll be the bridge between clients, engineers, and designers."
        ),
        requirements: [
            "5+ years of technical project management experience",
            "PMP or Scrum Master certification preferred",
            "Technical background in software development",
            "Experience managing distributed teams",
            "Strong communication and stakeholder management skills",
            "Familiarity with Jira, Linear, or similar project tools",
        ],
        responsibilities: [
            "Plan and manage project timelines, budgets, and resources",
            "Facilitate agile ceremonies (standups, sprints, retros)",
            "Act as the primary point of contact for client communication",
            "Identify risks and implement mitigation strategies",
            "Ensure project deliverables meet quality standards",
            "Report project status to leadership",
        ],
        publishedAt: "2025-08-28T00:00:00Z",
    },
];

async function seed() {
    if (!process.env.SANITY_API_WRITE_TOKEN) {
        console.error("❌ SANITY_API_WRITE_TOKEN not found in environment");
        process.exit(1);
    }

    console.log("🌱 Seeding Sanity with initial data...\n");

    // Seed Case Studies
    console.log("📁 Creating Case Studies...");
    for (const cs of caseStudies) {
        try {
            const existing = await client.fetch(
                `*[_type == "caseStudy" && slug.current == $slug][0]._id`,
                { slug: cs.slug.current }
            );
            if (existing) {
                console.log(`  ⏭️  "${cs.title}" already exists, skipping`);
                continue;
            }
            await client.create(cs);
            console.log(`  ✅ "${cs.title}"`);
        } catch (err) {
            console.error(`  ❌ Failed to create "${cs.title}":`, err);
        }
    }

    // Seed Job Positions
    console.log("\n💼 Creating Job Positions...");
    for (const job of jobs) {
        try {
            const existing = await client.fetch(
                `*[_type == "job" && slug.current == $slug][0]._id`,
                { slug: job.slug.current }
            );
            if (existing) {
                console.log(`  ⏭️  "${job.title}" already exists, skipping`);
                continue;
            }
            await client.create(job);
            console.log(`  ✅ "${job.title}"`);
        } catch (err) {
            console.error(`  ❌ Failed to create "${job.title}":`, err);
        }
    }

    console.log("\n🎉 Seeding complete!");
}

seed();
