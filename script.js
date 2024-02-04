// Wait until the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class "faq-item"
  const faqItems = document.querySelectorAll(".faq-item");

  // Iterate through each FAQ element
  faqItems.forEach((item, index) => {
    // Select the element with the class "question-link" from each FAQ
    const questionLink = item.querySelector(".question-link");

    // Add an event listener to each "question-link" element
    questionLink.addEventListener("click", function () {
      // Close all FAQs except the one being clicked
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          // Remove the "show" class
          otherItem.classList.remove("show");
        }
      });

      // Toggle the "show" class for the clicked FAQ
      item.classList.toggle("show");
    });

    // Add keyboard navigation functionality
    questionLink.addEventListener("keydown", function (event) {
      // Check if the Enter key is pressed
      if (event.key === "Enter") {
        // Prevent the default action of the Enter key
        event.preventDefault();

        // Toggle the "show" class for the clicked FAQ
        item.classList.toggle("show");
      }

      // Check if the arrow keys are pressed for navigation
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        // Prevent the default action of the arrow keys
        event.preventDefault();

        // Calculate the index of the next FAQ to focus
        const nextIndex = event.key === "ArrowDown" ? index + 1 : index - 1;

        // Ensure the index is within the valid range
        if (nextIndex >= 0 && nextIndex < faqItems.length) {
          // Move focus to the next FAQ
          faqItems[nextIndex].querySelector(".question-link").focus();
        }
      }
    });
  });
});
