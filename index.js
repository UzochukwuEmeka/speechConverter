var uttrance = new SpeechSynthesisUtterance()

var voices = []
var voiceSelect = document.querySelector('select')

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices()

  uttrance.voice = voices[0]
  voices.forEach((voice, i) => {
    return (voiceSelect.options[i] = new Option(voice.name, i))
  })
}

voiceSelect.addEventListener('change', () => {
  uttrance.voice = voices[voiceSelect.value]
})

document.querySelector('button').addEventListener('click', () => {
  uttrance.text = document.querySelector('textarea').value
  window.speechSynthesis.speak(uttrance)
})
