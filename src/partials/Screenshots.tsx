import { GradientText, Section } from 'astro-boilerplate-components';
import { useEffect, useState } from 'react';

const SCREENSHOTS = [
  {
    src: 'assets/images/screenProfile.png',
    alt: 'Плейсхолдер скриншота 1',
  },
  {
    src: 'assets/images/screenJams.png',
    alt: 'Плейсхолдер скриншота 2',
  },
  {
    src: 'assets/images/screenProject.png',
    alt: 'Плейсхолдер скриншота 3',
  },
];

const Screenshots = () => {
  const base = import.meta.env.BASE_URL;
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!activeSrc) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveSrc(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [activeSrc]);

  return (
    <div id="screens">
      <Section
        title={
          <>
            Скриншоты <GradientText>интерфейса</GradientText>
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {SCREENSHOTS.map((shot) => (
            <button
              key={shot.src}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-300"
              type="button"
              onClick={() => setActiveSrc(`${base}${shot.src}`)}
            >
              <img
                className="h-48 w-full object-cover transition-transform duration-200 group-hover:scale-105"
                src={`${base}${shot.src}`}
                alt={shot.alt}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </Section>

      {activeSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр скриншота"
          onClick={() => setActiveSrc(null)}
        >
          <div className="max-h-full max-w-5xl">
            <img
              className="h-full max-h-[85vh] w-full rounded-2xl border-2 border-gray-300 object-contain"
              src={activeSrc}
              alt="Увеличенный скриншот"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export { Screenshots };
