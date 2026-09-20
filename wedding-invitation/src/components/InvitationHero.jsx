import React from 'react'
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const InvitationHero = () => {
    const openMaps = () => {
        window.open(
            "https://www.google.com/maps/search/?api=1&query=Fiestaa+Resort",
            "_blank"
        );
    };
    return (
        <div>
            <section
                className="
          relative
          mx-auto
          min-h-screen
          w-full
          max-w-[1050px]
          overflow-visible
          bg-white
        "
            >

                {/* ===================================================
            EXACT PINK DECORATIVE SHAPE
        =================================================== */}

                <img
                    src="/assets/cTJmahal.webp"
                    alt=""
                    className="
            absolute
            left-1/2
            top-5
            z-0

            w-[900px]
            max-w-none

            -translate-x-1/2

            pointer-events-none
          "
                />


                {/* ===================================================
            TAJ MAHAL BACKGROUND
        =================================================== */}

                <img
                    src="/assets/tajMahal.webp"
                    alt=""
                    className="
            absolute
            bottom-[0]
            left-1/2
            z-[1]
            top-50
            w-[1000px]
            max-w-none

            -translate-x-1/2


            pointer-events-none
          "
                />


                {/* ===================================================
            INVITATION CONTENT
        =================================================== */}

                <div
                    className="
            relative
            z-10

            flex
            min-h-[950px]
            w-full

            flex-col
            items-center

            pt-[105px]

            text-center
          "
                >

                    {/* =================================================
              GANESHA
          ================================================= */}

                    <motion.img
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        src="/assets/ganesha.webp"
                        className="
              h-[48px]
              w-[48px]
              object-contain
              mb-[8px]
            "
                    />


                    {/* =================================================
              SAVE THE DATE
          ================================================= */}

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="
              mb-[10px]

              font-['Anjaniya']
              text-[24px]
              font-medium

              text-[#8e294c]
            "
                    >
                        Save the Date
                    </motion.p>


                    {/* =================================================
              TOP ORNAMENT
          ================================================= */}

                    <div
                        className="
              flex
              w-[480px]
              items-center
              justify-center

              mb-[18px]
            "
                    >

                        <span
                            className="
                h-px
                flex-1
                bg-[#b85f7d]
              "
                        />

                        <img
                            src="/assets/crownDesign.webp"
                            alt=""
                            className="
                mx-[12px]
                w-[120px]
                object-contain
              "
                        />

                        <span
                            className="
                h-px
                flex-1
                bg-[#b85f7d]
              "
                        />

                    </div>


                    {/* =================================================
              ARYAN
          ================================================= */}

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="
              m-0

              font-['Romerio']
              text-[58px]
              font-semibold
              leading-none

              text-[#8e294c]
            "
                    >
                        Aryan Kapoor
                    </motion.h1>


                    {/* =================================================
              &
          ================================================= */}

                    <div
                        className="
              my-[7px]

              font-['Cormorant_Garamond']
              text-[58px]
              font-semibold
              leading-none

              text-[#8e294c]
            "
                    >
                        &
                    </div>


                    {/* =================================================
              AARNA
          ================================================= */}

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="
              m-0

              font-['Romerio']
              text-[58px]
              font-semibold
              leading-none

              text-[#8e294c]
            "
                    >
                        Aarna Nair
                    </motion.h1>


                    {/* =================================================
              SECOND ORNAMENT
          ================================================= */}

                    <div
                        className="
              mt-[28px]
              mb-[22px]

              flex
              w-[570px]
              items-center
              justify-center
            "
                    >

                        <span
                            className="
                h-px
                flex-1
                bg-[#b85f7d]
              "
                        />

                        <img
                            src="/assets/crownDesign.webp"
                            alt=""
                            className="
                mx-[12px]
                w-[135px]
                object-contain
              "
                        />

                        <span
                            className="
                h-px
                flex-1
                bg-[#b85f7d]
              "
                        />

                    </div>


                    {/* =================================================
              DATE
          ================================================= */}

                    <div
                        className="
              flex
              h-[64px]
              items-center
              justify-center

              text-[#913253]
            "
                    >

                        <motion.span
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="
                pr-[14px]

                font-sans
                text-[18px]
              "
                        >
                            NOV
                        </motion.span>


                        <motion.span
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="
                flex
                h-[64px]
                items-center

                border-x
                border-[#b96882]

                px-[14px]

                font-['Playfair_Display']
                text-[29px]
                font-medium
              "
                        >

                            26

                            <small
                                className="
                  mx-[5px]
                  text-[21px]
                "
                            >
                                &amp;
                            </small>

                            27

                        </motion.span>


                        <motion.span
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
                            className="
                pl-[14px]

                font-sans
                text-[18px]
              "
                        >
                            2026
                        </motion.span>

                    </div>


                    {/* =================================================
              VENUE
          ================================================= */}

                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className="
              mt-[17px]
              mb-[27px]

              font-['Playfair_Display']
              text-[18px]

              text-[#913253]
            "
                    >
                        Fiestaa Resort
                    </motion.p>


                    {/* =================================================
              MAP BUTTON
          ================================================= */}

                    <div
                        className="
    relative
    z-30

    flex
    h-[54px]
    w-[330px]

    items-center
    justify-center

    rounded-full

    border
    border-[#9a3155]

    bg-transparent
  "
                    >
                        <motion.button
    initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  whileHover={{ width: "340px" }}
  transition={{ duration: 1 }}
    onClick={openMaps}
                            className="
      flex
      h-[54px]
      w-[300px]

      items-center
      justify-center
      gap-[8px]

      rounded-full

      border-0

      bg-[#9b2e50]

      font-['Cormorant_Garamond']
      text-[22px]
      font-semibold

      tracking-[-0.2px]

      text-white

      transition-transform
      duration-200

      hover:scale-[1.01]
    "
                        >
                            <MapPin
                                size={22}
                                strokeWidth={2.5}
                            />
                            <span>
                                Open in Maps
                            </span>

                        </motion.button>
                    </div>


                    {/* =================================================
              COUPLE
          ================================================= */}

                    <img
                        src="/assets/couple.webp"
                        alt="Couple"
                        className="
              absolute
              top-174

              bottom-[-20px]
              left-1/2

              z-20

              w-[450px]
              max-w-none

              -translate-x-1/2

              object-contain

              pointer-events-none
            "
                    />

                </div>

            </section>
        </div>
    )
}

export default InvitationHero
