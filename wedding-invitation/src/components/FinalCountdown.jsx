import React, { useEffect, useState } from 'react'

const FinalCountdown = () => {

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
            {/* =========================
    FINAL COUNTDOWN
========================= */}

            <section
                className="
    relative
    min-h-[600px]
    w-full
    bg-[#fdebf5]
  "
            >
                {/* Quote */}
                <div
                    className="
      flex
      justify-center
      pt-[35px]
      text-center
    "
                >
                    <p
                        className="
        m-0
        font-['Anjaniya']
        text-[48px]
        text-[#972b51]
      "
                    >
                        "Awaiting the Big Day with Open Hearts"
                    </p>
                </div>


                {/* Countdown area */}
                <div
                    className="
      relative
      mx-auto
      mt-[35px]
      h-[420px]
      w-[850px]
    "
                >

                    {/* Couple image */}
                    <img
                        src="/assets/couple.webp"
                        alt="Couple"
                        className="
        absolute
        left-1/2
        top-1/2
        z-10
        h-[410px]
        w-[380px]
        -translate-x-1/2
        -translate-y-1/2
        object-contain
      "
                    />


                    {/* DAYS */}
                    <div
                        className="
        absolute
        left-[80px]
        top-[45px]
        z-20
        flex
        flex-col
        items-center
        text-center
      "
                    >
                        <span
                            className="
          font-['Playfair_Display']
          text-[64px]
          font-semibold
          leading-none
          text-[#972b51]
        "
                        >
                            {timeLeft.days}
                        </span>

                        <span
                            className="
          mt-[8px]
          font-['Cormorant_Garamond']
          text-[27px]
          font-semibold
          text-[#972b51]
        "
                        >
                            Days
                        </span>
                    </div>


                    {/* HOURS */}
                    <div
                        className="
        absolute
        right-[80px]
        top-[45px]
        z-20
        flex
        flex-col
        items-center
        text-center
      "
                    >
                        <span
                            className="
          font-['Playfair_Display']
          text-[64px]
          font-semibold
          leading-none
          text-[#972b51]
        "
                        >
                            {timeLeft.hours}
                        </span>

                        <span
                            className="
          mt-[8px]
          font-['Cormorant_Garamond']
          text-[27px]
          font-semibold
          text-[#972b51]
        "
                        >
                            Hours
                        </span>
                    </div>


                    {/* MINUTES */}
                    <div
                        className="
        absolute
        bottom-[45px]
        left-[80px]
        z-20
        flex
        flex-col
        items-center
        text-center
      "
                    >
                        <span
                            className="
          font-['Playfair_Display']
          text-[64px]
          font-semibold
          leading-none
          text-[#972b51]
        "
                        >
                            {timeLeft.minutes}
                        </span>

                        <span
                            className="
          mt-[8px]
          font-['Cormorant_Garamond']
          text-[27px]
          font-semibold
          text-[#972b51]
        "
                        >
                            Mins
                        </span>
                    </div>


                    {/* SECONDS */}
                    <div
                        className="
        absolute
        bottom-[45px]
        right-[80px]
        z-20
        flex
        flex-col
        items-center
        text-center
      "
                    >
                        <span
                            className="
          font-['Playfair_Display']
          text-[64px]
          font-semibold
          leading-none
          text-[#972b51]
        "
                        >
                            {timeLeft.seconds}
                        </span>

                        <span
                            className="
          mt-[8px]
          font-['Cormorant_Garamond']
          text-[27px]
          font-semibold
          text-[#972b51]
        "
                        >
                            Secs
                        </span>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default FinalCountdown