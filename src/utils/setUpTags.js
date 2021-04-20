const setUpTags = (recipes) => {
  const allTags = {};

  //counts tags
  recipes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });

  //grouping and sorting tags by their string content and sorting
  //them in alpha order
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    //localeCompare compares strings based on their text
    return firstTag.localeCompare(secondTag);
  });
  return newTags;
};
export default setUpTags;
