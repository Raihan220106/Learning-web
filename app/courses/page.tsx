"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Search, Star, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      instructor: "Dr. Ahmad Wijaya",
      students: 1234,
      rating: 4.8,
      price: "Rp 299.000",
      originalPrice: "Rp 399.000",
      image: "/images/web-development-course.jpg",
      category: "Programming",
      level: "Pemula",
      duration: "12 minggu",
      lessons: 45,
      description: "Pelajari dasar-dasar pengembangan web dari HTML, CSS, hingga JavaScript",
    },
    {
      id: 2,
      title: "Digital Marketing Strategy",
      instructor: "Sarah Putri",
      students: 856,
      rating: 4.9,
      price: "Rp 199.000",
      originalPrice: "Rp 299.000",
      image: "/images/digital-marketing-course.jpg",
      category: "Marketing",
      level: "Menengah",
      duration: "8 minggu",
      lessons: 32,
      description: "Strategi pemasaran digital yang efektif untuk bisnis modern",
    },
    {
      id: 3,
      title: "Data Science dengan Python",
      instructor: "Prof. Budi Santoso",
      students: 2341,
      rating: 4.7,
      price: "Rp 399.000",
      originalPrice: "Rp 499.000",
      image: "/images/data-science-course.jpg",
      category: "Data Science",
      level: "Lanjutan",
      duration: "16 minggu",
      lessons: 68,
      description: "Analisis data dan machine learning menggunakan Python",
    },
    {
      id: 4,
      title: "UI/UX Design Masterclass",
      instructor: "Maya Sari",
      students: 1567,
      rating: 4.8,
      price: "Rp 249.000",
      originalPrice: "Rp 349.000",
      image: "/images/ui-ux-design-course.jpg",
      category: "Design",
      level: "Menengah",
      duration: "10 minggu",
      lessons: 38,
      description: "Desain antarmuka dan pengalaman pengguna yang menarik",
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "Rizki Pratama",
      students: 987,
      rating: 4.6,
      price: "Rp 349.000",
      originalPrice: "Rp 449.000",
      image: "/images/mobile-app-course.jpg",
      category: "Programming",
      level: "Lanjutan",
      duration: "14 minggu",
      lessons: 52,
      description: "Pengembangan aplikasi mobile dengan React Native",
    },
    {
      id: 6,
      title: "Content Marketing Strategy",
      instructor: "Dina Maharani",
      students: 743,
      rating: 4.7,
      price: "Rp 179.000",
      originalPrice: "Rp 249.000",
      image: "/images/content-marketing-course.jpg",
      category: "Marketing",
      level: "Pemula",
      duration: "6 minggu",
      lessons: 24,
      description: "Strategi pemasaran konten yang efektif dan engaging",
    },
  ]

  const categories = ["all", "Programming", "Marketing", "Design", "Data Science", "Business"]
  const levels = ["all", "Pemula", "Menengah", "Lanjutan"]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel

    return matchesSearch && matchesCategory && matchesLevel
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">EduKelas</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Beranda
            </Link>
            <Link href="/courses" className="text-blue-600 font-medium">
              Kursus
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Masuk</Button>
            </Link>
            <Link href="/register">
              <Button>Daftar</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Semua Kursus</h1>
          <p className="text-xl text-gray-600">Temukan kursus yang tepat untuk mengembangkan skill Anda</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Cari kursus atau instruktur..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                {categories.slice(1).map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Level</SelectItem>
                {levels.slice(1).map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan {filteredCourses.length} dari {courses.length} kursus
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-blue-600">{course.category}</Badge>
                  <Badge variant="secondary">{course.level}</Badge>
                </div>
                {course.originalPrice && <Badge className="absolute top-4 right-4 bg-red-500">Diskon</Badge>}
              </div>
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                <CardDescription>oleh {course.instructor}</CardDescription>
                <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.lessons} pelajaran</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.students})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{course.students} siswa</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                      {course.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                      )}
                    </div>
                    <Link href={`/courses/${course.id}`}>
                      <Button>Lihat Detail</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak ada kursus ditemukan</h3>
            <p className="text-gray-600">Coba ubah filter pencarian Anda</p>
          </div>
        )}
      </div>
    </div>
  )
}
