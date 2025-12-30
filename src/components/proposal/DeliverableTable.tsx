import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DeliverableRow {
  platform: string;
  planA: string;
  planB: string;
}

interface DeliverableTableProps {
  rows: DeliverableRow[];
  selectedPlan: "A" | "B";
}

export const DeliverableTable = ({ rows, selectedPlan }: DeliverableTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border/50">
            <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Platform</th>
            <th className={cn(
              "text-left py-4 px-4 text-sm font-semibold transition-colors",
              selectedPlan === "A" ? "text-primary" : "text-muted-foreground"
            )}>Plan A</th>
            <th className={cn(
              "text-left py-4 px-4 text-sm font-semibold transition-colors",
              selectedPlan === "B" ? "text-accent" : "text-muted-foreground"
            )}>Plan B</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <motion.tr
              key={row.platform}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border-b border-border/30 hover:bg-secondary/30 transition-colors"
            >
              <td className="py-4 px-4">
                <span className="font-medium text-foreground">{row.platform}</span>
              </td>
              <td className={cn(
                "py-4 px-4 text-sm transition-opacity",
                selectedPlan === "A" ? "opacity-100" : "opacity-50"
              )}>{row.planA}</td>
              <td className={cn(
                "py-4 px-4 text-sm transition-opacity",
                selectedPlan === "B" ? "opacity-100" : "opacity-50"
              )}>{row.planB}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
