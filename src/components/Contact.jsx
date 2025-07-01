import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" className="w-full h-full object-cover" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="section-padding w-screen bg-black">
      <div className="container-grid">
        <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 py-24 px-8 lg:px-16 text-white overflow-hidden">
          <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 opacity-30">
            <ImageClipBox
              src="/img/contact-1.webp"
              clipClass="contact-clip-path-1"
            />
            <ImageClipBox
              src="/img/contact-2.webp"
              clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
            />
          </div>

          <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80 opacity-10">
            <ImageClipBox
              src="/img/swordman-partial.webp"
              clipClass="absolute md:scale-125"
            />
            <ImageClipBox
              src="/img/swordman.webp"
              clipClass="sword-man-clip-path md:scale-125"
            />
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            <AnimatedTitle
              title="Ready to Simplify Your <br /> Next <b>B</b>ig <b>I</b>dea?"
              className="text-h1 w-full mb-8 text-white"
            />

            <p className="text-body mb-16 max-w-2xl text-white/80">
              Your journey from ideation to completion starts with a simple
              conversation. Let's build something unforgettable together.
            </p>

            {/* Contact Form */}
            <div className="w-full max-w-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Work Email*"
                  className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              />
              <textarea
                placeholder="Tell us a bit about your project...*"
                rows="4"
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 resize-none backdrop-blur-sm"
                required
              ></textarea>

              <Button
                title="Start the Conversation"
                containerClass="mt-8 cursor-pointer w-full bg-white text-black hover:bg-white/90 transition-all duration-300 px-8 py-4 rounded-full font-semibold"
              />
            </div>

            {/* Contact Information */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-4xl w-full">
              <div className="space-y-3 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <h4 className="text-white font-semibold text-lg mb-4">
                  INDIA Office
                </h4>
                <p className="text-white/70 leading-relaxed">
                  1205-06, D.S Galleria, LBS Rd, Mumbai
                </p>
                <p className="text-white/70">+91 9711809870</p>
              </div>
              <div className="space-y-3 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <h4 className="text-white font-semibold text-lg mb-4">
                  UAE Office
                </h4>
                <p className="text-white/70 leading-relaxed">
                  One Central, Trade Centre, Dubai
                </p>
                <p className="text-white/70">+971 05893 44219</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-white/70">
                <span className="text-white font-medium">Email:</span>{" "}
                info@ideasimplified.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
