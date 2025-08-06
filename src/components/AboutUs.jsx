import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import VideoPreview from "./VideoPreview";
import Footer from "./Footer";
import { OurApproach } from "./OurApproach";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const [activeService, setActiveService] = useState(null);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);

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
      .from("[data-hero-subtitle]", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      })
      .from(
        "[data-hero-description]",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // Story section animation
    const storyTl = gsap.timeline({
      scrollTrigger: {
        trigger: storyRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    storyTl.to("[data-story-image]", {
      scale: 1.1,
      duration: 1,
      ease: "power2.out",
    });

    // Services cards animation
    gsap.from("[data-service-card]", {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Team section animation
    gsap.from("[data-team-member]", {
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    });
  });

  const services = [
    {
      id: "experiential",
      title: "Experiential Events",
      description:
        "We create immersive experiences that captivate audiences, foster connections, and drive business growth through conferences, exhibitions, and cutting-edge events.",
      features: [
        "C-level conferences & roundtables",
        "Global exhibitions & roadshows",
        "Business matchmaking events",
        "Hackathons & startup connects",
        "Industry whitepapers & playbooks",
      ],
      video: "/videos/feature-1.mp4",
    },
    {
      id: "consulting",
      title: "Brand Consulting",
      description:
        "Strategic brand development that creates credible platforms bringing together thought leaders, policymakers, startups, and academia as a cohesive innovation unit.",
      features: [
        "Brand strategy & positioning",
        "Visual identity development",
        "Digital marketing campaigns",
        "Content strategy & creation",
        "Market research & insights",
      ],
      video: "/videos/feature-2.mp4",
    },
  ];

  const teamMembers = [
    {
      name: "Suman Bhowmick",
      role: "Co-Founder & CEO",
      description: "20+ years in experiential marketing and brand consulting",
      image: "/img/suman.png",
    },
    {
      name: "Mihir Thakkar",
      role: "Co-Founder & CBO",
      description: "Expert in large-scale event production and management",
      image: "/img/mihir.png",
    },
    {
      name: "Divyesh Kantharia",
      role: "Co-Founder & COO",
      description: "Co-Founder & COO",
      image: "/img/divyesh.png",
    },
  ];

  return (
    <div
      id="aboutus"
      className="min-h-screen w-screen bg-black text-white overflow-hidden"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding">
        <div className="container-grid">
          <div className="text-center mb-16">
            <AnimatedTitle title="About <b>U</b>s" containerClass="mb-8" />
            <p
              data-hero-subtitle
              className="text-h2 text-yellow-300 font-bold mb-8"
            >
              OUR STORY
            </p>
            <p
              data-hero-description
              className="text-h1 font-bold mb-8 max-w-4xl mx-auto"
            >
              OUR MOTTO - <span className="text-accent">I</span>DEATION TO{" "}
              <span className="text-accent">C</span>OMPLETION
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-900">
        <div className="container-grid">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-body text-lg leading-relaxed mb-12">
              At Idea Simplified, we bring a wealth of experience, innovation,
              and a proven track record to every project we undertake.
            </p>
            <p className="text-body text-lg leading-relaxed mb-12">
              Our mission is to create the most credible event platforms which
              brings thought leaders from industry and technology, policy
              makers, start-ups and academia as a cohesive unit fostering
              innovation and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Story Image Section */}
      <section ref={storyRef} className="h-screen relative overflow-hidden">
        <div data-story-image className="absolute inset-0 w-full h-full">
          <img
            src="/img/about.webp"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h3 className="text-h1 font-bold mb-6">
            A Journey of <span className="text-accent">I</span>nnovation
          </h3>
          <p className="text-body max-w-2xl mx-auto">
            Our continuous journey of growth has been marked by an unwavering
            commitment to progress, firmly establishing our presence as a force
            to be reckoned within the industry.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-grid">
          <div className="text-center mb-16">
            <AnimatedTitle title="Our <b>A</b>pproach" containerClass="mb-8" />
            <p className="text-body text-lg max-w-4xl mx-auto">
              We understand that there is no "one brush paints all" strategy,
              and every client's requirement is unique that requires bespoke
              solutions which are timeless, innovative at the same time simple
              that can connect with today's demanding digital consumers.
            </p>
          </div>

          <OurApproach />
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="section-padding bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container-grid">
          <div className="text-center mb-16">
            <AnimatedTitle title="Our <b>S</b>ervices" containerClass="mb-8" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                data-service-card
                className="relative bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <VideoPreview>
                    <video
                      src={service.video}
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </VideoPreview>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="text-h2 font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-body mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm text-white/70"
                      >
                        <TiLocationArrow className="text-yellow-300 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    title="Learn More"
                    containerClass="w-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="section-padding">
        <div className="container-grid">
          <div className="text-center mb-16">
            <AnimatedTitle title="Meet Our <b>T</b>eam" containerClass="mb-8" />
            <p className="text-body text-lg max-w-3xl mx-auto">
              We are a team of event mavericks, story tellers, design maniacs
              and visionary strategists. Pushing boundaries and breaking the
              traditional barriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} data-team-member className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-84 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-h2 font-bold mb-2">{member.name}</h4>
                <p className="text-yellow-300 text-sm font-medium mb-2">
                  {member.role}
                </p>
                {/* <p className="text-body text-sm">{member.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-violet-900/20 to-blue-900/20">
        <div className="container-grid">
          <div className="text-center">
            <AnimatedTitle title="Work With <b>U</b>s" containerClass="mb-8" />
            <p className="text-h2 font-bold mb-8">
              Have Any Projects in your Mind!
            </p>
            <p className="text-body text-lg mb-12 max-w-2xl mx-auto">
              Feel free to contact us and let's create something extraordinary
              together. Your vision, our expertise - the perfect combination for
              success.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                title="Start Your Project"
                containerClass="bg-yellow-300 text-black hover:bg-yellow-400 transition-all duration-300 px-8 py-4"
              />
              <Button
                title="Schedule a Call"
                containerClass="bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all duration-300 px-8 py-4"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
