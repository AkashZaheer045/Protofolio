import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Starfield = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Generate random stars
        const generateStars = () => {
            const newStars = [];
            for (let i = 0; i < 100; i++) {
                newStars.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 3 + 1,
                    duration: Math.random() * 20 + 10,
                    delay: Math.random() * 5,
                    opacity: Math.random() * 0.7 + 0.3,
                });
            }
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Falling Stars */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.x}%`,
                        top: `-5%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                    }}
                    animate={{
                        y: ['0vh', '110vh'],
                        x: [0, Math.random() * 50 - 25],
                        opacity: [0, star.opacity, star.opacity, 0],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}

            {/* Twinkling Stars (Static) */}
            {stars.slice(0, 50).map((star) => (
                <motion.div
                    key={`twinkle-${star.id}`}
                    className="absolute rounded-full bg-cyan-400"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size * 0.5}px`,
                        height: `${star.size * 0.5}px`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 3,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Shooting Stars */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={`shooting-${i}`}
                    className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 50}%`,
                    }}
                    animate={{
                        x: [0, 300],
                        y: [0, 200],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        delay: i * 8,
                        repeat: Infinity,
                        ease: 'easeOut',
                    }}
                />
            ))}

            {/* Nebula Effect */}
            <div className="absolute inset-0 opacity-30">
                <motion.div
                    className="absolute w-96 h-96 rounded-full blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                        left: '20%',
                        top: '30%',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute w-96 h-96 rounded-full blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
                        right: '20%',
                        bottom: '30%',
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>
        </div>
    );
};

export default Starfield;
