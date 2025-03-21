import React from "react";
import Image from "next/image";
import Link from "next/link";

export function WhichProblem() {
	return (
		<section className="code-section" id="transform">
			<div className="container mx-auto px-6 lg:pt-24">
				<div className="flex flex-col items-stretch lg:flex-row">
					<div className="flex flex-1 items-center justify-center rounded-3xl bg-[var(--light-background-color)] p-6 lg:w-1/2">
						<Image
							className="mx-auto rounded-3xl"
							src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-app-development-5424915-4552066.png"
							alt="Hero"
							data-landingsite-gallery-type="illustration"
							data-media='{"id":"d630b230-d5d2-11ec-a473-0242ac140003","src":"iconscout","type":"illustration"}'
							width={512}
							height={512}
						/>
					</div>
					<div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0">
						<h2 className="mb-8 text-left text-4xl font-bold [font-family:var(--font-family-heading)] text-[var(--dark-text-color)]">
							Welches Problem löst Web2App?
						</h2>

						<div className="space-y-6 mb-8">
							<p className="text-xl leading-relaxed text-[var(--dark-text-color)] bg-[var(--light-background-color)] p-4 rounded-lg">
								Die traditionelle App-Entwicklung kann schnell teuer werden – im
								Durchschnitt kostet eine App-Entwicklung rund 30.000 Euro.
								Dieses hohe finanzielle Risiko schreckt viele Unternehmen ab.
							</p>
							<p className="text-xl leading-relaxed text-[var(--dark-text-color)] bg-[var(--light-background-color)] p-4 rounded-lg">
								Web2App löst dieses Problem: Wir entwickeln Ihre App schnell,
								kostengünstig und direkt aus Ihrer bestehenden Website. So
								ermöglichen wir Ihnen eine risikofreie Möglichkeit, Ihre App zu
								veröffentlichen, zu testen und anzuwenden.
							</p>
						</div>

						<div className="flex justify-start mb-8">
							<Link
								href="#start"
								className="inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
							>
								Zu den Angeboten!
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
