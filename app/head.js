// app/head.js
// import { Metadata } from 'next';

export const metadata = {
    title: 'Nandan Flower | Best Wedding & Event Venue',
    description:
        'Nandan Flower offers the perfect setting for weddings, receptions, and grand celebrations. Enjoy exceptional hospitality and unforgettable experiences at our premier event venue.',
    openGraph: {
        title: 'Nandan Flower | Best Wedding & Event Venue',
        description:
            'Experience unforgettable weddings and events at Nandan Flower, renowned for its exceptional hospitality and beautiful venue.',
        images: [
            {
                url: ' https://nanadanflower.in/favicon.ico',
                width: 800,
                height: 600,
                alt: 'Nandan Flower',
            },
        ],
        url: 'https://nanadanflower.in',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nandan Flower | Best Wedding & Event Venue',
        description:
            'Book your dream wedding at Nandan Flower. Offering exceptional hospitality and an unforgettable venue.',
        image: 'https://nanadanflower.in/favicon.ico',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Head() {
    return (
        <>
            <meta name="robots" content="index, follow" />
        </>
    );
}
