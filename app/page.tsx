import Image from "next/image";
import AnalyticsButton from "@/components/AnalyticsButton";
import NewsletterSignup from "@/components/NewsletterSignup";
// Server Component (e.g., app/page.tsx)
import MyVideoPlayer from "@/components/MyVideoPlayer";

export default function Home() {
  return (
    <main className="bg-[#fdf8f5] text-gray-900 min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center p-8">
        <h1 className="text-4xl font-bold text-[#8B5E3B] mb-4">
          🌹 Kannauj’s Finest Rose Water 🌿
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Experience the{" "}
          <strong>purest, traditionally distilled rose water</strong> from the
          perfume capital of India—<strong>Kannauj</strong>. Crafted using the{" "}
          <strong>ancient Deg-Bhapka method</strong>, our rose water is{" "}
          <strong>100% natural, chemical-free</strong>, and{" "}
          <strong>luxuriously aromatic</strong>.
        </p>

        {/* Hero Image */}
        <div className="relative w-96 h-96 mx-auto mt-6">
          <Image
            src="/hero-image.jpg"
            alt="Kannauj Rose Water Bottle"
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="rounded-lg shadow-lg object-contain"
            priority
          />
        </div>

        <p className="text-xl font-semibold text-[#8B5E3B] mt-4">
          🌿 <strong>500ml for ₹499 – Limited Introductory Offer!</strong> 🌿
        </p>
        <AnalyticsButton
          href="https://wa.me/918471022070?text=I%20want%20to%20order%20Kannauj%20Rose%20Water"
          className="mt-6 inline-block bg-[#8B5E3B] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#6a442b] transition"
          eventName="order_button_hero"
          eventCategory="Conversion"
          isConversion={true}
        >
          Order Now on WhatsApp
        </AnalyticsButton>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-4xl text-center mt-12 p-6">
        <h2 className="text-2xl font-bold text-[#8B5E3B] mb-4">
          🌿 Why Our Rose Water? 🌿
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Unlike commercial rose waters,{" "}
          <strong>
            we use no artificial fragrances, alcohol, or preservatives
          </strong>
          . Our rose water is <strong>steam-distilled</strong>, making it{" "}
          <strong>pure, hydrating, and therapeutic</strong>.
        </p>
        <ul className="text-gray-700 space-y-3 mt-4">
          <li>
            ✅ <strong>100% Pure & Chemical-Free</strong> – No artificial
            additives.
          </li>
          <li>
            ✅ <strong>Distilled Using Traditional Deg-Bhapka Method</strong> –
            Ensuring the highest quality.
          </li>
          <li>
            ✅ <strong>Multipurpose</strong> – Great for{" "}
            <strong>skincare, haircare, aromatherapy</strong>, and wellness.
          </li>
          <li>
            ✅ <strong>Sustainably Sourced</strong> – Directly from{" "}
            <strong>Kannauj’s heritage farms</strong>.
          </li>
        </ul>
      </section>

      {/* Traditional Process Section */}
      <section className="w-full max-w-2xl text-center p-8 mt-12 rounded-lg shadow-md relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/promo-video.mp4"
            poster="/promo-poster.jpg"
          />
          {/* Semi-transparent overlay for better text visibility */}
          <div className="absolute inset-0 bg-opacity-90 bg-gray-10 "></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-[#8B5E3B] p-2">
            ✨ The Traditional Deg-Bhapka Process ✨
          </h2>
          <p className="text-gray-700 leading-relaxed mt-2 p-4 rounded-md backdrop-blur-sm">
            This <strong>centuries-old method</strong> gently extracts the{" "}
            <strong>finest rose essence</strong> without losing its therapeutic
            properties. Each drop is <strong>handcrafted to perfection</strong>,
            ensuring <strong>rich aroma and skin-enhancing benefits</strong>.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl text-center mt-12 p-6">
        <h2 className="text-2xl font-bold text-[#8B5E3B] mb-4">
          🌸 How to Use Our Rose Water? 🌸
        </h2>
        <ul className="text-gray-700 space-y-3">
          <li>
            💦 <strong>Toner</strong> – Naturally tightens skin & reduces
            inflammation.
          </li>
          <li>
            🛁 <strong>Bath Ritual</strong> – A few drops create a luxurious
            bath experience.
          </li>
          <li>
            💆‍♀️ <strong>Hair Mist</strong> – Hydrates scalp & controls frizz.
          </li>
          <li>
            😌 <strong>Aromatherapy</strong> – Relaxing floral fragrance for
            stress relief.
          </li>
        </ul>
      </section>

      {/* Newsletter Signup Section */}
      <section className="w-full max-w-4xl mt-12 p-6">
        <NewsletterSignup />
      </section>

      {/* Limited Offer Section */}
      <section className="w-full max-w-4xl text-center bg-[#8B5E3B] text-white p-6 mt-12 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">
          ⏳ Limited Introductory Offer – Price Increasing Soon! 🚀
        </h2>
        <p className="text-lg mt-2">
          Get <strong>500ml for ₹499/-</strong> before prices increase to{" "}
          <strong>₹799 → ₹1,299!</strong>
          That’s just <strong>₹100/week</strong> for premium skincare!
        </p>
        <AnalyticsButton
          href="https://wa.me/918471022070?text=I%20want%20to%20order%20Kannauj%20Rose%20Water"
          className="mt-4 inline-block bg-white text-[#8B5E3B] px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
          eventName="order_button_footer"
          eventCategory="Conversion"
          isConversion={true}
        >
          Order Now on WhatsApp
        </AnalyticsButton>
      </section>

      <footer className="w-full max-w-4xl text-center text-gray-600 mt-12 pb-6 text-sm">
        <p>© 2025 Kannauj Rose Water | All Rights Reserved</p>
        <div className="flex justify-center gap-4 mt-3">
          <AnalyticsButton
            href="/privacy"
            className="text-gray-600 hover:text-[#8B5E3B]"
            eventName="footer_privacy_link"
            eventCategory="Navigation"
          >
            Privacy Policy
          </AnalyticsButton>
          <AnalyticsButton
            href="/terms"
            className="text-gray-600 hover:text-[#8B5E3B]"
            eventName="footer_terms_link"
            eventCategory="Navigation"
          >
            Terms of Service
          </AnalyticsButton>
        </div>
      </footer>

      {/* Tracking Pixel - Hidden */}
      <div
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        <Image
          src={`/api/pixel?page=home&t=${Date.now()}`}
          alt=""
          width={1}
          height={1}
          unoptimized
        />
      </div>
    </main>
  );
}
