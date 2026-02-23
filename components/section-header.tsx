'use client';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  emoji?: string;
}

const marvelQuotes: { [key: string]: string } = {
  'command center':
    'With great power comes great… competition! Suit up, hero.',
  'command centre':
    'With great power comes great… competition! Suit up, hero.',
  'vendors & refuel':
    'Even Avengers need fuel. Refuel, recharge, return to battle.',
  'battlefield layout':
    'Know your terrain. A true hero always has a plan.',
};

export function SectionHeader({ title, subtitle, emoji }: SectionHeaderProps) {
  const quote =
    marvelQuotes[title.toLowerCase()] ||
    '"Shall we begin? The universe is counting on you, hero." — J.A.R.V.I.S.';

  return (
    <div className="mb-10 sm:mb-14 px-2">
      {/* Chapter label */}
      <div className="flex items-center gap-3 mb-4">
        <div className="chapter-tag">
          {emoji} {title.toUpperCase()}
        </div>
        {/* red accent line */}
        <div className="flex-1 h-1 bg-gradient-to-r from-[#E8192C] to-transparent" />
      </div>

      {/* Main title */}
      <h2
        className="font-bangers leading-none text-[#F5F5F0] mb-3"
        style={{
          fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
          textShadow: '3px 3px 0 #E8192C, 6px 6px 0 #111',
          letterSpacing: '0.04em',
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      <p className="font-oswald text-[#A0A0A0] text-base sm:text-lg max-w-2xl mb-4">
        {subtitle}
      </p>

      {/* Marvel Quote in thought bubble style */}
      <div
        className="inline-block thought-bubble max-w-xl text-sm sm:text-base"
      >
        <span className="font-oswald text-[#333] italic">{quote}</span>
      </div>
    </div>
  );
}
