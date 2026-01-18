import { GradientText, Section } from 'astro-boilerplate-components';

const Support = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <div id="support">
      <Section
        title={
          <>
            Поддержка <GradientText>проекта</GradientText>
          </>
        }
      >
        <div className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-gray-300">
            Проект создан при поддержке федерального государственного учреждения
            «Фонд содействия развитию малых форм предприятий в
            научно‑технической сфере» в рамках программы «Студенческий стартап»
            федерального проекта «Платформа университетского технологического
            предпринимательства».
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <img
              className="h-16 w-auto"
              src={`${base}assets/images/fasie_logo.png`}
              alt="Фонд содействия инновациям"
              loading="lazy"
            />
            <img
              className="h-16 w-auto"
              src={`${base}assets/images/platform_logo.png`}
              alt="Платформа университетского технологического предпринимательства"
              loading="lazy"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export { Support };
