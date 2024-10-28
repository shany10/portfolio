import soleil_gauche from '../images/soleil_gauche.png'
import soleil_droite from '../images/soleil_droite.png'

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,

} from "framer-motion";
import { wrap } from "@motionone/utils";

import { FaLaravel, FaSymfony, FaPhp, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiBrevo } from "react-icons/si";


function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 2000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="mt-14">
            <motion.div className="scroller flex-wrap w-auto"
                style={{ x }}
            >
                <div>{children}</div>
                <div>{children}</div>
                <div>{children}</div>
                <div>{children}</div>
            </motion.div>
        </div>
    );
}


const Home = () => {

    const letters = Array.from("{ DEVELOPPEUR FULL-STACK }");
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: -20,
            y: 10,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <div className="min-h-[100vh]">
            <div className='flex justify-center'>
                <motion.img
                    src={soleil_gauche}
                    className='mt-[10vh] h-[222px] md:h-[322px] lg:h-[423px]'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    loading="lazy"
                />
                <motion.img
                    src={soleil_droite}
                    className='h-[222px] mt-[10vh] md:h-[322px] lg:h-[423px]'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    loading="lazy"
                />
            </div>
            <motion.div
                className="flex justify-center"
                style={{ overflow: "hidden", display: "flex" }}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {letters.map((letter, index) => (
                    <motion.span variants={child} key={index} className='text-p3 text-2xl md:text-4xl lg:text-5xl'>
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.div>
            <section className="parallax">
                <ParallaxText baseVelocity={4} >
                    <div className="text-lg text-p3 sm:text-xl lg:text-2xl">
                        Laravel <FaLaravel className="inline" />&nbsp;&nbsp;
                        Symfony <FaSymfony className="inline" />&nbsp;&nbsp;
                        Javascripte <IoLogoJavascript className="inline" />&nbsp;&nbsp;
                        PHP <FaPhp className="inline" />&nbsp;&nbsp;
                        React <FaReact className="inline" />&nbsp;&nbsp;
                        Node <FaNodeJs className="inline" />&nbsp;&nbsp;
                        MySQL <GrMysql className="inline" />&nbsp;&nbsp;
                        Brevo <SiBrevo className="inline" />&nbsp;&nbsp;
                        Html <FaHtml5 className="inline" />&nbsp;&nbsp;
                        Css <FaCss3Alt className="inline" />&nbsp;&nbsp;
                    </div>
                </ParallaxText>
            </section>
        </div>
    )
}

export default Home;