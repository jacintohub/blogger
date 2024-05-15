import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import MainContent from './components/MainContent';
import PostList from './components/PostList';
import postsData from './posts.json';

function App() {
  const [posts, setPosts] = useState(postsData);
  // Define o primeiro post como padrão se existir algum post
  const [selectedPost, setSelectedPost] = useState(posts[0] || null);

  const handleSearchChange = searchTerm => {
    if (searchTerm.length < 3) {
      setPosts(postsData);
      setSelectedPost(postsData[0] || null);
    } else {
      const filteredPosts = postsData.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setPosts(filteredPosts);
      setSelectedPost(filteredPosts[0] || null);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container mx-auto px-4 " style={{ maxWidth: '1100px' }}>
        <h1 className="text-4xl font-bold text-center my-12">Bem-vindo ao Meu Blog</h1>
        <SearchBar onSearchChange={handleSearchChange} />
        <div className="flex">
          <MainContent post={selectedPost} />
          <PostList posts={posts} onSelectPost={setSelectedPost} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
