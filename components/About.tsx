"use client";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          With 3+ years of experience as a frontend developer, I specialize in
          creating responsive, user-friendly web applications using React and
          Next.js. I have worked on various projects, including tech platforms,
          CRM systems, and e-commerce websites, focusing on building efficient,
          scalable, and visually appealing interfaces that enhance the user
          experience.
        </p>
        {/* <p className="text-start  text-muted-foreground lg:px-6">
          In parallel, my path took an exciting turn into the Web3 space,
          co-founding{" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://swoop.exchange"
            target="blank"
            rel="noopener noreferrer"
          >
            Swoop Exchange
          </a>{" "}
          two years ago, in a mission to tackle the fragmentation of liquidity
          and protocols and simplify the Decentralized Finance onboarding
          process for the next billion users. Our platform has quickly reached
          critical milestones, boasting a trading volume of millions USD and
          attracting over 4,000 monthly active users.
        </p>
        */}
        <p className="text-start text-muted-foreground lg:px-6 mt-[15px]">
          Main Fields: Information Systems, CRM , LMC ,ERP, Booking
          System, Startups, E-commerce, Outsourcing.
        </p> 
         <p className="text-start text-muted-foreground lg:px-6 mt-[15px]">
       If you are looking for a skilled Frontend Developer, you are at the right place! 
Let's hop in a quick video call!
        </p> 
      </div>
    </section>
  );
}
