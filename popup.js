document.addEventListener("DOMContentLoaded", function () {
  const internshipsContainer = document.getElementById("internships-container");
  const errorContainer = document.getElementById("error-container");

  // Retrieve the recent internships from chrome.storage
  chrome.storage.sync.get("recentInternships", function (data) {
    const recentInternships = data.recentInternships;

    if (recentInternships.length === 0) {
      // Display an error message if there was a problem fetching the internships
      errorContainer.textContent = "Error fetching internship data.";
    } else {
      // Display the recent internships in the popup
      recentInternships.forEach((internship) => {
        const internshipElement = document.createElement("div");
        internshipElement.classList.add("internship");
        internshipElement.innerHTML = `
          <h3>${internship.title}</h3>
          <p>${internship.company}</p>
          <p>${internship.location}</p>
          <p>Posted: ${new Date(internship.postDate).toLocaleString()}</p>
        `;
        internshipsContainer.appendChild(internshipElement);
      });
    }
  });
});
