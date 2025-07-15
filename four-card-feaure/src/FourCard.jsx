import Tbuilder from "./assets/icon-team-builder.svg";
import Calc from "./assets/icon-calculator.svg";
import Sup from "./assets/icon-supervisor.svg";
import Karma from "./assets/icon-karma.svg"

function FourCard(){

const features = [
    {
      title: 'Supervisor',
      description: 'Monitors activity to identify project roadblocks',
      borderColor: '#00c8c8',
    },
    {
      title: 'Team Builder',
      description: 'Scans our talent network to create the optimal team for your project',
      borderColor: '#f44336',
    },
    {
      title: 'Karma',
      description: 'Regularly evaluates our talent to ensure quality',
      borderColor: '#ff9800',
    },
    {
      title: 'Calculator',
      description: 'Uses data from past projects to provide better delivery estimates',
      borderColor: '#2196f3',
    },
  ];

    return(
        <>
            <div className="container">
                <h2 className="title">Reliable, efficient delivery</h2>
                <h1 className="subtitle">Powered by Technology</h1>
                <p className="description">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>

                <div className="card-grid">
                        <div className="card" style={{ borderTopColor: features[0].borderColor }}>
                            <h3>{features[0].title}</h3>
                            <p>{features[0].description}</p>
                            <span><img className="Supervisor-Image" src={Sup} alt="S-Image"/></span>
                        </div>

                        <div className="center-column">
                            <div className="card" style={{ borderTopColor: features[1].borderColor }}>
                                <h3>{features[1].title}</h3>
                                <p>{features[1].description}</p>
                                <span><img className="TBuilder-Image" src={Tbuilder} alt="t-builder"/></span>
                            </div>

                            <div className="card" style={{ borderTopColor: features[2].borderColor }}>
                                <h3>{features[2].title}</h3>
                                <p>{features[2].description}</p>
                                <span><img className="Karma-Image" src={Karma} alt="K-image"/></span>
                            </div>
                        </div>

                        <div className="card" style={{ borderTopColor: features[3].borderColor }}>
                            <h3>{features[3].title}</h3>
                            <p>{features[3].description}</p>
                            <span><img className="Calculator-Image" src={Calc} alt="t-builder"/></span>
                        </div>
                </div>
            </div>
        </>
    )
}

export default FourCard


        
      