import { useParams, Link, useNavigate } from "react-router-dom";
import { lessons } from "@/data/lessons";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Lightbulb, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";
import LessonSidebar from "@/components/LessonSidebar";

const Lesson = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonId = parseInt(id || "1");
  const lesson = lessons.find(l => l.id === lessonId);
  const [isCompleted, setIsCompleted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("completedLessons");
    const completed: number[] = saved ? JSON.parse(saved) : [];
    setIsCompleted(completed.includes(lessonId));
  }, [lessonId]);

  const markAsComplete = () => {
    const saved = localStorage.getItem("completedLessons");
    const completed: number[] = saved ? JSON.parse(saved) : [];
    
    if (!completed.includes(lessonId)) {
      completed.push(lessonId);
      localStorage.setItem("completedLessons", JSON.stringify(completed));
      setIsCompleted(true);
    }
  };

  const copyCode = () => {
    if (lesson?.codeExample) {
      navigator.clipboard.writeText(lesson.codeExample);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold mb-4">Dars topilmadi</h1>
          <Link to="/">
            <Button>Bosh sahifaga qaytish</Button>
          </Link>
        </div>
      </div>
    );
  }

  const prevLesson = lessonId > 1 ? lessonId - 1 : null;
  const nextLesson = lessonId < lessons.length ? lessonId + 1 : null;

  return (
    <div className="flex min-h-screen bg-background">
      <LessonSidebar />
      
      <main className="flex-1 min-w-0">
        {/* Lesson Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
                  <span className="font-display font-bold text-primary-foreground">{lesson.id}</span>
                </div>
                <div>
                  <h1 className="font-display font-bold text-lg">{lesson.title}</h1>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    Dars {lesson.id} / {lessons.length}
                  </div>
                </div>
              </div>
              
              {isCompleted ? (
                <div className="flex items-center gap-2 text-success font-medium">
                  <CheckCircle className="w-5 h-5" />
                  <span className="hidden sm:inline">Tugatilgan</span>
                </div>
              ) : (
                <Button onClick={markAsComplete} variant="success" size="sm">
                  <CheckCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Tugatilgan deb belgilash</span>
                </Button>
              )}
            </div>
          </div>
        </header>

        {/* Lesson Content */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Description */}
          <div className="mb-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-muted-foreground">{lesson.description}</p>
          </div>

          {/* Main Content */}
          <div className="prose prose-slate max-w-none mb-10">
            {lesson.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="font-display text-xl font-bold mt-8 mb-4 text-foreground">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="font-display text-lg font-semibold mt-6 mb-3 text-foreground">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-foreground/80">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-foreground/80 leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Code Example */}
          {lesson.codeExample && (
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-semibold text-lg">Kod namunasi</h3>
                <Button variant="ghost" size="sm" onClick={copyCode}>
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Nusxalandi
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Nusxalash
                    </>
                  )}
                </Button>
              </div>
              <div className="code-block bg-foreground/5 border border-border overflow-x-auto">
                <pre className="text-sm leading-relaxed">
                  <code>{lesson.codeExample}</code>
                </pre>
              </div>
            </div>
          )}

          {/* VS Code Steps */}
          {lesson.vsCodeSteps && (
            <div className="mb-10 p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30">
              <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-blue-500">💻</span> VS Code da qanday qilish:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-foreground/80">
                {lesson.vsCodeSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Assignment */}
          <div className="mb-6 p-6 rounded-2xl bg-accent/10 border border-accent/30">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl accent-gradient flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2">{lesson.assignment.title}</h3>
                <p className="text-foreground/80 mb-4">{lesson.assignment.description}</p>
                {lesson.assignment.hint && (
                  <div className="text-sm text-muted-foreground bg-background/50 rounded-lg p-3">
                    <span className="font-medium">💡 Maslahat:</span> {lesson.assignment.hint}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Solution Code */}
          {lesson.assignment.solution && (
            <div className="mb-10">
              <details className="group">
                <summary className="flex items-center gap-2 cursor-pointer font-display font-semibold text-lg mb-3 text-green-600 hover:text-green-500">
                  <span>✅ Yechim (bosib ko'ring)</span>
                </summary>
                <div className="code-block bg-green-500/5 border border-green-500/30 overflow-x-auto mt-2">
                  <pre className="text-sm leading-relaxed">
                    <code>{lesson.assignment.solution}</code>
                  </pre>
                </div>
              </details>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-border">
            {prevLesson ? (
              <Link to={`/lessons/${prevLesson}`}>
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Oldingi dars</span>
                </Button>
              </Link>
            ) : (
              <div />
            )}
            
            {nextLesson ? (
              <Link to={`/lessons/${nextLesson}`}>
                <Button variant="hero" className="gap-2">
                  <span className="hidden sm:inline">Keyingi dars</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <Link to="/quiz">
                <Button variant="success" className="gap-2">
                  Yakuniy testga o'tish
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Lesson;
