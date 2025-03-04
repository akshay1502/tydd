'use client'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const images = ['/image1.png', '/image2.png', '/image3.png', '/partner2.png', '/partner1.png']

export default function CircularSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const imageRefs = useRef([])

  useEffect(() => {
    const items = gsap.utils.toArray('.item')
    const numItems = items.length

    // 🟢 Position images evenly along the circle
    // from 9'o clock
    gsap.set(items, {
      motionPath: {
        path: '#circlePath',
        align: '#circlePath',
        alignOrigin: [0.5, 0.5],
        end: (i) => 0.5 + i / numItems, // Evenly distribute images
      },
    })

    const itemStep = 1 / numItems,
      wrapProgress = gsap.utils.wrap(0, 1),
      snap = gsap.utils.snap(itemStep),
      wrapTracker = gsap.utils.wrap(0, numItems),
      tracker = { item: 0 }

    const tl = gsap.timeline({ paused: true })

    tl.to('.wrapper', {
      rotation: 360,
      transformOrigin: 'center',
      duration: 1,
      ease: 'none',
    })

    tl.to(
      items,
      {
        rotation: '-=360',
        transformOrigin: 'center',
        duration: 1,
        ease: 'none',
      },
      0,
    )

    tl.to(
      tracker,
      {
        item: numItems,
        duration: 1,
        ease: 'none',
        modifiers: {
          item(value) {
            return wrapTracker(numItems - Math.round(value))
          },
        },
      },
      0,
    )

    items.forEach(function (el, i) {
      el.addEventListener('click', function () {
        const current = tracker.item,
          activeItem = i

        if (i === current) {
          return
        }

        //set active item to the item that was clicked and remove active class from all items
        document.querySelector('.item.active').classList.remove('active')
        items[activeItem].classList.add('active')

        const diff = current - i

        if (Math.abs(diff) < numItems / 2) {
          moveWheel(diff * itemStep)
        } else {
          const amt = numItems - Math.abs(diff)

          if (current > i) {
            moveWheel(amt * -itemStep)
          } else {
            moveWheel(amt * itemStep)
          }
        }
      })
    })

    function moveWheel(amount, i, index) {
      const progress = tl.progress()
      tl.progress(wrapProgress(snap(tl.progress() + amount)))
      const next = tracker.item
      tl.progress(progress)

      document.querySelector('.item.active').classList.remove('active')
      items[next].classList.add('active')

      gsap.to(tl, {
        progress: snap(tl.progress() + amount),
        modifiers: {
          progress: wrapProgress,
        },
      })
    }
  }, [])

  return (
    <div className="wrapper relative flex h-[550px] w-[550px]">
      <svg width="550" height="550">
        <path
          d="M 549,275 A 274,274 0 1,1 1,275 A 274,274 0 1,1 549,275"
          stroke="black"
          strokeWidth="2.5"
          fill="none"
          id="circlePath"
        />
      </svg>

      {images.map((src, index) => (
        <img
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          src={src}
          alt={`Image ${index + 1}`}
          className={`item h-40 w-40 absolute rounded-full ${index === activeIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  )
}
