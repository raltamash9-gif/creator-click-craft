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
import twdMistakesAsset from "@/assets/twd-mistakes.jpg.asset.json";
import twdCommunitiesAsset from "@/assets/twd-communities.jpg.asset.json";

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
    title: "They Lied. They Cheated.",
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
    slug: "walking-dead-biggest-mistakes",
    title: "The Biggest Mistake in Every Season",
    category: "Animation",
    channel: "Portfolio piece",
    year: "2026",
    src: twdMistakesAsset.url,
    span: "regular",
    overview:
      "A comic-book illustration thumbnail in a circular grid. Each season's portrait was generated as a separate piece of artwork, then colour-corrected and composited in Photoshop so all eight circles feel printed from the same ink.",
    challenge:
      "Eight different illustrated characters, generated independently, will never match by default — the grid fails if one circle looks imported.",
    challengePoints: [
      "Match line weight and palette across eight separate generations",
      "Keep a 4×2 grid scannable at sidebar size",
      "Give every season a distinct mood inside one style",
    ],
    thinking: [
      {
        heading: "Circles as comic panels",
        body: "Thick-ringed medallions borrow the language of graphic-novel covers and let eight ideas sit in one frame without chaos.",
      },
      {
        heading: "One grade, eight scenes",
        body: "A shared warm-paper tone and unified black point pull every portrait into the same world.",
      },
      {
        heading: "Hand-set season labels",
        body: "Loose marker-style type under each circle keeps the illustrated energy instead of fighting it with corporate type.",
      },
    ],
    tools: [
      "AI generation",
      "Prompt design",
      "Adobe Photoshop",
      "Colour correction",
      "Compositing",
    ],
    layers: defaultLayers("circular portrait grid"),
    related: ["walking-dead-communities-ranked", "death-note-split", "rick-and-morty-entire-story"],
  },
  {
    slug: "walking-dead-communities-ranked",
    title: "Every Community, Ranked by Collapse",
    category: "Animation",
    channel: "Portfolio piece",
    year: "2026",
    src: twdCommunitiesAsset.url,
    span: "regular",
    overview:
      "A companion circular-grid thumbnail in the same comic-book system. Eight locations were each generated as standalone establishing shots, then corrected and composited in Photoshop so architecture, skies and ink all sit in one consistent style.",
    challenge:
      "Places are harder to rank visually than faces — each circle has to be instantly recognisable as a different settlement.",
    challengePoints: [
      "Make eight locations distinct at a glance",
      "Hold the same illustration style as the season-mistakes piece",
      "Keep long settlement names legible under small circles",
    ],
    thinking: [
      {
        heading: "Establishing shots, not objects",
        body: "Each circle frames the location like a comic panel's wide shot, so the viewer reads a place, not a building.",
      },
      {
        heading: "Consistent horizon logic",
        body: "Shared sky tone and ink density make eight separately generated scenes feel drawn by one hand.",
      },
      {
        heading: "Labels as captions",
        body: "Hand-drawn type beneath each medallion turns the grid into a ranking the viewer can scan in seconds.",
      },
    ],
    tools: [
      "AI generation",
      "Prompt design",
      "Adobe Photoshop",
      "Colour correction",
      "Compositing",
    ],
    layers: defaultLayers("location grid"),
    related: ["walking-dead-biggest-mistakes", "flash-speed-force-flashpoint", "celebrity-vector-portraits"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
