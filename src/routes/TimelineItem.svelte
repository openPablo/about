<script>
	let { date, employer, title, notes } = $props();
</script>


<li class="mb-10 ms-4">
    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
	<h3 class="text-base font-semibold text-gray-500 dark:text-white">{employer}</h3>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
    {#each notes as note}
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">{note}</p>
    {/each}
</li>