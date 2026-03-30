# Glass & Moss Design Tokens

Ez a dokumentum a jelenlegi kódbázisban használt színeket és tipográfiai mintákat foglalja össze.

## Typography

### Font families
- `--font-display`: `"Cormorant Garamond", ui-serif, Georgia, serif`
- `--font-sans`: `"DM Sans", ui-sans-serif, system-ui, sans-serif`

### Font weights
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)

### Headline sizes
- Hero / section főcím: `text-[clamp(2.5rem,4.4vw,64px)]`
- Contact / card cím: `text-[clamp(1.4rem,2vw,28px)]`
- Kártya alcím: `text-[clamp(1.5rem,2.5vw,32px)]`
- Jogi oldalak H1: `text-[clamp(2rem,4vw,40px)]`
- Jogi oldalak H2: `text-xl`

### Body sizes
- Fő törzsszöveg: `text-[clamp(1rem,1.2vw,18px)]`
- Kisebb törzsszöveg: `text-[clamp(0.95rem,1.1vw,16px)]`
- Meta/label: `text-sm`, `text-xs`, `text-[10px]`, `text-[11px]`

### Line-height and tracking
- Törzsszöveg: `leading-[1.8]`
- Form heading/copy: `leading-relaxed`
- Label/metadata tracking:
  - `tracking-[0.18em]`
  - `tracking-[0.14em]`
  - `tracking-[0.12em]`
  - `tracking-[0.24em]`
  - `tracking-[0.01em]`

## Colors

### Core dark backgrounds
- `#0b0f0a`
- `#10150f`
- `#1a1f18`
- `#0f1410`
- `#0a0d0a`

### Green brand/accent palette
- `#A3B86C`
- `#8FAE3C`
- `#7F7F01`
- `#5d7c34`
- `#5f7f2f`
- `#6f8f35`
- `#7fa33c`
- `#93b44c`
- `#b8d96b`
- `#C7DD8A`
- `#9DB85A`
- `#4f6f2f`

### Neutral/utility
- White variants: `text-white`, `text-white/90`, `text-white/85`, `text-white/80`, `text-white/70`, `text-white/65`, `text-white/60`, `text-white/55`, `text-white/50`, `text-white/40`
- Border white variants: `border-white/10`, `border-white/20`
- Overlay blacks: `bg-black/20`, `bg-black/40`, `bg-black/60`

### Shadow/glow rgba values
- `rgba(0,0,0,0.18)`
- `rgba(0,0,0,0.24)`
- `rgba(0,0,0,0.45)`
- `rgba(0,0,0,0.5)`
- `rgba(132,160,56,0.18)`
- `rgba(147,180,76,0.28)`
- `rgba(255,255,255,0.06)`
- `rgba(255,255,255,0.15)`

## Reusable style patterns

### Section container
- Horizontal spacing: `px-4 md:px-10 lg:px-[132px]`
- Vertical spacing: `py-20 lg:py-28`
- Anchor offset: `scroll-mt-[78px]`

### Section heading pattern
- `font-bold text-[clamp(2.5rem,4.4vw,64px)] text-white mb-8 lg:mb-12 text-left`

### Body copy pattern
- `text-[clamp(1rem,1.2vw,18px)] leading-[1.8] text-white/90`

### Form input pattern (Contact)
- `rounded-2xl border border-white/10 bg-black/20`
- Focus: `focus:ring-[#8FAE3C]/40`, `focus:border-[#8FAE3C]/40`

## Notes
- A `text-primary` utility több helyen használatban van. Ha később tokenizálni szeretnéd, érdemes egy konkrét hex értékre mappelni központi configban.
- A projekt jelenleg erősen dark-theme orientált, zöld akcentussal.
