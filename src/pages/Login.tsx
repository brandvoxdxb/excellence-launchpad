import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { Lock, Mail, AlertCircle, Loader2 } from "lucide-react";
import brandvoxLogo from "@/assets/brandvox-logo.png";
import excellenceLogo from "@/assets/excellence-hotsauce-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const { login, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setIsSubmitting(true);

    try {
      if (mode === "login") {
        const { error } = await login(email, password);
        if (error) {
          setError(error);
        } else {
          navigate("/");
        }
      } else {
        const { error } = await signUp(email, password);
        if (error) {
          if (error.includes("already registered")) {
            setError("This email is already registered. Please sign in instead.");
          } else {
            setError(error);
          }
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen min-h-[100dvh] bg-background flex items-center justify-center px-4 py-8 sm:p-6 md:p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[95%] sm:max-w-md relative z-10"
      >
        <div className="bg-card border border-border/50 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8">
          {/* Logos */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <img 
              src={excellenceLogo} 
              alt="Excellence Hot Sauce" 
              className="h-12 sm:h-16 w-auto object-contain" 
            />
            <div className="w-px h-10 sm:h-12 bg-border" />
            <img 
              src={brandvoxLogo} 
              alt="Brand Vox" 
              className="h-8 sm:h-10 w-auto object-contain" 
            />
          </div>

          <div className="text-center mb-6 sm:mb-8">
            <h1 className="font-sora text-xl sm:text-2xl font-bold text-foreground mb-1.5 sm:mb-2">
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-muted-foreground text-xs sm:text-sm">
              {mode === "login" ? "Sign in to view the proposal" : "Sign up to access the proposal"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-xs sm:text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{error}</span>
              </motion.div>
            )}

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-foreground text-sm">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10 h-11 sm:h-12 text-sm sm:text-base"
                  disabled={isSubmitting}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="password" className="text-foreground text-sm">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="pl-10 h-11 sm:h-12 text-sm sm:text-base"
                  disabled={isSubmitting}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              variant="approve" 
              size="lg" 
              className="w-full h-11 sm:h-12 text-sm sm:text-base font-medium mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
              ) : (
                <Lock className="w-4 h-4 mr-2" />
              )}
              {mode === "login" ? "Sign In" : "Sign Up"}
            </Button>
          </form>

          <div className="mt-5 sm:mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setMode(mode === "login" ? "signup" : "login");
                setError("");
              }}
              className="text-xs sm:text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-card rounded px-2 py-1 transition-colors"
            >
              {mode === "login" 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"}
            </button>
          </div>

          <p className="text-[10px] sm:text-xs text-center text-muted-foreground mt-5 sm:mt-6 leading-relaxed">
            This proposal is protected. Authorized access only.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
