import { useEffect, useState } from "react";
import fercal from "@/assets/logos-mono/fercal.png";
import happyKitchen from "@/assets/logos-mono/happy-kitchen.png";
import linhasDouro from "@/assets/logos-mono/linhas-douro.png";
import michaelMachado from "@/assets/logos-mono/michael-machado.png";
import wamiAsset from "@/assets/logo-wamikixima.jpg.asset.json";
import mavisherAsset from "@/assets/logo-mavisher.jpg.asset.json";
import sesalinAsset from "@/assets/logo-sesalin.webp.asset.json";

type Logo = { name: string; src: string; mono: boolean };

// mono: true = já monocromático (pré-processado); false = convertido no browser.
const logos: Logo[] = [
  { name: "WamiKixima Dental", src: wamiAsset.url, mono: false },
  { name: "Mavisher", src: mavisherAsset.url, mono: false },
  { name: "Linhas D'Ouro", src: linhasDouro, mono: true },
  { name: "Sesalin", src: sesalinAsset.url, mono: false },
  { name: "Happy Kitchen", src: happyKitchen, mono: true },
  { name: "Complexo Escolar Fercal", src: fercal, mono: true },
  { name: "Michael Machado", src: michaelMachado, mono: true },
];

// Remove o fundo (cor dos cantos) e pinta o resto de branco, para todos os logos
// terem o mesmo aspecto de marca vectorial monocromática.
const toMono = (src: string) =>
  new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const scale = Math.min(1, 320 / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("canvas"));
      ctx.drawImage(img, 0, 0, w, h);
      const data = ctx.getImageData(0, 0, w, h);
      const px = data.data;
      const corners = [0, (w - 1) * 4, (h - 1) * w * 4, ((h - 1) * w + w - 1) * 4];
      const bg = [0, 1, 2].map((c) => corners.reduce((s, i) => s + px[i + c], 0) / corners.length);
      let minX = w, minY = h, maxX = 0, maxY = 0;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          const d = Math.hypot(px[i] - bg[0], px[i + 1] - bg[1], px[i + 2] - bg[2]);
          const a = Math.max(0, Math.min(1, (d - 40) / 60)) * (px[i + 3] / 255);
          px[i] = px[i + 1] = px[i + 2] = 255;
          px[i + 3] = Math.round(a * 255);
          if (a > 0.3) {
            minX = Math.min(minX, x); maxX = Math.max(maxX, x);
            minY = Math.min(minY, y); maxY = Math.max(maxY, y);
          }
        }
      }
      ctx.putImageData(data, 0, 0);
      if (maxX <= minX || maxY <= minY) return resolve(canvas.toDataURL());
      const out = document.createElement("canvas");
      out.width = maxX - minX + 1;
      out.height = maxY - minY + 1;
      out.getContext("2d")?.drawImage(canvas, minX, minY, out.width, out.height, 0, 0, out.width, out.height);
      resolve(out.toDataURL());
    };
    img.onerror = reject;
    img.src = src;
  });

const LogoItem = ({ logo }: { logo: Logo }) => {
  const [src, setSrc] = useState<string | null>(logo.mono ? logo.src : null);
  const [height, setHeight] = useState(36);

  useEffect(() => {
    if (logo.mono) return;
    let alive = true;
    toMono(logo.src)
      .then((s) => alive && setSrc(s))
      .catch(() => alive && setSrc(null));
    return () => {
      alive = false;
    };
  }, [logo]);

  return (
    <li className="flex-shrink-0 h-14 flex items-center px-6 md:px-10">
      {src ? (
        <img
          src={src}
          alt={logo.name}
          loading="lazy"
          // Tamanho óptico: logos quadrados ficam mais altos, horizontais mais baixos.
          onLoad={(e) => {
            const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
            if (w && h) setHeight(Math.round(Math.min(56, Math.max(24, Math.sqrt(4400 / (w / h))))));
          }}
          style={{ height }}
          className="w-auto max-w-[180px] object-contain opacity-60 hover:opacity-100 transition-opacity"
        />
      ) : (
        <span className="font-display text-lg font-medium text-muted-foreground whitespace-nowrap">{logo.name}</span>
      )}
    </li>
  );
};

const LogoMarquee = () => (
  <div className="relative overflow-hidden marquee-mask">
    <ul className="flex w-max animate-marquee hover:[animation-play-state:paused]">
      {[...logos, ...logos].map((l, i) => (
        <LogoItem key={`${l.name}-${i}`} logo={l} />
      ))}
    </ul>
  </div>
);

export default LogoMarquee;
