import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <header className="link-home-parent">
      <img
        className="link-home"
        loading="eager"
        alt=""
        src="/link--home@2x.png"
      />
      <div className="link5">
        <div className="section1">
          <div className="button-use">Use Cases</div>
          <img className="button-svg" alt="" src="/button--svg.svg" />
        </div>
        <div className="section2">
          <div className="button-features">Features</div>
          <img className="button-svg1" alt="" src="/button--svg-1.svg" />
        </div>
        <div className="section3">
          <div className="button-resources">Resources</div>
          <img className="button-svg2" alt="" src="/button--svg-2.svg" />
        </div>
        <div className="pricing">Pricing</div>
      </div>
      <div className="start">
        <div className="contact-sales">Contact Sales</div>
        <div className="link6">
          <div className="get-started">Get started</div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
