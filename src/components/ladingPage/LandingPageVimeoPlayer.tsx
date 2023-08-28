import { useEffect, useRef, useState } from "react";
import Vimeo from '@vimeo/player';
import iconMuted from "../../assets/Mute.png"
import './styles/LandingPageVimeoPlayer.css';

export function LandingPageVimeoPlayer() {
  const vimeoPlayerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Vimeo | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    if (!vimeoPlayerRef.current) return;

    playerRef.current = new Vimeo(vimeoPlayerRef.current, {
      id: 792323441,
      autoplay: true,
      muted: true,
    });

    const toggleMute = async () => {
      const isCurrentlyMuted = await playerRef.current!.getVolume() === 0;
      if (isCurrentlyMuted) {
        playerRef.current!.setVolume(1);
        playerRef.current!.setCurrentTime(0); // Reinicia o vídeo para o início
        setShowMessage(false);
      } else {
        playerRef.current!.setVolume(0);
        setShowMessage(true);
      }
      setIsMuted(!isCurrentlyMuted);
    };

    vimeoPlayerRef.current.addEventListener('click', toggleMute);

    return () => {
      playerRef.current!.off('click', toggleMute);
      playerRef.current!.unload();
    };
  }, []);

  return (
    <div

      className="LandingPageVimeoPlayer__container"
    >
        <div
            ref={vimeoPlayerRef}
            className="LandingPageVimeoPlayer__content"
        >
            <iframe
                src={`https://player.vimeo.com/video/792323441?h=bb57d65414&autoplay=1&muted=1&title=0&byline=0&portrait=0`}
                width="100%"
                height="400"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                className="LandingPageVimeoPlayer__iframe"
            ></iframe>
            {showMessage && (
                <div
                    className="LandingPageVimeoPlayer__bg"
                    style={{
                   
                    }}
                >
                    {
                        isMuted 
                        ? 
                        <img 
                            src={iconMuted} 
                            alt="Muted_icon" 
                            className="LandingPageVimeoPlayer__MutedIcon"
                        /> 
                        : null
                        }
                </div>
            )}
      </div>
    </div>
  );
}
