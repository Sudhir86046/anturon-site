 "use client";

import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [hideAnim, setHideAnim] = useState(false);

  useEffect(() => {
     
    const t1 = setTimeout(() => setHideAnim(true), 1200);
    const t2 = setTimeout(() => setVisible(false), 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`intro-overlay ${hideAnim ? "intro-overlay--hide" : ""}`}>
      <div className="intro-orb-wrapper">
        <div className="intro-orb-3d" />
        <div className="intro-brand-text">ANTURON VOICE AI</div>
      </div>
    </div>
  );
} 