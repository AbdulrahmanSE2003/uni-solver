import { BadgeCheckIcon } from 'lucide-react'

function Logo() {
    return (
        <div className="bg-brand-blue/10 rounded-full py-2 px-5 border border-brand-blue/50 flex justify-center items-center gap-2">
            <BadgeCheckIcon fill="#155dfc" stroke="#efefef" />
            <span className="uppercase text-sm text-brand-blue font-bold">your trusted AI in your career </span>
        </div>
    )
}

export default Logo