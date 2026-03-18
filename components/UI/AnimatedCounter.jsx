'use client';

import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({ value, duration = 2, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [parsed, setParsed] = useState({ prefix: '', number: 0, suffix: '', decimals: 0, raw: String(value) });

  useEffect(() => {
    // Regex extracts: Prefix (non-numbers), Number (digits/commas/decimals), Suffix (anything after)
    const match = String(value).match(/^([^0-9.-]*)([0-9.,]+)(.*)$/);
    if (match) {
      const numStr = match[2].replace(/,/g, '');
      const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
      setParsed({ prefix: match[1], number: parseFloat(numStr), suffix: match[3], decimals, raw: String(value) });
    } else {
      setParsed({ prefix: '', number: 0, suffix: '', decimals: 0, raw: String(value) });
    }
  }, [value]);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (parsed.number === 0) return parsed.raw;
    const formatStr = latest.toFixed(parsed.decimals);
    
    // Auto-comma format for whole numbers only, to prevent issues with decimals like "4.3" turning into "4,3" if not careful (JS toLocaleString handles it, but just to be safe)
    let finalNumString = formatStr;
    if (parsed.decimals === 0) {
      finalNumString = parseInt(formatStr, 10).toLocaleString();
    }
    
    return `${parsed.prefix}${finalNumString}${parsed.suffix}`;
  });

  useEffect(() => {
    if (isInView && parsed.number > 0) {
      animate(count, parsed.number, { duration, ease: "easeOut" });
    }
  }, [isInView, parsed.number, duration, count]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
