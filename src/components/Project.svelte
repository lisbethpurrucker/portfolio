<script>
	let projects = [
		{
			name: "Quouch",
			description: "Web app offering couchsurfing experience and travel space to queer community. Features built: booking, review, chat, map through Mapbox API, payment through Stripe API.",
			link: "https://quouch-app.com"
		},
		{
			name: "Cuba Buddy",
			description: "Website of tourism start up.",
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
			description: ""
		}
	]
</script>

<section class="my-6" id="projects">
	<h2 class="text-xl/8 font-bold">Projects</h2>
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