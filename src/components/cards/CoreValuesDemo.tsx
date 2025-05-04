"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const coreValues = [
	{
		title: "Innovation Excellence",
		description:
			"Pioneering cutting-edge solutions through AI-driven automation, advanced blockchain security, and enterprise-grade SaaS platforms to transform business operations.",
		color:
			"from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30",
		icon: "💡",
	},
	{
		title: "Trust & Integrity",
		description:
			"Upholding the highest standards of ethical technology development with unwavering commitment to security, transparency, and responsible innovation.",
		color:
			"from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30",
		icon: "🛡️",
	},
	{
		title: "Client Success",
		description:
			"Delivering tailored enterprise solutions that drive operational excellence, maximize efficiency, and accelerate sustainable business growth.",
		color:
			"from-orange-600/20 to-yellow-600/20 hover:from-orange-600/30 hover:to-yellow-600/30",
		icon: "⭐",
	},
	{
		title: "Collaborative Innovation",
		description:
			"Fostering synergistic partnerships between expert developers, engineers, and innovators to create transformative technological solutions.",
		color:
			"from-green-600/20 to-emerald-600/20 hover:from-green-600/30 hover:to-emerald-600/30",
		icon: "🤝",
	},
	{
		title: "Sustainable Impact",
		description:
			"Architecting energy-efficient, scalable solutions that prioritize environmental responsibility while ensuring long-term business sustainability.",
		color:
			"from-teal-600/20 to-green-600/20 hover:from-teal-600/30 hover:to-green-600/30",
		icon: "🌱",
	},
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

export function CoreValuesDemo() {
	return (
		<div className="py-12 px-4">
			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
			>
				{coreValues.map((value, index) => (
					<motion.div
						key={value.title}
						variants={item}
						className={cn(
							"relative overflow-hidden rounded-2xl p-8 h-full",
							"bg-gradient-to-br from-gray-900 to-black",
							"border border-gray-800 hover:border-gray-700",
							"transition-all duration-300 group hover:shadow-xl"
						)}
					>
						{/* Animated gradient background */}
						<div
							className={cn(
								"absolute inset-0 bg-gradient-to-r",
								value.color,
								"opacity-0 group-hover:opacity-100 transition-opacity duration-500"
							)}
						/>

						{/* Content */}
						<div className="relative z-10">
							<span className="text-3xl mb-6 block transform group-hover:scale-110 transition-transform duration-300">
								{value.icon}
							</span>
							<h3 className="text-xl font-bold mb-4 text-white tracking-tight">
								{value.title}
							</h3>
							<p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
								{value.description}
							</p>
						</div>

						{/* Decorative elements */}
						<div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
						<div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500" />
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
