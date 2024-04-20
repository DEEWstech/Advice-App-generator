
  const api = "https://api.adviceslip.com/advice";
  const adviceId = document.getElementById("advice-id");
  const adviceText = document.getElementById("advice-text");
  const adviceBtn = document.getElementById("generate-btn")





  const fetchApi = () => {
    fetch(api)
    .then((response)  => {
        response.json().then((data) => {
            console.log(data)
            adviceText.innerHTML = `${data.slip.advice}`
            adviceId.innerHTML =`"${data.slip.id}"`
            
        })
    })
}
adviceBtn.addEventListener("click", fetchApi)
fetchApi()
