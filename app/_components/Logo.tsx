import { Sparkles } from "lucide-react"


function Logo() {
    return (
        <div className='flex justify-center items-center gap-2'>
            <div className='bg-brand-blue rounded-lg shadow-lg p-2'>
                <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className='font-bold text-base tracking-tight text-brand-text'>UniSolver</span>
        </div>
    )
}

export default Logo