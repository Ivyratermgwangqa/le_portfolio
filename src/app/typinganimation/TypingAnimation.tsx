"use client";  // Mark this component as a Client Component

import '../../globals.css';
import { useEffect, useState } from 'react';

const TypingAnimation = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            }, 200);  // Adjust the speed of typing here (in milliseconds)

            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return <span>{displayText}</span>;
};

export default TypingAnimation;