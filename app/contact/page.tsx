"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
  Users,
  Briefcase,
  CheckCircle,
  Loader2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "support@edukelas.com",
      description: "Kirim email untuk pertanyaan umum",
    },
    {
      icon: Phone,
      title: "Telepon",
      details: "+62 21 1234 5678",
      description: "Senin - Jumat, 09:00 - 18:00 WIB",
    },
    {
      icon: MapPin,
      title: "Alamat",
      details: "Jl. Sudirman No. 123, Jakarta Pusat",
      description: "Kantor pusat EduKelas",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: "24/7 Online Support",
      description: "Dukungan online tersedia sepanjang waktu",
    },
  ]

  const faqCategories = [
    {
      icon: HelpCircle,
      title: "Pertanyaan Umum",
      description: "Informasi dasar tentang platform dan layanan kami",
      link: "/faq#general",
    },
    {
      icon: Users,
      title: "Akun & Profil",
      description: "Bantuan terkait pendaftaran, login, dan pengaturan akun",
      link: "/faq#account",
    },
    {
      icon: BookOpen,
      title: "Kursus & Pembelajaran",
      description: "Panduan mengikuti kursus dan menggunakan fitur pembelajaran",
      link: "/faq#courses",
    },
    {
      icon: Briefcase,
      title: "Sertifikat & Karir",
      description: "Informasi tentang sertifikat dan peluang karir",
      link: "/faq#certificates",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Semua field harus diisi")
      setIsSubmitting(false)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Format email tidak valid")
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        category: "general",
      })
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi.")
    }

    setIsSubmitting(false)
  }

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
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              Tentang
            </Link>
            <Link href="/contact" className="text-blue-600 font-medium">
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
              Hubungi <span className="text-blue-600">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Kami siap membantu Anda! Jangan ragu untuk menghubungi tim support kami jika ada pertanyaan atau butuh
              bantuan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-lg font-medium text-blue-600 mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                  <p className="text-gray-600">Isi form di bawah ini dan kami akan merespons dalam 24 jam</p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Pesan Terkirim!</h3>
                      <p className="text-gray-600 mb-4">
                        Terima kasih atas pesan Anda. Tim kami akan segera merespons.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Kirim Pesan Lain
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <Alert variant="destructive">
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nama Lengkap</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Masukkan nama lengkap"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="nama@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category">Kategori</Label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="general">Pertanyaan Umum</option>
                          <option value="technical">Bantuan Teknis</option>
                          <option value="billing">Pembayaran & Tagihan</option>
                          <option value="course">Kursus & Pembelajaran</option>
                          <option value="partnership">Kemitraan</option>
                          <option value="other">Lainnya</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subjek</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Ringkasan singkat pesan Anda"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Pesan</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Jelaskan pertanyaan atau masalah Anda secara detail..."
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Mengirim...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Kirim Pesan
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=256&width=400"
                      alt="Map Location"
                      width={400}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-600 bg-opacity-20 flex items-center justify-center">
                      <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                        <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="font-semibold">Kantor Pusat EduKelas</p>
                        <p className="text-sm text-gray-600">Jakarta Pusat</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                    Kontak Cepat
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-gray-600">support@edukelas.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Phone className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-sm text-gray-600">+62 812 3456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-gray-600">Tersedia 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-xl text-gray-600">Mungkin jawaban yang Anda cari sudah tersedia di sini</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqCategories.map((category, index) => (
              <Link key={index} href={category.link}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <category.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/faq">
              <Button variant="outline" size="lg">
                Lihat Semua FAQ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Masih Ada Pertanyaan?</h2>
          <p className="text-xl text-blue-100 mb-8">Tim support kami siap membantu Anda 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <MessageCircle className="mr-2 h-4 w-4" />
              Live Chat
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Phone className="mr-2 h-4 w-4" />
              Hubungi Kami
            </Button>
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
