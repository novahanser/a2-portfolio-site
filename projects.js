// Project records: supplied media and saved production evidence.
window.portfolioProjects = {
  "tide": {
    "title": "Tide in a Cup",
    "width": 1728,
    "height": 960,
    "number": "01",
    "duration": "08.00 SEC",
    "status": "Selected film · Motion V2",
    "category": "PHOTOGRAPHIC / SURREAL",
    "summary": "An ocean contained in an espresso cup. A fast, low camera journey turns a familiar café object into an impossible landscape, then returns to the cup to reveal its miniature scale.",
    "brief": "Explore an impossible transformation through a photographic style, with an eight-second camera journey and recognisable everyday materials.",
    "contribution": "I completed this project individually, from the creative brief and testing to review and final selection.",
    "record": [
      "The final selection is the motion V2 output. Later beach-cut and 0.5 MP experiments are not the film displayed here.",
      "The prompt specifies a flight through the cup handle, a low pass through a curling wave and a rising pull-out. These are production intentions; the actual result can be compared with the frames and film above.",
      "The saved prompt and workflow match the metadata embedded in this selected MP4. The two frames are moments from the same film, not a before-and-after version comparison."
    ],
    "workflowNote": "English-node rendering of the saved workflow. This is an offline diagram, not a screenshot of a running generation session.",
    "specs": [
      [
        "Output",
        "1728 × 960 · 24 fps"
      ],
      [
        "Model",
        "FL2VA · BF16"
      ],
      [
        "Base / upscale",
        "0.4 MP · 32 aligned · 2×"
      ],
      [
        "Sampling",
        "20 base steps · Split Sigmas 6"
      ],
      [
        "Refinement",
        "1 extra refiner step"
      ],
      [
        "Seed",
        "1909202601"
      ]
    ],
    "frames": [
      {
        "time": "00:03.00",
        "title": "At wave height",
        "description": "A blue wave rises beside the white inner wall of the cup. The low viewpoint makes the miniature water feel much larger.",
        "file": "frame-a.webp"
      },
      {
        "time": "00:07.00",
        "title": "An ocean in a cup",
        "description": "The raised viewpoint reveals the handle, tabletop and coffee around the wave, restoring the familiar scale of the cup.",
        "file": "frame-b.webp"
      }
    ],
    "hasApi": true,
    "original": "video.mp4",
    "playback": "Selected original MP4 · Generated environmental audio",
    "workflowPrefix": "workflow",
    "badge": "SELECTED FILM",
    "base": "assets/projects/tide/",
    "prompt": "integrated_multimodal_description: [Shot 1] Photorealistic live-action macro cinematography, a single continuous 8.00-second take. A plain white porcelain espresso cup with one oval handle stands on a worn walnut cafe table in warm morning window light. Dark coffee has a crescent of golden crema. Use the wide perspective of a 24 mm macro probe lens, detailed ceramic glaze, realistic liquid reflections and natural motion blur. The camera follows one unbroken miniature flight path with strong foreground parallax; the environment keeps its scale and geometry. During the first 1.5 seconds, start at tabletop height facing through the empty opening of the cup handle. Accelerate forward through that opening without touching the porcelain, then curve upward outside the cup to clear its rim. As the camera tilts down over the rim, the coffee visibly changes into blue-green seawater and the crema becomes a narrow line of surf; a tiny crescent beach appears along the inside edge. From 1.5 to 5.0 seconds, descend just above the water and race forward into the open hollow of one curling miniature wave. The translucent wave arches overhead like a moving glass tunnel; sunlight flickers through it onto the surface. Keep the bright exit visible ahead, with the cup's immense-looking white inner wall beyond it. The camera clears the open end before the wave folds down behind it, accompanied by a crisp, small surf crash. From 5.0 to 7.2 seconds, continue forward and climb steeply above the rim, then sweep backward and upward in one broad arc while tilting down to keep the cup centred. This rapid physical pull-out reveals that the apparently huge ocean still fits inside the original espresso cup. Ease the camera speed down to a near hover by 7.2 seconds. Finish in a high three-quarter wide view showing the entire cup, its handle and the surrounding tabletop while miniature ripples reach the tiny beach. The cup and table remain rigid and stationary; only the liquid transforms. All seawater stays inside the cup. Camera acceleration creates the speed changes; the wave moves continuously at natural speed. No cuts, hidden transitions, lens zoom, teleportation, camera passing through solid objects, humans, dialogue, text, logos or illustrated rendering.\n\noverall_soundscape: Low cafe room tone continues throughout, with a short close air swish as the camera passes the handle. Delicate stereo surf grows closer during the low flight, with a brief hollow resonance inside the wave and one synchronized miniature splash behind the camera. As the camera rises, the surf recedes smoothly into the quiet room ambience; no voices.\n\nnon_diegetic_music: N/A\n",
    "selectionNote": "I kept V2 because later versions had problems with camera movement and how the model interpreted the scene. V2 was closer to what I wanted. My next step is to make the camera direction and scene instructions clearer."
  },
  "whale": {
    "title": "Sky Whale",
    "width": 1728,
    "height": 960,
    "number": "02",
    "duration": "12.25 SEC",
    "status": "Selected film · Motion V2",
    "category": "GAME CINEMATIC / CONTINUOUS SHOT",
    "summary": "A giant whale carries stone ruins above a cloud-filled valley. A continuous flying camera moves from the explorer’s viewpoint toward the creature, using close surfaces and open sky to make its scale tangible.",
    "brief": "Build a realistic game-cinematic world around a giant sky whale. Use one continuous, ambitious camera move across roughly twelve seconds.",
    "contribution": "I completed this project individually, from the creative brief and testing to review and final selection.",
    "record": [
      "The final selection is the motion V2 output. The later 0.5 MP experiment is not the film displayed here.",
      "The prompt plans a rush past an explorer, a close flight beside the whale, a stone-arch passage and a wide reveal. Stable anatomy and a slow-moving creature were specified alongside the faster camera.",
      "The saved prompt and workflow match the metadata embedded in this selected MP4. Frame timecodes document the displayed output, rather than proving that every requested camera action was achieved."
    ],
    "workflowNote": "English-node rendering of the saved workflow. This is an offline diagram, not a screenshot of a running generation session.",
    "specs": [
      [
        "Output",
        "1728 × 960 · 24 fps"
      ],
      [
        "Model",
        "FL2VA · BF16"
      ],
      [
        "Base / upscale",
        "0.4 MP · 32 aligned · 2×"
      ],
      [
        "Sampling",
        "20 base steps · Split Sigmas 6"
      ],
      [
        "Refinement",
        "1 extra refiner step"
      ],
      [
        "Seed",
        "1909202602"
      ]
    ],
    "frames": [
      {
        "time": "00:01.00",
        "title": "A human measure of scale",
        "description": "An ochre-cloaked explorer faces the whale from a stone opening. The figure makes the creature’s enormous size immediately readable.",
        "file": "frame-a.webp"
      },
      {
        "time": "00:04.00",
        "title": "From distance to detail",
        "description": "The tilted close view fills the frame with the whale’s eye and skin. A small ruined arch remains visible along its back.",
        "file": "frame-b.webp"
      }
    ],
    "hasApi": true,
    "original": "video.mp4",
    "playback": "Selected original MP4 · Generated environmental audio",
    "workflowPrefix": "workflow",
    "badge": "SELECTED FILM",
    "base": "assets/projects/whale/",
    "prompt": "integrated_multimodal_description: [Shot 1] Photorealistic high-budget 3D game cinematic, a single continuous 12.25-second take. Physically based weathered stone, woven fabric, finely creased whale skin and volumetric dawn clouds. A lone adult explorer in an ochre cloak, dark trousers, sturdy boots and a small leather pack stands at a ruined stone balcony, viewed from behind through a short archway. Beyond the balcony, an immense living whale glides slowly left to right above a cloud-filled valley. It has dark blue-grey skin, pale scars, one broad visible pectoral fin and a mossy ridge supporting several ancient stone arches. The whale and its ruins already exist in the scene. Use a fixed 18 mm wide-angle perspective and a fast, controlled flying camera with strong near-to-far parallax. During the first 2.0 seconds, rush forward from shoulder height through the open arch, pass beside the explorer's right shoulder, then clear the balcony parapet. The explorer stays safely on the balcony as their cloak snaps once in the wind. From 2.0 to 5.0 seconds, dive in one smooth descending curve toward the whale's near flank, banking by only twenty degrees. Level out beside its enormous eye and sweep along the textured shoulder, keeping a clear gap from the skin. The eye turns slightly toward the passing camera while the whale maintains its slow glide; a deep nonverbal call swells underneath the rushing air. From 5.0 to 8.5 seconds, climb around the outer edge of the shoulder onto a path above the whale's back, level the horizon and fly through the open centre of one moss-covered stone arch. The arch grows rapidly from a full silhouette to close foreground stone edges and then passes behind the camera; never fly through stone or skin. From 8.5 to 10.8 seconds, emerge into open air and sweep outward in a large rising arc, translating laterally while counter-panning to keep the whale framed. The view opens from close ruins to the complete creature against the sunlit cloud valley, with the original balcony now small in the distant background. Decelerate smoothly and hold a stable wide composition for the final 1.45 seconds. The whale makes one slow fin stroke and continues gliding; ruins remain rigidly attached to its back. Keep the same whale anatomy, explorer, clothing, architecture and sunrise direction throughout. The spectacular speed comes from camera travel while the creature moves slowly. No cuts, concealed edits, lens zoom, teleportation, full camera rolls, combat, weapons, HUD, subtitles, logos or dialogue.\n\noverall_soundscape: Enclosed wind gains an open stereo breadth as the camera leaves the archway, with one close flap of the explorer's cloak. Fast air rush follows the dive and climb, briefly resonating as the camera threads the stone arch; the whale gives one low nonverbal call during the flank pass. Air rush softens during the final deceleration, leaving mountain wind and the distant breathy sweep of the fin, with no human voices or artificial impacts.\n\nnon_diegetic_music: N/A\n",
    "selectionNote": "I kept V2 because later versions had problems with camera movement and how the model interpreted the scene. V2 was closer to what I wanted. My next step is to make the camera direction and scene instructions clearer."
  },
  "cg2s": {
    "title": "Arcaea 7.0 story illustration",
    "width": 1824,
    "height": 1056,
    "number": "03",
    "duration": "10.125 SEC",
    "status": "Archive · Accepted with post-production",
    "category": "ILLUSTRATED / LOOP",
    "summary": "An illustrated scene developed into a short, silent loop. Restrained movement keeps the source composition readable. The accepted archive version also includes colour treatment and a separate correction to the supporting hand.",
    "brief": "Extend an illustration through restrained movement while retaining the composition and character details.",
    "contribution": "I completed this animation study individually. I reviewed the generated motion and directed the colour treatment and supporting-hand correction included in the saved final. In post-production, I used Adobe After Effects (AE) to make small adjustments to the loop animation.",
    "record": [
      "This is a historical accepted version, presented as supporting process evidence. It is separate from the two selected V2 films.",
      "The saved generation graph uses the same illustration as the first and last reference, two sampling stages, 1.5× latent upscaling and colour transfer. A separate support-hand freeze patch is part of the accepted final video and is not reproduced by the generation graph alone.",
      "The browser player uses an 8-bit H.264 viewing copy of the archived 10-bit file. The unchanged archive file is available through Download original."
    ],
    "workflowNote": "This offline diagram uses English node labels to show the archived generation workflow. It is not a screenshot of a running ComfyUI session. The accepted final also includes a support-hand freeze patch applied separately from the generation graph.",
    "specs": [
      [
        "Duration",
        "10.125 seconds"
      ],
      [
        "Output",
        "1824 × 1056 · 24 fps"
      ],
      [
        "Format",
        "Silent illustrated loop"
      ],
      [
        "Archive status",
        "Accepted with post-production"
      ],
      [
        "Viewing copy",
        "8-bit H.264"
      ],
      [
        "Source credit",
        "Arcaea · すずなし (Suzunashi)"
      ]
    ],
    "frames": [
      {
        "time": "00:00.00",
        "title": "The source composition",
        "description": "Opening frame: a sword-bearing figure, lilies and a pale lavender ruin.",
        "file": "frame-a.webp"
      },
      {
        "time": "00:05.00",
        "title": "Restrained movement",
        "description": "Midpoint: the trailing cloth changes shape while the main composition remains fixed.",
        "file": "frame-b.webp"
      }
    ],
    "hasApi": false,
    "original": "original.mp4",
    "playback": "Browser viewing copy · Silent · Original available below",
    "workflowPrefix": "workflow-overview",
    "badge": "ACCEPTED ARCHIVE",
    "base": "assets/projects/cg2s/",
    "prompt": "subject_definitions:\n<Subject 1> is the central young woman in <Picture 1> and <Picture 2>, with short layered teal-black hair, white and pale-cyan layered clothing, lilies beside her face, a seated pose, two anatomically correct visible human hands, and a vertical decorated sword.\n<Subject 2> is the floating ornament behind <Subject 1>, consisting of exactly one circular disc and exactly two petal-shaped loop components rigidly attached to the disc as one complete assembly.\n<Subject 3> is only the collection of small white flecks and tiny pale fragments already visible in <Picture 1> and <Picture 2>. Each existing particle has a specific original position, shape, size, color, opacity, sharpness, and depth layer.\n<Subject 4> is the complete painted background plate shown in <Picture 1> and <Picture 2>, including every color region, painted texture, ruin, pillar, railing, spire, crystal shard, distant structure, foreground framing shape, and blurred edge shape.\n<Picture 1> is the literal first frame of [Shot 1] at 0.00 seconds and defines the exact opening composition, geometry, style, color, exposure, particle distribution, and motion phase.\n<Picture 2> is the literal last frame of [Shot 1] at 10.13 seconds. It is a pixel-identical copy of <Picture 1> after identical preprocessing and defines the exact closing state of the seamless loop.\n\nsummary:\n[reference generation + keyframe completion] Create one uninterrupted 10.13-second painterly-anime live-wallpaper loop with a completely static camera. Preserve the character, clothing, sword, rear ornament, and complete background plate from the reference pictures. Strong wind moves the character’s free short hair and loose clothing from screen right to screen left. Within the background, only the particles already present in the reference pictures move, travelling continuously from screen right to screen left.\n\nretention_analysis:\n<Subject 1> (appears throughout [Shot 1]): fully_preserved - preserve the woman’s identity, short hairstyle, face, seated pose, body proportions, clothing design, lilies, hands, fingers, sword grip, and spatial relationships.\n<Subject 2> (appears throughout [Shot 1]): fully_preserved - preserve exactly one disc and exactly two attached petal-shaped loops as one rigid assembly behind the character.\n<Subject 3> (appears throughout [Shot 1]): fully_preserved - preserve the original particle count, shapes, sizes, colors, opacity, sharpness, and depth distribution while changing only their horizontal positions.\n<Subject 4> (appears throughout [Shot 1]): fully_preserved - preserve the complete background as an entirely stationary plate with unchanged geometry, texture, color, opacity, lighting, and depth relationships.\n<Picture 1> ([Shot 1] first frame): fully_preserved - use its exact visible state as the opening frame.\n<Picture 2> ([Shot 1] last frame): fully_preserved - land precisely on its visible state at 10.13 seconds.\n\ndetailed_description:\nThe target video preserves the exact painterly 2D anime illustration style, delicate linework, pale violet, cyan and white palette, soft painted depth, and existing chromatic-fringe details of the reference pictures.\n\n[Shot 1] The shot begins exactly from <Picture 1>. Hold a completely Static Shot throughout the full 10.13 seconds. Lock camera position, orientation, focal length, perspective, framing, crop, focus plane, depth of field, and all camera-induced parallax.\n\nTreat <Subject 4> as one completely fixed background plate. Every painted background region and every background structure remains in its exact original screen position. There is no background translation, deformation, warping, stretching, texture scrolling, vertical movement, horizontal movement, rotation, scaling, opacity change, or color change. The background does not react to the wind. All ruins, pillars, railings, spires, crystal shards, distant structures, painted color regions, foreground framing shapes, and blurred edge shapes remain completely stationary.\n\nOnly <Subject 3>, the particles already visible in the reference pictures, may move within the background. Do not generate any additional particles. Each existing particle remains the same small flat shape with unchanged color, opacity, brightness, sharpness, apparent size, and depth layer.\n\nEvery permitted particle travels smoothly and continuously from screen right toward screen left along a nearly horizontal path parallel to the image plane. Its vertical position remains almost constant. Particles do not rise, fall, bounce, orbit, rotate around the character, approach the camera, enlarge, shrink, flash, multiply, disappear inside the frame, or obscure the woman, sword, hands, face, or important background structures.\n\nWhen an existing particle exits through the left boundary, an identical particle enters naturally through the right boundary at the same vertical position, size, color, opacity, sharpness, and depth layer. Keep the visible particle count, density, spacing, and depth distribution stable throughout. Particle speeds may differ slightly, but all particles maintain the same screen-right-to-screen-left direction.\n\nA strong continuous wind blows from screen right toward screen left across <Subject 1>. Her hairstyle remains visibly short and never grows into long hair. Hair roots, face-crossing bangs, facial features, expression, head, torso, shoulders, arms, legs, and seated pose remain stable. Only the free outer short locks and hair tips bend and sweep strongly toward screen left with large, smooth, clearly readable displacement.\n\nThe loose outer garment panels, long free cloth sections, ribbons, and thin hems billow broadly toward screen left with coordinated wave-like deformation and delayed elastic recovery. Attached seams remain anchored. Fabric motion does not pull or deform the torso, shoulders, arms, hands, fingers, or sword. The lilies preserve their main shape and position, with only the smallest free outer edges responding lightly.\n\nBoth visible hands remain anatomically correct and nearly motionless. Preserve every finger, joint, spacing, silhouette, and grip. The lower visible hand remains a human hand and does not wave, rise, rotate, stretch, merge with the clothing, or change finger count. The vertical sword remains perfectly straight, rigid, and stationary.\n\n<Subject 2> remains behind the character as one rigid assembly. The circular disc and both attached petal-shaped loops move together with an extremely small horizontal sway, no greater than three percent of the disc diameter. Its vertical position remains locked. It does not bob, rise, sink, rotate, scale, separate, deform, or pass in front of the character or sword.\n\nThe short hair and loose clothing complete one smooth periodic wind-response cycle over 10.13 seconds. The rear ornament completes one much smaller synchronized cycle. The particles maintain continuous one-way right-to-left travel and complete their seamless loop through boundary replacement rather than reversing direction.\n\nLock brightness, exposure, white balance, contrast, saturation, shadow depth, bloom intensity, and average luminance throughout. No sudden darkening, color wash, exposure breathing, flicker, glow pulse, whiteout, moving illumination, vignette, fade, black frame, camera movement, or scene transition.\n\nAt exactly 10.13 seconds, the hair, clothing, flower edges, hands, sword, and rear ornament return to their exact opening positions and shapes. The existing particle field returns to the same visible distribution and loop phase as <Picture 1>. The final frame lands precisely on <Picture 2> and connects seamlessly back to <Picture 1> without a jump, flash, frozen hold, or brightness change.\n\noverall_soundscape:\nN/A\n\nnon_diegetic_music:\nN/A",
    "artwork": {
      "sources": [
        [
          "Arcaea 7.0 story illustration source [9]",
          "#ref-cg2s"
        ]
      ]
    }
  },
  "c10": {
    "title": "⊥⊬ (Sacrosanct) / Silentroom Dismantled XOR かたぎり",
    "width": 896,
    "height": 896,
    "number": "04",
    "duration": "10.125 SEC",
    "status": "Archive · Candidate excluded from final selection",
    "category": "ANIMATED / WALLPAPER",
    "summary": "A silent animated-wallpaper study retained to document iteration. This colour-corrected candidate passed an earlier review, then fell outside the later requirement for native output only.",
    "brief": "Create a restrained wallpaper loop and assess how the result fits changing delivery requirements.",
    "contribution": "I completed this wallpaper study individually. I reviewed and selected the colour-corrected version, then excluded it when I applied a native-output-only requirement to that selection. It remains here as process evidence. In post-production, I used Adobe After Effects (AE) to make small adjustments to the loop animation.",
    "record": [
      "⊥⊬ (Sacrosanct) / Silentroom Dismantled XOR かたぎり is a historical comparison candidate, not an accepted final portfolio film.",
      "I excluded this colour-corrected candidate under the later native-output-only requirement, although it had passed the earlier visual review.",
      "The player uses an 8-bit H.264 viewing copy. Download original retains the unchanged 10-bit archive file. The saved workflow includes colour transfer and export; its colour-corrected output is the archived candidate."
    ],
    "workflowNote": "English-node offline rendering of the archived generation workflow; not a screenshot of a running ComfyUI session. The saved graph uses the same illustration at both ends, two sampling stages, 2× latent upscaling and global colour transfer. This colour-corrected version passed an earlier visual review but was excluded by a later requirement for native output.",
    "specs": [
      [
        "Duration",
        "10.125 seconds"
      ],
      [
        "Output",
        "896 × 896 · 24 fps"
      ],
      [
        "Format",
        "Silent wallpaper study"
      ],
      [
        "Archive status",
        "Excluded · Native-output criterion"
      ],
      [
        "Viewing copy",
        "8-bit H.264"
      ],
      [
        "Source credit",
        "Arcaea · すずなし (Suzunashi)"
      ]
    ],
    "frames": [
      {
        "time": "00:00.00",
        "title": "Opening composition",
        "description": "Opening frame: a rear-facing figure in a fractured, violet-lit Gothic interior.",
        "file": "frame-a.webp"
      },
      {
        "time": "00:05.00",
        "title": "Loop continuity",
        "description": "Midpoint: the coat tails shift within the same square composition.",
        "file": "frame-b.webp"
      }
    ],
    "hasApi": false,
    "original": "original.mp4",
    "playback": "Archived candidate · Silent · Browser viewing copy",
    "workflowPrefix": "workflow-overview",
    "badge": "HISTORICAL CANDIDATE",
    "base": "assets/projects/c10/",
    "prompt": "subject_definitions:\n<Subject 1> is the single slender feminine figure in <Picture 1> and <Picture 2>, seen from behind in the lower center-right, with long silver-white to pale-lavender hair, a dark navy-black-violet layered coat or dress, asymmetric rightward tails, and two fixed leg-to-shoe chains: a dark screen-left leg and shoe plus a pale screen-right leg and narrow high heel.\n<Subject 2> is only the small upright openwork oval metal frame behind <Subject 1>'s head and upper back in <Picture 1>, made of thin non-emissive warm-metallic rails and transparent gaps. <Picture 1> fixes its front-facing contour, internal junctions, line thickness, bounding box, placement, and occlusion. It is a passive figure-local ornament.\n<Subject 3> is the canvas-locked Gothic background plate: every facade, arch, column, rose window, distant opening, arcade, and storm cloud, with fixed source luminance, fill, opacity, orientation, and depth.\n<Subject 4> is the canvas-coordinate-locked source-image foreground paint: full-height left, hanging upper, and large upper-right white-violet 2D color regions with magenta, violet, and cyan edges.\n<Subject 5> is the wet ground, the flat dark-violet painted reflection attached beneath <Subject 1>'s feet, all debris, localized RGB channel offsets, and all remaining thin warm-metallic source line accents.\n<Picture 1> is the exact first-frame and composition anchor for [Shot 1] at 0.00 seconds.\n<Picture 2> is the exact last-frame anchor for [Shot 1] at 10.13 seconds, made from the same source image with identical 1:1 preprocessing.\n\nsummary:\n[reference generation + keyframe completion] Create one uninterrupted silent 10.13-second, 1:1 painterly-anime live-wallpaper loop from <Picture 1> to <Picture 2>. Keep a static camera and preserve <Subject 1> through <Subject 5>. Wind moves only the rightward coat-tail tips above the knees and a few hair tips. The full figure, <Subject 2>, architecture, foreground paint, ground, and all other content stay registered; <Subject 2> is static by default.\n\nretention_analysis:\n<Subject 1> (throughout [Shot 1]): fully_preserved - preserve identity, position, scale, pose, anatomy, clothing, hair groups, both leg-to-shoe chains, leg gap, and occlusions; only stated coat and hair tips deform, while body and roots never follow <Subject 2>.\n<Subject 2> (throughout [Shot 1]): fully_preserved - preserve its openwork oval silhouette, bounding box, rail topology, line thickness, warm-metallic color, screen position, brightness, depth, and occlusion as a static element with dy=0 throughout.\n<Subject 3> (throughout [Shot 1]): fully_preserved - preserve landmarks, perspective, texture, depth, upper-right footprint, and every opening's fixed source luminance, dark fill, transparency/opacity, and canvas coordinates.\n<Subject 4> (throughout [Shot 1]): fully_preserved - preserve every region's coordinates, contour, width, colors, opacity, overlap, connectivity, and visible area as static source pixels.\n<Subject 5> (throughout [Shot 1]): fully_preserved - preserve the attached reflection, ground, debris, localized glitch marks, and thin warm-metallic source accents without new independent motion.\n<Picture 1> ([Shot 1] first frame): fully_preserved - begin with its exact framing, registration, geometry, exposure, colors, and motion phase.\n<Picture 2> ([Shot 1] last frame): fully_preserved - reach the same state gradually at 10.13 seconds.\n\ndetailed_description:\nPreserve the painterly 2D-anime concept-art style, delicate linework, cool navy shadows, ice-white and lavender light, magenta-violet accents, thin warm-metallic source lines, and localized chromatic aberration. The central corridor and upper-right white-lilac mass stay bright while architecture and corners remain dark.\n\n[Shot 1] Begin exactly from <Picture 1>. Hold one continuous 10.13-second Static Shot. Lock camera, square crop, perspective, focus, and parallax. Keep <Subject 1> at first-frame x/y, facing away. Its body center, vertical registration, both leg-to-shoe chains, heel contacts, leg gap, roots, and hands remain fixed; shoes stay planted, and coat remains separate from the legs. <Subject 1> is independent of <Subject 2>.\n\nKeep <Subject 2> as the small openwork oval frame in <Picture 1>, a front-facing 2D shape of thin non-emissive warm-metallic rails and transparent gaps. Hold it at the same screen position with dy=0 throughout. The only acceptable deviation is uniform translation of the intact layer along screen-y within one final-output pixel of the reference position; screen-x stays fixed. Its width, height, aspect ratio, contour, rail topology, junction spacing, line thickness, brightness, depth order, and occlusions remain identical to <Picture 1>. If any invariant would change, use dy=0.\n\nA gentle screen-right wind moves only coat-tail tips right of the torso and above the knees, plus a few outer hair tips. Legs, shoes, cloth below knees, roots, attachments, and head silhouette stay fixed. Garment motion stays below 0.60% frame width and 0.35% height; hair below 0.18% width and 0.12% height. One shallow wave returns to its start.\n\nTreat <Subject 3> as a canvas-locked painted plate. Every landmark, rose window, tower, arcade, and opening keeps source coordinates, silhouette, scale, attachment, occlusion, and depth. Rose windows keep ring contour, center, diameter, orientation, opening shape, and tracery junctions. Every opening keeps <Picture 1>'s luminance, dark interior, fill/void, opacity, and visible coverage in every frame.\n\nKeep <Subject 4> as inert source-image brushstrokes fixed to canvas coordinates. Its left, upper, and upper-right white-violet regions retain identical contours, widths, colors, opacity, overlaps, connectivity, and coverage in every frame. In <Subject 5>, reflection, ground, debris, and local RGB offsets stay attached and registered. Existing warm-metallic lines remain thin, continuous, non-emissive source linework attached to their original surfaces; <Subject 2>'s lines remain its rigid openwork frame. All remain inert painted marks without independent emission or effect behavior.\n\nLock exposure, white balance, black level, contrast, saturation, bloom, highlight boundaries, and grading. No new material, object, region, or global exposure change appears. At F242, all moving tips match F0 in position, shape, phase, and velocity; <Subject 2> is at dy=0. F242-to-F0 preserves identical registration, geometry, and brightness.\n\noverall_soundscape:\nN/A\n\nnon_diegetic_music:\nN/A\n",
    "artwork": {
      "sources": [
        [
          "⊥⊬ (Sacrosanct) / Silentroom Dismantled XOR かたぎり source [8]",
          "#ref-story"
        ]
      ]
    }
  },
  "character98": {
    "status": "Character study · Final black-background composite",
    "hasApi": true,
    "original": "video.mp4",
    "workflowPrefix": "workflow",
    "characterStudy": true,
    "badge": "CHARACTER STUDY",
    "workflowTitle": "From reference to generated clip",
    "playback": "Final MP4 · Silent · Black background is part of the footage",
    "workflowSections": [
      [
        "inputs",
        "Inputs & models"
      ],
      [
        "sampling",
        "Sampling & refinement"
      ],
      [
        "export",
        "Silent export"
      ]
    ],
    "workflowNote": "English offline diagram derived from the executed H3 generation API. Screen removal, colour-spill cleanup and the final black-background composite were separate post-production stages. The downloadable API is the reference for executed settings; the saved UI may retain legacy labels.",
    "title": "Insight (Nullified)",
    "number": "05",
    "width": 2160,
    "height": 2982,
    "duration": "09.97 SEC",
    "category": "GREEN SCREEN / CLOAK CLEANUP",
    "summary": "A pale-haired figure in flowing violet cloth becomes a short character animation. The post-production focus was the purple cloak: removing green contamination while retaining its colour and avoiding a washed-out patch.",
    "brief": "Animate the supplied illustration using the same opening and closing image, then remove the green screen and refine the cloak before delivery on black.",
    "contribution": "I completed the animation and finishing study individually. My work covered motion direction, review, screen removal and colour cleanup. In post-production, I used Adobe After Effects (AE) to make small adjustments to the loop animation.",
    "record": [
      "The player contains the final 2160 × 2982, 60 fps black-background MP4: 598 frames, 9.966667 seconds, no audio. It is an unchanged copy of the delivered file, not a transparent video.",
      "The executed generation API records seed 1005113135037086, a 672 × 928 base, 2× latent upscaling and 1344 × 1856 generated output. Generation produced 243 frames at 24 fps; the delivered video belongs to a later post-production stage.",
      "After CorridorKey screen removal, a local mask targeted the violet cloak. The approved correction used spill_luma 0.36; the review aimed to match the surrounding cloth rather than whiten the affected area. The transparent ProRes master was then composited on black.",
      "The generation workflow alone does not reproduce the complete final composite. The two stills are frames from the delivered video, not a before-and-after cleanup comparison."
    ],
    "specs": [
      [
        "Final output",
        "2160 × 2982 · 60 fps"
      ],
      [
        "Model",
        "FL2VA · BF16"
      ],
      [
        "Base / upscale",
        "0.6 MP · 32 aligned · 2×"
      ],
      [
        "Sampling",
        "20 steps · Split 6 · Extra 1"
      ],
      [
        "Executed seed",
        "1005113135037086"
      ],
      [
        "Finishing",
        "Green screen · Local cloak cleanup"
      ]
    ],
    "frames": [
      {
        "time": "00:01.00",
        "title": "Violet cloth and fine hair",
        "description": "Pale flowing hair and a circular ornament frame the figure. Violet cloak panels remain visible against the black composite.",
        "file": "frame-a.webp"
      },
      {
        "time": "00:07.00",
        "title": "A later moment",
        "description": "The outer hair and loose cloth occupy a different position while the full figure and circular ornament remain in view.",
        "file": "frame-b.webp"
      }
    ],
    "base": "assets/projects/character98/",
    "prompt": "How the reference pictures align with the target video — Picture 1 (from Shot 1) aligns with the 0.00-second mark of the target video; Picture 2 (from Shot 1) aligns with the 10.13-second mark of the target video.\n\nintegrated_multimodal_description: [Shot 1] A single continuous, locked-off full-body shot in Picture 1's detailed 2D anime illustration style. Picture 2 is the identical opening image. Keep the entire character, both shoes and gold circular ornament inside the frame, at their opening size and screen positions throughout. The camera and crop stay fixed for the whole clip. Preserve the original costume, colors and painted lighting. The exposed background and safety border remain one flat, uniform #00FF00 green field throughout.\n\nAnimate the EXISTING GOLD ARCS AND GAPS behind her head as a flat graphic moving around a fixed clock face. The clock-face comparison describes their motion only: keep the original ornament, adding no dial, hands or markings. All existing arcs travel clockwise together along their own original concentric circular paths, completing one lap over the whole clip. The broad front of the ornament stays continuously visible, with the same circular opening around her head and the same overall diameter. Its center and the plane of the drawing stay stationary; the arc ends and gaps change position along the circumference. Keep their original band thickness, arc shapes, spacing and painted front surfaces.\n\nViewed on the screen, an arc end at the TOP travels toward the RIGHT; on the RIGHT it travels DOWN; at the BOTTOM it travels LEFT; on the LEFT it travels UP. Continue this same clockwise travel throughout. Relative to each arc's own starting position, it advances one quarter of a lap by one quarter of the clip, half a lap at the midpoint, three quarters by three quarters of the clip, and one full lap at the ending. During all four quarters, the circular opening remains broad and front-facing, including the quarter-turn and three-quarter-turn moments. All arc ends and gaps follow this one shared timing. The arcs pass behind the stationary head and in front of the green field, retaining the original foreground occlusion. Existing luminous strands remain separate from the moving metal. Motion is steady and continuous through the loop seam.\n\nHer face retains its narrow pale outline, tapering jaw, pointed chin, fine dark linework, subtle pink-violet shading and small nose with its existing angular pale highlight. Keep the reference head tilt and facial proportions. The exposed viewer-left eye keeps its almond-shaped opening and dark lashes: a compact deep-blue circular center, a thin pale-lavender ring, muted gray-violet iris and darker outer rim remain distinct and concentric. The viewer-right eye retains the same blue-violet design, partly hidden beneath the diagonal blue-gray fringe with the same shading and overlap. Both eyes keep their original colors, pupil sizes, ring thicknesses, small highlights, gaze and eyelid opening in every frame. The facial fringe stays nearly still. Hold her original intent expression without blinking. Her small mouth remains slightly parted, with the same short dark opening, delicate lip edges and tiny pale detail inside. Facial linework, shading and features remain stable within this full-body composition.\n\nHold the existing forward-reaching pose: the arm already extends toward the viewer in depth, the hand in front of the torso at its reference screen position. Preserve foreshortening, shoulder and elbow angles, wrist and fingers. Head, torso, pelvis, legs and shoes stay essentially stationary, with only barely perceptible upper-chest breathing. The hand never reaches farther, withdraws or waves; legs and feet never step, bend, shift weight or slide.\n\nLong free hair and loose purple and black garment panels make TWO slow, broad outward-and-return cycles, about five seconds each. Sweep outward over about 2.5 seconds, then reverse gently and return to the opening drape over about 2.5 seconds. Repeat once in the second half, returning near midpoint and ending with smooth acceleration and deceleration, without pause or snap. Long hair tips travel five to six percent of frame width; loose skirt panels, trailing sleeves and black fabric edges travel four to five percent, leaving visible green clearance. Large panels bend as broad, heavy sheets carrying their folds slowly. Hair roots, facial fringe, fitted bodice, waist attachments, shoulder seams, wrists and hands stay anchored. Chains make much smaller slow swings. Secondary motion only trails this sweep, without rapid ripples, fluttering, whipping, repeated gusts or many small oscillations. Cloth never pulls the stationary body or hand.\n\nKeep the green field evenly saturated throughout every quarter of the clip, independent of the foreground's gold highlights and pale hair. Exposure and painted lighting remain unchanged. At the midpoint, hair and cloth complete their first outward-and-return cycle while the gold arcs are halfway around their fixed paths. At the ending, hair and cloth complete their second cycle and the arcs complete their single clockwise lap, naturally matching Picture 2. Body, feet, extended hand, face, background and full-body framing retain their opening positions and appearance throughout. There is no cut, zoom, end fade or sudden reset.\n\noverall_soundscape: Extremely soft, steady cloth rustling follows the two slow garment cycles. The metal rings move silently; there is no speech, footsteps, impacts or audible breathing.\n\nnon_diegetic_music: N/A",
    "artwork": {
      "sources": [
        [
          "Insight source [7]",
          "#ref-partners"
        ]
      ]
    }
  },
  "character97": {
    "status": "Character study · Final black-background composite",
    "hasApi": true,
    "original": "video.mp4",
    "workflowPrefix": "workflow",
    "characterStudy": true,
    "badge": "CHARACTER STUDY",
    "workflowTitle": "From reference to generated clip",
    "playback": "Final MP4 · Silent · Black background is part of the footage",
    "workflowSections": [
      [
        "inputs",
        "Inputs & models"
      ],
      [
        "sampling",
        "Sampling & refinement"
      ],
      [
        "export",
        "Silent export"
      ]
    ],
    "workflowNote": "English offline diagram derived from the executed H3 generation API. Screen removal, colour-spill cleanup and the final black-background composite were separate post-production stages. The downloadable API is the reference for executed settings; the saved UI may retain legacy labels.",
    "title": "Saya (Absolution)",
    "number": "06",
    "width": 1600,
    "height": 1600,
    "duration": "10.00 SEC",
    "category": "RED SCREEN / LOCAL REPAIR",
    "summary": "The square frame contains a mint-haired figure with long white and teal fabric. After removing the red background, I cleaned local colour spill and made a protected repair to the forehead.",
    "brief": "Animate the supplied character, then remove the red screen and refine selected contaminated details in the current 1600 × 1600 version.",
    "contribution": "I completed the animation and finishing study individually. My work covered motion direction, review, screen removal and colour cleanup. In post-production, I used Adobe After Effects (AE) to make small adjustments to the loop animation.",
    "record": [
      "The player uses the final 1600 × 1600 MP4: 240 frames at 24 fps, 10 seconds, no audio. It was composited from the later 1600-size transparent master, not the older 2160-size cleanup.",
      "The original generation API records seed 322853979834763, 20 steps, Split Sigmas 6 and 2× upscaling from 800 × 800. Legacy filenames include a different seed and a 1.6× label; those names are not the executed values.",
      "CorridorKey processing was adapted for the red screen. Local red-spill cleanup covered selected areas including the arm-side fabric, sword handle and eye ornament. A separate protected forehead repair was included before the transparent master was exported.",
      "The generated source had 243 frames; the later input used for keying had 240. I used Adobe After Effects (AE) to fine-tune the loop animation in post-production. The saved records do not identify the exact edit between those files. Both stills come from the displayed final composite."
    ],
    "specs": [
      [
        "Final output",
        "1600 × 1600 · 24 fps"
      ],
      [
        "Model",
        "FL2VA · BF16"
      ],
      [
        "Base / upscale",
        "0.6 MP · 32 aligned · 2×"
      ],
      [
        "Sampling",
        "20 steps · Split 6 · Extra 0"
      ],
      [
        "Executed seed",
        "322853979834763"
      ],
      [
        "Finishing",
        "Red screen · Local colour & alpha repair"
      ]
    ],
    "frames": [
      {
        "time": "00:01.00",
        "title": "A square character study",
        "description": "A mint-haired figure in white and teal stands against black, surrounded by long pale fabric and floral details.",
        "file": "frame-a.webp"
      },
      {
        "time": "00:07.00",
        "title": "Flowing fabric",
        "description": "The long fabric extends around the figure, with its folds and outer silhouette changing within the same square framing.",
        "file": "frame-b.webp"
      }
    ],
    "base": "assets/projects/character97/",
    "prompt": "subject_definitions:\n<Picture 1> is the supplied red-background full-body character illustration, defining the character, clothing, ornaments, opening pose and framing. <Picture 2> is the identical ending image. <Subject 1> is the illustrated woman in these images.\n\nsummary:\n[keyframe completion + reference generation] A silent 10.13-second single-shot full-body loop. The loose fabric makes one broad, very slow sway around a motionless character. Her small floral jewelry and rigid metal ornaments retain their original shapes.\n\nretention_analysis:\n<Picture 1> ([Shot 1] opening and design): fully_preserved - character design, costume construction, accessories, palette and composition.\n<Picture 2> ([Shot 1] ending): fully_preserved - the same framing, pose and fabric configuration.\n<Subject 1> (throughout [Shot 1]): fully_preserved - identity, anatomy, ornament dimensions and clothing attachment points.\n\ndetailed_description:\n[Shot 1] A fixed full-body view, matching <Picture 1> throughout. The camera, framing, focal length, exposure and character scale remain constant. The complete sword, head, boots and costume stay within the frame. The flat background remains the same uniform saturated red RGB(255,0,0) for every moment. Lighting is neutral and constant; the white costume, mint hair and teal lining retain their original colors and clean edges.\n\nThe head, face, bodice, hips, legs, feet and lowered hand stay in their opening positions. The small floral jewelry covering the missing eye, the chest flowers and the flowers in the headpiece remain still and keep their original size, petal silhouette and centers. The covered eye is absent; only the original green eye remains visible. The two matching floating ornaments behind the waist have stiff white metal petal plates joined to rigid circular frames. Their flexibility is very low: each plate retains its original length, width, thickness and curvature, with only negligible elastic give. The plates and their frame move together as one solid assembly, maintaining the same internal angles and tip directions. Both ornaments make only a very small, slow vertical float, preserving their original mirror symmetry, spacing and overall orientation. The metal surfaces remain firm as the nearby cloth sways; the plates do not flutter, fold, twist, stretch or flap independently.\n\nThe loose skirt panels and broad sleeve fabric perform one extremely slow, sweeping sway. This is heavy, supple fabric: the middle of each panel bends visibly into a long curve, the teal lining follows the white outer layer, and broad folds progress smoothly towards the pleated ends. The waist and shoulder seams remain anchored. Most movement occurs in the hanging middle sections and long hems, with a short natural delay between them. The hems remain recognizably the same weighty ruffles as in the opening image. Fabric length, seams and attached floral decorations remain intact.\n\nDuring 0-5 seconds, all these loose fabric panels gradually sweep outward and rise into one broad, rounded curve. Their slowest change of direction occurs around 5 seconds. During 5-10.13 seconds, the same panels gently sweep back and lower into their opening drape. The sleeve and skirt share this single slow cycle. The motion is flowing and clearly visible, with soft continuous folds, a wide travel distance and a very low speed. Hair tips and loose ribbon tails follow this same sway at a smaller amplitude; their roots, bow knots and flowers remain anchored. The scalloped strip behind the lowered hand bends with the garment because it is an attached part of the clothing. The sword and gripping hand together make only a barely perceptible vertical drift, keeping the original grip and blade shape.\n\nEnd on <Picture 2>, smoothly completing the same cloth movement and returning to the opening composition. The red field stays flat and unchanged, and the small fixed floral jewelry retains the same dimensions from beginning to end.\n\noverall_soundscape: N/A\n\nnon_diegetic_music: N/A\n",
    "artwork": {
      "sources": [
        [
          "Saya source [7]",
          "#ref-partners"
        ]
      ]
    }
  },
  "mimu": {
    "status": "Character study · Final black-background composite",
    "hasApi": true,
    "original": "video.mp4",
    "workflowPrefix": "workflow",
    "characterStudy": true,
    "badge": "CHARACTER STUDY",
    "workflowTitle": "From reference to generated clip",
    "playback": "Final MP4 · Silent · Black background is part of the footage",
    "workflowSections": [
      [
        "inputs",
        "Inputs & models"
      ],
      [
        "sampling",
        "Sampling & refinement"
      ],
      [
        "export",
        "Silent export"
      ]
    ],
    "workflowNote": "English offline diagram derived from the executed H3 generation API. Screen removal, colour-spill cleanup and the final black-background composite were separate post-production stages. The downloadable API is the reference for executed settings; the saved UI may retain legacy labels.",
    "title": "Mimu",
    "number": "07",
    "width": 2160,
    "height": 2880,
    "duration": "10.00 SEC",
    "category": "GREEN SCREEN / SOFT EDGES",
    "summary": "Mimu’s lilac hair, layered pink costume and jewel-tipped staff form a portrait character study. A gentle green-spill cleanup follows screen removal, with fine hair and costume edges kept visible on the black background.",
    "brief": "Animate the supplied Mimu illustration with matched opening and closing images, then prepare a clean, silent character composite for presentation.",
    "contribution": "I completed the animation and finishing study individually. My work covered motion direction, review, screen removal and colour cleanup. In post-production, I used Adobe After Effects (AE) to make small adjustments to the loop animation.",
    "record": [
      "The displayed final MP4 is 2160 × 2880, 24 fps and 240 frames: 10 seconds, with no audio. Its black background is baked into the picture; the transparent ProRes master is retained separately.",
      "The actual generation API records seed 603730895876546, a 672 × 896 base and 2× latent upscaling to 1344 × 1792. The older seed in the source filename does not identify the executed run. Original generation was 243 frames at 24 fps.",
      "CorridorKey screen removal was followed by a mild global green-spill pass with strength 0.9 and warm-colour protection 0.95. The cloak mask from Insight (Nullified) and local repairs from Saya (Absolution) were not applied to Mimu.",
      "The final black composite was prepared from the transparent master using linear-light alpha compositing. These images are timecoded frames of that final file, not separate iterations."
    ],
    "specs": [
      [
        "Final output",
        "2160 × 2880 · 24 fps"
      ],
      [
        "Model",
        "FL2VA · BF16"
      ],
      [
        "Base / upscale",
        "0.6 MP · 32 aligned · 2×"
      ],
      [
        "Sampling",
        "20 steps · Split 6 · Extra 1"
      ],
      [
        "Executed seed",
        "603730895876546"
      ],
      [
        "Finishing",
        "Green screen · Gentle global cleanup"
      ]
    ],
    "frames": [
      {
        "time": "00:01.00",
        "title": "Hair, ribbons and a staff",
        "description": "Mimu holds a gem-tipped staff, with lilac hair, pink costume layers and long ribbons extending across the portrait frame.",
        "file": "frame-a.webp"
      },
      {
        "time": "00:07.00",
        "title": "Fine edges in motion",
        "description": "Fine hair strands and trailing fabric shift around the figure while the staff remains fully visible against black.",
        "file": "frame-b.webp"
      }
    ],
    "base": "assets/projects/mimu/",
    "prompt": "subject_definitions:\n<Picture 1> is the prepared full-body illustration on a pure green #00FF00 background, with the shortened purple ribbon and completed lower-left hair. It is the sole reference for the foreground design, painted style and 3:4 composition, and the first-frame and last-frame anchor for [Shot 1].\n<Subject 1> is the character in <Picture 1>, with two pink-violet eyes, long pale-silver hair with pink and pale-lilac highlights, floral head ornament, layered white-and-pink skirt, pale legwear and flowered shoes.\n<Subject 2> is the complete diagonal staff in <Picture 1>, including both gold-rimmed pink-violet head elements and the straight shaft ending in a gold cap at the lower right.\n<Subject 3> is the large gold key ornament at the waist in <Picture 1>, including its circular floral frame and amber jewel.\n<Subject 4> is the shortened purple ribbon in the lower-right part of <Picture 1>. Its flat strip curves toward the legs and ends in a tapered fabric tip beside the higher, image-left flowered shoe, the character's right shoe.\n<Subject 5> is the flat, unlit, uniform #00FF00 green background in <Picture 1>, including the genuine open gaps between foreground objects.\n\nsummary:\n[keyframe completion + reference generation] A silent 10.13-second, single-shot, fixed-camera 3:4 full-body illustration loop. <Subject 1>'s long hair and hanging skirt, with <Subject 4>, make one modest, clearly visible, slow outward-and-return sway. The face, eyes and original body pose remain stable; <Subject 2> and <Subject 3> remain rigid. <Picture 1> anchors both ends. <Subject 5> keeps exactly the same uniform green throughout.\n\nretention_analysis:\n<Picture 1> ([Shot 1] first and last frames): fully_preserved - prepared green background, edited foreground design, original endpoint pose, proportions, painted detail and full-body composition.\n<Subject 1> (throughout [Shot 1]): fully_preserved - identity, expression, open eyes, anatomy, pale-silver hair, painted highlights, complete lower-left locks, costume layers, ornaments and attachment points.\n<Subject 2> (throughout [Shot 1]): fully_preserved - complete straight shaft, gold end cap, head elements, gold rims, dimensions, angle and grip.\n<Subject 3> (throughout [Shot 1]): fully_preserved - key silhouette, circular frame, floral relief, amber jewel and position relative to the waist.\n<Subject 4> (throughout [Shot 1]): fully_preserved - shortened length, flat purple surface, two edges, natural free tip and reference overlap order.\n<Subject 5> (throughout [Shot 1]): fully_preserved - one constant #00FF00 color, spatially uniform and unchanged across all frames and all revealed background gaps.\n\ndetailed_description:\nPreserve the detailed 2D fantasy-game illustration style, fine outlines, pearly painted shading and original silver, lilac, pink, white and gold palette. Foreground illumination remains steady.\n\n[Shot 1] Begin on <Picture 1> in a fixed 3:4 full-body view containing every hair tip, both shoes, both staff head elements and the lower-right gold staff cap, with clearance for motion. Camera position, focal length, framing, exposure, white balance and character scale remain fixed. <Subject 5> is an unlit graphic color field, #00FF00, RGB(0,255,0). Its hue, saturation and luminance remain identical everywhere and throughout all 10.13 seconds. Every newly revealed background gap immediately shows this same green. No shadows, gradients, vignette, haze, bloom, reflected colors, illumination changes or temporal color drift appear in the field. Foreground highlights cast no light onto it; green casts no tint onto the character.\n\n<Subject 1> retains the head angle, two open eyes, gaze, closed-mouth smile and limb pose. Horizontal body placement stays fixed; any residual vertical travel is at most 1% of frame height, following this single slow cycle. Hair roots, head ornament, waist attachments and garment seams remain anchored to the body. <Subject 2> and <Subject 3> follow only that tiny body offset, retaining their shapes, original angle, grip and waist relationship. Their painted highlights and jewel brightness remain constant.\n\nThe long hair bends visibly through its middle sections into broad, soft curves. Completed lower-left locks remain continuous to their tapering tips. Pale-silver hair stays opaque: pink and lilac highlights remain painted within each lock, preserving its full silhouette and fine strand markings. Highlights never erase or thin hair into the green field. The white scalloped skirt panels and pink inner layers flex visibly through their hanging middles, with broad, shallow folds progressing to layered hems. Preserve separate hair, skirt and ribbon contours, panel lengths and layering. Small floral details travel with their supporting cloth.\n\n<Subject 4> bends gently through its existing short length. Its tapered free tip remains identifiable beside the higher shoe, separated from the shoe by open space. Keep both edges, the flat fabric surface and existing overlap order behind the leg or staff. Adjacent silver hair retains its own continuous tapering strands. Genuine open gaps show green; existing hair or fabric surfaces remain intact.\n\nFrom 0-2.53 seconds, free hair, hanging skirt and short ribbon ease outward a modest, clearly visible distance. From 2.53-5.06 seconds, they continue toward one broad maximum excursion. Reverse gently once near 5.06 seconds, return gradually during 5.06-7.60 seconds, and complete the same return during 7.60-10.13 seconds. Distribute motion smoothly through both halves, with slight natural tip delays and no extra swishes or rebounds. Keep the face, gripping hand and jewel centers unobscured. End on <Picture 1>, restoring hair tips, ribbon endpoint, skirt folds, body pose and composition. Ease smoothly at both ends. The green field remains unchanged; the entire shot is silent.\n\noverall_soundscape: N/A\n\nnon_diegetic_music: N/A\n\n",
    "artwork": {
      "sources": [
        [
          "Mimu source [6]",
          "#ref-mimu"
        ]
      ]
    }
  }
};
