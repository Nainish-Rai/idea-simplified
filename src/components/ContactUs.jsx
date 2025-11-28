import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Linkedin, Clock } from "lucide-react";

import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    company: "",
    message: "",
    phone: "",
    budget: "",
    timeline: "",
  });

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const officesRef = useRef(null);

  // GSAP Animations
  useGSAP(() => {
    // Hero section animation
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    heroTl
      .from("[data-hero-title]", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      })
      .from(
        "[data-hero-subtitle]",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );

    // Form animation
    gsap.from("[data-form-field]", {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });

    // Offices animation
    gsap.from("[data-office-card]", {
      scrollTrigger: {
        trigger: officesRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can add API call or email service integration here
  };

  const offices = [
    {
      country: "India",
      city: "Mumbai",
      address: "1205-06, D.S Galleria, LBS Rd, Mumbai",
      phone: "+91 9711809870",
      email: "india@ideasimplified.in",
      timezone: "IST (GMT +5:30)",
      image: "/img/contact-1.webp",
    },
    {
      country: "UAE",
      city: "Sharjah",
      address: "Sharjah Business Centre, UAE",
      phone: "+971 56 789 3131",
      email: "uae@ideasimplified.in",
      timezone: "GST (GMT +4:00)",
      image: "/img/contact-2.webp",
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our team directly",
      action: "Call us now",
      link: "tel:+919711809870",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed responses to your queries",
      action: "Send an email",
      link: "mailto:info@ideasimplified.in",
    },
    {
      icon: Linkedin,
      title: "Connect on LinkedIn",
      description: "Follow our latest updates and insights",
      action: "Follow us",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding pt-32">
        <div className="container-grid">
          <div className="text-center mb-16">
            <AnimatedTitle
              title="Let's Turn Your <br /> <b>I</b>dea Into <b>R</b>eality"
              className="text-h1 w-full mb-8 text-white"
              data-hero-title
            />
            <p
              data-hero-subtitle
              className="text-body text-xl leading-relaxed max-w-3xl mx-auto text-white/80"
            >
              Ready to simplify your next big idea? We're here to listen,
              understand, and transform your vision into extraordinary
              experiences that captivate and inspire.
            </p>
          </div>

          {/* Quick Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center"
              >
                <method.icon className="text-yellow-300 text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-semibold text-lg mb-2">
                  {method.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {method.description}
                </p>
                <span className="text-yellow-300 text-sm font-medium group-hover:underline">
                  {method.action}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section ref={formRef} className="section-padding">
        <div className="container-grid">
          <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 py-16 px-8 lg:px-16 text-white overflow-hidden">
            {/* Background Images */}
            <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 opacity-20">
              <div className="contact-clip-path-1">
                <img
                  src="/img/contact-1.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="contact-clip-path-2 lg:translate-y-40 translate-y-60">
                <img
                  src="/img/contact-2.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 opacity-10">
              <div className="absolute md:scale-125">
                <img
                  src="/img/swordman-partial.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sword-man-clip-path md:scale-125">
                <img
                  src="/img/swordman.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-h2 font-bold mb-6">
                  Tell Us About Your Project
                </h2>
                <p className="text-body text-white/80">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    data-form-field
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-300/60 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                  <input
                    data-form-field
                    type="email"
                    name="email"
                    placeholder="Work Email*"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-300/60 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    data-form-field
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-300/60 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  />
                  <input
                    data-form-field
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-300/60 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select
                    data-form-field
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:border-yellow-300/60 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">Project Budget</option>
                    <option value="under-50k">Under $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-250k">$100K - $250K</option>
                    <option value="250k-500k">$250K - $500K</option>
                    <option value="above-500k">Above $500K</option>
                  </select>
                  <select
                    data-form-field
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white focus:outline-none focus:border-yellow-300/60 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">Project Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1-3 Months</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="6-12-months">6-12 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <textarea
                  data-form-field
                  name="message"
                  placeholder="Tell us about your project, goals, and what you're looking to achieve...*"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-300/60 focus:bg-white/10 transition-all duration-300 resize-none backdrop-blur-sm"
                  required
                ></textarea>

                <div data-form-field className="text-center">
                  <Button
                    title="Send Message"
                    containerClass="bg-yellow-300 text-black hover:bg-yellow-400 transition-all duration-300 px-12 py-4 rounded-full font-semibold cursor-pointer inline-block"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section ref={officesRef} className="section-padding">
        <div className="container-grid">
          <div className="text-center mb-16">
            <AnimatedTitle
              title="Our <b>G</b>lobal <b>P</b>resence"
              containerClass="mb-8"
            />
            <p className="text-body text-lg max-w-3xl mx-auto text-white/80">
              We have offices strategically located to serve our clients across
              different time zones and markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {offices.map((office, index) => (
              <div
                key={index}
                data-office-card
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-8 backdrop-blur-sm hover:from-white/10 hover:to-white/15 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20 overflow-hidden rounded-bl-3xl">
                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="text-yellow-300 text-xl" />
                    <h3 className="text-xl font-bold text-white">
                      {office.country}{" "}
                      <span className="text-yellow-300">Office</span>
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-white/60 text-sm mt-1 shrink-0" />
                      <p className="text-white/80 leading-relaxed">
                        {office.address}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="text-white/60 text-sm" />
                      <a
                        href={`tel:${office.phone}`}
                        className="text-white/80 hover:text-yellow-300 transition-colors duration-300"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="text-white/60 text-sm" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-white/80 hover:text-yellow-300 transition-colors duration-300"
                      >
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="text-white/60 text-sm" />
                      <p className="text-white/60 text-sm">{office.timezone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-grid">
          <div className="text-center mb-16">
            <AnimatedTitle
              title="Frequently Asked <b>Q</b>uestions"
              containerClass="mb-8"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "What types of projects do you work on?",
                answer:
                  "We specialize in experiential events, brand consulting, C-level conferences, exhibitions, roadshows, hackathons, and comprehensive brand development projects.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on scope and complexity. Small projects may take 4-6 weeks, while large-scale events and comprehensive brand strategies can take 3-6 months or more.",
              },
              {
                question: "Do you work with international clients?",
                answer:
                  "Yes, we have offices in India and UAE, and we work with clients globally. Our team is experienced in managing projects across different time zones and cultural contexts.",
              },
              {
                question: "What's your project process like?",
                answer:
                  "Our process follows our motto: Ideation to Completion. We start with understanding your vision, move through strategic planning, creative development, execution, and post-project analysis.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
              >
                <h4 className="text-white font-semibold text-lg mb-3">
                  {faq.question}
                </h4>
                <p className="text-white/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
