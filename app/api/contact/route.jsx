export async function POST(req) {
    try {
        const data = await req.json();
        const { firstname, lastname, email, phone, message } = data;

        if (!firstname || !lastname || !email || !message) {
            return Response.json(
                { success: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        const name = `${firstname} ${lastname}`;

        const response = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    service_id: process.env.SERVICE_ID,
                    template_id: process.env.TEMPLATE_ID,
                    user_id: process.env.PUBLIC_KEY,
                    template_params: {
                        name,
                        email,
                        phone,
                        message,
                    },
                }),
            }
        );

        if (!response.ok) throw new Error("EmailJS request failed");

        return Response.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("❌ Error in /api/contact:", error);
        return Response.json(
            { success: false, error: "Server error, please try again later" },
            { status: 500 }
        );
    }
}
