const brandColors = {
  primary: '#1a2238', // deep blue
  accent: '#9daaf2', // soft blue
  highlight: '#ff6a3d', // orange
  background: '#f4f6fb', // light background
  card: '#232946', // card bg
  text: '#121629', // dark text
};

export default function Home() {
  return (
    <>
      <main style={{ background: brandColors.background, minHeight: '100vh' }}>
        {/* Hero Section */}
        <section
          aria-labelledby='hero-heading'
          className='w-full py-20'
          style={{
            background: `linear-gradient(90deg, ${brandColors.primary} 60%, ${brandColors.accent} 100%)`,
          }}
        >
          <div className='container mx-auto px-4 text-center'>
            <h1
              id='hero-heading'
              className='text-5xl font-extrabold mb-6'
              style={{ color: brandColors.highlight }}
            >
              Evan Marshall Tech Services
            </h1>
            <h2
              className='text-2xl font-semibold mb-6'
              style={{ color: brandColors.accent }}
            >
              Tech Made Simple. Bills Made Smaller.
            </h2>
            <p className='text-xl mb-4 text-white'>
              Need a custom gaming PC, a home media server, or just someone to
              fix your slow laptop? I&apos;ve got you covered.
            </p>
            <p className='text-xl mb-8 text-white'>
              No corporate up sells. No confusing jargon. 15+ years helping
              homeowners in Kentville and the Annapolis Valley solve tech
              problems.
            </p>

            <a
              href='/contact'
              className='inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-orange-100 hover:text-orange-600 transition shadow-lg'
              style={{ border: `2px solid ${brandColors.highlight}` }}
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Services Overview */}
        <section aria-labelledby='services-heading' className='py-20'>
          <div className='container mx-auto px-4'>
            <h2
              id='services-heading'
              className='text-3xl font-bold text-center mb-12'
              style={{ color: brandColors.primary }}
            >
              My Services
            </h2>
            <div className='flex flex-wrap justify-center items-stretch gap-8'>
              {/* Service Card 1 */}
              <div
                className='rounded-xl p-8 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col items-stretch'
                style={{
                  background: brandColors.card,
                  color: brandColors.accent,
                  minWidth: 260,
                  maxWidth: 320,
                  flex: '1 1 260px',
                  minHeight: 260,
                  height: '100%',
                  display: 'flex',
                }}
              >
                <div>
                  <h3
                    className='text-xl font-semibold mb-3'
                    style={{ color: brandColors.highlight }}
                  >
                    General Tech Support
                  </h3>
                  <p className='mb-4 text-white'>
                    Troubleshooting computers and phones, internet setup,
                    software installation, and ongoing maintenance.
                  </p>
                </div>
                <div className='flex-1' />
              </div>

              {/* Service Card 2 */}
              <div
                className='rounded-xl p-8 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col items-stretch'
                style={{
                  background: brandColors.card,
                  color: brandColors.accent,
                  minWidth: 260,
                  maxWidth: 320,
                  flex: '1 1 260px',
                  minHeight: 260,
                  height: '100%',
                  display: 'flex',
                }}
              >
                <div>
                  <h3
                    className='text-xl font-semibold mb-3'
                    style={{ color: brandColors.highlight }}
                  >
                    Media Centre Setup
                  </h3>
                  <p className='mb-4 text-white'>
                    TV, streaming devices, sound systems, and series, movie, and
                    music content setup.
                  </p>
                </div>
                <div className='flex-1' />
              </div>

              {/* Service Card 3 (future) */}
              {/* <div
                className="rounded-xl p-8 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col justify-between"
                style={{ background: brandColors.card, color: brandColors.accent, minWidth: 260, maxWidth: 320, flex: '1 1 260px', minHeight: 260, height: '100%', display: 'flex' }}
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: brandColors.highlight }}>
                  Custom PC Building
                </h3>
                <p className="mb-4 text-white">
                  High-performance builds tailored to your needs and budget.
                </p>
              </div> */}

              {/* Service Card 4 */}
              <div
                className='rounded-xl p-8 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col items-stretch'
                style={{
                  background: brandColors.card,
                  color: brandColors.accent,
                  minWidth: 260,
                  maxWidth: 320,
                  flex: '1 1 260px',
                  minHeight: 260,
                  height: '100%',
                  display: 'flex',
                }}
              >
                <div>
                  <h3
                    className='text-xl font-semibold mb-3'
                    style={{ color: brandColors.highlight }}
                  >
                    Gaming Emulation Setup
                  </h3>
                  <p className='mb-4 text-white'>
                    Retro gaming stations, emulation systems, and optimized
                    gaming configurations.
                  </p>
                </div>
                <div className='flex-1' />
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Why Choose Me */}
        <section className='py-20' style={{ background: brandColors.primary }}>
          <div className='container mx-auto px-4 text-center'>
            <h2
              className='text-3xl font-bold mb-8'
              style={{ color: brandColors.highlight }}
            >
              Why Choose Me Over The Big Guys?
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto'>
              <div className='bg-white/10 rounded-lg p-6 shadow-md'>
                <div
                  className='text-4xl mb-4'
                  style={{ color: brandColors.accent }}
                >
                  🤝
                </div>
                <h3 className='font-semibold mb-2 text-white'>
                  Relationship-Based
                </h3>
                <p className='text-gray-100'>
                  I&apos;m not trying to close a sale and move on. I build
                  long-term relationships with my clients—because your tech
                  needs don&apos;t end after one visit.
                </p>
              </div>
              <div className='bg-white/10 rounded-lg p-6 shadow-md'>
                <div
                  className='text-4xl mb-4'
                  style={{ color: brandColors.accent }}
                >
                  💰
                </div>
                <h3 className='font-semibold mb-2 text-white'>
                  Actually Save You Money
                </h3>
                <p className='text-gray-100'>
                  I recommend cost-effective solutions and teach you how to
                  avoid future problems. Your success is my success.
                </p>
              </div>
              <div className='bg-white/10 rounded-lg p-6 shadow-md'>
                <div
                  className='text-4xl mb-4'
                  style={{ color: brandColors.accent }}
                >
                  📞
                </div>
                <h3 className='font-semibold mb-2 text-white'>
                  Real Person, Real Support
                </h3>
                <p className='text-gray-100'>
                  No phone trees. No offshore call centers. Just direct contact
                  with someone who actually cares about solving your problem.
                </p>
              </div>
              <div className='bg-white/10 rounded-lg p-6 shadow-md'>
                <div
                  className='text-4xl mb-4'
                  style={{ color: brandColors.accent }}
                >
                  🎓
                </div>
                <h3 className='font-semibold mb-2 text-white'>
                  15+ Years Experience
                </h3>
                <p className='text-gray-100'>
                  I&apos;ve been in customer service for over a decade, and I
                  love the challenge of solving complex tech problems—then
                  explaining them in a way that makes sense.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
