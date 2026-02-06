import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registrado:', registration);
        })
        .catch((error) => {
          console.log('Error al registrar Service Worker:', error);
        });
    }
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('PWA instalada');
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border-2 border-[#E6A4C7]/30">
            <button
              onClick={() => setShowPrompt(false)}
              className="absolute top-3 right-3 text-[#8B7A8F] hover:text-[#5A4A5E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-[#FFD6E8] to-[#E6D5F5] rounded-xl">
                <Download className="w-6 h-6 text-[#E6A4C7]" />
              </div>
              
              <div className="flex-1">
                <h3 className="mb-2 text-[#5A4A5E]">Instalar App para Fati</h3>
                <p className="text-sm text-[#8B7A8F] mb-4">
                  Instala esta aplicación en tu dispositivo para acceder rápidamente siempre que quieras 💕
                </p>
                
                <button
                  onClick={handleInstall}
                  className="w-full bg-gradient-to-r from-[#E6A4C7] to-[#C78DB5] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-shadow"
                >
                  Instalar ahora
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
