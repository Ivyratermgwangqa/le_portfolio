"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = (): JSX.Element => {
    return (
        <div className="w-full h-full relative">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
            >
                <motion.div
                initial={{ opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                }}
                className="w-[200px] h-[200px] xl:w-[300px] xl:h-[300px] mix-blend-lighten"
            >
                <Image
                    src="/photo/myphoto8.png"
                    priority
                    quality={100}
                    fill
                    alt="Photo"
                    className="object-contain"
                />
            </motion.div>
            </motion.div>
        </div>
    );
};

export default Photo;