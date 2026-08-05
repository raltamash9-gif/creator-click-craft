import alexanderAsset from "@/assets/alexander-the-great.png.asset.json";
import snakeIslandAsset from "@/assets/snake-island.png.asset.json";
import bgmiAsset from "@/assets/bgmi-solo-vs-squad.png.asset.json";
import codingAsset from "@/assets/master-coding.png.asset.json";
import radiationAsset from "@/assets/radiation-leak.png.asset.json";

export const categories = ["All", "Documentary", "Gaming", "Technology"] as const;

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
  { name: "Background", body: "Base plate and depth established first — the stage everything else sits inside." },
  { name: "Environment", body: "Supporting scenery, haze and scale cues layered behind the focal point." },
  { name: `Main Subject — ${subject}`, body: "Cut, cleaned and positioned on the strongest third of the frame." },
  { name: "Lighting", body: "Directional key light, rim separation and contact shadows painted in." },
  { name: "Atmospheric Effects", body: "Dust, glow and volumetric depth to bind the composite together." },
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
      { heading: "One commanding gesture", body: "The pointing arm draws a diagonal straight to the subject's face, so the eye has a route through the frame." },
      { heading: "Oil-paint texture", body: "A painted finish separates the thumbnail from stock-photo history content in the same feed." },
      { heading: "Warm gold against deep shadow", body: "Firelit skin on near-black armour keeps contrast high after compression." },
      { heading: "Title in the quiet corner", body: "Type sits top-left where the composition is emptiest and the eye lands first." },
    ],
    tools: ["Adobe Photoshop", "AI-generated assets", "Compositing", "Colour grading", "Typography"],
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
    challenge: "High-energy formats rely on a face — the environment has to support it, never compete with it.",
    challengePoints: [
      "Sell danger without clutter",
      "Keep the face the brightest point in the frame",
      "Make the jungle read as depth, not noise",
    ],
    thinking: [
      { heading: "Emotion first", body: "The expression carries the entire hook, so it sits large and centred." },
      { heading: "Green on green, split by light", body: "A brighter key on the subject lifts him out of a fully green environment." },
      { heading: "The threat stays secondary", body: "The snake frames the subject instead of stealing the focus." },
    ],
    tools: ["Adobe Photoshop", "AI-generated assets", "Photo manipulation", "Lighting", "Compositing"],
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
    challenge: "Reaction thumbnails only work when the viewer instantly understands what is being reacted to.",
    challengePoints: [
      "Show cause and reaction in one frame",
      "Keep the hazard suit readable against a dark set",
      "Place type so it never covers the face",
    ],
    thinking: [
      { heading: "Cause on the left, reaction centre", body: "Western reading order does the storytelling: the creature, then the scream." },
      { heading: "Toxic green versus gold", body: "Complementary colour separates the subject from the environment in one move." },
      { heading: "Two-word hook", body: "Short declarative type in the empty corner adds tension the image alone can't." },
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
    challenge: "Raw gameplay screenshots are flat and low contrast — they need structure to work as a thumbnail.",
    challengePoints: [
      "Turn plain screenshots into a composed frame",
      "Show gameplay and character in one look",
      "Keep the title legible over bright scenery",
    ],
    thinking: [
      { heading: "Angled split panels", body: "Diagonal dividers add motion and let three moments coexist without feeling stacked." },
      { heading: "Character as the anchor", body: "The armoured skin on the right gives the frame a subject to land on." },
      { heading: "Chrome-blue title", body: "A heavy gaming typeface with a hard outline survives a crowded mobile sidebar." },
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
    challenge: "Coding topics usually mean screenshots of an editor — unreadable at thumbnail size.",
    challengePoints: [
      "Represent coding visually, not literally",
      "Build a clear three-line title hierarchy",
      "Keep a dark frame from going flat",
    ],
    thinking: [
      { heading: "Glass panel behind the type", body: "A frosted plate lifts the headline off the artwork and keeps every word crisp." },
      { heading: "Code as light", body: "Language logos and UI fragments streaming from the subject read as 'coding' in a glance." },
      { heading: "Three type weights, one block", body: "Big, small, big gives instant hierarchy and a natural reading rhythm." },
    ],
    tools: ["Adobe Photoshop", "Glassmorphism", "AI-generated assets", "Compositing", "Typography"],
    layers: defaultLayers("subject"),
    related: ["bgmi-solo-vs-squad", "alexander-the-great", "radiation-leak"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
