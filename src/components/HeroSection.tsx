import { Heart, Flower2 } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-[#FFE5F1] via-[#F5E8F0] to-[#E6D5F5]">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flower2 className="w-12 h-12 text-[#E6A4C7]" />
            <Heart className="w-10 h-10 text-[#FFB5D6] fill-[#FFB5D6]" />
            <Flower2 className="w-12 h-12 text-[#E6A4C7]" />
          </div>
          
          <h1 className="text-5xl md:text-7xl tracking-tight bg-gradient-to-r from-[#E6A4C7] via-[#C78DB5] to-[#E6A4C7] bg-clip-text text-transparent">
            Para Fati
          </h1>
          
          <p className="text-xl md:text-2xl text-[#7A6A7E] max-w-2xl mx-auto leading-relaxed">
            Un espacio dedicado a todas las cosas que hacen brillar tu sonrisa ✨
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-12"
          >
            <div className="inline-block px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full border-2 border-[#E6A4C7]/30">
              <p className="text-[#7A6A7E] italic">
                "Como un tulipán en primavera, tu presencia ilumina cada día"
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
