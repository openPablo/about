<script lang="ts">
  const workingStartDate = "2018-02-01"
  let yearsOfExperience = new Date().getYear() - new Date(workingStartDate).getYear()
</script>

<main>
  
	<div id="facecard" class="flex flex-col sm:flex-row items-center justify-center min-h-screen">
		<div class="w-full max-w-150 mr-20 ml-20 mb-20">
			<enhanced:img
				src="$lib/assets/profile.png"
				alt="profile picture of an sre with his baby"
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
    <p class="text-1g">Solved database performance issues</p>
    <span class="vr h-20 border-l-2"></span>
    <p class="text-1g">Achieved 30% infra cost reduction</p>
    <span class="vr h-20 border-l-2"></span>
    <p class="text-1g">Implemented Observability</p>
</div>
</div>
<div id="timeline" class="flex items-center min-h-screen justify-center">
<ol class="ml-10 relative border-s border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Aug 2024+</time>
		<h3 class="text-base font-semibold text-gray-500 dark:text-white">Atlas Copco, Belgium</h3>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Site Reliability Engineer SmartLink</h3>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">SmartLink connects 350k+ heavy duty air compressors to an app which allows customers to see enriched information and proactively service their machines.</p>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">Led the SRE team, driving critical objectives, mentoring junior engineers, and prioritizing high-impact work.</p>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Rolled out structured postmortems, streamlined incident management and response, trained on-call engineers.</p>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">Spearheaded ISO 27001 certification: led audit interviews, developed/tested the disaster recovery plan, gathered compliance evidence, and established user role and secure development policies.</p>
		<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Implemented OpenTelemetry and monitoring tool to enhance application performance monitoring.</p>
	</li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2022</time>
		<h3 class="text-base font-semibold text-gray-500 dark:text-white">DPG Media, Belgium</h3>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Site Reliability Engineer, Streaming Area</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">SRE for streaming platforms streamz.be and vtmgo.be which have over a million monthly users.</p>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Incident response and management.</p>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Led AWS and Akamai cost-saving initiatives, achieving a 30% reduction for my teams.</p>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Created a custom Terraform provider in Go for internal APIs.</p>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Built and managed an observability stack which was used by 10+ dev teams.</p>
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2021</time>
		<h3 class="text-base font-semibold text-gray-500 dark:text-white">Nubera, Belgium</h3>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">DevOps Engineer Consultant, Keytrade bank </h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Created a self-service platform using the GitLab ecosystem (CI/CD, AWS, Terraform modules)</p>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Maintained Kubernetes clusters, Helm charts,infra-as-code, CI/CD.</p>
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Feb 2018</time>
		<h3 class="text-base font-semibold text-gray-500 dark:text-white">Cronos groep, Belgium</h3>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">PostgreSQL DBA</h3>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">Created high-available on-premise PostgreSQL setups.</p>
		<p class="text-base font-normal text-gray-500 dark:text-gray-400">Oracle to PostgreSQL migrations to enable massive cost savings.</p>
    </li>
</ol>

</div>
<div id="form" class="flex items-center justify-center mb-40">
  <form method="POST" class="w-full max-w-lg bg-primary-100 dark:bg-secondary-400 p-8 rounded-lg shadow-md">
    <label class="form-control w-full mb-6">
      <span class="label-text block mb-2 font-semibold">Your email</span>
      <input
        class="input input-bordered w-full"
        name="email"
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
  </form>
</div>
</main>
