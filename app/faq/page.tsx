import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">Find answers to common questions about SwapR and how it works.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-semibold px-4">What is SwapR?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  SwapR is a mobile application designed to help Indian Railways passengers swap train seats. It's
                  especially useful for scenarios where passengers prefer different berths due to several reasons.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-semibold px-4">How does SwapR work?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  SwapR works by connecting passengers who want to swap seats. You enter your PNR number, specify your
                  seat preferences, and our algorithm matches you with compatible passengers. Once a match is found,
                  both parties receive a confirmation prompt, and the swap is confirmed only if both accept.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-semibold px-4">Is SwapR free to use?</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  SwapR operates on a freemium model. First two trails are free and then it requests a minimal fee to request swaps. The generous user willing to swap earns a cashback for their deed of kindness.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-semibold px-4">
                  How do I know if my swap is confirmed?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  When a match is found, both users receive a confirmation prompt. The swap is only confirmed if both
                  parties accept. You'll receive a notification in the app once the swap is confirmed, along with
                  details of your new seat.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-semibold px-4">
                  What happens if I find a match but the other person doesn't respond?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  If the other person doesn't respond within a specified timeframe, the match will expire, and you'll be
                  notified. Your request will remain active, and the system will continue looking for other potential
                  matches.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-semibold px-4">
                  Can I swap seats for multiple passengers?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  Yes, SwapR supports multiple PNRs for group matching. You can link multiple passengers in your
                  request, which is especially useful for families or groups traveling together who want to sit near
                  each other.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-semibold px-4">
                  What if I accept a swap but change my mind later?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  Once both parties confirm a swap, it's considered final. However, we understand that circumstances can
                  change. You can cancel a confirmed swap and get bak almost complete refund.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-semibold px-4">
                  Is my personal information safe with SwapR?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  Yes, we take data privacy very seriously. SwapR only collects the information necessary to facilitate
                  seat swaps. We don't share your personal details with other users beyond what's needed for the swap.
                  Please refer to our Privacy Policy for more details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-semibold px-4">
                  Which trains does SwapR support?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  SwapR supports all Indian Railways trains that use the PNR system. This includes most long-distance
                  trains, Rajdhani, Shatabdi, Duronto, and other express and passenger trains.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-semibold px-4">
                  Is SwapR affiliated with Indian Railways?
                </AccordionTrigger>
                <AccordionContent className="px-4 text-gray-700">
                  No, SwapR is not officially affiliated with Indian Railways. We are an independent service that helps
                  passengers coordinate seat swaps among themselves. The actual seat assignments in the railway system
                  remain unchanged.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            If you couldn't find the answer to your question, feel free to contact our support team.
          </p>
          <a href="/contact" className="text-blue-500 font-semibold text-lg hover:underline">
            Contact Support
          </a>
        </div>
      </section>
    </div>
  )
}
