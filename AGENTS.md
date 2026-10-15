<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Shared content reveals must latch on first viewport entry and animate to permanent full opacity; do not map reading text opacity to scroll progress, so content stays readable after scrolling away and back.
- Homepage section decorations live in isolated negative-z-index pseudo-elements; the shared blueprint hook batches pointer-variable updates with requestAnimationFrame and never updates React state, preserving artwork and scroll performance.
- Homepage outer section rhythm is controlled by a shared responsive CSS token scoped below the hero; retain component-level heading/content margins so spacing adjustments never alter internal layouts or case-study pages.
