import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WishesSection = () => {
  const wishes = [
    {
      name: "Priya",
      message:
        "Congratulations on finding your forever! May your marriage be filled with love that grows stronger each day, laughter that never fades, dreams that come true, and memories you will cherish forever.",
    },
    {
      name: "Rahul",
      message:
        "May your marriage be filled with endless love, shared dreams, warm laughter, and beautiful adventures. Wishing you both a wonderful life together, surrounded by happiness, peace, and love.",
    },
    {
      name: "Samartha",
      message:
        "Wishing you both a lifetime filled with love, laughter, and countless beautiful moments together.",
    },
  ];

  const [currentWish, setCurrentWish] = useState(0);

  const previousWish = () => {
    setCurrentWish((prev) =>
      prev === 0 ? wishes.length - 1 : prev - 1
    );
  };

  const nextWish = () => {
    setCurrentWish((prev) =>
      prev === wishes.length - 1 ? 0 : prev + 1
    );
  };

  const wish = wishes[currentWish];

  return (
    <div>
      {/* =========================
          WISHES SECTION
      ========================= */}

      <section
        className="
          relative
          min-h-[780px]
          w-full
          overflow-hidden
          bg-[#922b4d]
        "
      >
        <div
          className="
            mx-auto
            flex
            min-h-[780px]
            w-full
            max-w-[1050px]
            items-center
            justify-between
            px-[40px]
          "
        >

          {/* =========================
              LEFT - TITLE
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="
              flex
              w-[48%]
              items-center
              justify-center
              text-center
            "
          >
            <h2
              className="
                m-0
                whitespace-pre-line
                font-['Anjaniya']
                text-[86px]
                leading-[1.05]
                text-white
              "
            >
              {"Wishes for\nthe couple"}
            </h2>
          </motion.div>


          {/* =========================
              RIGHT - WISH CARD
          ========================= */}

          <div className="relative h-[600px] w-[500px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentWish}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >

                {/* Card IMAGE */}
                <img
                  src="/assets/whiteTJMahal.webp"
                  alt=""
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-fill
                  "
                />

                {/* =========================
                    CARD CONTENT
                ========================= */}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    text-center
                    px-[55px]
                    pt-[45px]
                  "
                >

                  {/* Name */}
                  <h3
                    className="
                      m-0
                      font-['Playfair_Display']
                      text-[36px]
                      font-semibold
                      text-[#972b51]
                    "
                  >
                    {wish.name}
                  </h3>


                  {/* Ornament */}
                  <div
                    className="
                      my-[25px]
                      flex
                      h-[25px]
                      w-[120px]
                      items-center
                      justify-center
                    "
                  >
                    <div className="relative w-full">

                      <span
                        className="
                          absolute
                          left-0
                          top-1/2
                          h-px
                          w-[38px]
                          bg-[#972b51]
                        "
                      />

                      <span
                        className="
                          absolute
                          right-0
                          top-1/2
                          h-px
                          w-[38px]
                          bg-[#972b51]
                        "
                      />

                      <span
                        className="
                          absolute
                          left-1/2
                          top-1/2
                          h-[8px]
                          w-[8px]
                          -translate-x-1/2
                          -translate-y-1/2
                          rotate-45
                          border
                          border-[#972b51]
                        "
                      />

                      <span
                        className="
                          absolute
                          left-[35%]
                          top-1/2
                          h-[5px]
                          w-[5px]
                          -translate-y-1/2
                          rounded-full
                          bg-[#972b51]
                        "
                      />

                      <span
                        className="
                          absolute
                          right-[35%]
                          top-1/2
                          h-[5px]
                          w-[5px]
                          -translate-y-1/2
                          rounded-full
                          bg-[#972b51]
                        "
                      />

                    </div>
                  </div>


                  {/* Message */}
                  <p
                    className="
                      m-0
                      max-w-[390px]
                      font-['Poppins']
                      text-[25px]
                      leading-[1.5]
                      text-[#972b51]
                    "
                  >
                    {wish.message}
                  </p>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>


        {/* =========================
            SLIDER CONTROLS
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            absolute
            bottom-[5px]
            right-1/6
            flex
            -translate-x-1/2
            items-center
            gap-[18px]
          "
        >

          {/* Previous */}
          <button
            onClick={previousWish}
            aria-label="Previous wish"
            className="
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              rounded-full
              border-0
              bg-white
              text-[35px]
              text-[#972b51]
              shadow-md
              transition-transform
              duration-200
              hover:scale-[1.05]
            "
          >
            ←
          </button>


          {/* Counter */}
          <div
            className="
              flex
              h-[48px]
              w-[65px]
              items-center
              justify-center
              rounded-[4px]
              bg-[#fdebf5]
              font-['Poppins']
              text-[14px]
              text-[#972b51]
            "
          >
            {currentWish + 1} of {wishes.length}
          </div>


          {/* Next */}
          <button
            onClick={nextWish}
            aria-label="Next wish"
            className="
              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center
              rounded-full
              border-0
              bg-white
              text-[35px]
              text-[#972b51]
              shadow-md
              transition-transform
              duration-200
              hover:scale-[1.05]
            "
          >
            →
          </button>

        </motion.div>

      </section>
    </div>
  );
};

export default WishesSection;