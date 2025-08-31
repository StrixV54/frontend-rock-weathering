import { motion } from "motion/react";

export default function Logo() {
    return <motion.img initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0)", transition: { delay: 3 } }} transition={{ duration: 2 }} src="/logo.svg" className="absolute z-10 top-2 -left-8 scale-[0.8]" />;
}
