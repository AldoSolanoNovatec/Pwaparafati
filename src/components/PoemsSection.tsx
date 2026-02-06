import { Book, Heart } from "lucide-react";
import { motion } from "motion/react";

export function PoemsSection() {
  const poems = [
    {
      title: "Tulipán de Primavera",
      lines: [
        "Como un tulipán en jardín florido,",
        "así iluminas cada despertar,",
        "con la gracia que el viento ha traído,",
        "y la ternura de tu caminar."
      ]
    },
    {
      title: "Versos al Agua",
      lines: [
        "En las olas encuentras libertad,",
        "nadando entre sueños de cristal,",
        "cada brazada una eternidad,",
        "de belleza y fuerza sin igual."
      ]
    },
    {
      title: "Melodía para Fati",
      lines: [
        "Como canción de Rels B en concierto,",
        "tu risa resuena en mi corazón,",
        "cada palabra un verso despierto,",
        "cada momento una dulce canción."
      ]
    }
  ];

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#E6D5F5]/30">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Book className="w-8 h-8 text-[#9D7DB5]" />
        <h2 className="text-center text-[#7A6A7E]">Versos para ti</h2>
        <Heart className="w-8 h-8 text-[#E6A4C7] fill-[#E6A4C7]" />
      </div>
      
      <div className="space-y-6 max-w-2xl mx-auto">
        {poems.map((poem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gradient-to-br from-white/90 to-[#F5E8F0]/50 p-6 rounded-2xl border border-[#E6D5F5]/50"
          >
            <h3 className="mb-4 text-center text-[#7A6A7E]">{poem.title}</h3>
            <div className="space-y-2">
              {poem.lines.map((line, lineIndex) => (
                <p key={lineIndex} className="text-[#7A6A7E] italic leading-relaxed text-center">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-[#7A6A7E] italic">
          "La poesía vive en cada momento contigo 📖✨"
        </p>
      </div>
    </div>
  );
}
