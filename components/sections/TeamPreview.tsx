"use client"

import { m, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Linkedin, Twitter, Github, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { MouseEvent, useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const team = [
    {
        name: "Muhammad Abaidullah",
        role: "CEO / Co-Founder",
        bio: "Visionary leader driving innovation in AI and sustainable technology solutions.",
        image:
            "/ceo_portrait_new_1771889009828.png",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
    {
        name: "Zubair Shahid",
        role: "CTO / Co-Founder",
        bio: "Tech architect obsessed with scalable systems and cutting-edge software engineering.",
        image:
            "/cio_portrait_new_1771888929888.png",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
    {
        name: "Muhammad Saood",
        role: "CIO / Co-Founder",
        bio: "Strategic information officer focused on data integrity and enterprise growth.",
        image:
            "/ceo_portrait_new_1771888897973.png",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
]

function TiltCard({ member, index }: { member: typeof team[0], index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="perspective-1000 w-full"
        >
            <m.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="group relative h-[320px] md:h-[400px] lg:h-[450px] w-full overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 transition-all duration-200 ease-linear hover:shadow-2xl hover:shadow-primary/20"
            >
                {/* Member Image */}
                <Image
                    src={member.image.replace(/\\/g, '/')}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ transform: "translateZ(-20px)" }} // Adds depth relative to the card container
                />

                {/* Base Info Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-300 group-hover:opacity-0"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <h3 className="text-2xl font-bold text-white shadow-sm">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                </div>

                {/* Hover Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]"
                    style={{ transform: "translateZ(40px)" }} // Make it pop out more
                >
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{member.name}</h3>
                    <p className="text-primary font-medium mb-4 drop-shadow-md">{member.role}</p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                        {member.bio}
                    </p>

                    <div className="flex gap-4">
                        <a href={member.socials.linkedin} aria-label={`${member.name}'s LinkedIn profile`} className="text-white/60 hover:text-white transition-colors hover:-translate-y-1 transform duration-200">
                            <Linkedin size={20} />
                        </a>
                        <a href={member.socials.twitter} aria-label={`${member.name}'s Twitter profile`} className="text-white/60 hover:text-white transition-colors hover:-translate-y-1 transform duration-200">
                            <Twitter size={20} />
                        </a>
                        <a href={member.socials.github} aria-label={`${member.name}'s GitHub profile`} className="text-white/60 hover:text-white transition-colors hover:-translate-y-1 transform duration-200">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </m.div>
        </m.div>
    )
}

export function TeamPreview() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % team.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrentIndex((prev) => (prev + 1) % team.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);

    return (
        <section className="py-24 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-0 sm:px-8 lg:px-12">
                <div className="text-center mb-16 px-6 sm:px-0">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Meet The Team Members
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mx-auto perspective-1000">
                    {team.map((member, index) => (
                        <TiltCard key={member.name} member={member} index={index} />
                    ))}
                </div>

                {/* Mobile Slider */}
                <div className="block sm:hidden relative w-full overflow-hidden pb-4 px-8">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {team.map((member, index) => (
                            <div key={member.name} className="w-full flex-shrink-0 px-2">
                                <TiltCard member={member} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation Controls */}
                <div className="flex sm:hidden justify-center items-center gap-4 mt-8 px-6">
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary/20 hover:border-primary/50 transition-colors" onClick={prev}>
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <div className="flex gap-2 mx-2">
                        {team.map((_, i) => (
                            <button 
                                key={i} 
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-primary w-6" : "bg-white/20 w-2"}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary/20 hover:border-primary/50 transition-colors" onClick={next}>
                        <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
