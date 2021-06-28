type Props = {
  height: number | undefined;
  width: number | undefined;
};
const useDimension = (): Props => {
  let height;
  let width;
  
  if (typeof window !== "undefined") {
    height = window.innerHeight;
    width = window.innerWidth;
  }

  return {
    height,
    width,
  };
};

export default useDimension;
