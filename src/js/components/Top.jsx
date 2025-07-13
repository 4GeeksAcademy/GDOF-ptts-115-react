
export const Top = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light " >
      <div className="container-fluid" >
        <a className="navbar-brand text-light" href="#" ><i className="fa-brands fa-react"></i></a >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon" ></span >
      </button >
      <div className="collapse navbar-collapse" id="navbarNav" >
        <ul className="navbar-nav" >
          <li className="nav-item" >
            <a className="nav-link active text-light" aria-current="page" href = "https://es.react.dev/learn/installation" > Download</a >
        </li >
        <li className="nav-item" >
          <a className="nav-link text-light" href="https://es.react.dev/blog" > Blog</a >
        </li >
        <li className="nav-item" >
          <a className="nav-link text-light" href="https://es.react.dev/community" > Community</a >
        </li >
      </ul >
    </div >
      </div >
    </nav >
  );
};

