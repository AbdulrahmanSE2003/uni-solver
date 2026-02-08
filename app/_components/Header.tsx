import React from 'react';
import { Sparkles } from "lucide-react";
import { motion } from 'framer-motion'

function Header() {
    return (
        <header className="text-center mb-12">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-2xl mb-4 shadow-lg shadow-blue-200"
            >
                <Sparkles className="text-white w-8 h-8" />
            </motion.div>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                Uni<span className="text-blue-600">Solver</span>
            </h1>
            <p className="text-slate-500 mt-2 text-lg">Upload your PDF and let AI handle the rest.</p>
        </header>
    );
}

export default Header;