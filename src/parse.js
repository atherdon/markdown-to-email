// const {
//   REGEXP_HEADER,
//   REGEXP_IMAGE,
//   REGEXP_LINK,
//   REGEXP_STRONG,
//   REGEXP_DEL,
//   REGEXP_Q,
//   REGEXP_CODE,
//   REGEXP_UL_LIST,
//   REGEXP_OL_LIST,
//   REGEXP_BLOCKQUOTE,
//   REGEXP_HR,
//   REGEXP_PARAGRAPH,
//   REGEXP_EMPTY_UL,
//   REGEXP_EMPTY_OL,
//   REGEXP_BR,
//   REGEXP_EMPTY_BLOCKQUOTE,
//   REGEXP_EM,
//   REGEXP_SPONSORSHIP,
//   REGEXP_HTML_COMMENTS,
//   REGEXP_MEM,
//   REGEXP_PREVIEW_TEXT,
// } = require('atherdon-newsletter-constants');

const { readSourceFile } = require('./utils');

// const {
//   strong,
//   link,
//   blockquote,
//   mem,
//   header,
//   italic,
//   del,
//   q,
//   code,
//   hr,
//   empty,
// } = require('./callbacks-simple');

// const {
//   image,
//   ulList,
//   olList,
//   paragraphWrapper,
//   sponsorship,
//   br,
// //   newLine,
// } = require('./callbacks');

const { newLine, checkErrors } = require('./utils');

const { 
    replaceMarkdown, replaceMarkdownPreviewText 
} = require('./helpers');

// const {
//     comments,
//     strong,
//     em,
//     header,
//     image,
//     link,
//     del,
//     q,
//     code,
//     ul,
//     ol,
//     blockquote,
//     hr,
//     paragraph,
//     emptyUl,
//     emptyOl,
//     emptyBlockquote,
//     br,
//     sponsorship,
//     memes
// } = require('./replace');

const ReplacerObj = require('./replace');


// @todo update this method. I'm sure it can be improved.
function parse(source) {
  const markdown = readSourceFile(source);

  const state = {
    content: markdown,
    previewText: '',
    warnings: {
      images: 0,
    },
    errors: {
      previewText: false,
      sponsorshipTop: false,
      sponsorshipBottom: false,
    },
  };


  ReplacerObj.replaceMDBinded = replaceMarkdown.bind(state);
  ReplacerObj.replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);

    // I WILL JUST DISABLE IT FOR NOW
    // I PROMISE TO GET IT BACK
//   const replaceMDBinded = replaceMarkdown.bind(state);

//   const replaceMDBindedPreviewText = replaceMarkdownPreviewText.bind(state);



//   replaceMDBindedPreviewText(REGEXP_PREVIEW_TEXT);



//   replaceMDBinded(REGEXP_HTML_COMMENTS, empty);

//   replaceMDBinded(REGEXP_STRONG, strong);

//   replaceMDBinded(REGEXP_EM, italic);

//   replaceMDBinded(REGEXP_HEADER, header);

//   replaceMDBinded(REGEXP_IMAGE, image);
//   replaceMDBinded(REGEXP_LINK, link);

//   replaceMDBinded(REGEXP_DEL, del);
//   replaceMDBinded(REGEXP_Q, q);
//   replaceMDBinded(REGEXP_CODE, code);

//   replaceMDBinded(REGEXP_UL_LIST, ulList);
//   replaceMDBinded(REGEXP_OL_LIST, olList);

//   replaceMDBinded(REGEXP_BLOCKQUOTE, blockquote);

//   replaceMDBinded(REGEXP_HR, hr);
//   replaceMDBinded(REGEXP_PARAGRAPH, paragraphWrapper);
//   replaceMDBinded(REGEXP_EMPTY_UL, empty);
//   replaceMDBinded(REGEXP_EMPTY_OL, empty);
//   // this line is generating an error
//   replaceMDBinded(REGEXP_EMPTY_BLOCKQUOTE, newLine);

//   replaceMDBinded(REGEXP_BR, br);
//   replaceMDBinded(REGEXP_SPONSORSHIP, sponsorship);
//   replaceMDBinded(REGEXP_MEM, mem);
//   // console.log( state )


    ReplacerObj.comments();
    ReplacerObj.strong();
    ReplacerObj.em();
    ReplacerObj.header();
    ReplacerObj.image();
    ReplacerObj.link();
    ReplacerObj.del();
    ReplacerObj.q();
    ReplacerObj.code();
    ReplacerObj.ul();
    ReplacerObj.ol();
    ReplacerObj.blockquote();
    ReplacerObj.hr();
    ReplacerObj.paragraph();
    ReplacerObj.emptyUl();
    ReplacerObj.emptyOl();
    // this line is generating an error
    ReplacerObj.emptyBlockquote();
    ReplacerObj.br();
    ReplacerObj.sponsorship();
    ReplacerObj.memes();

    //i'm adding it only because error warning didnt return red stuff    
    checkErrors(state.errors);
    // console.log( state )

  return state;
}

function parseFullTHing(params) {
  const { source } = params;

  return parse(source);
}

module.exports = { parse, parseFullTHing };
