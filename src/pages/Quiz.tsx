import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizQuestions } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, XCircle, ArrowRight, Trophy, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const question = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleSelectAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    setAnswers([...answers, selectedAnswer]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      return score + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
    setIsFinished(false);
  };

  if (isFinished) {
    const score = calculateScore();
    const passed = score >= 25;

    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-lg w-full text-center">
          <div className={cn(
            "w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center",
            passed ? "bg-success/20" : "bg-destructive/20"
          )}>
            {passed ? (
              <Trophy className="w-12 h-12 text-success" />
            ) : (
              <XCircle className="w-12 h-12 text-destructive" />
            )}
          </div>

          <h1 className="font-display text-3xl font-bold mb-4">
            {passed ? "Tabriklaymiz! 🎉" : "Afsuski, o'ta olmadingiz"}
          </h1>

          <p className="text-xl text-muted-foreground mb-6">
            Sizning natijangiz: <span className="font-bold text-foreground">{score}</span> / {totalQuestions}
          </p>

          <div className="bg-card rounded-2xl p-6 mb-8 border">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>To'g'ri javoblar</span>
              <span>{score} ta</span>
            </div>
            <Progress value={(score / totalQuestions) * 100} className="mb-4" />
            
            <p className="text-sm text-muted-foreground">
              {passed 
                ? "Siz kursni muvaffaqiyatli yakunladingiz! Endi sertifikat olishingiz mumkin."
                : "O'tish uchun kamida 25 ta to'g'ri javob kerak. Yana urinib ko'ring!"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {passed ? (
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate("/certificate")}
              >
                <Trophy className="w-5 h-5 mr-2" />
                Sertifikat olish
              </Button>
            ) : (
              <Button 
                variant="default" 
                size="lg"
                onClick={handleRestart}
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Qayta urinish
              </Button>
            )}
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/")}
            >
              Bosh sahifaga
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-display font-bold text-lg">Yakuniy test</h1>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} / {totalQuestions}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </header>

      {/* Question */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Savol {currentQuestion + 1}
          </div>
          <h2 className="font-display text-2xl font-bold mb-2">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            const showCorrectness = showResult;

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={showResult}
                className={cn(
                  "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
                  "flex items-center gap-4",
                  !showResult && isSelected && "border-primary bg-primary/5",
                  !showResult && !isSelected && "border-border hover:border-primary/50 hover:bg-accent/50",
                  showCorrectness && isCorrect && "border-success bg-success/10",
                  showCorrectness && isSelected && !isCorrect && "border-destructive bg-destructive/10",
                  showResult && "cursor-default"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center font-medium text-sm flex-shrink-0",
                  !showResult && isSelected && "bg-primary text-primary-foreground",
                  !showResult && !isSelected && "bg-muted text-muted-foreground",
                  showCorrectness && isCorrect && "bg-success text-white",
                  showCorrectness && isSelected && !isCorrect && "bg-destructive text-white"
                )}>
                  {showCorrectness ? (
                    isCorrect ? <CheckCircle className="w-4 h-4" /> : isSelected ? <XCircle className="w-4 h-4" /> : String.fromCharCode(65 + index)
                  ) : (
                    String.fromCharCode(65 + index)
                  )}
                </div>
                <span className="flex-1">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className={cn(
            "p-4 rounded-xl mb-8",
            selectedAnswer === question.correctAnswer 
              ? "bg-success/10 border border-success/30" 
              : "bg-primary/10 border border-primary/30"
          )}>
            <p className="text-sm">
              <span className="font-medium">Tushuntirish:</span> {question.explanation}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end">
          {!showResult ? (
            <Button 
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              variant="hero"
              size="lg"
            >
              Javobni tekshirish
            </Button>
          ) : (
            <Button 
              onClick={handleNextQuestion}
              variant="hero"
              size="lg"
            >
              {currentQuestion < totalQuestions - 1 ? (
                <>
                  Keyingi savol
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Natijani ko'rish
                  <Trophy className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz;
