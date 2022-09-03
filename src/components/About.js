import React, { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "#fff",
    background: "#222431",
  });
  
  const [btn, setBtn] = useState('Enable Light Mode')

  const toggleStyle = () => {
    if (myStyle.color === "#fff") {
      setMyStyle({
        color: "#222431",
        background: "#fff",
      });
      setBtn('Enable Dark Mode')
    } else {
      setMyStyle({
        color: "#fff",
        background: "#222431",
      });
      setBtn('Enable Light Mode')
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="card" style={myStyle}>
          <h5 className="card-header">Text Utilities</h5>
          <div className="card-body">
            <h2 className="card-title">About the page</h2>
            <p className="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias ullam eligendi ipsa minus quidem iusto cupiditate sit
              dicta vel, ex, ea, harum voluptates? Laudantium, quasi maiores
              libero distinctio mollitia enim ad hic laboriosam cumque quod
              optio eos at tenetur temporibus?Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptas fugit in molestiae
              consequuntur, facilis, ipsam sed ut vitae vero porro, facere
              ratione dolor! Laborum vero sunt dignissimos, aliquam repellat
              dolor nobis labore blanditiis praesentium enim, laboriosam cumque
              quis sit magnam eum repudiandae, explicabo temporibus eius
              quibusdam. Ea inventore quidem est non nesciunt dolorem voluptatem
              corporis aspernatur itaque ipsam, voluptatum quod.
            </p>
            <button className="btn btn-primary" onClick={toggleStyle}>
              {btn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
