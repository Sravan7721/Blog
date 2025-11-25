// Blog data
const blogPosts = [
  { id: 1, title: "Getting Started with React", description: "Learn the basics of React and how to build your first application with this comprehensive guide.", date: "May 15, 2023", readTime: "5 min read" },
  { id: 2, title: "Mastering Tailwind CSS", description: "Discover advanced techniques to customize and extend Tailwind CSS for your projects.", date: "June 2, 2023", readTime: "8 min read" },
  { id: 3, title: "State Management in Modern Apps", description: "Explore different state management solutions and when to use each in your applications.", date: "June 20, 2023", readTime: "10 min read" },
  { id: 4, title: "Building Accessible Web Applications", description: "Learn how to create web applications that are accessible to all users.", date: "July 5, 2023", readTime: "7 min read" },
  { id: 5, title: "The Future of CSS", description: "Explore upcoming CSS features and how they'll change the way we style websites.", date: "July 18, 2023", readTime: "6 min read" },
  { id: 6, title: "Optimizing Web Performance", description: "Practical techniques to improve your website's loading speed and user experience.", date: "August 3, 2023", readTime: "9 min read" }
];

// Inject blog cards into HTML
const blogContainer = document.getElementById("blogContainer");

blogPosts.forEach(post => {
  blogContainer.innerHTML += `
    <div class="card">
      <div class="card-img"></div>

      <div class="card-body">
        <h3 class="card-title">${post.title}</h3>
        <p class="card-meta">${post.date} • ${post.readTime}</p>
        <p class="card-desc">${post.description}</p>
        <button class="card-btn">Read More</button>
      </div>
    </div>
  `;
});

// Mobile Menu Toggle
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
