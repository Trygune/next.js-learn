let WINDOW = {}
if (process.browser) {
  WINDOW = window
} else {
  WINDOW = {
    document: {
      location: {},
    },
    localStorage: {
      getItem: () => {},
      setItem: () => {},
    },
  }
}

export default WINDOW
