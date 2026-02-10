import Link from "next/link";
import Image from "next/image";
import {
  Droplets,
  Sun,
  Snowflake,
  Users,
  Waves,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Catalog | SLO Spas",
  description:
    "Browse the full SLO Spas product catalog featuring Jacuzzi hot tubs, Clearlight infrared saunas, and cold plunges. Find pricing, specs, and the perfect addition to your home.",
};

const jacuzziProducts = [
  {
    name: "J-200 Series",
    priceRange: "$7,500 - $9,000",
    description:
      "Quality and value meld in the 200 series. Built with superior materials for years of enjoyment.",
    capacity: "4-6 seats",
    image: "/images/products/J200-series.png",
  },
  {
    name: "J-300 Series",
    priceRange: "$8,000 - $12,000",
    description:
      "3-8 seating with semi-lounge and upright options. Perfect balance of comfort and hydrotherapy.",
    capacity: "3-8 seats",
    image: "/images/products/J300-series.png",
  },
  {
    name: "J-400 Series",
    priceRange: "$9,000 - $15,000",
    description:
      "Premium line with 5-9 seating for optimal hydrotherapy. Top-tier jets and features.",
    capacity: "5-9 seats",
    image: "/images/products/J400-series.png",
  },
  {
    name: "Swim Spa Series",
    priceRange: "$15,000 - $30,000",
    description:
      "High-performance aquatic systems with PowerPro jets. Swim, exercise, and relax.",
    capacity: "Various",
    image: "/images/products/SwimSpa-series.png",
  },
];

const saunaProducts = [
  {
    name: "Premier IS-2",
    priceRange: "$3,500 - $7,000",
    description:
      "Entry-level model with classic sauna design. True infrared heating technology.",
    capacity: "2 person",
    image: "/images/products/CL-IS2.png",
  },
  {
    name: "Sanctuary 2",
    priceRange: "$3,500 - $10,000",
    description:
      "Indoor luxury model with TrueWave Full Spectrum heating. Premium craftsmanship.",
    capacity: "2 person",
    image: "/images/products/CL-Sanctuary-2.png",
  },
  {
    name: "Outdoor Sanctuary 5",
    priceRange: "$8,000 - $15,000",
    description:
      "The only true Full Spectrum infrared sauna for outdoor use. Ultimate relaxation.",
    capacity: "5 person",
    image: "/images/products/CL-OD.png",
  },
];

const coldPlungeProducts = [
  {
    name: "Avantik\u00FCl",
    priceRange: "$4,000 - $8,000",
    description:
      "Cold hydrotherapy system for revitalization. Boost recovery and invigorate your body.",
    capacity: "1-2 person",
    image: "/images/products/Avantikul.jpg",
  },
];

interface Product {
  name: string;
  priceRange: string;
  description: string;
  capacity: string;
  image: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden rounded-t-xl bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
        <p className="text-secondary font-semibold text-lg mb-3">
          {product.priceRange}
        </p>
        <p className="text-muted mb-4">{product.description}</p>
        <span className="inline-flex items-center gap-1.5 bg-light text-primary text-sm font-medium px-3 py-1 rounded-full">
          <Users className="w-4 h-4" />
          {product.capacity}
        </span>
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Page Header */}
      <section className="relative bg-dark text-white py-20 text-center overflow-hidden">
        <Image
          src="/images/landing.jpg"
          alt="SLO Spas showroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Product Catalog
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Explore our premium selection of hot tubs, saunas, and cold plunges
            designed to elevate your wellness routine.
          </p>
        </div>
      </section>

      {/* Jacuzzi Hot Tubs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-xl">
              <Droplets className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">
                Jacuzzi Hot Tubs
              </h2>
              <div className="h-1 w-20 bg-blue-500 rounded mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jacuzziProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Clearlight Infrared Saunas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-amber-100 text-amber-700 p-3 rounded-xl">
              <Sun className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">
                Clearlight Infrared Saunas
              </h2>
              <div className="h-1 w-20 bg-amber-500 rounded mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saunaProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Cold Plunges */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-cyan-100 text-cyan-700 p-3 rounded-xl">
              <Snowflake className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">Cold Plunges</h2>
              <div className="h-1 w-20 bg-cyan-500 rounded mt-1" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coldPlungeProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Waves className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <p className="text-lg md:text-xl mb-8">
            Interested in any of our products? Visit our showroom or contact us
            for a personalized quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
