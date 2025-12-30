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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        <div className="bg-card border border-border/50 rounded-3xl shadow-2xl p-8">
          {/* Logos */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <img src={excellenceLogo} alt="Excellence Hot Sauce" className="h-16 w-auto" />
            <div className="w-px h-12 bg-border" />
            <img src={brandvoxLogo} alt="Brand Vox" className="h-10 w-auto" />
          </div>

          <div className="text-center mb-8">
            <h1 className="font-sora text-2xl font-bold text-foreground mb-2">
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {mode === "login" ? "Sign in to view the proposal" : "Sign up to access the proposal"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </motion.div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="pl-10"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="pl-10"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              variant="approve" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Lock className="w-4 h-4" />
              )}
              {mode === "login" ? "Sign In" : "Sign Up"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setMode(mode === "login" ? "signup" : "login");
                setError("");
              }}
              className="text-sm text-primary hover:underline"
            >
              {mode === "login" 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"}
            </button>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-6">
            This proposal is protected. Authorized access only.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
