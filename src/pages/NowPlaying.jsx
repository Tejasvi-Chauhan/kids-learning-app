import FRNImg from "../assets/FRN.png";
// src/pages/NowPlaying.jsx
export default function NowPlaying() {
  return (
    <div className="space-y-4">
      <header className="flex items-center justify-between">
        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
          ˅
        </button>

        <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-400">
          NOW PLAYING
        </p>

        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-sm">
            📄
          </button>

          <button className="relative w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-sm">
            ✅
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-400 text-[9px] font-semibold text-white flex items-center justify-center">
              7
            </span>
          </button>
        </div>
      </header>

      <section className="bg-[#E8FFF4] rounded-3xl p-4 space-y-4 shadow-sm">
        <div className="bg-white rounded-3xl p-2 shadow-sm">
          <div className="rounded-3xl border-[3px] border-[#00C46A] overflow-hidden">
            <img
              src={FRNImg}
              alt="Friendship and Courage"
              className="w-full h-72 object-cover"
            />
          
          </div>
        </div>

        <div className="px-1 flex items-start justify-between gap-2">
          <div>
            <h1 className="text-base font-semibold text-gray-900">
              The Melody of Friendship
            </h1>
            <p className="mt-1 text-xs text-gray-500 max-w-xs">
              A heartwarming story about friendship and courage.
            </p>
          </div>
          <button className="mt-1 text-lg text-gray-400">♡</button>
        </div>

        <button className="mt-1 w-full bg-[#00C46A] text-white text-sm font-semibold py-3 rounded-2xl flex items-center justify-between px-4 shadow">
          <span>Test Your Understanding</span>
          <span className="text-xs bg-white/15 px-3 py-1 rounded-full border border-white/40">
            7 Questions
          </span>
        </button>
      </section>

      <section className="space-y-3 pt-2">
        <div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[18%] bg-[#00C46A]" />
          </div>
          <div className="flex justify-between text-[11px] text-gray-500 mt-1">
            <span>0:00</span>
            <span>2:18</span>
          </div>
        </div>

        {/* audio controls */}
        <div className="flex items-center px-4 text-gray-500 mt-2">
          <div className="flex flex-1 items-center gap-4 text-xl">
            <button className="text-lg">🔈</button>
            <button>↺</button>
            <button>⏮️</button>
          </div>

          <button className="w-16 h-16 mx-2 rounded-full bg-[#00C46A] text-white flex items-center justify-center text-3xl shadow-md">
            ▶
          </button>

          <div className="flex flex-1 items-center justify-end gap-4 text-xl">
            <button>⏭️</button>
            <button>🔁</button>
          </div>
        </div>
      </section>
    </div>
  );
}
