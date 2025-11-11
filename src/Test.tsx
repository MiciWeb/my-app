import "./App.scss";
import image from "./assets/image.png";

function Test() {
  return (
    <>
      <h2>Coucou, bienvenue sur le site de Mici pour:</h2>
      <h1>
        1 <br />
        Apprendre le codage
      </h1>
      <img
        className='my-image'
        src='https://geekcommunicant.com/blog/wp-content/uploads/logo_html5.png'
        jsaction=''
        class='sFlh5c FyHeAf iPVvYb'
        alt='Comment marche le Web ? - Le Geek Communicant'
        jsname='kn3ccd'
      ></img>
      <h2>Comprendre le html</h2>
      <p>C'est le squelette d'une page web.</p>
      <p>Il y'a des balises HTML qui définissent la structure de la page.</p>
      <p>Exemples de balises HTML :</p>
      <pre>
        <code>
          <h1>{"<h1>Titre principal = header 1</h1>"}</h1>
          <img
            src='https://cdn.kastatic.org/ka-perseus-images/a88dceb91dbddc6f1c031bf92bedb90afca3ff05.png'
            jsaction=''
            class='sFlh5c FyHeAf iPVvYb'
            jsname='kn3ccd'
          ></img>
          <h1>
            Les balises h1 {"<h1></h1>"}
            se mette entre le contenu
          </h1>
          {"\n"}
          {"<p>Un paragraphe</p>"}
          {"\n"}
        </code>
      </pre>

      <h3>Comprendre le css</h3>
      <p>Le CSS est utilisé pour styliser une page web.</p>
      <div className='container'>
        Le css met la bordure en rouge et le texte en bleu.
      </div>
      <br />
      <img src={image} alt="Description de l'image" />

      <h3>Comprendre le JavaScript</h3>
      <p>
        JavaScript est un langage de programmation qui permet de rendre une page
        web interactive.
        <br />
        Je ne mettrais pas d'exemple de code JavaScript car c'est assez complexe
        a comprendre.
      </p>

      <h3>Résumé</h3>
      <img
        src='https://media.licdn.com/dms/image/v2/D4D12AQF7lMBGIwHUCw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1680955326122?e=2147483647&amp;v=beta&amp;t=Xw4-FPrxT3GWL1tuuWhjE3Y-hKRo_1t-KRclbVaa5GY'
        jsaction=''
        class='sFlh5c FyHeAf iPVvYb'
        alt='Les éléments constitutifs du développement Web : HTML, CSS et JavaScript'
        jsname='kn3ccd'
      ></img>
    </>
  );
}

export default Test;
