"use client";

interface InstagramEmbedProps {
    url: string;
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
    // Extract the ID from the URL (works for /p/ and /reel/)
    const match = url.match(/\/(?:p|reel)\/([a-zA-Z0-9_-]+)/);
    const id = match ? match[1] : null;

    if (!id) return null;

    return (
        <div className="w-full relative bg-zinc-900 rounded-xl overflow-hidden border border-white/10" style={{ paddingBottom: '125%' }}>
            <iframe
                src={`https://www.instagram.com/p/${id}/embed/captioned/`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
            />
        </div>
    );
}
