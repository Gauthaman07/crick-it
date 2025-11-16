import React from 'react'
import * as classes from './subtleparticles.module.scss'

function SubtleParticles({ count = 7 }) {
    // Generate random particle data
    const particles = Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 30 + 20, // 20-50px (temporarily large for debugging)
        top: Math.random() * 100, // 0-100%
        left: Math.random() * 100, // 0-100%
        opacity: 0.6, // Fixed high opacity for debugging
        duration: Math.random() * 4 + 4, // 4-8s
        delay: Math.random() * 5, // 0-5s delay for staggered effect
    }))

    return (
        <div className={classes.particleContainer}>
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className={classes.particle}
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        top: `${particle.top}%`,
                        left: `${particle.left}%`,
                        opacity: particle.opacity,
                        animationDuration: `${particle.duration}s`,
                        animationDelay: `${particle.delay}s`,
                    }}
                />
            ))}
        </div>
    )
}

export default SubtleParticles
