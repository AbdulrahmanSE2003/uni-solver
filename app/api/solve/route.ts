import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
        }

        // تحويل الملف لـ Base64 عشان جمناي يفهمه (زي ما مكتوب في الدوك)
        const arrayBuffer = await file.arrayBuffer();
        const base64Data = Buffer.from(arrayBuffer).toString("base64");

        // تهيئة جمناي
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

        // استخدم موديل gemini-1.5-flash (تأكد من الاسم ده)
        const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

        const prompt = "You are an expert academic tutor. Please solve the questions in this document clearly and step-by-step.";

        // إرسال الملف مباشرة لجمناي
        const result = await model.generateContent([
            {
                inlineData: {
                    data: base64Data,
                    mimeType: "application/pdf"
                }
            },
            { text: prompt },
        ]);

        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ solution: text });

    } catch (error: any) {
        console.error("❌ Gemini Error:", error);
        return NextResponse.json({
            error: "AI failed to process the document. Check your API Key or Model name."
        }, { status: 500 });
    }
}