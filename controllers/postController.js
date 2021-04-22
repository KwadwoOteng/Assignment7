import Post from "../model/Post";
import User from "../model/User";

export const getAllPost = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({ posts });
};

export const getPost = async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findById(postId);
  res.status(200).json({ post });
};

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    // create post
    const userId = req.user;
    const post = await Post.create({ title, content, user: userId });

    // add post to user
    const user = await User.findById(userId);
    user.posts.push(post._id);
    await user.save();

    // return post
    res.status(201).json({ post });
  }catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findByIdAndUpdate(postId, req.body, { new: true });
  res.status(200).json({ post });
};

export const deletePost = async (req, res) => {
  const { postId } = req.params;
  await Post.findByIdAndDelete(postId);
  res.status(200).json({ message: "Post deleted sucessfully." });
};
