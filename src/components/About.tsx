export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <p className="font-body text-xs tracking-[0.3em] uppercase text-desvio-red mb-4">
          Who We Are
        </p>

        {/* Headline */}
        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-desvio-white leading-tight mb-10">
          NOT MADE TO FOLLOW.
          <br />
          <span className="text-desvio-concrete">TAKE ANOTHER WAY.</span>
        </h2>

        {/* Manifesto text */}
        <div className="space-y-6 font-body text-desvio-concrete text-lg leading-relaxed max-w-2xl">
          <p>
            DESVÍO es más que una marca. Es una actitud. Nace de la calle, del ruido urbano, de la
            música que suena a medianoche y de la gente que no pide permiso para ser quien es.
          </p>
          <p>
            Representamos la masculinidad contemporánea: rebelde, sensual, independiente. No seguimos
            tendencias — las cuestionamos. No buscamos aprobación — construimos identidad.
          </p>
          <p>
            Cada prenda es una declaración. Cada detalle, una elección. No estamos aquí para encajar.
            Estamos aquí para marcar el camino.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-12 flex items-center gap-4">
          <div className="w-12 h-px bg-desvio-red" />
          <span className="font-headline text-sm tracking-[0.2em] text-desvio-white">
            WE ARE DESVÍO
          </span>
        </div>
      </div>
    </section>
  );
}
