function ContactCard({ name, content, fontawosomeclass, disableAnchor, link }) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <a
        href={link || content}
        style={{
          pointerEvents: disableAnchor ? "none" : "auto",
          textDecoration: "none",
        }}
        className="card mb-3 p-3"
      >
        <div className="row g-0 align-items-center">
          <div className="col-md-4">
            <i
              className={`${fontawosomeclass}  text-center text-white`}
              style={{ fontSize: "68px" }}
            ></i>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-white">{name}</h5>
              <p className="card-text">{content}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

ContactCard.defaultProps = {
  name: "Email",
  content: "asvbsdvb@iasvb.com",
  fontawosomeclass: "fa-regular fa-envelope-open",
  disableAnchor: true,
};

export default ContactCard;
