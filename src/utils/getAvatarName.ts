export const getAvatarName = (text: string | null): string => {
  if (!text || text.trim().length === 0) {
    return "CP";
  }

  const wordArr = text.split(" ").filter(Boolean);
  if (wordArr.length === 1) {
    return wordArr[0].substr(0, 1).toLocaleUpperCase();
  }
  return `${wordArr[0].charAt(0).toLocaleUpperCase()}${wordArr[1].charAt(0).toLocaleUpperCase()}`;
};
