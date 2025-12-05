<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	// Image detail page
</script>

<main>
	<h1>Image: {data.image}</h1>
	<a href="/dashboard">Back to Dashboard</a>
</main>
