"use client"
import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import Reel1 from './reels/reel1'
import Reel2 from './reels/reel2'
import Reel3 from './reels/reel3'
import Reel4 from './reels/reel4'
import Reel5 from './reels/reel5'

interface CarouselItem {
    id: number
    content: string
}

const InfiniteCarousel: React.FC = () => {
    const [items, setItems] = useState<CarouselItem[]>([
        { id: 1, content: 'Item 1' },
        { id: 2, content: 'Item 2' },
        { id: 3, content: 'Item 3' },
        { id: 4, content: 'Item 4' },
        { id: 5, content: 'Item 5' },
    ])

    const [width, setWidth] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const controls = useAnimationControls()
    const constraintsRef = useRef(null)

    useEffect(() => {
        setItems([...items, ...items])
    }, [])

    useEffect(() => {
        setWidth(items.length * 200)
    }, [items])

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                x: [-100, 100],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                },
            })
        } else {
            controls.stop()
        }
    }, [isPaused, controls, width])

    const handleMouseEnter = () => {
        setIsPaused(true)
    }

    const handleMouseLeave = () => {
        setIsPaused(false)
    }

    return (
        <div
            className="w-full overflow-hidden bg-transparent"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={constraintsRef}
        >
            <motion.div
                className="flex"
                animate={controls}
                drag="x"
                dragConstraints={constraintsRef}
                dragElastic={0.1}
            >
                <div className='mx-5'>
                    <Reel1 />
                </div>

                <div className='mx-5'>
                    <Reel2 />
                </div>

                <div className='mx-5'>
                    <Reel3 />
                </div>

                <div className='mx-5'>
                    <Reel4 />
                </div>

                <div className='mx-5'>
                    <Reel5 />
                </div>

            </motion.div>
        </div>
    )
}

export default InfiniteCarousel