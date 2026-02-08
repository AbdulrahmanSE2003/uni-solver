'use client'

import { AnimatePresence } from "framer-motion";
import Header from "@/app/_components/Header";
import Uploader from "@/app/_components/Uploader";
import Result from "@/app/_components/Result";
import {useSolve} from "@/app/_context/SolveCTX";

export default function UniSolved() {
    const {solution} = useSolve()

    return (
        <main className="min-h-screen bg-[#f8fafc] text-slate-900 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <Header/>

                {/* Upload Section */}
                <Uploader/>

                {/* Results Section */}
                <AnimatePresence>
                    {solution && (
                        <Result sol={solution}/>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
}