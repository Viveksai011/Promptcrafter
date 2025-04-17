import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { aboutText, ourStoryText, howToGetPrompts, tipsForEffectivePrompts, footerLinks, PromptItem } from "@/lib/about"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* About Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            {aboutText.heading}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {aboutText.description}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-80 w-full"></div>
            <div className="absolute -bottom-6 -right-6 bg-purple-500 h-40 w-40 rounded-lg"></div>
            <div className="absolute -top-6 -left-6 bg-blue-500 h-40 w-40 rounded-lg"></div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{ourStoryText.heading}</h2>
            {ourStoryText.paragraphs.map((para, idx) => (
              <p key={idx} className="text-gray-600 dark:text-gray-300 mb-4">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get the Best Prompts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            How to Get the Best Prompts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howToGetPrompts.map(({ icon: Icon, title, text }: PromptItem, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Effective Prompts */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Tips for Effective Prompts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tipsForEffectivePrompts.map(({ title, text }, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Perfect Prompts?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Try our AI-powered prompt generator and see the difference it makes in your AI interactions.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link href="/generator">
              Start Generating Prompts <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 dark:bg-gray-800 mt-auto">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4 md:mb-0">PromptCraft</h2>
          <div className="flex space-x-6">
            {footerLinks.map(({ href, label }, idx) => (
              <Link key={idx} href={href} className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                {label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0">© {new Date().getFullYear()} PromptCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
