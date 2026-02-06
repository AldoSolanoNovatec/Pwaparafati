import { Flower2 } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TulipSection() {
  const tulipFacts = [
    "Los tulipanes simbolizan el amor perfecto y la elegancia",
    "Vienen en más de 3,000 variedades diferentes",
    "Son las flores que mejor representan la primavera",
    "Cada color tiene un significado: rosa para el afecto y cariño"
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#E6A4C7]/20">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Flower2 className="w-8 h-8 text-[#E6A4C7]" />
        <h2 className="text-center text-[#7A6A7E]">Tus flores favoritas</h2>
        <Flower2 className="w-8 h-8 text-[#E6A4C7]" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="aspect-square rounded-2xl overflow-hidden shadow-lg"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1557372654-c07b22db33c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwdHVsaXBzJTIwZmxvd2VycyUyMHNwcmluZ3xlbnwxfHx8fDE3NzAzOTEwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tulipanes rosas"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <div className="space-y-3 bg-white/80 p-6 rounded-2xl">
        {tulipFacts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-[#E6A4C7] mt-2 flex-shrink-0" />
            <p className="text-[#7A6A7E]">{fact}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-center mt-6 text-[#7A6A7E] italic">
        "Como los tulipanes, tu belleza es única y cautivadora 🌷"
      </p>
    </div>
  );
}