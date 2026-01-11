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
      <div style="font-family:Arial, sans-serif; line-height:1.8; color:#1f2937;">
        <p>
          Alex’s fitness journey demonstrates how dedication, consistency, and smart training can transform
          both physical health and mental strength. Strength training forms the foundation of this journey,
          helping build muscle, improve endurance, and enhance overall performance.
        </p>

        <p>
          Rather than focusing only on lifting heavier weights, Alex emphasizes proper form, mobility, and
          recovery. Compound exercises such as squats, deadlifts, and presses play a critical role in building
          functional strength that supports daily movement.
        </p>

        <p>
          Fitness is also deeply connected to mindset. Regular training builds discipline, confidence, and
          resilience. Alex encourages setting realistic goals, maintaining balanced routines, and focusing on
          long-term progress rather than short-term results.
        </p>

        <p>
          This journey highlights that true fitness success comes from commitment, patience, and continuous
          improvement—one workout at a time.
        </p>

         <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p>
      </div>
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
      <div style="font-family:Arial, sans-serif; line-height:1.8; color:#1f2937;">
        <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p>

         <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p>

         <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p>
      </div>
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
      <div style="font-family:Arial, sans-serif; line-height:1.8; color:#1f2937;">
        <p>
          Traveling Japan on a budget is entirely possible with careful planning and smart choices. Despite
          its reputation for being expensive, Japan offers many affordable ways to experience its culture,
          food, and history.
        </p>

        <p>
          Budget accommodations such as hostels, capsule hotels, and guesthouses help reduce costs while
          still providing comfort. Local food stalls and convenience stores offer delicious meals at
          reasonable prices.
        </p>

        <p>
          Transportation passes like the JR Rail Pass make intercity travel affordable and efficient.
          Exploring neighborhoods on foot also helps travelers save money while discovering hidden gems.
        </p>

        <p>
          With mindful spending, Japan becomes an unforgettable destination without straining your budget.
        </p>

         <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p> <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p>
      </div>
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
      <div style="font-family:Arial, sans-serif; line-height:1.8; color:#1f2937;">
        <p>
          Healthy eating does not require hours in the kitchen. With simple planning and fresh ingredients,
          nutritious meals can be prepared in just 30 minutes.
        </p>

         <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p> <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p>

        <p>
          These meals focus on balanced nutrition, combining lean proteins, vegetables, and whole grains to
          fuel your body without sacrificing taste.
        </p>

        <p>
          Quick recipes make it easier to maintain healthy habits even on busy weeknights, supporting
          long-term wellness and energy.
        </p>

        <p>
          Cooking efficiently helps turn healthy eating into a sustainable lifestyle rather than a burden.
        </p>
      </div>
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
      <div style="font-family:Arial, sans-serif; line-height:1.8; color:#1f2937;">
        <p>
          Photography begins with understanding light. Mastering the basics allows photographers to capture
          clear, balanced, and expressive images.
        </p>

        <p>
          Aperture controls depth of field, shutter speed manages motion, and ISO adjusts light sensitivity.
          Together, these elements form the exposure triangle.
        </p>

         <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p> <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p>

        <p>
          Learning how these settings work together gives photographers creative control over every shot,
          regardless of environment or subject.
        </p>

        <p>
          A strong foundation in photography basics leads to more confident and consistent results.
        </p>
      </div>
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
      <div style="font-family:Arial, sans-serif; line-height:1.9; color:#1f2937;">
        <p>
          The minimalist lifestyle is a conscious approach to living that emphasizes simplicity, intention,
          and clarity. In a world filled with constant noise and consumption, minimalism offers a calmer,
          more purposeful alternative.
        </p>


         <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p> <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p>
        <p>
          Minimalism is not about deprivation or strict rules. It is about awareness—choosing what truly adds
          value to your life and letting go of what does not. This applies not only to physical possessions,
          but also to habits, commitments, and mental clutter.
        </p>

        <p>
          By simplifying physical spaces, people often experience reduced stress and improved focus.
          Organized environments encourage calm thinking and create room for creativity and reflection.
        </p>

        <p>
          Minimalism also extends to digital and emotional spaces. Reducing screen time, limiting
          notifications, and setting healthy boundaries can greatly improve mental well-being.
        </p>

        <p>
          Financially, minimalism encourages mindful spending and long-term stability. Instead of impulsive
          purchases, minimalists focus on quality, durability, and intentional ownership.
        </p>

        <p>
          Adopting a minimalist lifestyle is a gradual process. Small steps—decluttering one space or
          simplifying one routine—can lead to meaningful change over time.
        </p>

        <p>
          Ultimately, minimalism is about freedom. By removing excess, you create space for peace, purpose,
          and a deeper appreciation for everyday life.
        </p>
      </div>
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
      <div style="font-family:Arial, sans-serif; line-height:1.8; color:#1f2937;">
        <p>
          Remote work offers flexibility but requires structure and discipline to remain productive.
          Establishing a dedicated workspace helps separate professional and personal life.
        </p>

         <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p> <p>
          Web development continues to evolve as modern technologies reshape how applications are designed,
          built, and deployed. Developers are moving toward performance-first solutions that prioritize speed,
          scalability, and user experience.
        </p>

        <p>
          Frameworks supporting server-side rendering, edge computing, and component-based architecture are
          becoming industry standards. These tools help teams build faster applications while maintaining
          clean and maintainable codebases.
        </p>

        <p>
          Artificial intelligence is also changing development workflows. From code suggestions to automated
          testing, AI-powered tools increase productivity and reduce repetitive tasks.
        </p>

        <p>
          The future of web development lies in accessibility, performance optimization, and intelligent
          tooling that empowers developers to create inclusive digital experiences.
        </p>
        <p>
          Clear communication, time management, and goal setting are essential for maintaining efficiency
          when working remotely.
        </p>

        <p>
          Setting boundaries and taking regular breaks helps prevent burnout and supports long-term
          work-life balance.
        </p>

        <p>
          With the right strategies, remote work can be both productive and fulfilling.
        </p>
      </div>
    `,
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1000&auto=format&fit=crop",
    date: "2024-01-28T00:00:00.000Z",
  },
];
