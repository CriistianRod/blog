export function Hero() {
    return (
        <div className="pb-16 min-h-[40vh] flex flex-row items-center bg-gradient-radial from-slate-800 from-10% to-slate-900 to-50%">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl md:text-7xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center dark:text-white">Entre algoritmos, números y poesía</h1>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-6">
                    Soy un man de Bogotá, Colombia. <br />
                    Trabajo como Científico de Datos en Globant, escribo para entender el Universo y llevo más de 5 años en la Industria de la Tecnología.<br />
                    Podría igual ser el CTO de tu empresa, escribirle una carta de amor a tu crush o entrenar un modelo de Machine Learning para tu proyecto. <br />
                </p>
                <a href="#contact" className="text-white py-3 px-6 rounded hover:bg-slate-800 hover:transition-colors">
                    Más sobre mí {'->'}
                </a>
            </div>
        </div>
    );
};
