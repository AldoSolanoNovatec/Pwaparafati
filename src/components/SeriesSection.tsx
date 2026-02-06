import { Tv, Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SeriesSection() {
  const shows = [
    {
      title: "Stranger Things",
      emoji: "🔦",
      image: "https://images.unsplash.com/photo-1592861438114-7c0b58ec5544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhbmdlciUyMHRoaW5ncyUyMHJldHJvJTIwODBzJTIwbmVvbnxlbnwxfHx8fDE3NzAzOTEwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Aventuras en el Upside Down",
        "La pandilla de Hawkins",
        "Los años 80 con su mejor música",
        "Eleven y sus poderes increíbles"
      ],
      gradient: "from-[#D5F5E3] to-[#E6FFF0]"
    },
    {
      title: "Alicia en el País de las Maravillas",
      emoji: "🐰",
      image: "https://images.unsplash.com/photo-1666961332878-66e7641a0164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGljZSUyMHdvbmRlcmxhbmQlMjBmYW50YXN5JTIwcmFiYml0fGVufDF8fHx8MTc3MDM5MTA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: [
        "Un mundo de fantasía y magia",
        "El Sombrerero Loco y sus locuras",
        "La Reina de Corazones",
        "Aventuras imposibles hechas realidad"
      ],
      gradient: "from-[#E6D5F5] to-[#F5E8F0]"
    }
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#D5F5E3]/30">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Tv className="w-8 h-8 text-[#7AC9A8]" />
        <h2 className="text-center text-[#7A6A7E]">Stranger Things & Alicia</h2>
        <Sparkles className="w-8 h-8 text-[#9D7DB5]" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {shows.map((show, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/80 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="aspect-video overflow-hidden relative">
              <ImageWithFallback
                src={show.image}
                alt={show.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">{show.emoji}</div>
                  <h3 className="text-white">{show.title}</h3>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-3">
              {show.features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 + featureIndex * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Heart className="w-4 h-4 text-[#E6A4C7] flex-shrink-0 mt-1 fill-[#E6A4C7]" />
                  <p className="text-sm text-[#7A6A7E]">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-[#D5F5E3] via-[#E6D5F5] to-[#FFE5D9] p-6 rounded-2xl text-center">
        <p className="text-[#7A6A7E] italic">
          "Como Alicia en su aventura o los chicos de Hawkins en la suya, tu vida es una historia mágica llena de momentos extraordinarios 🌟"
        </p>
      </div>
    </div>
  );
}