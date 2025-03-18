import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import PostCard from './components/postcard';

function App() {
  const initialPosts = [
    {
      id: 1,
      profilePic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
      username: 'ALICE',
      content: 'This is my first post!',
      isLiked: false,
    },
    {
      id: 2,
      profilePic: 'src/assets/WhatsApp Image 2025-03-18 at 10.27.07_ff9107c2.jpg',
      username: 'BALAGIRI',
      content: 'Loving this social media app.',
      isLiked: true,
    },
    {
      id: 3,
      profilePic: 'src/assets/WhatsApp Image 2025-03-18 at 10.27.03_d3152693.png',
      username: 'ARUNACHALAM',
      content: 'Just another day...',
      isLiked: false,
    },
  ];

  return (
    <div style={{ width: "400px", margin: "auto", padding: "20px" }}>
      <h2>Posts</h2>
      {initialPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
