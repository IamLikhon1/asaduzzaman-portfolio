import LoadingBar from "react-top-loading-bar";

const TopLoaderAnimation = ({progress,setProgress}) => {
    
    return (
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
    );
};

export default TopLoaderAnimation;