import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Clock, Star, Play, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const featuredCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      instructor: "Dr. Ahmad Wijaya",
      students: 1234,
      rating: 4.8,
      price: "Rp 299.000",
      image: "/images/web-development-course.jpg",
      category: "Programming",
      duration: "12 minggu",
    },
    {
      id: 2,
      title: "Digital Marketing Strategy",
      instructor: "Sarah Putri",
      students: 856,
      rating: 4.9,
      price: "Rp 199.000",
      image: "/images/digital-marketing-course.jpg",
      category: "Marketing",
      duration: "8 minggu",
    },
    {
      id: 3,
      title: "Data Science dengan Python",
      instructor: "Prof. Budi Santoso",
      students: 2341,
      rating: 4.7,
      price: "Rp 399.000",
      image: "/images/data-science-course.jpg",
      category: "Data Science",
      duration: "16 minggu",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">EduKelas</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Beranda
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-600">
              Kursus
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              Tentang
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Kontak
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Belajar Online dengan
                <span className="text-blue-600"> Mudah & Efektif</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Tingkatkan skill Anda dengan ribuan kursus online berkualitas tinggi dari instruktur terpercaya. Belajar
                kapan saja, di mana saja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button size="lg" className="w-full sm:w-auto">
                    Mulai Belajar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                    <Play className="mr-2 h-4 w-4" />
                    Lihat Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-learning.jpg"
                alt="Online Learning"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Siswa Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Kursus Tersedia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Instruktur Ahli</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kursus Populer</h2>
            <p className="text-xl text-gray-600">Pilihan terbaik dari ribuan kursus berkualitas</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{course.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription>oleh {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-gray-500">({course.students} siswa)</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <Link href={`/courses/${course.id}`}>
                      <Button>Lihat Detail</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/courses">
              <Button variant="outline" size="lg">
                Lihat Semua Kursus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih EduKelas?</h2>
            <p className="text-xl text-gray-600">Platform pembelajaran online terdepan di Indonesia</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Materi Berkualitas</h3>
              <p className="text-gray-600">Konten pembelajaran yang disusun oleh para ahli di bidangnya</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Komunitas Aktif</h3>
              <p className="text-gray-600">Bergabung dengan ribuan siswa dan instruktur dalam komunitas belajar</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sertifikat Resmi</h3>
              <p className="text-gray-600">Dapatkan sertifikat yang diakui industri setelah menyelesaikan kursus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Siap Memulai Perjalanan Belajar Anda?</h2>
          <p className="text-xl text-blue-100 mb-8">Bergabunglah dengan ribuan siswa yang telah merasakan manfaatnya</p>
          <Link href="/register">
            <Button size="lg" variant="secondary">
              Daftar Sekarang Gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">EduKelas</span>
              </div>
              <p className="text-gray-400">
                Platform pembelajaran online terpercaya untuk mengembangkan skill dan karir Anda.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kursus</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/courses/programming">Programming</Link>
                </li>
                <li>
                  <Link href="/courses/design">Design</Link>
                </li>
                <li>
                  <Link href="/courses/marketing">Marketing</Link>
                </li>
                <li>
                  <Link href="/courses/business">Business</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about">Tentang Kami</Link>
                </li>
                <li>
                  <Link href="/careers">Karir</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Kontak</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Dukungan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help">Pusat Bantuan</Link>
                </li>
                <li>
                  <Link href="/privacy">Kebijakan Privasi</Link>
                </li>
                <li>
                  <Link href="/terms">Syarat & Ketentuan</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduKelas. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
