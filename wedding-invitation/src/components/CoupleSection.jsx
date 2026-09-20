import React from 'react'
import { motion } from "framer-motion";

const CoupleSection = () => {
    return (
        <div>
            <div className="p-15">
                <section
                    className="
            relative
            mx-auto
            min-h-0
            w-full
            overflow-visible
            bg-[#fdebf5]
            px-[5px]
            py-[35px]
            rounded-[25px]
          "
                >

                    {/* =========================
              BRIDE
          ========================= */}

                    <div className="relative flex min-h-[390px] w-full items-center">

                        {/* Bride Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1 }}
                            className="w-[42%]"
                        >
                            <div className="relative h-[337px] w-[308px]">

                                {/* Outer Taj Mahal */}
                                <div
                                    className="
                    absolute
                    inset-0
                    bg-[url('/assets/tjMahal.webp')]
                    bg-cover
                    bg-center
                  "
                                />

                                {/* Bride photo + mask */}
                                <div
                                    className="
                    absolute
                    left-[0%]
                    top-[1.5%]
                    h-[96%]
                    w-[97%]
                    rotate-180
                    overflow-hidden
                    [mask-image:url('/assets/rotatedRightTJMahal.webp')]
                    [-webkit-mask-image:url('/assets/rotatedRightTJMahal.webp')]
                    [mask-size:100%_100%]
                    [-webkit-mask-size:100%_100%]
                    [mask-repeat:no-repeat]
                    [-webkit-mask-repeat:no-repeat]
                  "
                                >
                                    <div
                                        className="
                      absolute
                      inset-0
                      bg-[url('/assets/bride.jpg')]
                      bg-cover
                      bg-center
                      rotate-180
                    "
                                    />
                                </div>

                            </div>
                        </motion.div>

                        {/* Bride Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1 }}
                            className="
                flex
                w-[58%]
                flex-col
                items-center
                text-center
              "
                        >
                            <h2
                                className="
                  m-0
                  font-['Romerio']
                  text-[52px]
                  leading-none
                  text-[#972b51]
                "
                            >
                                Aarna Nair
                            </h2>

                            <h3
                                className="
                  mt-[10px]
                  m-0
                  font-['Cormorant_Garamond']
                  text-[27px]
                  font-semibold
                  text-[#972b51]
                "
                            >
                                D/o Mr. Suresh Nair & Mrs. Lakshmi Nair
                            </h3>

                            <p
                                className="
                  mt-[4px]
                  m-0
                  max-w-[550px]
                  font-['Cormorant_Garamond']
                  text-[23px]
                  leading-[1.2]
                  text-[#972b51]
                "
                            >
                                A free spirit wrapped in grace — Aarna moves through life
                                with quiet confidence, an infectious laugh, and a kindness
                                that makes everyone around her feel at home.
                            </p>
                        </motion.div>

                    </div>


                    {/* =========================
              GROOM
          ========================= */}

                    <div className="relative flex min-h-[390px] w-full items-center">

                        {/* Groom Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1 }}
                            className="
    flex
    w-[58%]
    flex-col
    items-center
    text-center
  "
                        >
                            <h2
                                className="
                  m-0
                  font-['Romerio']
                  text-[52px]
                  leading-none
                  text-[#972b51]
                "
                            >
                                Aryan Kapoor
                            </h2>

                            <h3
                                className="
                  mt-[10px]
                  m-0
                  font-['Cormorant_Garamond']
                  text-[27px]
                  font-semibold
                  text-[#972b51]
                "
                            >
                                S/o Mr. Rajesh Kapoor & Mrs. Meena Kapoor
                            </h3>

                            <p
                                className="
                  mt-[4px]
                  m-0
                  max-w-[550px]
                  font-['Cormorant_Garamond']
                  text-[23px]
                  leading-[1.2]
                  text-[#972b51]
                "
                            >
                                A gentle soul with a poet's heart and an architect's mind —
                                Aryan finds beauty in the details, whether in the curve of a
                                building or the warmth of a quiet afternoon.
                            </p>
                        </motion.div>


                        {/* Groom Image */}
                        <div className="flex w-[42%] justify-end">

                            <div className="relative h-[337px] w-[308px]">

                                {/* Outer Taj Mahal - mirrored */}
                                <div
                                    className="
                    absolute
                    inset-0
                    bg-[url('/assets/tjMahal.webp')]
                    bg-cover
                    bg-center
                    -scale-x-100
                  "
                                />

                                {/* Groom photo + mask */}
                                <div
                                    className="
                    absolute
                    right-[0%]
                    top-[1.5%]
                    h-[96%]
                    w-[97%]
                    overflow-hidden
                    [mask-image:url('/assets/rotatedRightTJMahal.webp')]
                    [-webkit-mask-image:url('/assets/rotatedRightTJMahal.webp')]
                    [mask-size:80%_800%]
                    [-webkit-mask-size:100%_100%]
                    [mask-repeat:no-repeat]
                    [-webkit-mask-repeat:no-repeat]
                    [mask-position:center]
                    [-webkit-mask-position:center]
                  "
                                >
                                    <div
                                        className="
                      absolute
                      inset-0
                      bg-[url('/assets/groom.jpg')]
                      bg-cover
                      bg-center
                    "
                                    />
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* More About This Couple */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1 }}
                        className="mt-[10px] flex w-full justify-center"
                    >

                        <div
                            className="
                relative
                flex
                h-[54px]
                w-[365px]
                items-center
                justify-center
                rounded-full
                border
                border-[#9a3155]
                bg-transparent
              "
                        >
                            <button
                                className="
                  flex
                  h-[54px]
                  w-[335px]
                  items-center
                  justify-center
                  rounded-full
                  border-0
                  bg-[#9b2e50]
                  font-['Cormorant_Garamond']
                  text-[25px]
                  font-semibold
                  tracking-[-0.2px]
                  text-white
                  transition-transform
                  duration-200
                  hover:scale-[1.01]
                "
                            >
                                More About This Couple
                            </button>
                        </div>

                    </motion.div>

                </section>
            </div>
        </div>
    )
}

export default CoupleSection