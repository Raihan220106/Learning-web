import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Target, Heart, Lightbulb, Shield, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Siswa Aktif", value: "10,000+" },
    { icon: BookOpen, label: "Kursus Tersedia", value: "500+" },
    { icon: Award, label: "Instruktur Ahli", value: "100+" },
    { icon: Globe, label: "Negara", value: "15+" },
  ]

  const values = [
    {
      icon: Target,
      title: "Fokus pada Kualitas",
      description:
        "Kami berkomitmen memberikan pendidikan berkualitas tinggi dengan materi yang selalu up-to-date dan relevan dengan kebutuhan industri.",
    },
    {
      icon: Heart,
      title: "Peduli Siswa",
      description:
        "Setiap siswa adalah prioritas kami. Kami menyediakan dukungan penuh untuk memastikan kesuksesan perjalanan belajar Anda.",
    },
    {
      icon: Lightbulb,
      title: "Inovasi Berkelanjutan",
      description:
        "Kami terus berinovasi dalam metode pembelajaran dan teknologi untuk memberikan pengalaman belajar yang terbaik.",
    },
    {
      icon: Shield,
      title: "Terpercaya & Aman",
      description: "Platform kami menggunakan teknologi keamanan terdepan untuk melindungi data dan privasi pengguna.",
    },
  ]

  const team = [
    {
      name: "Dr. Ahmad Wijaya",
      role: "Founder & CEO",
      image: "/images/instructor-ahmad.jpg",
      description: "Mantan Software Engineer di Google dengan 15+ tahun pengalaman di industri teknologi.",
    },
    {
      name: "Sarah Putri",
      role: "Head of Marketing",
      image: "/images/instructor-sarah.jpg",
      description: "Expert digital marketing dengan track record membangun brand startup unicorn di Asia Tenggara.",
    },
    {
      name: "Maya Sari",
      role: "Head of Design",
      image: "/images/instructor-maya.jpg",
      description: "UI/UX Designer berpengalaman yang telah bekerja dengan berbagai perusahaan teknologi terkemuka.",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Didirikan",
      description: "EduKelas didirikan dengan visi demokratisasi pendidikan berkualitas",
    },
    {
      year: "2021",
      title: "1,000 Siswa",
      description: "Mencapai milestone pertama dengan 1,000 siswa aktif",
    },
    {
      year: "2022",
      title: "Ekspansi Konten",
      description: "Meluncurkan 100+ kursus di berbagai bidang keahlian",
    },
    {
      year: "2023",
      title: "Sertifikasi Resmi",
      description: "Bermitra dengan industri untuk memberikan sertifikasi yang diakui",
    },
    {
      year: "2024",
      title: "10,000+ Siswa",
      description: "Menjadi platform pembelajaran online terdepan di Indonesia",
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
            <Link href="/about" className="text-blue-600 font-medium">
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Tentang <span className="text-blue-600">EduKelas</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Kami adalah platform pembelajaran online yang berkomitmen untuk memberikan akses pendidikan berkualitas
              tinggi kepada semua orang, di mana pun dan kapan pun. Dengan teknologi terdepan dan instruktur terbaik,
              kami membantu jutaan orang mengembangkan keterampilan dan mencapai tujuan karir mereka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg">Jelajahi Kursus</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="bg-transparent">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Misi & Visi Kami</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600 mb-3">Misi</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Memberikan akses pendidikan berkualitas tinggi yang terjangkau dan mudah diakses oleh semua orang,
                    serta membantu mereka mengembangkan keterampilan yang relevan dengan kebutuhan industri modern.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-green-600 mb-3">Visi</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Menjadi platform pembelajaran online terdepan di Asia Tenggara yang memberdayakan jutaan orang untuk
                    mencapai potensi penuh mereka melalui pendidikan yang inovatif dan berkelanjutan.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-learning.jpg"
                alt="Mission and Vision"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-xl text-gray-600">Prinsip yang memandu setiap langkah perjalanan kami</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perjalanan Kami</h2>
            <p className="text-xl text-gray-600">Milestone penting dalam sejarah EduKelas</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                      <Card className="p-6">
                        <CardContent className="p-0">
                          <Badge className="mb-3 bg-blue-600">{milestone.year}</Badge>
                          <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-xl text-gray-600">Orang-orang hebat di balik EduKelas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Bergabunglah dengan Komunitas Kami</h2>
          <p className="text-xl text-blue-100 mb-8">
            Jadilah bagian dari revolusi pendidikan digital dan wujudkan potensi terbaik Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" variant="secondary">
                Mulai Belajar Sekarang
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
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
