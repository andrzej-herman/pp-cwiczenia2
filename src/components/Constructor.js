import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Breadcrumb, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function Constructor() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/constructor">Konstruktor klasy</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Konstruktor klasy</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Konstruktor klasy to specjalna metoda, którą posiada każda klasa
                niestatyczna w języku C#. Domyślnie każda klasa posiada tzw.
                pusty konstruktor. Jego składnia wygląda nastepująco:
              </p>

              <code>
                public class Produkt <br />
                {"{"} <br />
                &nbsp;&nbsp;&nbsp;public Produkt()
                <br />
                &nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;{"}"}
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;// właściwości i metody klasy Produkt
                <br />
                {"}"}
              </code>

              <p style={{ marginTop: 20 }}>
                Czyli piszemy słówko public, następnie nazwę klasy, nawiasy
                okrągłe (jeżelio konstruktor nie zawiera żadnych argumentów) i
                dwa nawiasy klamrowe, w których możemy umieścić kod (o ile nie
                jest to pusty konstruktor.) Do czego służy konstruktor ? Aby
                zrozumieć odpowiedż na to pytanie, trzeba wiedzieć jedną
                podstawową rzecz:
              </p>
              <Alert variant="success">
                Konstruktor klasy jest wywoływany w momencie tworzenia nowej
                instancji (egzemplarza) danej klasy. Czyli w momencie gdy
                napiszę sobie: <strong>Product p = new Product()</strong>
              </Alert>
              <p style={{ marginTop: 20 }}>
                Oczywiście wywołanie pustego konstruktora nic nam nie da.
                Natomiast jeżeli w ciele konstruktora (między nawiasami
                klamrowymi) napiszemy jakiś kod, to wówczas zostanie on wykonany
                na samym początku cyklu życia naszego egzemplarza p klasy
                Produkt. Właśnie dlatego przydaje się konstruktor klasy. Dzięki
                niemu możemy już na początku cyklu życia naszej instancji klasy
                nadać jej np. jakieś wartości właściwości lub wywołać jakieś
                metody tej klasy. Ponadto konstruktory - ponieważ są metodami -
                mogą przyjmować parametry. Spójrzmy na poniższy przykład także
                klasy Produkt:
              </p>
              <code>
                public class Produkt <br />
                {"{"} <br />
                &nbsp;&nbsp;&nbsp;public Produkt()
                <br />
                &nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KosztTransportu = 9.99;
                <br />
                &nbsp;&nbsp;&nbsp;{"}"}
                <br /> <br />
                &nbsp;&nbsp;&nbsp;public Produkt(string typProduktu)
                <br />
                &nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TypProduktu = typProduktu;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UstawkosztTransportu();
                <br />
                &nbsp;&nbsp;&nbsp;{"}"}
                <br />
                <br />
                &nbsp;&nbsp;&nbsp; {`public string TypProduktu { get; set; }`}
                <br />
                &nbsp;&nbsp;&nbsp;{" "}
                {`public decimal KosztTransportu { get; set; }`}
                <br /> <br />
                &nbsp;&nbsp;&nbsp; {`public void UstawKosztTransportu()`}
                <br />
                &nbsp;&nbsp;&nbsp; {"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (TypProduktu == "odzież")
                KosztTransportu = 14.99;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else KosztTransportu =
                11.99;
                <br />
                &nbsp;&nbsp;&nbsp; {"}"}
                <br />
                {"}"}
              </code>
              <p style={{ marginTop: 20 }}>
                Jakie wnioski płyną z analizy powyższego kodu? Po pierwsze:
                klasa może posiadać kilka konstruktorów (wszystko zależy od tego
                co chceny uzyskać). Warunek jest jednak taki, że muszą to być
                różne konstruktory. Muszą różnić się argumentami, które
                przekazujemy do konstruktora. Zauważmy, że nasza klasa Produkt
                posiada dwa konstruktory. Do pierwszego nie przekazujemy żadnych
                argumentów (w nawiasach okrągłych). Ustawiamy w nim na sztywno
                właściwość tej klasy o nazwie KosztTransportu na wartość 9.99.
                Oznacza to, że w momencie tworzenia jakiegokolwiek egzemplarza
                naszego produktu - czyli np:{" "}
                <strong>Produkt produkt1 = new Produkt()</strong> egzemplarz
                produkt1 już na starcie swojego życia będzię miał ustawiony
                koszt transportu na wartość 9.99 PLN, natomiast nie będzie miał
                ustawionej właściwości TypProduktu - która - do czasu jak jej
                nie ustawimy będzie miała wartość null (ponieważ jest to
                string.)
              </p>
              <p style={{ marginTop: 20 }}>
                Natomiast, jeżeli z przyczyn leżących po stronie logiki
                biznesowej naszej aplikacji chcemy uzależnić koszt transportu
                produktu od jego typu, wówczas powołamy do życia inny egzemplarz
                naszego produktu wywołując drugi konstruktor poprzez instrukcję:{" "}
                <strong>Produkt produkt2 = new Produkt("obuwie")</strong> Proszę
                zauażyć, że wówczas już na starcie życia produktu2 ustawiamy
                jego typ na "obuwie" oraz - poprzez metodę
                UstawKosztTransportu(), jego KosztTransportu na wartość 11,99.
                Gdybyśmy potrzebowali trzeciego produktu - dajmy na to:{" "}
                <strong>Produkt produkt3 = new Produkt("odzież")</strong>
                {` `}to wówczas produkt trzeci jest z kategorii odzież i ma
                ustawiony od razu Koszt transportu na wartość 14,99 PLN.
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Constructor;
