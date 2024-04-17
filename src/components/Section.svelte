<script lang="ts">
	interface Section {
		id: string,
		title: string;
		content: string[];
	}

	let sections:Section[] = [
		{
			id: "about",
			title: "About",
			content: [
				"Dedicated to life long learning. Passionate about fostering environmental and social impact, I actively seek collaborations with brands and projects that align with these values, while also supporting female-founded/led and LGBTQI+ initiatives. Together, we work towards a better future, leveraging my expertise as a Fullstack Developer and active member of the queer and social tech community."
			]
		},
		{
			id: "yoga",
			title: "Yoga",
			content: [
				"The practice of yoga has been the biggest part of my life besides coding. When I first got into it in 2019, I had to step back from intense exercise and honestly just saw it as a way of movement without stretching my physical abilities. It quickly became an anchor in my life whenever I needed grounding. I practice physical yoga, called Asana, on a daily basis, but more importantly do I practice yoga with every breath I take.",
				"In February 2024, I completed my 200 hours YTT in Rishikesh, India. I am now a certified yoga teacher and am looking forward to sharing my knowledge with others."
			]
		}
	]
</script>

{#each sections as section}
	<section class="my-6" id={section.id}>
		<h2 class="text-xl/8 font-bold">{section.title}</h2>
		{#each section.content as content}
			<p>{content}</p>
		{/each}
	</section>
{/each}
