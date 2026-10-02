export interface SectionHeading {
	eyebrow: string;
	title: string;
	description?: string;
}

export interface LandingPage {
	brand: string;
	edition: string;
	hero: {
		eyebrow: string;
		title: string;
		highlight: string;
		description: string;
		rating: string;
		reviewCount: string;
		formats: string;
		bookTitle: string;
		bookSubtitle: string;
		authorName: string;
		authorRole: string;
	};
	benefitsHeading: SectionHeading;
	benefits: Array<{ _key: string; symbol: string; title: string; description: string }>;
	chaptersHeading: SectionHeading;
	chapters: Array<{ _key: string; title: string; topics: string[] }>;
	author: {
		name: string;
		bio: string;
		portraitUrl?: string;
		experience: string;
		newsletter: string;
		openSource: string;
		students: string;
	};
	reviewsHeading: SectionHeading;
	testimonials: Array<{
		_key: string;
		quote: string;
		name: string;
		role: string;
		rating: number;
		portraitUrl?: string;
	}>;
	pricingHeading: SectionHeading;
	plans: Array<{
		_key: string;
		name: string;
		label: string;
		description: string;
		price: string;
		comparePrice: string;
		buttonLabel: string;
		featured: boolean;
		features: Array<{ _key: string; label: string; included: boolean }>;
	}>;
	guarantee: string;
	faqHeading: SectionHeading;
	faqs: Array<{ _key: string; question: string; answer: string }>;
	footerCopyright: string;
}