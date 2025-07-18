"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Play, Clock, Award, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DashboardPage() {
  const user = {
    name: "Ahmad Rizki",
    email: "ahmad.rizki@email.com",
    avatar: "/images/student-avatar-1.jpg",
    joinDate: "Januari 2024",
    totalCourses: 5,
    completedCourses: 2,
    certificates: 2,
    studyHours: 48,
  }

  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      instructor: "Dr. Ahmad Wijaya",
      image: "/images/web-development-course.jpg",
      progress: 75,
      totalLessons: 45,
      completedLessons: 34,
      lastAccessed: "2 hari lalu",
      nextLesson: "React Components",
      category: "Programming",
    },
    {
      id: 2,
      title: "Digital Marketing Strategy",
      instructor: "Sarah Putri",
      image: "/images/digital-marketing-course.jpg",
      progress: 100,
      totalLessons: 32,
      completedLessons: 32,
      lastAccessed: "1 minggu lalu",
      nextLesson: "Selesai",
      category: "Marketing",
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Maya Sari",
      image: "/images/ui-ux-design-course.jpg",
      progress: 45,
      totalLessons: 38,
      completedLessons: 17,
      lastAccessed: "3 hari lalu",
      nextLesson: "User Research Methods",
      category: "Design",
    },
  ]

  const recentActivity = [
    {
      type: "lesson_completed",
      title: "Menyelesaikan 'JavaScript Functions'",
      course: "Web Development Fundamentals",
      time: "2 jam lalu",
    },
    {
      type: "quiz_passed",
      title: "Lulus Quiz HTML Basics",
      course: "Web Development Fundamentals",
      time: "1 hari lalu",
    },
    {
      type: "certificate_earned",
      title: "Mendapat Sertifikat Digital Marketing",
      course: "Digital Marketing Strategy",
      time: "1 minggu lalu",
    },
    {
      type: "course_started",
      title: "Memulai kursus baru",
      course: "UI/UX Design Masterclass",
      time: "2 minggu lalu",
    },
  ]

  const certificates = [
    {
      id: 1,
      title: "Digital Marketing Strategy",
      instructor: "Sarah Putri",
      completedDate: "15 Desember 2024",
      image: "/images/certificate-template.jpg",
    },
    {
      id: 2,
      title: "Introduction to Programming",
      instructor: "Dr. Budi Santoso",
      completedDate: "28 November 2024",
      image: "/images/certificate-template.jpg",
    },
  ]

  const upcomingDeadlines = [
    {
      title: "Final Project - Web Development",
      course: "Web Development Fundamentals",
      dueDate: "25 Januari 2025",
      daysLeft: 5,
    },
    {
      title: "Quiz - Design Principles",
      course: "UI/UX Design Masterclass",
      dueDate: "30 Januari 2025",
      daysLeft: 10,
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
            <Link href="/dashboard" className="text-blue-600 font-medium">
              Dashboard
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Selamat datang kembali, {user.name}!</h1>
          <p className="text-gray-600">Lanjutkan perjalanan belajar Anda hari ini</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold">{user.totalCourses}</div>
                  <div className="text-sm text-gray-600">Kursus Diikuti</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <div>
                  <div className="text-2xl font-bold">{user.completedCourses}</div>
                  <div className="text-sm text-gray-600">Kursus Selesai</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8 text-yellow-600" />
                <div>
                  <div className="text-2xl font-bold">{user.certificates}</div>
                  <div className="text-sm text-gray-600">Sertifikat</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-8 w-8 text-purple-600" />
                <div>
                  <div className="text-2xl font-bold">{user.studyHours}</div>
                  <div className="text-sm text-gray-600">Jam Belajar</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="courses" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="courses">Kursus Saya</TabsTrigger>
                <TabsTrigger value="activity">Aktivitas</TabsTrigger>
                <TabsTrigger value="certificates">Sertifikat</TabsTrigger>
              </TabsList>

              <TabsContent value="courses" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Kursus yang Sedang Diikuti</h2>
                  <Link href="/courses">
                    <Button variant="outline">Jelajahi Kursus</Button>
                  </Link>
                </div>

                <div className="space-y-6">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={200}
                            height={120}
                            className="w-48 h-32 object-cover"
                          />
                          <div className="flex-1 p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <Badge className="mb-2">{course.category}</Badge>
                                <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                                <p className="text-sm text-gray-600">oleh {course.instructor}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-blue-600">{course.progress}%</div>
                                <div className="text-sm text-gray-500">selesai</div>
                              </div>
                            </div>

                            <Progress value={course.progress} className="mb-4" />

                            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                              <span>
                                {course.completedLessons}/{course.totalLessons} pelajaran
                              </span>
                              <span>Terakhir diakses: {course.lastAccessed}</span>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                {course.progress < 100 ? (
                                  <div className="text-sm">
                                    <span className="text-gray-600">Selanjutnya: </span>
                                    <span className="font-medium">{course.nextLesson}</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span className="text-sm font-medium text-green-600">Kursus Selesai</span>
                                  </div>
                                )}
                              </div>
                              <Link href={`/courses/${course.id}/learn`}>
                                <Button>
                                  {course.progress < 100 ? (
                                    <>
                                      <Play className="h-4 w-4 mr-2" />
                                      Lanjutkan
                                    </>
                                  ) : (
                                    "Lihat Ulang"
                                  )}
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <h2 className="text-2xl font-bold">Aktivitas Terbaru</h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            {activity.type === "lesson_completed" && (
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              </div>
                            )}
                            {activity.type === "quiz_passed" && (
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <Star className="h-4 w-4 text-blue-600" />
                              </div>
                            )}
                            {activity.type === "certificate_earned" && (
                              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                <Award className="h-4 w-4 text-yellow-600" />
                              </div>
                            )}
                            {activity.type === "course_started" && (
                              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                <Play className="h-4 w-4 text-purple-600" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-gray-600">{activity.course}</p>
                            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certificates" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Sertifikat Saya</h2>
                  <Button variant="outline">Unduh Semua</Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {certificates.map((cert) => (
                    <Card key={cert.id} className="overflow-hidden">
                      <div className="relative">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-yellow-500">Sertifikat</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-1">{cert.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">oleh {cert.instructor}</p>
                        <p className="text-xs text-gray-500 mb-4">Diselesaikan: {cert.completedDate}</p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">
                            Unduh PDF
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            Bagikan
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <CardTitle>Profil Saya</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="text-lg">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">Bergabung {user.joinDate}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Edit Profil
                </Button>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Belajar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Kursus Selesai</span>
                      <span>
                        {user.completedCourses}/{user.totalCourses}
                      </span>
                    </div>
                    <Progress value={(user.completedCourses / user.totalCourses) * 100} />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{user.studyHours}</div>
                      <div className="text-xs text-gray-600">Jam Belajar</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{user.certificates}</div>
                      <div className="text-xs text-gray-600">Sertifikat</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle>Deadline Mendatang</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="border-l-4 border-orange-400 pl-4">
                      <h4 className="font-medium text-sm">{deadline.title}</h4>
                      <p className="text-xs text-gray-600">{deadline.course}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">{deadline.dueDate}</span>
                        <Badge variant={deadline.daysLeft <= 7 ? "destructive" : "secondary"}>
                          {deadline.daysLeft} hari lagi
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Streak */}
            <Card>
              <CardHeader>
                <CardTitle>Streak Belajar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">7</div>
                  <p className="text-sm text-gray-600 mb-4">Hari berturut-turut</p>
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                      <div key={day} className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Pertahankan streak Anda!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
