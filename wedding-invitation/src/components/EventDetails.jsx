import React from 'react'
import { motion } from "framer-motion";

const EventDetails = () => {

    const openMaps = () => {
        window.open(
            "https://www.google.com/maps/search/?api=1&query=Fiestaa+Resort",
            "_blank"
        );
    };
    return (
        <div>
            {/* =========================
    EVENT DETAILS
========================= */}

            <section
                className="
    relative
    min-h-[750px]
    w-full
    overflow-hidden
    bg-[#922b4d]
  "
            >
                <div
                    className="
      relative
      mx-auto
      flex
      min-h-[680px]
      w-full
      max-w-[1050px]
      items-center
      justify-between
    "
                >

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1 }}
                        className="
    flex
    w-[48%]
    flex-col
    items-center
    justify-center
    text-center
  "
                    >

                        <h2
                            className="
          m-0
          font-['Playfair_Display']
          text-[40px]
          font-semibold
          text-white
        "
                        >
                            Join the celebration on
                        </h2>

                        {/* Dot */}
                        <div
                            className="
          mt-[25px]
          h-[12px]
          w-[12px]
          rounded-full
          bg-white
        "
                        />

                        {/* Navigation */}
                        <div
                            className="
          mt-[25px]
          flex
          items-center
          gap-[18px]
        "
                        >

                            <button
                                className="
            flex
            h-[58px]
            w-[58px]
            items-center
            justify-center
            rounded-full
            border
            border-white
            bg-transparent
            text-[35px]
            text-white
          "
                            >
                                ←
                            </button>

                            <button
                                className="
            flex
            h-[58px]
            w-[58px]
            items-center
            justify-center
            rounded-full
            border
            border-white
            bg-transparent
            text-[35px]
            text-white
          "
                            >
                                →
                            </button>

                        </div>


                    </motion.div>


                    {/* RIGHT EVENT DESIGN */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1 }}
                        className="relative h-[650px] w-[600px]"
                    >

                        {/* TOP LEFT */}
                        <img
                            src="/assets/flowerDesign.webp"
                            alt=""
                            className="
      absolute
      left-[0px]
      top-[0px]
      z-0
      h-[260px]
      w-[260px]
      object-contain
    "
                        />

                        {/* TOP RIGHT */}
                        <img
                            src="/assets/flowerDesign.webp"
                            alt=""
                            className="
      absolute
      right-[0px]
      top-[0px]
      z-0
      h-[260px]
      w-[260px]
      scale-x-[-1]
      object-contain
    "
                        />

                        {/* BOTTOM LEFT */}
                        <img
                            src="/assets/flowerDesign.webp"
                            alt=""
                            className="
      absolute
      bottom-[0px]
      left-[0px]
      z-0
      h-[260px]
      w-[260px]
      scale-y-[-1]
      object-contain
    "
                        />

                        {/* BOTTOM RIGHT */}
                        <img
                            src="/assets/flowerDesign.webp"
                            alt=""
                            className="
      absolute
      bottom-[0px]
      right-[0px]
      z-0
      h-[260px]
      w-[260px]
      scale-x-[-1]
      scale-y-[-1]
      object-contain
    "
                        />

                        {/* 2. Inner card image */}
                        <img
                            src="/assets/whiteTJMahal.webp"
                            alt=""
                            className="
      absolute
      left-1/2
      top-[40px]
      h-[550px]
      w-[600px]
      -translate-x-1/2
      object-fill
    "
                        />

                        {/* 3. Content on top */}
                        <div
                            className="
      absolute
      left-1/2
      top-[155px]
      z-10
      flex
      w-[520px]
      -translate-x-1/2
      flex-col
      items-center
      text-center
    "
                        >

                            <p
                                className="
        m-0
        font-['Anjaniya']
        text-[35px]
        italic
        text-[#972b51]
      "
                            >
                                Thursday
                            </p>

                            <h2
                                className="
        mt-[8px]
        m-0
        font-['Playfair_Display']
        text-[34px]
        font-semibold
        text-[#972b51]
      "
                            >
                                26 November 2026
                            </h2>

                            {/* ornament */}
                            {/* ornament / Taj Mahal background */}
                            <img
                                src="/assets/tajMahal.webp"
                                alt=""
                                className=" absolute
    h-[436px]
    w-[520px]
  "
                            />

                            <div
                                className="
        flex
        w-full
        justify-between
        font-['Anjaniya']
        text-[35px]
        text-[#972b51]
        z-0
      "
                            >
                                <span>Haldi</span>
                                <span>7:30 pm</span>
                            </div>

                            <p
                                className="
        mt-[18px]
        mb-0
        font-['Cormorant_Garamond']
        text-[23px]
        text-[#972b51]
      "
                            >
                                Location :
                            </p>

                            <p
                                className="
        m-0
        font-['Cormorant_Garamond']
        text-[23px]
        text-[#972b51]
      "
                            >
                                Fiestaa Resort
                            </p>

                            {/* Maps button */}
                            {/* Maps button */}
                            <motion.div
                                initial={{ width: "315px" }}
                                transition={{ duration: 0.25 }}
                                className="
    mt-[18px]
    flex
    h-[54px]
    items-center
    justify-center
    rounded-full
    border
    border-[#9a3155]
    z-50
  "
                            >
                                <motion.button
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    whileHover={{ width: "315px" }}
                                    transition={{
                                        opacity: { duration: 1 },
                                        x: { duration: 1 },
                                        width: { duration: 0.25 }
                                    }}
                                    onClick={openMaps}
                                    className="
      flex
      h-[54px]
      w-[300px]
      items-center
      justify-center
      rounded-full
      bg-[#9b2e50]
      font-['Cormorant_Garamond']
      text-[22px]
      font-semibold
      text-white
    "
                                >
                                    Open in Maps
                                </motion.button>
                            </motion.div>

                        </div>

                    </motion.div>

                </div>
            </section>
        </div>
    )
}

export default EventDetails
