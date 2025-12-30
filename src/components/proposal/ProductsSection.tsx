import { motion } from "framer-motion";
import productHotSauceOriginal from "@/assets/product-hot-sauce-original.jpg";
import productJalapeno from "@/assets/product-jalapeno.jpg";
import productDynamite from "@/assets/product-dynamite.jpg";
import productHotKetchup from "@/assets/product-hot-ketchup.jpg";
import productTomatoKetchup from "@/assets/product-tomato-ketchup.jpg";
import productCaesarDressing from "@/assets/product-caesar-dressing.jpg";
import productTomatoPaste from "@/assets/product-tomato-paste.webp";

const products = [
  {
    name: "Hot Sauce Original",
    description: "Louisiana Peppers, Vinegar, Salt",
    image: productHotSauceOriginal,
    size: "6 FL.OZ (177 mL)",
  },
  {
    name: "Jalapeño Hot Sauce",
    description: "Green jalapeño peppers with a zesty kick",
    image: productJalapeno,
    size: "6 FL.OZ (177 mL)",
  },
  {
    name: "Hot Dynamite Sauce",
    description: "Because Food should taste so Good!",
    image: productDynamite,
    size: "320g",
  },
  {
    name: "Hot Tomato Ketchup",
    description: "Made with the Finest Ripened Tomatoes",
    image: productHotKetchup,
    size: "340g",
  },
  {
    name: "Tomato Ketchup",
    description: "Made with the Finest Ripened Tomatoes",
    image: productTomatoKetchup,
    size: "340g",
  },
  {
    name: "Creamy Caesar Dressing",
    description: "Because Food should Taste so Good!",
    image: productCaesarDressing,
    size: "320g",
  },
  {
    name: "Tomato Paste",
    description: "100% Natural, Preservative free",
    image: productTomatoPaste,
    size: "198g",
  },
];

export const ProductsSection = () => {
  return (
    <section className="slider-section relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-sora text-heading-1 mb-2">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Premium quality sauces and condiments from Excellence
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max px-4">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="w-48 bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-56 bg-gradient-to-b from-background to-muted/30 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-sora font-semibold text-sm text-foreground mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    <span className="text-xs text-primary font-medium">
                      {product.size}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-4"
        >
          ← Swipe to see more products →
        </motion.p>
      </div>
    </section>
  );
};
