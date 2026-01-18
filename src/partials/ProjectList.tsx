import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <div id="features">
      <Section
        title={
          <>
            Ключевой <GradientText>функционал</GradientText>
          </>
        }
      >
        <div className="flex flex-col gap-6">
          <div className="project-card">
            <Project
              name="Проекты и публикации"
              description="Управление игровыми проектами и публикация игр в едином рабочем пространстве."
              link="https://sophyte.ru"
              img={{
                src: `${base}assets/images/gameProject.png`,
                alt: 'Скриншот раздела проектов',
              }}
              category={
                <>
                  <Tags color={ColorTags.AMBER}>Проекты</Tags>
                  <Tags color={ColorTags.ORANGE}>Публикации</Tags>
                  <Tags color={ColorTags.YELLOW}>Команда</Tags>
                </>
              }
            />
          </div>
          <div className="project-card">
            <Project
              name="Ассеты и обмен"
              description="Каталог ассетов с возможностью обмена, распространения и быстрого доступа к ресурсам."
              link="https://sophyte.ru"
              img={{
                src: `${base}assets/images/assets.png`,
                alt: 'Скриншот каталога ассетов',
              }}
              category={
                <>
                  <Tags color={ColorTags.AMBER}>Каталог</Tags>
                  <Tags color={ColorTags.ORANGE}>Обмен</Tags>
                  <Tags color={ColorTags.YELLOW}>Ресурсы</Tags>
                </>
              }
            />
          </div>
          <div className="project-card">
            <Project
              name="Геймджемы и сообщество"
              description="Участие в геймджемах и мероприятиях, личный кабинет разработчика и взаимодействие с сообществом."
              link="https://sophyte.ru"
              img={{
                src: `${base}assets/images/gameJams.png`,
                alt: 'Скриншот раздела геймджемов',
              }}
              category={
                <>
                  <Tags color={ColorTags.AMBER}>Геймджемы</Tags>
                  <Tags color={ColorTags.ORANGE}>Сообщество</Tags>
                  <Tags color={ColorTags.YELLOW}>Профиль</Tags>
                </>
              }
            />
          </div>
          <div className="project-card">
            <Project
              name="Встроенные редакторы"
              description="Редакторы для работы с текстом, кодом, графикой и звуком — все для полноценного продакшена."
              link="https://sophyte.ru"
              img={{
                src: `${base}assets/images/editors.png`,
                alt: 'Скриншот встроенных редакторов',
              }}
              category={
                <>
                  <Tags color={ColorTags.AMBER}>Текст</Tags>
                  <Tags color={ColorTags.ORANGE}>Код</Tags>
                  <Tags color={ColorTags.YELLOW}>Медиа</Tags>
                </>
              }
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export { ProjectList };
