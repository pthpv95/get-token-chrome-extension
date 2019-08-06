var tokenBtn = document.getElementById("get-token-btn")
// var sandbox = document.getElementById("sandbox")
// sandbox.onclick = function(e) {}

tokenBtn.onclick = function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, { file: "content.js" })
    chrome.runtime.onMessage.addListener(function(message) {
      if(message && message.token){
        copyClipboard(message.token)
      }
      window.close()
    })
  })
}

function copyClipboard(text){
  const temp = document.createElement("textarea")
  document.body.append(temp)
  temp.value = text
  temp.select()
  document.execCommand("copy")
  temp.remove()
}