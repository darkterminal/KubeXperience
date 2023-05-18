
'use client'

import { ExpListCard } from "@/components/exp-list"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator";
import { Download, Github } from "lucide-react"

export default function Page() {

	const experiences = [
		{
			name: "Dancing Prismatics",
			description: "A dancing prism that reflects the world around it. And it's my first canvas.",
			cover: '/thumbnails/dancing-prismatics.png',
			link: '/xperience/dancing-prismatics',
		}
	];

	return (
		<>
			<section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
				<div className="flex max-w-[980px] flex-col items-start gap-2">
					<h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
						Three.js <br className="hidden sm:inline" />
						for everyone.
					</h1>
					<p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
						Choose a card to preview the experience. Code will be available soon.
					</p>
				</div>
				<div className="flex-1 space-y-1 pt-6">
					<div className="flex items-center justify-between space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">Choose an experience</h2>
						<div className="hidden sm:flex items-center space-x-2">
							<Button size="sm">
								<Github className="mr-2 h-4 w-4" />
								See on GitHub
							</Button>
						</div>
					</div>
					<p className="text-sm text-muted-foreground">
						Selec. Updated sometimes.
					</p>
				</div>
				<Separator className="my-4" />
				<div className="grid grid-cols-2 gap-2 pb-4">
					{experiences.map((exp) => (
						<ExpListCard
							key={exp.name}
							exp={exp}
							className="w-[150px]"
							aspectRatio="square"
							width={150}
							height={150}
						/>
					))}
				</div>
			</section>
		</>
	)
}
