import blackMark from '@/assets/brand/rapid-r-black.png';
import whiteMark from '@/assets/brand/rapid-r-white.png';

type LogoTone = 'light' | 'dark';
type LogoSize = 'sm' | 'md' | 'lg';

interface BrandLogoProps {
  tone?: LogoTone;
  size?: LogoSize;
  className?: string;
}

const sizeClasses: Record<LogoSize, { icon: string; text: string; gap: string }> = {
  sm: {
    icon: 'h-6 w-auto',
    text: 'text-[0.95rem]',
    gap: 'gap-2',
  },
  md: {
    icon: 'h-8 w-auto',
    text: 'text-[1.22rem]',
    gap: 'gap-2.5',
  },
  lg: {
    icon: 'h-10 w-auto',
    text: 'text-[1.45rem]',
    gap: 'gap-3',
  },
};

export function BrandLogo({
  tone = 'dark',
  size = 'md',
  className = '',
}: BrandLogoProps) {
  const markSrc = tone === 'light' ? whiteMark : blackMark;

  const palette = tone === 'light'
    ? {
        rapid: 'text-[#D32A2A]',
        cars: 'text-white',
      }
    : {
        rapid: 'text-[#B71C1C]',
        cars: 'text-[#111111]',
      };

  const sizing = sizeClasses[size];

  return (
    <span className={`inline-flex items-center whitespace-nowrap ${sizing.gap} ${className}`}>
      <img src={markSrc} alt="RapidCars logo" className={sizing.icon} />

      <span
        className={`inline-flex items-baseline leading-none tracking-[-0.035em] italic font-extrabold ${sizing.text}`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <span className={palette.rapid}>Rapid</span>
        <span className={palette.cars}>Cars</span>
      </span>
    </span>
  );
}
