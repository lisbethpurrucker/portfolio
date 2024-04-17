<script lang="ts">
	interface Project {
		name: string;
		description: string;
		link: string;
	}


	let projects: Project[] = [
		{
			name: "Quouch",
			description: "web app offering couchsurfing experience and travel space to queer community. features built: booking, review, chat, map through Mapbox API, payment through Stripe API.",
			link: "https://quouch-app.com"
		},
		{
			name: "Cuba Buddy",
			description: "website of tourism start up selling individualized trips to Cuba. features built, maintained or improved:",
			link: "https://cuba-buddy.de/"
		},
		{
			name: "Destination Heroes",
			description: "",
			link: "https://destination-heroes.com/"
		},
		{
			name: "Factful",
			description: "",
			link: "https://factful-selling.com/"
		},
		{
			name: "Touristenkarten/Visa Shop",
			description: "",
			link: ""
		}
	]
</script>

<section class="my-6" id="projects">
	<h2 class="text-xl/8 font-bold">projects</h2>
	<ul>
		{#each projects as project}
			<a href={project.link}>
				<li>
					<img src="" alt="">
					<h3>{project.name}</h3>
					<p>{project.description}</p>
				</li>
			</a>
		{/each}
	</ul>
</section>