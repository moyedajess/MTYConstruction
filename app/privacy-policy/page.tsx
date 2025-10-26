import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-balance">Privacy Policy</h1>

          <Card className="bg-card border-border">
            <CardContent className="p-8 space-y-8">
              <section>
                <p className="text-muted-foreground mb-6">
                  <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                </p>
                <p className="text-muted-foreground">
                  MTY Construction ("we," "us," or "our") respects your privacy and is committed to protecting your
                  personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website mtyconstruction.us or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We may collect the following types of personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Contact Information:</strong> Name, email address, phone number, and mailing address
                    </li>
                    <li>
                      <strong>Project Information:</strong> Details about your construction project, property location,
                      and service requirements
                    </li>
                    <li>
                      <strong>Communication Records:</strong> Records of your communications with us, including emails,
                      phone calls, and SMS messages
                    </li>
                    <li>
                      <strong>Technical Information:</strong> IP address, browser type, device information, and website
                      usage data
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use your personal information for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To provide construction services and respond to your inquiries</li>
                    <li>To communicate with you about your project, quotes, and service updates</li>
                    <li>To send you informational SMS messages about your project status and appointments</li>
                    <li>To improve our services and website functionality</li>
                    <li>To comply with legal obligations and protect our rights</li>
                    <li>To send marketing communications (only with your consent)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. SMS Communications and Consent</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    By providing your phone number and checking the SMS consent box on our contact form, you expressly
                    consent to receive informational SMS text messages from MTY Construction at the phone number you
                    provided.
                  </p>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2">
                    <p className="font-semibold text-foreground">SMS Consent Details:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Message Types:</strong> You will receive informational messages about project updates,
                        appointment reminders, quote status, and service-related notifications
                      </li>
                      <li>
                        <strong>Message Frequency:</strong> Message frequency varies based on your project activity. You
                        may receive up to 5 messages per week during active projects
                      </li>
                      <li>
                        <strong>Message and Data Rates:</strong> Standard message and data rates may apply from your
                        mobile carrier
                      </li>
                      <li>
                        <strong>Opt-Out:</strong> You can opt-out at any time by replying "STOP" to any SMS message or
                        by contacting us at jessica@mtyconstruction.us
                      </li>
                      <li>
                        <strong>Help:</strong> For help, reply "HELP" to any message or contact us at (786) 301-6361
                      </li>
                      <li>
                        <strong>Carriers:</strong> Supported carriers include AT&T, T-Mobile, Verizon, Sprint, and other
                        major U.S. carriers
                      </li>
                    </ul>
                  </div>
                  <p>
                    Your consent to receive SMS messages is not a condition of purchasing any goods or services from MTY
                    Construction. However, opting out may affect our ability to provide timely project updates.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>We may share your information with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Service Providers:</strong> Third-party vendors who assist us in providing services (e.g.,
                      SMS providers, payment processors)
                    </li>
                    <li>
                      <strong>Subcontractors:</strong> Licensed professionals who work on your construction project
                    </li>
                    <li>
                      <strong>Legal Authorities:</strong> When required by law or to protect our legal rights
                    </li>
                  </ul>
                  <p>We do not sell your personal information to third parties.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement reasonable security measures to protect your personal information from unauthorized
                  access, disclosure, alteration, or destruction. However, no method of transmission over the internet
                  or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information (subject to legal requirements)</li>
                    <li>Opt-out of marketing communications and SMS messages</li>
                    <li>Withdraw your consent at any time</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking</h2>
                <p className="text-muted-foreground">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience and
                  analyze website traffic. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                  information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new Privacy Policy on this page and updating the "Effective Date."
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>If you have questions about this Privacy Policy or wish to exercise your rights, contact us:</p>
                  <div className="bg-secondary/20 rounded-lg p-4 space-y-2">
                    <p>
                      <strong>MTY Construction</strong>
                    </p>
                    <p>Email: jessica@mtyconstruction.us</p>
                    <p>Phone: (786) 301-6361</p>
                    <p>Website: mtyconstruction.us</p>
                  </div>
                </div>
              </section>

              <section className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground italic">
                  By using our website and services, you acknowledge that you have read and understood this Privacy
                  Policy and agree to its terms.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
