


const likeButtons = document.querySelectorAll('.like');
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
      button.setAttribute('src','./images/heart.svg'); 
    } else {
      button.setAttribute('src','./images/heart-outline.svg');
    }
  })
})

const favButtons = document.querySelectorAll('.fav');
favButtons.forEach(button => {

  button.addEventListener('click', () => {
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
      button.setAttribute('src','./images/eye.svg'); 
    } else {
      button.setAttribute('src','./images/eye-plus-outline.svg');
    }
  })

  button.addEventListener('mouseout', () => {
    if (button.classList.contains('active')) {
      button.setAttribute('src','./images/eye.svg'); 
    } else {
      button.setAttribute('src','./images/eye-plus-outline.svg'); 
    }
  })

  button.addEventListener('mouseover', () => {
    if (button.classList.contains('active')) {
      button.setAttribute('src','./images/eye-remove.svg'); 
    } else {
      button.setAttribute('src','./images/eye-plus-outline.svg'); 

    }
  })
})
