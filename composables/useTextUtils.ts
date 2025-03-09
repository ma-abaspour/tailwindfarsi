export const useTextUtils = () => {
  const truncateText = (text: string, maxLength: number = 100) => {
    if (text && text.length > maxLength) {
      return text.slice(0, maxLength) + '...'
    }
    return text
  }

  return {
    truncateText
  }
}
