import { Link, useParams } from "react-router-dom";
import { lessons } from "@/data/lessons";
import { CheckCircle, Circle, BookOpen, Home, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const LessonSidebar = () => {
  const { id } = useParams();
  const currentId = parseInt(id || "1");
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Get completed lessons from localStorage
  const getCompletedLessons = (): number[] => {
    const saved = localStorage.getItem("completedLessons");
    return saved ? JSON.parse(saved) : [];
  };

  const completedLessons = getCompletedLessons();

  return (
    <aside 
      className={cn(
        "bg-sidebar border-r border-sidebar-border h-screen sticky top-0 transition-all duration-300 flex flex-col",
        isCollapsed ? "w-16" : "w-72"
      )}
    >
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
        {!isCollapsed && (
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center group-hover:scale-105 transition-transform">
              <BookOpen className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-sidebar-foreground">front-end.uz</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex-shrink-0"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Home Link */}
      <div className="p-2">
        <Link to="/">
          <Button 
            variant="ghost" 
            className={cn(
              "w-full justify-start gap-3",
              isCollapsed && "justify-center px-2"
            )}
          >
            <Home className="w-4 h-4 flex-shrink-0" />
            {!isCollapsed && <span>Bosh sahifa</span>}
          </Button>
        </Link>
      </div>

      {/* Lessons List */}
      <div className="flex-1 overflow-y-auto p-2">
        {!isCollapsed && (
          <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Darslar
          </div>
        )}
        
        <nav className="space-y-1">
          {lessons.map((lesson) => {
            const isActive = lesson.id === currentId;
            const isCompleted = completedLessons.includes(lesson.id);

            return (
              <Link
                key={lesson.id}
                to={`/lessons/${lesson.id}`}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                  isActive 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                  isCollapsed && "justify-center px-2"
                )}
              >
                <div className={cn(
                  "w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-sm font-medium transition-all",
                  isActive 
                    ? "hero-gradient text-primary-foreground" 
                    : isCompleted
                      ? "bg-success/20 text-success"
                      : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                )}>
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    lesson.id
                  )}
                </div>
                
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <div className={cn(
                      "font-medium text-sm truncate",
                      isActive && "text-primary"
                    )}>
                      {lesson.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {lesson.duration}
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Progress Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{completedLessons.length}/15</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full hero-gradient transition-all duration-500"
              style={{ width: `${(completedLessons.length / 15) * 100}%` }}
            />
          </div>
        </div>
      )}
    </aside>
  );
};

export default LessonSidebar;
