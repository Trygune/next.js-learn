import WINDOW from '@/utils/window'
const useLocalStorage = (key) => {
  const getValue = () => {
    return WINDOW.localStorage.getItem(key)
  }
  const setValue = (value) => {
    return WINDOW.localStorage.setItem(key, value)
  }
  const value = getValue()
  return [value, setValue]
}

export default useLocalStorage
