"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  BookOpen,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Settings,
  CheckCircle,
  Lock,
  FileText,
  Download,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

export default function LearnPage({ params }: { params: { id: string } }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(245) // 4:05
  const [duration] = useState(720) // 12:00
  const [selectedLesson, setSelectedLesson] = useState(0)

  const course = {
    id: 1,
    title: "Web Development Fundamentals",
    instructor: "Dr. Ahmad Wijaya",
    totalLessons: 45,
    completedLessons: 12,
    progress: 27,
  }

  const curriculum = [
    {
      title: "Pengenalan Web Development",
      lessons: [
        { id: 1, title: "Apa itu Web Development?", duration: "12:00", completed: true, type: "video" },
        { id: 2, title: "Tools yang dibutuhkan", duration: "8:30", completed: true, type: "video" },
        { id: 3, title: "Setup development environment", duration: "15:45", completed: true, type: "video" },
        { id: 4, title: "Quiz: Dasar Web Development", duration: "10:00", completed: false, type: "quiz" },
      ],
    },
    {
      title: "HTML Fundamentals",
      lessons: [
        { id: 5, title: "HTML syntax dan structure", duration: "18:20", completed: true, type: "video" },
        { id: 6, title: "HTML elements dan attributes", duration: "22:15", completed: true, type: "video" },
        { id: 7, title: "Forms dan input types", duration: "16:40", completed: true, type: "video" },
        { id: 8, title: "Semantic HTML", duration: "14:30", completed: true, type: "video" },
        { id: 9, title: "Project: Membuat halaman profil", duration: "25:00", completed: false, type: "project" },
      ],
    },
    {
      title: "CSS Styling",
      lessons: [
        { id: 10, title: "CSS syntax dan selectors", duration: "20:10", completed: true, type: "video" },
        { id: 11, title: "Box model dan layout", duration: "24:35", completed: true, type: "video" },
        { id: 12, title: "Flexbox dan Grid", duration: "28:45", completed: true, type: "video" },
        { id: 13, title: "Responsive design", duration: "19:20", completed: false, type: "video" },
        { id: 14, title: "CSS animations", duration: "16:55", completed: false, type: "video", locked: true },
      ],
    },
  ]

  const currentLesson =
    curriculum.flatMap((section) => section.lessons).find((lesson) => lesson.id === selectedLesson + 1) ||
    curriculum[0].lessons[0]

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center space-x-2 text-white">
            <BookOpen className="h-6 w-6" />
            <span className="font-semibold">Kembali ke Dashboard</span>
          </Link>
          <div className="flex items-center space-x-4 text-white">
            <div className="text-sm">
              <span className="text-gray-400">Progress: </span>
              <span className="font-medium">
                {course.completedLessons}/{course.totalLessons} pelajaran
              </span>
            </div>
            <Progress value={course.progress} className="w-32" />
            <span className="text-sm font-medium">{course.progress}%</span>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Video Player */}
        <div className="flex-1 flex flex-col">
          {/* Video Area */}
          <div className="flex-1 bg-black relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">📹</div>
                <h2 className="text-2xl font-bold mb-2">{currentLesson.title}</h2>
                <p className="text-gray-300">Durasi: {currentLesson.duration}</p>
              </div>
            </div>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={togglePlay}>
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <SkipBack className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <SkipForward className="h-5 w-5" />
                </Button>
                <div className="flex items-center space-x-2 flex-1">
                  <span className="text-white text-sm">{formatTime(currentTime)}</span>
                  <div className="flex-1 bg-gray-600 rounded-full h-1">
                    <div
                      className="bg-blue-500 h-1 rounded-full"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    />
                  </div>
                  <span className="text-white text-sm">{formatTime(duration)}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <Volume2 className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Lesson Info */}
          <div className="bg-white p-6 border-t">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold mb-2">{currentLesson.title}</h1>
                <p className="text-gray-600">
                  {course.title} • oleh {course.instructor}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant={currentLesson.completed ? "default" : "secondary"}>
                  {currentLesson.completed ? "Selesai" : "Belum Selesai"}
                </Badge>
                <Badge variant="outline">{currentLesson.type}</Badge>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button>
                <CheckCircle className="h-4 w-4 mr-2" />
                Tandai Selesai
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Unduh Materi
              </Button>
              <Button variant="outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Diskusi
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar - Course Content */}
        <div className="w-96 bg-white border-l overflow-y-auto">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Konten Kursus</h3>

            <div className="space-y-4">
              {curriculum.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h4 className="font-medium text-gray-900 mb-3">{section.title}</h4>
                  <div className="space-y-2">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lesson.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                          lesson.id === currentLesson.id
                            ? "border-blue-500 bg-blue-50"
                            : lesson.locked
                              ? "border-gray-200 bg-gray-50 cursor-not-allowed"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        }`}
                        onClick={() => !lesson.locked && setSelectedLesson(lesson.id - 1)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            {lesson.locked ? (
                              <Lock className="h-4 w-4 text-gray-400" />
                            ) : lesson.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : lesson.type === "video" ? (
                              <Play className="h-4 w-4 text-gray-600" />
                            ) : lesson.type === "quiz" ? (
                              <FileText className="h-4 w-4 text-blue-600" />
                            ) : (
                              <BookOpen className="h-4 w-4 text-purple-600" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-sm font-medium truncate ${
                                lesson.locked ? "text-gray-400" : "text-gray-900"
                              }`}
                            >
                              {lesson.title}
                            </p>
                            <p className={`text-xs ${lesson.locked ? "text-gray-300" : "text-gray-500"}`}>
                              {lesson.duration}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {sectionIndex < curriculum.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
