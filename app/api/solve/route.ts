import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "sonner";
import { auth } from "@/auth";

export async function POST(req: NextRequest) {
  const session = await auth();
  const isOwner = session?.user?.email === "abdulrahman.saad2303@gmail.com";

  // }
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const userKey = formData.get("userApiKey");

    const FINAL_KEY = userKey || (isOwner ? process.env.GEMINI_API_KEY : null);

    if (!FINAL_KEY) {
      return NextResponse.json(
        { error: "API Key is required. Please add it in settings." },
        { status: 401 },
      );
    }

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const studentName = (formData.get("studentName") as string) || "N/A";
    const studentId = (formData.get("studentId") as string) || "N/A";

    const arrayBuffer = await file.arrayBuffer();
    const base64Data = Buffer.from(arrayBuffer).toString("base64");

    const genAI = new GoogleGenerativeAI(String(FINAL_KEY));
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = `
Act as a top-tier student. Solve the questions in the attached document following these rules:

1. **Cover Page Info**: At the very beginning, provide exactly these three lines:
   Student Name: ${studentName}
   Student ID: ${studentId}
   Subject: [Extract Subject Name Here]

2. **No Intro**: After those 3 lines, start with the first question immediately. Do not say "Here are the solutions" or "I have analyzed the document".
3. **Style**: Concise, direct, and human-like. Use 1-2 sentences for explanations.
4. **Formatting**: Use Markdown headings (###) for questions.

Please analyze the attached PDF and solve it.
`;

    const result = await model.generateContent([
      {
        inlineData: {
          data: base64Data,
          mimeType: "application/pdf",
        },
      },
      { text: prompt },
    ]);

    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ solution: text });
  } catch (error) {
    console.error("❌ Gemini Error:", error);
    return NextResponse.json(
      {
        error:
          "The AI engine is currently experiencing high traffic. Please wait a moment and try again.",
      },
      { status: 401 },
    );
  }
}
