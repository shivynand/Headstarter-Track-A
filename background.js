chrome.runtime.onInstalled.addListener(function () {
  // Fetch internship data from the API
  fetchInternships()
    .then((recentInternships) => {
      // Store the recent internships in chrome.storage
      chrome.storage.sync.set({ recentInternships: recentInternships });
    })
    .catch((error) => {
      console.error("Error fetching internships:", error);
      // Store an empty array in chrome.storage to indicate an error
      chrome.storage.sync.set({ recentInternships: [] });
    });
});

function fetchInternships() {
  return fetch("https://api.example.com/internships")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch internships");
      }
      return response.json();
    })
    .then((data) => {
      // Filter internships that were posted within the last 24 hours
      const now = new Date();
      const recentInternships = data.filter((internship) => {
        const postDate = new Date(internship.postDate);
        return now - postDate < 24 * 60 * 60 * 1000;
      });
      return recentInternships;
    });
}
