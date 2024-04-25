import { createContext, useState } from 'react';

const PostContext = createContext();

// eslint-disable-next-line react/prop-types
export const PostProvider = ({ children }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <PostContext.Provider value={{ selectedPost, setSelectedPost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;