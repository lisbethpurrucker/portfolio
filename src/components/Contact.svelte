<script lang="ts">
  export let form: HTMLFormElement;
</script>

<section id="contact">
	<h2>Contact me</h2>
	<form method="POST">
		<div class="">
			<label class="block my-2" for="">To</label>
			<input class="w-full" type="email" name="to" value="lisbethpurrucker@gmail.com">
		</div>
		<div class="">
			<label class="block my-2" for="subject">Subject</label>
			<input class="w-full" type="text" name="subject">
		</div>
		<div class="">
			<label class="block my-2" for="message">Message</label>
			<textarea class="w-full" name="message"></textarea>
		</div>
		<div class="">
			<label class="block my-2" for="email">Email Address</label>
			<input class="w-full" type="email" name="email">
		</div>
		<button type="submit">Send</button>
	</form>
</section>
