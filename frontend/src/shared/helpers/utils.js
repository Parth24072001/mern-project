import Cookies from "js-cookie";

const getItemFromCookie = (key) => Cookies.get(key);

const setItemInCookie = (key, value) => Cookies.set(key, value);

export const removeItemInCookie = (key) => Cookies.remove(key);

export { getItemFromCookie, setItemInCookie };

export const ExpenceType = [
  { value: "expense", label: "Credit" },
  { value: "income", label: "Debit" },
];
export const SplitWiseType = [
  { value: "equally", label: "Qqually" },
  { value: "manually", label: "Manually" },
];

export const ExpenceCategory = [
  { value: "food", label: "Food" },
  { value: "housing", label: "Housing" },
  { value: "transportation", label: "Transportation" },
  //   { value: "utilities", label: "Utilities" },
  //   { value: "clothing", label: "Clothing" },
  //   { value: "medical", label: "Medical" },
  //   { value: "insurance", label: "Insurance" },
  //   { value: "personal", label: "Personal" },
  //   { value: "education", label: "Education" },
  //   { value: "entertainment", label: "Entertainment" },
  //   { value: "travel", label: "Travel" },
  //   { value: "gifts", label: "Gifts" },
  //   { value: "savings", label: "Savings" },
  //   { value: "investments", label: "Investments" },
  //   { value: "income", label: "Income" },
  //   { value: "salary", label: "Salary" },
  //   { value: "wages", label: "Wages" },
  //   { value: "bonus", label: "Bonus" },
  //   { value: "tips", label: "Tips" },
  //   { value: "commission", label: "Commission" },
  //   { value: "refund", label: "Refund" },
  //   { value: "reimbursement", label: "Others" },
];

export const capitalizeWords = (sentence) => {
  const englishPattern = /^[A-Za-z\s]+$/;

  const isValidString = englishPattern.test(sentence);

  const wordStartWith = /^[a-zA-Z]/;
  const validWord = wordStartWith.test(sentence);
  if (!isValidString || !sentence) {
    if (/\s/.test(sentence) === false && validWord && sentence !== undefined) {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    } else if (/\s/.test(sentence) === true && sentence !== undefined) {
      const capitalizeWord = sentence.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
      });
      return capitalizeWord;
    }

    return sentence;
  }

  const capitalizeWord = sentence.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
  });
  return capitalizeWord;
};
