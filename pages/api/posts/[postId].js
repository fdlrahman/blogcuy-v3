import data from "../data";

export default function handler(req, res) {
  const { postId } = req.query;
  const { Posts } = data;

  if (postId) {
    const post = Posts.find((post) => post.id == postId);
    return res.status(200).json(post);
  }

  return res.status(204);
}
