import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Shield,
  Truck,
  Wrench,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-24 md:py-32">
        <Image
          src="/images/landing.jpg"
          alt="Jacuzzi hot tub overlooking a river at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-dark/80" />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Backyard Wellness Sanctuary
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            SLO County&apos;s exclusive Jacuzzi dealer. Experience the perfect
            blend of hot tubs, infrared saunas, and cold plunges for total body
            wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-dark font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg"
            >
              Browse Our Catalog
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-dark transition-all duration-300 text-lg"
            >
              Shop Chemicals
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            Our Product Lines
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover the finest wellness products for your home.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Jacuzzi Hot Tubs */}
            <Link href="/catalog" className="group">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-video">
                  <Image
                    src="/images/BA1_9096.jpg"
                    alt="Jacuzzi hot tub showroom display"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Jacuzzi Hot Tubs
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Targeted hydrotherapy with PowerPro jets. Soothe sore muscles
                    and promote blood circulation.
                  </p>
                  <span className="inline-flex items-center gap-1 text-secondary font-semibold group-hover:gap-2 transition-all duration-300">
                    Explore Hot Tubs <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Clearlight Infrared Saunas */}
            <Link href="/catalog" className="group">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-video">
                  <Image
                    src="/images/products/SaunaShow.jpg"
                    alt="Clearlight infrared sauna showroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Clearlight Infrared Saunas
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The only true Full Spectrum infrared saunas available. Detoxify
                    and rejuvenate.
                  </p>
                  <span className="inline-flex items-center gap-1 text-secondary font-semibold group-hover:gap-2 transition-all duration-300">
                    Explore Saunas <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Cold Plunges */}
            <Link href="/catalog" className="group">
              <div className="bg-white rounded-2xl shadow-md overflow-hidden text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-video">
                  <Image
                    src="/images/products/AvanShow.jpg"
                    alt="Avantikul cold plunge showroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Cold Plunges
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Avantik&uuml;l cold hydrotherapy systems. Revitalize your body
                    and mind.
                  </p>
                  <span className="inline-flex items-center gap-1 text-secondary font-semibold group-hover:gap-2 transition-all duration-300">
                    Explore Cold Plunges <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose SLO Spas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            Why Choose SLO Spas
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Trusted by families across the Central Coast for over two decades.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 20+ Years Experience */}
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary bg-opacity-20 rounded-full mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                20+ Years Experience
              </h3>
              <p className="text-gray-600">
                Founded with decades of industry expertise, we bring unmatched
                knowledge and a commitment to quality that only comes with years
                of dedicated service.
              </p>
            </div>

            {/* Professional Installation */}
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary bg-opacity-20 rounded-full mb-6">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Professional Installation
              </h3>
              <p className="text-gray-600">
                Expert installation and removal services ensure your spa is set
                up safely and efficiently, so you can start enjoying it right
                away without any hassle.
              </p>
            </div>

            {/* Technical Service */}
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary bg-opacity-20 rounded-full mb-6">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Technical Service
              </h3>
              <p className="text-gray-600">
                Ongoing maintenance and repair support from certified technicians
                who keep your investment running at peak performance year after
                year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear from real customers who love their SLO Spas experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;21 years of great experience! When our first tub finally
                expired after 21 years, we only called this one
                retailer.&rdquo;
              </p>
              <p className="font-semibold text-primary">Beth and Jim</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;This could not have been a better experience. I did a lot
                of research and I am so glad I picked this team.&rdquo;
              </p>
              <p className="font-semibold text-primary">Lanny</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;Bought two hot tubs from them. Always had great support
                and very knowledgeable people.&rdquo;
              </p>
              <p className="font-semibold text-primary">Damone Faraday</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:text-secondary transition-colors duration-300"
            >
              Read All Reviews
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="relative py-16 text-white">
        <Image
          src="/images/cabinets2.jpg"
          alt="Beautiful spa scene"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-dark/85" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Backyard?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Let our team help you create the perfect wellness retreat at home.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-dark font-semibold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:8055443565"
              className="text-lg font-semibold hover:text-secondary transition-colors duration-300"
            >
              Call (805) 544-3565
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
