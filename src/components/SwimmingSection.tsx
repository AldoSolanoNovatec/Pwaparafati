import { Waves, Droplets, Heart } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SwimmingSection() {
  const swimmingQuotes = [
    "En el agua encuentras paz y libertad",
    "Cada brazada es un paso hacia tus sueños",
    "La piscina es tu segundo hogar",
    "El agua te hace sentir viva y fuerte"
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#D4E8FF]/30">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Waves className="w-8 h-8 text-[#7AB8E8]" />
        <h2 className="text-center text-[#7A6A7E]">Tu pasión por el agua</h2>
        <Droplets className="w-8 h-8 text-[#7AB8E8]" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15 }}
            className="aspect-video rounded-2xl overflow-hidden shadow-lg"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1744732778398-99e8a95256b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN3aW1taW5nJTIwcG9vbCUyMHdhdGVyfGVufDF8fHx8MTc3MDM5MTA2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Natación"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#E6F4FF] to-[#D4E8FF] p-6 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {swimmingQuotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-start gap-3 bg-white/80 p-4 rounded-xl"
            >
              <Heart className="w-5 h-5 text-[#7AB8E8] flex-shrink-0 mt-1 fill-[#7AB8E8]" />
              <p className="text-[#7A6A7E]">{quote}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="text-center mt-6 text-[#7A6A7E] italic">
        "Como pez en el agua, así brillas en tu elemento 🏊‍♀️💙"
      </p>
    </div>
  );
}