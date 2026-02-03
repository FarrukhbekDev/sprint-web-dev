import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Layers, Zap, CheckCircle, Users, Sparkles, Trophy, Star, Play, GraduationCap } from "lucide-react";
import { lessons } from "@/data/lessons";
const Landing = () => {
  const features = [{
    icon: BookOpen,
    title: "20 ta oson dars",
    description: "Bosqichma-bosqich, sodda tilda yozilgan darslar",
    color: "from-primary to-primary/70"
  }, {
    icon: Code,
    title: "Amaliy misollar",
    description: "Har bir darsda tayyor kod namunalari",
    color: "from-accent to-accent/70"
  }, {
    icon: Layers,
    title: "Topshiriqlar",
    description: "Har dars oxirida mustahkamlovchi topshiriqlar",
    color: "from-success to-success/70"
  }, {
    icon: Zap,
    title: "Tezkor o'rganish",
    description: "Oson va tushunarli formatda tayyorlangan",
    color: "from-primary to-accent"
  }];
  const stats = [{
    value: "20",
    label: "Darslar",
    icon: BookOpen
  }, {
    value: "60+",
    label: "Misollar",
    icon: Code
  }, {
    value: "30",
    label: "Test savollari",
    icon: CheckCircle
  }, {
    value: "100%",
    label: "Bepul",
    icon: Star
  }];
  const technologies = [{
    name: "HTML5",
    color: "bg-orange-500"
  }, {
    name: "CSS3",
    color: "bg-blue-500"
  }, {
    name: "JavaScript",
    color: "bg-yellow-500"
  }, {
    name: "React",
    color: "bg-cyan-500"
  }, {
    name: "Git",
    color: "bg-red-500"
  }];
  return <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" style={{
        animationDelay: "2s"
      }} />
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" style={{
        animationDelay: "4s"
      }} />
      </div>

      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl hero-gradient flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform glow-primary">
              <Code className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl">front-end.uz</span>
              <span className="text-xs text-muted-foreground">O'zbek tilida bepul kurs</span>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/quiz" className="hidden sm:block">
              <Button variant="ghost" size="sm">
                <Trophy className="w-4 h-4 mr-2" />
                Test topshirish
              </Button>
            </Link>
            <Link to="/lessons/1">
              <Button variant="hero" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                Boshlash
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container mx-auto text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-8 animate-fade-in shadow-lg">
            <Sparkles className="w-4 h-4" />
            20 ta darsda front-end asoslarini o'rganing
            <span className="px-2 py-0.5 rounded-full bg-primary/20 text-xs">Yangi</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in leading-tight">
            Front-End ni{" "}
            <span className="relative">
              <span className="text-gradient">oson</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 4 150 4 198 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            {" "}o'rganing
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in leading-relaxed">
            HTML, CSS, JavaScript va React asoslarini <span className="text-foreground font-medium">o'zbek tilida</span>, sodda va tushunarli darslar orqali o'rganing. 
            <span className="text-primary font-medium"> Hech qanday tajriba talab qilinmaydi.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in mb-16">
            <Link to="/lessons/1">
              <Button variant="hero" size="xl" className="shadow-xl hover:shadow-2xl transition-all hover:scale-105 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Bepul boshlash
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/quiz">
              <Button variant="outline" size="xl" className="border-2 hover:bg-muted/50">
                <Trophy className="w-5 h-5 mr-2" />
                Bilimingizni tekshiring
              </Button>
            </Link>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in">
            <span className="text-sm text-muted-foreground mr-2">O'rganasiz:</span>
            {technologies.map((tech, index) => <div key={tech.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm hover:shadow-md transition-all hover:scale-105" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className={`w-2 h-2 rounded-full ${tech.color}`} />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => <div key={index} className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 group" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-12 h-12 rounded-xl hero-gradient mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="font-display text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              <Star className="w-4 h-4" />
              Kurs afzalliklari
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Nega aynan <span className="text-gradient">bu kurs</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Boshlovchilar uchun maxsus tayyorlangan, sodda va samarali o'quv dasturi
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <div key={index} className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2" style={{
            animationDelay: `${index * 100}ms`
          }}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="relative font-display font-bold text-xl mb-3">{feature.title}</h3>
                <p className="relative text-muted-foreground">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-background" />
        <div className="container mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <BookOpen className="w-4 h-4" />
              Kurs tarkibi
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">20 ta dars</span> orqali o'rganing
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Har bir dars amaliy misollar va topshiriqlar bilan boyitilgan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {lessons.map((lesson, index) => <Link key={lesson.id} to={`/lessons/${lesson.id}`} className="group relative bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                    <span className="font-display font-bold text-primary-foreground text-lg">{lesson.id}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold mb-1.5 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {lesson.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <BookOpen className="w-3 h-3" />
                      <span>Dars {lesson.id}</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover arrow */}
                <ArrowRight className="absolute bottom-5 right-5 w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>)}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-accent p-10 md:p-16 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mx-auto mb-8 flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                Sertifikat oling! 🎓
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
                20 ta darsni o'zlashtiring, yakuniy testdan o'ting va 
                <span className="text-white font-semibold"> front-end.uz sertifikatini</span> qo'lga kiriting!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/lessons/1">
                  <Button variant="accent" size="xl" className="shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                    <Play className="w-5 h-5 mr-2" />
                    Darslarni boshlash
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button size="xl" className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 backdrop-blur-sm">
                    <Trophy className="w-5 h-5 mr-2" />
                    Testga o'tish
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Bugun <span className="text-gradient">boshlang</span>!
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Front-end dasturlashni o'rganish hech qachon bu qadar oson bo'lmagan. 
            20 darsda professional web sahifalar yaratishni o'rganing.
          </p>
          <Link to="/lessons/1">
            <Button variant="hero" size="xl" className="shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              Birinchi darsni boshlash
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center shadow-md">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-lg">front-end.uz</span>
                <p className="text-xs text-muted-foreground">O'zbek tilida bepul front-end kursi</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <Link to="/lessons/1" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Darslar
              </Link>
              <Link to="/quiz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Test
              </Link>
              <Link to="/certificate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sertifikat
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © 2026 <span className="font-medium"></span>. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Landing;