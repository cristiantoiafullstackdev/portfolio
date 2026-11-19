import { ButtonPrimary } from "@/components/ui/ButtonPrimary"
import { ButtonSecondary } from "@/components/ui/ButtonSecondary"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      className="min-h-150 flex px-10 py-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">

          <div className="flex flex-col w-full lg:w-auto">
            <div className="flex gap-2.5 mb-4">
                <h3 className="text-sm font-extralight font-mono tracking-wide uppercase">
                    cristian daniel toia . fullstack
                </h3>
                    <Image
                    src="/online-indicator.svg"
                    alt="online indicator"
                    width={6}
                    height={6}
                    />
            </div>
            <h1 className="text-4xl text-foreground font-semibold tracking-wide mb-6">
              Desarrollo web de punta a punta.
            </h1>
            <p className="text-sm font-normal tracking-normal leading-5 mb-6">
              React, Next.js y Node.js para crear productos web claros y funcionales. <br /> 
              Córdoba, Argentina. Remoto en América.
            </p>
            <div className="flex">
                <div className="p-1 mr-1">
                    <Image
                        src="/professional-value-icon.svg"
                        alt="Valor profesional"
                        width={16}
                        height={16}
                    />
                </div>
                <h5 className="text-sm font-normal uppercase">
                    Valor profesional
                </h5>
            </div>

            <div className="flex gap-4">
              <ButtonPrimary>Descargar CV</ButtonPrimary>
              <ButtonSecondary>Contactar</ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </section>
  )
}