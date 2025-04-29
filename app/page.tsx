import Link from "next/link"
import { ArrowRight, CheckCircle, Users, Award, Shield, Zap, Clock, Globe } from "lucide-react"
import Banner from "@/components/banner"
import SectionHeading from "@/components/section-heading"
import FeatureCard from "@/components/feature-card"
import { Button } from "@/components/ui-button"

export default function Home() {
  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How SwapR Works"
            subtitle="Swap your train seat in three simple steps and enjoy a more comfortable journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-blue-50">
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Enter PNR Details</h3>
              <p className="text-gray-600">
                Simply enter your PNR number and SwapR will fetch all your journey details automatically, including
                train number, coach, berth, and passenger information.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-blue-50">
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Set Preferences</h3>
              <p className="text-gray-600">
                Specify your seat preferences and what you're willing to offer in exchange. Our smart algorithm will
                find the best matches based on your criteria.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-blue-50">
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Confirm & Swap</h3>
              <p className="text-gray-600">
                Get matched with compatible passengers, confirm the swap through our secure system, and enjoy your new
                seat with a more comfortable journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Key Features"
            subtitle="Designed to make your train journey more comfortable and convenient"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4 group">
              <div className="bg-blue-100 rounded-full p-3 h-fit group-hover:bg-blue-200 transition-colors duration-300">
                <CheckCircle className="h-8 w-8 text-blue-500 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  PNR-Based Journey Import
                </h3>
                <p className="text-gray-600">
                  Automatically fetch train details, coach and berth information, and passenger details with just your
                  PNR. SwapR integrates with Indian Railways data to provide accurate and up-to-date information about
                  your journey.
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="bg-blue-100 rounded-full p-3 h-fit group-hover:bg-blue-200 transition-colors duration-300">
                <Users className="h-8 w-8 text-blue-500 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Smart Matching Algorithm
                </h3>
                <p className="text-gray-600">
                  Our intelligent system matches passengers based on journey overlap, seat compatibility, and passenger
                  constraints. The algorithm prioritizes matches that benefit both parties and considers factors like
                  age, gender, and special needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="bg-blue-100 rounded-full p-3 h-fit group-hover:bg-blue-200 transition-colors duration-300">
                <Award className="h-8 w-8 text-blue-500 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Incentives & Rewards
                </h3>
                <p className="text-gray-600">
                  Earn rewards for offering your seat, creating a fair and active participation system. Users can
                  accumulate points that can be redeemed for discounts on future train tickets or other travel-related
                  benefits.
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="bg-blue-100 rounded-full p-3 h-fit group-hover:bg-blue-200 transition-colors duration-300">
                <Shield className="h-8 w-8 text-blue-500 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Trust & Safety System
                </h3>
                <p className="text-gray-600">
                  Our reputation system ensures reliable swaps and penalizes users who frequently decline matches. We
                  verify user identities and maintain a secure environment for all transactions, protecting your
                  personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Users Say"
            subtitle="Join thousands of satisfied travelers who've improved their journey with SwapR"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-500 font-bold">RS</span>
                </div>
                <div>
                  <h4 className="font-bold">Krishna Patil</h4>
                  <p className="text-sm text-gray-500">Delhi to Hyderabad</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I was traveling with my elderly mother who couldn't climb to the upper berth. SwapR helped us find a
                lower berth in minutes. Absolutely fantastic service!"
              </p>
              <div className="flex mt-4 text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-500 font-bold">AP</span>
                </div>
                <div>
                  <h4 className="font-bold">Ananya Patel</h4>
                  <p className="text-sm text-gray-500">Chennai to Kolkata</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I was feeling uncomfortable with my co-passengers while travelling alone. SwapR came to the rescue by getting me a different seat. Highly recommended !"
              </p>
              <div className="flex mt-4 text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-500 font-bold">VK</span>
                </div>
                <div>
                  <h4 className="font-bold">Mumin Murtaza</h4>
                  <p className="text-sm text-gray-500">Bangalore to Hyderabad</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a frequent traveler, I often get middle berths which I find uncomfortable. SwapR has been a
                game-changer, helping me get side-lower berths on almost every journey."
              </p>
              <div className="flex mt-4 text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Future Roadmap"
            subtitle="We're constantly improving SwapR with new features and capabilities"
          />

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            

            <FeatureCard
              icon={Globe}
              title="IRCTC Integration"
              description="Direct integration with IRCTC ticketing system to streamline the swap process and provide real-time updates on seat availability."
            />

            <FeatureCard
              icon={Users}
              title="User Ratings & Reviews"
              description="A comprehensive rating system allowing users to review their swap experiences and build a trusted community of travelers."
            />

            <FeatureCard
              icon={Clock}
              title="Real-time Notifications"
              description="Push notifications for swap requests, matches, and confirmations to keep you updated on your journey status."
            />

            <FeatureCard
              icon={Shield}
              title="Enhanced Security"
              description="Advanced verification methods including government ID verification for increased trust and safety."
            />

            
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Have suggestions for new features? We'd love to hear from you! Our roadmap is shaped by user feedback and
              real travel needs.
            </p>
            <Link href="/contact">
              <Button variant="gradient" size="lg" className="rounded-full">
                Share Your Ideas <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Real-World Use Cases"
            subtitle="SwapR solves common problems faced by train travelers every day"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Elderly & Special Needs Passengers</h3>
              <p className="text-gray-600 mb-4">
                Elderly passengers or those with mobility issues often get assigned upper berths which can be difficult
                to access. SwapR helps them find lower berths by connecting them with younger passengers who may be
                willing to swap.
              </p>
              
              
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Families & Groups</h3>
              <p className="text-gray-600 mb-4">
                Families traveling together often get seats scattered throughout the train, especially during peak
                seasons. SwapR helps them coordinate multiple swaps to sit together.
              </p>
              
              
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Safety and peace</h3>
              <p className="text-gray-600 mb-4">
                Solo travelers often face uncomfortable situations and wish they get a different berth. Swapr helps them with this without awkward conversations with fellow passengers.
              </p>
              
              
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Excess Luggage</h3>
              <p className="text-gray-600 mb-4">
                People sometimes travel with excess luggage due to certain circumstances.
                SwapR helps them find seats which have minimum luggage and ccan accomodate more.
              </p>
        
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Train Travel?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download SwapR today and start enjoying more comfortable journeys with better seats.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <Button
                variant="white"
                size="xl"
                className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Download Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="xl"
                className="rounded-full border-white text-white hover:bg-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
