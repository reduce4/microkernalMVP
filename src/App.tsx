import useTest from "./hooks/useTest";

export default function () {
  useTest();
  return (
    <>
      <div className="box">
        <div className="left" id="left">
          <h3>左侧block</h3>
        </div>
        <div className="canvas">
          <div className="top" id="top">
            <h3>顶栏block</h3>
          </div>
          <div
            id="operate"
            style={{
              position: "relative",
              left: 100,
              top: 100,
              width: 1000,
              height: 200,
              border: "1px solid black",
            }}
          >
            操作div的block
          </div>
        </div>
      </div>
    </>
  );
}
