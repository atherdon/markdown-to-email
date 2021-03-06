import {
  replaceHTMLWrapper,
  newLine
} from '../helpers';

function mem(text, src, href, altText) {
  const config = {
    src: src.trim(),
    altText: altText.trim(),
    href: href.trim(),
  };

  const result = replaceHTMLWrapper('image', config);

  return result;
}

function separator() {
  const config = {};

  const replaced = replaceHTMLWrapper(
    'separator',
    config,
  );

  const result = newLine + replaced + newLine;

  //   const result = `${newLine}${replaceHTMLWrapper(
  //     'separator',
  //     config,
  //   )}${newLine}`;

  return result;
}

export {
  mem,
  separator,
};
