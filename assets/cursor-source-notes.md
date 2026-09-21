# Pointer asset provenance — v14

Updated: 2026-09-19.

The user requested the cursor shape from the supplied In Falsus UI reference pack. These two PNGs are copied unchanged from `A2-InFalsus-UI-reference-pack-2026-09-19-v2.zip`, directory `02_鼠标样式/主指针`. Both retain their original 64 × 64 pixels and transparency. The visible soft glow is part of those source pixels; the website adds no following cursor halo or separate cursor element.

| Website file | Source filename | SHA-256 (source and copy match) |
| --- | --- | --- |
| `cursor-infalsus-default.png` | `cursor-default-smaller.png` | `b5dbf2a3893dfcacdd3adc81cf164ea3ce910117fc68686a3a808e1128b7eede` |
| `cursor-infalsus-link.png` | `cursor-default-smaller-brighter.png` | `ce5dd24a20f9bb33abaffba75feb13441e6d82d3f6f87e5ccf8a509b35888b5d` |

## Website-specific mapping

In v14, both pointers display at 50% of their previous size: 32 × 32 CSS pixels. The `cursor-infalsus-default-half.svg` and `cursor-infalsus-link-half.svg` files embed the unchanged source PNG bytes in fixed-size SVG containers. The artwork is scaled uniformly by the browser; its colour, transparency and proportions are preserved. The original PNG files above remain unchanged.

`cursor.css` uses the normal image for the page and the brighter image for interactive controls. This is a choice for this portfolio. It does not establish the original game's runtime texture-to-state mapping.

The reference pack's `鼠标样式说明.md` reports code evidence for an approximate normalized hotspot of `(0.25, 0.25)`, corresponding to `(16, 16)` for the 64-pixel textures and `(8, 8)` for the current 32-pixel cursors. The site adopts the proportionally scaled hotspot as a practical setting, not a verified official runtime parameter. The pack says that the exact texture ID binding and getter names remain unconfirmed.

The custom cursors apply only to devices with a fine pointer and hover. Text fields keep a text cursor; image preview targets keep the zoom cursor; the open image viewer retains its existing cursor behavior. Disabled controls and forced-colour mode use native cursor behavior. The existing independent triangular pointer trail remains governed by Motion on/off.

## Attribution and evidence boundary

Source artwork: *In Falsus*, lowiro. Supplied by the user in the local reference pack. The cursor images are referenced game assets, not original portfolio artwork, AI-generated images, or evidence of the applicant's design work. Copying the two assets here does not establish a reuse licence. Other interface components continue to be the portfolio's CSS/SVG adaptations unless their own notes say otherwise.
