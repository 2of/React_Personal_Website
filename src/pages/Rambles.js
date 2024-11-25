import React from "react";
import styles from './Rambles.module.css';

// Placeholder dummy data (you can later replace this with data fetched from a JSON file)
const fakeBlogPosts = [
  {
    id: 1,
    title: "A Walk Through the Old Town",
    date: "March 5, 2024",
    location: "Old Town, NY",
    content: "A quiet stroll through the old town reveals hidden gems and beautiful architecture.",
    image: "https://picsum.photos/500/300?random=1", // Lorem Picsum random image
  },
  {
    id: 2,
    title: "The Majestic Mountain Views",
    date: "April 14, 2024",
    location: "Rocky Mountains, CO",
    content: "Hiking up the rocky mountains gives you some of the most breathtaking views of nature.",
    image: "https://picsum.photos/500/300?random=2", // Lorem Picsum random image
  },
  {
    id: 3,
    title: "Exploring Hidden Beaches",
    date: "June 1, 2024",
    location: "Malibu, CA",
    content: "Tucked away along the coastline, these beaches are perfect for a peaceful getaway.",
    image: "https://picsum.photos/500/300?random=3", // Lorem Picsum random image
  },
  {
    id: 4,
    title: "The Art District Adventure",
    date: "July 23, 2024",
    location: "Downtown, LA",
    content: "The art district in LA offers unique experiences, with street art and galleries around every corner.",
    image: "https://picsum.photos/500/300?random=4", // Lorem Picsum random image
  },
];

const RamblesPage = () => {
  return (
    <div className={styles.ramblesPage}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Rambles and Adventures</h1>
        <h2 className={styles.pageSubtitle}>Tales from my travels and adventures around the world</h2>
      </header>

      <div className={styles.blogPosts}>
        {fakeBlogPosts.map((post, index) => (
          <div
            key={post.id}
            className={`${styles.blogPost} ${index % 2 === 0 ? styles.blogPostLight : styles.blogPostDark} }`}
          >
            {/* Alternating the image position using flex direction */}
            <div
              className={`${styles.blogPostContentWrapper} ${index % 2 === 0 ? styles.leftImage : styles.rightImage}`}
            >
              <img src={post.image} alt={post.title} className={styles.blogPostImage} />
              <div className={styles.blogPostContent}>
                <h3 className={styles.blogPostTitle}>{post.title}</h3>
                <p className={styles.blogPostMeta}>
                  {post.date} | {post.location}
                </p>
                <p className={styles.blogPostDescription}>{post.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RamblesPage;