import React from 'react'
import { motion } from "framer-motion";

const SendWishes = () => {
    return (
        <div>
            {/* =========================
    SEND YOUR WISHES
========================= */}

            <section
                className="
    relative
    min-h-[800px]
    w-full
    overflow-hidden
    bg-[#fdebf5]
  "
            >
                {/* Top-left flowers */}
                <img
                    src="/assets/leftFlower.webp"
                    alt=""
                    className="
      absolute
      left-[0px]
      top-0
      z-50
      w-[220px]
      pointer-events-none
    "
                />

                {/* Bottom-right flowers */}
                <img
                    src="/assets/rightLotous.webp"
                    alt=""
                    className="
      absolute
      bottom-[-20px]
      right-[0px]
      z-50
      w-[250px]
      -scale-x-[-1]
      pointer-events-none
    "
                />

                {/* Large pink decorative background */}
                <div
                    className="
      absolute
      left-1/2
      top-1/2
      h-[650px]
      w-[1080px]
      -translate-x-1/2
      -translate-y-1/2
      rotate-[-3deg]
      rounded-[45px]
      bg-[#df5d88]
    "
                />

                {/* Left pink decorative shape */}
                <div
                    className="
    absolute
    left-[calc(50%-540px)]
    top-1/2
    z-0
    h-[650px]
    w-[1080px]
    -translate-y-1/2
    rotate-[3deg]
    rounded-[45px]
    bg-[#df5d88]
  "
                />

                {/* Main card */}
                <div
                    className="
      absolute
      left-1/2
      top-1/2
      z-20
      flex
      h-[650px]
      w-[1080px]
      -translate-x-1/2
      -translate-y-1/2
      items-center
      rounded-[45px]
      border-[2px]
      border-[#f3a8c5]
      bg-[#fdebf5]
      px-[65px]
    "
                >

                    {/* Left heading */}
                    <div
                        className="
        flex
        w-[50%]
        items-center
        justify-center
      "
                    >
                        <h2
                            className="
          m-0
          font-['Anjaniya']
          text-[85px]
          leading-[1]
          text-[#972b51]
        "
                        >
                            Send your wishes
                        </h2>
                    </div>


                    {/* Right form */}
                    <div
                        className="
        flex
        w-[50%]
        flex-col
        items-center
      "
                    >

                        {/* Name */}
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="
          h-[55px]
          w-full
          rounded-[15px]
          border
          border-[#f3a8c5]
          bg-white
          px-[15px]
          font-['Cormorant_Garamond']
          text-[21px]
          text-[#972b51]
          outline-none
          placeholder:text-[#e779a1]
        "
                        />

                        {/* Wishes */}
                        <div className="relative mt-[22px] w-full">

                            <textarea
                                placeholder="Your Wishes"
                                className="
            h-[110px]
            w-full
            resize-none
            rounded-[15px]
            border
            border-[#f3a8c5]
            bg-white
            px-[15px]
            pt-[12px]
            font-['Cormorant_Garamond']
            text-[21px]
            text-[#972b51]
            outline-none
            placeholder:text-[#e779a1]
          "
                            />

                            {/* Sparkle button */}
                            <button
                                type="button"
                                className="
            absolute
            bottom-[8px]
            right-[10px]
            flex
            h-[42px]
            w-[55px]
            items-center
            justify-center
            rounded-full
            border-0
            bg-[#982e50]
            text-[22px]
            text-white
          "
                            >
                                ✨
                            </button>

                        </div>


                        {/* Submit */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                opacity: { duration: 1 },
                                x: { duration: 1 },
                                width: { duration: 0.25 }
                            }}
                            className="
    relative
    mt-[25px]
    flex
    h-[50px]
    w-[215px]
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
                            whileHover={{ width: "215px" }}
                            transition={{
                                opacity: { duration: 1 },
                                x: { duration: 1 },
                                width: { duration: 0.25 }
                            }}
                                type="submit"
                                className="
      flex
      h-[50px]
      w-[195px]
      items-center
      justify-center
      rounded-full
      border-0
      bg-[#982e50]
      font-['Cormorant_Garamond']
      text-[25px]
      font-semibold
      text-white
    "
                            >
                                Submit
                            </motion.button>
                        </motion.div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default SendWishes
