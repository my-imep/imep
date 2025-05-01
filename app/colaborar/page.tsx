import Image from "next/image"

export default function Colaborar() {
	return (
		<section className='text-white container mx-auto px-4'>
			<h1 className='text-2xl font-semibold text-center my-10'>Colabore conosco</h1>
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-1/2 flex flex-col items-center">
					<Image src="/logo.png" alt="IMEP logo" width={80} height={80} className="mb-5" />
					<h2 className="text-2xl mb-8"><b>Você pode ofertar</b> por:</h2>

					<div className="relative my-10 w-full max-w-md">
						<div className="absolute inset-0 flex items-center">
							<span className="w-1/4 border-t border-gray-500"></span>
							<span className="w-1/4 ml-auto border-t border-gray-500"></span>
						</div>
						<div className="relative flex justify-center">
							<span className="bg-[#121212] px-4 text-3xl font-bold tracking-wider">
								<span className="px-3 py-1 rounded">PIX</span>
							</span>
						</div>
					</div>

					<div className="text-center">
						<p className="text-xl mb-2">CNPJ</p>
						<p className="text-2xl font-semibold mb-8">00.000.000/0000-00</p>

						<p className="text-xl mb-2">OU APONTE A CÂMERA</p>
						<div className="bg-white p-4 rounded-lg inline-block">
							<Image src="/qrcode_placeholder.png" alt="QR Code" width={200} height={200} />
						</div>
					</div>
				</div>

				<div className="w-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center">
					<h2 className="text-2xl mb-8"><b>Informações</b> bancárias:</h2>

					<div className="bg-black/30 rounded-lg p-6 w-full max-w-md">
						<p className="mb-4"><span className="font-bold">Banco:</span> Banco do Brasil</p>
						<p className="mb-4"><span className="font-bold">Agência:</span> 0000</p>
						<p className="mb-4"><span className="font-bold">Conta:</span> 000000-0</p>
						<p className="mb-4"><span className="font-bold">CNPJ:</span> 00.000.000/0000-00</p>
						<p><span className="font-bold">Favorecido:</span> Igreja Missões do Evangelho Pleno</p>
					</div>
				</div>
			</div>
		</section>
	)
}
