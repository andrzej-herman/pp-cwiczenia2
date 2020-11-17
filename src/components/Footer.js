import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Podstawy programowania</h6>
            <p className="text-justify">
              Laboratoria z przedmiotu Podstawy programowania dla pierwszego
              semestru zaocznych studiów pierwszego stopnia na kierunku
              Informatyka w Społecznej Akademii Nauk w Łodzi. Zajęcia odbywają
              się w niedziele (zjazdy B) w godzinach 9.45 - 20.15 (w zależności
              od grupy).
            </p>
          </div>
          <div className="col-xs-6 col-md-3" />
          <div className="col-xs-6 col-md-3">
            <h6>BARDZO WAŻNE LINKI</h6>
            <ul className="footer-links">
              <li>
                <a
                  href="https://github.com/andrzej-herman/quiz-wszystkie_grupy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repozytorium naszego Quizu na Githubie
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/watch?v=qVMX17uoHbk&list=PL6aekdNhY7DAeU-2LEGBDXls60Yy-Ubbu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Kurs C# (YouTube)
                </a>
              </li>
              <li>
                <a
                  href="https://helion.pl/ksiazki/c-praktyczny-kurs-wydanie-iii-marcin-lis,cshpk3.htm#format/d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Książka o programowaniu w C#
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=D6EI7EbEN4Q&list=PLjHmWifVUNMKIGHmaGPVqSD-L6i1Zw-MH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Kurs Git (YouTube)
                </a>
              </li>
              <li>
                <a
                  href="https://www.megaksiazki.pl/historia-swiata/1023215-czysty-kod-podrecznik-dobrego-programisty.html?utm_si=dEh1ckV0aDRyTVRBeU16SXhOVFExTGpjeU5EQXdNQT09&adtype=%7Badtype%7D&product_id=%7Bproduct_id%7D&product_partition_id=%7Bproduct_partition_id%7D&store_code=%7Bstore_code%7D&matchtype=&network=g&device=c&creative=86980132997&keyword=&placement=&param1=&param2=&adposition=&campaignid=311701277&adgroupid=25605646997&feeditemid=&targetid=pla-294682000766&loc_physical_ms=9067400&loc_interest_ms=&searchtype=search&gclid=Cj0KCQiAhs79BRD0ARIsAC6XpaVObnr74PINTaymWQqnm-H0DCF4l-fMCxHo8syFiieFE-JGiKCtFoEaApeZEALw_wcB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Książka "Czysty kod - podręcznik dobrego programisty"
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Strona wykonana w technologii{" "}
              <a
                href="https://pl.reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>{" "}
              &copy; Andrzej Herman - Społeczna Akademia Nauk w Łodzi
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="twitter"
                  href="https://github.com/andrzej-herman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" />
                </a>
              </li>
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/andrzejherman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
