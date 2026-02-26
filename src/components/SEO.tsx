import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    noIndex?: boolean;
}

const SITE_NAME = "IWM Portal - Internship with Mayor, Indore";
const SITE_URL = "https://iwmimcindore.com";

const toAbsoluteUrl = (value: string) => {
    if (/^https?:\/\//i.test(value)) {
        return value;
    }
    return new URL(value, SITE_URL).toString();
};

export const SEO = ({
    title,
    description = "Join India's flagship civic internship program. Work with the Indore Municipal Corporation across 12 departments and gain hands-on experience in urban governance.",
    keywords = "IWM, iwm indore, Internship with Mayor, Indore Municipal Corporation, civic internship, government internship, Indore",
    image = "/iwm-logo.png",
    url = "/",
    type = 'website',
    noIndex = false,
}: SEOProps) => {
    const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
    const canonicalUrl = toAbsoluteUrl(url);
    const imageUrl = toAbsoluteUrl(image);
    const robotsContent = noIndex ? "noindex, nofollow" : "index, follow";

    const organizationStructuredData = {
        "@context": "https://schema.org",
        "@type": "GovernmentOrganization",
        "name": "Indore Municipal Corporation",
        "url": SITE_URL,
        "logo": toAbsoluteUrl("/iwm-logo.png"),
        "sameAs": [
            "https://www.instagram.com/internshipwithmayor.indore/"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-88396-35194",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi"]
        }
    };

    const websiteStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": SITE_NAME,
        "url": SITE_URL,
        "inLanguage": "en-IN"
    };

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content={robotsContent} />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:locale" content="en_IN" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            <script type="application/ld+json">
                {JSON.stringify(organizationStructuredData)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteStructuredData)}
            </script>
        </Helmet>
    );
};
