import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";

export default function Shared() {
  return (
    <section
      className="w-full bg-center bg-cover bg-fixed min-h-screen pt-20"
      style={{ backgroundImage: "url('/shared-image.svg')" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 h-full flex flex-col justify-center relative text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full bg-transparent p-6 sm:p-10 rounded-xl">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              Mude sua vida<br /> com palavras de vida.
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200 mb-8">
              Aut sed amet et quis aliquid laborum minus consequatur. Animi repellendus quas.
              Est voluptates minima ut dolorum aliquid sint. Ratione et et molestias rerum
              quibusdam. Deserunt suscipit ut expedita. Non numquam aut eum perferendis
              molestiae praesentium aliquid voluptatum numquam dolorum aliquid sint minima.
            </p>

            {/* Seção de redes sociais */}
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base text-gray-300 mb-4">
                Não perca nenhuma mensagem. Siga-nos nas redes sociais:
              </p>
              <div className="flex gap-6 justify-center md:justify-start">
                <Link href="https://www.instagram.com/imep.missoes/" target="_blank">
                  <Instagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
                </Link>
                <Link href="https://www.youtube.com/@imeptv" target="_blank">
                  <Youtube className="w-6 h-6 hover:text-red-500 transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
