# Mimu / generation evidence

Recorded 20 September 2026. The webpage displays the later keyed, cleaned, black-background delivery. It is not the native H3 generation export.

## Actual generation parameters

- Actual seed: **603730895876546** (API node 307).
- MiniMax H3 FL2VA BF16; euler / simple; 20 base steps; SplitSigmas 6; 2x latent upscale; align 32.
- Base: 672 x 896; generated output: 1344 x 1792, 24 fps, 243 frames, 10.125 seconds.
- H3SigmaRefiner: 1 extra steps; sigma 0.7 to 0; cosine.
- Same image at the first and last frame. Turbo LoRA absent from execution API. BasicGuider does not expose an independent CFG control.
- Native generation export: H.264 / MP4 / yuv420p / CRF 12; metadata enabled; no audio.

## Preserved evidence

- Source api: `ミィム_00006_实际执行_API.json`
- Source ui: `ミィム_00006_成片内嵌_UI.json`
- `api.json` and `ui.json` retain original embedded or supplied records. They have not been relabelled or normalized. Node titles may contain legacy values.
- `prompt.txt` is the verbatim value of execution API node 355.
- `workflow*.png` / `.webp` are English, grouped **offline workflow diagrams**, not screenshots from a running ComfyUI session. IDs map to the original nodes. They simplify the graph for reading; JSON files contain the full graph.

## Later production stage

The later 2160 x 2880, 240-frame input was keyed with CorridorKey, followed by mild global green-spill cleanup. The transparent master was composited over black in linear light for 10 Mbps H.264 delivery.

Delivered media: 2160 x 2880 / 24 fps / 240 frames / 10 s. No audio; black background baked into MP4.

## Limits and interpretation

The filename seed197875471725214 is a legacy label. The actual execution seed is 603730895876546. The UI and API supplied in the handoff were preserved byte-for-byte.

The diagrams cover H3 generation only. The later keying, cleanup, ProRes alpha master and black-composite steps are not included in these UI/API downloads. Original illustration authorship and permission details remain to be confirmed. No new generation or reprocessing was run when preparing these website evidence assets.
