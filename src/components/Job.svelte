<script lang="ts">
	interface Job {
    duration: string;
    title: string;
    description: string;
    skills: string[];
  }

  let jobs: Job[] = [
    {
      duration: "2022 - Present",
      title: "Quouch - CTO & Fullstack Developer",
      description: "Provide leadership in technical decision making. Designed, developed, shipped and now maintain production code for our web application which is now used by 5000+ users worldwide.",
      skills: [
        "HTML",
        "SCSS",
        "Stimulus",
        "Ruby on Rails",
        "Stripe API",
        "Heroku"
      ]
    },
    {
      duration: "2021 - Present",
      title: "Le Wagon - Teacher",
      description: "Give lectures, support students in challenges, oversee and support development of final projects.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "OOP",
        "SQL",
        "Ruby",
        "Ruby on Rails",
        "Templating",
        "AJAX",
        "Heroku"
      ]
    },
    {
      duration: "2022 - Present",
      title: "Tech4Girls - Volunteer",
      description: "Teach coding skills to children, help forge partnerships and secure financial support, lead project kick off with a team of UX designers and web developers for a quiz app - advancing our mission to empower girls and underprivileged children in tech.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Ruby on Rails"
      ]
    },
    {
      duration: "2021 - 2022",
      title: "Travel Buddies GmbH - Web Developer",
      description: "Built and maintained critical components across the whole product portfolio. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      skills: [
        "HTML",
        "SCSS",
        "JavaScript",
        "PHP",
        "Wordpress",
        "Shopify"
      ]
    }
  ];
</script>

<section class="my-8" id="experience">
  <h2 class="text-xl/8 font-bold">Experience</h2>
  <ul class="mt-2">
    {#each jobs as job}
      <li class="mb-6">
        <span class="text-sm/6">{job.duration}</span>
        <h3 class="text-lg/8">{job.title}</h3>
        <p>{job.description}</p>
        <ul class="flex flex-wrap gap-1 items-center mt-3">
          {#each job.skills as skill}
            <li class="bg-air-blue text-sm text-white rounded-2xl py-1 px-3">{skill}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</section>
