import { useCallback, useEffect, useState } from "react";
import { colors } from "../common/common";

const Carousel = ({ slides, styles }) => {
  // const { slides, styles} = props;
  const [cur, setCur] = useState(0);

  const len = slides.length;

  const leftHandle = () => {
    setCur(cur - 1 < 0 ? len - 1 : cur - 1);
  };

  const rightHandle = useCallback(() => {
    setCur(cur + 1 > len - 1 ? 0 : cur + 1);
  }, [cur, len]);

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     rightHandle();
  //   }, 5000);
  //   return () => clearTimeout(interval);
  // }, [rightHandle]);

  const SlideItem = ({ slide }) => {
    return (
      <div class="wrapper">
        <div class="box box1" style={styles}>
          <img src={slide.img} alt="a balloon" class="responsive" />
        </div>
      </div>
    );
  };

  const Pagination = () => {
    <div style={{ width: "20px", height: "20px", backgroundColor: "green" }}>
      dik
    </div>;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {slides.map((slide, index) => {
          return (
            <div style={{}} key={index}>
              {cur === index && <SlideItem slide={slide} />}
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        {slides.map((slides, index) => {
          return (
            <button
              style={{ backgroundColor: "transparent", border: "none" }}
              onClick={() => {
                index == 0 ? leftHandle() : rightHandle();
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "5px",
                  backgroundColor:
                    index == 0 ? colors.primaryColor : colors.secondaryColor,
                }}
              ></div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
