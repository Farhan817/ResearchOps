import { http, HttpResponse, delay } from "msw";

export const authHandlers = [
  http.post("/api/login", async ({ request }) => {
    await delay(1000);

    const body = (await request.json()) as {
      email: string;
      password: string;
    };
    console.log(body, "body");
    const isValid =
      body.email === "admin@researchos.com" && body.password === "Admin@123";

    if (!isValid) {
      return HttpResponse.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        {
          status: 200,
        },
      );
    }

    return HttpResponse.json(
      {
        success: true,
        message: "Login successful!",
        user: {
          id: 1,
          name: "Research Admin",
          email: body.email,
        },
      },
      {
        status: 200,
      },
    );
  }),
];
