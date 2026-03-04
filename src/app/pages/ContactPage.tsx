import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Copy, Check, Send, Phone, Mail } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { cars } from '../components/carData';

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselectedCar = searchParams.get('auto') || '';

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    naam: '',
    telefoon: '',
    email: '',
    auto: preselectedCar,
    periode: '',
    bericht: '',
  });

  useEffect(() => {
    if (preselectedCar) {
      setForm((prev) => ({ ...prev, auto: preselectedCar }));
    }
  }, [preselectedCar]);

  const handleCopySnapchat = () => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = 'rapidcarss';
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
    } catch {
      setCopied(true);
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    form.auto
      ? `Hi RapidCars, ik wil graag beschikbaarheid checken voor de ${form.auto}. Kunnen jullie mij helpen?`
      : `Hi RapidCars, ik wil graag meer informatie over jullie auto's. Kunnen jullie mij helpen?`
  );
  const whatsappUrl = `https://wa.me/31683851363?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[12px] tracking-[0.2em] uppercase text-[#7A1C1C] mb-5"
            style={{ fontWeight: 600 }}
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.25rem,5vw,4rem)] text-[#0A0A0A] tracking-[-0.03em] mb-5"
            style={{ fontWeight: 600, lineHeight: 1.1 }}
          >
            Neem contact op
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#4A4A4A] max-w-[520px]"
            style={{ fontWeight: 400, fontSize: '16px', lineHeight: 1.7 }}
          >
            Wil je beschikbaarheid checken of heb je een vraag? Het snelst bereiken 
            doe je via WhatsApp. Liever een formulier? Kan ook.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — Quick Contact */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2
                  className="text-[#0A0A0A] mb-8"
                  style={{ fontWeight: 600, fontSize: '20px', letterSpacing: '-0.01em' }}
                >
                  Snel contact
                </h2>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full bg-[#25D366] text-white px-6 py-5 mb-4 hover:bg-[#20BD5A] transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
                  <div className="flex-1">
                    <span
                      className="block text-white"
                      style={{ fontWeight: 600, fontSize: '15px' }}
                    >
                      WhatsApp
                    </span>
                    <span
                      className="block text-white/80"
                      style={{ fontWeight: 400, fontSize: '13px' }}
                    >
                      Snelste manier — direct chatten
                    </span>
                  </div>
                </a>

                {/* Snapchat */}
                <button
                  onClick={handleCopySnapchat}
                  className="flex items-center gap-4 w-full bg-[#FFFC00] text-[#0A0A0A] px-6 py-5 mb-4 hover:bg-[#F5F200] transition-colors duration-300 text-left"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.188.06-.016.12-.036.18-.06.18-.06.36-.09.51-.09.18 0 .36.06.48.12.18.12.3.27.36.48.09.21.06.48-.09.72-.06.12-.18.21-.33.33a4.86 4.86 0 0 1-.72.39 6.07 6.07 0 0 1-.84.27c-.12.03-.24.06-.33.09-.3.09-.39.18-.45.27.06.12.18.3.33.48.03.06.09.12.12.18.93 1.32 2.1 2.29 3.51 2.88.03.018.12.054.21.084.18.06.42.15.45.39.06.27-.15.51-.48.69-.69.33-1.56.57-2.4.66a.93.93 0 0 0-.21.06c-.09.06-.12.18-.15.36-.02.06-.03.12-.06.18-.09.27-.27.48-.72.48-.18 0-.39-.03-.63-.06a6.04 6.04 0 0 0-1.08-.12c-.36 0-.66.06-1.05.18-.48.18-1.02.48-1.71.84a6.5 6.5 0 0 1-2.88.78c-.06 0-.12 0-.18-.006h-.12a6.55 6.55 0 0 1-2.88-.78c-.69-.36-1.23-.66-1.74-.84-.36-.12-.69-.18-1.05-.18-.42 0-.78.06-1.08.12-.24.03-.45.06-.63.06-.42 0-.63-.18-.72-.48-.03-.06-.03-.12-.06-.18-.03-.18-.06-.3-.15-.36a.93.93 0 0 0-.21-.06c-.84-.09-1.74-.33-2.4-.66-.36-.18-.54-.42-.48-.69.03-.24.27-.33.45-.39.09-.03.18-.06.21-.084 1.41-.59 2.58-1.56 3.51-2.88.03-.06.09-.12.12-.18.15-.18.27-.36.33-.48-.06-.09-.15-.18-.45-.27a2.6 2.6 0 0 0-.33-.09c-.27-.06-.57-.15-.87-.27a5.62 5.62 0 0 1-.69-.39c-.15-.12-.27-.21-.33-.33-.15-.24-.18-.51-.09-.72.06-.21.18-.36.36-.48.12-.06.3-.12.48-.12.15 0 .33.03.51.09.06.024.12.04.18.06.27.06.63.18.93.18.18 0 .3-.03.39-.09-.006-.15-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.3-4.848C7.86 1.069 11.216.793 12.206.793Z" />
                  </svg>
                  <div className="flex-1">
                    <span
                      className="block"
                      style={{ fontWeight: 600, fontSize: '15px' }}
                    >
                      Snapchat: rapidcarss
                    </span>
                    <span
                      className="block text-[#0A0A0A]/60"
                      style={{ fontWeight: 400, fontSize: '13px' }}
                    >
                      {copied ? 'Gekopieerd!' : 'Klik om gebruikersnaam te kopieren'}
                    </span>
                  </div>
                  {copied ? (
                    <Check className="w-4 h-4 text-[#25D366] flex-shrink-0" strokeWidth={2} />
                  ) : (
                    <Copy className="w-4 h-4 text-[#0A0A0A]/40 flex-shrink-0" strokeWidth={1.5} />
                  )}
                </button>

                {/* Other contact info */}
                <div className="mt-10 space-y-5">
                  <h3
                    className="text-[#0A0A0A] mb-4"
                    style={{ fontWeight: 600, fontSize: '15px' }}
                  >
                    Overige contactgegevens
                  </h3>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#9A9A9A]" strokeWidth={1.5} />
                    <span
                      className="text-[#4A4A4A]"
                      style={{ fontWeight: 400, fontSize: '14px' }}
                    >
                      +31 6 83851363
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#9A9A9A]" strokeWidth={1.5} />
                    <span
                      className="text-[#4A4A4A]"
                      style={{ fontWeight: 400, fontSize: '14px' }}
                    >
                      info@rapidcars.nl
                    </span>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-[#EBEBEB]">
                  <p
                    className="text-[#9A9A9A]"
                    style={{ fontWeight: 400, fontSize: '13px', lineHeight: 1.6 }}
                  >
                    We reageren altijd binnen een paar uur. 
                    Ma-Vr 08:00-20:00, Za-Zo 09:00-18:00. 
                    Spoed? 24/7 bereikbaar.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2
                  className="text-[#0A0A0A] mb-8"
                  style={{ fontWeight: 600, fontSize: '20px', letterSpacing: '-0.01em' }}
                >
                  Aanvraagformulier
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-[#F7F7F7] p-10 lg:p-14 text-center"
                  >
                    <div className="w-14 h-14 bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-7 h-7 text-[#25D366]" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="text-[#0A0A0A] mb-3"
                      style={{ fontWeight: 600, fontSize: '22px', letterSpacing: '-0.01em' }}
                    >
                      Aanvraag verstuurd
                    </h3>
                    <p
                      className="text-[#4A4A4A] max-w-[380px] mx-auto"
                      style={{ fontWeight: 400, fontSize: '15px', lineHeight: 1.6 }}
                    >
                      Bedankt voor je aanvraag! We nemen zo snel mogelijk contact met je op. 
                      Meestal binnen een paar uur.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block text-[#0A0A0A] mb-2"
                          style={{ fontWeight: 500, fontSize: '13px' }}
                        >
                          Naam *
                        </label>
                        <input
                          type="text"
                          name="naam"
                          value={form.naam}
                          onChange={handleChange}
                          required
                          placeholder="Je naam"
                          className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#E8E8E8] text-[#0A0A0A] placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#0A0A0A] transition-colors duration-300"
                          style={{ fontWeight: 400, fontSize: '14px' }}
                        />
                      </div>
                      <div>
                        <label
                          className="block text-[#0A0A0A] mb-2"
                          style={{ fontWeight: 500, fontSize: '13px' }}
                        >
                          Telefoonnummer *
                        </label>
                        <input
                          type="tel"
                          name="telefoon"
                          value={form.telefoon}
                          onChange={handleChange}
                          required
                          placeholder="06 12 34 56 78"
                          className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#E8E8E8] text-[#0A0A0A] placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#0A0A0A] transition-colors duration-300"
                          style={{ fontWeight: 400, fontSize: '14px' }}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className="block text-[#0A0A0A] mb-2"
                        style={{ fontWeight: 500, fontSize: '13px' }}
                      >
                        E-mailadres
                        <span className="text-[#9A9A9A] ml-1" style={{ fontWeight: 400 }}>(optioneel)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="je@email.nl"
                        className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#E8E8E8] text-[#0A0A0A] placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#0A0A0A] transition-colors duration-300"
                        style={{ fontWeight: 400, fontSize: '14px' }}
                      />
                    </div>

                    {/* Car + Period */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block text-[#0A0A0A] mb-2"
                          style={{ fontWeight: 500, fontSize: '13px' }}
                        >
                          Auto
                        </label>
                        <select
                          name="auto"
                          value={form.auto}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#E8E8E8] text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A] transition-colors duration-300 appearance-none"
                          style={{ fontWeight: 400, fontSize: '14px' }}
                        >
                          <option value="">Selecteer een auto</option>
                          {cars.map((car) => (
                            <option key={car.id} value={car.name}>
                              {car.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          className="block text-[#0A0A0A] mb-2"
                          style={{ fontWeight: 500, fontSize: '13px' }}
                        >
                          Gewenste periode
                        </label>
                        <input
                          type="text"
                          name="periode"
                          value={form.periode}
                          onChange={handleChange}
                          placeholder="Bijv. 15-20 maart"
                          className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#E8E8E8] text-[#0A0A0A] placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#0A0A0A] transition-colors duration-300"
                          style={{ fontWeight: 400, fontSize: '14px' }}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        className="block text-[#0A0A0A] mb-2"
                        style={{ fontWeight: 500, fontSize: '13px' }}
                      >
                        Bericht
                        <span className="text-[#9A9A9A] ml-1" style={{ fontWeight: 400 }}>(optioneel)</span>
                      </label>
                      <textarea
                        name="bericht"
                        value={form.bericht}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Heb je specifieke wensen of vragen?"
                        className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#E8E8E8] text-[#0A0A0A] placeholder:text-[#B0B0B0] focus:outline-none focus:border-[#0A0A0A] transition-colors duration-300 resize-none"
                        style={{ fontWeight: 400, fontSize: '14px' }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-[#7A1C1C] text-white px-10 py-4 text-[14px] tracking-[0.04em] uppercase hover:bg-[#651717] transition-colors duration-300"
                      style={{ fontWeight: 500 }}
                    >
                      <Send className="w-4 h-4" strokeWidth={1.5} />
                      Verstuur aanvraag
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}