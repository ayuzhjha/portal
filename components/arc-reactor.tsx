'use client';

export function ArcReactor() {
  return (
    <>
      <style>{`
        .reactor-container {
          width: 210px;
          height: 210px;
          margin: auto;
          margin-top: 2rem;
          position: relative;
          border-radius: 50%;
          background-color: #384c50;
          border: 1px solid rgb(18, 20, 20);
          box-shadow: 0px 0px 32px 8px rgb(18, 20, 20), 0px 0px 4px 1px rgb(18, 20, 20) inset;
        }
        .reactor-container-inner {
          height: 166px;
          width: 166px;
          background-color: rgb(22, 26, 27);
          box-shadow: 0px 0px 4px 1px #52FEFE;
        }
        .arc-circle {
          border-radius: 50%;
        }
        .abs-center {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;
        }
        .core-inner {
          width: 56px;
          height: 56px;
          border: 4px solid #1B4E5F;
          background-color: #073c4b;
          box-shadow: 0px 0px 7px 5px #52FEFE, 0px 0px 10px 10px #52FEFE inset;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .jarvis-label {
          font-family: monospace;
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.5px;
          color: #52FEFE;
          text-shadow: 0 0 6px #52FEFE;
          text-align: center;
          line-height: 1.4;
          pointer-events: none;
          user-select: none;
        }
        .core-outer {
          width: 84px;
          height: 84px;
          border: 1px solid #52FEFE;
          background-color: #FFFFFF;
          box-shadow: 0px 0px 2px 1px #52FEFE, 0px 0px 10px 5px #52FEFE inset;
        }
        .core-wrapper {
          width: 126px;
          height: 126px;
          background-color: #073c4b;
          box-shadow: 0px 0px 5px 4px #52FEFE, 0px 0px 6px 2px #52FEFE inset;
        }
        .tunnel {
          width: 154px;
          height: 154px;
          background-color: #FFFFFF;
          box-shadow: 0px 0px 5px 1px #52FEFE, 0px 0px 5px 4px #52FEFE inset;
        }
        .coil-container {
          position: relative;
          width: 100%;
          height: 100%;
          animation: 3s infinite linear reactor-anim;
        }
        .coil {
          position: absolute;
          width: 21px;
          height: 14px;
          top: calc(50% - 77px);
          left: calc(50% - 10.5px);
          transform-origin: 10.5px 77px;
          background-color: #073c4b;
          box-shadow: 0px 0px 5px #52FEFE inset;
        }
        .coil-1 { transform: rotate(0deg); }
        .coil-2 { transform: rotate(45deg); }
        .coil-3 { transform: rotate(90deg); }
        .coil-4 { transform: rotate(135deg); }
        .coil-5 { transform: rotate(180deg); }
        .coil-6 { transform: rotate(225deg); }
        .coil-7 { transform: rotate(270deg); }
        .coil-8 { transform: rotate(315deg); }
        @keyframes reactor-anim {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div className="reactor-container">
        <div className="reactor-container-inner arc-circle abs-center"></div>
        <div className="tunnel arc-circle abs-center"></div>
        <div className="core-wrapper arc-circle abs-center"></div>
        <div className="core-outer arc-circle abs-center"></div>
        <div className="core-inner arc-circle abs-center">
          <span className="jarvis-label">J.A.R.V.I.S.</span>
        </div>
        <div className="coil-container">
          <div className="coil coil-1"></div>
          <div className="coil coil-2"></div>
          <div className="coil coil-3"></div>
          <div className="coil coil-4"></div>
          <div className="coil coil-5"></div>
          <div className="coil coil-6"></div>
          <div className="coil coil-7"></div>
          <div className="coil coil-8"></div>
        </div>
      </div>
    </>
  );
}
