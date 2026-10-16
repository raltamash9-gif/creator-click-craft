const descriptions: Record<string, string> = {
  "stop-hiring-wrong-shopify-agency": "A man beside smartphone agency comparison cards, notification panels and a rising revenue chart",
  "alexander-the-great": "Alexander commanding an army in a firelit, oil-painting-style battle scene",
  "prompt-to-profit-chatgpt": "A smiling man between emerald AI earnings dashboards and project-management panels",
  "snake-island": "A cinematic island survival composition featuring snakes",
  "nvidia-downfall-investigation": "A celebrity portrait surrounded by investigation clippings, evidence-board elements and Nvidia branding",
  "radiation-leak": "A cinematic radiation-leak scene with the headline It Escaped",
  "bgmi-solo-vs-squad": "A BGMI solo-versus-squad gaming combat composition",
  "master-coding": "A portrait surrounded by glowing code and technology logos with a Master Coding headline",
  "attacked-by-wolves": "A frightened man escaping wolves in snowy mountains with an eagle overhead",
  "flash-speed-force-flashpoint": "Split illustrated faces comparing Speed Force and Flashpoint",
  "rick-and-morty-entire-story": "Rick and Morty characters in an animated story-explainer composition",
  "death-note-split": "Split illustrated portraits of Light Yagami and Misa Amane from Death Note",
  "celebrity-vector-portraits": "Three stylized vector portraits of YouTube creators",
  "fooster-gaming-survival": "A cinematic survival-game scene inspired by Fooster-style gaming thumbnails",
  "gordon-ramsay-lied-cheated": "Gordon Ramsay in a dramatic documentary composition with an exposed-them headline",
  "diablo-secret-xp-buff": "Diablo gameplay imagery with a bold Secret XP Buff headline",
  "diablo-forgotten-souls": "Diablo gaming artwork with a Forgotten Soul Count 9,999+ headline",
  "every-fallout-vault-explained": "A lineup of Fallout vault doors based on actual in-game vault screenshots",
  "hitler-secret-weapons-ww2": "The giant Schwerer Gustav weapon in a World War Two documentary composition",
};

export function thumbnailAlt(project: { slug: string; title: string; category: string }) {
  return `${descriptions[project.slug] ?? project.title} — ${project.category} YouTube thumbnail: ${project.title}.`;
}

export function videoDetails(project: { videoUrl?: string; viewCount?: number }) {
  if (!project.videoUrl) return null;
  try {
    const url = new URL(project.videoUrl);
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    return { url: url.href, views: typeof project.viewCount === "number" && project.viewCount >= 0 ? project.viewCount : undefined };
  } catch { return null; }
}