import * as v from 'valibot';
import { error, redirect } from '@sveltejs/kit';
import { query, form } from '$app/server';
import * as db from '$lib/server/database';
import * as auth from '$lib/server/auth';

export const getPosts = query(async () => { /* ... */ });

export const getPost = query(v.string(), async (slug) => { /* ... */ });

export const createPost = form(
	v.object({
		email: v.pipe(v.string(), v.nonEmpty()),
		content:v.pipe(v.string(), v.nonEmpty())
	}),
	async ({ title, content }) => {
		// Check the user is logged in
		const user = await auth.getUser();
		if (!user) error(401, 'Unauthorized');

		const slug = title.toLowerCase().replace(/ /g, '-');

		// Insert into the database
		await db.sql`
			INSERT INTO post (slug, title, content)
			VALUES (${slug}, ${title}, ${content})
		`;

		// Redirect to the newly created page
		redirect(303, `/blog/${slug}`);
	}
);