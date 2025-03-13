// script.js

// Array of social proof data
const socialProofData = [
  {
    userName: "Wahyudi",
    productName: "AI Untuk Marketing",
    productLink: "https://example.com/ai-marketing",
    productImage: "https://via.placeholder.com/50"
  },
  {
    userName: "Enok",
    productName: "Seblak",
    productLink: "https://example.com/seblak",
    productImage: "https://via.placeholder.com/50"
  },
  {
    userName: "Rina",
    productName: "Kaos Keren",
    productLink: "https://example.com/kaos",
    productImage: "https://via.placeholder.com/50"
  }
];

// DOM Elements
const notificationContainer = document.getElementById("social-proof-notification");
const aiIndonesiaArt = document.getElementById("ai-indonesia-art");
const productImage = document.getElementById("product-image");
const userName = document.getElementById("user-name");
const productLink = document.getElementById("product-link");

let currentIndex = 0;

// Function to update the notification content
function updateNotification() {
  const currentData = socialProofData[currentIndex];
  productImage.src = currentData.productImage;
  userName.textContent = currentData.userName;
  productLink.textContent = currentData.productName;
  productLink.href = currentData.productLink;

  // Show the notification
  notificationContainer.classList.remove("hidden");
  aiIndonesiaArt.classList.add("hidden"); // Hide "AI Indonesia Art"

  // Hide the notification after 5 seconds
  setTimeout(() => {
    notificationContainer.classList.add("hidden");
    aiIndonesiaArt.classList.remove("hidden"); // Show "AI Indonesia Art"
  }, 5000);

  // Move to the next notification
  currentIndex = (currentIndex + 1) % socialProofData.length;
}

// Start the notification cycle
setInterval(updateNotification, 6000); // Change every 6 seconds
