export const transformString = (input: string | undefined): string => {
  if (!input)  return ""
  const words = input.split(/[_\s]+/) || []
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  const result = capitalizedWords.join(' ')

  return result
};