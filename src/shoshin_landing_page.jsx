import React, { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="font-sans bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-br from-purple-700 to-indigo-800 text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold mb-4">Lernen, das bleibt.</h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          ShoShin – die E-Learning-App für Schüler & Studierende, die Inhalte visuell, spielerisch und interaktiv vermittelt.
        </p>
        <div className="flex justify-center">
          <a href="#anmeldung" className="bg-indigo-500 hover:bg-indigo-600 transition px-6 py-3 rounded-2xl text-white font-semibold shadow-lg">
            Jetzt vormerken
          </a>
        </div>
      </header>

      {/* Section 1 */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Warum ShoShin?</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
            <h3 className="font-bold text-xl mb-4 text-purple-400">Die Probleme klassischer Lernmethoden:</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>📄 Lange Texte ohne Kontext</li>
              <li>😓 Wenig Motivation & keine visuelle Aufbereitung</li>
              <li>🧑‍🏫 Frontalunterricht statt Mitdenken</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
            <h3 className="font-bold text-xl mb-4 text-green-400">Was ShoShin anders macht:</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>🎯 Microlearning + Visuals + Audio + Quiz</li>
              <li>🏆 Belohnungssystem & Lernpfade</li>
              <li>💡 Entwickelt für motiviertes, nachhaltiges Lernen</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">So funktioniert’s</h2>
          <ol className="space-y-6 text-lg">
            <li>
              <strong>1. Wähle dein Thema:</strong> BWL, Geschichte, Biologie…
            </li>
            <li>
              <strong>2. Inhalte anhören, mit Bild und Interaktion</strong>
            </li>
            <li>
              <strong>3. Lerne in Modulen:</strong>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>🔑 Schlagwort</li>
                <li>🖼️ Bild</li>
                <li>🔤 Hangman</li>
                <li>✅ Multiple Choice</li>
                <li>🔊 Audio-Lückentext</li>
              </ul>
            </li>
            <li>
              <strong>4. Punkte sammeln & Puzzle lösen:</strong>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>🧩 Spielerisch motiviert bleiben</li>
                <li>📈 Übersichtlicher Fortschritt</li>
              </ul>
            </li>
          </ol>
          <div className="mt-10 text-center">
            <div className="w-full max-w-lg h-64 mx-auto bg-gray-700 rounded-2xl flex items-center justify-center shadow-inner">
              <span className="text-gray-400">[Mockup/Screenshot einfügen]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Für wen ist ShoShin?</h2>
        <ul className="space-y-4 text-lg list-disc list-inside">
          <li>🎓 Schüler:innen ab der Oberstufe</li>
          <li>📚 Studierende & Lernende in Vorlesungen</li>
          <li>🧠 Menschen, die visuell, praktisch & in kurzen Einheiten lernen wollen</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section id="anmeldung" className="bg-gradient-to-br from-indigo-800 to-purple-800 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Jetzt dabei sein!</h2>
        <p className="mb-6 text-lg">Werde Beta-Testerin: Trage dich hier ein und gehöre zu den ersten Nutzer:innen!</p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input type="email" placeholder="E-Mail-Adresse" className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-900 text-white" />
          <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg">
            Jetzt vormerken
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-8 bg-gray-950 text-gray-400">
        <p className="mb-2 font-semibold text-gray-200">ShoShin – Lernen, das bleibt.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">Impressum</a>
          <a href="/datenschutz" className="hover:text-white">Datenschutz</a>
          <span>Kontakt: shoshin.artoflife@gmail.com</span>
          <a href="https://www.linkedin.com/company/shoshin-artoflife/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
