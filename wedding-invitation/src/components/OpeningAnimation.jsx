import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

function OpeningAnimation() {
    const [visible, setVisible] = useState(true);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.timeline()
                .from("#opening-flower-center", {
                    scale: 0,
                    duration: 0.4,
                    delay: 1,
                    ease: "back.out(1.7)",
                })
                .from(".opening-flower-petal", {
                    scale: 0,
                    stagger: 0.2,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                })
                .to("#opening-flower-petal-area", {
                    rotate: 360,
                    duration: 1.6,
                })
                .to("#opening-flower-petal-area", {
                    scale: 1.2,
                })
                .to("#opening-flower-petal-area", {
                    scale: 0,
                    duration: 0.4,
                    delay: 0.2,
                })
                .to("#opening-flower-center", {
                    scale: 0,
                });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div
            ref={containerRef}
            className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        bg-[#892c4b]
      "
        >
            <div className="relative flex h-[10rem] w-[10rem] items-center justify-center">

                <div
                    id="opening-flower-petal-area"
                    className="
      absolute
      inset-0
      flex
      items-start
      justify-center
    "
                >
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div
                            key={index}
                            className="
          opening-flower-petal
          absolute
          h-[49%]
          w-[34%]
          origin-bottom
          bg-contain
          bg-center
          bg-no-repeat
        "
                            style={{
                                backgroundImage:
                                    "url('/assets/leafShape-CLwbFqNT.svg')",
                                filter: "invert(1)",
                                transform: `rotate(${index * 45}deg)`,
                            }}
                        />
                    ))}
                </div>

                <div
                    id="opening-flower-center"
                    className="
      absolute
      z-[4]
      h-[2.7rem]
      w-[2.7rem]
      rounded-full
      bg-[#ffbb00]
    "
                />
            </div>
        </div>
    );
}

export default OpeningAnimation;