import Hero from '/components/Hero';
import About from '/components/About';
import Services from '/components/Services';
import Gallery from '/components/Gallery';
import Testimonials from '/components/Testimonials';
import ContactForm from '/components/ContactForm';
import Team from '/components/Team';
import Blog from '/components/Blog';
import Faq from '/components/Faq';
import Awards from '/components/Awards';
import Newsletter from '/components/Newsletter';
import Footer from '/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Team />
      <Blog />
      <Faq />
      <Awards />
      <Newsletter />
      <Gallery />
      <ContactForm />

    </main>
  );
}
