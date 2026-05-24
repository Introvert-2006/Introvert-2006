# AI Editing Guide

Use this template when you want AI to update the portfolio data in this project.

## Main file to edit

- `lib/portfolio-data.ts` contains the site content.
- `app/layout.tsx` reads the owner data for SEO and JSON-LD.
- `example.env` shows the environment variable the site expects.

## What you can ask AI to change

- Add more shorts or full videos.
- Update titles, descriptions, tags, and platform names.
- Replace thumbnail URLs or video URLs.
- Update the owner name, bio, socials, or stats.
- Change SEO text in the portfolio data if needed.

## Data structure

The portfolio data uses this structure:

```ts
portfolioData = {
  portfolio_owner: {
    name,
    title,
    email,
    instagram,
    discord,
    about,
  },
  shorts: [
    {
      id,
      title,
      category,
      description,
      tag,
      platform,
      url,
      thumbnailUrl,
      videoUrl?,
      embedUrl?,
    },
  ],
  videos: [
    {
      id,
      title,
      category,
      description,
      tag,
      platform,
      url,
      thumbnailUrl,
      videoUrl?,
      embedUrl?,
    },
  ],
}
```

## Best practices for adding content

- Use a unique `id` for every new item.
- Keep `url` as the main project or source link.
- Add `thumbnailUrl` for every item.
- Use `videoUrl` for direct MP4/WEBM files.
- Use `embedUrl` for YouTube, Vimeo, Drive previews, or other embeddable players.
- Keep URLs absolute and publicly reachable.

## Example prompt to give AI

Copy this and replace the details:

> Please edit `lib/portfolio-data.ts` and add 3 new video entries under `videos`. Keep the same style as the existing data. Use these titles, descriptions, tags, URLs, and thumbnail links: ... Also update the owner bio if needed, but do not change the layout or component files.

## If thumbnails do not load

- Prefer public image URLs or a proxy URL.
- You can also place images in `public/` and reference them with `/filename.png`.
