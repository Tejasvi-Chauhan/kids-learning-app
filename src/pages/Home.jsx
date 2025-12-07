import SpidermanImg from "../assets/Spiderman.png";
import DoraemonImg from "../assets/Doraemon.png";
// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="space-y-4">
      {/* Header / XP Card */}

      <section className="bg-gradient-to-b from-[#02C86C] to-[#00A95A] rounded-3xl p-4 text-white shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center overflow-hidden">
              <span className="text-2xl">🧒</span>
            </div>
            <div>
              <p className="text-[11px] opacity-80">Good Night</p>
              <h1 className="text-xl font-semibold leading-tight">Lorenzo</h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-sm">
              🌙
            </button>

            <div className="flex items-center gap-1 bg-white/15 px-2 py-1 rounded-full text-[11px]">
              <span>💎</span>
              <span>30</span>
            </div>

            <span className="text-[10px] font-semibold bg-[#FFB84D] text-green-900 px-2 py-1 rounded-full">
              PRO
            </span>
          </div>
        </div>

        <div className="mt-4 bg-white/10 rounded-2xl p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00A95A] flex items-center justify-center text-xs font-semibold">
              L3
            </div>

            <div className="flex-1">
              <div className="flex justify-between text-[10px] mb-1 opacity-90">
                <span>XP PROGRESS</span>
                <span>Next: L4</span>
              </div>
              <div className="w-full h-2 bg-white/25 rounded-full overflow-hidden mb-1">
                <div className="h-full w-[42%] bg-white rounded-full" />
              </div>
              <div className="flex justify-between text-[10px] opacity-90">
                <span>42/100 XP</span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs font-semibold">242 XP</p>
        </div>
      </section>

      {/* Practice with Humans */}
      <section className="mt-3 space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-800">
            Practice with Humans
          </h2>
          <button className="text-xs font-medium text-[#00C46A]">
            Show all →
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-1">
          <div className="min-w-[220px] bg-[#FDF4FF] rounded-3xl p-4 flex flex-col justify-between shadow-sm">
            <div className="text-[11px] font-semibold text-purple-500 mb-1">
              Be first!
            </div>
            <div className="text-sm font-semibold text-gray-900">
              Favorite Animals
            </div>
            <p className="text-[11px] text-gray-600 mt-1">
              Talk about your favorite animals and pets.
            </p>
            <button className="mt-3 w-full bg-[#00C46A] text-white text-xs font-semibold py-2.5 rounded-2xl">
              Join &amp; Start Call
            </button>
          </div>

          {/* side card placeholder */}
          <div className="min-w-[160px] bg-white rounded-3xl shadow-sm" />
        </div>
      </section>

      {/* Practice with AI */}
      <section className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-800">
            Practice with AI
          </h2>
          <button className="text-xs font-medium text-[#00C46A] flex items-center gap-1">
            Show all →
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {/* Doraemon Card */}
          <div
            className="min-w-[160px] h-[180px] bg-[#DFF0FF] rounded-3xl p-4 
        flex flex-col items-center justify-center shadow-sm"
          >
            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow">
              <img
                src={DoraemonImg}
                alt="Doraemon"
                className="w-14 h-14 object-contain"
              />
            </div>
            <p className="mt-3 text-xs font-semibold text-gray-800 text-center">
              Talk with Doraemon
            </p>
          </div>

          {/* Spider Man Card */}
          <div
            className="min-w-[160px] h-[180px] bg-[#FFE4DD] rounded-3xl p-4 
        flex flex-col items-center justify-center shadow-sm"
          >
            <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center shadow">
              <img
                src={SpidermanImg}
                alt="Spider Man"
                className="w-14 h-14 object-contain"
              />
            </div>
            <p className="mt-3 text-xs font-semibold text-gray-800 text-center">
              Talk with Spider Man
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
