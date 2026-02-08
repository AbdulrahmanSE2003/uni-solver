
import { Edit, File, ShieldCheckIcon } from "lucide-react";


const cards = [
    { icon: <Edit stroke="#155dff" />, heading: 'AI Human-like Writing', paragraph: 'Our advanced engine generates natural phrasing that bypasses basic detection while maintaining your unique academic voice.' },
    { icon: <File stroke="#155dff" />, heading: 'Direct DOCX Export', paragraph: 'Convert your AI-assisted work into professionally formatted Word documents ready for immediate submission to your portal.' },
    {
        icon: <ShieldCheckIcon stroke="#155dff" />, heading: 'Privacy First', paragraph: 'End- to - end encryption for every project.Your data is never shared with third parties or used for training external models.'
    },
]

function CardsSection() {
    return (
        <section className="p-14 py-20 mx-auto flex flex-col justify-center items-center gap-4">
            <h3 className="capitalize font-bold text-5xl text-center">Engineered for excellence</h3>

            <p className="text-gray-500 ">Powerful features designed specifically for modern academic needs.</p>


            {/* card */}
            <div className="card-wrapper grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {cards.map(card => (
                    <div className="bg-white border border-zinc-300 rounded-[40px] p-8 py-10 space-y-6 hover:-translate-y-2 transition-all duration-500 shadow-xl shadow-brand-blue/15 hover:shadow-brand-blue/20">
                        <div className="bg-brand-blue/15 rounded-full p-3 w-fit">
                            {card.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{card.heading}</h3>
                        <p className="text-zinc-600  leading-relaxed">{card.paragraph}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default CardsSection