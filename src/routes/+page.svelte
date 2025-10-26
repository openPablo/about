<script lang="ts">
    import TimeLineItem from './TimelineItem.svelte'
    import { timeLineItems } from '$lib/data/timeLineItems.ts';
    import type { PageProps } from './$types';
    import { enhance } from '$app/forms';

	  let { data, form }: PageProps = $props();
    const workingStartDate = "2018-02-01"
    let yearsOfExperience = new Date().getYear() - new Date(workingStartDate).getYear()

</script>

<main>
  
	<div id="facecard" class="flex flex-col sm:flex-row items-center justify-center min-h-screen">
		<div class="w-full max-w-150 mr-20 ml-20 mb-20">
			<enhanced:img
				src="$lib/assets/profile.png"
				alt="An sre with his baby"
				class="w-full h-full object-cover rounded-md"
			/>
		</div>

		<div>
			<p class="text-5xl">Pablo Hendrickx</p>
			<p class="text-2xl">Site Reliability Engineer</p>
			<p>SRE with expertise in data systems, IoT and video streaming. {yearsOfExperience} Years of experience.</p>
		</div>
	</div>
<div id ="banner">
<div class="bg-primary-100 dark:bg-secondary-300 grid h-60 grid-cols-[1fr_auto_auto_auto_auto_auto_auto_auto_1fr] items-center gap-4">
<p></p>
    <p class="text-1g">Achieved ISO-27001</p>
    <span class="vr h-20 border-l-2"></span>
    <p class="text-1g">Erradicated database perf issues</p>
    <span class="vr h-20 border-l-2"></span>
    <p class="text-1g">Achieved 30% infra cost reduction</p>
    <span class="vr h-20 border-l-2"></span>
    <p class="text-1g">Built custom observability for apps</p>
</div>
</div>
<div id="timeline" class="flex items-center min-h-screen justify-center">
<ol class="ml-10 relative border-s border-gray-200 dark:border-gray-700">                  
    {#each timeLineItems as item}
        <TimeLineItem 
            date={item.date}
            employer={item.employer}
            title={item.title}
            notes={item.notes}
        />
    {/each}
</ol>

</div>
<div id="form" class="flex items-center justify-center mb-40">
  <form 
    method="POST"
    class="w-full max-w-lg bg-primary-100 dark:bg-secondary-400 p-8 rounded-lg shadow-md"
  	use:enhance={() => {
		return async ({ update }) => {
      await update({ reset: false });  
		};
	}}
  >
    <label class="form-control w-full mb-6">
      <span class="label-text block mb-2 font-semibold">Your email</span>
      <input
        class="input input-bordered w-full"
        name="sender"
        type="text"
        placeholder="anon@gmail.com"
      />
    </label>
    <label class="form-control w-full mb-6">
      <span class="label-text block mb-2 font-semibold">Message</span>
      <textarea
        class="textarea textarea-bordered w-full mb-4"
        name="message"
        rows="8"
        placeholder="Let's connect :)"
      ></textarea>
    </label>
    <div class="flex justify-center">
      <button type="submit" class="btn preset-filled">Mail</button>
    </div>
    
    {#if form?.success}
        <p in:fade={{ duration: 200 }}>Contact request sent! 🎉</p>
    {/if}
  </form>

</div>
</main>
