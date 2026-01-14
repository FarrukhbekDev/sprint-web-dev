import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Layers, Zap, CheckCircle, Users } from "lucide-react";
import { lessons } from "@/data/lessons";

const Landing = () => {
  const features = [
    {
      icon: BookOpen,
      title: "15 ta oson dars",
      description: "Bosqichma-bosqich, sodda tilda yozilgan darslar"
    },
    {
      icon: Code,
      title: "Amaliy misollar",
      description: "Har bir darsda tayyor kod namunalari"
    },
    {
      icon: Layers,
      title: "Topshiriqlar",
      description: "Har dars oxirida mustahkamlovchi topshiriqlar"
    },
    {
      icon: Zap,
      title: "Tezkor o'rganish",
      description: "15 daqiqadan 40 daqiqagacha davom etadigan darslar"
    }
  ];

  const stats = [
    { value: "15", label: "Darslar" },
    { value: "45+", label: "Misollar" },
    { value: "15", label: "Topshiriqlar" },
    { value: "100%", label: "Bepul" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">front-end.uz</span>
          </Link>
          <Link to="/lessons/1">
            <Button variant="hero" size="lg">
              Darslarni boshlash
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in">
            <Zap className="w-4 h-4" />
            15 darsda front-end asoslarini o'rganing
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Front-End dasturlashni{" "}
            <span className="text-gradient">oson</span> o'rganing
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in">
            HTML, CSS, JavaScript va React asoslarini o'zbek tilida, sodda va tushunarli darslar orqali o'rganing. 
            Hech qanday oldindan bilim talab qilinmaydi.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Link to="/lessons/1">
              <Button variant="hero" size="xl">
                Bepul boshlash
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/lessons/1">
              <Button variant="outline" size="xl">
                Darslar ro'yxati
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Nega aynan bu kurs?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Boshlovchilar uchun maxsus tayyorlangan, sodda va samarali o'quv dasturi
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="lesson-card group hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Kurs dasturi
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              15 ta dars orqali front-end dasturlash asoslarini o'rganing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lessons.map((lesson, index) => (
              <Link 
                key={lesson.id} 
                to={`/lessons/${lesson.id}`}
                className="lesson-card group flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="font-display font-bold text-primary-foreground">{lesson.id}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">{lesson.description}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <BookOpen className="w-3 h-3" />
                    {lesson.duration}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="hero-gradient rounded-3xl p-8 md:p-16 text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Bugun boshlang!
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Front-end dasturlashni o'rganish hech qachon bu qadar oson bo'lmagan. 
              15 darsda professional web sahifalar yaratishni o'rganing.
            </p>
            <Link to="/lessons/1">
              <Button variant="accent" size="xl">
                Birinchi darsni boshlash
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
              <Code className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold">front-end.uz</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 front-end.uz — O'zbek tilida bepul front-end kursi
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
