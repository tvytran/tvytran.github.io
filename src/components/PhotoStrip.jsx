// Drop photos into src/assets/photos/ and they show up here automatically.
// Known filenames get cute captions; anything else falls back to its name.
const captions = {
  nails: 'fresh set 💅',
  matcha: 'homemade matcha 🍵',
  me: 'dinner ♡',
  kbbq: 'kbbq night 🥢',
  flowers: 'lego wildflowers 🌷',
}

const photos = Object.entries(
  import.meta.glob('../assets/photos/*.{png,jpg,jpeg,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
).map(([path, url]) => {
  const name = path.split('/').pop().replace(/\.[^.]+$/, '')
  return { name, url, caption: captions[name] || name }
})

export default function PhotoStrip() {
  if (photos.length === 0) return null

  return (
    <div className="mt-8">
      <h2 className="text-peri-deep font-bold text-lg mb-3">little moments</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {photos.map(({ name, url, caption }) => (
          <figure key={name} className="shrink-0 w-32 md:w-36">
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl border-2 border-peri/40 overflow-hidden bg-peri-pale">
              <img src={url} alt={caption} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <figcaption className="text-xs text-peri-text font-semibold text-center mt-1.5">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
