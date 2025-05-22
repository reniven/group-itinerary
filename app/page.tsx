import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Users, Calendar, DollarSign, MapPin, Brain, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Plane className="h-6 w-6 text-teal-500" />
            <span className="text-xl font-bold">TripSync</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-teal-500">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-teal-500">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-teal-500">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-teal-500 hover:bg-teal-600">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Plan trips with friends, <span className="text-teal-500">without the hassle</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  TripSync helps you and your friends create the perfect trip itinerary by considering everyone's
                  budget, availability, and interests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/create-trip">
                    <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
                      Start Planning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline">
                      Learn How It Works
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=700&width=700"
                  alt="Friends planning a trip together"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Use TripSync?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform makes group trip planning simple, fair, and fun for everyone involved.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-teal-500 mb-4" />
                  <CardTitle>Resolve Conflicts</CardTitle>
                  <CardDescription>Automatically find compromises that work for everyone in your group</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our system identifies and resolves conflicts in preferences, ensuring everyone's needs are
                    considered.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <DollarSign className="h-10 w-10 text-teal-500 mb-4" />
                  <CardTitle>Budget Friendly</CardTitle>
                  <CardDescription>Create trips that respect everyone's financial constraints</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Set individual or group budgets and get recommendations that won't break the bank for anyone.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Brain className="h-10 w-10 text-teal-500 mb-4" />
                  <CardTitle>AI-Powered</CardTitle>
                  <CardDescription>
                    Get personalized itineraries based on your group's unique preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our AI analyzes everyone's input to create custom itineraries that maximize group satisfaction.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Four simple steps to your perfect group trip
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                  <Users className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold">1. Invite Friends</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Create a trip and invite your friends to join the planning.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                  <Calendar className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold">2. Fill Questionnaire</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Everyone answers questions about budget, dates, and interests.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                  <Brain className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold">3. AI Processing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our AI analyzes responses and resolves conflicts.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                  <MapPin className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-bold">4. Get Itineraries</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receive multiple itinerary options that work for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Trip Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Example Trip</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how TripSync creates the perfect itinerary for a group with different preferences
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">The Challenge</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center dark:bg-teal-900">
                      <span className="font-bold text-teal-500">A</span>
                    </div>
                    <div>
                      <p className="font-medium">Alex wants:</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Beach vacation, $1000 budget, available in July
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center dark:bg-teal-900">
                      <span className="font-bold text-teal-500">B</span>
                    </div>
                    <div>
                      <p className="font-medium">Bailey wants:</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        City exploration, $1500 budget, available in August
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center dark:bg-teal-900">
                      <span className="font-bold text-teal-500">C</span>
                    </div>
                    <div>
                      <p className="font-medium">Casey wants:</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Mountain hiking, $800 budget, available July-August
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">TripSync Solution</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Barcelona, Spain</CardTitle>
                    <CardDescription>Late July, 5 days, $950 per person</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">This trip satisfies everyone by including:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                        <span>Barceloneta Beach for Alex</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                        <span>City architecture and museums for Bailey</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                        <span>Day trip to Montserrat mountains for Casey</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-teal-500"></div>
                        <span>Within everyone's budget and availability</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from groups who have used TripSync to plan their perfect getaways
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>"Saved our friendship!"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    "We were at a standstill trying to plan our annual trip. TripSync helped us find a destination that
                    worked for everyone's budget and interests. No more endless group chats!"
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">- The College Roommates</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>"So much easier than spreadsheets"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    "I used to be the designated trip planner, creating complex spreadsheets to track everyone's
                    preferences. TripSync does it all automatically and the AI suggestions were spot on."
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">- Family Reunion Organizer</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>"Found hidden gems"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    "The AI suggested activities and destinations we never would have found on our own. Our trip had the
                    perfect balance of everyone's interests without anyone feeling like they had to compromise."
                  </p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-medium">- Friend Group of 6</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-500 dark:bg-teal-600">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to plan your next adventure?
              </h2>
              <p className="text-xl text-teal-50">
                Start creating your perfect group trip today, with no more compromises or conflicts.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link href="/create-trip">
                  <Button size="lg" className="bg-white text-teal-500 hover:bg-teal-50">
                    Create Your Trip
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-teal-600">
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Plane className="h-5 w-5 text-teal-500" />
            <p className="text-sm font-medium">© 2025 TripSync. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs hover:underline underline-offset-4">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
