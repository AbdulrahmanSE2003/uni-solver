'use client'

import { AnimatePresence } from "framer-motion";
import Header from "@/app/_components/Header";
import Uploader from "@/app/_components/Uploader";
import Result from "@/app/_components/Result";
import {useSolve} from "@/app/_context/SolveCTX";

const Page = () => {
    const {solution} = useSolve()
    return (

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
    );
};

export default Page;