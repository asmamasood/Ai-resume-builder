import { motion } from 'motion/react';

export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large Orb 1 - Top Right */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-400/30 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          top: '-10%',
          right: '-5%',
        }}
      />

      {/* Large Orb 2 - Bottom Left */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-400/30 to-pink-400/30 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{
          bottom: '-15%',
          left: '-10%',
        }}
      />

      {/* Medium Orb - Center */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{
          top: '40%',
          right: '20%',
        }}
      />

      {/* Small Orb 1 */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-violet-400/25 to-purple-400/25 blur-2xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -50, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        style={{
          top: '20%',
          left: '30%',
        }}
      />

      {/* Small Orb 2 */}
      <motion.div
        className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-indigo-400/20 to-blue-400/20 blur-2xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        style={{
          bottom: '25%',
          right: '35%',
        }}
      />
    </div>
  );
}
