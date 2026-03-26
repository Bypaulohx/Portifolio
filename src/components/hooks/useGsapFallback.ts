import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Hook alternativo para substituir o useGSAP do @gsap/react.
 * Ele cria um contexto GSAP que limpa as animações ao desmontar.
 */
export function useGSAP(callback: (ctx: gsap.Context, element: HTMLElement) => void) {
  const el = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!el.current) return;
    const ctx = gsap.context(() => {
      callback(ctx, el.current!);
    }, el);

    return () => ctx.revert();
  }, [callback]);

  return el;
}