import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, Tooltip } from "recharts";

const data = [
  { name: "Short-form Videos", planA: 12, planB: 17 },
  { name: "Creative Posts", planA: 10, planB: 14 },
  { name: "SEO Blogs", planA: 2, planB: 4 },
];

export const ContentComparisonChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="p-6 rounded-2xl bg-card border border-border/50"
    >
      <h4 className="font-sora font-semibold text-lg mb-6">Monthly Content Volume</h4>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 20%)" />
            <XAxis type="number" stroke="hsl(220 10% 60%)" fontSize={12} />
            <YAxis 
              dataKey="name" 
              type="category" 
              stroke="hsl(220 10% 60%)" 
              fontSize={12}
              width={100}
            />
            <Tooltip 
              contentStyle={{ 
                background: "hsl(220 18% 10%)", 
                border: "1px solid hsl(220 15% 20%)",
                borderRadius: "8px",
                fontSize: "12px"
              }}
            />
            <Bar dataKey="planA" name="Plan A" radius={[0, 4, 4, 0]}>
              {data.map((_, index) => (
                <Cell key={`cell-a-${index}`} fill="hsl(0 75% 50%)" />
              ))}
            </Bar>
            <Bar dataKey="planB" name="Plan B" radius={[0, 4, 4, 0]}>
              {data.map((_, index) => (
                <Cell key={`cell-b-${index}`} fill="hsl(25 90% 55%)" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-primary" />
          <span className="text-xs text-muted-foreground">Plan A</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-accent" />
          <span className="text-xs text-muted-foreground">Plan B</span>
        </div>
      </div>
    </motion.div>
  );
};
