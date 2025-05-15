const form = document.getElementById("form")
let data = {}
let Html
function validEmail(e) {
  var filter =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/
  return String(e).search(filter) != -1
}
function handleSubmision(e) {
  e.preventDefault()
  const formData = new FormData(form)
  data = Object.fromEntries(formData.entries())
  console.log("inside", { email: data.email })

  let error = {}

  Html = form.innerHTML

  console.log(Html)

  if (!data.email) {
    error[email] = "Required Field"
    document.querySelector(".error").textContent = error.email
  }

  if (!validEmail(data.email)) {
    error[email] = "Not Valid Email"
  }

  console.log(JSON.stringify(error) === "{}")
  if (JSON.stringify(error) === "{}") {
    document.querySelector(".form-submit-button").disabled = true
    setTimeout(() => {
      console.log(document.querySelector(".success"))
      this.classList.remove("active")
      document.querySelector(".illustration-image").style.display = "none"
      document.querySelector("main").classList.add("active")
      document.querySelector(".success").classList.add("active")
    }, 1000)
  }
}

form.addEventListener("submit", handleSubmision)

console.log("outside", data)

function handleDismiss(e) {
  form.innerHTML = Html
  form.classList.add("active")
  document.querySelector(".success").classList.remove("active")
  console.log(document.querySelector(".success"))
  document.querySelector(".illustration-image").style.display = "block"
  document.querySelector("main").classList.remove("active")
}

// when the page render set the image to suit the size
if (window.innerWidth <= 768) {
  document.querySelector("img.illustration-image").src =
    "assets/images/illustration-sign-up-mobile.svg"
}

window.addEventListener("resize", (e) => {
  // Handle images
  if (window.innerWidth > 768) {
    document.querySelector("img.illustration-image").src =
      "assets/images/illustration-sign-up-desktop.svg"
  } else {
    document.querySelector("img.illustration-image").src =
      "assets/images/illustration-sign-up-mobile.svg"
  }
  console.log(window.innerWidth)
})
