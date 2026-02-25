"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, Twitter, Github } from "lucide-react"

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
            "\ceo_portrait_new_1771888897973.png",
        socials: {
            linkedin: "#",
            twitter: "#",
            github: "#",
        },
    },
]

export function TeamPreview() {
    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Meet The Team Members
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-[450px] w-full overflow-hidden rounded-2xl bg-zinc-900 border border-white/5"
                        >
                            {/* Member Image */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Base Info Overlay (Static but fades out on hover if you prefer, 
                                but here we'll keep Name/Role visible or move them into the slide up) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-300 group-hover:opacity-0">
                                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                                <p className="text-primary font-medium">{member.role}</p>
                            </div>

                            {/* Hover Overlay (Slide/Fade up) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-primary font-medium mb-4">{member.role}</p>

                                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {member.bio}
                                </p>

                                <div className="flex gap-4">
                                    <a href={member.socials.linkedin} className="text-white/60 hover:text-white transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                    <a href={member.socials.twitter} className="text-white/60 hover:text-white transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                    <a href={member.socials.github} className="text-white/60 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
