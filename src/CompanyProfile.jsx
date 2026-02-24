import { motion } from "framer-motion";
import { useState } from "react";

export default function CompanyProfile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-5xl w-full rounded-xl shadow-2xl"
          />
        </div>
      )}

      <div className="bg-black text-white scroll-smooth font-[Poppins]">
        {/* NAVBAR */}
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* LOGO */}
            <h1
              className="text-xl tracking-widest text-amber-400"
              style={{ fontFamily: "Playfair Display" }}
            >
              THE BARBER
            </h1>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#home" className="hover:text-amber-400 transition">
                Home
              </a>
              <a href="#about" className="hover:text-amber-400 transition">
                About
              </a>
              <a href="#services" className="hover:text-amber-400 transition">
                Services
              </a>
              <a href="#gallery" className="hover:text-amber-400 transition">
                Gallery
              </a>
              <a href="#contact" className="hover:text-amber-400 transition">
                Contact
              </a>
            </div>

            {/* HAMBURGER BUTTON */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div className="md:hidden bg-black/95 backdrop-blur-md px-6 pb-6 space-y-4 text-sm border-t border-white/10 animate-fadeIn">
              <a href="#home" onClick={() => setOpen(false)}>
                Home
              </a>
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
              <a href="#services" onClick={() => setOpen(false)}>
                Services
              </a>
              <a href="#gallery" onClick={() => setOpen(false)}>
                Gallery
              </a>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </div>
          )}
        </nav>
        {/* HERO */}
        <section id="home" className="relative h-screen">
          <img
            src="/barber.jpg"
            className="w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/80"></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl leading-normal pb-2 
              bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 
              bg-clip-text text-transparent 
              drop-shadow-[0_0_25px_rgba(251,191,36,0.4)]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Upgrade Your Style
            </motion.h1>

            <p className="mt-4 text-gray-300 max-w-xl text-lg tracking-wide">
              Look sharp. Feel confident. Experience premium grooming like never
              before.
            </p>

            <a
              href="https://wa.me/6285162942968"
              className="mt-8 bg-amber-500 text-black px-8 py-3 rounded-full 
              hover:scale-105 hover:bg-amber-400 transition shadow-lg font-semibold tracking-wide"
            >
              Booking Sekarang
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="py-24 px-6 max-w-5xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl mb-6 
            bg-gradient-to-r from-amber-300 to-yellow-500 
            bg-clip-text text-transparent"
            style={{ fontFamily: "Playfair Display" }}
          >
            Tentang Kami
          </motion.h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            The Barber menghadirkan pengalaman grooming premium dengan standar
            profesional. Kami mengutamakan kualitas, kenyamanan, dan detail
            untuk memberikan hasil terbaik.
          </p>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-24 px-6 bg-gray-950">
          <h2
            className="text-4xl text-center mb-12 
            bg-gradient-to-r from-amber-300 to-yellow-500 
            bg-clip-text text-transparent"
            style={{ fontFamily: "Playfair Display" }}
          >
            Layanan Kami
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {["Potong Rambut", "Cukur Jenggot", "Hair Styling"].map(
              (item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 
                hover:scale-105 hover:shadow-2xl hover:border-amber-400/40 transition"
                >
                  <h3 className="text-xl text-amber-300 mb-2 font-semibold">
                    {item}
                  </h3>
                  <p className="text-gray-400">
                    Layanan profesional dengan hasil maksimal
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="py-24 px-6">
          <h2
            className="text-4xl text-center mb-12 
            bg-gradient-to-r from-amber-300 to-yellow-500 
            bg-clip-text text-transparent"
            style={{ fontFamily: "Playfair Display" }}
          >
            Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {["/barber1.jpg", "/barber2.jpg", "/barber3.jpg"].map(
              (img, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer group"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img}
                    className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white rounded-xl transition">
                    View
                  </div>
                </div>
              ),
            )}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 text-center bg-black">
          <h2
            className="text-2xl mb-4 text-amber-400"
            style={{ fontFamily: "Playfair Display" }}
          >
            Contact
          </h2>

          <p className="text-gray-400">WhatsApp: 085162942968</p>
          <p className="text-gray-400">Email: jovipratama@gmail.com</p>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-4 text-gray-500 text-sm border-t border-white/10">
          © 2026 Jovi Pratama
        </footer>
      </div>
    </>
  );
}
