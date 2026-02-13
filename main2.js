document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "image1"
    var images = document.querySelectorAll(".image1");
  
    // Function to set random position for an element
    function setRandomPosition(element) {
      element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
      element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    }
  
    // Set random position for each image
    images.forEach(function (image) {
      setRandomPosition(image);
    });
  });
  
  function angry() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  
    absImg.style.display = "flex";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
    });
  }
  function happy() {
    // get all image with class image1 and change the src
    var images = document.querySelectorAll(".image1");
    var absImg = document.getElementById("absImg");
    absImg.style.display = "flex";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  
    images.forEach(function (image) {
      image.src = "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
    });
  }
  
  const sadCat = [
    "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
    "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
    "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
    "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
    "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
    "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
  ];
  
  const blackmail = [
    "Please",
    "I'm begging you",
    "I'm crying",
    "I'm sad",
    "HUHUHUHU",
    "Please Say Yes",
    "I'm gonna cry",
  ];
  
  function normal() {
    var absImg = document.getElementById("absImg");
    absImg.style.display = "none";
    var mainImg = document.getElementById("mainImg");
    mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
  }
  
  let counter = 0;
  let noButtonRunning = false;
  
  function no() {
    counter++;
    
    // After 5 clicks, make the No button run away from cursor inside modal
    if (counter >= 5) {
      const noBtn = document.getElementById("no");
      const model = document.getElementById("model");
      const modelContent = model.querySelector(".model-content");
      
      // Show the modal first
      model.style.display = "flex";
      
      // Show sad cat
      const modelImage = document.getElementById("modelImg");
      const modelText = document.getElementById("modelText");
      modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
      modelText.innerText = "Try to catch the No button! 😏";
      
      // Hide only the modal's No button, keep Yes button visible
      const modalNoButton = document.getElementById("modalNoButton");
      if (modalNoButton) {
        modalNoButton.style.display = "none";
      }
      
      // Keep the modal's Yes button visible and in place
      const modalYesButton = document.getElementById("modalYesButton");
      if (modalYesButton) {
        modalYesButton.style.display = "inline-block";
      }
      
      // Make the main No button fixed positioned and move it into modal
      noBtn.style.position = "fixed";
      noBtn.style.transition = "all 0.3s ease";
      noBtn.style.zIndex = "9999";
      
      // Position it initially in the center of the modal
      const modalRect = modelContent.getBoundingClientRect();
      noBtn.style.left = (modalRect.left + modalRect.width / 2 - 50) + "px";
      noBtn.style.top = (modalRect.top + modalRect.height / 2) + "px";
      
      // Enable running mode
      noButtonRunning = true;
      
      // Add mousemove listener to make button run away
      document.addEventListener("mousemove", runAwayFromCursor);
      
      return;
    }
    
    let sadMusic = document.getElementById("sadMusic");
    let happyMusic = document.getElementById("happyMusic");
    happyMusic.pause();
    sadMusic.play();
    let model = document.getElementById("model");
    model.style.display = "none";
    setTimeout(() => {
      model.style.display = "flex";
      const modelImage = document.getElementById("modelImg");
      const modelText = document.getElementById("modelText");
      modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
      modelText.innerText =
        blackmail[Math.floor(Math.random() * blackmail.length)];
    }, 100);
  }
  
  function runAwayFromCursor(e) {
    if (!noButtonRunning) return;
    
    const noBtn = document.getElementById("no");
    const model = document.getElementById("model");
    const modelContent = model.querySelector(".model-content");
    
    if (!modelContent) return;
    
    const btnRect = noBtn.getBoundingClientRect();
    const modalRect = modelContent.getBoundingClientRect();
    
    const btnCenterX = btnRect.left + btnRect.width / 2;
    const btnCenterY = btnRect.top + btnRect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate distance between cursor and button
    const distance = Math.sqrt(
      Math.pow(mouseX - btnCenterX, 2) + Math.pow(mouseY - btnCenterY, 2)
    );
    
    // If cursor is within 150px of button, move it away
    if (distance < 150) {
      // Calculate direction away from cursor
      const angle = Math.atan2(btnCenterY - mouseY, btnCenterX - mouseX);
      
      // Calculate new position (move away from cursor)
      let newX = btnCenterX + Math.cos(angle) * 100;
      let newY = btnCenterY + Math.sin(angle) * 100;
      
      // Keep button inside modal bounds
      const minX = modalRect.left + 20;
      const maxX = modalRect.right - btnRect.width - 20;
      const minY = modalRect.top + 20;
      const maxY = modalRect.bottom - btnRect.height - 20;
      
      newX = Math.max(minX, Math.min(maxX, newX));
      newY = Math.max(minY, Math.min(maxY, newY));
      
      noBtn.style.left = newX + "px";
      noBtn.style.top = newY + "px";
    }
  }
  
  function yes() {
    if (counter >= 3) {
        // Stop the No button from running away
        noButtonRunning = false;
        document.removeEventListener("mousemove", runAwayFromCursor);
        
        // Hide the No button
        const noBtn = document.getElementById("no");
        if (noBtn) {
            noBtn.style.display = "none";
        }
        
        let model = document.getElementById("model2");
        let model2 = document.getElementById("model");
        let sadMusic = document.getElementById("sadMusic");
        sadMusic.pause();
        model2.style.display = "none";
        let happyMusic = document.getElementById("happyMusic");
        happyMusic.play();
        model.style.display = "none";
        setTimeout(() => {
            model.style.display = "flex";
        }, 100);
        const wedate = document.getElementById("wedate");
        const btns = document.getElementById("btns");
        btns.style.display = "none";
        wedate.innerText = "We are each other's valentine now. I love you cutie. ❤️😘";

        // Show SURPRISE button after 2 seconds
        setTimeout(() => {
            const surpriseBtn = document.getElementById("surpriseBtn");
            surpriseBtn.style.display = "block";
        }, 2000);

    } else {
        alert("Don't say yes right away, cutie. Play around a bit 😉😘");
    }
}

function showSurprise() {
    // Stop all previous music
    const happyMusic = document.getElementById("happyMusic");
    const sadMusic = document.getElementById("sadMusic");
    if (happyMusic) happyMusic.pause();
    if (sadMusic) sadMusic.pause();
    
    // Transition to flower page in same tab
    document.getElementById("valentinePage").classList.add("hidden");
    const flowerPage = document.getElementById("flowerPage");
    flowerPage.classList.add("active");
    flowerPage.classList.remove("not-loaded");
    
    // Play flower page music
    const flowerMusic = document.getElementById("flowerMusic");
    if (flowerMusic) {
        flowerMusic.play();
    }
}

  
  function ly2() {
    let model = document.getElementById("model2");
    model.style.display = "none";
    let model2 = document.getElementById("model");
    model2.style.display = "none";
  }
  
