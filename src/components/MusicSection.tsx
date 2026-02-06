import { Music, Mic2, Radio, Heart } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MusicSection() {
  const musicMoments = [
    {
      icon: Music,
      title: "Conciertos",
      description: "La magia de la música en vivo, saltando y cantando sin parar"
    },
    {
      icon: Mic2,
      title: "Rels B",
      description: "Tu artista favorito, sus letras que tocan el alma"
    },
    {
      icon: Radio,
      title: "Playlist",
      description: "Canciones que marcan momentos especiales"
    }
  ];

  const relsBSongs = [
    "Un Rodeoooo 🎵",
    "lo que hay x aquí 🎶",
    "A mí 💫",
    "SONRISA 😊"
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#FFE5D9]/30">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Music className="w-8 h-8 text-[#FFB59D]" />
        <h2 className="text-center text-[#7A6A7E]">Conciertos y Rels B</h2>
        <Mic2 className="w-8 h-8 text-[#FFB59D]" />
      </div>
      
      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1735748917428-be035e873f97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpYyUyMGxpZ2h0c3xlbnwxfHx8fDE3NzAzOTEwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Concierto"
          className="w-full aspect-video object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {musicMoments.map((moment, index) => {
          const Icon = moment.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-gradient-to-br from-[#FFE5D9] to-[#FFF0E6] p-6 rounded-2xl text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white/80 rounded-full">
                  <Icon className="w-8 h-8 text-[#FFB59D]" />
                </div>
              </div>
              <h3 className="mb-2 text-[#7A6A7E]">{moment.title}</h3>
              <p className="text-sm text-[#8B7A8F]">{moment.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="bg-white/80 p-6 rounded-2xl">
        <h3 className="mb-4 text-center text-[#7A6A7E] flex items-center justify-center gap-2">
          <Heart className="w-5 h-5 text-[#FFB59D] fill-[#FFB59D]" />
          Temas de Rels B
          <Heart className="w-5 h-5 text-[#FFB59D] fill-[#FFB59D]" />
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {relsBSongs.map((song, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-gradient-to-br from-[#FFE5D9] to-[#FFF0E6] p-4 rounded-xl text-center"
            >
              <p className="text-[#7A6A7E]">{song}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="text-center mt-6 text-[#7A6A7E] italic">
        "La música es el lenguaje del alma, y tú bailas con el corazón 🎵💕"
      </p>
    </div>
  );
}