import thumbDoc from "@/assets/thumb-doc.jpg";
import thumbGaming from "@/assets/thumb-gaming.jpg";
import thumbTech from "@/assets/thumb-tech.jpg";
import thumbHistory from "@/assets/thumb-history.jpg";
import thumbEdu from "@/assets/thumb-edu.jpg";
import thumbFaceless from "@/assets/thumb-faceless.jpg";
import thumbAi from "@/assets/thumb-ai.jpg";
import thumbScifi from "@/assets/thumb-scifi.jpg";
import thumbPersonal from "@/assets/thumb-personal.jpg";

export const categories = [
  "All",
  "Documentary",
  "Gaming",
  "History",
  "Technology",
  "Education",
  "AI",
  "Renn Media",
  "Personal Projects",
] as const;

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
  { name: "Daryl Explains", category: "History", note: "Historical narratives" },
  { name: "Renn Media", category: "Renn Media", note: "Network channels" },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  channel: string;
  year: string;
  src: string;
  span: "wide" | "tall" | "regular";
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
    slug: "the-lost-empire",
    title: "The Lost Empire",
    category: "Documentary",
    channel: "Bearny Explains",
    year: "2025",
    src: thumbDoc,
    span: "wide",
    overview:
      "A long-form documentary channel for viewers who watch history and investigation content end to end. The thumbnail had to promise scale and mystery without giving the story away.",
    challenge:
      "The channel's uploads were visually busy — three competing ideas inside a 320px frame.",
    challengePoints: [
      "Simplify a complex topic to one readable idea",
      "Increase curiosity without clickbait",
      "Build a repeatable series look",
    ],
    thinking: [
      { heading: "One subject, one emotion", body: "A single silhouetted figure gives scale and lets the viewer project themselves into the scene." },
      { heading: "Light from one side", body: "Directional key light carves the subject out of the background so it survives compression and dark mode." },
      { heading: "Warm against cool", body: "A warm horizon behind a cool foreground creates instant separation at thumbnail size." },
      { heading: "Type on the quiet third", body: "Three words placed where the composition is emptiest — the eye reads subject, then promise." },
    ],
    tools: ["Adobe Photoshop", "Image generation", "Photo manipulation", "Lighting", "Compositing", "Typography"],
    layers: defaultLayers("silhouette"),
    related: ["romes-last-day", "the-1b-secret", "the-signal"],
  },
  {
    slug: "final-run",
    title: "Final Run",
    category: "Gaming",
    channel: "Noble 6 Explains",
    year: "2025",
    src: thumbGaming,
    span: "regular",
    overview:
      "A gaming lore channel whose audience browses on mobile in crowded sidebars. The thumbnail needed high energy that still reads at 120 pixels wide.",
    challenge: "Gaming sidebars are saturated — everything is loud, so loud alone stops working.",
    challengePoints: ["Show conflict instantly", "Improve small-size readability", "Avoid generic gaming noise"],
    thinking: [
      { heading: "Contrast over saturation", body: "Value contrast, not colour volume, is what survives a shrunken sidebar." },
      { heading: "Motion implied, not drawn", body: "Diagonal composition suggests movement without motion-blur clutter." },
      { heading: "Face-forward tension", body: "The expression carries the stakes faster than any word can." },
    ],
    tools: ["Adobe Photoshop", "Photo manipulation", "Lighting", "Compositing", "Typography"],
    layers: defaultLayers("character"),
    related: ["the-lost-empire", "the-signal", "how-memory-works"],
  },
  {
    slug: "romes-last-day",
    title: "Rome's Last Day",
    category: "History",
    channel: "Daryl Explains",
    year: "2024",
    src: thumbHistory,
    span: "tall",
    overview:
      "History storytelling for an audience that values accuracy. The frame had to feel cinematic and period-true rather than stock-dramatic.",
    challenge: "Historical topics look interchangeable in a feed unless one moment is dramatised.",
    challengePoints: ["Highlight emotion", "Make the title visually obvious", "Give the series a signature grade"],
    thinking: [
      { heading: "A moment, not a montage", body: "One decisive second is more compelling than a collage of eras." },
      { heading: "Ember and ash palette", body: "Warm firelight against cold stone anchors the period and the mood at once." },
      { heading: "Editorial typography", body: "Condensed caps borrowed from print give authority the audience already trusts." },
    ],
    tools: ["Adobe Photoshop", "AI-assisted workflow", "Photo manipulation", "Lighting", "Compositing", "Typography"],
    layers: defaultLayers("figure"),
    related: ["the-lost-empire", "the-signal", "the-1b-secret"],
  },
  {
    slug: "its-over",
    title: "It's Over",
    category: "Technology",
    channel: "Sci-Fi Theory",
    year: "2025",
    src: thumbTech,
    span: "regular",
    overview:
      "Tech commentary for an audience that skims quickly. The product had to stay legible while the hook carried the emotion.",
    challenge: "Product shots are clean but cold — clarity without a hook does not earn a click.",
    challengePoints: ["Keep product clarity", "Add a curiosity hook", "Stay on brand with the channel"],
    thinking: [
      { heading: "Hero the object", body: "The product occupies a clean third so the shape is recognisable instantly." },
      { heading: "Studio rim light", body: "A single cool rim separates hardware from a near-black backdrop." },
      { heading: "Two-word hook", body: "Short, declarative type creates the tension that the product alone can't." },
    ],
    tools: ["Adobe Photoshop", "Lighting", "Compositing", "Typography"],
    layers: defaultLayers("product"),
    related: ["the-machine-that-thinks", "the-signal", "final-run"],
  },
  {
    slug: "how-memory-works",
    title: "How Memory Works",
    category: "Education",
    channel: "Hogan Explains",
    year: "2024",
    src: thumbEdu,
    span: "regular",
    overview:
      "Educational explainers aimed at curious general viewers. The concept had to become visual before it became verbal.",
    challenge: "Abstract subjects have no obvious image — the concept must be invented.",
    challengePoints: ["Simplify a complex topic", "Make an abstract idea concrete", "Keep it friendly, not clinical"],
    thinking: [
      { heading: "A metaphor you can see", body: "One visual analogy replaces a paragraph of explanation." },
      { heading: "Soft, warm light", body: "Approachable lighting signals learning rather than alarm." },
      { heading: "Left-weighted type", body: "Type sits where Western eyes scan first, subject balances the right." },
    ],
    tools: ["Adobe Photoshop", "Image generation", "Compositing", "Typography"],
    layers: defaultLayers("concept object"),
    related: ["the-1b-secret", "the-machine-that-thinks", "romes-last-day"],
  },
  {
    slug: "the-1b-secret",
    title: "The $1B Secret",
    category: "Documentary",
    channel: "Renn Media",
    year: "2025",
    src: thumbFaceless,
    span: "wide",
    overview:
      "A faceless finance format inside the Renn Media network. Without a presenter, the concept has to carry the entire click.",
    challenge: "Faceless formats lose the human-face advantage that most thumbnails lean on.",
    challengePoints: ["Create presence without identity", "Increase curiosity", "Protect retention — no false promises"],
    thinking: [
      { heading: "Back-facing figure", body: "Presence without a face keeps the format consistent across every upload." },
      { heading: "One gold anchor", body: "A single warm accent tells the eye exactly where to land first." },
      { heading: "Two type weights", body: "Restraint keeps the frame premium and mobile-legible." },
    ],
    tools: ["Adobe Photoshop", "AI-assisted workflow", "Photo manipulation", "Compositing", "Typography"],
    layers: defaultLayers("back-facing figure"),
    related: ["the-lost-empire", "how-memory-works", "the-signal"],
  },
  {
    slug: "the-machine-that-thinks",
    title: "The Machine That Thinks",
    category: "AI",
    channel: "Sci-Fi Theory",
    year: "2025",
    src: thumbAi,
    span: "regular",
    overview:
      "An AI explainer for a technically literate audience. The visual had to feel engineered rather than illustrated.",
    challenge: "AI topics attract the same glowing-brain cliché on every channel.",
    challengePoints: ["Avoid the visual cliché", "Show intelligence as structure", "Keep the frame calm and premium"],
    thinking: [
      { heading: "Structure reads as intellect", body: "A lattice of connections implies computation without a literal brain." },
      { heading: "Cool core, dark stage", body: "A single emissive subject on near-black maximises contrast at any size." },
      { heading: "Centred symmetry", body: "Symmetry signals control — appropriate for a channel about systems." },
    ],
    tools: ["Adobe Photoshop", "AI-assisted workflow", "Image generation", "Lighting", "Compositing"],
    layers: defaultLayers("neural core"),
    related: ["its-over", "the-signal", "final-run"],
  },
  {
    slug: "the-signal",
    title: "The Signal",
    category: "Renn Media",
    channel: "Renn Media",
    year: "2025",
    src: thumbScifi,
    span: "tall",
    overview:
      "A speculative science series inside the Renn Media network. Scale and awe had to be readable in under a second.",
    challenge: "Cosmic topics get abstract fast and abstract does not convert.",
    challengePoints: ["Give scale a human reference", "Build awe, not confusion", "Unify the series look"],
    thinking: [
      { heading: "Human for scale", body: "A tiny figure turns an abstract object into something enormous." },
      { heading: "Teal and ember", body: "Complementary grade separates foreground and background in one move." },
      { heading: "Centre light beam", body: "The brightest value sits dead centre so the eye has one destination." },
    ],
    tools: ["Adobe Photoshop", "Image generation", "Lighting", "Compositing", "Typography"],
    layers: defaultLayers("astronaut"),
    related: ["the-machine-that-thinks", "romes-last-day", "the-lost-empire"],
  },
  {
    slug: "above-the-noise",
    title: "Above the Noise",
    category: "Personal Projects",
    channel: "Personal",
    year: "2024",
    src: thumbPersonal,
    span: "regular",
    overview:
      "A self-initiated piece used to test grading and atmospheric compositing that later shipped into client work.",
    challenge: "Personal work exists to push technique further than a client brief allows.",
    challengePoints: ["Explore atmospheric depth", "Test a warm/cool grade", "Practise minimal composition"],
    thinking: [
      { heading: "Negative space as drama", body: "Emptiness around the subject makes the subject feel isolated and important." },
      { heading: "Sunset as backlight", body: "Backlighting produces the cleanest silhouette possible with zero cutout artefacts." },
      { heading: "No typography", body: "Removing type forces the composition alone to hold attention." },
    ],
    tools: ["Adobe Photoshop", "Image generation", "Lighting", "Compositing"],
    layers: defaultLayers("lone figure"),
    related: ["the-signal", "romes-last-day", "the-lost-empire"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
