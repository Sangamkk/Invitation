import { MapPin } from "lucide-react";
import { useState, useRef } from "react";
import { Phone, Music2 } from "lucide-react";

import InvitationHero from "../components/InvitationHero";
import CountdownSection from "../components/CountdownSection";
import CoupleSection from "../components/CoupleSection";
import WishesSection from "../components/WishesSection";
import SendWishes from "../components/SendWishes";
import EventDetails from "../components/EventDetails";
import FinalCountdown from "../components/FinalCountdown";

import OpeningAnimation from "../components/OpeningAnimation";


function Home() {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleMusic = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                console.error("Unable to play music:", error);
            }
        }
    };

    return (
        <main className="relative min-h-screen w-full overflow-x-clip bg-white">

            <OpeningAnimation />
            {/* =====================================================
          LEFT FLOWER
      ===================================================== */}

            {/* LEFT PINK FLOWER */}

            <img
                src="/assets/flower.webp"
                alt=""
                className="
    absolute
    left-0
    top-0
    z-60
    w-[450px]
    pointer-events-none
  "
            />


            {/* RIGHT PINK FLOWER */}

            <img
                src="/assets/flower.webp"
                alt=""
                className="
    absolute
    right-0
    top-0
    z-60
    w-[450px]
    -scale-x-100
    pointer-events-none
  "
            />


            {/* =====================================================
          LEFT LANTERNS
      ===================================================== */}

            <img
                src="/assets/rLatern.webp"
                alt=""
                className="
          absolute
          left-[calc(39%-590px)]
          top-0
          z-30
          w-[400px]
          pointer-events-none
        "
            />


            {/* =====================================================
          RIGHT LANTERNS
      ===================================================== */}

            <img
                src="/assets/rLatern.webp"
                alt=""
                className="
          absolute
          right-[calc(39%-590px)]
          top-0
          z-30
          w-[400px]
          -scale-x-100
          pointer-events-none
        "
            />


            <InvitationHero />

            <CountdownSection />

            <CoupleSection />

            <WishesSection />

            <SendWishes />

            <EventDetails />

            <FinalCountdown />

            <footer className="w-full bg-white">

                {/* Top branding */}
                <div
                    className="
      flex
      min-h-[250px]
      w-full
      flex-col
      items-center
      justify-center
      border-t
      border-[#f0dce5]
    "
                >

                    <p
                        className="
        m-0
        font-['Cormorant_Garamond']
        text-[38px]
        text-black
      "
                    >
                        Wedding Invitation website by{" "}
                        <span className="font-semibold text-[#42105a]">
                            INVITATIONNATION
                        </span>
                    </p>

                    {/* Logo */}
                    <img
                        src="/assets/ganesha.webp"
                        alt=""
                        className="
        mt-[30px]
        h-[52px]
        w-[52px]
        object-contain
      "
                    />

                </div>


                {/* Footer links */}
                <div
                    className="
      flex
      min-h-[200px]
      w-full
      flex-col
      items-center
      border-t
      border-[#e5e5e5]
      pt-[32px]
    "
                >

                    {/* Links */}
                    <div
                        className="
        flex
        items-center
        justify-center
        gap-[30px]
        font-['Cormorant_Garamond']
        text-[20px]
        text-[#7186a5]
      "
                    >

                        <a
                            href="#"
                            className="no-underline text-[#7186a5]"
                        >
                            <span className="mr-[7px]">●</span>
                            Report a Problem
                        </a>

                        <a
                            href="#"
                            className="no-underline text-[#7186a5]"
                        >
                            <span className="mr-[7px]">✉</span>
                            Contact Support
                        </a>

                        <a
                            href="#"
                            className="no-underline text-[#7186a5]"
                        >
                            <span className="mr-[7px]">◆</span>
                            Privacy Policy
                        </a>

                    </div>


                    {/* Powered by */}
                    <p
                        className="
        mt-[32px]
        mb-0
        font-['Cormorant_Garamond']
        text-[16px]
        text-[#91a0ba]
      "
                    >
                        POWERED BY{" "}
                        <span className="font-semibold text-[#42105a] underline">
                            INVITATION NATION
                        </span>
                    </p>


                    {/* Divider */}
                    <div
                        className="
        mt-[32px]
        h-[1px]
        w-[80%]
        bg-[#e6eaf0]
      "
                    />


                    {/* Copyright */}
                    <p
                        className="
        mt-[20px]
        mb-0
        font-['Cormorant_Garamond']
        text-[16px]
        text-[#91a0ba]
      "
                    >
                        © 2026 Invitation Nation. All rights reserved. Crafted with care for your forever.
                    </p>

                </div>

            </footer>


            {/* =====================================================
          FLOATING BUTTONS
      ===================================================== */}

            <div
                className="
          fixed
          bottom-[35px]
          right-[28px]
          z-[100]

          flex
          flex-col
          gap-[12px]
        "
            >
                <audio
                    ref={audioRef}
                    loop
                    src="/music/Wedding.mp3"
                />

                <a
                    href="tel:+919876543210"
                    aria-label="Phone"
                    className="
    flex
    h-[55px]
    w-[55px]
    items-center
    justify-center
    rounded-full
    bg-[#982e50]
    text-[25px]
    text-white
    transition-transform
    duration-200
    hover:scale-[1.08]
  "
                >
                    <Phone size={27} strokeWidth={3} />
                </a>


                <button
                    onClick={toggleMusic}
                    aria-label={isPlaying ? "Pause music" : "Play music"}
                    className="
    flex
    h-[55px]
    w-[55px]
    items-center
    justify-center
    rounded-full
    border-0
    bg-[#982e50]
    text-white
    transition-transform
    duration-200
    hover:scale-[1.08]
  "
                >
                    <div className="relative flex items-center justify-center">
                        <Music2 size={27} strokeWidth={3} />

                        {!isPlaying && (
                            <span
                                className="
          absolute
          h-[34px]
          w-[3px]
          rotate-[-45deg]
          bg-white
        "
                            />
                        )}
                    </div>
                </button>

            </div>

        </main>
    );
}

export default Home;