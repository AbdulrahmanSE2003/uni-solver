import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="flex justify-between items-center bg-brand-bg p-8 px-12">
            <Logo />
            <p className="text-zinc-600 capitalize text-sm"> &copy; {new Date().getFullYear()} UniSolver &mdash; All Rights reserved for {" "}
                <a className="hover:text-brand-text transition-colors duration-300 underline underline-offset-2" href="https://mnmlst-nine.vercel.app/" target="_blank">Mnmlst</a>
            </p>
        </footer>
    )
}
