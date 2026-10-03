import type { LandingPage } from '../types/landing-page';

const benefit = (symbol: string, title: string, description: string) => ({ symbol, title, description });

export const defaultLandingPage: LandingPage = {
	brand: 'MMWD',
	edition: 'v2026.1',
	hero: {
		eyebrow: 'Updated for Next.js 15, AI Workflows & Modern Stack',
		title: 'Master Modern Web Development',
		highlight: 'Without the Overwhelm',
		description: 'The ultimate battle-tested roadmap to building production-ready, full-stack applications with React, TypeScript, Serverless architectures, and modern AI toolings.',
		rating: '4.9/5',
		reviewCount: '(1,400+ developers)',
		formats: 'Instant Digital Download (PDF, EPUB, MOBI)',
		bookTitle: 'Mastering Modern Web Development',
		bookSubtitle: 'Architectures, React 19, Micro-frontends & Production AI',
		authorName: 'Alexandre Rivera',
		authorRole: 'Principal Staff Engineer',
	},
	benefitsHeading: {
		eyebrow: 'Why This Book?',
		title: 'Everything You Need to Build & Scale Enterprise Web Apps',
		description: 'Skip the outdated tutorials and scattered blogs. Learn the modern engineering paradigm used by tech leaders.',
	},
	benefits: [
		benefit('◫', 'Modern Full-Stack Architecture', 'Understand Server Components, Server Actions, edge rendering, and full-stack TypeScript patterns that minimize state complexity.'),
		benefit('✣', 'AI Engine Integration', 'Learn how to incorporate LLMs, vector database embeddings, streaming responses, and rag pipeline patterns directly into modern apps.'),
		benefit('◴', 'Web Vitals & Performance', 'Deep dive into INP optimization, bundle splitting, asset caching, image pipeline automation, and achieving perfect 100 Lighthouse scores.'),
		benefit('⬡', 'Enterprise Security Standards', 'Master OAuth2, JWTs, RBAC authorization, CSRF/XSS mitigations, CORS setups, and API route protection.'),
		benefit('▤', 'Scalable Database Design', 'Work with Prisma, Drizzle ORM, PostgreSQL partitioning, serverless Redis caches, and distributed transaction strategies.'),
		benefit('↥', 'CI/CD & DevOps Automation', 'Automate deployments via GitHub Actions, Vercel/AWS infrastructure as code, automated preview environments, and error tracking.'),
	],
	chaptersHeading: {
		eyebrow: 'Comprehensive Curriculum',
		title: 'Explore the 12 Actionable Chapters',
		description: 'Over 420+ pages packed with code examples, architectural diagrams, and real-world case studies.',
	},
	chapters: [
		{ _key: 'chapter-01', title: 'Foundations of Modern Web Architecture', topics: ['Evolution from SPA to Hybrid SSR/SSG architectures', 'The DOM Engine vs Server execution contexts', 'Understanding the Edge Network and global asset routing', 'Setting up a professional developer environment for scale'] },
		{ _key: 'chapter-02', title: 'Advanced TypeScript Design Patterns', topics: ['Generic types, conditional types, and mapped types', 'Type-safe API routes without code generation duplication', 'Building resilient schema validations with Zod', 'Monorepo type-sharing strategies across apps and packages'] },
		{ _key: 'chapter-03', title: 'Deep Dive into React 19 & Server Components', topics: ['RSC paradigm: Eliminating client bundle bloat', 'Server Actions, Optimistic UI updates, and Use Form Status hooks', 'Suspense streaming patterns for lightning-fast TTFB', 'Managing state synchronization between Server and Client'] },
		{ _key: 'chapter-04', title: 'Integrating AI Utilities into Real-World Apps', topics: ['Streaming OpenAI & Anthropic responses to custom UI components', 'Vector search basics: PGVector and Pinecone setup', 'Function calling & Autonomous AI Agent integrations', 'Cost management and caching strategies for LLM calls'] },
	],
	author: {
		name: 'Alexandre Rivera',
		bio: 'Alexandre is a Principal Staff Software Engineer who has led frontend engineering teams at top Silicon Valley SaaS enterprises. He has architected web apps used by over 20 million daily active users, built open-source frameworks, and mentored hundreds of developers transitioning into senior technical roles.',
		portraitUrl: '/images/author.jpg',
		experience: '15+ Yrs Exp',
		newsletter: '150k+',
		openSource: '45+',
		students: '12k+',
	},
	reviewsHeading: {
		eyebrow: 'Reader Feedback',
		title: 'Loved by Developers from Top Companies',
		description: 'Here is what software engineers and tech leaders have to say after reading.',
	},
	testimonials: [
		{ _key: 'review-01', quote: 'This book directly helped me pass my Senior Frontend Architect interview. The chapter on Server Components alone is worth 10x the price of the book.', name: 'David K.', role: 'Senior Staff Dev @ Stripe', rating: 5, portraitUrl: '/images/reviewer-david.jpg' },
		{ _key: 'review-02', quote: 'Finally a resource that isn\'t just a restatement of official docs. Alexandre shares real production pitfalls and architectural compromises you only learn the hard way.', name: 'Elena Rostova', role: 'Lead Engineer @ Vercel ecosystem', rating: 5, portraitUrl: '/images/reviewer-elena.jpg' },
		{ _key: 'review-03', quote: 'The code repository provided with the Complete Bundle is exceptionally clean. It served as the exact starter template for our team\'s latest AI micro-SaaS.', name: 'Marcus Thorne', role: 'CTO @ TechFlow Labs', rating: 5, portraitUrl: '/images/reviewer-marcus.jpg' },
	],
	pricingHeading: {
		eyebrow: 'Transparent Pricing',
		title: 'Invest in Your Engineering Career',
		description: 'One-time purchase. Lifetime access to future revisions and updates.',
	},
	plans: [
		{
			_key: 'plan-digital', name: 'Digital Edition', label: 'EBook Only', description: 'Perfect for developers wanting pure actionable reading material.', price: '$29', comparePrice: '$49', buttonLabel: 'Get Digital Edition', featured: false,
			features: [
				{ _key: 'd-1', label: 'Complete eBook in PDF, EPUB, MOBI formats', included: true },
				{ _key: 'd-2', label: '420+ pages of high-value content', included: true },
				{ _key: 'd-3', label: 'Access to Github starter code samples', included: true },
				{ _key: 'd-4', label: 'Free lifetime book updates', included: true },
				{ _key: 'd-5', label: 'Video Walkthrough Masterclass (4 hrs)', included: false },
				{ _key: 'd-6', label: 'Full SaaS Boilerplate Production Starter', included: false },
			],
		},
		{
			_key: 'plan-complete', name: 'Complete Masterclass Bundle', label: 'Book + Code + Video', description: 'The complete toolkit for engineers looking to fast-track modern web mastery.', price: '$69', comparePrice: '$129', buttonLabel: 'Get Complete Bundle', featured: true,
			features: [
				{ _key: 'c-1', label: 'Everything in Digital Edition', included: true },
				{ _key: 'c-2', label: '4+ Hours HD HD Video Walkthrough Workshops', included: true },
				{ _key: 'c-3', label: 'Production Next.js 15 Starter Kit repo', included: true },
				{ _key: 'c-4', label: 'Interactive Architecture Cheat-Sheets (Figma/PDF)', included: true },
				{ _key: 'c-5', label: 'Exclusive Discord Developer Community Access', included: true },
				{ _key: 'c-6', label: 'Priority author Q&A', included: true },
			],
		},
	],
	guarantee: '14-Day 100% Money-Back Guarantee. If you don\'t find the book valuable for your career, email us for a full prompt refund—no questions asked.',
	faqHeading: { eyebrow: 'Got Questions?', title: 'Frequently Asked Questions' },
	faqs: [
		{ _key: 'faq-1', question: 'What format does the eBook come in?', answer: 'You will receive DRM-free PDF, EPUB, and MOBI files immediately after purchase. They are compatible with Kindle, iPad, Apple Books, desktop readers, and tablet devices.' },
		{ _key: 'faq-2', question: 'Is this book suitable for beginners?', answer: 'This book assumes basic knowledge of JavaScript and HTML/CSS. It is targeted at junior to mid-level developers who want to level up to senior roles, as well as experienced devs updating their skillset to current industry standards.' },
		{ _key: 'faq-3', question: 'How do future updates work?', answer: 'Web development moves fast! Whenever we update the book to reflect major framework updates (e.g. Next.js major releases, React updates), you will receive an automatic email notification with a free download link to the latest edition.' },
		{ _key: 'faq-4', question: 'Can I request an invoice or expense this to my company?', answer: 'Yes! Upon checkout, you will receive an automated PDF invoice with VAT/tax breakdowns suitable for employee education reimbursement programs.' },
	],
	footerCopyright: '© 2026 Alexandre Rivera. All rights reserved.',
};