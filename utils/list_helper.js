const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;
  return blogs.reduce((favorite, blog) =>
    blog.likes > favorite.likes ? blog : favorite
  );
};

const dummyBlogs = [
  {
    title: "Go To Statement Considered Harmful",
    author: "Yann LeCun",
  },
  {
    title: "Neural Networks Explained",
    author: "Yann LeCun",
  },
  {
    title: "Refactoring Without Fear",
    author: "Kent Beck",
  },
  {
    title: "The Dangers of Premature Optimization",
    author: "Edsger W. Dijkstra",
  },
  {
    title: "Understanding Async/Await",
    author: "Yann LeCun",
  },
  {
    title: "Deep Learning Architectures",
    author: "Yann LeCun",
  },
  {
    title: "Design Patterns That Work",
    author: "Mary Shaw",
  },
  {
    title: "Extreme Programming Practices",
    author: "Kent Beck",
  },
  {
    title: "A Case Against Global Variables",
    author: "Edsger W. Dijkstra",
  },
  {
    title: "JSON Format and Standards",
    author: "Douglas Crockford",
  },
  {
    title: "Functional Programming in JavaScript",
    author: "Mary Shaw",
  },
  {
    title: "Introduction to Machine Learning",
    author: "Yann LeCun",
  },
  {
    title: "Continuous Integration Setup",
    author: "Kent Beck",
  },
  {
    title: "Building Scalable Systems",
    author: "Mary Shaw",
  },
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
  },
  {
    title: "Data Science Best Practices",
    author: "Yann LeCun",
  },
  {
    title: "Code Review Best Practices",
    author: "Mary Shaw",
  },
  {
    title: "Structured Programming and Its Benefits",
    author: "Edsger W. Dijkstra",
  },
  {
    title: "Test-Driven Development",
    author: "Kent Beck",
  },
  {
    title: "Web Security Fundamentals",
    author: "Douglas Crockford",
  },
];
const mostBlogs = (blogs) => {
  let authorBlogCounts = [];

  blogs.forEach((blog) => {
    if (authorBlogCounts.some((a) => a.author === blog.author)) {
      let existingAuthor = authorBlogCounts.find(
        (a) => a.author == blog.author
      );
      existingAuthor.blogs++;
    } else {
      authorBlogCounts = [
        ...authorBlogCounts,
        { author: blog.author, blogs: 1 },
      ];
    }
  });

  return authorBlogCounts.reduce(
    (maxAuthor, authors) =>
      authors.blogs > maxAuthor ? authors.blog : maxAuthor,
    authorBlogCounts[0]
  );
};

mostBlogs(dummyBlogs);

export default {
  dummy,
  totalLikes,
  favoriteBlog,
};

/*
_id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
*/
