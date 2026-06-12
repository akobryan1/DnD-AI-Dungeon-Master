# D&D AI Dungeon Master

An AI-powered interactive web application that serves as a full-featured virtual Dungeon Master for Dungeons & Dragons 5th Edition campaigns. Built as a browser-based tool with an immersive dark-fantasy UI, it includes a 3D dice roller, an AI chat interface, and comprehensive D&D 5e rule reference data.

> **Special Thanks & Worldbuilding Credit:** The fictional world of **Al'mundi**, used as a campaign setting within this tool, was created by [AI Realm](https://airealm.com/). The rich lore, regions, cities, and cultures of Al'mundi — including the Forest of Allanar, the city of Æressari, the Khigvorda Mountains, and many others — are their original creation. This project would not be the same without their worldbuilding contributions.

## Key Features

### 🎲 3D Dice Roller
- Interactive 3D dice (d4, d6, d8, d10, d12, d20, d100) rendered with Three.js
- Each die has its own dedicated 3D scene with realistic lighting and physics-based spinning animation
- Supports complex dice expressions with modifiers (e.g., `2d20 + 5`)
- Roll results are automatically inserted into the AI chat input

### 🤖 AI-Powered Dungeon Master Chat
- Conversational AI interface that acts as your Dungeon Master
- Context-aware chat with toggleable context chips for Characters, Quests, and NPCs
- Session management with campaign tracking
- Typing indicators and polished message feed

### 📜 Complete D&D 5e Reference Data
- **Races & Subraces:** All core races (Dwarf, Elf, Halfling, Human, Dragonborn, Gnome, Half-Elf, Half-Orc, Tiefling) with full subrace traits, ability scores, and flavor descriptions
- **Classes & Subclasses:** All 13 core classes with subclass options, hit dice, proficiencies, spellcasting info
- **Spells Database:** Cantrips through 6th-level spells with full descriptions, components, and class filters
- **Equipment:** Complete weapons table, armor table, and equipment packs
- **Backgrounds:** All 13 official backgrounds with features
- **Monsters & Combat:** D&D 5e monster rules, stat block reference, and combat tracker
- **Subclass Features:** Battle Master maneuvers, Eldritch Invocations, Metamagic options, Domain/Oath spell lists

### 🧭 Campaign Management
- Campaign modal for loading and managing campaigns
- Character sheet management
- Quest tracker with progress tracking
- NPC directory with search and add/edit functionality
- Campaign summary view

### ⚔️ Combat Tracker
- Integrated combat encounter management tool
- Track initiative, hit points, and status effects

### 🎨 Immersive Dark Fantasy UI
- Custom-designed sidebar with collapsible navigation
- Gothic-inspired aesthetic with gold accents and rune motifs
- Cinzel and Inter typography for an authentic fantasy feel
- Subtle noise textures and ambient design details

## Usage

1. **Start the server** by running `start_server.bat` or using the npm script:
   ```
   npm start
   ```
2. Open your browser to `http://localhost:3000`
3. Click **Open Campaign** to load or create a campaign
4. Use the sidebar to navigate Character Sheet, Quest Tracker, NPC Directory, and Combat Tracker
5. Use the dice widget or 3D dice roller for rolls
6. Chat with the AI Dungeon Master using the main interface

## Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript
- **3D Rendering:** Three.js (via CDN)
- **Backend:** Simple HTTP server via `http-server`
- **Fonts:** Google Fonts (Cinzel, Inter)
- **Dependencies:** None beyond the dev server

## Project Structure

```
e:\DnD AI\
├── index.html              # Main application shell with sidebar, chat, and modals
├── main_page.css           # Complete dark-fantasy themed stylesheet
├── main_page.js            # Core application logic, D&D 5e data structures, AI chat
├── dice_roller_3d.js       # 3D dice roller using Three.js
├── package.json            # NPM configuration with http-server
├── start_server.bat        # Windows batch file to launch the server
├── _check_syntax.py        # Utility to validate bracket matching in JS
├── _append_code.py         # Simple utility script
├── README.md               # This file
│
├── AI_Realm_Worldbuilding.md    # Al'mundi campaign world lore by AI Realm
├── TCoE spells and classes.md   # Tasha's Cauldron of Everything reference
├── dnd_extracted_reference.md    # Extracted D&D 5e SRD reference
├── armor.md                      # Armor reference table
├── monsters.md                   # Monster rules and stat block reference
│
└── dice model/                   # 3D model assets for dice
    ├── license.txt
    ├── scene.bin
    ├── scene.gltf
    ├── scene_embedded.gltf
    └── textures/
```

## Credits

- **Worldbuilding — Al'mundi:** [AI Realm](https://github.com/akobryan1) for creating the original campaign world of Al'mundi, including its regions, cities, cultures, and lore
- **D&D 5e Content:** All game mechanics and reference data are based on the Dungeons & Dragons 5th Edition System Reference Document (SRD)
- **3D Rendering:** Three.js library
