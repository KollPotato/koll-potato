import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: "public",
			assets: "public",
			fallback: undefined,
			precompress: false
		}),
		outDir: "dist"
	}
};

export default config;
