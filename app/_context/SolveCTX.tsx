'use client'

import { createContext, ReactNode, useContext, useState } from "react";

interface UniSolvedContextType {
    file: File | null;
    setFile: (file: File | null) => void;
    loading: boolean;
    student: string;
    setStudent: (student: string) => void;
    id: string;
    setId: (id: string) => void;
    solution: string | null;
    setSolution: (solution: string | null) => void;
    handleSolve: () => void;
}

export const SolveCTX = createContext<UniSolvedContextType | null>(null)

type ContextProps = {
    children: ReactNode;
}


const SolveCtxProvider = ({ children }: ContextProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [solution, setSolution] = useState<string | null>(null);
    const [student, setStudent] = useState('')
    const [id, setId] = useState('')


    const handleSolve = async () => {
        if (!file) return;
        setLoading(true);
        setSolution(null);
        console.log(file)

        const formData = new FormData();
        formData.append("file", file);
        formData.append("studentName", String(student));
        formData.append("studentId", String(id));

        try {
            const res = await fetch("/api/solve", {
                method: "POST",
                body: formData,
            });
            const data = await res.json();

            if (data.solution) {
                setSolution(data.solution);
            } else {
                alert(data.error || "Something went wrong!");
            }
        } catch (error) {
            console.error("Upload error:", error);
            alert("Failed to connect to the server.");
        } finally {
            setLoading(false);
        }
    };


    return (<SolveCTX.Provider value={{
        handleSolve,
        file,
        setFile,
        loading,
        solution,
        setSolution,
        student,
        setStudent,
        id,
        setId,
    }}>{children}</SolveCTX.Provider>)
};

export const useSolve = () => {
    const context = useContext(SolveCTX);
    if (!context) throw new Error("useSolve must be used within a SolveCtxProvider");
    return context;
};

export default SolveCtxProvider;