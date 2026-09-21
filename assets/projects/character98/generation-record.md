# Character 98 / generation evidence

Recorded 20 September 2026. The webpage displays the later keyed, cleaned, black-background delivery. It is not the native H3 generation export.

## Actual generation parameters

- Actual seed: **1005113135037086** (API node 307).
- MiniMax H3 FL2VA BF16; euler / simple; 20 base steps; SplitSigmas 6; 2x latent upscale; align 32.
- Base: 672 x 928; generated output: 1344 x 1856, 24 fps, 243 frames, 10.125 seconds.
- H3SigmaRefiner: 1 extra steps; sigma 0.7 to 0; cosine.
- Same image at the first and last frame. Turbo LoRA absent from execution API. BasicGuider does not expose an independent CFG control.
- Native generation export: H.264 / MP4 / yuv420p / CRF 12; metadata enabled; no audio.

## Preserved evidence

- Source png: `98 (realesrgan-x4plus-anime x2) 3to4.png_98 (realesrgan-x4plus-anime x2) 3to4.png_1005113135037086_green_00001.png`
- `api.json` and `ui.json` retain original embedded or supplied records. They have not been relabelled or normalized. Node titles may contain legacy values.
- `prompt.txt` is the verbatim value of execution API node 355.
- `workflow*.png` / `.webp` are English, grouped **offline workflow diagrams**, not screenshots from a running ComfyUI session. IDs map to the original nodes. They simplify the graph for reading; JSON files contain the full graph.

## Later production stage

CorridorKey green-screen removal, then local purple-cloak cleanup (spill_luma 0.36). The final transparent master is 2160 x 2982 at 60 fps. Linear-light black compositing and 10 Mbps H.264 delivery followed.

Delivered media: 2160 x 2982 / 60 fps / 598 frames / 9.966667 s. No audio; black background baked into MP4.

## Limits and interpretation

The saved standalone v5 UI seed differs from the actual output. The embedded API is the parameter authority. The original prompt is preserved without editorial changes.

The diagrams cover H3 generation only. The later keying, cleanup, ProRes alpha master and black-composite steps are not included in these UI/API downloads. Original illustration authorship and permission details remain to be confirmed. No new generation or reprocessing was run when preparing these website evidence assets.
