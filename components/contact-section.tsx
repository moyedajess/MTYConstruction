"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    smsConsent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Ready to start your construction project? Contact us today for a free consultation and quote. We're here to
            bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Phone</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">(786) 301-6361</p>
                <p className="text-muted-foreground">Call us for immediate assistance</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">jessica@mtyconstruction.us</p>
                <p className="text-muted-foreground">Send us your project details</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Service Area</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Miami-Dade County</p>
                <p className="text-muted-foreground">Serving South Florida</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Mon - Fri:</span> 7:00 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Saturday:</span> 8:00 AM - 4:00 PM
                  </p>
                  <p>
                    <span className="font-medium">Sunday:</span> Emergency calls only
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Request a Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your construction project..."
                    className="bg-input border-border"
                  />
                </div>

                <div className="flex items-start space-x-3 bg-secondary/20 p-4 rounded-lg border border-border">
                  <Checkbox
                    id="smsConsent"
                    checked={formData.smsConsent}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, smsConsent: checked as boolean }))}
                    className="mt-1"
                  />
                  <div className="space-y-1">
                    <label htmlFor="smsConsent" className="text-sm font-medium leading-none cursor-pointer">
                      I consent to receive informational SMS messages
                    </label>
                    <p className="text-xs text-muted-foreground">
                      By checking this box, you agree to receive informational SMS text messages from MTY Construction
                      about your project updates, appointments, and service notifications at the phone number provided.
                      Message frequency varies. Message and data rates may apply. Reply STOP to opt-out at any time.
                      View our{" "}
                      <Link href="/privacy-policy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      for details.
                    </p>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
