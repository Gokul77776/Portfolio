"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MagicCard } from "@/components/magicui/form";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Hero() {
  const form = useRef<HTMLFormElement>(null);

  const socialLinks = [
    {
      title: "GitHub",
      icon: <Github className="w-6 h-6 text-[#333]" />,
      href: "https://github.com/Gokul77776",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="w-6 h-6 text-[#0A66C2]" />,
      href: "https://linkedin.com/in/gokul-c7/",
    },
    {
      title: "Email",
      icon: <Mail className="w-6 h-6 text-[#EA4335]" />,
      href: "mailto:gokuldj07@gmail.com",
    },
    {
      title: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6 text-[#25D366]" />,
      href: "https://wa.me/9743328473",
    },
  ];

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6 "
      data-aos="fade-down"
      data-aos-delay="200"
    >
      <div className="flex flex-col-reverse md:flex-row items-center  justify-between gap-8 max-w-6xl w-full">
        {/* Left: Card */}
        <div className="w-full md:w-1/2 py-6">
          <Card className="p-0 max-w-sm w-full">
            <MagicCard>
              <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
                <CardTitle>Contact</CardTitle>
                <CardDescription>
                  Drop me your name, email, and message. I’ll get back to you soon!
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid gap-4">
                    {/* Name */}
                    <div className="grid gap-2">
                      <Label htmlFor="user_name">Name</Label>
                      <Input
                        id="user_name"
                        name="user_name"
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="grid gap-2">
                      <Label htmlFor="user_email">Email</Label>
                      <Input
                        id="user_email"
                        name="user_email"
                        type="email"
                        placeholder="name@example.com"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Input
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        required
                      />
                    </div>
                  </div>
                  <CardFooter className="p-0 mt-4">
                    <Button type="submit" className="w-full cursor-pointer">
                      Submit
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </MagicCard>
          </Card>

          {/* Social Links */}
          <div>
            <h1 className="mt-5 pt-5 text-2xl font-bold">Reach Me Out On</h1>
            <FloatingDock data-aos="fade-down" data-aos-delay="600" items={socialLinks} />
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-5 pt-9 relative top-26 md:top-0 ">
          <img
            src="/contact.svg"
            alt="Contact Illustration"
            className="w-[300px] md:w-[450px] lg:w-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
