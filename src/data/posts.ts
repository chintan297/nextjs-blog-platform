export interface Post {
  _id: string;
  title: string;
  slug: string;
  body: string;
  contentHtml: string;
  image: string;
  date: string;
}

export const staticPosts: Post[] = [
  {
    _id: "1",
    title: "Alex's Fitness Journey",
    slug: "fitness-journey-alex",
    body: "A guide to strength training and fitness excellence. Discover exercises that target every muscle group, helping you build strength and endurance.",
    contentHtml: `
      <p>Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike. Whether you are looking to tone your muscles, increase your stamina, or just get moving, this guide provides the essential knowledge you need to succeed.</p>
      <hr style="margin: 32px 0; border: 0; border-top: 1px solid #e5e7eb;" />
      <p style="font-weight: bold; font-style: italic; margin: 24px; font-size: 1.1em; color: #1f2937;">
        With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable.
      </p>
      <hr style="margin: 32px 0; border: 0; border-top: 1px solid #e5e7eb;" />
      <p>Strength training is more than just lifting weights; it's about movement efficiency and building a resilient body.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&auto=format&fit=crop",
    date: "2024-01-01T00:00:00.000Z",
  },
  {
    _id: "2",
    title: "The Future of Web Development",
    slug: "future-of-web-development",
    body: "Exploring the latest trends in frontend and backend technologies.",
    contentHtml: `
      <p>Web development is evolving at a rapid pace. From server-side rendering to static site generation, the tools we use are becoming more powerful. Frameworks like Next.js are leading the charge, offering developers the ability to build high-performance applications with ease.</p>
      <p>In this post, we'll dive deep into the ecosystem and see what the future holds for web developers. Key trends include Server Components, Edge Computing, and AI-driven Development.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000&auto=format&fit=crop",
    date: "2024-01-05T00:00:00.000Z",
  },
  {
    _id: "3",
    title: "Traveling Japan on a Budget",
    slug: "traveling-japan-budget",
    body: "How to see the sights without breaking the bank.",
    contentHtml: `
      <p>Japan is often seen as an expensive destination, but it doesn't have to be. With careful planning, you can experience the culture and beauty of Japan on a budget.</p>
      <p>Don't miss out on the rail pass, which offers unlimited travel on JR lines for a fixed price. It is essential for inter-city travel.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&auto=format&fit=crop",
    date: "2024-01-10T00:00:00.000Z",
  },
  {
    _id: "4",
    title: "Healthy 30-Minute Meals",
    slug: "healthy-30-minute-meals",
    body: "Quick and nutritious recipes for busy weeknights.",
    contentHtml: `
      <p>Eating healthy doesn't mean spending hours in the kitchen. These 30-minute meals are packed with nutrients and flavor. Try our quinoa salad with roasted vegetables or the pan-seared salmon with asparagus.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1000&auto=format&fit=crop",
    date: "2024-01-15T00:00:00.000Z",
  },
  {
    _id: "5",
    title: "Mastering Photography Basics",
    slug: "mastering-photography-basics",
    body: "Understanding aperture, shutter speed, and ISO.",
    contentHtml: `
      <p>Photography is an art form that requires a good understanding of light and composition. The exposure triangle is the foundation of every good photo.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1000&auto=format&fit=crop",
    date: "2024-01-20T00:00:00.000Z",
  },
  {
    _id: "6",
    title: "The Minimalist Lifestyle",
    slug: "minimalist-lifestyle",
    body: "Living with less to find more peace and clarity.",
    contentHtml: `
      <p>Minimalism is more than just decluttering your home. It's about prioritizing experiences over possessions. By simplifying your life, you can focus on what truly matters to you.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1000&auto=format&fit=crop",
    date: "2024-01-25T00:00:00.000Z",
  },
  {
    _id: "7",
    title: "Effective Remote Work Strategies",
    slug: "remote-work-strategies",
    body: "Tips for staying productive and maintaining work-life balance from home.",
    contentHtml: `
      <p>Remote work offers flexibility, but it also comes with its own set of challenges. Staying disciplined is key. Create a dedicated workspace, set regular hours, and communicate effectively with your team.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1000&auto=format&fit=crop",
    date: "2024-01-28T00:00:00.000Z",
  },
];
