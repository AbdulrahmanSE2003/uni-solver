import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import PDFParser from "pdf2json";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get("file") as File;
        if (!file) return NextResponse.json({ error: "No file!" }, { status: 400 });

        const buffer = Buffer.from(await file.arrayBuffer());

        // تحويل الـ PDF لنص باستخدام وعد (Promise)
        const extractedText = await new Promise<string>((resolve, reject) => {
            const pdfParser = new PDFParser(null, 1); // 1 يعني extract text only
            pdfParser.on("pdfParser_dataError", (errData) => reject(errData.parserError));
            pdfParser.on("pdfParser_dataReady", () => {
                // @ts-ignore
                resolve(pdfParser.getRawTextContent());
            });
            pdfParser.parseBuffer(buffer);
        });

        // ربط Gemini
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `You are a professional tutor. Solve these questions clearly:\n${extractedText}`;
        const result = await model.generateContent(prompt);

        return NextResponse.json({ solution: result.response.text() });
    } catch (error: any) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Failed to read PDF or call AI" }, { status: 500 });
    }
}