<script context="module">
	export const prerender = true;
	export async function load({ fetch }) {
		const url = '/blog.json';
		const res = await fetch(url);
		if (res.ok) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import Thumbnail from '$lib/thumbnail.svelte';
	import BlogBanner from '$lib/blog-banner.svelte';
	export let posts;
	
</script>

<div class="container">
	<div class="banner">
		<BlogBanner post={posts[0]} />
	</div>
	<div class="grid">
		{#each posts as { slug, title, summary, thumbnail, tags }}
			<Thumbnail
				title={title}
				summary={summary}
				link={slug}
				tags={tags}
				thumbnail={thumbnail}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
    @import '../variables.scss';
	.banner {
		width: 100%;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-width: 1240px;
		margin: 0px;
		padding: 0px get-vw(100px);
		@media screen and (min-width: 1440px) {
			padding: 0px;
			margin: 0px auto;
		}
	}
	.grid {
		padding-top: 70px;
		padding-bottom: 90px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 50px;
		width: 100%;
		@media screen and (max-width: $bp) {
			grid-template-columns: 1fr;
		}
	}
</style>
