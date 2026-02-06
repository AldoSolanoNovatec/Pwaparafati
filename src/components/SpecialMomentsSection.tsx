import { Sparkles, Heart, Star } from "lucide-react";
import { motion } from "motion/react";

export function SpecialMomentsSection() {
  const moments = [
    {
      emoji: "🌷",
      title: "Primavera",
      description: "Como los tulipanes que florecen"
    },
    {
      emoji: "💫",
      title: "Sueños",
      description: "Cada meta que alcanzas nadando"
    },
    {
      emoji: "🎵",
      title: "Melodías",
      description: "Cantando a Rels B sin parar"
    },
    {
      emoji: "📖",
      title: "Poesía",
      description: "Versos que nacen del corazón"
    },
    {
      emoji: "✨",
      title: "Magia",
      description: "Como Alicia en el país de las maravillas"
    },
    {
      emoji: "🎭",
      title: "Aventuras",
      description: "Stranger Things y misterios por resolver"
    }
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#FFF8DC]/30">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Sparkles className="w-8 h-8 text-[#FFD700]" />
        <h2 className="text-center text-[#7A6A7E]">Momentos especiales</h2>
        <Star className="w-8 h-8 text-[#FFD700]" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {moments.map((moment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-gradient-to-br from-[#FFF8DC] to-[#FFFAEB] p-6 rounded-2xl text-center cursor-pointer"
          >
            <div className="text-5xl mb-3">{moment.emoji}</div>
            <h3 className="mb-2 text-[#7A6A7E]">{moment.title}</h3>
            <p className="text-sm text-[#8B7A8F] italic">{moment.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-[#FFD6E8] via-[#E6D5F5] to-[#D4E8FF] p-8 rounded-2xl text-center"
      >
        <Heart className="w-12 h-12 text-[#E6A4C7] fill-[#E6A4C7] mx-auto mb-4" />
        <p className="text-[#7A6A7E] italic mb-4">
          "Cada uno de estos momentos cuenta una historia, y todas juntas forman el hermoso cuento que eres tú, Fati"
        </p>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {["🌷", "💕", "✨", "🎵", "🌊", "📺", "📖", "💫"].map((emoji, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="text-2xl"
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
