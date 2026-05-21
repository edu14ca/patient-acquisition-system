import { useEffect, useRef, useState } from "react";
import { Play, Volume2 } from "lucide-react";

type Props = {
  src: string;
  poster?: string;
};

const VSLPlayer = ({ src, poster }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [progress, setProgress] = useState(0);

  // Try autoplay muted on mount
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p && typeof p.then === "function") {
      p.then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, []);

  const handleUnmute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.currentTime = 0;
    setMuted(false);
    setShowOverlay(false);
    v.play().then(() => setPlaying(true)).catch(() => {});
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl mx-auto aspect-[9/16] max-w-[400px] group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onClick={() => (muted ? handleUnmute() : null)}
        className="w-full h-full object-cover bg-black cursor-pointer"
      />

      {/* Unmute / Play overlay */}
      {showOverlay && (
        <button
          type="button"
          onClick={handleUnmute}
          aria-label="Activar som"
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40 backdrop-blur-[2px] transition-opacity hover:bg-black/50"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 flex items-center justify-center shadow-2xl ring-4 ring-white/30 animate-pulse">
            {playing ? (
              <Volume2 className="w-9 h-9 md:w-11 md:h-11 text-[#d4145a]" />
            ) : (
              <Play className="w-9 h-9 md:w-11 md:h-11 text-[#d4145a] fill-[#d4145a] ml-1" />
            )}
          </div>
          <span className="px-4 py-2 bg-black/70 text-white text-sm md:text-base font-semibold rounded-full">
            {playing ? "Toca para ouvir" : "Toca para reproduzir"}
          </span>
        </button>
      )}

      {/* Progress bar */}
      <div className="absolute left-0 right-0 bottom-0 h-1.5 bg-white/15">
        <div
          className="h-full bg-[#d4145a] transition-[width] duration-200 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default VSLPlayer;
