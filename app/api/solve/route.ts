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
Act as a high-achieving, efficient university student. Your goal is to solve the attached assignment with zero fluff, looking like it was done by a human.

### **STRICT OUTPUT RULES:**

1. **Cover Page**: Start with ONLY these 3 lines:
   Student Name: ${studentName}
   Student ID: ${studentId}
   Subject: [Extract Subject Name Here]

2. **No AI Talk**: Never say "Sure," "I have analyzed," or "Here are the answers." Start solving immediately.

3. **Dynamic Solving Logic**:
   * **True/False**: Write the question text, then add (True) or (False) at the end. Don't explain unless the PDF specifically asks to "justify."
     *Example: 1. The earth is flat. (False)*
   * **MCQs**: Write the question followed by the correct option text only. No need to list all wrong choices.
     *Example: 2. What is 2+2? Answer: 4*
   * **Short Answer/Essay**: Be direct. Use 1-2 punchy sentences. Avoid robotic transitions like "Furthermore" or "In conclusion."
   * **Math/Equations**: Use standard notation. Keep steps minimal but logical.

4. **Human Touch**: 
   * Use natural, concise language. 
   * If a question is ambiguous, solve it based on common sense.
   * Formatting: Use ### for question numbers.

### **TASK**: 
Analyze the document and solve everything following the logic above.
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
