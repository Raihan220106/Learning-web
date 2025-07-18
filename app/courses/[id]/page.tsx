"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Star, Clock, Users, Play, CheckCircle, Award, Download, Share2, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = {
    id: 1,
    title: "Web Development Fundamentals",
    instructor: "Dr. Ahmad Wijaya",
    instructorImage: "/images/instructor-ahmad.jpg",
    instructorBio: "Senior Web Developer dengan 10+ tahun pengalaman di industri teknologi",
    students: 1234,
    rating: 4.8,
    reviews: 456,
    price: "Rp 299.000",
    originalPrice: "Rp 399.000",
    image: "/images/web-development-course.jpg",
    category: "Programming",
    level: "Pemula",
    duration: "12 minggu",
    lessons: 45,
    totalHours: "24 jam",
    language: "Bahasa Indonesia",
    certificate: true,
    description:
      "Kursus komprehensif untuk mempelajari dasar-dasar pengembangan web modern. Mulai dari HTML, CSS, JavaScript hingga framework populer seperti React. Cocok untuk pemula yang ingin memulai karir sebagai web developer.",
    whatYouLearn: [
      "HTML5 dan semantic markup",
      "CSS3 dan responsive design",
      "JavaScript ES6+ dan DOM manipulation",
      "React.js fundamentals",
      "Git version control",
      "Deployment dan hosting website",
    ],
    requirements: [
      "Komputer dengan akses internet",
      "Tidak perlu pengalaman programming sebelumnya",
      "Motivasi untuk belajar dan berlatih",
    ],
    curriculum: [
      {
        title: "Pengenalan Web Development",
        lessons: 5,
        duration: "2 jam",
        topics: [
          "Apa itu Web Development?",
          "Tools yang dibutuhkan",
          "Setup development environment",
          "Struktur project web",
          "Quiz: Dasar Web Development",
        ],
      },
      {
        title: "HTML Fundamentals",
        lessons: 8,
        duration: "4 jam",
        topics: [
          "HTML syntax dan structure",
          "HTML elements dan attributes",
          "Forms dan input types",
          "Semantic HTML",
          "HTML5 features",
          "Accessibility basics",
          "Project: Membuat halaman profil",
          "Quiz: HTML Fundamentals",
        ],
      },
      {
        title: "CSS Styling",
        lessons: 10,
        duration: "5 jam",
        topics: [
          "CSS syntax dan selectors",
          "Box model dan layout",
          "Flexbox dan Grid",
          "Responsive design",
          "CSS animations",
          "CSS preprocessors",
          "Project: Styling halaman profil",
          "Project: Responsive navigation",
          "Project: CSS animations",
          "Quiz: CSS Styling",
        ],
      },
      {
        title: "JavaScript Basics",
        lessons: 12,
        duration: "6 jam",
        topics: [
          "JavaScript syntax",
          "Variables dan data types",
          "Functions dan scope",
          "DOM manipulation",
          "Event handling",
          "Async JavaScript",
          "ES6+ features",
          "Error handling",
          "Project: Interactive calculator",
          "Project: Todo list app",
          "Project: Weather app",
          "Quiz: JavaScript Basics",
        ],
      },
      {
        title: "React Introduction",
        lessons: 8,
        duration: "5 jam",
        topics: [
          "What is React?",
          "Components dan JSX",
          "Props dan State",
          "Event handling in React",
          "Conditional rendering",
          "Lists dan keys",
          "Project: React todo app",
          "Quiz: React Basics",
        ],
      },
      {
        title: "Final Project",
        lessons: 2,
        duration: "2 jam",
        topics: ["Project planning", "Building portfolio website"],
      },
    ],
  }

  const reviews = [
    {
      id: 1,
      name: "Sari Dewi",
      avatar: "/images/student-avatar-1.jpg",
      rating: 5,
      date: "2 minggu lalu",
      comment:
        "Kursus yang sangat bagus! Penjelasan mudah dipahami dan project-projectnya sangat membantu untuk memahami konsep.",
    },
    {
      id: 2,
      name: "Budi Hartono",
      avatar: "/images/student-avatar-2.jpg",
      rating: 5,
      date: "1 bulan lalu",
      comment: "Instruktur sangat berpengalaman dan materi disusun dengan sangat baik. Recommended untuk pemula!",
    },
    {
      id: 3,
      name: "Maya Putri",
      avatar: "/images/instructor-maya.jpg",
      rating: 4,
      date: "1 bulan lalu",
      comment: "Materi lengkap dan up-to-date. Hanya saja pace-nya agak cepat untuk benar-benar pemula.",
    },
  ]

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
            <Link href="/courses" className="text-gray-700 hover:text-blue-600">
              Kursus
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              Simpan
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Bagikan
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-600">{course.category}</Badge>
                <Badge variant="secondary">{course.level}</Badge>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.description}</p>

              <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                  <span>({course.reviews} ulasan)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students} siswa</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.totalHours}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.lessons} pelajaran</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={course.instructorImage || "/placeholder.svg"} alt={course.instructor} />
                  <AvatarFallback>
                    {course.instructor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{course.instructor}</h3>
                  <p className="text-sm text-gray-600">{course.instructorBio}</p>
                </div>
              </div>
            </div>

            {/* Course Video Preview */}
            <div className="mb-8">
              <div className="relative bg-black rounded-lg overflow-hidden">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="rounded-full h-16 w-16 p-0">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Course Details Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Kurikulum</TabsTrigger>
                <TabsTrigger value="reviews">Ulasan</TabsTrigger>
                <TabsTrigger value="instructor">Instruktur</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Apa yang akan Anda pelajari</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {course.whatYouLearn.map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Persyaratan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum" className="space-y-4">
                {course.curriculum.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                        <div className="text-sm text-gray-500">
                          {section.lessons} pelajaran • {section.duration}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {section.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded">
                            <Play className="h-4 w-4 text-gray-400" />
                            <span className="text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl font-bold">{course.rating}</div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{course.reviews} ulasan</div>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                          <AvatarFallback>
                            {review.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-medium">{review.name}</h4>
                            <div className="flex items-center space-x-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`h-3 w-3 ${
                                    star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-sm text-gray-700">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="instructor">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-6">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={course.instructorImage || "/placeholder.svg"} alt={course.instructor} />
                        <AvatarFallback className="text-2xl">
                          {course.instructor
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{course.instructor}</h3>
                        <p className="text-gray-600 mb-4">{course.instructorBio}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-medium">Total Siswa</div>
                            <div className="text-gray-600">15,000+</div>
                          </div>
                          <div>
                            <div className="font-medium">Rating Instruktur</div>
                            <div className="text-gray-600">4.9/5</div>
                          </div>
                          <div>
                            <div className="font-medium">Total Kursus</div>
                            <div className="text-gray-600">12</div>
                          </div>
                          <div>
                            <div className="font-medium">Pengalaman</div>
                            <div className="text-gray-600">10+ tahun</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-blue-600">{course.price}</span>
                    {course.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                    )}
                  </div>
                  <Badge className="bg-red-500">Diskon 25%</Badge>
                </div>

                <div className="space-y-4 mb-6">
                  <Button className="w-full" size="lg">
                    Daftar Sekarang
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Coba Gratis
                  </Button>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Durasi:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Jam:</span>
                    <span className="font-medium">{course.totalHours}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Pelajaran:</span>
                    <span className="font-medium">{course.lessons}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Bahasa:</span>
                    <span className="font-medium">{course.language}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Sertifikat:</span>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">Ya</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-3">Kursus ini termasuk:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Play className="h-4 w-4 text-gray-400" />
                      <span>Video pembelajaran HD</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Download className="h-4 w-4 text-gray-400" />
                      <span>Materi dapat diunduh</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-gray-400" />
                      <span>Sertifikat penyelesaian</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>Akses komunitas</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
