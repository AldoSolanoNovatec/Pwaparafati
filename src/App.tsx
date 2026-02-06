import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { TulipSection } from "./components/TulipSection";
import { PoemsSection } from "./components/PoemsSection";
import { SwimmingSection } from "./components/SwimmingSection";
import { MusicSection } from "./components/MusicSection";
import { SeriesSection } from "./components/SeriesSection";
import { SpecialMomentsSection } from "./components/SpecialMomentsSection";
import { PWAInstallPrompt } from "./components/PWAInstallPrompt";
import { Flower2, Book, Waves, Music, Tv, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5F9] to-[#F5E8F0]">
      <HeroSection />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Tabs defaultValue="tulipanes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 gap-2 bg-white/60 backdrop-blur-sm p-2 rounded-2xl border-2 border-[#E6A4C7]/20">
            <TabsTrigger value="tulipanes" className="data-[state=active]:bg-[#FFD6E8] rounded-xl">
              <Flower2 className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Tulipanes</span>
            </TabsTrigger>
            <TabsTrigger value="poemas" className="data-[state=active]:bg-[#E6D5F5] rounded-xl">
              <Book className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Poemas</span>
            </TabsTrigger>
            <TabsTrigger value="nadar" className="data-[state=active]:bg-[#D4E8FF] rounded-xl">
              <Waves className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Nadar</span>
            </TabsTrigger>
            <TabsTrigger value="musica" className="data-[state=active]:bg-[#FFE5D9] rounded-xl">
              <Music className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Música</span>
            </TabsTrigger>
            <TabsTrigger value="series" className="data-[state=active]:bg-[#D5F5E3] rounded-xl">
              <Tv className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Series</span>
            </TabsTrigger>
            <TabsTrigger value="momentos" className="data-[state=active]:bg-[#FFF8DC] rounded-xl">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Momentos</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tulipanes" className="mt-8">
            <TulipSection />
          </TabsContent>

          <TabsContent value="poemas" className="mt-8">
            <PoemsSection />
          </TabsContent>

          <TabsContent value="nadar" className="mt-8">
            <SwimmingSection />
          </TabsContent>

          <TabsContent value="musica" className="mt-8">
            <MusicSection />
          </TabsContent>

          <TabsContent value="series" className="mt-8">
            <SeriesSection />
          </TabsContent>

          <TabsContent value="momentos" className="mt-8">
            <SpecialMomentsSection />
          </TabsContent>
        </Tabs>
      </div>

      <footer className="text-center py-12 px-4">
        <p className="text-[#7A6A7E]">
          Hecho con 💕 para Fati
        </p>
      </footer>

      <PWAInstallPrompt />
    </div>
  );
}