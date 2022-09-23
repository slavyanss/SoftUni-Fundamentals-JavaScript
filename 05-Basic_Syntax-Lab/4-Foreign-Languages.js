// Basic Syntax, Conditional Statements, and Loops - Lab
// 4. Foreign languages

function foreignLanguages(country) {
  let language = "";

  switch (country) {
    case "England":
    case "USA":
      language = "English";
      break;
    case "Spain":
    case "Argentina":
    case "Mexico":
      language = "Spanish";
      break;
    default:
      language = "unknown";
      break;
  }

  console.log(language);
}

foreignLanguages("USA");
