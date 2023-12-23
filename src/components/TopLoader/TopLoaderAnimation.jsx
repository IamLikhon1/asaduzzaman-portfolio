import LoadingBar from "react-top-loading-bar";

const TopLoaderAnimation = ({progress,setProgress}) => {
    
    return (
        <LoadingBar
        color='#FFA500'
        progress={progress}
        height={4}
        onLoaderFinished={() => setProgress(0)}
      />
    );
};

export default TopLoaderAnimation;