import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Award, Download, Home, Printer } from "lucide-react";

const Certificate = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const currentDate = new Date().toLocaleDateString("uz-UZ", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const handlePrint = () => {
    window.print();
  };

  const handleGenerateCertificate = () => {
    if (name.trim()) {
      setShowCertificate(true);
    }
  };

  if (!showCertificate) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mx-auto mb-6 flex items-center justify-center">
            <Award className="w-10 h-10 text-white" />
          </div>

          <h1 className="font-display text-3xl font-bold mb-4">
            Tabriklaymiz! 🎉
          </h1>
          <p className="text-muted-foreground mb-8">
            Siz "Frontend Sprint" kursini muvaffaqiyatli yakunladingiz! 
            Sertifikatingizni olish uchun ismingizni kiriting.
          </p>

          <div className="space-y-4">
            <Input
              type="text"
              placeholder="To'liq ismingizni kiriting"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-center text-lg py-6"
            />

            <Button 
              onClick={handleGenerateCertificate}
              variant="hero"
              size="lg"
              className="w-full"
              disabled={!name.trim()}
            >
              <Award className="w-5 h-5 mr-2" />
              Sertifikat olish
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              className="w-full"
              onClick={() => navigate("/")}
            >
              <Home className="w-5 h-5 mr-2" />
              Bosh sahifaga
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Actions - hidden in print */}
      <div className="print:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
          >
            <Home className="w-4 h-4 mr-2" />
            Bosh sahifa
          </Button>
          <Button 
            variant="hero"
            onClick={handlePrint}
          >
            <Printer className="w-4 h-4 mr-2" />
            Chop etish / PDF saqlash
          </Button>
        </div>
      </div>

      {/* Certificate */}
      <div className="p-4 sm:p-8 print:p-0">
        <div 
          ref={certificateRef}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none"
        >
          {/* Certificate Content */}
          <div className="relative p-8 sm:p-16 print:p-16">
            {/* Decorative Border */}
            <div className="absolute inset-4 sm:inset-8 border-4 border-double border-amber-400/50 rounded-lg pointer-events-none" />
            
            {/* Corner Decorations */}
            <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 border-l-4 border-t-4 border-amber-500 rounded-tl-lg" />
            <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 border-r-4 border-t-4 border-amber-500 rounded-tr-lg" />
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 border-l-4 border-b-4 border-amber-500 rounded-bl-lg" />
            <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 border-r-4 border-b-4 border-amber-500 rounded-br-lg" />

            {/* Content */}
            <div className="relative text-center space-y-6 sm:space-y-8 py-8">
              {/* Logo/Badge */}
              <div className="flex justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <Award className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>

              {/* Title */}
              <div>
                <p className="text-amber-600 font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-2">
                  front-end.uz
                </p>
                <h1 className="font-display text-3xl sm:text-5xl font-bold text-gray-800 tracking-wide">
                  SERTIFIKAT
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-gray-500 text-base sm:text-lg">
                Ushbu sertifikat tasdiqlaydiki
              </p>

              {/* Name */}
              <div className="py-4">
                <p className="font-display text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 border-b-2 border-amber-400 pb-2 inline-block px-8">
                  {name || "_______________"}
                </p>
              </div>

              {/* Description */}
              <div className="max-w-2xl mx-auto space-y-2">
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  "<span className="font-semibold text-gray-800">Frontend Sprint</span>" kursini muvaffaqiyatli yakunladi
                </p>
                <p className="text-gray-500 text-sm sm:text-base">
                  HTML, CSS, JavaScript va React texnologiyalari bo'yicha 20 ta darsni o'zlashtirdi 
                  va yakuniy testdan muvaffaqiyatli o'tdi
                </p>
              </div>

              {/* Date and Signature */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 pt-8 text-sm text-gray-500">
                <div className="text-center">
                  <div className="w-32 sm:w-40 border-b-2 border-gray-300 mb-2 h-8 flex items-end justify-center">
                    <span className="text-gray-700 font-medium">{currentDate}</span>
                  </div>
                  <p className="text-xs uppercase tracking-wider">Sana</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 sm:w-40 border-b-2 border-gray-300 mb-2 h-8 flex items-end justify-center">
                    <span className="font-display text-lg text-amber-600 italic">front-end.uz</span>
                  </div>
                  <p className="text-xs uppercase tracking-wider">Imzo</p>
                </div>
              </div>

              {/* Certificate ID */}
              <div className="pt-4">
                <p className="text-xs text-gray-400">
                  Sertifikat ID: FE-{Date.now().toString(36).toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:p-0 {
            padding: 0 !important;
          }
          
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          
          .print\\:rounded-none {
            border-radius: 0 !important;
          }
          
          .print\\:p-16 {
            padding: 4rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Certificate;
