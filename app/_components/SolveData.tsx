'use client'
import { useState } from "react";
import DynamicButton from "./DynamicButton";
import { Send } from "lucide-react";
import Uploader from "./Uploader";
import { useSolve } from "../_context/SolveCTX";

type solveDataProps = {
    name?: string;
}

export const SolveData = ({ name = '' }: solveDataProps) => {
    const { student, setStudent, id, setId, handleSolve } = useSolve()
    return (
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
            {/* Inputs Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-2">Student Name</label>
                    <input
                        type="text"
                        placeholder="Ahmed Ali"
                        value={name || student}
                        onChange={(e) => setStudent(e.target.value)}
                        className="w-full p-4 bg-slate-100 border border-brand-blue/30 rounded-2xl focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-2">Student ID</label>
                    <input
                        type="text"
                        placeholder="2620500"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="w-full p-4 bg-slate-100 border border-brand-blue/30 rounded-2xl focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                    />
                </div>
            </div>

            {/* Upload Section */}
            <Uploader />
        </section>
    )
}
