
"use client"
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { CheckCircle, ChevronRight, Cpu, Facebook, Gitlab, Image as ImageIcon, Linkedin, PenSquare, Quote, Send, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const features = [
  {
    icon: <PenSquare className="w-8 h-8 text-primary" />,
    title: "Blog Generator",
    description: "Instantly create high-quality, SEO-optimized blog posts on any topic.",
  },
  {
    icon: <Youtube className="w-8 h-8 text-primary" />,
    title: "YouTube Video Creator",
    description: "Generate engaging video scripts and ideas that captivate your audience.",
  },
  {
    icon: <ImageIcon className="w-8 h-8 text-primary" />,
    title: "Thumbnail AI",
    description: "Design click-worthy thumbnails that make your videos stand out.",
  },
  {
    icon: <Send className="w-8 h-8 text-primary" />,
    title: "Instant Publishing",
    description: "Publish your generated content directly to your favorite platforms.",
  },
];

const testimonials = [
  {
    name: "Sarah L.",
    role: "Content Creator",
    avatar: "https://placehold.co/100x100.png",
    data_ai_hint: "woman portrait",
    text: "ContentForge AI has revolutionized my workflow. I can now produce a week's worth of content in just a few hours. It's a game-changer!",
  },
  {
    name: "Mark C.",
    role: "Digital Marketer",
    avatar: "https://placehold.co/100x100.png",
    data_ai_hint: "man portrait",
    text: "The quality of the generated content is outstanding. Our blog's engagement has skyrocketed since we started using this tool.",
  },
  {
    name: "Jessica P.",
    role: "YouTuber",
    avatar: "https://placehold.co/100x100.png",
    data_ai_hint: "woman creator",
    text: "From scripts to thumbnails, ContentForge AI handles it all. It's like having a dedicated creative team available 24/7. Highly recommended!",
  },
    {
    name: "David H.",
    role: "Startup Founder",
    avatar: "https://placehold.co/100x100.png",
    data_ai_hint: "man smiling",
    text: "As a small team, ContentForge AI is invaluable. It saves us countless hours and helps us maintain a consistent and professional online presence.",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "/ month",
    description: "Get started and explore our basic features.",
    features: ["5 content generations/mo", "Basic support", "Access to all generators"],
    cta: "Start for Free",
    isHighlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/ month",
    description: "For creators and professionals who need more power.",
    features: [
      "100 content generations/mo",
      "Priority support",
      "Advanced analytics",
      "Instant publishing",
    ],
    cta: "Upgrade to Pro",
    isHighlighted: true,
  },
  {
    name: "Ultimate",
    price: "$79",
    period: "/ month",
    description: "The complete solution for agencies and power users.",
    features: [
      "Unlimited generations",
      "Dedicated support",
      "Team collaboration",
      "API Access",
    ],
    cta: "Go Ultimate",
    isHighlighted: false,
  },
];

const faqs = [
    {
        question: "What is ContentForge AI?",
        answer: "ContentForge AI is a suite of tools that uses artificial intelligence to help you generate high-quality content like blog posts, YouTube scripts, and thumbnails in just a few clicks."
    },
    {
        question: "How does the content generation work?",
        answer: "You provide a topic or a keyword, and our advanced AI models analyze your input to generate unique, relevant, and engaging content tailored to your needs."
    },
    {
        question: "Can I use the generated content for commercial purposes?",
        answer: "Yes, on our paid plans (Pro and Ultimate), you have full rights to use the content you generate for any commercial purposes."
    },
    {
        question: "What if I'm not satisfied with the generated content?",
        answer: "You can always refine your input and generate again. Our Pro and Ultimate plans offer higher generation limits, so you can experiment until you get the perfect result."
    }
];

const NavMenu = () => (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
        <Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
        <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
        <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
    </nav>
);

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in-down">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-4 flex items-center justify-between h-16 glass-card rounded-2xl px-6">
                    <Logo />
                    <NavMenu />
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <Button asChild className="hidden md:flex">
                            <Link href="/dashboard">Get Started</Link>
                        </Button>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="md:hidden">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                    <span className="sr-only">Toggle Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col gap-6 p-6">
                                    <Logo />
                                    <nav className="flex flex-col gap-4 text-lg font-medium">
                                        <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
                                        <Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
                                        <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
                                        <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
                                        <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                                    </nav>
                                    <Button asChild size="lg">
                                        <Link href="/dashboard">Get Started</Link>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}

const Footer = () => (
    <footer className="py-12 bg-card/60 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
                <Logo />
                <p className="text-muted-foreground">AI-Powered Content Creation in 1 Click.</p>
                <div className="flex items-center gap-4">
                    <Link href="#"><Twitter className="w-5 h-5 hover:text-primary transition-colors" /></Link>
                    <Link href="#"><Facebook className="w-5 h-5 hover:text-primary transition-colors" /></Link>
                    <Link href="#"><Linkedin className="w-5 h-5 hover:text-primary transition-colors" /></Link>
                    <Link href="#"><Gitlab className="w-5 h-5 hover:text-primary transition-colors" /></Link>
                </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold mb-4">Product</h3>
                    <ul className="space-y-2">
                        <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                        <li><Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
                        <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t pt-8 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} ContentForge AI. All rights reserved.
        </div>
    </footer>
);

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Hero Section */}
        <section className="py-20 animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline">
                        Create <span className="gradient-text">AI-Powered</span> Content in 1 Click
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8">
                        Unleash your creativity with our suite of AI tools. From blog posts to viral videos, generate exceptional content in seconds.
                    </p>
                    <Button asChild size="lg" className="rounded-full font-semibold text-base gradient-button">
                        <Link href="/dashboard">Get Started for Free <ChevronRight className="ml-2 w-5 h-5" /></Link>
                    </Button>
                </div>
                 <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary to-cyan-400 rounded-2xl opacity-20 blur-xl"></div>
                    <Image src="https://placehold.co/1200x800.png" data-ai-hint="dashboard preview" alt="Dashboard Preview" width={1200} height={800} className="rounded-2xl shadow-2xl relative" />
                </div>
            </div>
        </section>

        {/* Features Showcase */}
        <section id="features" className="py-20 animate-fade-in-up animation-delay-200">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Everything you need to create</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50" style={{animationDelay: `${index * 150}ms`}}>
                <CardHeader className="items-center">
                    <div className="p-4 bg-primary/10 rounded-xl mb-4">
                        {feature.icon}
                    </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 animate-fade-in-up animation-delay-400">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">A new way to create content</h2>
                    <p className="text-muted-foreground text-lg">Generate high-quality content in three simple steps. Just provide an idea, let our AI work its magic, and publish your masterpiece.</p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">1</div>
                            <div>
                                <h3 className="font-semibold">Enter Your Idea</h3>
                                <p className="text-muted-foreground">Start with a simple prompt or keyword for your content.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">2</div>
                            <div>
                                <h3 className="font-semibold">Generate Content</h3>
                                <p className="text-muted-foreground">Our AI crafts unique, high-quality content based on your input.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">3</div>
                            <div>
                                <h3 className="font-semibold">Publish & Share</h3>
                                <p className="text-muted-foreground">Use, edit, or directly publish your new content to the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary to-cyan-400 rounded-3xl opacity-10 blur-2xl"></div>
                    <Image src="https://placehold.co/1000x1200.png" data-ai-hint="content creation" alt="Content Creation Process" width={1000} height={1200} className="rounded-3xl shadow-2xl relative" />
                </div>
            </div>
        </section>


        {/* Testimonials Slider */}
        <section id="testimonials" className="py-20 animate-fade-in-up animation-delay-600">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-headline">Loved by creators worldwide</h2>
          <p className="text-muted-foreground text-center mb-12">Don't just take our word for it. Here's what our users are saying.</p>
          <Carousel opts={{ loop: true }} className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="glass-card flex flex-col h-full">
                      <CardContent className="flex-grow p-6 flex flex-col items-center text-center">
                        <Quote className="w-8 h-8 text-primary/50 mb-4" />
                        <p className="flex-grow italic">"{testimonial.text}"</p>
                      </CardContent>
                      <CardFooter className="p-6 pt-0 mt-auto flex flex-col items-center">
                         <Avatar className="w-16 h-16 mb-4 border-2 border-primary/20">
                          <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.data_ai_hint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.role}</p>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" />
          </Carousel>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 animate-fade-in-up animation-delay-800">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">Choose your plan</h2>
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={plan.name} className={`flex flex-col transition-all duration-300 hover:scale-[1.02] ${plan.isHighlighted ? 'border-primary shadow-primary/20 shadow-lg' : ''}`} style={{animationDelay: `${index * 150}ms`}}>
                {plan.isHighlighted && <div className="text-center py-1 bg-primary text-primary-foreground font-semibold text-sm">Most Popular</div>}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full ${plan.isHighlighted ? 'gradient-button' : ''}`} variant={plan.isHighlighted ? 'default' : 'outline'}>
                    <Link href="/dashboard">{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-20 animate-fade-in-up animation-delay-800">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 font-headline">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Have a different question? <Link href="/contact" className="text-primary underline">Contact us</Link>.
            </p>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 animate-fade-in-up animation-delay-1000">
            <div className="relative rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 transition-all duration-500 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20"></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Ready to Forge Your Content?</h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                    Join thousands of creators and start generating high-quality content with the power of AI. No credit card required.
                    </p>
                    <Button asChild size="lg" variant="secondary" className="rounded-full font-semibold text-base transition-transform group-hover:scale-105">
                        <Link href="/dashboard">Start Free Trial <ChevronRight className="ml-2 w-5 h-5" /></Link>
                    </Button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

    