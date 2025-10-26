import * as email from "$lib/server/email.js";
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';


export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    email.sendContactformMail(data.get("sender"), data.get("message"));
    return { success: true };
  },
} satisfies Actions;
