const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/Guilherme415"
            target="_blank"
            rel="noreferrer"
          >
            Guilherme Daniel
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Teste Quero2Pay</strong>
            <br />
            Site feito para um teste para Quero2Pay:{" "}
            <a
              href="https://www.linkedin.com/company/quero2pay/"
              target="_blank"
              rel="noreferrer"
            >
              @Quero2Pay
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
