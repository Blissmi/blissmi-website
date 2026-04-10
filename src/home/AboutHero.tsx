interface AboutHeroProps {
  videoUrl: string;
}

export function AboutHero({ videoUrl }: AboutHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '38vh' }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ minHeight: '38vh', paddingTop: '68px', paddingBottom: '2rem' }}
      >
        <div
          className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
          style={{ backgroundColor: 'rgba(50, 68, 33, 0.125)', color: '#fff' }}
        >
          About Blissmi
        </div>
        <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '1.5rem' }}>
          <span style={{ display: 'block', color: '#ffffff' }}>Predicting and Personalizing</span>
          <span style={{ display: 'block' }}>
            <span style={{ color: 'rgb(209, 180, 170)' }}>Preventive Health</span>
            <span style={{ color: '#ffffff' }}> for Everyone</span>
          </span>
        </h1>
      </div>
    </section>
  );
}
