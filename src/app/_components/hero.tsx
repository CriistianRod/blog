import SocialMedia from "./social-media"

export function Hero() {
    return (
        <section className="min-h-[70vh] md:min-h-[70vh] mb-[16vh] md:mb-[16vh] flex flex-col justify-center items-center text-center bg-gradient-radial from-slate-800 from-10% to-slate-900 to-50%">
        <h1 className="text-5xl md:text-8xl mb-12 md:mb-1 font-bold tracking-tighter leading-tight md:pr-8 dark:text-white">
          Cristian Rodríguez
        </h1>
        <h3 className="text-2xl md:text-7xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none my-2 text-center dark:text-white">Entre algoritmos, números y poesía</h3>
        <p className="max-w-2xl mx-auto md:text-lg leading-relaxed mb-6">
            Puedo ser el CTO de tu empresa, escribir la carta de amor más dramática para recuperar a tu novia, o llevar tu proyecto a Syllcon Valley con Machine Learning
        </p>
        <div className="w-1/2 mb-12 flex justify-center">
            <SocialMedia />
        </div>
        <a href="#contact" className="text-white py-3 px-6 rounded-lg bg-sky-500 w-full md:w-48 hover:bg-slate-800 hover:transition-colors">
            Contáctame {'->'}
        </a>
        </section>
    );
};
