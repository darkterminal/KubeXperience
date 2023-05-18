import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function ExpListCard({
	exp,
	aspectRatio = "portrait",
	width,
	height,
	className,
	...props
}) {
	return (
		<div className={cn("space-y-3", className)} {...props}>

			<Link href={exp.link}>
				<div className="overflow-hidden rounded-md hover:border-2 border-dark mb-2">
					<Image
						src={exp.cover}
						alt={exp.name}
						width={width}
						height={height}
						className={cn(
							"h-auto w-auto object-cover transition-all hover:scale-105",
							aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
						)}
					/>
				</div>

				<div className="space-y-1 text-sm text-center">
					<h3 className="font-medium leading-none">{exp.name}</h3>
					<p className="text-xs text-muted-foreground">{exp.description}</p>
				</div>
			</Link >
		</div>
	)
}