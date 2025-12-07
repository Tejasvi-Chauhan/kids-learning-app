// src/pages/CustomQuiz.jsx
import { useNavigate } from "react-router-dom";

export default function CustomQuiz() {
  const navigate = useNavigate();

  const topics = [
    "My Best Friend",
    "Cricket Basics",
    "Solar System",
    "Healthy Habits",
    "Animals & Birds",
    "School Picnic",
  ];

  return (
    <div className="space-y-4">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm text-gray-500"
      >
        <span className="text-lg">&larr;</span>
        <span>Back</span>
      </button>

      {/* Top card area with soft green bg */}
      <section className="bg-[#F3FFF8] rounded-3xl p-3">
        <div className="bg-white rounded-3xl shadow-md p-4 space-y-2">
          <p className="text-[11px] font-semibold tracking-[0.12em] text-green-500">
            LEARN TAB
          </p>
          <h1 className="text-xl font-semibold text-gray-900">
            Craft a custom quiz
          </h1>
          <p className="text-xs text-gray-500">
            Pick a topic, choose difficulty, and we will build four fun
            questions instantly.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center gap-1 text-[10px] text-green-700 bg-[#E6FFF4] px-2 py-1 rounded-full">
              ⚡ AI Powered
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              4 Questions
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
              Instant play
            </span>
          </div>
        </div>
      </section>

      {/* STEP 1 card */}
      <section className="bg-white rounded-3xl shadow-md p-4 space-y-3">
        <p className="text-[11px] font-semibold text-gray-500">STEP 1</p>
        <p className="text-sm font-semibold text-gray-900">Choose a topic</p>

        <div className="relative">
          <input
            placeholder='e.g. "My school day" or "Planets in space"'
            className="w-full text-xs border border-gray-200 rounded-2xl px-3 py-3 placeholder:text-gray-400"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-gray-400">
            0/60
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-1">
          {topics.map((t) => (
            <button
              key={t}
              className="px-3 py-1.5 rounded-full bg-gray-100 text-xs text-gray-700"
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* STEP 2 card */}
      <section className="bg-white rounded-3xl shadow-md p-4 space-y-3">
        <p className="text-[11px] font-semibold text-gray-500">STEP 2</p>
        <p className="text-sm font-semibold text-gray-900">
          Pick a challenge level
        </p>

        <div className="space-y-2">
          {/* Easy */}
          <div className="rounded-2xl border border-gray-200 bg-[#F9FFFB] p-3 text-xs flex justify-between">
            <div>
              <p className="text-sm font-semibold">Easy</p>
              <p className="text-[11px] text-gray-500">
                Short sentences &amp; gentle vocabulary.
              </p>
            </div>
            <span className="text-lg">💡</span>
          </div>

          {/* Medium (selected) */}
          <div className="rounded-2xl border border-green-400 bg-[#E6FFF4] p-3 text-xs flex justify-between">
            <div>
              <p className="text-sm font-semibold">Medium</p>
              <p className="text-[11px] text-gray-500">
                Everyday situations with detail.
              </p>
              <span className="inline-block mt-1 text-[10px] text-green-700">
                Selected
              </span>
            </div>
            <span className="text-lg">✨</span>
          </div>

          {/* Hard */}
          <div className="rounded-2xl border border-gray-200 bg-white p-3 text-xs flex justify-between">
            <div>
              <p className="text-sm font-semibold">Hard</p>
              <p className="text-[11px] text-gray-500">
                Longer thinking and tricky choices.
              </p>
            </div>
            <span className="text-lg">🎯</span>
          </div>
        </div>
        </section>
        {/* STEP 3 card */}
        <section className="bg-white rounded-3xl shadow-md p-4 space-y-3">
        {/* what you'll get box */}
        <div className="mt-2 rounded-2xl bg-[#00C46A] text-white p-3 text-xs">
          <p className="font-semibold mb-1">What you'll get</p>  
          <p className="text-sm font-semibold mb-1">
            Friendly quiz with instant feedback
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Bite-sized explanations for every answer.</li>
            <li>Tone automatically matches the learner profile.</li>
            <li>Encouraging messages to keep kids motivated.</li>
            <li>Fun emojis to make learning enjoyable.</li>
            <li>Instant scoring to track progress.</li>
            <li>Adaptive difficulty based on performance.</li>
            <li>Hints available for challenging questions.</li>
          </ul>
        </div>
      </section>

      {/* Generate button */}
      <button className="mt-1 w-full bg-gray-200 text-gray-600 text-sm font-semibold py-3 rounded-2xl shadow-sm">
        Generate Quiz
      </button>
    </div>
  );
}
