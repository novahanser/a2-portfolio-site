# Character 97 / generation evidence

Recorded 20 September 2026. The webpage displays the later keyed, cleaned, black-background delivery. It is not the native H3 generation export.

## Actual generation parameters

- Actual seed: **322853979834763** (API node 307).
- MiniMax H3 FL2VA BF16; euler / simple; 20 base steps; SplitSigmas 6; 2x latent upscale; align 32.
- Base: 800 x 800; generated output: 1600 x 1600, 24 fps, 243 frames, 10.125 seconds.
- H3SigmaRefiner: 0 extra steps; sigma 0.7 to 0; cosine.
- Same image at the first and last frame. Turbo LoRA absent from execution API. BasicGuider does not expose an independent CFG control.
- Native generation export: H.264 / MP4 / yuv420p / CRF 12; metadata enabled; no audio.

## Preserved evidence

- Source png: `97_v14_HQ_0p6_32_1p6x_20p6_raw_308848260085483_raw_00009.png`
- `api.json` and `ui.json` retain original embedded or supplied records. They have not been relabelled or normalized. Node titles may contain legacy values.
- `prompt.txt` is the verbatim value of execution API node 355.
- `workflow*.png` / `.webp` are English, grouped **offline workflow diagrams**, not screenshots from a running ComfyUI session. IDs map to the original nodes. They simplify the graph for reading; JSON files contain the full graph.

## Later production stage

The creator confirmed that Adobe After Effects (AE) was used to fine-tune the loop and remove three frames from the 243-frame source. This produced a 1600 x 1600, 240-frame input lasting exactly 10 seconds at 24 fps. It was keyed using a red/green channel swap around CorridorKey. Local red cleanup and forehead protection preceded the transparent master and linear-light black composite.

Delivered media: 1600 x 1600 / 24 fps / 240 frames / 10 s. No audio; black background baked into MP4.

## Limits and interpretation

Legacy filenames and UI titles mention seed 308848260085483 / 1.6x / 20p6. The actual API uses seed 322853979834763 / 2x / 20 base steps / split 6. The original generation contains 243 frames; the creator-confirmed AE edit removes three frames before keying. The saved H3 graph covers generation and does not contain the AE edit.

The diagrams cover H3 generation only. The later keying, cleanup, ProRes alpha master and black-composite steps are not included in these UI/API downloads. The source illustration is Saya (Absolution) from Arcaea, credited to すずなし (Suzunashi) by the Japanese community wiki. See the [source and attribution notes](../source-notes.md) for supporting links; those credits do not establish a reuse licence. No new generation or reprocessing was run when preparing these website evidence assets.
