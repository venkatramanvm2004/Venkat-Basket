import { useState } from "react";
import HeroImg from '../Components/basket.jpeg';
import ProjectsImg from '../Components/mango.jpeg';
import strawberryImg from '../Components/strawberry.jpeg';
import DragonImg from '../Components/dragon.jpeg';

// ✅ Main Component
export default function Blogs() {
  return (
    <main className="min-h-screen bg-[rgb(216,93,17)] text-white">
      {/* Header */}
      <header className="sticky top-0 bg-[rgb(216,93,17)]/90 backdrop-blur border-b border-white/20 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-display text-2xl md:text-3xl">Organic Fruit Delivery</h1>
          <a href="#contact" className="px-4 py-2 rounded-md border border-white/20">
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-5xl leading-tight">
              Fresh, Organic & Delivered Fast
            </h2>
            <p className="mt-4 text-forest/70">
              Handpicked seasonal fruits with exceptional care and seamless delivery.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="bg-forest text-black px-5 py-3 rounded-md border border-forest/20">
                Shop Now
              </button>
              <button className="px-5 py-3 rounded-md border border-forest/20">
                Learn More
              </button>
            </div>
          </div>
          <img
            className="rounded-md shadow-md"
            src={HeroImg}
            alt="Basket of fruits"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-12 shadow hover:shadow-2xl">
        <SectionTitle>Why Choose Us</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6 mt-8 shadow hover:shadow-2xl">
          <FeatureCard title="Quality" img={ProjectsImg}>
            We source the finest organic fruits to ensure premium taste.
          </FeatureCard>
          <FeatureCard title="Variety" img={strawberryImg}>
            Enjoy a diverse range of seasonal favorites every week.
          </FeatureCard>
          <FeatureCard title="Service" img={DragonImg}>
            Friendly support and quick, reliable delivery.
          </FeatureCard>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-12 shadow hover:shadow-2xl">
        <SectionTitle>Customer Testimonials</SectionTitle>
        <div className="mt-6">
          <Testimonial
            name="Sarah's Review"
            text="The organic fruits are so fresh and delicious!"
          />
          <Testimonial
            name="Alex's Feedback"
            text="I love the variety I receive each time. Highly recommended!"
          />
          <Testimonial
            name="Luis's Testimonial"
            text="Exceptional customer care and top-notch quality. Will order again!"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionTitle>FAQs</SectionTitle>
        <div className="mt-6">
          <FAQItem
            q="How can I place an order?"
            a="Browse our selection, add items to cart, and proceed to checkout."
          />
          <FAQItem
            q="What is the delivery time?"
            a="We usually deliver within 24–48 hours of order confirmation."
          />
          <FAQItem
            q="Are the fruits 100% organic?"
            a="Yes, all our fruits are organically grown without harmful chemicals."
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <SectionTitle>Contact Us</SectionTitle>
        <p className="text-forest/70 mt-2">Have a question? Get in touch!</p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-forest/10 py-8 text-center text-forest/60">
        © {new Date().getFullYear()} Organic Fruit Delivery
      </footer>
    </main>
  );
}

/* 🔽 Helper Components 🔽 */

function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-4xl md:text-5xl text-forest tracking-tight">
      {children}
    </h2>
  );
}

function Testimonial({ name, text }) {
  return (
    <div className="border-b border-forest/10 py-6 grid md:grid-cols-[200px_1fr] gap-4">
      <p className="text-forest/70">{name}</p>
      <p className="italic text-forest">“{text}”</p>
    </div>
  );
}

function FeatureCard({ title, img, children }) {
  return (
    <div className="bg-black rounded-md shadow-sm overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-52 object-cover shadow hover:shadow-2xl"
      />
      <div className="p-4 shadow hover:shadow-2xl">
        <h3 className="text-lg font-semibold text-forest">{title}</h3>
        <p className="text-forest/70 text-sm mt-1">{children}</p>
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-forest/10 py-4">
      <button
        className="w-full text-left flex justify-between items-center gap-4"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-lg text-forest">{q}</span>
        <span className="text-forest">{open ? "–" : "+"}</span>
      </button>
      {open && <p className="mt-2 text-forest/70">{a}</p>}
    </div>
  );
}

function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 max-w-3xl">
      <div className="grid md:grid-cols-2 gap-4">
        <input className="input" placeholder="First name *" required />
        <input className="input" placeholder="Last name" />
      </div>
      <input className="input" placeholder="Phone" />
      <input type="email" className="input" placeholder="Email *" required />
      <textarea className="input h-32" placeholder="Write a message" />
      <button className="px-5 py-3 rounded-md bg-forest text-black w-fit border border-forest/20">
        Send
      </button>
    </form>
  );
}
