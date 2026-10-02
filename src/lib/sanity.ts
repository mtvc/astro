import type { LandingPage } from '../types/landing-page';

const projectId = 'xdjiyqmc';
const dataset = 'ebook_data';
const apiVersion = '2026-10-02';

const landingPageQuery = `*[_type == "ebookLandingPage"] | order(_updatedAt desc)[0]{
	brand, edition, hero,
	benefitsHeading, benefits[]{_key, symbol, title, description},
	chaptersHeading, chapters[]{_key, title, topics},
	author{ name, bio, experience, newsletter, openSource, students, "portraitUrl": portrait.asset->url },
	reviewsHeading,
	testimonials[]{_key, quote, name, role, rating, "portraitUrl": portrait.asset->url},
	pricingHeading,
	plans[]{_key, name, label, description, price, comparePrice, buttonLabel, featured, features[]{_key, label, included}},
	guarantee,
	faqHeading, faqs[]{_key, question, answer},
	footerCopyright
}`;

export async function getLandingPage() {
	const endpoint = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);
	endpoint.searchParams.set('query', landingPageQuery);

	const response = await fetch(endpoint);
	if (!response.ok) throw new Error(`Sanity query failed: ${response.status} ${response.statusText}`);

	const { result } = (await response.json()) as { result: LandingPage | null };
	return result;
}