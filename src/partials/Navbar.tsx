import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <Section>
      <NavbarTwoColumns>
        <a href="https://sophyte.ru" target="_blank" rel="noopener noreferrer">
          <Logo
            icon={
              <img
                className="mr-2 h-10 w-10"
                src={`${base}assets/images/logo.png`}
                alt="Sophyte logo"
                loading="lazy"
              />
            }
            name="Sophyte"
          />
        </a>

        <NavMenu>
          <NavMenuItem href="#about">О проекте</NavMenuItem>
          <NavMenuItem href="#features">Функционал</NavMenuItem>
          <NavMenuItem href="#screens">Скриншоты</NavMenuItem>
          <NavMenuItem href="#support">Поддержка</NavMenuItem>
          <NavMenuItem href="https://sophyte.ru" target="_blank">
            Перейти на сайт
          </NavMenuItem>
        </NavMenu>
      </NavbarTwoColumns>
    </Section>
  );
};

export { Navbar };
