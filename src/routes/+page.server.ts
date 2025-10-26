import * as email from "$lib/server/email.js";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    email.sendContactformMail(data.get("sender"), data.get("message"));
    email.sendConfirmationMail(data.get("sender"), data.get("message"));
  },
};
