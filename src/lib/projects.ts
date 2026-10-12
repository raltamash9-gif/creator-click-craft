import alexanderAsset from "@/assets/alexander-the-great.png.asset.json";
import snakeIslandAsset from "@/assets/snake-island.png.asset.json";
import bgmiAsset from "@/assets/bgmi-solo-vs-squad.png.asset.json";
import codingAsset from "@/assets/master-coding.png.asset.json";
import radiationAsset from "@/assets/radiation-leak.png.asset.json";
import wolvesAsset from "@/assets/attacked-by-wolves.jpg.asset.json";
import flashAsset from "@/assets/flash-split.jpg.asset.json";
import rickAsset from "@/assets/rick-and-morty.png.asset.json";
import deathNoteAsset from "@/assets/death-note-split.jpg.asset.json";
import celebrityAsset from "@/assets/celebrity-vector.webp.asset.json";
import foosterAsset from "@/assets/fooster-gaming.webp.asset.json";
import gordonRamsayAsset from "@/assets/gordon-ramsay.png.asset.json";
import diabloXpAsset from "@/assets/diablo-xp-buff.png.asset.json";
import diabloSoulsAsset from "@/assets/diablo-forgotten-souls.png.asset.json";
import falloutVaultsAsset from "@/assets/fallout-vaults.png.asset.json";
import nvidiaDownfallAsset from "@/assets/nvidia-downfall.png.asset.json";
import schwererGustavAsset from "@/assets/schwerer-gustav.png.asset.json";
import chatGptAsset from "@/assets/earn-using-chatgpt.webp.asset.json";

export const categories = ["All", "Documentary", "Gaming", "Technology", "Animation"] as const;

export type Channel = {
  name: string;
  category: string;
  note: string;
};

export const channels: Channel[] = [
  { name: "Bearny Explains", category: "Documentary", note: "Long-form explainers" },
  { name: "Hogan Explains", category: "Documentary", note: "Story-driven breakdowns" },
  { name: "Noble 6 Explains", category: "Gaming", note: "Lore & game analysis" },
  { name: "Sci-Fi Theory", category: "Technology", note: "Speculative science" },
  { name: "Daryl Explains", category: "Documentary", note: "Historical narratives" },
  { name: "Renn Media", category: "Documentary", note: "Network channels" },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  channel: string;
  year: string;
  src: string;
  span: "wide" | "regular";
  overview: string;
  challenge: string;
  challengePoints: string[];
  thinking: { heading: string; body: string }[];
  tools: string[];
  layers: { name: string; body: string }[];
  related: string[];
};

const defaultLayers = (subject: string) => [
  {
    name: "Background",
    body: "Base plate and depth established first — the stage everything else sits inside.",
  },
  {
    name: "Environment",
    body: "Supporting scenery, haze and scale cues layered behind the focal point.",
  },
  {
    name: `Main Subject — ${subject}`,
    body: "Cut, cleaned and positioned on the strongest third of the frame.",
  },
  {
    name: "Lighting",
    body: "Directional key light, rim separation and contact shadows painted in.",
  },
  {
    name: "Atmospheric Effects",
    body: "Dust, glow and volumetric depth to bind the composite together.",
  },
  { name: "Typography", body: "Two weights maximum, set where the eye lands after the subject." },
  { name: "Final Polish", body: "Colour grade, sharpening pass and a 120px legibility check." },
];

export const projects: Project[] = [
  {
    slug: "alexander-the-great",
    title: "Alexander the Great",
    category: "Documentary",
    channel: "Portfolio piece",
    year: "2025",
    src: alexanderAsset.url,
    span: "wide",
    overview:
      "A cinematic documentary thumbnail built in an oil-painting style. The assets were generated with AI, then composited and graded so the whole frame reads like a single classical painting rather than a collage.",
    challenge:
      "Painted history frames easily turn muddy — too much detail everywhere and nothing to look at first.",
    challengePoints: [
      "Hold a painterly texture without losing sharpness at small sizes",
      "Give the frame one clear focal point",
      "Keep the title readable over a busy battle scene",
    ],
    thinking: [
      {
        heading: "One commanding gesture",
        body: "The pointing arm draws a diagonal straight to the subject's face, so the eye has a route through the frame.",
      },
      {
        heading: "Oil-paint texture",
        body: "A painted finish separates the thumbnail from stock-photo history content in the same feed.",
      },
      {
        heading: "Warm gold against deep shadow",
        body: "Firelit skin on near-black armour keeps contrast high after compression.",
      },
      {
        heading: "Title in the quiet corner",
        body: "Type sits top-left where the composition is emptiest and the eye lands first.",
      },
    ],
    tools: [
      "Adobe Photoshop",
      "AI-generated assets",
      "Compositing",
      "Colour grading",
      "Typography",
    ],
    layers: defaultLayers("Alexander"),
    related: ["snake-island", "radiation-leak", "master-coding"],
  },
  {
    slug: "prompt-to-profit-chatgpt",
    title: "Prompt to Profit — ChatGPT Cheat Code",
    category: "Technology",
    channel: "Portfolio piece",
    year: "2026",
    src: chatGptAsset.url,
    span: "regular",
    overview:
      "A thumbnail about earning with AI, built to make an invisible idea legible at a glance. Interface assets were generated with ChatGPT, then composited, relit, lettered and graded in Adobe Photoshop so the frame reads as one scene rather than a stack of screenshots.",
    challenge:
      "There is nothing to photograph here — and a real dashboard collapses into noise the moment a thumbnail shrinks to sidebar size.",
    challengePoints: [
      "Turn an abstract promise into one readable scene",
      "Let two UI panels inform without competing with the face",
      "Hold a single palette across every generated asset",
    ],
    thinking: [
      {
        heading: "A centred subject as the anchor",
        body: "The portrait splits the frame in two and gives the eye somewhere to land before either panel is read.",
      },
      {
        heading: "Interfaces as evidence",
        body: "An earnings panel on the left and a project panel on the right do the explaining, so the headline only has to make the claim.",
      },
      {
        heading: "One emerald language",
        body: "Mint, off-white and deep navy are held across every generated panel so nothing reads as a pasted-in screenshot.",
      },
      {
        heading: "Depth from blur",
        body: "Background charts are pushed out of focus while the subject and front panels stay sharp — separation without clutter.",
      },
    ],
    tools: [
      "Adobe Photoshop",
      "ChatGPT-generated UI assets",
      "Photo manipulation",
      "Compositing",
      "Lighting & exposure",
      "Colour grading",
      "Typography",
    ],
    layers: [
      {
        name: "Visual direction",
        body: "A cinematic reference frame set the rules first — bold headline, centred portrait, layered interfaces behind it.",
      },
      {
        name: "Generated UI assets",
        body: "ChatGPT produced the neumorphic dashboards, revenue graphs, progress panels and 3D icons, all kept inside one emerald, mint and navy palette.",
      },
      {
        name: "Composition & hierarchy",
        body: "The subject sits between an earnings dashboard on the left and a project list on the right, with blurred panels pushed behind for depth.",
      },
      {
        name: "Photoshop refinement",
        body: "Subject scale, background blur, exposure and panel brightness were rebalanced by hand so the face stays the brightest thing in the frame.",
      },
      {
        name: "Headline",
        body: "“ChatGPT Is A Cheat Code” set in bold white with light dimensional shading, sized to survive sidebar dimensions.",
      },
      {
        name: "Final polish",
        body: "Clutter trimmed, subject separated from the background, and a small-size legibility pass before export.",
      },
    ],
    related: ["master-coding", "nvidia-downfall-investigation", "celebrity-vector-portraits"],
  },
  {
    slug: "snake-island",
    title: "Snake Island",
    category: "Documentary",
    channel: "Portfolio piece",
    year: "2025",
    src: snakeIslandAsset.url,
    span: "regular",
    overview:
      "A cinematic survival thumbnail in a MrBeast-style visual language: a single person, an extreme situation and an expression you can read instantly.",
    challenge:
      "High-energy formats rely on a face — the environment has to support it, never compete with it.",
    challengePoints: [
      "Sell danger without clutter",
      "Keep the face the brightest point in the frame",
      "Make the jungle read as depth, not noise",
    ],
    thinking: [
      {
        heading: "Emotion first",
        body: "The expression carries the entire hook, so it sits large and centred.",
      },
      {
        heading: "Green on green, split by light",
        body: "A brighter key on the subject lifts him out of a fully green environment.",
      },
      {
        heading: "The threat stays secondary",
        body: "The snake frames the subject instead of stealing the focus.",
      },
    ],
    tools: [
      "Adobe Photoshop",
      "AI-generated assets",
      "Photo manipulation",
      "Lighting",
      "Compositing",
    ],
    layers: defaultLayers("survivor"),
    related: ["alexander-the-great", "radiation-leak", "bgmi-solo-vs-squad"],
  },
  {
    slug: "nvidia-downfall-investigation",
    title: "The Downfall of Nvidia?",
    category: "Technology",
    channel: "Portfolio piece",
    year: "2026",
    src: nvidiaDownfallAsset.url,
    span: "regular",
    overview:
      "A tech-investigation thumbnail where the story is told through a detective's evidence board. The central portrait was generated with AI, then nearly the entire frame — the corkboard, clippings, caution tape, glows and typography — was built and finished by hand in Photoshop.",
    challenge:
      "A corporate-collapse story has no monster to show — the danger has to come from paper, evidence and a single worried face.",
    challengePoints: [
      "Make a headline story readable without showing a product",
      "Build tension with investigative props, not chaos",
      "Keep 95% of the craft in Photoshop, not in generation",
    ],
    thinking: [
      {
        heading: "The evidence board as the story",
        body: "A corkboard with pins, red string and clippings turns a stock-market story into a mystery the viewer wants solved.",
      },
      {
        heading: "One worried witness",
        body: "The wide-eyed face on the right carries the alarm so the board can stay calm and detailed.",
      },
      {
        heading: "Headlines as props",
        body: "Newspaper clippings and a TOP SECRET stamp deliver the premise inside the image — the title only confirms it.",
      },
      {
        heading: "Caution tape as a frame device",
        body: "Diagonal hazard tape corners the composition and gives the collage an editorial, magazine-cover edge.",
      },
    ],
    tools: [
      "Adobe Photoshop",
      "AI-generated portrait",
      "Photo manipulation",
      "Compositing",
      "Glow & lighting FX",
      "Typography",
    ],
    layers: defaultLayers("shocked executive"),
    related: ["master-coding", "celebrity-vector-portraits", "alexander-the-great"],
  },
  {
    slug: "radiation-leak",
    title: "It Escaped",
    category: "Documentary",
    channel: "Portfolio piece",
    year: "2025",
    src: radiationAsset.url,
    span: "regular",
    overview:
      "A cinematic thumbnail in a MrBeast-style direction — a reaction shot, a hazard-lit environment and a two-word hook that finishes the story the image starts.",
    challenge:
      "Reaction thumbnails only work when the viewer instantly understands what is being reacted to.",
    challengePoints: [
      "Show cause and reaction in one frame",
      "Keep the hazard suit readable against a dark set",
      "Place type so it never covers the face",
    ],
    thinking: [
      {
        heading: "Cause on the left, reaction centre",
        body: "Western reading order does the storytelling: the creature, then the scream.",
      },
      {
        heading: "Toxic green versus gold",
        body: "Complementary colour separates the subject from the environment in one move.",
      },
      {
        heading: "Two-word hook",
        body: "Short declarative type in the empty corner adds tension the image alone can't.",
      },
    ],
    tools: ["Adobe Photoshop", "AI-generated assets", "Compositing", "Lighting", "Typography"],
    layers: defaultLayers("hazmat subject"),
    related: ["snake-island", "alexander-the-great", "bgmi-solo-vs-squad"],
  },
  {
    slug: "bgmi-solo-vs-squad",
    title: "BGMI — Solo vs Squad",
    category: "Gaming",
    channel: "Portfolio piece",
    year: "2025",
    src: bgmiAsset.url,
    span: "wide",
    overview:
      "A mobile gaming thumbnail built entirely from in-game BGMI screenshots, cut and arranged in Photoshop into a three-panel split.",
    challenge:
      "Raw gameplay screenshots are flat and low contrast — they need structure to work as a thumbnail.",
    challengePoints: [
      "Turn plain screenshots into a composed frame",
      "Show gameplay and character in one look",
      "Keep the title legible over bright scenery",
    ],
    thinking: [
      {
        heading: "Angled split panels",
        body: "Diagonal dividers add motion and let three moments coexist without feeling stacked.",
      },
      {
        heading: "Character as the anchor",
        body: "The armoured skin on the right gives the frame a subject to land on.",
      },
      {
        heading: "Chrome-blue title",
        body: "A heavy gaming typeface with a hard outline survives a crowded mobile sidebar.",
      },
    ],
    tools: ["Adobe Photoshop", "In-game screenshots", "Compositing", "Typography"],
    layers: defaultLayers("player character"),
    related: ["master-coding", "snake-island", "alexander-the-great"],
  },
  {
    slug: "master-coding",
    title: "Master Coding in 30 Days",
    category: "Technology",
    channel: "Portfolio piece",
    year: "2025",
    src: codingAsset.url,
    span: "regular",
    overview:
      "A tech-education thumbnail using glassmorphism built in Photoshop. Code becomes a visual object rather than something you have to read, and the hierarchy is deliberately strong.",
    challenge:
      "Coding topics usually mean screenshots of an editor — unreadable at thumbnail size.",
    challengePoints: [
      "Represent coding visually, not literally",
      "Build a clear three-line title hierarchy",
      "Keep a dark frame from going flat",
    ],
    thinking: [
      {
        heading: "Glass panel behind the type",
        body: "A frosted plate lifts the headline off the artwork and keeps every word crisp.",
      },
      {
        heading: "Code as light",
        body: "Language logos and UI fragments streaming from the subject read as 'coding' in a glance.",
      },
      {
        heading: "Three type weights, one block",
        body: "Big, small, big gives instant hierarchy and a natural reading rhythm.",
      },
    ],
    tools: ["Adobe Photoshop", "Glassmorphism", "AI-generated assets", "Compositing", "Typography"],
    layers: defaultLayers("subject"),
    related: ["bgmi-solo-vs-squad", "alexander-the-great", "radiation-leak"],
  },
  {
    slug: "attacked-by-wolves",
    title: "Attacked By Wolves",
    category: "Documentary",
    channel: "Portfolio piece",
    year: "2025",
    src: wolvesAsset.url,
    span: "wide",
    overview:
      "A survival thumbnail built the hard way: man, wolves, eagle, snow ridge and treeline were sourced and arranged by hand in Photoshop, then pushed through an AI enhancement pass so the whole composite reads as one photographed moment.",
    challenge:
      "A hand-built collage of separate elements always looks like a collage until the light, grain and colour of every layer agree.",
    challengePoints: [
      "Kill the hard cut-out halos around every animal",
      "Match snow light and colour temperature across seven sources",
      "Keep the outstretched hand as the entry point of the frame",
    ],
    thinking: [
      {
        heading: "Hand first, face second",
        body: "The reaching hand breaks the frame edge and pulls the viewer in before the expression sells the panic.",
      },
      {
        heading: "Predators on both flanks",
        body: "Wolves left and right close the composition inward, so there is no visual escape route.",
      },
      {
        heading: "Cold storm grade",
        body: "A desaturated blue-grey wash unifies every layer and makes the blood and skin tones the only warmth.",
      },
      {
        heading: "Depth through weather",
        body: "Falling snow and haze between planes turn a flat stack of cut-outs into real distance.",
      },
    ],
    tools: [
      "Adobe Photoshop",
      "Photo manipulation",
      "AI enhancement",
      "Compositing",
      "Colour grading",
    ],
    layers: defaultLayers("survivor"),
    related: ["snake-island", "alexander-the-great", "radiation-leak"],
  },
  {
    slug: "flash-speed-force-flashpoint",
    title: "Speed Force vs Flashpoint",
    category: "Animation",
    channel: "Portfolio piece",
    year: "2025",
    src: flashAsset.url,
    span: "regular",
    overview:
      "A two-panel comparison thumbnail drawn in a wojak-style cartoon language, generated from a tightly written prompt and then finished in Photoshop with hand-set typography and a colour-correction pass.",
    challenge:
      "Comparison thumbnails fail when both halves look the same — the split has to carry meaning at a glance.",
    challengePoints: [
      "Make two versions of one character instantly distinguishable",
      "Keep both titles readable at sidebar size",
      "Hold a consistent illustration style across both panels",
    ],
    thinking: [
      {
        heading: "Warm versus toxic",
        body: "A red-lit lab against a sickly green ruin separates the timelines before a single word is read.",
      },
      {
        heading: "Eyes tell the story",
        body: "Calm dark eyes on the left, red glow on the right — the cheapest possible tension cue.",
      },
      {
        heading: "Type as the divider",
        body: "Two heavy outlined words sit at the top edge so the split line stays clean and the faces stay uncovered.",
      },
    ],
    tools: ["AI generation", "Prompt design", "Adobe Photoshop", "Typography", "Colour correction"],
    layers: defaultLayers("dual Flash panels"),
    related: ["master-coding", "bgmi-solo-vs-squad", "alexander-the-great"],
  },
  {
    slug: "rick-and-morty-entire-story",
    title: "The Entire Story of Rick and Morty",
    category: "Animation",
    channel: "Portfolio piece",
    year: "2025",
    src: rickAsset.url,
    span: "regular",
    overview:
      "A story-recap thumbnail for an animated franchise. Character assets were sourced and part-generated with AI, then cut, re-lit and arranged into a single ensemble line-up inside Photoshop.",
    challenge:
      "Recap videos need to promise the whole story in one frame without turning into a crowded sticker sheet.",
    challengePoints: [
      "Fit five characters without losing the lead",
      "Keep flat cartoon art from looking pasted on",
      "Hold the title clear of every face",
    ],
    thinking: [
      {
        heading: "Depth by overlap",
        body: "Characters staggered in scale and layered inward build a stage rather than a row.",
      },
      {
        heading: "Cyan rim on red",
        body: "A cool rim light against the red backdrop separates each cut-out and gives the flat art dimension.",
      },
      {
        heading: "Two-word promise",
        body: "\u2018Entire Story.\u2019 in the empty top band tells the viewer exactly what they get.",
      },
    ],
    tools: [
      "Adobe Photoshop",
      "AI-generated assets",
      "Cut-out compositing",
      "Rim lighting",
      "Typography",
    ],
    layers: defaultLayers("character line-up"),
    related: ["flash-speed-force-flashpoint", "death-note-split", "celebrity-vector-portraits"],
  },
  {
    slug: "death-note-split",
    title: "Light Yagami vs Misa Amane",
    category: "Animation",
    channel: "Portfolio piece",
    year: "2025",
    src: deathNoteAsset.url,
    span: "regular",
    overview:
      "A second wojak-style split thumbnail, this time pairing two anime characters. Both halves came from a tightly controlled prompt, then got hand-set typography and a colour-correction pass in Photoshop.",
    challenge:
      "Two illustrated portraits side by side blur together unless each half owns its own world.",
    challengePoints: [
      "Give each side a distinct environment and palette",
      "Keep the wojak expression consistent across both",
      "Set names large enough for a mobile sidebar",
    ],
    thinking: [
      {
        heading: "Cold desk, warm bedroom",
        body: "A blue-grey study against a rose-lit gothic room splits the frame emotionally before you read a word.",
      },
      {
        heading: "Matching grins",
        body: "The identical wojak smile on both sides is the joke \u2014 the styling has to stay strict for it to land.",
      },
      {
        heading: "Names as the header",
        body: "Heavy outlined type across the top keeps the divider clean and both faces uncovered.",
      },
    ],
    tools: ["AI generation", "Prompt design", "Adobe Photoshop", "Typography", "Colour correction"],
    layers: defaultLayers("dual character panels"),
    related: [
      "flash-speed-force-flashpoint",
      "rick-and-morty-entire-story",
      "celebrity-vector-portraits",
    ],
  },
  {
    slug: "celebrity-vector-portraits",
    title: "Creators Who Changed YouTube",
    category: "Documentary",
    channel: "Portfolio piece",
    year: "2025",
    src: celebrityAsset.url,
    span: "regular",
    overview:
      "Three creator portraits arranged in Photoshop, then converted into a clean vector-illustration finish through a prompt pass and retouched back to a consistent style.",
    challenge:
      "Three faces of equal importance still need a hierarchy, or the frame reads as a contact sheet.",
    challengePoints: [
      "Make three portraits feel like one artwork",
      "Keep skin tones consistent after stylisation",
      "Separate faces from a near-black backdrop",
    ],
    thinking: [
      {
        heading: "Centre hero, flanking support",
        body: "The laughing centre portrait sits larger and further forward so the eye has an obvious first stop.",
      },
      {
        heading: "Vector finish",
        body: "Flat shading with crisp edges survives heavy compression far better than photographic detail.",
      },
      {
        heading: "Red gradient stage",
        body: "A dark red vignette pushes every face forward and keeps the frame from going flat.",
      },
    ],
    tools: [
      "Adobe Photoshop",
      "Prompt-based stylisation",
      "Vector illustration",
      "Retouching",
      "Colour grading",
    ],
    layers: defaultLayers("portrait trio"),
    related: ["rick-and-morty-entire-story", "alexander-the-great", "death-note-split"],
  },
  {
    slug: "fooster-gaming-survival",
    title: "Survival Island \u2014 Cinematic Gaming",
    category: "Gaming",
    channel: "Portfolio piece",
    year: "2025",
    src: foosterAsset.url,
    span: "regular",
    overview:
      "A cinematic gaming thumbnail built entirely from gameplay screenshots. Frames were captured from a long-form survival video, composited into a single scene in Photoshop, then blended with an AI pass so the seams disappear.",
    challenge:
      "Screenshots from different moments have different light, grain and lens \u2014 stacking them usually looks obvious.",
    challengePoints: [
      "Merge multiple captures into one believable shot",
      "Build a first-person point of view that pulls the viewer in",
      "Add stakes without any text",
    ],
    thinking: [
      {
        heading: "First-person foreground",
        body: "The raised axe in the corner puts the viewer inside the frame instead of watching it.",
      },
      {
        heading: "Threat in the near ground",
        body: "The cobra between camera and player creates the tension the gameplay alone doesn\u2019t show.",
      },
      {
        heading: "One light direction",
        body: "Every layer regraded to the same afternoon sun so the composite reads as a single capture.",
      },
    ],
    tools: [
      "Gameplay screenshots",
      "Adobe Photoshop",
      "Compositing",
      "AI blending",
      "Colour grading",
    ],
    layers: defaultLayers("survival scene"),
    related: ["bgmi-solo-vs-squad", "snake-island", "attacked-by-wolves"],
  },
  {
    slug: "gordon-ramsay-lied-cheated",
    title: "Gordon Ramsay Exposed Them",
    category: "Documentary",
    channel: "Portfolio piece",
    year: "2026",
    src: gordonRamsayAsset.url,
    span: "wide",
    overview:
      "A documentary-style thumbnail built around one furious centre of gravity. Every asset was generated with AI, then composited, relit and graded in Photoshop until three separate faces read as a single explosive moment — the instant a contestant is caught lying or cheating.",
    challenge:
      "Three faces competing for attention can split the frame apart — the concept only works if the accusations and the reaction land as one idea.",
    challengePoints: [
      "Unify three separately generated portraits into one scene",
      "Make the accusation readable in under a second",
      "Keep red as the emotion without it swallowing skin tones",
    ],
    thinking: [
      {
        heading: "One eruption, two accusations",
        body: "The central reaction sits largest and forward while LIE and CHEAT frame the flanks — cause on the edges, consequence in the middle.",
      },
      {
        heading: "Red as pressure",
        body: "A rim-lit crimson atmosphere pushes heat behind every face so the frame feels like a kitchen about to blow.",
      },
      {
        heading: "Type as evidence labels",
        body: "Bold boxed words above the side faces read like case files — the viewer understands the premise before reading a title.",
      },
      {
        heading: "Single light logic",
        body: "Every generated asset was regraded to the same key light so the composite stops looking like three images.",
      },
    ],
    tools: [
      "Adobe Photoshop",
      "AI-generated assets",
      "Compositing",
      "Colour grading",
      "Typography",
    ],
    layers: defaultLayers("central reaction"),
    related: ["attacked-by-wolves", "celebrity-vector-portraits", "radiation-leak"],
  },
  {
    slug: "diablo-secret-xp-buff",
    title: "The Secret XP Buff You Need",
    category: "Gaming",
    channel: "Portfolio piece",
    year: "2026",
    src: diabloXpAsset.url,
    span: "regular",
    overview:
      "A Diablo 4 guide thumbnail built mostly by hand in Photoshop — the sorceress, the golden well and the XP coin bursts were composited from game captures, with a light AI assist for a few supporting assets.",
    challenge:
      "Guide thumbnails live or die on urgency — the reward has to look unmissable without the frame turning into gold soup.",
    challengePoints: [
      "Make one glowing object the undisputed focal point",
      "Balance heavy golden light against a dark dungeon",
      "Sell 'secret' through type without crowding the art",
    ],
    thinking: [
      {
        heading: "Light as the reward",
        body: "A single vertical column of gold draws the eye straight from the title to the XP coins.",
      },
      {
        heading: "Character on the edge",
        body: "The sorceress grips the frame from the right, so she guards the reward instead of blocking it.",
      },
      {
        heading: "Brush-style lettering",
        body: "Rough three-colour type matches the game's grit and stays readable over dark artwork.",
      },
    ],
    tools: ["Adobe Photoshop", "Game captures", "AI-assisted assets", "Compositing", "Colour grading"],
    layers: defaultLayers("sorceress"),
    related: ["diablo-forgotten-souls", "bgmi-solo-vs-squad", "fooster-gaming-survival"],
  },
  {
    slug: "diablo-forgotten-souls",
    title: "Max Out Forgotten Souls, Fast",
    category: "Gaming",
    channel: "Portfolio piece",
    year: "2026",
    src: diabloSoulsAsset.url,
    span: "wide",
    overview:
      "A Diablo 4 farming-guide thumbnail where the character's outstretched arm literally presents the UI panel. Built primarily in Photoshop from game captures, with AI used sparingly to generate a handful of assets.",
    challenge:
      "UI screenshots are flat and boring — the panel had to feel like a physical object inside the scene, not a pasted screenshot.",
    challengePoints: [
      "Integrate a game menu into a painted scene",
      "Keep the number '9,999+' dominant at any size",
      "Ground the character's hand so the gesture reads",
    ],
    thinking: [
      {
        heading: "The hand as a shelf",
        body: "The gauntlet stretches under the panel so the UI feels held, not overlaid.",
      },
      {
        heading: "One number, huge",
        body: "The count is the promise of the video, so it gets the largest type on the frame.",
      },
      {
        heading: "Fire-lit palette",
        body: "Ember reds and yellows unify the background, the boss and the panel frame into one hot scene.",
      },
    ],
    tools: ["Adobe Photoshop", "Game captures", "AI-assisted assets", "Compositing", "Typography"],
    layers: defaultLayers("armoured boss"),
    related: ["diablo-secret-xp-buff", "bgmi-solo-vs-squad", "fooster-gaming-survival"],
  },
  {
    slug: "every-fallout-vault-explained",
    title: "Every Fallout Vault, Explained",
    category: "Gaming",
    channel: "Portfolio piece",
    year: "2026",
    src: falloutVaultsAsset.url,
    span: "regular",
    overview:
      "A Fallout lore-explainer thumbnail built from screenshots of the game's actual vault doors. Each door was enhanced with AI to recover detail, then cut, arranged and finished with hand-set typography in Photoshop.",
    challenge:
      "Three heavy metal objects side by side can read as a flat wall of grey — the frame needs colour, hierarchy and playfulness to survive a bright feed.",
    challengePoints: [
      "Make three vault doors read as a ranking, not a texture",
      "Enhance game screenshots without losing the original geometry",
      "Keep retro-futurist typography legible at sidebar size",
    ],
    thinking: [
      {
        heading: "Numbers as characters",
        body: "31, 88 and 13 sit centre-stage on each wheel, turning industrial doors into three named characters the viewer can compare.",
      },
      {
        heading: "Cream field, hard contrast",
        body: "A warm parchment backdrop pushes the worn steel forward and borrows Fallout's vintage-poster language.",
      },
      {
        heading: "Overlapping depth",
        body: "The middle door sits largest and forward with the flanks tucked behind, so three objects stack into one focal pyramid.",
      },
      {
        heading: "Red-and-white title block",
        body: "Heavy slab type with hard shadows matches the franchise's Americana style and stays readable over the bright field.",
      },
    ],
    tools: [
      "Game screenshots",
      "AI enhancement",
      "Adobe Photoshop",
      "Compositing",
      "Typography",
    ],
    layers: defaultLayers("vault door trio"),
    related: ["bgmi-solo-vs-squad", "diablo-secret-xp-buff", "fooster-gaming-survival"],
  },
  {
    slug: "hitler-secret-weapons-ww2",
    title: "Secret Weapons of World War 2",
    category: "Documentary",
    channel: "Portfolio piece",
    year: "2026",
    src: schwererGustavAsset.url,
    span: "wide",
    overview:
      "A history-documentary thumbnail built around a burned blueprint. The Schwerer Gustav railway gun was recreated with AI-generated assets, then composed, aged and lit almost entirely inside Photoshop so the schematic reads like a declassified wartime document.",
    challenge:
      "A 1,350-ton weapon has no photos that pop — the design had to sell its scale through the language of secret paperwork instead.",
    challengePoints: [
      "Communicate the size of a weapon most viewers have never seen",
      "Keep generated assets faithful to the real machine",
      "Make a document-styled frame stop the scroll",
    ],
    thinking: [
      {
        heading: "The blueprint as the hero",
        body: "A technical drawing fills the frame like a declassified file, letting scale come from the annotations and rails rather than a photo.",
      },
      {
        heading: "Burn and smoke for urgency",
        body: "Charred edges, drifting smoke and a warm firelight edge make a static document feel like it was just pulled from a fire.",
      },
      {
        heading: "The stare as the anchor",
        body: "A grim period-accurate portrait on the left gives the abstract drawing a human weight and an emotional entry point.",
      },
      {
        heading: "CONFIDENTIAL as the hook",
        body: "A red rubber stamp at the bottom right promises forbidden knowledge — the cheapest, strongest curiosity trigger the format allows.",
      },
    ],
    tools: [
      "Adobe Photoshop",
      "AI-generated assets",
      "Paper ageing & compositing",
      "Lighting FX",
      "Typography",
    ],
    layers: defaultLayers("railway gun schematic"),
    related: ["alexander-the-great", "attacked-by-wolves", "radiation-leak"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
