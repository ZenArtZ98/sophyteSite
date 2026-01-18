import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-300 pt-5 text-sm text-gray-300">
      <span>© Sophyte. Все права защищены.</span>
      <a
        className="ml-2 hover:underline"
        href="https://sophyte.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        sophyte.ru
      </a>
    </div>
  </Section>
);

export { Footer };
