export default function About() {
  return (
    <div className="w-screen h-screen p-24 flex flex-col">
      <h2 className="text-white text-5xl p-4">About</h2>
      <div>
        <p className="w-[50%] p-4 text-2xl text-white tracking-wide">
          My programming adventure, which started in high school, continues by
          improving myself and learning new technologies. During my development
          process, I learn new things and discover how to use them through the
          projects I work on. My goal is to constantly research, learn, code,
          and improve myself, as well as take the projects I work on to the next
          level.
        </p>
      </div>
      <div className="w-[85%] mt-16 p-4 self-end flex gap-4">
        <div className="w-[33%] p-5">
          <h2 className="text-2xl">EXPERIENCE</h2>
          <p className="mt-4 text-white tracking-wide">
            With nearly 3 years of experience in web development, I have built
            over 4 web projects.
          </p>
        </div>
        <div className="w-[33%] p-5">
          <h2 className="text-2xl">SKILLS</h2>
          <p className="mt-4 text-white tracking-wide">
            I use HTML, CSS, and JavaScript to create web projects. I develop
            user interfaces using React and build mobile applications using
            React Native. With Tailwind CSS, I apply styles quickly and
            flexibly. I manage my projects with Git for version control.
          </p>
        </div>
        <div className="w-[33%] p-5">
          <h2 className="text-2xl">SERVICES</h2>
          <p className="mt-4 text-white tracking-wide">
            Whether you&apos;re a design agency, creative studio or just an
            individual designer I am here to help you transform your designs
            into an immersive website.
          </p>
        </div>
      </div>
    </div>
  );
}
