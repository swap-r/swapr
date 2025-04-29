import { Card, CardContent } from "@/components/ui/card"
import { Train, Users, Award, Zap, Heart, BarChart, Shield, Clock, Globe, Layers } from "lucide-react"
import Banner from "@/components/banner"
import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui-button"
import Link from "next/link"
import Image from "next/image"

export default function About() {
  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Our Story" centered={true} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  SwapR was born out of a common frustration faced by millions of Indian Railways passengers every day:
                  getting stuck with uncomfortable seats despite there being better options available elsewhere in the
                  train.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our founder experienced this firsthand when his mother once complained of extreme uncomfort while traveling alone, while younger passengers had lower berths in the same compartment. Despite everyone's
                  willingness to swap, there was no easy way to coordinate this exchange.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Passengers in a train compartment"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              That's when the idea for SwapR was born – a platform that harnesses the power of community to make train
              travel more comfortable for everyone through a simple, secure seat swapping system.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              After months of research, development, and testing, SwapR was
              launched in mid 2025. The response was awaited for this revolution !
            </p>

            <p className="text-lg text-gray-700">
             
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Meet Our Team" subtitle="The passionate minds behind SwapR" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 overflow-hidden">
                <Image src="/placeholder.svg?height=96&width=96" alt="Team Member" width={96} height={96} />
              </div>
              <h3 className="text-xl font-bold mb-1">Satya Chopra</h3>
              <p className="text-blue-500 mb-3">Co-Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                Satya Chopra, a student of IIT Madras and IIT Hyderabad, blends a sharp business mind with a passion for sports. He thrives on strategic thinking, innovation, and making ideas happen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 overflow-hidden">
                <Image src="/placeholder.svg?height=96&width=96" alt="Team Member" width={96} height={96} />
              </div>
              <h3 className="text-xl font-bold mb-1">Sheik Saadiq</h3>
              <p className="text-blue-500 mb-3">Co-Founder & CTO</p>
              <p className="text-gray-600 mb-4">
                Sheik Saadiq, a distinguished student at IIT Hyderabad, possesses exceptional coding skills and maintains an impressive 9-point CGPA. He excels in tackling complex computational challenges with precision and efficiency.
              </p>
            </div>
          </div>

          
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Our Mission"
            subtitle="To create a more comfortable, convenient, and community-driven train travel experience by enabling passengers to help each other through seat swaps."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-blue-100 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Train className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Improve Travel Experience</h3>
                  <p className="text-gray-600">
                    Make train journeys more comfortable for all passengers through collaborative seat swapping. We
                    believe that small changes can make a big difference in the overall travel experience.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Build Community</h3>
                  <p className="text-gray-600">
                    Foster a sense of community and mutual help among train travelers across India. By connecting
                    passengers with complementary needs, we create a network of support for everyone.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-blue-100 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Prioritize Needs</h3>
                  <p className="text-gray-600">
                    Help those with special needs, elderly passengers, and families travel more comfortably. Our
                    algorithm gives priority to those who need specific accommodations for health or mobility reasons.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How We're Different"
            subtitle="SwapR stands out from traditional seat arrangement solutions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4 group">
              <div className="bg-blue-100 rounded-full p-3 h-fit group-hover:bg-blue-200 transition-colors duration-300">
                <Zap className="h-8 w-8 text-blue-500 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Smart Matching
                </h3>
                <p className="text-gray-600">
                  Our algorithm considers multiple factors like journey overlap, seat compatibility, and passenger
                  constraints to suggest the most suitable swaps. Unlike manual arrangements, our system can process
                  thousands of potential matches in seconds to find the optimal solution.
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="bg-blue-100 rounded-full p-3 h-fit group-hover:bg-blue-200 transition-colors duration-300">
                <Award className="h-8 w-8 text-blue-500 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Incentive System
                </h3>
                <p className="text-gray-600">
                  We've created a fair system where those offering desirable seats can receive incentives, encouraging
                  active participation. This creates a win-win situation where both parties benefit from the swap,
                  rather than one-sided arrangements.
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="bg-blue-100 rounded-full p-3 h-fit group-hover:bg-blue-200 transition-colors duration-300">
                <Shield className="h-8 w-8 text-blue-500 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Trust & Safety
                </h3>
                <p className="text-gray-600">
                  Our reputation system ensures reliable swaps and maintains a trustworthy community of users. We verify
                  user identities and provide a secure platform for communication, eliminating the risks associated with
                  arranging swaps in person.
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="bg-blue-100 rounded-full p-3 h-fit group-hover:bg-blue-200 transition-colors duration-300">
                <BarChart className="h-8 w-8 text-blue-500 flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Data-Driven
                </h3>
                <p className="text-gray-600">
                  We continuously improve our matching algorithms based on user feedback and successful swap patterns.
                  By analyzing thousands of swaps, we can identify trends and optimize the system to better serve
                  passenger needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Vision for the Future" subtitle="Where we're headed in the coming years" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 flex items-center">
                <Clock className="mr-3 h-6 w-6" /> Short-term Goals (1 Year)
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <Shield className="h-4 w-4 text-blue-500" />
                  </div>
                  <span>Expand user base to cover all major train routes across India</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <Shield className="h-4 w-4 text-blue-500" />
                  </div>
                  <span>Implement group swap functionality for families and large groups</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <Shield className="h-4 w-4 text-blue-500" />
                  </div>
                  <span>Launch iOS version of the app</span>
                </li>
                
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 flex items-center">
                <Globe className="mr-3 h-6 w-6" /> Medium-term Goals (2-3 Years)
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <Shield className="h-4 w-4 text-blue-500" />
                  </div>
                  <span>Direct integration with IRCTC for seamless booking and swapping</span>
                </li>
                
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <Shield className="h-4 w-4 text-blue-500" />
                  </div>
                  <span>Develop partnerships with travel agencies and corporate clients</span>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-50">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 flex items-center">
              <Layers className="mr-3 h-6 w-6" /> Long-term Vision (5+ Years)
            </h3>
            <p className="text-gray-600 mb-6">
              Our ultimate goal is to transform the way people travel by train, not just in India but globally. We
              envision SwapR becoming an essential part of the train travel experience, where:
            </p>
            <ul className="space-y-4 text-gray-600 mb-6">
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                  <Shield className="h-4 w-4 text-blue-500" />
                </div>
                <span>SwapR is integrated directly into the ticket booking process of railway systems worldwide</span>
              </li>
              
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                  <Shield className="h-4 w-4 text-blue-500" />
                </div>
                <span>A comprehensive travel ecosystem that addresses all aspects of passenger comfort</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                  <Shield className="h-4 w-4 text-blue-500" />
                </div>
                <span>
                  Expansion to international markets, adapting to different railway systems and cultural preferences
                </span>
              </li>
            </ul>
            <p className="text-gray-600">
              We believe that by focusing on the needs of travelers and leveraging technology to connect people, we can
              make train travel more comfortable, efficient, and enjoyable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us on This Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the community that's transforming train travel in India. Download SwapR today and experience the
            difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/download">
              <Button
                variant="white"
                size="xl"
                className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Download App
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="xl"
                className="rounded-full border-white text-white hover:bg-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
