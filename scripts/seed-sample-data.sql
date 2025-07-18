-- Insert sample courses
INSERT INTO courses (
  title, 
  description, 
  price, 
  original_price, 
  image_url, 
  category, 
  level, 
  duration, 
  lessons_count, 
  total_hours, 
  rating, 
  students_count
) VALUES 
(
  'Web Development Fundamentals',
  'Pelajari dasar-dasar pengembangan web dari HTML, CSS, hingga JavaScript',
  299000,
  399000,
  '/images/web-development-course.jpg',
  'Programming',
  'Pemula',
  '12 minggu',
  45,
  '24 jam',
  4.8,
  1234
),
(
  'Digital Marketing Strategy',
  'Strategi pemasaran digital yang efektif untuk bisnis modern',
  199000,
  299000,
  '/images/digital-marketing-course.jpg',
  'Marketing',
  'Menengah',
  '8 minggu',
  32,
  '16 jam',
  4.9,
  856
),
(
  'Data Science dengan Python',
  'Analisis data dan machine learning menggunakan Python',
  399000,
  499000,
  '/images/data-science-course.jpg',
  'Data Science',
  'Lanjutan',
  '16 minggu',
  68,
  '40 jam',
  4.7,
  2341
),
(
  'UI/UX Design Masterclass',
  'Desain antarmuka dan pengalaman pengguna yang menarik',
  249000,
  349000,
  '/images/ui-ux-design-course.jpg',
  'Design',
  'Menengah',
  '10 minggu',
  38,
  '20 jam',
  4.8,
  1567
),
(
  'Mobile App Development',
  'Pengembangan aplikasi mobile dengan React Native',
  349000,
  449000,
  '/images/mobile-app-course.jpg',
  'Programming',
  'Lanjutan',
  '14 minggu',
  52,
  '30 jam',
  4.6,
  987
),
(
  'Content Marketing Strategy',
  'Strategi pemasaran konten yang efektif dan engaging',
  179000,
  249000,
  '/images/content-marketing-course.jpg',
  'Marketing',
  'Pemula',
  '6 minggu',
  24,
  '12 jam',
  4.7,
  743
);

-- Insert sample lessons for Web Development course
INSERT INTO lessons (course_id, title, description, duration, order_index, lesson_type, is_free)
SELECT 
  c.id,
  lesson_data.title,
  lesson_data.description,
  lesson_data.duration,
  lesson_data.order_index,
  lesson_data.lesson_type,
  lesson_data.is_free
FROM courses c,
(VALUES 
  ('Apa itu Web Development?', 'Pengenalan dasar tentang pengembangan web', '12:00', 1, 'video', true),
  ('Tools yang dibutuhkan', 'Software dan tools untuk web development', '8:30', 2, 'video', true),
  ('Setup development environment', 'Mengatur lingkungan pengembangan', '15:45', 3, 'video', false),
  ('HTML syntax dan structure', 'Mempelajari struktur HTML', '18:20', 4, 'video', false),
  ('CSS styling basics', 'Dasar-dasar styling dengan CSS', '22:15', 5, 'video', false),
  ('JavaScript fundamentals', 'Pengenalan JavaScript', '25:30', 6, 'video', false),
  ('Quiz: Web Development Basics', 'Test pemahaman dasar', '10:00', 7, 'quiz', false),
  ('Project: Build your first website', 'Membuat website pertama', '45:00', 8, 'project', false)
) AS lesson_data(title, description, duration, order_index, lesson_type, is_free)
WHERE c.title = 'Web Development Fundamentals';
