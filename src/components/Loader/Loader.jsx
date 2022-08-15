import { Triangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Triangle
      height="40"
      width="40"
      radius="9"
      color="#e9967a"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        dispay: 'flex',
        justifyContent: 'center',
        padding: 20,
      }}
      wrapperClass
    />
  );
};

export { Loader };
