import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Footer from "./Footer";
import {
  ArrowUpRight,
  Play,
  Users,
  Calendar,
  Trophy,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { GalleryEvent } from "./EventGallery";
import { Logos10 } from "./LogosSection";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  video?: string;
  description: string;
  year: string;
  client: string;
  services: string[];
  results?: {
    attendees?: string;
    speakers?: string;
    exhibits?: string;
    startups?: string;
    hours?: string;
    roi?: string;
    engagement?: string;
  };
  featured?: boolean;
  theme?: string;
  overview?: string;
  gallery?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const projects: Project[] = [
  {
    id: "fintech-fusion-2025",
    title: "Fintech Fusion India 2025",
    category: "Experiential Events",
    image: "/img/e1.png",
    video: "/videos/execution.mp4",
    description:
      "A landmark event in Bengaluru for visionaries, regulators, and changemakers to shape the future of finance through collaboration.",
    theme: "Cohesive Innovation: Connecting Fintech Leaders and Innovators",
    overview:
      "A landmark event in Bengaluru for visionaries, regulators, and changemakers to shape the future of finance through collaboration.",
    year: "2025",
    client: "Industry Leaders Collective",
    services: [
      "Event IP Development",
      "Strategic Ideation & Event Architecture",
      "End-to-End Production & Operations",
    ],
    results: {
      attendees: "800+",
      speakers: "70+",
      exhibits: "20+",
      startups: "40+",
      hours: "50+",
    },
    gallery: ["/img/f1.png", "/img/f2.png", "/img/f3.png", "/img/f4.png"],
    testimonial: {
      quote:
        "The event exceeded all expectations. The networking opportunities were unparalleled, and the production quality was world-class.",
      author: "Rajesh Kumar",
      position: "CEO, TechFin Solutions",
    },
    featured: true,
  },
  {
    id: "turnkey-exhibition-showcase",
    title: "Turn key Exhibition Design Showcase",
    category: "Turn key Exhibition Design",
    image: "/img/e2.png",
    video: "/videos/execution.mp4",
    description:
      "High-impact, theme-based exhibition booths that attract, engage, and leave lasting impressions at major trade shows.",
    overview:
      "We design and execute high-impact, theme-based exhibition booths that attract, engage, and leave a lasting impression at major trade shows.",
    year: "2024",
    client: "Multiple Industry Leaders",
    services: [
      "Theme-based immersive booth concepts",
      "Interactive tech integration (lighting, touchscreens, AR/VR)",
      "High-impact LED walls for brand storytelling",
      "End-to-end management from idea to installation",
    ],
    results: {
      exhibits: "25+",
      engagement: "400% increase in booth traffic",
    },
    gallery: ["/img/t1.png", "/img/t2.png", "/img/t3.png", "/img/t4.png"],
    testimonial: {
      quote:
        "Our booth became the talk of the exhibition. The immersive experience created by Idea Simplified drove unprecedented engagement.",
      author: "Priya Sharma",
      position: "Marketing Director, Amara Raja",
    },
    featured: true,
  },
  {
    id: "brand-consulting-showcase",
    title: "Building Standout Brands from Strategy to Execution",
    category: "Brand Consulting & Creatives",
    image: "/img/e3.webp",
    video: "/videos/execution.mp4",
    description:
      "Strategic partnership for brands, crafting foundational strategies and integrated marketing campaigns that connect and convert.",
    overview:
      "We serve as a strategic partner for brands, crafting foundational strategies and integrated marketing campaigns that connect and convert.",
    year: "2024",
    client: "Premium Brand Portfolio",
    services: [
      "Brand audit and guidelines playbook development",
      "Integrated marketing strategy & campaign planning",
      "Digital-first creative, content, and ad rollouts",
      "On-ground visibility drives & ATL/BTL activations",
    ],
    results: {
      roi: "250% average brand engagement increase",
      engagement: "180% boost in conversion rates",
    },
    gallery: ["/img/b1.png", "/img/b2.png", "/img/b3.png", "/img/b4.png"],
    testimonial: {
      quote:
        "Idea Simplified transformed our brand identity and market positioning. The results speak for themselves - record growth across all metrics.",
      author: "Amit Patel",
      position: "Brand Director, HDFC Bank",
    },
    featured: true,
  },
];

const categories = [
  { id: "all", name: "All", count: projects.length },
  {
    id: "experiential-events",
    name: "Experiential Events",
    count: projects.filter((p) => p.category === "Experiential Events").length,
  },
  {
    id: "turnkey-exhibition",
    name: "Turnkey Exhibition Design",
    count: projects.filter((p) => p.category === "Turnkey Exhibition Design")
      .length,
  },
  {
    id: "brand-consulting",
    name: "Brand Consulting & Creatives",
    count: projects.filter((p) => p.category === "Brand Consulting & Creatives")
      .length,
  },
];

const featuredClients = [
  "Amara Raja",
  "Nayara Energy",
  "Jindal Shadeed",
  "India's Ministry of Defence",
  "HDFC Bank",
  "UpGrad",
  "TATA AIA Life Insurance",
  "Havells",
];

const ProjectCard: React.FC<{
  project: Project;
  index: number;
  onClick: () => void;
}> = ({ project, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer ${
        project.featured ? "md:col-span-3 md:row-span-3" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        )
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />{" "}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
        {/* Top Section */}
        <div className="flex items-start justify-between">
          <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
            <span className="text-xs font-medium text-white/90">
              {project.category}
            </span>
          </div>
          <motion.div
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4">
          <div className="w-full">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs text-white/60">
              <span>{project.client}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            {project.results && (
              <div className="flex items-center gap-2 text-xs text-yellow-300">
                <Trophy className="w-3 h-3" />
                <span>View Case Study</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudySection: React.FC<{
  project: Project;
  onClose: () => void;
}> = ({ project, onClose }) => {
  const caseStudyRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      caseStudyRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "easeOut" }
    );
  }, []);

  return (
    <motion.div
      ref={caseStudyRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-24 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="container-grid">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-yellow-300/20 px-4 py-2 rounded-full border border-yellow-300/30">
                <span className="text-yellow-300 text-sm font-medium">
                  {project.category}
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <span className="text-sm">Back to Gallery</span>
              </button>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            {project.theme && (
              <h2 className="text-xl md:text-2xl text-yellow-300 mb-8 font-medium">
                Theme: {project.theme}
              </h2>
            )}
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              {project.overview || project.description}
            </p>
          </div>

          {/* Hero Image/Video */}
          <div className="relative mb-16 rounded-3xl overflow-hidden border border-white/10">
            <div className="aspect-video">
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Services and Results */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Services Rendered */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-300" />
                Services Rendered
              </h3>
              <ul className="space-y-4">
                {project.services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mt-2 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Results */}
            {project.results && (
              <div className="bg-gradient-to-br from-violet-900/20 to-blue-900/20 rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-yellow-300" />
                  Key Results
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">
                        {value}
                      </div>
                      <div className="text-white/70 text-sm capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Visual Gallery */}
          {project.gallery && (
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Visual Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-2xl overflow-hidden border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-64 md:h-80 object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-white/10 text-center">
              <div className="text-6xl md:text-8xl text-yellow-300/20 mb-6">
                "
              </div>
              <blockquote className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed italic">
                {project.testimonial.quote}
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div>
                  <div className="text-yellow-300 font-bold">
                    {project.testimonial.author}
                  </div>
                  <div className="text-white/60 text-sm">
                    {project.testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const OurWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
        ease: "easeOut",
      })
      .from(
        "[data-hero-subtitle]",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "easeOut",
        },
        "-=0.6"
      );
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    // Scroll to case study section
    setTimeout(() => {
      document.getElementById("case-study-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <GalleryEvent />

      {/* Section Heading */}
      <section className="py-16 bg-black">
        <div className="container-grid">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-yellow-300">Work</span>
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects that showcase our
              expertise in experiential events, exhibition design, and brand
              consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 bg-black">
        <div className="container-grid">
          <motion.div
            ref={gridRef}
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Every project we've delivered started with a conversation. Let's
              discuss how we can bring your vision to life with precision and
              impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                title="Start Your Project"
                containerClass="bg-yellow-300 text-black hover:bg-yellow-400 transition-all duration-300 px-8 py-4"
              />
              <Button
                title="Schedule a Call"
                containerClass="bg-white/10 text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/50 px-8 py-4"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      {selectedProject && (
        <section id="case-study-section">
          <CaseStudySection
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </section>
      )}

      {/* Featured Clients Section */}
      <section className="py-24 bg-gradient-to-br from-violet-900/20 to-blue-900/20">
        <div className="container-grid">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by{" "}
              <span className="text-yellow-300">Industry Leaders</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our portfolio includes partnerships with some of the most
              respected names across industries.
            </p>
          </div>

          <div className="grid w-full gap-8 mb-16">
            <Logos10 />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Total Attendees", icon: Users },
              { number: "150+", label: "Expert Speakers", icon: Users },
              { number: "60+", label: "Exhibition Booths", icon: Trophy },
              { number: "24/7", label: "Project Support", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <stat.icon className="w-6 h-6 text-yellow-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OurWork;
