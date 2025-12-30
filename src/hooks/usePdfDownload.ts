import { useCallback, useState } from "react";
import { toast } from "sonner";

export const usePdfDownload = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePdf = useCallback(async () => {
    setIsGenerating(true);
    toast.info("Generating PDF...", { duration: 2000 });

    try {
      const { default: html2canvas } = await import("html2canvas");
      const { default: jsPDF } = await import("jspdf");

      const container = document.querySelector(".slider-container") as HTMLElement;
      if (!container) throw new Error("Content not found");

      const sections = container.querySelectorAll(".slider-section");
      const pdf = new jsPDF("l", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        
        // Temporarily make section visible
        const originalDisplay = section.style.display;
        section.style.display = "flex";
        section.style.position = "relative";
        section.style.left = "0";

        const canvas = await html2canvas(section, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
          windowWidth: 1920,
          windowHeight: 1080,
        });

        // Restore original styles
        section.style.display = originalDisplay;
        section.style.position = "";
        section.style.left = "";

        const imgData = canvas.toDataURL("image/jpeg", 0.8);
        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * pageWidth) / canvas.width;

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, Math.min(imgHeight, pageHeight));
      }

      pdf.save("Excellence-HotSauce-Proposal.pdf");
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return { generatePdf, isGenerating };
};
