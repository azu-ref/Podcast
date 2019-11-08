export default class extends React.Component {
    render() {
      return <>
        <h1>esto es el about</h1>
        <p>about about about</p>
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
      </>
    }
  }