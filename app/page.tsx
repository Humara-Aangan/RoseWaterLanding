// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#fdf8f5] text-gray-900 min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center p-8">
        <h1 className="text-4xl font-bold text-[#8B5E3B] mb-4">
          Pure Kannauj Rose Water 🌹
        </h1>
        <p className="text-lg text-gray-700">
          Experience **100% natural, traditionally distilled** rose water crafted 
          using the **ancient Deg-Bhapka method** in Kannauj, India.
        </p>
        <Image
          src="/hero-image.jpg"
          alt="Kannauj Rose Water Bottle"
          width={400}
          height={400}
          className="mx-auto my-6 rounded-lg shadow-lg"
        />
        <p className="text-xl font-semibold text-[#8B5E3B]">
          🌿 **500ml for ₹500 – Limited Introductory Offer!** 🌿
        </p>
        <a
          href="https://wa.me/918471022070?text=I%20want%20to%20order%20Kannauj%20Rose%20Water"
          className="mt-6 inline-block bg-[#8B5E3B] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#6a442b] transition"
        >
          Order Now on WhatsApp
        </a>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-4xl text-center mt-12 p-6">
        <h2 className="text-2xl font-bold text-[#8B5E3B] mb-4">
          Why Choose Our Rose Water?
        </h2>
        <ul className="text-gray-700 space-y-3">
          <li>✅ 100% Pure & Chemical-Free</li>
          <li>✅ Distilled Using the **Traditional Deg-Bhapka Method**</li>
          <li>✅ Multipurpose – Skincare, Haircare, & Aromatherapy</li>
          <li>✅ Sustainably Sourced from the Fields of Kannauj</li>
          <li>✅ Limited Introductory Price – Only ₹100 per Week!</li>
        </ul>
      </section>

      {/* Limited Offer Section */}
      <section className="w-full max-w-4xl text-center bg-[#8B5E3B] text-white p-6 mt-12 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">Limited Stock – Price Increasing Soon! ⏳</h2>
        <p className="text-lg mt-2">
          Get **500ml for ₹500** before prices increase to ₹799 → ₹1,299!  
        </p>
        <a
          href="https://wa.me/918471022070?text=I%20want%20to%20order%20Kannauj%20Rose%20Water"
          className="mt-4 inline-block bg-white text-[#8B5E3B] px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
        >
          Grab Yours Now
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-12 text-sm">
        © 2024 Kannauj Rose Water | All Rights Reserved
      </footer>
    </main>
  );
}
