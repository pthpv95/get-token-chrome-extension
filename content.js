var token = localStorage.getItem("token")

chrome.runtime.sendMessage({
  token
})
