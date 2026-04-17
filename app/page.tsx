import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Daily Standup System",
    type: "Web & Mobile · Branding",
    desc: "DailySync.AI is an AI-powered platform that keeps teams aligned with updates, automated summaries, and actionable insights.",
    image: "/dailystandup.png",
  },
  {
    title: "Inspiring Website",
    type: "Website Design",
    desc: "Company website for Inspiringlab, featuring modern UI/UX design, responsive layouts, and seamless user experience.",
    image: "/inspiring-lab.png",
  },
  {
    title: "IT Hunt",
    type: "Branding & Web",
    desc: "Platform to find verified IT companies, innovative products, and expert service providers.",
    image: "/it-hunt.png",
  },
  {
    title: "Nagarik App",
    type: "Mobile App · Research",
    desc: "Nagarik App is a mobile application launched by Government of Nepal to provide government services.",
    image: "/nagarik_app.png",
  },
  {
    title: "National Path Lab",
    type: "Web & Mobile · Healthcare",
    desc: "Web and mobile application design with streamlined user experiences based on usability research.",
    image: "/national-path-lab.png",
  },
  {
    title: "Hello Sarkar",
    type: "Enterprise · CRM",
    desc: "Web Application to listen inquiries, complaints, or suggestions regarding the functions of public bodies.",
    image: "/hello-sarkar.png",
  },
];

const CONTACTS = [
  {
    image: "/email.svg",
    label: "Email",
    value: "simran.shrestha2266@gmail.com",
  },
  {
    image: "/phone-icon.svg",
    label: "Phone",
    value: "+9779841896515",
  },
  {
    image: "/location.svg",
    label: "Location",
    value: "Kathmandu, Nepal",
  },
];

export const getHref = (iconKey: string, name: string): string | null => {
  switch (iconKey) {
    case "Phone":
      return `tel:${name.replace(/\s/g, "")}`;
    case "Email":
      return `mailto:${name}`;
    case "Location":
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Kathmandu, Nepal")}`;
    default:
      return null;
  }
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero flex flex-col md:grid md:grid-cols-2 items-center min-h-screen px-6 md:px-12 lg:px-24 pt-32 pb-16 gap-16 relative overflow-hidden"
        id="top"
      >
        <div className="deco deco-1"></div>
        <div className="deco deco-2"></div>
        <div className="relative z-[2]">
          <div className="professional-title">
            <strong>UI/UX Designer</strong>
          </div>
          <h1 className="text-[clamp(3rem,6vw,5rem)] font-heading font-light leading-[1.1] mb-6">
            Crafting <em className="italic text-rose-dark">intuitive</em>
            <br />
            digital experiences
          </h1>
          <p className="hero-desc">
            Hi, I&apos;m Simran a UI/UX designer based in Kathmandu, Nepal. I
            transform ideas into beautiful, user-centered interfaces across web
            and mobile platforms.
          </p>
          <div className="flex gap-4">
            <Link href="#projects" className="btn btn-primary">
              View my work
            </Link>
            <Link href="#contact" className="btn btn-outline">
              Get in touch
            </Link>
          </div>
        </div>
        <div className="hero-visual flex justify-center relative z-[2] hidden md:flex">
          <div className="photo-ring">
            <div className="photo-inner relative">
              <Image
                src="/photo.jpeg"
                alt="Profile"
                fill
                className="object-cover scale-120"
                priority
              />
            </div>
            <div className="badge badge-tools top-5 -right-5">
              <span>Figma</span> · Framer · Illustrator
            </div>
            <div className="badge badge-exp bottom-10 -left-2">
              <span>2+</span> years experience
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="about bg-white py-24 px-6 md:px-12 lg:px-24"
        id="about"
      >
        <div className="text-center mb-16">
          <div className="section-tag">Who I am</div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-light leading-snug">
            About <em className="italic text-lavender-dark">me</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-20 items-start max-w-[1000px] mx-auto">
          <div className="flex flex-col gap-6">
            <div className="stat-card">
              <div className="stat-num">2+</div>
              <div className="stat-label">Years of design experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">8+</div>
              <div className="stat-label">Projects delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">6+</div>
              <div className="stat-label">Design tools mastered</div>
            </div>
          </div>
          <div className="about-content">
            <p className="text-text-mid mb-5 leading-[1.85]">
              I&apos;m a UI/UX Designer with a background in Computer Science
              (BSc CSIT from Deerwalk Institute of Technology, Kathmandu). I
              specialize in creating user-friendly, visually compelling
              interfaces for web and mobile applications.
            </p>
            <p className="text-text-mid mb-5 leading-[1.85]">
              My design process is grounded in user research—I conduct surveys,
              interviews, and usability testing to ensure every design decision
              is intentional and human-centered. I love bridging the gap between
              beautiful aesthetics and functional, accessible experiences.
            </p>
            <p className="text-text-mid mb-5 leading-[1.85]">
              Beyond product design, I create tech-style illustrations,
              AI-generated video content, and client pitch visuals—bringing a
              unique blend of design craft and storytelling to every project.
            </p>
            <div className="edu-block">
              <h4 className="font-semibold">
                Deerwalk Institute of Technology · BSc CSIT
              </h4>
              <p className="text-[13px] text-text-mid m-0">
                Jan 2020 – Mar 2024 · Sifal, Kathmandu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className="skills bg-cream py-24 px-6 md:px-12 lg:px-24"
        id="skills"
      >
        <div className="text-center mb-16">
          <div className="section-tag">What I bring</div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-light leading-snug">
            Skills &amp; <em className="italic text-lavender-dark">tools</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          <div className="skill-card">
            <div className="skill-icon bg-rose">🎨</div>
            <h3>Design Tools</h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag bg-rose text-rose-dark">Figma</span>
              <span className="tag bg-rose text-rose-dark">Photoshop</span>
              <span className="tag bg-rose text-rose-dark">Illustrator</span>
              <span className="tag bg-rose text-rose-dark">Canva</span>
              <span className="tag bg-rose text-rose-dark">Affinity</span>
              <span className="tag bg-rose text-rose-dark">Framer</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon bg-lavender">📐</div>
            <h3>Prototyping</h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag bg-lavender text-lavender-dark">Sketch</span>
              <span className="tag bg-lavender text-lavender-dark">
                InVision
              </span>
              <span className="tag bg-lavender text-lavender-dark">
                Figma Prototypes
              </span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon bg-mint">🔍</div>
            <h3>User Research</h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag bg-mint text-mint-dark">Surveys</span>
              <span className="tag bg-mint text-mint-dark">Interviews</span>
              <span className="tag bg-mint text-mint-dark">
                Usability Testing
              </span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon bg-sky">💻</div>
            <h3>Development</h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag bg-sky text-sky-dark">HTML</span>
              <span className="tag bg-sky text-sky-dark">CSS</span>
              <span className="tag bg-sky text-sky-dark">PHP (Basic)</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon bg-peach">✨</div>
            <h3>Additional Skills</h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag bg-peach text-peach-dark">
                AI Video Generation
              </span>
              <span className="tag bg-peach text-peach-dark">
                Tech Illustrations
              </span>
              <span className="tag bg-peach text-peach-dark">
                Pitch Content
              </span>
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-icon bg-rose">🤝</div>
            <h3>Soft Skills</h3>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag bg-rose text-rose-dark">Collaboration</span>
              <span className="tag bg-rose text-rose-dark">Communication</span>
              <span className="tag bg-rose text-rose-dark">
                Problem-solving
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        className="experience bg-white py-24 px-6 md:px-12 lg:px-24"
        id="experience"
      >
        <div className="text-center mb-16">
          <div className="section-tag">My journey</div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-light leading-snug">
            Work <em className="italic text-lavender-dark">experience</em>
          </h2>
        </div>
        <div className="max-w-[780px] mx-auto">
          <div className="exp-item">
            <div className="exp-date">May 2025 – Present</div>
            <div>
              <div className="exp-company text-rose-dark uppercase tracking-widest font-semibold text-[12px] mb-1">
                InspiringLab · On-site
              </div>
              <div className="exp-role text-[17px] font-semibold mb-3">
                UI/UX Designer
              </div>
              <ul className="exp-points">
                <li>
                  Designed user-friendly interfaces for web and mobile
                  applications.
                </li>
                <li>
                  Applied Framer, Affinity, and Canva in real-world client
                  projects.
                </li>
                <li>
                  Developed AI-generated video content to boost user engagement.
                </li>
                <li>
                  Created tech-style illustrations and product explainer
                  visuals.
                </li>
                <li>
                  Produced compelling pitch content and visual assets for
                  clients.
                </li>
              </ul>
            </div>
          </div>
          <div className="exp-item">
            <div className="exp-date">Mar 2024 – Mar 2025</div>
            <div>
              <div className="exp-company text-rose-dark uppercase tracking-widest font-semibold text-[12px] mb-1">
                Ambition Guru · On-site
              </div>
              <div className="exp-role text-[17px] font-semibold mb-3">
                UI/UX Designer
              </div>
              <ul className="exp-points">
                <li>
                  Designed wireframes, prototypes, and interactive mockups for
                  web and mobile.
                </li>
                <li>
                  Conducted user research, usability testing, and iterative
                  improvements.
                </li>
                <li>
                  Maintained design consistency and brand guidelines across
                  platforms.
                </li>
                <li>
                  Integrated CRM-like UI features for Call Blast and other
                  projects.
                </li>
                <li>
                  Contributed to government and startup projects with a focus on
                  accessibility.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="projects bg-cream py-24 px-6 md:px-12 lg:px-24"
        id="projects"
      >
        <div className="text-center mb-16">
          <div className="section-tag">Selected work</div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-light leading-snug">
            Featured <em className="italic text-lavender-dark">projects</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1050px] mx-auto">
          {PROJECTS.map((project, i) => (
            <div key={i} className="project-card">
              <div
                className={`project-thumb ${
                  [
                    "bg-linear-to-br from-lavender to-rose text-lavender-dark",
                    "bg-linear-to-br from-mint to-sky text-mint-dark",
                    "bg-linear-to-br from-peach to-rose text-peach-dark",
                    "bg-linear-to-br from-sky to-lavender text-sky-dark",
                    "bg-linear-to-br from-rose to-peach text-rose-dark",
                    "bg-linear-to-br from-lavender to-mint text-lavender-dark",
                  ][i % 6]
                }`}
              >
                {/* Placeholders for project images */}
                <div className="w-full h-full relative">
                  <Image
                    alt={project.title}
                    fill
                    src={project.image}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="project-type text-[11px] tracking-wider uppercase text-rose-dark font-medium mb-1.5">
                  {project.type}
                </div>
                <h3 className="text-[17px] font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-[13px] text-text-mid leading-[1.7]">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="contact bg-white py-24 px-6 md:px-12 lg:px-24"
        id="contact"
      >
        <div className="text-center mb-16">
          <div className="section-tag">Say hello</div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-heading font-light leading-snug">
            Let&apos;s work{" "}
            <em className="italic text-lavender-dark">together</em>
          </h2>
        </div>
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-text-mid text-[15px] mb-12 leading-[1.8]">
            I&apos;m currently open to new opportunities whether it&apos;s a
            full-time role, freelance project, or just a friendly chat about
            design. Feel free to reach out!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {CONTACTS.map((contact) => (
              <Link
                key={contact.label}
                className="contact-card"
                target="_blank"
                href={getHref(contact.label, contact.value) ?? ""}
              >
                <div className="contact-card-icon mb-2 flex justify-center">
                  <Image
                    src={contact.image}
                    alt={contact.label}
                    width={22}
                    height={22}
                  />
                </div>
                <div className="contact-card-label font-semibold text-[12px] text-text-mid mb-1">
                  {contact.label}
                </div>
                <div className="contact-card-value text-[11px] text-text-light break-all">
                  {contact.value}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
