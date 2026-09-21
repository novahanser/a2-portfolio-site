# Insight (Nullified): generation evidence

## Actual generation parameters

- Actual seed: **1005113135037086** (API node 307).
- MiniMax H3 FL2VA BF16; euler / simple; 20 base steps; SplitSigmas 6; 2x latent upscale; align 32.
- Base: 672 x 928; generated output: 1344 x 1856, 24 fps, 243 frames, 10.125 seconds.
- H3SigmaRefiner: 1 extra steps; sigma 0.7 to 0; cosine.
- Same image at the first and last frame. Turbo LoRA absent from execution API. BasicGuider does not expose an independent CFG control.
- Native generation export: H.264 / MP4 / yuv420p / CRF 12; metadata enabled; no audio.

## Saved files

- [Executed API](api.json) and [saved UI](ui.json) contain the generation graph and settings. Local computer paths are omitted from the public copies.
- [Original English prompt](prompt.txt) retains the executed prompt.
- Workflow images are offline diagrams with English node labels. The JSON files contain the full graph.

## Displayed video

The displayed MP4 is 2160 × 2982 at 60 fps: 598 frames, 9.966667 seconds, with no audio.

## Artwork source

See the [source and attribution notes](../source-notes.md) for the confirmed original illustrator and supporting references.
