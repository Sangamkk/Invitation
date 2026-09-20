import React, { useEffect, useState } from 'react'

const CountdownSection = () => {

    const targetDate = new Date("2026-11-27T18:00:00").getTime()

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {

        const updateCountdown = () => {

            const now = new Date().getTime()
            const difference = targetDate - now

            if (difference <= 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                })
                return
            }

            const days = Math.floor(
                difference / (1000 * 60 * 60 * 24)
            )

            const hours = Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            )

            const minutes = Math.floor(
                (difference / (1000 * 60)) % 60
            )

            const seconds = Math.floor(
                (difference / 1000) % 60
            )

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds
            })
        }

        updateCountdown()

        const interval = setInterval(updateCountdown, 1000)

        return () => clearInterval(interval)

    }, [])

    return (
        <div>
            {/* =====================================================
    COUNTDOWN / COUPLE SECTION 
===================================================== */}

            <section
                className="
    relative 
    mx-auto 
    w-full 
    min-h-[700px] 
    overflow-visible 
    bg-white
  "
            >

                {/* ===================================================
      BACKGROUND TAJ MAHAL 
  =================================================== */}



                {/* ===================================================
      LEFT LOTUS DECORATION 
  =================================================== */}

                <img
                    src="/assets/rightLotous.webp"
                    alt=""
                    className="
      absolute 
      left-[-55px] 
      top-[-300px] 
      -scale-x-100
      z-1
      w-[300px]
      pointer-events-none
    "
                />


                {/* ===================================================
      RIGHT LOTUS DECORATION 
  =================================================== */}

                <img
                    src="/assets/rightLotous.webp"
                    alt=""
                    className="
      absolute 
      right-[-55px] 
      top-[-300px]
      z-1
      w-[300px]
      pointer-events-none
    "
                />



                {/* ===================================================
      PINK CURVED COUNTDOWN AREA 
  =================================================== */}

                <div
                    className="
    absolute 
    left-0 
    top-8 
    z-5
    h-[480px] 
    w-screen 
    rounded-[50%_50%_0_0/25%_25%_0_0]
    bg-[#fce8f4]
  "
                >


                    {/* ===============================================
        CONTENT 
    =============================================== */}

                    <div
                        className="
        flex 
        h-full 
        w-full
        flex-col 
        items-center
        pt-[200px]
        text-center
      "
                    >

                        {/* =============================================
          TITLE 
      ============================================= */}

                        <h2
                            className="
          m-0
          font-['Anjaniya']
          text-[100px]
          leading-[0.95]
          text-[#972b51]
        "
                        >
                            Officially Husband and Wife in
                        </h2>


                        {/* =============================================
          COUNTDOWN 
      ============================================= */}

                        <div
                            className="
          mt-[35px]
          flex 
          items-start 
          justify-center
          text-[#972b51]
        "
                        >

                            {/* DAYS */}

                            <div className="flex flex-col items-center">

                                <span
                                    className="
              font-['Playfair_Display']
              text-[92px]
              font-semibold
              leading-none
            "
                                >
                                    {timeLeft.days}
                                </span>

                                <span
                                    className="
              mt-[12px]
              font-['Cormorant_Garamond']
              text-[27px]
              font-semibold
              tracking-[5px]
            "
                                >
                                    days
                                </span>

                            </div>


                            {/* SEPARATOR */}

                            <div
                                className="
            mx-[35px]
            h-[90px]
            w-px
            bg-[#972b51]
          "
                            />


                            {/* HOURS */}

                            <div className="flex flex-col items-center">

                                <span
                                    className="
              font-['Playfair_Display']
              text-[92px]
              font-semibold
              leading-none
            "
                                >
                                    {timeLeft.hours}
                                </span>

                                <span
                                    className="
              mt-[12px]
              font-['Cormorant_Garamond']
              text-[27px]
              font-semibold
              tracking-[5px]
            "
                                >
                                    hrs
                                </span>

                            </div>


                            {/* SEPARATOR */}

                            <div
                                className="
            mx-[35px]
            h-[90px]
            w-px
            bg-[#972b51]
          "
                            />


                            {/* MINUTES */}

                            <div className="flex flex-col items-center">

                                <span
                                    className="
              font-['Playfair_Display']
              text-[92px]
              font-semibold
              leading-none
            "
                                >
                                    {timeLeft.minutes}
                                </span>

                                <span
                                    className="
              mt-[12px]
              font-['Cormorant_Garamond']
              text-[27px]
              font-semibold
              leading-none
              tracking-[5px]
            "
                                >
                                    mins
                                </span>

                            </div>


                            {/* SEPARATOR */}

                            <div
                                className="
            mx-[35px]
            h-[90px]
            w-px
            bg-[#972b51]
          "
                            />


                            {/* SECONDS */}

                            <div className="flex flex-col items-center">

                                <span
                                    className="
              font-['Playfair_Display']
              text-[92px]
              font-semibold
              leading-none
            "
                                >
                                    {timeLeft.seconds}
                                </span>

                                <span
                                    className="
              mt-[12px]
              font-['Cormorant_Garamond']
              text-[27px]
              font-semibold
              tracking-[5px]
            "
                                >
                                    secs
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default CountdownSection