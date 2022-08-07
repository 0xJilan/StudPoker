const isKingAndAce = (deckSortedByValues) => {
  const isAce = deckSortedByValues.filter((card) => card === "A").length >= 1;
  const isKing = deckSortedByValues.filter((card) => card === "B").length >= 1;
  return isAce && isKing;
};

const isFlush = (deckSortedBySuits) => {
  return deckSortedBySuits[0] === deckSortedBySuits[4];
};

const isRoyalFlush = (sortedValues, sortedSuits) => {
  const isHighStraight = sortedValues.join("") === "ABCDE";
  return isHighStraight && isFlush(sortedSuits);
};

const isStraight = (deckSortedByValues) => {
  const isLowStraight = deckSortedByValues.join("") === "AJKLM";
  const first = deckSortedByValues[0].charCodeAt(0);
  return (
    deckSortedByValues.every((f, index) => f.charCodeAt(0) - first === index) ||
    isLowStraight
  );
};

const countDuplicatesValues = (deckSortedByValues) => {
  const count = {};
  deckSortedByValues.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  const countConvertInArrayForFiltration = Object.entries(count).filter(
    ([key, value]) => value > 1
  );
  if (
    countConvertInArrayForFiltration.length > 1 &&
    countConvertInArrayForFiltration[0][1] ===
      countConvertInArrayForFiltration[1][1]
  ) {
    return {
      2:
        countConvertInArrayForFiltration[1][0] +
        countConvertInArrayForFiltration[1][0],
    };
  } else {
    const DuplicatesValuesFormatted = {};
    const inObject = Object.fromEntries(countConvertInArrayForFiltration);
    Object.keys(inObject).forEach((key) => {
      DuplicatesValuesFormatted[inObject[key]] = key;
    });
    return DuplicatesValuesFormatted;
  }
};

const convertLetterToNumericValue = (letter, objectOfLetterValues) => {
  let valueOfLetter;
  switch (letter) {
    case "A":
      valueOfLetter = 14;
      break;
    case "B":
      valueOfLetter = 13;
      break;
    case "C":
      valueOfLetter = 12;
      break;
    case "D":
      valueOfLetter = 11;
      break;
    default:
      valueOfLetter = objectOfLetterValues[letter];
  }
  return valueOfLetter;
};

export {
  isKingAndAce,
  isFlush,
  isRoyalFlush,
  isStraight,
  countDuplicatesValues,
};
