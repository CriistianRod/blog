export function Hero() {
    return (
        // <div className="flex flex-col md:flex-row items-center justify-center py-20">
        //     <div className="md:w-1/2 p-4">
        //         <img src="/assets/blog/authors/tim.jpeg" alt="Your Image" className="rounded-full w-48 h-48 mx-auto md:mx-0" />
        //     </div>
        //     <div className="md:w-1/2 p-4">
        //         <h2 className="text-3xl font-bold mb-4">About Me</h2>
        //         <p className="text-lg mb-4">Hi, I'm [Your Name], a passionate blogger who loves to share thoughts and experiences with the world. Join me on my journey as I explore various topics and share my insights.</p>
        //     </div>
        // </div>
        <div className="pb-16 min-h-[40vh] flex flex-row items-center bg-gradient-radial from-slate-800 from-10% to-slate-900 to-50%">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl md:text-7xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center dark:text-white">Entre algoritmos, números y poesía</h1>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-4">
                    Soy un man de Bogotá, Colombia. Entre muchas otras cosas: necesito escribir para entender el Universo, llevo 5 años desarrollando en Internet y estoy transicionando a Ciencias de Datos.<br />
                    Disfruto la música, la lectura y el ejercicio.
                    Y quiero empezar a viajar por el mundo.
                </p>
                <a href="#contact" className="text-white py-2 px-4 rounded hover:bg-slate-800">
                    Más sobre mí {'->'}
                </a>
            </div>
        </div>
    );
};
