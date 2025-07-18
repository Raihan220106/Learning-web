export interface Profile {
  id: string
  email: string
  full_name: string
  avatar_url?: string
  phone?: string
  created_at: string
  updated_at: string
}

export interface Course {
  id: string
  title: string
  description: string
  instructor_id: string
  price: number
  image_url?: string
  category: string
  level: string
  duration: string
  lessons_count: number
  created_at: string
}

export interface Enrollment {
  id: string
  user_id: string
  course_id: string
  progress: number
  enrolled_at: string
  completed_at?: string
}
