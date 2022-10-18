//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getFetch)

document.querySelector('iframe').style.display = 'none'
document.querySelector('div').style.display = 'none'
document.querySelector('img').style.display = 'none'

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=hd9r2asEQdy1oQRXRnRfahXblLW7cAfvIvDgZwod&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        if(data.media_type === 'image') {
          document.querySelector('img').style.display = 'block'
          document.querySelector('img').src = data.url
        } else if(data.media_type === 'video') {
          document.querySelector('img').style.display = 'none'
          document.querySelector('div').style.display = 'block'
          document.querySelector('iframe').style.display = 'block'
          document.querySelector('iframe').src = data.url
        }

        document.querySelector('#name').innerText = data.title
        document.querySelector('p').innerText = data.explanation
        document.querySelector('h3').innerText = data.date
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}