"use strict";

const e = React.createElement;

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frontends: [
        { id: 1, value: "Javascript", xp: 1.6 },
        { id: 2, value: "Css", xp: 2 },
        { id: 3, value: "Javascript", xp: 2 },
        { id: 4, value: "React", xp: 0.6 },
      ],
      backends: [
        { id: 1, value: "PHP", xp: 0.6 },
        { id: 2, value: "Nodejs", xp: 1.5 },
        { id: 3, value: "Java EE", xp: 1 },
        { id: 4, value: "Python", xp: 0.4 },
      ],
    };
  }

  test = () => {
    <div>test</div>;
  };

  render() {
    const { frontends, backends } = this.state;

    return (
      <div className="skills__container container grid">
        <div className="skills__content skills__open">
          <div className="skills__header">
            <i className="uil uil-brackets-curly skills__icon"></i>
            <h1 className="skills__titles">Développeur Frontend</h1>
            <i className="uil uil-angle-down skills-arrow"></i>
          </div>

          <div className="skills__list grid">
            <div className="years skills__subtitle">
              <span className="span">Années d'expérience</span>
              <span className="span">1 an</span>
              <span className="span">2 ans</span>
            </div>

            {frontends.map((frontend) => {
              const xpYears = 2;
              const progressBar = (frontend.xp / xpYears) * 100 + "%";

              return (
                <div key={frontend.id} className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">{frontend.value}</h3>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: progressBar }}
                    ></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="skills__content skills__open">
          <div className="skills__header">
            <i className="uil uil-brackets-curly skills__icon"></i>
            <h1 className="skills__titles">Développeur Backend</h1>
            <i className="uil uil-angle-down skills-arrow"></i>
          </div>

          <div className="skills__list grid">
            <div className="years skills__subtitle">
              <span className="span">Années d'expérience</span>
              <span className="span">1 an</span>
              <span className="span">2 ans</span>
            </div>

            {backends.map((backend) => {
              const xpYears = 2;
              const progressBar = (backend.xp / xpYears) * 100 + "%";

              return (
                <div key={backend.id} className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">{backend.value}</h3>
                  </div>
                  <div className="skills__bar">
                    <span
                      className="skills__percentage"
                      style={{ width: progressBar }}
                    ></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector("#skills_container");
ReactDOM.render(e(Skills), domContainer);
