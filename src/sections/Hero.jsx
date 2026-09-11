import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import GlassCard from "../components/GlassCard";
import PrimaryCtaButton from "../components/PrimaryCtaButton";

const SHRINK_MS = 1000;
const SHRINK_DELAY_MS = 220;
const CONTENT_DELAY_MS = 380;
const CONTENT_FADE_MS = 700;
const SHADOW_MS = 700;
const SHRINK_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const FINAL_MAX_WIDTH = 1120;
const FINAL_RADIUS = 32;
const GLASS_SHADOW = "0 20px 60px rgba(0,0,0,0.35)";

const cardPaddingClassName = `
  h-full w-full
  px-5 py-10
  sm:px-10 sm:py-10
  md:px-14 md:py-12
  lg:px-16 lg:py-12
`;

export default function Hero({ onIntroComplete }) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const onIntroCompleteRef = useRef(onIntroComplete);
  onIntroCompleteRef.current = onIntroComplete;
  const [phase, setPhase] = useState("cover");
  const [from, setFrom] = useState(null);
  const [target, setTarget] = useState(null);
  const [showShadow, setShowShadow] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTarget(measureHeroCardTarget(section, card));
      setPhase("done");
      setShowContent(true);
      setShowShadow(true);
      onIntroCompleteRef.current?.();
      return;
    }

    let cancelled = false;
    let delayTimer = 0;
    let doneTimer = 0;
    let contentTimer = 0;
    let shadowTimer = 0;
    let outerFrame = 0;
    let innerFrame = 0;

    const start = async () => {
      const images = [...card.querySelectorAll("img")];
      await Promise.all(
        images.map((img) =>
          img.decode ? img.decode().catch(() => {}) : Promise.resolve()
        )
      );
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      if (cancelled) return;

      const coverBox = {
        width: section.clientWidth,
        height: section.clientHeight,
      };
      const box = measureHeroCardTarget(section, card);

      delayTimer = window.setTimeout(() => {
        if (cancelled) return;

        setFrom(coverBox);
        setTarget(box);
        setPhase("armed");

        outerFrame = requestAnimationFrame(() => {
          innerFrame = requestAnimationFrame(() => {
            if (cancelled) return;
            setPhase("shrink");
            onIntroCompleteRef.current?.();
            contentTimer = window.setTimeout(() => {
              if (!cancelled) setShowContent(true);
            }, CONTENT_DELAY_MS);
          });
        });

        doneTimer = window.setTimeout(() => {
          if (cancelled) return;
          setPhase("done");
          shadowTimer = window.setTimeout(() => {
            if (!cancelled) setShowShadow(true);
          }, 40);
        }, SHRINK_MS + 40);
      }, SHRINK_DELAY_MS);
    };

    start();

    return () => {
      cancelled = true;
      window.clearTimeout(delayTimer);
      window.clearTimeout(doneTimer);
      window.clearTimeout(contentTimer);
      window.clearTimeout(shadowTimer);
      cancelAnimationFrame(outerFrame);
      cancelAnimationFrame(innerFrame);
    };
  }, []);

  useEffect(() => {
    if (phase !== "done") return;
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section || !card) return;

    const onResize = () => {
      setTarget(measureHeroCardTarget(section, card));
    };

    const raf = window.requestAnimationFrame(onResize);
    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [phase, showContent]);

  const wrapStyle = getHeroWrapStyle(phase, from, target, showShadow);

  return (
    <section
      ref={sectionRef}
      className="
        relative z-10 flex h-dvh max-h-dvh w-full items-center justify-center overflow-hidden
        px-4 pt-24 pb-10
        sm:px-6 sm:pt-28 sm:pb-12
        md:px-8 md:pt-32
        lg:px-10 lg:pt-36 lg:pb-16
        bg-[url('/desktop-wallpapers-mossy-forest-wallpaper-for_9599288.jpg!w700wp')]
        bg-cover bg-center
      "
    >
      {/* dark cinematic overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,10,6,0.72),rgba(7,14,8,0.48),rgba(4,8,5,0.78))]" />

      {/* central atmosphere glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(145,184,72,0.22),transparent_42%)]" />

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

      {/* hero bottom ambient light */}
      <div className="absolute left-1/2 top-[58%] h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#b7d46e]/10 blur-3xl sm:h-[420px] sm:w-[420px]" />

      <div
        ref={cardRef}
        style={wrapStyle}
        className="absolute z-20"
      >
        <GlassCard
          shadow={false}
          rounded="large"
          className={cardPaddingClassName}
          style={{ borderRadius: "inherit" }}
        >
          <div
            className={`
              mx-auto flex h-full max-w-[720px] flex-col items-center justify-center text-center
              transition-[opacity,transform] ease-out
              ${showContent ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}
            `}
            style={{ transitionDuration: `${CONTENT_FADE_MS}ms` }}
          >
            <img
              src="/10e113b2-7ce5-4f5b-84ee-4046c6b814b9.png"
              alt="Glass & Moss"
              className="
                -mb-1 h-auto w-full
                max-w-[200px]
                sm:-mb-3 sm:max-w-[320px]
                md:-mb-4 md:max-w-[420px]
                lg:max-w-[520px]
                mix-blend-screen
              "
            />

            <p className="type-lede max-w-[640px]">
              Természet üvegbe foglalva.
            </p>

            <p className="type-small mt-1.5 max-w-[420px] sm:mt-2 sm:max-w-[480px]">
              Egyedi terráriumok, floráriumok és bútorokba épített ökoszisztémák,
              kézzel készítve, letisztult megjelenéssel.
            </p>

            <div className="mt-4 sm:mt-8">
              <Link to="/#katalogus">
                <PrimaryCtaButton>Katalógus megtekintése</PrimaryCtaButton>
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function getHeroWrapStyle(phase, from, target, showShadow) {
  const shadow = showShadow ? GLASS_SHADOW : "0 20px 60px rgba(0,0,0,0)";
  const shadowTransition = `box-shadow ${SHADOW_MS}ms ease`;

  const cover = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "auto",
    height: "auto",
    maxWidth: "none",
    borderRadius: 0,
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0)",
  };

  if (phase === "cover") return cover;

  const shrinkTransition = [
    `top ${SHRINK_MS}ms ${SHRINK_EASE}`,
    `left ${SHRINK_MS}ms ${SHRINK_EASE}`,
    `width ${SHRINK_MS}ms ${SHRINK_EASE}`,
    `height ${SHRINK_MS}ms ${SHRINK_EASE}`,
    `border-radius ${SHRINK_MS}ms ${SHRINK_EASE}`,
    shadowTransition,
  ].join(", ");

  if (phase === "armed" && from) {
    return {
      position: "absolute",
      top: 0,
      left: 0,
      right: "auto",
      bottom: "auto",
      width: from.width,
      height: from.height,
      maxWidth: "none",
      borderRadius: 0,
      overflow: "hidden",
      boxShadow: "0 20px 60px rgba(0,0,0,0)",
      transition: shrinkTransition,
    };
  }

  if ((phase === "shrink" || phase === "done") && target) {
    return {
      position: "absolute",
      top: target.top,
      left: target.left,
      right: "auto",
      bottom: "auto",
      width: target.width,
      height: target.height,
      maxWidth: "none",
      borderRadius: FINAL_RADIUS,
      overflow: phase === "done" ? "visible" : "hidden",
      boxShadow: shadow,
      transition:
        phase === "done"
          ? shadowTransition
          : shrinkTransition,
    };
  }

  return cover;
}

function measureHeroCardTarget(section, card) {
  const styles = getComputedStyle(section);
  const padL = parseFloat(styles.paddingLeft);
  const padR = parseFloat(styles.paddingRight);
  const padT = parseFloat(styles.paddingTop);
  const padB = parseFloat(styles.paddingBottom);
  const contentW = section.clientWidth - padL - padR;
  const contentH = section.clientHeight - padT - padB;
  const width = Math.min(FINAL_MAX_WIDTH, contentW);

  const clone = card.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  clone.style.position = "absolute";
  clone.style.visibility = "hidden";
  clone.style.pointerEvents = "none";
  clone.style.inset = "auto";
  clone.style.left = "0";
  clone.style.top = "0";
  clone.style.right = "auto";
  clone.style.bottom = "auto";
  clone.style.width = `${width}px`;
  clone.style.height = "auto";
  clone.style.maxWidth = "none";
  clone.style.borderRadius = `${FINAL_RADIUS}px`;
  clone.style.overflow = "visible";
  clone.style.boxShadow = "none";
  clone.style.zIndex = "-1";
  clone.querySelectorAll("*").forEach((el) => {
    el.style.height = "auto";
    el.style.minHeight = "0";
    el.style.maxHeight = "none";
    el.style.overflow = "visible";
  });
  section.appendChild(clone);
  const measured = Math.ceil(clone.getBoundingClientRect().height);
  clone.remove();

  const isMobile = window.innerWidth < 640;
  const extraHeight = isMobile ? 72 : 36;
  const height = Math.min(measured + extraHeight, contentH);

  return {
    width,
    height,
    left: padL + (contentW - width) / 2,
    top: padT + (contentH - height) / 2,
  };
}
