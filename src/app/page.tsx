import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
     <h1 className="font-bold text-5xl">Hello Tailwind</h1>
     <h2 className="font-bold flex items-center gap-3 text-5xl before:w-0.5 before:h-8 before:bg-sky-500 before:flex">Hello Tailwind</h2>
     <p>Hello Tailwind</p>
    </div>
  )
}
