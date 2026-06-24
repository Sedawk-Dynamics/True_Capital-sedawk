"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const L = TESTIMONIALS.length;
  // Append clones of the first items so the 2-up window never shows a gap and
  // the loop is seamless when we wrap around.
  const slides = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, 2)];

  const [idx, setIdx] = useState(0);
  const [anim, setAnim] = useState(true);
  const timer = useRef(null);

  // auto-advance one card every 3 seconds
  const startAuto = useCallback(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => setIdx((p) => p + 1), 3000);
  }, []);

  useEffect(() => {
    startAuto();
    return () => clearInterval(timer.current);
  }, [startAuto]);

  // Seamless reset: once we've slid onto the cloned slides, snap back to the
  // real start without animation so the loop looks continuous.
  useEffect(() => {
    if (idx === L) {
      const t = setTimeout(() => {
        setAnim(false);
        setIdx(0);
      }, 600);
      return () => clearTimeout(t);
    }
    if (!anim) {
      const r = requestAnimationFrame(() => setAnim(true));
      return () => cancelAnimationFrame(r);
    }
  }, [idx, anim, L]);

  const active = ((idx % L) + L) % L;

  const goTo = (i) => {
    setAnim(true);
    setIdx(((i % L) + L) % L);
    startAuto();
  };
  const next = () => {
    setAnim(true);
    setIdx((p) => p + 1);
    startAuto();
  };
  const prev = () => {
    if (idx <= 0) {
      setAnim(false);
      setIdx(L - 1);
    } else {
      setIdx((p) => p - 1);
    }
    startAuto();
  };

  return (
    <div className="testi-wrap reveal">
      <div className="testi-viewport">
        <div
          className="testi-track"
          style={{ "--i": idx, transition: anim ? undefined : "none" }}
        >
          {slides.map((t, i) => (
            <div className="testi-slide" key={i}>
              <div className="card testi-card">
                <div className="stars">★★★★★</div>
                <blockquote>{t.q}</blockquote>
                <span className="testi-quote" aria-hidden="true">&rdquo;</span>
                <div className="testi-author">
                  <div className="avatar">{t.ini}</div>
                  <div className="meta">
                    <b>{t.n}</b>
                    <span>{t.r}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testi-nav">
        <button className="carousel-btn" aria-label="Previous" onClick={prev}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`testi-dot${i === active ? " active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button className="carousel-btn" aria-label="Next" onClick={next}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
