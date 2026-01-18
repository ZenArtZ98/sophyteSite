import { GradientText, Section } from 'astro-boilerplate-components';

const Hero = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <div id="about">
      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="md:w-7/12">
            <h1 className="text-3xl font-bold md:text-4xl">
              <GradientText>Sophyte</GradientText> — платформа для
              инди‑разработки игр
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-300">
              Sophyte — онлайн‑платформа для инди‑разработчиков видеоигр,
              объединяющая проекты, ассеты и геймджемы в одном пространстве.
              Сервис предоставляет инструменты для ведения разработки,
              публикации игр и взаимодействия с сообществом, помогая авторам
              сосредоточиться на создании продукта.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-full bg-[#E8B00A] px-5 py-2 text-sm font-semibold text-[#454545] hover:bg-[#D9A40A]"
                href="https://sophyte.ru"
                target="_blank"
                rel="noopener noreferrer"
              >
                Перейти на сайт
              </a>
            </div>
          </div>
          <div className="md:w-5/12">
            <div className="rounded-2xl border-2 border-gray-300 bg-slate-800 p-4">
              <img
                className="w-full rounded-xl"
                src={`${base}assets/images/screenEditors.png`}
                alt="Скриншот интерфейса Sophyte"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export { Hero };
