import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Smartphone, CheckCircle } from "lucide-react"
import Banner from "@/components/banner"

export default function Download() {
  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Download Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Get SwapR on Your Device</h2>
              <p className="text-lg text-gray-700 mb-8">
                Download the SwapR app to easily swap train seats, making your journey more comfortable. Available on
                Android with iOS coming soon.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Smartphone className="h-8 w-8 text-blue-500" />
                  <div>
                    <h3 className="text-xl font-bold">Android</h3>
                    <p className="text-gray-600">Available on Google Play Store</p>
                  </div>
                </div>

                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transform hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={60}
                    className="hover:opacity-90 transition-opacity"
                  />
                </Link>

                <div className="flex items-center gap-4 mt-8">
                  <Smartphone className="h-8 w-8 text-gray-400" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-400">iOS</h3>
                    <p className="text-gray-500">Coming soon to App Store</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-[300px] h-[600px] transform hover:scale-105 transition-all duration-500 shadow-xl rounded-3xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=300"
                  alt="SwapR App Screenshots"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">App Features</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Designed with the traveler in mind
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CheckCircle className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">PNR-Based Journey Import</h3>
              <p className="text-gray-600">
                Simply enter your PNR number and we'll fetch all your journey details automatically.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CheckCircle className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Seat Swap Requests</h3>
              <p className="text-gray-600">
                Create custom requests specifying your preferences and what you're willing to offer.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CheckCircle className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
              <p className="text-gray-600">Our algorithm finds the most suitable matches based on multiple factors.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CheckCircle className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Incentives System</h3>
              <p className="text-gray-600">Earn rewards for offering your seat to those who need it more.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CheckCircle className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Confirmation System</h3>
              <p className="text-gray-600">Secure confirmation process ensures both parties agree to the swap.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CheckCircle className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Trust System</h3>
              <p className="text-gray-600">Our reputation system ensures reliable swaps and trustworthy users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">System Requirements</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Everything you need to know before downloading
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <Smartphone className="h-8 w-8 text-blue-500" />
                <h3 className="text-2xl font-bold">Android</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Android 6.0 (Marshmallow) or higher</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>50 MB free storage space</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Internet connection (WiFi or mobile data)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Google Play Services</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <Smartphone className="h-8 w-8 text-gray-400" />
                <h3 className="text-2xl font-bold text-gray-400">iOS (Coming Soon)</h3>
              </div>

              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span>iOS 12 or higher</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span>50 MB free storage space</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span>Internet connection (WiFi or mobile data)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span>Compatible with iPhone 6s and newer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Train Travel?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download SwapR today and start enjoying more comfortable journeys with better seats.
          </p>
          <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-blue-500 hover:bg-blue-50 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Download Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
