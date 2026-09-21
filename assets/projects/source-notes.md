# Portfolio media: sources and credits

Prepared 20 September 2026 from the saved selection records, videos, prompts and workflow files. This page records the existing material; no new video generation was performed for the website.

## Adobe After Effects post-production

Howard Xu confirmed that post-production work on Arcaea 7.0 story illustration, ⊥⊬ (Sacrosanct) / Silentroom Dismantled XOR かたぎり, Insight (Nullified), Saya (Absolution) and Mimu included small adjustments to the loop animation in Adobe After Effects (AE). Tide in a Cup and Sky Whale are excluded from this AE loop-adjustment description. The file identities and generation settings documented below remain unchanged.

## Selected videos

### Tide in a Cup — motion V2

Selected by the portfolio owner on 20 September 2026. Source filename: `A2_01_Tide_Cup_motion_v2_take01_seed1909202601_00001_.mp4`. Seed: **1909202601**. Duration: **8.00 seconds**, 1728 × 960, 24 fps, with audio. The website [video](tide/video.mp4) is a byte-for-byte copy of that file.

Original SHA-256: `7adf6af50ea9c15ed3b98eae802f94e06634e482d1ed56cd13facfb111bdbdcd`.

[English prompt](tide/prompt.txt) · [UI workflow](tide/ui.json) · [API workflow](tide/api.json) · [Full workflow image](tide/workflow.png).

The poster is an extracted frame at 7.00 seconds. The two process stills are extracted at 3.00 and 7.00 seconds.

### Sky Whale — motion V2

Selected by the portfolio owner on 20 September 2026. Source filename: `A2_02_Sky_Whale_motion_v2_take01_seed1909202602_00001_.mp4`. Seed: **1909202602**. Duration: **12.25 seconds**, 1728 × 960, 24 fps, with audio. The website [video](whale/video.mp4) is a byte-for-byte copy of that file.

Original SHA-256: `eb1f3e2d20dd9d0ad1dbf98a2371356807df02481a9a1f6e253f001a875c9db5`.

[English prompt](whale/prompt.txt) · [UI workflow](whale/ui.json) · [API workflow](whale/api.json) · [Full workflow image](whale/workflow.png).

The poster is an extracted frame at 11.00 seconds. The two process stills are extracted at 1.00 and 4.00 seconds.

Both selected V2 workflows use MiniMax H3 FL2VA BF16, 0.4 MP, alignment to 32, 2× latent upscaling, a 20-step schedule, Split Sigmas at step 6 and one additional refiner step. Neither supplies first- or last-frame images. These are the selected V2 files, preceding the later 0.5 MP and revised beach-transition experiments. Their inclusion does not claim that every prompt instruction was reproduced exactly.

## Historical process examples

### Arcaea 7.0 story illustration — accepted archive version

Archived filename: `cg2s_accepted_postprocessed_seed633240673.mp4`. Seed: **633240673**. Duration: **10.125 seconds**, 1824 × 1056, 24 fps, silent. The archive identifies this version as accepted, with colour transfer and a separate support-hand freeze patch.

The generation workflow uses the same illustration as the first and last reference, two sampling stages and 1.5× latent upscaling. The separate hand patch is part of the accepted video; the saved generation graph alone does not reproduce that complete final treatment.

[Browser playback copy](cg2s/video.mp4) · [Original archived video](cg2s/original.mp4) · [Prompt](cg2s/prompt.txt) · [UI workflow](cg2s/ui.json) · [Full workflow image](cg2s/workflow-overview.png).

Original SHA-256: `c54fa1135fb4a67f1016b509b351ef560337831c39b531b1f32ab48fa39715e0`.

### ⊥⊬ (Sacrosanct) / Silentroom Dismantled XOR かたぎり — historical candidate

Archived filename: `c10_historical_candidate_colorcorrected_seed1548894993.mp4`. Seed: **1548894993**. Duration: **10.125 seconds**, 896 × 896, 24 fps, silent. This colour-corrected candidate passed an earlier archive review but was excluded from the later native-output-only selection. It is presented as an iteration example, not as an accepted native-output final.

The saved workflow uses the same illustration as the first and last reference, two sampling stages, 2× latent upscaling and global colour transfer.

[Browser playback copy](c10/video.mp4) · [Original archived video](c10/original.mp4) · [Prompt](c10/prompt.txt) · [UI workflow](c10/ui.json) · [Full workflow image](c10/workflow-overview.png).

Original SHA-256: `d7953eaa8839dd2814e1778d505e204b52e2bf96d8fd4334797b7bc0c7523209`.

For Arcaea 7.0 story illustration and ⊥⊬ (Sacrosanct) / Silentroom Dismantled XOR かたぎり, `original.mp4` preserves the archived 10-bit H.264 file. `video.mp4` is an 8-bit H.264 playback transcode for browser compatibility, retaining the original dimensions, frame rate and duration. This website preparation added no content repairs or generated frames. Their posters are extracted at 0.00 seconds; process stills are extracted at 0.00 and 5.00 seconds.

## Character studies added 20 September 2026

Insight (Nullified), Saya (Absolution) and Mimu are separate delivered black-background videos. The website copies the supplied 10 Mbps-target H.264 files without transcoding. Black is already part of their picture; the web player does not add letterboxing. They are silent and do not contain an alpha channel. Transparent ProRes 4444 masters remain in the local production archive.

| Study | Final file | Dimensions / frame rate | Duration / frames | Executed H3 seed |
|---|---|---|---|---|
| Insight (Nullified) | [Video](character98/video.mp4) | 2160 × 2982 / 60 fps | 9.966667 seconds / 598 | 1005113135037086 |
| Saya (Absolution) | [Video](character97/video.mp4) | 1600 × 1600 / 24 fps | 10 seconds / 240 | 322853979834763 |
| Mimu | [Video](mimu/video.mp4) | 2160 × 2880 / 24 fps | 10 seconds / 240 | 603730895876546 |

The source collection is `三角色_纯黑_10Mbps_20260920`, identified in the supplied character workflow and delivery handoff dated 20 September 2026. Exact video SHA-256 values:

- 98: `037f4bf79eb06de12ebbf8276a644b693a520f6fa90171b96a4e8bae09188d28`
- 97: `6a167d70d12dad5ef611cb52017d90610af21d06f02034e5d2fe07e302b9cf32`
- Mimu: `16d73b9dfde5ff5c1f1d6130284f42139f0890233fbf702cabe7e43dc2ae5fc5`

All three generation records use MiniMax H3 FL2VA BF16, matched first/last images, 0.6 MP, 32 alignment, 2× latent upscaling, 20 base steps, Split Sigmas 6, euler/simple and no enabled Turbo LoRA. The extra refiner step is 1 for 98 and Mimu, and 0 for 97. Original generation produced 243 frames at 24 fps (10.125 seconds): 1344 × 1856 for 98, 1600 × 1600 for 97, and 1344 × 1792 for Mimu. Those generation dimensions and durations are distinct from the finished files above.

The 98 and 97 UI/API records were extracted from the original generated PNG metadata. Mimu uses the saved embedded UI and executed API identified by the handoff. Prompts are reproduced from the executed records without rewriting. The retained UI and filenames can contain legacy values; the executed API provides the seeds and settings reported here. In particular, the older 97 and Mimu filename seeds are not their actual run seeds.

- [Insight (Nullified) prompt](character98/prompt.txt) · [Saved UI](character98/ui.json) · [Executed API](character98/api.json) · [Generation diagram](character98/workflow.png)
- [Saya (Absolution) prompt](character97/prompt.txt) · [Saved UI](character97/ui.json) · [Executed API](character97/api.json) · [Generation diagram](character97/workflow.png)
- [Mimu prompt](mimu/prompt.txt) · [Saved UI](mimu/ui.json) · [Executed API](mimu/api.json) · [Generation diagram](mimu/workflow.png)

The diagrams cover generation. CorridorKey screen removal, colour cleanup and final compositing occurred afterwards. For 98, a local violet-cloak correction used spill_luma 0.36. The displayed 97 uses the later 1600 × 1600 source and master, including local red-spill cleanup and forehead protection; the earlier 2160-size master is not the displayed version. Mimu uses gentle global green-spill cleanup. Final black compositing was calculated in linear light before encoding.

The delivery reports confirm the specified output conditions, not lossless quality. The 98 and Mimu deliveries did not meet every preferred numerical image-quality threshold at the chosen dimensions and bitrate. For Saya (Absolution), Mimu and Insight (Nullified), the creator confirmed that Adobe After Effects (AE) was used to fine-tune each loop and remove three frames from each 243-frame generation. Each edited clip contains 240 frames and lasts exactly 10 seconds at 24 fps before subsequent processing. Insight’s final 60 fps, 598-frame delivery belongs to a later processing stage.

Posters are extracted at 0 seconds; process stills at 1 and 7 seconds, with a maximum image dimension of 1000 pixels. Each pair is from the same final video, not a before/after repair comparison. The original files and transparent masters were not modified by website preparation.

## Workflow images and attribution

All workflow images are **offline renderings with English node labels**, derived from saved workflow data. They are not screenshots of a running ComfyUI session. The selected V2 workflow images were rendered with LiteGraph; their full-resolution PNG files retain the complete source workflow metadata. Small WebP versions are display previews. Stills and posters are direct video-frame extractions, resized for the page.

MiniMax H3 is the generation model used in these studies, and ComfyUI is the workflow environment. The prompts, workflow records and selection history document the process. Howard Xu has confirmed that these were individual projects, using AI assistance with prompts, workflow preparation and processing. Original game illustrations remain separately credited.

The user confirmed the game origins on 21 September 2026: Mimu is from CHUNITHM; Arcaea 7.0 story illustration, ⊥⊬ (Sacrosanct) / Silentroom Dismantled XOR かたぎり and the other two character artworks are from Arcaea. These are fan-animation / derivative studies. The source checks below establish attribution, not an additional reuse licence.


## Artwork attribution update · 21 September 2026

### Arcaea 7.0 story illustration

Arcaea · Divine Oblivion, C-8 scene featuring Saya · Illustration: すずなし (Suzunashi) · © lowiro.

The source scene matches the C-8 image in Rhythm Archive. The portfolio creator confirmed the illustrator as すずなし (Suzunashi). The linked archive identifies the scene; the community story page provides story and animation credits.

- [Matching source scene](https://rhythmarchive.github.io/r/658f47cd-0e3a-78f6-9385-671a64e485c1/)
- [Arcaea Wiki · C-8 credits](https://wikiwiki.jp/arcaea/ストーリー/Main%20Story%20Act%20II/Divine%20Oblivion#mc8)

### ⊥⊬ (Sacrosanct) / Silentroom Dismantled XOR かたぎり

Arcaea · Divine Oblivion, C-10-1 scene · Illustration: すずなし (Suzunashi) · © lowiro.

The saved workflow names C-10-1.png, and the composition matches the archived scene. The illustrator attribution comes from the Arcaea Japanese community wiki.

- [Arcaea Wiki · C-10 illustrator](https://wikiwiki.jp/arcaea/ストーリー/Main%20Story%20Act%20II/Divine%20Oblivion#mc10)
- [Matching source scene](https://rhythmarchive.github.io/r/1cbb80df-3653-77d5-ba1c-6e0e6ef64140/)

### Insight (Nullified)

Insight (Nullified) / 識眼 · Arcaea · Illustration: すずなし (Suzunashi) · © lowiro.

The character design matches the archived portrait. The illustrator and variant name are listed in the Arcaea Japanese community wiki.

- [Arcaea Wiki · character & illustrator](https://wikiwiki.jp/arcaea/パートナー/恒常#insightnul)
- [Matching source portrait](https://rhythmarchive.github.io/r/c4cda7d3-d462-7dfb-a14f-bef1fd129362/)

### Saya (Absolution)

Saya (Absolution) / 咲弥 · Arcaea · Illustration: すずなし (Suzunashi) · © lowiro.

The character design matches the archived portrait. The illustrator and variant name are listed in the Arcaea Japanese community wiki.

- [Arcaea Wiki · character & illustrator](https://wikiwiki.jp/arcaea/パートナー/恒常#sayaab)
- [Matching source portrait](https://rhythmarchive.github.io/r/1d53bf59-4248-7317-a02e-e788162c2f93/)

### Mimu

導師 ミィム・ミクラー (Mimu) · CHUNITHM · Illustration: 煎茶 (Sencha) · © SEGA.

The illustrator is credited on SEGA’s official character page. This project animates and processes the source illustration; the original drawing is not my own.

- [SEGA character & illustrator credit](https://chunithm.sega.jp/character/#/chunithm/%E5%B0%8E%E5%B8%AB%E3%83%9F%E3%82%A3%E3%83%A0%E3%83%BB%E3%83%9F%E3%82%AF%E3%83%A9%E3%83%BC)

The portfolio creator confirmed the illustrator credits listed here. The community wiki supports the credits for ⊥⊬ (Sacrosanct) / Silentroom Dismantled XOR かたぎり, Saya (Absolution) and Insight (Nullified); SEGA’s official page credits Mimu. The Arcaea 7.0 story illustration credit is based on the creator’s confirmation, with Rhythm Archive identifying the source scene. The local numbers 97 and 98 are asset/project labels, not official character names. No original artwork, prompt, workflow JSON or video was rewritten by this credit update.


## Prompt and workflow bibliography · September 2026

The following references were traced from the three supplied August research files to their official documentation or project repositories. They support the explanatory bibliography; listing a project does not establish that it was installed or used to execute a saved video. Public API regeneration and local two-pass latent refinement are separate workflows.

- **[10] MiniMax. (n.d.-a). MiniMax-H3.** Official model repository. [GitHub](https://github.com/MiniMax-AI/MiniMax-H3). Model variants and local deployment background.
- **[11] MiniMax. (n.d.-b). Video prompt writing guide (T2VA / I2VA / FL2VA / L2VA).** Official prompt guide. [Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/docs/VIDEO_PROMPT_WRITING_GUIDE_base_en.md). Visual timelines, camera movement and separate audio descriptions.
- **[12] MiniMax. (n.d.-c). Full-reference mode rewrite output format guide.** Official reference guide. [Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-H3/blob/main/docs/VIDEO_PROMPT_WRITING_GUIDE_ref_en.md). Subject definitions, reference roles and preservation instructions; reading alongside the reference-based character prompts.
- **[13] MiniMax. (n.d.-d). Video generation.** Official API documentation. [MiniMax API Docs](https://platform.minimax.io/docs/guides/video-generation). Hosted video-generation context and input modes.
- **[14] MiniMax. (n.d.-e). MiniMax-H3 video agent guide.** Official CLI reference. [GitHub](https://github.com/MiniMax-AI/cli/blob/main/skill/h3-video/references/h3-video.md). Supplementary reading about preparing and submitting H3 tasks through the CLI.
- **[15] Comfy Org. (n.d.). ComfyUI MiniMax H3 视频生成指南.** Official ComfyUI tutorial. [ComfyUI documentation](https://docs.comfy.org/zh/tutorials/video/minimax/minimax-h3). Node-based local workflow examples and model setup.
- **[16] benjiyaya. (n.d.). Minimax-H3-Prompt-AgentSkill.** Community project. [GitHub](https://github.com/benjiyaya/Minimax-H3-Prompt-AgentSkill). Supplementary research on prompt routing and structured preparation.
- **[17] ethanfel. (n.d.). ComfyUI-MiniMax-H3-Guide.** Community project. [GitHub](https://github.com/ethanfel/ComfyUI-MiniMax-H3-Guide). Supplementary research on reference roles and shot planning in ComfyUI.
