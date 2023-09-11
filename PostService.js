const Post = require("./Post");
class PostService {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }
  async getAll() {
    const post = await Post.find();
    return post;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("NO ID");
    }
    const post = await Post.findById(id);
    return post;
  }
  async update(post) {

      if (!post._id) {
        throw new Error("NO ID");
      }
      const updatePost = await Post.findByIdAndUpdate(post._id, post, {
        new: true,
      });
      return updatePost
  }
  async delete(id) {
    if(!id){
        throw new Error("NO ID");
    }
      const post = await Post.findByIdAndDelete(id);
      return post
  }
}

module.exports = new PostService();
