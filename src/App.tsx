const services = [
  {
    number: '01',
    title: 'Exterior wash',
    description:
      'A careful clean to lift away road dust and leave your car looking fresh.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M10 28h28l-3.2-9.2a4 4 0 0 0-3.8-2.7H17a4 4 0 0 0-3.8 2.7L10 28Z" />
        <path d="M8 28h32v9H8zM14 37v3m20-3v3M15 28l3-7h12l3 7M14 33h.01M34 33h.01" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Interior refresh',
    description:
      'Give your cabin some care with a tidy-up that feels good to get back into.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M12 35V18a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v17M12 25h24M17 35v3m14-3v3M17 21h14" />
        <path d="M8 12c2-2 2-4 0-6m8 6c2-2 2-4 0-6m8 6c2-2 2-4 0-6" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Full car clean',
    description:
      'Bring the inside and outside together for a complete clean from top to bottom.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 7 28 18l11 4-11 4-4 11-4-11-11-4 11-4 4-11Z" />
        <path d="m37 8 1.5 4.5L43 14l-4.5 1.5L37 20l-1.5-4.5L31 14l4.5-1.5L37 8ZM11 30l1.5 4.5L17 36l-4.5 1.5L11 42l-1.5-4.5L5 36l4.5-1.5L11 30Z" />
      </svg>
    ),
  },
]

const reasons = [
  {
    title: 'A local welcome',
    description: 'Friendly service from people who care about your car.',
  },
  {
    title: 'Care in every clean',
    description: 'We take our time with the details that make a difference.',
  },
  {
    title: 'Easy to get in touch',
    description: 'Reach out to ask about services or plan your visit.',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12m-5-5 5 5-5 5" />
    </svg>
  )
}

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Thandi Car Wash home">
          <img
            className="brand-logo"
            src="/thandi-car-wash-logo.png"
            alt="Thandi's Car Wash"
          />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">Why Thandi</a>
          <a className="nav-contact" href="#contact">
            Get in touch <ArrowIcon />
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" role="img" aria-label="A freshly washed car" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> YOUR LOCAL CAR WASH</p>
          <h1>A little care.<br />A lot more <em>shine.</em></h1>
          <p className="hero-copy">
            From a quick freshen-up to a full clean, we’ll help your car feel
            good as new.
          </p>
          <a className="button button-light" href="#services">
            Explore our services <ArrowIcon />
          </a>
          <p className="hero-note">Friendly service. No fuss. Just a clean car.</p>
        </div>
        <div className="hero-index" aria-hidden="true">01 <span /> 03</div>
        <a className="scroll-cue" href="#services"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-section" id="about">
        <div className="intro-label">
          <span className="section-kicker">A CLEAN YOU CAN FEEL</span>
          <span className="blue-rule" />
        </div>
        <div className="intro-copy">
          <h2>Your car takes you places.<br /><span>Let’s take care of it.</span></h2>
          <p>
            At Thandi Car Wash, we believe a clean car can brighten your whole
            day. Drop by for a warm welcome and thoughtful care, every time.
          </p>
        </div>
        <div className="intro-stamp" aria-label="Locally cared for">
          <span className="stamp-star">✳</span>
          <span>LOCALLY<br />CARED FOR</span>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <div>
            <span className="section-kicker">HERE FOR YOUR EVERYDAY DRIVE</span>
            <h2>Find your fresh.</h2>
          </div>
          <p>Choose the clean that feels right for your car.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-topline">
                <span>{service.number}</span>
                <span className="service-icon">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" aria-label={`Ask us about ${service.title}`}>
                Ask us about this <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="care-section">
        <div className="care-photo" role="img" aria-label="Water and suds on a clean car" />
        <div className="care-content">
          <span className="section-kicker">THE THANDI DIFFERENCE</span>
          <h2>Good people.<br /><span>Good clean.</span></h2>
          <p>
            We’re your neighbourhood stop for a car that looks cared for and
            feels ready for the road.
          </p>
          <a className="text-link" href="#contact">Come say hello <ArrowIcon /></a>
        </div>
        <div className="care-reasons">
          {reasons.map((reason, index) => (
            <div className="reason" key={reason.title}>
              <span className="reason-number">0{index + 1}</span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-mark" aria-hidden="true">
          <svg viewBox="0 0 64 64">
            <path d="M12 37h40l-4.5-12a5.5 5.5 0 0 0-5.2-3.7H21.7a5.5 5.5 0 0 0-5.2 3.7L12 37Zm-2 0h44v13H10zM19 50v4m26-4v4M21 15l3-5m9 5V8m9 7 3-5" />
          </svg>
        </div>
        <div>
          <span className="section-kicker">WE’D LOVE TO SEE YOU</span>
          <h2>Ready for that<br /><span>fresh-car feeling?</span></h2>
        </div>
        <div className="contact-action">
          <p>Call / Whatsapp us or get directions to find your local Thandi Car Wash.</p>
          <a className="button button-blue" href="tel:+27828223544">
            Call +27 82 822 3544 <ArrowIcon />
          </a>
          <a
            className="location-link"
            href="https://www.google.com/maps/place/26%C2%B024'47.6%22S+28%C2%B006'38.5%22E/@-26.4132125,28.1081259,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-26.4132125!4d28.1107008?hl=en&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            View location on Google Maps <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-brand" href="#home" aria-label="Thandi Car Wash home">
          <img src="/thandi-car-wash-logo.png" alt="Thandi's Car Wash" />
        </a>
        <span>Local care for every journey.</span>
        <a href="#home">Back to top ↑</a>
        <span className="copyright">© Thandi Car Wash</span>
      </footer>
    </main>
  )
}
