import ContactCard from "../components/ContactCard";

function ResumePage({
  email,
  phone,
  github,
  instagram,
  githubLink,
  mailto,
  instagramLink,
}) {
  return (
    <div
      className="py-3 text-center bgimg2"
      style={{
        backgroundColor: "lightgreen",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <h1 className="display-1 textgr3 my-5">Contacts</h1>
      <div className="container w-100">
        <div className="row">
          <ContactCard
            name="Email"
            content={email}
            fontawosomeclass="fa-regular fa-envelope-open"
            disableAnchor={false}
            link={mailto}
          />
          <ContactCard
            name="Phone"
            content={phone}
            fontawosomeclass="fa-solid fa-phone"
          />
          <ContactCard
            name="GitHub"
            content={github}
            fontawosomeclass="fa-brands fa-github"
            disableAnchor={false}
            link={githubLink}
          />
          <ContactCard
            name="Instagram"
            content={instagram}
            fontawosomeclass="fa-brands fa-instagram"
            disableAnchor={false}
            link={instagramLink}
          />
        </div>
        {}
      </div>
    </div>
  );
}

ResumePage.defaultProps = {
  email: "gsnikhilesh.utukuri@gmail.com",
  phone: "+91 9848223688",
  github: "github.com/ugsnikhilesh",
  instagram: "nikhilesh5184",
  githubLink: "https://www.github.com/ugsnikhilesh",
  mailto: `mailto:gsnikhilesh.utukuri@gmail.com`,
  instagramLink: "https://www.instagram.com/nikhilesh5184/",
};

export default ResumePage;
