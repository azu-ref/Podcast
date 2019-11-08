export default class extends React.Component {
  render() {
    return <>
      <h1>Hola Fernando desde Next.js</h1>
      <p> quien como tu? que dia a dia esperas que llegue</p>
      <img src="/static/platzi.png" alt="Platzi"/>

      <style jsx>{`
        h1 {
          color: red;
        }

        p {
          color: green;
        }

        img {
          max-width: 50%;
          display: block;
          margin: 0 auto;
        }
      `}</style>

      {/* esto no se debe hacer */}
      <style jsx global>{` 
        body {
          background: white;
        }
      `}</style>
    </>
  }
}