CREATE DATABASE blogdb;
USE blogdb;

-- Tabel users
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);

INSERT INTO users (id, name) VALUES
(1, 'John Doe'),
(2, 'Robert'),
(3, 'Frank'),
(4, 'Jane');

-- Tabel blog_posts
CREATE TABLE blog_posts (
  id INT PRIMARY KEY,
  title VARCHAR(100),
  body TEXT,
  author_id INT,
  FOREIGN KEY (author_id) REFERENCES users(id)
);

INSERT INTO blog_posts (id, title, body, author_id) VALUES
(1, 'Algorithm', 'this is article for algorithm', 1),
(2, 'Lorem Ipsum', 'lorem ipsum dolor sit amet', 1),
(3, 'NodeJS', 'Node.js is a JavaScript runtime built on Chrome''s V8 JavaScript engine.', 2),
(4, 'ReactJS', 'ReactJS is JavaScript library for building user interfaces', 4),
(5, 'Git', 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency', 3),
(6, 'Basketball', 'Basketball is a team sport...', 2);

-- Tabel categories
CREATE TABLE categories (
  id INT PRIMARY KEY,
  name VARCHAR(50)
);

INSERT INTO categories (id, name) VALUES
(1, 'Basic'),
(2, 'Library'),
(3, 'Unknown'),
(4, 'Sport');

-- Tabel relasi post_categories (Many-to-Many)
CREATE TABLE post_categories (
  post_id INT,
  category_id INT,
  FOREIGN KEY (post_id) REFERENCES blog_posts(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO post_categories (post_id, category_id) VALUES
(1,1),
(2,3),
(3,1),
(3,3),
(2,4),
(2,4),
(1,5), -- <- kemungkinan typo di soal, abaikan baris ini karena 5 tidak ada di category
(5,1),
(6,4);


SELECT blog_posts.*
FROM blog_posts
JOIN users ON blog_posts.author_id = users.id
WHERE users.name = 'John Doe';


SELECT c.name AS category_name, p.title AS post_title, u.name AS author_name
FROM blog_posts p
JOIN users u ON p.author_id = u.id
JOIN post_categories pc ON p.id = pc.post_id
JOIN categories c ON pc.category_id = c.id
WHERE c.name = 'Basic';


SELECT c.name AS category_name, p.title, p.body
FROM blog_posts p
JOIN users u ON p.author_id = u.id
JOIN post_categories pc ON p.id = pc.post_id
JOIN categories c ON pc.category_id = c.id
WHERE u.name IN ('Robert', 'Frank');


SELECT DISTINCT u.name AS author_name, c.name AS category_name
FROM blog_posts p
JOIN users u ON p.author_id = u.id
JOIN post_categories pc ON p.id = pc.post_id
JOIN categories c ON pc.category_id = c.id
WHERE p.id IN (
  SELECT post_id
  FROM post_categories
  GROUP BY post_id
  HAVING COUNT(category_id) >= 2
);



SELECT u.name AS author_name, p.title AS post_title
FROM blog_posts p
JOIN users u ON p.author_id = u.id
WHERE p.id IN (
  SELECT post_id
  FROM post_categories
  GROUP BY post_id
  HAVING COUNT(category_id) = 1
);
