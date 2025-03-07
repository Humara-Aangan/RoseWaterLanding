import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#fdf8f5] text-gray-900 min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-4xl text-center p-8">
        <h1 className="text-4xl font-bold text-[#8B5E3B] mb-4">
          🌹 Kannauj’s Finest Rose Water 🌿
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Experience the **purest, traditionally distilled rose water** from the perfume capital of India—**Kannauj**.  
          Crafted using the **ancient Deg-Bhapka method**, our rose water is **100% natural, chemical-free**, and **luxuriously aromatic**.
        </p>

        {/* Hero Image */}
        <div className="relative w-96 h-96 mx-auto mt-6">
          <Image
            src="/hero-image.jpg"
            alt="Kannauj Rose Water Bottle"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
          />
        </div>

        <p className="text-xl font-semibold text-[#8B5E3B] mt-4">
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
        <h2 className="text-2xl font-bold text-[#8B5E3B] mb-4">🌿 Why Our Rose Water? 🌿</h2>
        <p className="text-gray-700 leading-relaxed">
          Unlike commercial rose waters, **we use no artificial fragrances, alcohol, or preservatives**.  
          Our rose water is **steam-distilled**, making it **pure, hydrating, and therapeutic**.
        </p>
        <ul className="text-gray-700 space-y-3 mt-4">
          <li>✅ **100% Pure & Chemical-Free** – No artificial additives.</li>
          <li>✅ **Distilled Using Traditional Deg-Bhapka Method** – Ensuring the highest quality.</li>
          <li>✅ **Multipurpose** – Great for **skincare, haircare, aromatherapy**, and wellness.</li>
          <li>✅ **Sustainably Sourced** – Directly from **Kannauj’s heritage farms**.</li>
        </ul>
      </section>

      {/* Traditional Process Section */}
      <section className="w-full max-w-4xl text-center bg-[#f8ebe6] p-8 mt-12 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[#8B5E3B]">✨ The Traditional Deg-Bhapka Process ✨</h2>
        <p className="text-gray-700 leading-relaxed mt-2">
          This **centuries-old method** gently extracts the **finest rose essence** without losing its therapeutic properties.  
          Each drop is **handcrafted to perfection**, ensuring **rich aroma and skin-enhancing benefits**.
        </p>
        {/* Process Image */}
        <div className="relative w-80 h-80 mx-auto mt-6">
          <Image
            src="/process.jpg"
            alt="Traditional Deg-Bhapka Distillation"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl text-center mt-12 p-6">
        <h2 className="text-2xl font-bold text-[#8B5E3B] mb-4">🌸 How to Use Our Rose Water? 🌸</h2>
        <ul className="text-gray-700 space-y-3">
          <li>💦 **Toner** – Naturally tightens skin & reduces inflammation.</li>
          <li>🛁 **Bath Ritual** – A few drops create a luxurious bath experience.</li>
          <li>💆‍♀️ **Hair Mist** – Hydrates scalp & controls frizz.</li>
          <li>😌 **Aromatherapy** – Relaxing floral fragrance for stress relief.</li>
        </ul>
      </section>

      {/* Limited Offer Section */}
      <section className="w-full max-w-4xl text-center bg-[#8B5E3B] text-white p-6 mt-12 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold">⏳ Limited Introductory Offer – Price Increasing Soon! 🚀</h2>
        <p className="text-lg mt-2">
          Get **500ml for ₹500** before prices increase to **₹799 → ₹1,299!**  
          That’s just **₹100/week for premium skincare!**
        </p>
        <a
          href="https://wa.me/918471022070?text=I%20want%20to%20order%20Kannauj%20Rose%20Water"
          className="mt-4 inline-block bg-white text-[#8B5E3B] px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition"
        >
          Order Now on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 mt-12 text-sm">
        © 2024 Kannauj Rose Water | All Rights Reserved
      </footer>
    </main>
  );
}
