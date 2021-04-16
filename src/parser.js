const chalk = require("chalk");
const { forEach } = require("lodash");
const layouts = require("atherdon-newsletter-js-layouts");
const reactLayouts = require("atherdon-newsletter-react");

const { parse, parseFullTHing } = require("./parse");
const { write, readFile, displayCLIErrors, checkWarnings,writeReactComponent } = require("./utils");
const {
  parseMDReact,
  parseMDReactFullThing,
} = require("./parserMDReact/parseMDReact");

const FULL_SOURCE = "source/source-full.md";
const CONTENT_SOURCE = "source/source.md";

switch (process.env.PARSE) {
  case "full":
    generateFullTemplate();
    break;
  case "reactContentOnly":
    //same as default, but with react components instead.
    generateReactContent();
    break;
  case "reactFull":
    generateReactFullTemplate();
    break;
  default:
    generateContentOnly();
    break;
}

function generateFullTemplate() {
  const parsedContent = parseFullTHing({ source: FULL_SOURCE });
  checkWarnings(parsedContent.warnings);

  const fileName = "full-template" + Date.now() + ".html";
  const fullContent = layouts.fullTemplate(parsedContent.content);
  write(fileName, fullContent);

  var message = "The full-template has been parsed successfully";
  console.log(chalk.green.bold(message));
}

function generateReactContent() {
  const parsedContent = parseMDReact(CONTENT_SOURCE);
  // console.log("parsedContent", parsedContent);
  checkWarnings(parsedContent.warnings);
  const fileName = "Content" + Date.now() + ".js";
  writeReactComponent(fileName, parsedContent.content);
  var message = "The Content has been parsed successfully";
  console.log(chalk.green.bold(message));
}

function generateReactFullTemplate() {
  const parsedContent = parseMDReactFullThing({ source: FULL_SOURCE });
  checkWarnings(parsedContent.warnings);

  const fileName = "FullTemplate" + Date.now() + ".js";
  const fullContent = reactLayouts.reactFullTemplate(parsedContent.content);
  write(fileName, fullContent);

  var message = "The FullTemplate has been parsed successfully";
  console.log(chalk.green.bold(message));
}

function generateContentOnly() {
  const parsedContent = parse(CONTENT_SOURCE);
  checkWarnings(parsedContent.warnings);

  const fileName = "content" + Date.now() + ".html";
  write(fileName, parsedContent.content);

  var message = "The content has been parsed successfully";
  console.log(chalk.green.bold(message));
}

module.exports = {
  generateContentOnly,
  generateFullTemplate,
};
