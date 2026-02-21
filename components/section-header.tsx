'use client';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  emoji?: string;
}

const marvelQuotes: { [key: string]: string } = {
  events:
    "With great power comes great... competition! Let's see what you're made of.",
  schedule: 'Time to suit up. Here\'s your battle plan.',
  vendors: 'Even heroes need fuel. Refuel here.',
  map: 'Know your terrain. Here\'s the battlefield layout.',
};

export function SectionHeader({ title, subtitle, emoji }: SectionHeaderProps) {
  const quote =
    marvelQuotes[title.toLowerCase()] ||
    "Shall we begin? Here's what awaits you, sir or madam.";

  return (
    <div className="text-center space-y-4 mb-12">
      <div className="flex items-center justify-center gap-3">
        {emoji && <span className="text-4xl">{emoji}</span>}
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {title}
          </span>
        </h2>
      </div>
      <p className="text-lg text-foreground max-w-2xl mx-auto">{subtitle}</p>
      <p className="text-sm text-cyan-300 italic font-light">
        "{quote}"
      </p>
    </div>
  );
}
