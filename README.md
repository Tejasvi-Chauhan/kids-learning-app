# Kids English Learning UI – Frontend Assignment

A responsive React + Tailwind CSS implementation of three screens from a kids English learning app:

- **Home / Dashboard**
- **Now Playing (Audio Story Player)**
- **Craft a Custom Quiz (Learn tab)**

The goal of this project was to match the provided UI screenshots as closely as possible, with clean component structure and mobile-first layout.

---

## 🚀 Tech Stack

- **React** (Vite)
- **React Router DOM**
- **Tailwind CSS**
- JavaScript (ES6+)

---

## 🧩 Screens Implemented

1. **Home Screen**
   - Profile / XP header card with level, progress and PRO badge
   - Main action shortcuts (Video, Peer Calls, Stories, AI Calls)
   - Audio stories horizontal carousel
   - “Practice with Humans” and “Practice with AI” sections
   - Bottom navigation bar

2. **Now Playing – Audio Story Player**
   - Header with “NOW PLAYING” label and action icons
   - Story artwork card with border and rounded corners
   - Title + description (“The Melody of Friendship”)
   - “Test Your Understanding – 7 Questions” CTA
   - Progress bar with time labels
   - Audio control bar with centered Play button

3. **Craft a Custom Quiz – Learn Tab**
   - Learn header card with “Craft a custom quiz”
   - Step 1: Choose a topic (input + preset topic chips)
   - Step 2: Pick a challenge level (Easy / Medium / Hard cards)
   - “Friendly quiz with instant feedback” info card
   - Generate Quiz button (non-functional / UI only)

---

## 🛠 How to Run the Project
    npm run dev
### 1. Clone the repository


git clone <https://github.com/Tejasvi-Chauhan/kids-learning-app>
cd kids-english-ui

## 🧠 Assumptions I Made

- This assignment focuses on **UI implementation only**, not backend logic.
- The audio story player does not include real audio functionality; progress bar and controls are UI placeholders.
- Icons (moon, gem, back arrow, actions) are recreated using emoji or simple SVGs because the original icon pack was not provided.
- Story images and AI character images are placeholder assets.
- The layout is designed **mobile-first**, with a fixed max-width mobile frame (`max-w-sm`) to match the provided screenshots.
- React Router is used for screen navigation even though the actual app would likely use state management or deeper routing.
- Horizontal scrolling carousels (Stories, Practice with Humans/AI) use simple overflow scroll because complex slider libraries were not required.
- Quiz generation button and inputs are UI-only and do not perform real logic.
- All spacing, shadows, and card styles are matched visually from screenshots as closely as possible without exact Figma specs.
       

